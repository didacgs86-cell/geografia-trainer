// ==========================================
// GEOTRAINER · MAPAS INTERACTIVOS
// Europa + Asia + África + América + Oceanía
// ==========================================

const MAPAS_TIEMPO_POR_PREGUNTA = 10;
const MAPAS_ZOOM_MIN = 1;
const MAPAS_ZOOM_MAX = 4.5;

const mapasMenu = document.getElementById("mapas-menu");
const mapasContinente = document.getElementById("mapas-continente");
const mapasConfig = document.getElementById("mapas-config");
const mapasJuego = document.getElementById("mapas-juego");
const mapasFin = document.getElementById("mapas-fin");
const mapasPausa = document.getElementById("mapas-pausa");

const mapasContinenteTitulo = document.getElementById("mapas-continente-titulo");
const mapasContinenteIcono = document.getElementById("mapas-continente-icono");
const mapasConfigTitulo = document.getElementById("mapas-config-titulo");
const mapasConfigIcono = document.getElementById("mapas-config-icono");
const mapasConfigDescripcion = document.getElementById("mapas-config-descripcion");
const mapasTipoPartida = document.getElementById("mapas-tipo-partida");
const mapasNumeroPregunta = document.getElementById("mapas-numero-pregunta");
const mapasTemporizador = document.getElementById("mapas-temporizador");
const mapasAciertosTexto = document.getElementById("mapas-aciertos");
const mapasFallosTexto = document.getElementById("mapas-fallos");
const mapasPreguntaTexto = document.getElementById("mapas-pregunta");
const mapasAyuda = document.getElementById("mapas-ayuda");
const mapasLienzo = document.getElementById("mapas-lienzo");
const mapasFeedback = document.getElementById("mapas-feedback");
const mapasSiguiente = document.getElementById("mapas-siguiente");
const mapasResultadoExamen = document.getElementById("mapas-resultado-examen");
const mapasRevisionExamen = document.getElementById("mapas-revision-examen");
const mapasPausaTexto = document.getElementById("mapas-pausa-texto");

let mapasModoActual = null;
let mapasContinenteActual = "europa";
let mapasTipoActual = "entrenamiento";
let mapasPlanActual = [];
let mapasIndiceActual = 0;
let mapasObjetivoActual = null;
let mapasAciertos = 0;
let mapasFallos = 0;
let mapasResultados = [];
let mapasRespondida = false;
let mapasColaEntrenamiento = [];
let mapasContestadasEntrenamiento = 0;
let mapasPausaPendiente = false;
let mapasTemporizadorId = null;
let mapasTiempoRestante = MAPAS_TIEMPO_POR_PREGUNTA;
let mapasUltimoExamen = null;
let mapasEsRepasoFallos = false;
let mapasCantidadExamenConfigurada = null;

let mapasViewBoxBase = { x: 0, y: 0, ancho: 1000, alto: 650 };
let mapasViewBoxActual = { ...mapasViewBoxBase };
let mapasArrastre = null;
let mapasHuboMovimiento = false;
let mapasUXControlador = null;

const MAPAS_CONTINENTES = {
  europa: { nombre: "Europa", icono: "EU", datos: () => MAPA_EUROPA },
  asia: { nombre: "Asia", icono: "AS", datos: () => MAPAS_MUNDO.asia },
  africa: { nombre: "África", icono: "AF", datos: () => MAPAS_MUNDO.africa },
  america: { nombre: "América", icono: "AM", datos: () => MAPAS_MUNDO.america },
  oceania: { nombre: "Oceanía", icono: "OC", datos: () => MAPAS_MUNDO.oceania }
};

function mapaActualMapas() {
  return MAPAS_CONTINENTES[mapasContinenteActual].datos();
}

function escaparMapas(texto) {
  return String(texto ?? "")
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#039;");
}

function banderaMapas(iso) {
  if (!iso || iso.length !== 2) return "";
  return String.fromCodePoint(...[...iso.toUpperCase()].map(l => 127397 + l.charCodeAt(0)));
}

function barajarMapas(lista) {
  const a = [...lista];
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}

function datosObjetivoMapas(iso) {
  const mapa = mapaActualMapas();
  const capital = mapa.capitales[iso];
  return { iso, pais: mapa.nombres[iso], capital: capital ? capital.capital : "" };
}

function cancelarTemporizadorMapas() {
  if (mapasTemporizadorId !== null) {
    clearInterval(mapasTemporizadorId);
    mapasTemporizadorId = null;
  }
  if (mapasTemporizador) {
    mapasTemporizador.classList.add("oculto");
    mapasTemporizador.classList.remove("urgente");
  }
}

function ocultarPantallasMapas() {
  cancelarTemporizadorMapas();
  [mapasMenu, mapasContinente, mapasConfig, mapasJuego, mapasFin].forEach(p => p && p.classList.add("oculto"));
  if (mapasPausa) mapasPausa.classList.add("oculto");
}

function abrirMapasMenu() {
  ocultarTodasLasPantallas();
  mapasMenu.classList.remove("oculto");
}

function abrirContinentesMapas(modo) {
  mapasModoActual = modo;
  ocultarTodasLasPantallas();
  mapasContinente.classList.remove("oculto");
  mapasContinenteIcono.textContent = modo === "paises" ? "◉" : "⌖";
  mapasContinenteTitulo.textContent = modo === "paises" ? "Localizar países" : "Localizar capitales";
}

function abrirConfigMapas(cont) {
  mapasContinenteActual = cont;
  const info = MAPAS_CONTINENTES[cont];
  ocultarTodasLasPantallas();
  mapasConfig.classList.remove("oculto");
  mapasConfigIcono.textContent = mapasModoActual === "paises" ? "◉" : "⌖";
  mapasConfigTitulo.textContent = `${info.nombre} · ${mapasModoActual === "paises" ? "Países" : "Capitales"}`;
  mapasConfigDescripcion.textContent = mapasModoActual === "paises"
    ? `Localiza países directamente sobre el mapa de ${info.nombre}.`
    : `Localiza capitales directamente sobre el mapa de ${info.nombre}.`;
}

function listaObjetivosMapas() {
  const mapa = mapaActualMapas();
  return mapa.ordenISO
    .filter(iso => mapa.nombres[iso] && (mapasModoActual === "paises" || mapa.capitales[iso]))
    .map(datosObjetivoMapas);
}

function crearPlanExamenMapas(cantidad, evitar = []) {
  const idsEvitar = new Set(evitar);
  const banco = listaObjetivosMapas();
  const nuevas = barajarMapas(banco.filter(x => !idsEvitar.has(x.iso)));
  const anteriores = barajarMapas(banco.filter(x => idsEvitar.has(x.iso)));
  return [...nuevas, ...anteriores].slice(0, Math.min(cantidad, banco.length));
}

function siguienteEntrenamientoMapas() {
  if (!mapasColaEntrenamiento.length) mapasColaEntrenamiento = barajarMapas(listaObjetivosMapas());
  return mapasColaEntrenamiento.shift();
}

function iniciarPartidaMapas(tipo, cantidad = null, planExacto = null) {
  mapasTipoActual = tipo;
  mapasPlanActual = tipo === "examen"
    ? (planExacto ? planExacto.map(x => ({ ...x })) : crearPlanExamenMapas(cantidad))
    : [];
  mapasIndiceActual = 0;
  mapasAciertos = 0;
  mapasFallos = 0;
  mapasResultados = [];
  mapasRespondida = false;
  mapasColaEntrenamiento = [];
  mapasContestadasEntrenamiento = 0;
  mapasPausaPendiente = false;
  mapasEsRepasoFallos = false;
  mapasAciertosTexto.textContent = "0";
  mapasFallosTexto.textContent = "0";
  ocultarTodasLasPantallas();
  mapasJuego.classList.remove("oculto");
  mostrarPreguntaMapas();
}

function parseViewBoxMapas(viewBox) {
  const n = String(viewBox).trim().split(/\s+/).map(Number);
  return { x: n[0] || 0, y: n[1] || 0, ancho: n[2] || 1000, alto: n[3] || 650 };
}

function crearSvgMapas() {
  const mantenerFocus=!!mapasUXControlador && mapasUXControlador.focusActivo?.();
  mapasUXControlador?.destroy?.();
  mapasUXControlador=null;
  const mapa = mapaActualMapas();
  mapasViewBoxBase = parseViewBoxMapas(mapa.viewBox);
  mapasViewBoxActual = { ...mapasViewBoxBase };

  const paths = mapa.ordenISO.map(iso => {
    const d = mapa.paises[iso];
    if (!d) return "";
    return `<path class="mapas-pais" data-iso="${iso}" d="${d}" fill-rule="evenodd"></path>`;
  }).join("");

  const marcadores = Object.entries(mapa.marcadores || mapa.microestados || {}).map(([iso, p]) => `
    <g class="mapas-microestado ${mapasObjetivoActual?.iso===iso?'mapas-micro-objetivo':''}" data-iso="${iso}">
      <circle class="mapas-micro-visible" cx="${p.x}" cy="${p.y}" r="7"></circle>
      <circle class="mapas-micro-hit" cx="${p.x}" cy="${p.y}" r="30"></circle>
    </g>`).join("");

  const capitales = mapa.ordenISO.map(iso => {
    const c = mapa.capitales[iso];
    if (!c) return "";
    return `<g class="mapas-capital" data-iso="${iso}">
      <circle class="mapas-capital-visible" cx="${c.x}" cy="${c.y}" r="7"></circle>
      <circle class="mapas-capital-hit" cx="${c.x}" cy="${c.y}" r="30"></circle>
    </g>`;
  }).join("");

  mapasLienzo.innerHTML = `
    <svg id="mapas-svg" class="mapas-svg" viewBox="${mapa.viewBox}" role="img" aria-label="Mapa interactivo de ${escaparMapas(MAPAS_CONTINENTES[mapasContinenteActual].nombre)}">
      <rect class="mapas-mar" x="0" y="0" width="1000" height="650"></rect>
      <g id="mapas-capa-paises">${paths}${marcadores}</g>
      <g id="mapas-capitales-capa">${capitales}</g>
    </svg>
    <div class="mapas-fuente">Natural Earth · mapa didáctico simplificado</div>`;

  const svg = document.getElementById("mapas-svg");
  const capaCapitales = document.getElementById("mapas-capitales-capa");
  capaCapitales.classList.toggle("oculto", mapasModoActual !== "capitales");
  document.getElementById("mapas-capa-paises").classList.toggle("mapas-paises-atenuados", mapasModoActual === "capitales");

  mapasUXControlador = window.GeoMapUX?.crearControlador({
    svg,
    contenedor: mapasLienzo,
    maxZoom: MAPAS_ZOOM_MAX,
    getPrompt: () => mapasPreguntaTexto?.textContent?.trim() || "Mapa interactivo",
    marcadorSelector: ".mapas-capital-visible, .mapas-micro-visible",
    marcadorRadioPx: 5.5
  }) || null;
  if(mantenerFocus) mapasUXControlador?.focus?.();

  svg.addEventListener("click", clickMapaMapas);
}

function aplicarViewBoxMapas() {
  const svg = document.getElementById("mapas-svg");
  if (!svg) return;
  svg.setAttribute("viewBox", `${mapasViewBoxActual.x} ${mapasViewBoxActual.y} ${mapasViewBoxActual.ancho} ${mapasViewBoxActual.alto}`);
}

function zoomMapas(factor, centro = null) {
  const base = mapasViewBoxBase;
  const old = mapasViewBoxActual;
  const nuevoAncho = Math.max(base.ancho / MAPAS_ZOOM_MAX, Math.min(base.ancho / MAPAS_ZOOM_MIN, old.ancho / factor));
  const nuevoAlto = nuevoAncho * base.alto / base.ancho;
  const cx = centro ? centro.x : old.x + old.ancho / 2;
  const cy = centro ? centro.y : old.y + old.alto / 2;
  mapasViewBoxActual = {
    x: cx - (cx - old.x) * (nuevoAncho / old.ancho),
    y: cy - (cy - old.y) * (nuevoAlto / old.alto),
    ancho: nuevoAncho,
    alto: nuevoAlto
  };
  limitarViewBoxMapas();
  aplicarViewBoxMapas();
}

function resetMapas() {
  mapasViewBoxActual = { ...mapasViewBoxBase };
  aplicarViewBoxMapas();
}

function limitarViewBoxMapas() {
  const b = mapasViewBoxBase;
  const v = mapasViewBoxActual;
  v.x = Math.max(b.x, Math.min(b.x + b.ancho - v.ancho, v.x));
  v.y = Math.max(b.y, Math.min(b.y + b.alto - v.alto, v.y));
}

function puntoSvgMapas(evento) {
  const svg = document.getElementById("mapas-svg");
  const pt = svg.createSVGPoint(); pt.x = evento.clientX; pt.y = evento.clientY;
  const r = pt.matrixTransform(svg.getScreenCTM().inverse());
  return { x: r.x, y: r.y };
}

function wheelMapas(e) {
  e.preventDefault();
  const p = puntoSvgMapas(e);
  zoomMapas(e.deltaY < 0 ? 1.22 : 1 / 1.22, p);
}

function iniciarArrastreMapas(e) {
  if (e.pointerType === "mouse" && e.button !== 0) return;
  const p = puntoSvgMapas(e);
  mapasArrastre = { id: e.pointerId, x: p.x, y: p.y, view: { ...mapasViewBoxActual } };
  mapasHuboMovimiento = false;
  e.currentTarget.setPointerCapture(e.pointerId);
}

function moverArrastreMapas(e) {
  if (!mapasArrastre || mapasArrastre.id !== e.pointerId) return;
  const p = puntoSvgMapas(e);
  const dx = p.x - mapasArrastre.x, dy = p.y - mapasArrastre.y;
  if (Math.hypot(dx, dy) > 4) mapasHuboMovimiento = true;
  if (!mapasHuboMovimiento) return;
  mapasViewBoxActual.x = mapasArrastre.view.x - dx;
  mapasViewBoxActual.y = mapasArrastre.view.y - dy;
  limitarViewBoxMapas(); aplicarViewBoxMapas();
}

function terminarArrastreMapas(e) {
  if (!mapasArrastre || mapasArrastre.id !== e.pointerId) return;
  mapasArrastre = null;
}

function capitalMasCercanaMapas(evento) {
  const mapa = mapaActualMapas();
  const svg = document.getElementById("mapas-svg");
  if (!svg || !window.GeoMapUX) return null;
  const puntos = mapa.ordenISO.map(iso => {
    const c = mapa.capitales[iso];
    return c ? { id:iso, x:c.x, y:c.y } : null;
  }).filter(Boolean);
  const r = window.GeoMapUX.resolverPunto(svg, evento.clientX, evento.clientY, puntos, { maxPx:30, diferenciaAmbigua:11 });
  if (r.ambiguo && mapasUXControlador) {
    if (mapasUXControlador.nivelZoom() < MAPAS_ZOOM_MAX * 0.96) {
      mapasUXControlador.ampliarZona(evento.clientX, evento.clientY, 99);
      return "__AMPLIAR__";
    }
    const objetivo = r.candidatos.find(c => c.id === mapasObjetivoActual?.iso);
    if (objetivo) return objetivo.id;
  }
  return r.id;
}

function microestadoMasCercanoMapas(evento) {
  const mapa = mapaActualMapas();
  const svg = document.getElementById("mapas-svg");
  const marcadores = mapa.marcadores || mapa.microestados || {};
  if (!svg || !window.GeoMapUX) return null;
  const objetivo=mapasObjetivoActual?.iso;
  if(!objetivo||!marcadores[objetivo])return null;
  const p=marcadores[objetivo];
  const puntos=[{id:objetivo,x:p.x,y:p.y}];
  const r = window.GeoMapUX.resolverPunto(svg, evento.clientX, evento.clientY, puntos, { maxPx:32, diferenciaAmbigua:10 });
  if (r.ambiguo && mapasUXControlador && mapasUXControlador.nivelZoom() < 3.2) {
    mapasUXControlador.ampliarZona(evento.clientX, evento.clientY, 1.75);
    return "__AMPLIAR__";
  }
  return r.id;
}

function clickMapaMapas(e) {
  if (mapasRespondida) return;
  if (mapasUXControlador?.consumeClick()) return;
  let iso = null;
  if (mapasModoActual === "paises") {
    iso = microestadoMasCercanoMapas(e);
    if(!iso){
      const el = e.target.closest("[data-iso]");
      if (el && document.getElementById("mapas-svg").contains(el)) iso = el.dataset.iso;
    }
  } else {
    iso = capitalMasCercanaMapas(e);
  }
  if (iso === "__AMPLIAR__" || !iso) return;
  responderMapas(iso, false);
}

function mostrarPreguntaMapas() {
  cancelarTemporizadorMapas();
  mapasRespondida = false;
  mapasFeedback.innerHTML = "";
  mapasFeedback.classList.add("oculto");
  mapasSiguiente.classList.add("oculto");

  mapasObjetivoActual = mapasTipoActual === "examen" ? mapasPlanActual[mapasIndiceActual] : siguienteEntrenamientoMapas();
  if (!mapasObjetivoActual) { finalizarExamenMapas(); return; }

  const nombreCont = MAPAS_CONTINENTES[mapasContinenteActual].nombre;
  mapasTipoPartida.textContent = `${nombreCont} · ${mapasModoActual === "paises" ? "Países" : "Capitales"}`;
  mapasNumeroPregunta.textContent = mapasTipoActual === "examen"
    ? `Pregunta ${mapasIndiceActual + 1} de ${mapasPlanActual.length}`
    : `Pregunta ${mapasContestadasEntrenamiento + 1}`;
  mapasPreguntaTexto.innerHTML = mapasModoActual === "paises"
    ? `Localiza <strong>${escaparMapas(mapasObjetivoActual.pais)}</strong>`
    : `Localiza <strong>${escaparMapas(mapasObjetivoActual.capital)}</strong>`;
  mapasAyuda.textContent = mapasModoActual === "paises"
    ? "Toca el país sobre el mapa. Los estados muy pequeños aparecen con un punto. Usa ⛶ si quieres una vista grande."
    : `Capital de ${mapasObjetivoActual.pais}. Toca cerca del punto; en zonas densas GeoTrainer ampliará la zona antes de corregir.`;
  crearSvgMapas();
  iniciarTemporizadorMapas();
}

function iniciarTemporizadorMapas() {
  if (mapasTipoActual !== "examen") { mapasTemporizador.classList.add("oculto"); return; }
  mapasTiempoRestante = MAPAS_TIEMPO_POR_PREGUNTA;
  mapasTemporizador.classList.remove("oculto");
  actualizarTemporizadorMapas();
  mapasTemporizadorId = setInterval(() => {
    mapasTiempoRestante--;
    actualizarTemporizadorMapas();
    if (mapasTiempoRestante <= 0) {
      cancelarTemporizadorMapas();
      responderMapas(null, true);
    }
  }, 1000);
}

function actualizarTemporizadorMapas() {
  mapasTemporizador.textContent = `⏱ ${mapasTiempoRestante} s`;
  mapasTemporizador.classList.toggle("urgente", mapasTiempoRestante <= 3);
}

function marcarRespuestaMapas(seleccion, acierto) {
  const svg = document.getElementById("mapas-svg"); if (!svg) return;
  const objetivo = mapasObjetivoActual.iso;
  if (mapasModoActual === "paises") {
    svg.querySelectorAll(`[data-iso="${objetivo}"]`).forEach(el => el.classList.add("mapas-correcto"));
    if (seleccion && !acierto) svg.querySelectorAll(`[data-iso="${seleccion}"]`).forEach(el => el.classList.add("mapas-incorrecto"));
  } else {
    const c = svg.querySelector(`.mapas-capital[data-iso="${objetivo}"]`); if (c) c.classList.add("mapas-capital-correcta");
    if (seleccion && !acierto) { const s = svg.querySelector(`.mapas-capital[data-iso="${seleccion}"]`); if (s) s.classList.add("mapas-capital-incorrecta"); }
  }
}

function responderMapas(iso, tiempoAgotado) {
  if (mapasRespondida) return;
  if(mapasUXControlador?.focusActivo?.()) mapasUXControlador.focus();
  cancelarTemporizadorMapas(); mapasRespondida = true;
  const acierto = !tiempoAgotado && iso === mapasObjetivoActual.iso;
  if (acierto) mapasAciertos++; else mapasFallos++;
  mapasAciertosTexto.textContent = String(mapasAciertos);
  mapasFallosTexto.textContent = String(mapasFallos);
  marcarRespuestaMapas(iso, acierto);
  const seleccion = iso ? datosObjetivoMapas(iso) : null;
  const obj = mapasObjetivoActual;
  if (mapasTipoActual === "examen") {
    mapasResultados.push({ objetivo: { ...obj }, seleccion: seleccion ? { ...seleccion } : null, acierto, tiempoAgotado });
  } else {
    mapasContestadasEntrenamiento++;
    if (window.GeoProgress) {
      window.GeoProgress.registrarEntrenamiento({
        categoria: "mapas",
        acierto,
        item: { key: `${mapasModoActual}:${obj.iso}`, label: mapasModoActual === "paises" ? obj.pais : obj.capital, correct: mapasModoActual === "paises" ? obj.pais : obj.capital }
      });
    }
    if (mapasContestadasEntrenamiento % 15 === 0) mapasPausaPendiente = true;
  }
  const estado = tiempoAgotado ? "⏱ Tiempo agotado" : acierto ? "✅ Correcto" : "❌ Incorrecto";
  const detalle = mapasModoActual === "paises"
    ? `${banderaMapas(obj.iso)} ${obj.pais} · Capital: ${obj.capital}`
    : `${obj.capital} · ${banderaMapas(obj.iso)} ${obj.pais}`;
  mapasFeedback.innerHTML = `<div class="feedback-kicker">${estado}</div><div class="feedback-ficha"><strong>${escaparMapas(detalle)}</strong>${!acierto && seleccion ? `<span>Has señalado: ${escaparMapas(mapasModoActual === "paises" ? seleccion.pais : seleccion.capital)}</span>` : ""}</div>`;
  mapasFeedback.classList.remove("oculto");
  mapasSiguiente.textContent = mapasTipoActual === "examen" && mapasIndiceActual === mapasPlanActual.length - 1 ? "Ver resultado →" : mapasPausaPendiente ? "Continuar práctica →" : "Siguiente pregunta →";
  mapasSiguiente.classList.remove("oculto");
}

function avanzarMapas() {
  if (mapasTipoActual === "entrenamiento") {
    if (mapasPausaPendiente) {
      mapasPausaTexto.textContent = `Llevas ${mapasContestadasEntrenamiento} preguntas: ${mapasAciertos} correctas y ${mapasFallos} incorrectas. ¿Quieres seguir practicando?`;
      mapasPausa.classList.remove("oculto");
      return;
    }
    mostrarPreguntaMapas(); return;
  }
  if (mapasIndiceActual >= mapasPlanActual.length - 1) { finalizarExamenMapas(); return; }
  mapasIndiceActual++; mostrarPreguntaMapas();
}

function finalizarExamenMapas() {
  cancelarTemporizadorMapas();
  ocultarTodasLasPantallas(); mapasFin.classList.remove("oculto");
  const total = mapasResultados.length;
  const pct = total ? Math.round(mapasAciertos / total * 100) : 0;
  const nombreCont = MAPAS_CONTINENTES[mapasContinenteActual].nombre;
  mapasResultadoExamen.innerHTML = `<div class="nota-grande">${mapasAciertos} / ${total}</div><div class="detalle-examen">${pct}% de aciertos<br>${nombreCont} · ${mapasModoActual === "paises" ? "Localizar países" : "Localizar capitales"}</div>`;
  mapasRevisionExamen.innerHTML = `<div class="revision-examen"><h3>Revisión</h3><div class="revision-lista">${mapasResultados.map((r,i)=>`<div class="revision-item ${r.acierto?'acierto':'fallo'}"><div class="revision-cabecera"><span>Pregunta ${i+1}</span><span>${r.acierto?'✅ Correcta':'❌ Incorrecta'}</span></div><strong>${escaparMapas(mapasModoActual==='paises'?r.objetivo.pais:r.objetivo.capital)}</strong><div>${escaparMapas(mapasModoActual==='paises'?`Capital: ${r.objetivo.capital}`:`${r.objetivo.pais}`)}</div></div>`).join('')}</div></div>`;
  const fallos = mapasResultados.filter(r => !r.acierto);
  const btn = document.getElementById("mapas-repasar-fallos");
  if (fallos.length) { btn.textContent = `🎯 Repasar solo mis fallos (${fallos.length})`; btn.classList.remove("oculto"); } else btn.classList.add("oculto");
  if (!mapasEsRepasoFallos) mapasUltimoExamen = { modo: mapasModoActual, continente: mapasContinenteActual, cantidad: mapasPlanActual.length, plan: mapasPlanActual.map(x=>({...x})), resultados: mapasResultados.map(x=>({...x})) };
  if (window.GeoProgress) {
    window.GeoProgress.registrarExamen({
      categoria: "mapas",
      region: nombreCont,
      modo: mapasModoActual,
      total,
      aciertos: mapasAciertos,
      esRepaso: mapasEsRepasoFallos,
      items: mapasResultados.map(r => ({ key: `${mapasModoActual}:${r.objetivo.iso}`, label: mapasModoActual === "paises" ? r.objetivo.pais : r.objetivo.capital, correct: mapasModoActual === "paises" ? r.objetivo.pais : r.objetivo.capital, ok: r.acierto }))
    });
  }
}

function repetirUltimoExamenMapas() {
  if (!mapasUltimoExamen) return;
  mapasModoActual = mapasUltimoExamen.modo; mapasContinenteActual = mapasUltimoExamen.continente;
  iniciarPartidaMapas("examen", mapasUltimoExamen.cantidad, mapasUltimoExamen.plan);
}

function nuevoExamenMapas() {
  const cantidad = mapasCantidadExamenConfigurada || mapasUltimoExamen?.cantidad || 10;
  const evitar = mapasUltimoExamen?.plan.map(x=>x.iso) || [];
  iniciarPartidaMapas("examen", cantidad, crearPlanExamenMapas(cantidad, evitar));
}

function repasarFallosMapas() {
  const fallos = mapasResultados.filter(r=>!r.acierto).map(r=>({...r.objetivo}));
  if (!fallos.length) return;
  iniciarPartidaMapas("examen", fallos.length, fallos); mapasEsRepasoFallos = true;
}

// eventos
document.querySelectorAll(".mapas-modo").forEach(b => b.addEventListener("click", () => abrirContinentesMapas(b.dataset.mapasModo)));
document.getElementById("volver-mapas-orografia").addEventListener("click", mostrarMapasOrografiaMenu);
document.getElementById("volver-mapas-modo").addEventListener("click", abrirMapasMenu);
Object.keys(MAPAS_CONTINENTES).forEach(key => {
  const el = document.getElementById(`mapas-${key}`);
  if (el) el.addEventListener("click", () => abrirConfigMapas(key));
});
document.getElementById("volver-mapas-continente").addEventListener("click", () => abrirContinentesMapas(mapasModoActual));
document.getElementById("mapas-entrenamiento").addEventListener("click", () => iniciarPartidaMapas("entrenamiento"));
document.getElementById("mapas-examen10").addEventListener("click", () => { mapasCantidadExamenConfigurada=10; iniciarPartidaMapas("examen",10); });
document.getElementById("mapas-examen20").addEventListener("click", () => { mapasCantidadExamenConfigurada=20; iniciarPartidaMapas("examen",20); });
document.getElementById("volver-mapas-desde-juego").addEventListener("click", abrirMapasMenu);
mapasSiguiente.addEventListener("click", avanzarMapas);
document.getElementById("mapas-continuar").addEventListener("click", () => { mapasPausaPendiente=false; mapasPausa.classList.add("oculto"); mostrarPreguntaMapas(); });
document.getElementById("mapas-salir").addEventListener("click", abrirMapasMenu);
document.getElementById("volver-mapas-fin").addEventListener("click", abrirMapasMenu);
document.getElementById("mapas-volver-menu").addEventListener("click", abrirMapasMenu);
document.getElementById("mapas-repetir-examen").addEventListener("click", repetirUltimoExamenMapas);
document.getElementById("mapas-nuevo-examen").addEventListener("click", nuevoExamenMapas);
document.getElementById("mapas-repasar-fallos").addEventListener("click", repasarFallosMapas);
