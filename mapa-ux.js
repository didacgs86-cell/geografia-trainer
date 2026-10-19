// ==========================================
// GEOTRAINER · UX COMÚN PARA MAPAS TÁCTILES
// Zoom, pan, pinch, doble toque y modo ampliado
// ==========================================

(() => {
  const controladores = new WeakMap();

  function parseViewBox(valor) {
    const n = String(valor || "0 0 1000 650").trim().split(/\s+/).map(Number);
    return { x:n[0]||0, y:n[1]||0, ancho:n[2]||1000, alto:n[3]||650 };
  }

  function limitar(v, base) {
    const maxX = base.x + base.ancho - v.ancho;
    const maxY = base.y + base.alto - v.alto;
    v.x = Math.max(base.x, Math.min(maxX, v.x));
    v.y = Math.max(base.y, Math.min(maxY, v.y));
  }

  function svgACliente(svg, x, y) {
    const p = svg.createSVGPoint();
    p.x = x; p.y = y;
    const m = svg.getScreenCTM();
    if (!m) return { x:0, y:0 };
    const r = p.matrixTransform(m);
    return { x:r.x, y:r.y };
  }

  function clienteASvg(svg, clientX, clientY) {
    const p = svg.createSVGPoint();
    p.x = clientX; p.y = clientY;
    const m = svg.getScreenCTM();
    if (!m) return { x:0, y:0 };
    const r = p.matrixTransform(m.inverse());
    return { x:r.x, y:r.y };
  }

  function pxASvg(svg, px) {
    const m = svg.getScreenCTM();
    if (!m) return px;
    const escalaX = Math.hypot(m.a, m.b) || 1;
    const escalaY = Math.hypot(m.c, m.d) || escalaX;
    const escala = (escalaX + escalaY) / 2;
    return px / escala;
  }

  function ajustarMarcadores(svg, selector, pxRadio) {
    if (!svg) return;
    const r = pxASvg(svg, pxRadio);
    svg.querySelectorAll(selector).forEach(el => el.setAttribute("r", String(r)));
  }

  function candidatosPunto(svg, clientX, clientY, puntos, maxPx = 30) {
    return puntos.map(p => {
      const c = svgACliente(svg, p.x, p.y);
      return { ...p, distancia: Math.hypot(c.x - clientX, c.y - clientY) };
    }).filter(p => p.distancia <= maxPx).sort((a,b) => a.distancia - b.distancia);
  }

  function resolverPunto(svg, clientX, clientY, puntos, opciones = {}) {
    const maxPx = opciones.maxPx ?? 30;
    const diferenciaAmbigua = opciones.diferenciaAmbigua ?? 12;
    const cerca = candidatosPunto(svg, clientX, clientY, puntos, maxPx);
    if (!cerca.length) return { id:null, ambiguo:false, candidatos:[] };
    const primero = cerca[0];
    const segundo = cerca[1];
    const ambiguo = !!segundo && (segundo.distancia - primero.distancia) < diferenciaAmbigua;
    return { id:primero.id, ambiguo, candidatos:cerca };
  }

  function toast(contenedor, texto) {
    if (!contenedor) return;
    let el = contenedor.querySelector(".mapa-ux-toast");
    if (!el) {
      el = document.createElement("div");
      el.className = "mapa-ux-toast";
      contenedor.appendChild(el);
    }
    el.textContent = texto;
    el.classList.add("visible");
    clearTimeout(el._gtTimer);
    el._gtTimer = setTimeout(() => el.classList.remove("visible"), 1300);
  }

  function crearControlador({
    svg,
    contenedor,
    maxZoom = 4.5,
    minZoom = 1,
    getPrompt = () => "",
    marcadorSelector = null,
    marcadorRadioPx = 5,
    mostrarToolbar = true,
    permitirFocus = true
  }) {
    if (!svg || !contenedor) return null;
    if (controladores.has(svg)) return controladores.get(svg);

    const base = parseViewBox(svg.getAttribute("viewBox"));
    let vista = { ...base };
    const punteros = new Map();
    let inicioArrastre = null;
    let distanciaPinza = null;
    let movimiento = false;
    let suprimirClick = false;
    let ultimoToque = 0;
    let focus = false;
    let scrollY = 0;

    function aplicar() {
      limitar(vista, base);
      svg.setAttribute("viewBox", `${vista.x} ${vista.y} ${vista.ancho} ${vista.alto}`);
      if (marcadorSelector) {
        requestAnimationFrame(() => ajustarMarcadores(svg, marcadorSelector, marcadorRadioPx));
      }
    }

    function nivelZoom() {
      return base.ancho / vista.ancho;
    }

    function zoomEnCliente(factor, clientX = null, clientY = null) {
      let centro;
      if (clientX == null || clientY == null) {
        centro = { x:vista.x + vista.ancho/2, y:vista.y + vista.alto/2 };
      } else {
        centro = clienteASvg(svg, clientX, clientY);
      }

      const nuevoAncho = Math.max(base.ancho / maxZoom, Math.min(base.ancho / minZoom, vista.ancho / factor));
      const nuevoAlto = nuevoAncho * base.alto / base.ancho;
      const rx = (centro.x - vista.x) / vista.ancho;
      const ry = (centro.y - vista.y) / vista.alto;
      vista = {
        x: centro.x - rx * nuevoAncho,
        y: centro.y - ry * nuevoAlto,
        ancho: nuevoAncho,
        alto: nuevoAlto
      };
      aplicar();
    }

    function reset() {
      vista = { ...base };
      aplicar();
    }

    function distanciaActual() {
      const pts = [...punteros.values()];
      if (pts.length < 2) return null;
      return Math.hypot(pts[0].x - pts[1].x, pts[0].y - pts[1].y);
    }

    function centroActual() {
      const pts = [...punteros.values()];
      if (pts.length < 2) return null;
      return { x:(pts[0].x + pts[1].x)/2, y:(pts[0].y + pts[1].y)/2 };
    }

    function pointerDown(e) {
      if (e.pointerType === "mouse" && e.button !== 0) return;
      svg.setPointerCapture?.(e.pointerId);
      punteros.set(e.pointerId, { x:e.clientX, y:e.clientY });
      movimiento = false;
      if (punteros.size === 1) {
        inicioArrastre = { x:e.clientX, y:e.clientY, vista:{...vista} };
      } else if (punteros.size === 2) {
        distanciaPinza = distanciaActual();
        inicioArrastre = null;
      }
    }

    function pointerMove(e) {
      if (!punteros.has(e.pointerId)) return;
      punteros.set(e.pointerId, { x:e.clientX, y:e.clientY });

      if (punteros.size === 2) {
        const d = distanciaActual();
        const c = centroActual();
        if (distanciaPinza && d && c) {
          if (Math.abs(d - distanciaPinza) > 2) movimiento = true;
          zoomEnCliente(d / distanciaPinza, c.x, c.y);
          distanciaPinza = d;
        }
        return;
      }

      if (punteros.size === 1 && inicioArrastre && nivelZoom() > 1.001) {
        const dx = e.clientX - inicioArrastre.x;
        const dy = e.clientY - inicioArrastre.y;
        if (Math.hypot(dx, dy) > 5) movimiento = true;
        if (!movimiento) return;
        const rect = svg.getBoundingClientRect();
        if (!rect.width || !rect.height) return;
        vista.x = inicioArrastre.vista.x - dx / rect.width * inicioArrastre.vista.ancho;
        vista.y = inicioArrastre.vista.y - dy / rect.height * inicioArrastre.vista.alto;
        aplicar();
      }
    }

    function pointerEnd(e) {
      punteros.delete(e.pointerId);
      if (movimiento) {
        suprimirClick = true;
        setTimeout(() => { suprimirClick = false; }, 180);
      }
      if (punteros.size < 2) distanciaPinza = null;
      if (punteros.size === 1) {
        const p = [...punteros.values()][0];
        inicioArrastre = { x:p.x, y:p.y, vista:{...vista} };
      } else {
        inicioArrastre = null;
      }
    }

    function wheel(e) {
      e.preventDefault();
      zoomEnCliente(e.deltaY < 0 ? 1.18 : 1/1.18, e.clientX, e.clientY);
    }

    function dblclick(e) {
      e.preventDefault();
      zoomEnCliente(1.65, e.clientX, e.clientY);
      toast(contenedor, "Zona ampliada");
    }

    function touchDouble(e) {
      if (e.pointerType !== "touch" || movimiento) return;
      const ahora = Date.now();
      if (ahora - ultimoToque < 330) {
        zoomEnCliente(1.65, e.clientX, e.clientY);
        toast(contenedor, "Zona ampliada");
        suprimirClick = true;
      }
      ultimoToque = ahora;
    }

    function cambiarFocus() {
      focus = !focus;
      if (focus) {
        scrollY = window.scrollY;
        document.body.classList.add("mapa-ux-body-focus");
        contenedor.classList.add("mapa-ux-focus");
        const prompt = document.createElement("div");
        prompt.className = "mapa-ux-focus-prompt";
        prompt.textContent = getPrompt() || "Mapa interactivo";
        contenedor.appendChild(prompt);
        if (window.matchMedia?.("(orientation: portrait)").matches) {
          toast(contenedor, "Puedes girar el móvil para ganar precisión");
        }
      } else {
        contenedor.classList.remove("mapa-ux-focus");
        document.body.classList.remove("mapa-ux-body-focus");
        contenedor.querySelector(".mapa-ux-focus-prompt")?.remove();
        window.scrollTo(0, scrollY);
      }
      requestAnimationFrame(aplicar);
      actualizarBotonFocus();
    }

    let toolbar = null;
    let botonFocus = null;
    function actualizarBotonFocus() {
      if (!botonFocus) return;
      botonFocus.textContent = focus ? "×" : "⛶";
      botonFocus.setAttribute("aria-label", focus ? "Salir del mapa ampliado" : "Ampliar mapa");
      botonFocus.title = botonFocus.getAttribute("aria-label");
    }

    if (mostrarToolbar) {
      contenedor.querySelector(".mapa-ux-toolbar")?.remove();
      toolbar = document.createElement("div");
      toolbar.className = "mapa-ux-toolbar";
      toolbar.setAttribute("aria-label", "Controles del mapa");
      toolbar.innerHTML = `
        <button type="button" data-ux-zoom="in" aria-label="Acercar mapa" title="Acercar">+</button>
        <button type="button" data-ux-zoom="out" aria-label="Alejar mapa" title="Alejar">−</button>
        <button type="button" data-ux-zoom="reset" aria-label="Restablecer mapa" title="Restablecer">↺</button>
        ${permitirFocus ? '<button type="button" data-ux-focus aria-label="Ampliar mapa" title="Ampliar mapa">⛶</button>' : ''}`;
      contenedor.appendChild(toolbar);
      toolbar.querySelector('[data-ux-zoom="in"]').addEventListener("click", e => { e.stopPropagation(); zoomEnCliente(1.42); });
      toolbar.querySelector('[data-ux-zoom="out"]').addEventListener("click", e => { e.stopPropagation(); zoomEnCliente(1/1.42); });
      toolbar.querySelector('[data-ux-zoom="reset"]').addEventListener("click", e => { e.stopPropagation(); reset(); });
      botonFocus = toolbar.querySelector("[data-ux-focus]");
      botonFocus?.addEventListener("click", e => { e.stopPropagation(); cambiarFocus(); });
    }

    svg.classList.add("mapa-ux-svg");
    svg.addEventListener("wheel", wheel, { passive:false });
    svg.addEventListener("pointerdown", pointerDown);
    svg.addEventListener("pointermove", pointerMove);
    svg.addEventListener("pointerup", e => { touchDouble(e); pointerEnd(e); });
    svg.addEventListener("pointercancel", pointerEnd);
    svg.addEventListener("dblclick", dblclick);

    const onResize = () => requestAnimationFrame(aplicar);
    window.addEventListener("resize", onResize, { passive:true });

    const api = {
      zoomEnCliente,
      reset,
      nivelZoom,
      consumeClick() {
        if (suprimirClick || movimiento) {
          suprimirClick = false;
          movimiento = false;
          return true;
        }
        return false;
      },
      ampliarZona(clientX, clientY, factor = 1.7) {
        zoomEnCliente(factor, clientX, clientY);
        toast(contenedor, "Zona ampliada · toca de nuevo");
      },
      toast(texto) { toast(contenedor, texto); },
      focus: cambiarFocus,
      focusActivo() { return focus; },
      destroy() {
        window.removeEventListener("resize", onResize);
        if (focus) {
          contenedor.classList.remove("mapa-ux-focus");
          document.body.classList.remove("mapa-ux-body-focus");
          contenedor.querySelector(".mapa-ux-focus-prompt")?.remove();
          window.scrollTo(0, scrollY);
          focus = false;
        }
        toolbar?.remove();
        controladores.delete(svg);
      }
    };

    controladores.set(svg, api);
    requestAnimationFrame(aplicar);
    return api;
  }



  function candidatosTrayecto(svg, clientX, clientY, elementos, maxPx = 28) {
    const resultados = [];
    for (const item of elementos) {
      const path = item.path;
      if (!path || typeof path.getTotalLength !== "function") continue;
      let longitud = 0;
      try { longitud = path.getTotalLength(); } catch { continue; }
      const muestras = Math.max(28, Math.min(120, Math.ceil(longitud / 10)));
      let mejor = Infinity;
      for (let i = 0; i <= muestras; i++) {
        let p;
        try { p = path.getPointAtLength(longitud * i / muestras); } catch { continue; }
        const c = svgACliente(svg, p.x, p.y);
        const d = Math.hypot(c.x - clientX, c.y - clientY);
        if (d < mejor) mejor = d;
      }
      if (mejor <= maxPx) resultados.push({ ...item, distancia:mejor });
    }
    return resultados.sort((a,b) => a.distancia - b.distancia);
  }

  function resolverTrayecto(svg, clientX, clientY, elementos, opciones = {}) {
    const maxPx = opciones.maxPx ?? 28;
    const diferenciaAmbigua = opciones.diferenciaAmbigua ?? 8;
    const cerca = candidatosTrayecto(svg, clientX, clientY, elementos, maxPx);
    if (!cerca.length) return { id:null, ambiguo:false, candidatos:[] };
    const primero = cerca[0];
    const segundo = cerca[1];
    const ambiguo = !!segundo && (segundo.distancia - primero.distancia) < diferenciaAmbigua;
    return { id:primero.id, ambiguo, candidatos:cerca };
  }
  const focusExternos = new WeakMap();
  function activarFocus({contenedor, boton, getPrompt = () => "Mapa interactivo"}) {
    if (!contenedor || !boton) return null;
    let estado = focusExternos.get(contenedor);
    if (!estado) {
      estado = { activo:false, scrollY:0 };
      focusExternos.set(contenedor, estado);
    }
    const actualizar = () => {
      boton.textContent = estado.activo ? "×" : "⛶";
      boton.setAttribute("aria-label", estado.activo ? "Salir del mapa ampliado" : "Ampliar mapa");
      boton.title = boton.getAttribute("aria-label");
    };
    const toggle = () => {
      estado.activo = !estado.activo;
      if (estado.activo) {
        estado.scrollY = window.scrollY;
        document.body.classList.add("mapa-ux-body-focus");
        contenedor.classList.add("mapa-ux-focus");
        const prompt = document.createElement("div");
        prompt.className = "mapa-ux-focus-prompt";
        prompt.textContent = getPrompt() || "Mapa interactivo";
        contenedor.appendChild(prompt);
        if (window.matchMedia?.("(orientation: portrait)").matches) {
          toast(contenedor, "Puedes girar el móvil para ganar precisión");
        }
      } else {
        contenedor.classList.remove("mapa-ux-focus");
        document.body.classList.remove("mapa-ux-body-focus");
        contenedor.querySelector(".mapa-ux-focus-prompt")?.remove();
        window.scrollTo(0, estado.scrollY);
      }
      actualizar();
    };
    if (estado.activo) {
      document.body.classList.add("mapa-ux-body-focus");
      contenedor.classList.add("mapa-ux-focus");
      if (!contenedor.querySelector(".mapa-ux-focus-prompt")) {
        const prompt = document.createElement("div");
        prompt.className = "mapa-ux-focus-prompt";
        prompt.textContent = getPrompt() || "Mapa interactivo";
        contenedor.appendChild(prompt);
      }
    }
    boton.addEventListener("click", e => { e.stopPropagation(); toggle(); });
    actualizar();
    return { toggle, get activo(){ return estado.activo; } };
  }
  window.GeoMapUX = {
    crearControlador,
    resolverPunto,
    candidatosPunto,
    resolverTrayecto,
    candidatosTrayecto,
    ajustarMarcadores,
    svgACliente,
    clienteASvg,
    pxASvg,
    toast,
    activarFocus
  };
})();
