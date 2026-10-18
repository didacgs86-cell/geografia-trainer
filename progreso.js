// ==========================================
// GEOTRAINER · SISTEMA DE PROGRESO V1
// PX · niveles · rangos · dominio · logros
// Almacenamiento opcional y exclusivamente local.
// ==========================================

(function () {
  "use strict";

  const STORAGE_KEY = "geotrainer.progreso.v1";
  const ENABLED_KEY = "geotrainer.progreso.enabled";
  const VERSION = 1;
  const PX_POR_NIVEL = 150;
  const MAX_HISTORIAL_DOMINIO = 60;
  const MAX_PX_ENTRENAMIENTO_DIA = 30;
  const MAX_PX_REPASO_DIA = 40;

  const CATEGORIAS = {
    capitales: "Capitales",
    paises: "Países",
    banderas: "Banderas",
    espana: "España",
    mapas: "Mapas",
    rios: "Ríos",
    mares: "Mares y océanos",
    montanas: "Montañas",
    monedas: "Monedas"
  };

  const RANGOS = [
    { min: 1, max: 4, nombre: "Caminante", simbolo: "◌" },
    { min: 5, max: 9, nombre: "Viajero", simbolo: "◇" },
    { min: 10, max: 14, nombre: "Navegante", simbolo: "✦" },
    { min: 15, max: 19, nombre: "Explorador", simbolo: "◎" },
    { min: 20, max: 24, nombre: "Cartógrafo", simbolo: "⌖" },
    { min: 25, max: 29, nombre: "Geógrafo", simbolo: "◈" },
    { min: 30, max: 39, nombre: "Maestro del Atlas", simbolo: "✧" },
    { min: 40, max: Infinity, nombre: "Gran Explorador", simbolo: "✺" }
  ];

  const OBJETOS = [
    { id: "brujula", icono: "🧭", nombre: "Brújula de campo", descripcion: "Supera tu primer examen con al menos un 70 %." },
    { id: "mapa", icono: "🗺️", nombre: "Mapa de explorador", descripcion: "Alcanza 250 PX." },
    { id: "catalejo", icono: "🔭", nombre: "Catalejo", descripcion: "Consigue un 100 % en un examen de capitales de 10 o más preguntas." },
    { id: "carta", icono: "📜", nombre: "Carta náutica", descripcion: "Consigue al menos un 90 % en mares y océanos." },
    { id: "altimetro", icono: "⛰️", nombre: "Altímetro", descripcion: "Consigue al menos un 90 % en montañas." },
    { id: "cuaderno", icono: "🏞️", nombre: "Cuaderno de campo", descripcion: "Consigue al menos un 90 % en ríos." },
    { id: "globo", icono: "🌐", nombre: "Globo terráqueo", descripcion: "Aprueba exámenes en Europa, Asia, África, América y Oceanía." },
    { id: "pasaporte", icono: "🧳", nombre: "Pasaporte cartográfico", descripcion: "Alcanza un dominio de al menos 75 % en cinco categorías." }
  ];

  const LOGROS = [
    { id: "primer-rumbo", nombre: "Primer rumbo", descripcion: "Primer examen aprobado." },
    { id: "precision-total", nombre: "Precisión total", descripcion: "100 % en un examen de 10 o más preguntas." },
    { id: "segunda-oportunidad", nombre: "Segunda oportunidad", descripcion: "Corrige 20 conceptos que habías fallado." },
    { id: "constancia", nombre: "Constancia", descripcion: "Practica tres días consecutivos." },
    { id: "vuelta-mundo", nombre: "Vuelta al mundo", descripcion: "Aprueba en los cinco continentes." },
    { id: "atlas-solido", nombre: "Atlas sólido", descripcion: "75 % o más de dominio en cinco categorías." },
    { id: "mil-aciertos", nombre: "Mil aciertos", descripcion: "Acumula 1.000 respuestas correctas." }
  ];

  let progresoActivado = leerActivacion();
  let estado = progresoActivado ? cargarEstado() : crearEstado();
  let examenPendiente = null;

  function crearEstado() {
    return {
      version: VERSION,
      xp: 0,
      examenes: 0,
      examenesAprobados: 0,
      totalAciertos: 0,
      totalRespuestas: 0,
      repasosCorregidos: 0,
      racha: { ultimoDia: null, actual: 0, mejor: 0 },
      diario: { fecha: null, pxEntrenamiento: 0, pxRepaso: 0 },
      dominio: {},
      repaso: {},
      regionesAprobadas: {},
      objetos: {},
      logros: {},
      firmasExamen: {},
      creadoEn: new Date().toISOString(),
      actualizadoEn: new Date().toISOString()
    };
  }

  function normalizarEstado(datos) {
    const base = crearEstado();
    if (!datos || typeof datos !== "object") return base;
    return {
      ...base,
      ...datos,
      racha: { ...base.racha, ...(datos.racha || {}) },
      diario: { ...base.diario, ...(datos.diario || {}) },
      dominio: datos.dominio && typeof datos.dominio === "object" ? datos.dominio : {},
      repaso: datos.repaso && typeof datos.repaso === "object" ? datos.repaso : {},
      regionesAprobadas: datos.regionesAprobadas && typeof datos.regionesAprobadas === "object" ? datos.regionesAprobadas : {},
      objetos: datos.objetos && typeof datos.objetos === "object" ? datos.objetos : {},
      logros: datos.logros && typeof datos.logros === "object" ? datos.logros : {},
      firmasExamen: datos.firmasExamen && typeof datos.firmasExamen === "object" ? datos.firmasExamen : {}
    };
  }

  function leerActivacion() {
    try {
      return localStorage.getItem(ENABLED_KEY) === "1";
    } catch (_) {
      return false;
    }
  }

  function cargarEstado() {
    try {
      const raw = localStorage.getItem(STORAGE_KEY);
      return raw ? normalizarEstado(JSON.parse(raw)) : crearEstado();
    } catch (_) {
      return crearEstado();
    }
  }

  function guardar() {
    if (!progresoActivado) return;
    estado.actualizadoEn = new Date().toISOString();
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(estado));
    } catch (_) {
      // El progreso sigue funcionando en la sesión aunque el navegador bloquee el almacenamiento.
    }
  }

  function hoy() {
    const d = new Date();
    const y = d.getFullYear();
    const m = String(d.getMonth() + 1).padStart(2, "0");
    const day = String(d.getDate()).padStart(2, "0");
    return `${y}-${m}-${day}`;
  }

  function fechaLocalAValor(fecha) {
    if (!fecha) return null;
    const [y, m, d] = fecha.split("-").map(Number);
    return new Date(y, m - 1, d).getTime();
  }

  function sumarDias(fecha, dias) {
    const [y, m, d] = fecha.split("-").map(Number);
    const x = new Date(y, m - 1, d);
    x.setDate(x.getDate() + dias);
    const yy = x.getFullYear();
    const mm = String(x.getMonth() + 1).padStart(2, "0");
    const dd = String(x.getDate()).padStart(2, "0");
    return `${yy}-${mm}-${dd}`;
  }

  function escapeHTML(valor) {
    return String(valor ?? "")
      .replaceAll("&", "&amp;")
      .replaceAll("<", "&lt;")
      .replaceAll(">", "&gt;")
      .replaceAll('"', "&quot;")
      .replaceAll("'", "&#039;");
  }

  function nivelActual() {
    return Math.floor(estado.xp / PX_POR_NIVEL) + 1;
  }

  function rangoActual(nivel = nivelActual()) {
    return RANGOS.find(r => nivel >= r.min && nivel <= r.max) || RANGOS[RANGOS.length - 1];
  }

  function progresoNivel() {
    return estado.xp % PX_POR_NIVEL;
  }

  function etiquetaCategoria(id) {
    return CATEGORIAS[id] || id || "Geografía";
  }

  function asegurarDia() {
    const fecha = hoy();
    let bonus = 0;

    if (estado.diario.fecha !== fecha) {
      estado.diario = { fecha, pxEntrenamiento: 0, pxRepaso: 0 };
    }

    if (estado.racha.ultimoDia !== fecha) {
      const ayer = sumarDias(fecha, -1);
      estado.racha.actual = estado.racha.ultimoDia === ayer ? estado.racha.actual + 1 : 1;
      estado.racha.mejor = Math.max(estado.racha.mejor, estado.racha.actual);
      estado.racha.ultimoDia = fecha;
      estado.xp += 10;
      bonus = 10;
    }

    return bonus;
  }

  function obtenerDominio(categoria) {
    const hist = estado.dominio[categoria]?.historial || [];
    if (!hist.length) return null;
    const aciertos = hist.filter(Boolean).length;
    return Math.round(aciertos / hist.length * 100);
  }

  function registrarResultadoDominio(categoria, acierto) {
    if (!estado.dominio[categoria]) estado.dominio[categoria] = { historial: [] };
    const historial = estado.dominio[categoria].historial;
    historial.push(Boolean(acierto));
    while (historial.length > MAX_HISTORIAL_DOMINIO) historial.shift();
    estado.totalRespuestas += 1;
    if (acierto) estado.totalAciertos += 1;
  }

  function itemNormalizado(item, categoria) {
    const base = item && typeof item === "object" ? item : {};
    const claveBase = base.key || base.id || base.correcta || base.correct || base.label || "concepto";
    return {
      key: `${categoria}::${String(claveBase)}`,
      label: String(base.label || base.correcta || base.correct || etiquetaCategoria(categoria)),
      correct: String(base.correct || base.correcta || base.label || ""),
      ok: Boolean(base.ok ?? base.acierto ?? base.acertada)
    };
  }

  function actualizarRepaso(categoria, rawItem) {
    const item = itemNormalizado(rawItem, categoria);
    const fecha = hoy();
    const existente = estado.repaso[item.key];

    if (!item.ok) {
      estado.repaso[item.key] = {
        key: item.key,
        categoria,
        label: item.label,
        correct: item.correct,
        fase: existente ? Math.max(0, Number(existente.fase || 0) - 1) : 0,
        fallos: (existente?.fallos || 0) + 1,
        ultimaFalla: fecha,
        due: fecha
      };
      return;
    }

    if (!existente) return;

    const estabaPendiente = fechaLocalAValor(existente.due) <= fechaLocalAValor(fecha);
    const intervalos = [1, 3, 7, 14, 30];
    const faseNueva = Math.min((existente.fase || 0) + 1, intervalos.length - 1);
    existente.fase = faseNueva;
    existente.due = sumarDias(fecha, intervalos[faseNueva]);
    existente.ultimaCorrecta = fecha;

    if (estabaPendiente) estado.repasosCorregidos += 1;
  }

  function registrarItems(categoria, items) {
    (Array.isArray(items) ? items : []).forEach(raw => {
      const item = itemNormalizado(raw, categoria);
      registrarResultadoDominio(categoria, item.ok);
      actualizarRepaso(categoria, item);
    });
  }

  function limpiarFirmasExamen() {
    const limite = Date.now() - 7 * 24 * 60 * 60 * 1000;
    Object.keys(estado.firmasExamen).forEach(f => {
      if (Number(estado.firmasExamen[f]) < limite) delete estado.firmasExamen[f];
    });
  }

  function firmaExamen(info) {
    const claves = (info.items || []).map(i => String(i.key || i.id || i.correct || i.correcta || i.label || "")).sort();
    return [info.categoria, info.region || "", info.modo || "", claves.join("|")].join("::");
  }

  function calcularPxBase(total, porcentaje) {
    if (porcentaje < 70 || total <= 0) return 0;
    let base = 20;
    if (porcentaje >= 100) base = 70;
    else if (porcentaje >= 90) base = 45;
    else if (porcentaje >= 80) base = 30;
    const factor = Math.max(0.5, total / 10);
    return Math.round(base * factor);
  }

  function desbloquear(coleccion, id, fecha, nuevos) {
    if (!estado[coleccion][id]) {
      estado[coleccion][id] = { fecha };
      nuevos.push({ tipo: coleccion === "objetos" ? "objeto" : "logro", id });
    }
  }

  function categoriasDominadas() {
    return Object.keys(CATEGORIAS).filter(cat => {
      const n = estado.dominio[cat]?.historial?.length || 0;
      const d = obtenerDominio(cat);
      return n >= 10 && d !== null && d >= 75;
    });
  }

  function evaluarDesbloqueos(contexto = {}) {
    const nuevos = [];
    const fecha = hoy();
    const pct = Number(contexto.porcentaje || 0);
    const total = Number(contexto.total || 0);
    const categoria = contexto.categoria;

    if (estado.examenesAprobados >= 1) desbloquear("objetos", "brujula", fecha, nuevos);
    if (estado.xp >= 250) desbloquear("objetos", "mapa", fecha, nuevos);
    if (categoria === "capitales" && pct === 100 && total >= 10) desbloquear("objetos", "catalejo", fecha, nuevos);
    if (categoria === "mares" && pct >= 90 && total >= 10) desbloquear("objetos", "carta", fecha, nuevos);
    if (categoria === "montanas" && pct >= 90 && total >= 10) desbloquear("objetos", "altimetro", fecha, nuevos);
    if (categoria === "rios" && pct >= 90 && total >= 10) desbloquear("objetos", "cuaderno", fecha, nuevos);

    const regiones = ["Europa", "Asia", "África", "América", "Oceanía"];
    if (regiones.every(r => estado.regionesAprobadas[r])) desbloquear("objetos", "globo", fecha, nuevos);
    if (categoriasDominadas().length >= 5) desbloquear("objetos", "pasaporte", fecha, nuevos);

    if (estado.examenesAprobados >= 1) desbloquear("logros", "primer-rumbo", fecha, nuevos);
    if (pct === 100 && total >= 10) desbloquear("logros", "precision-total", fecha, nuevos);
    if (estado.repasosCorregidos >= 20) desbloquear("logros", "segunda-oportunidad", fecha, nuevos);
    if (estado.racha.actual >= 3) desbloquear("logros", "constancia", fecha, nuevos);
    if (regiones.every(r => estado.regionesAprobadas[r])) desbloquear("logros", "vuelta-mundo", fecha, nuevos);
    if (categoriasDominadas().length >= 5) desbloquear("logros", "atlas-solido", fecha, nuevos);
    if (estado.totalAciertos >= 1000) desbloquear("logros", "mil-aciertos", fecha, nuevos);

    return nuevos;
  }

  function registrarEntrenamiento(info) {
    if (!progresoActivado || !info) return null;

    const nivelAntes = nivelActual();
    const bonusDiario = asegurarDia();
    const categoria = info.categoria || "mapas";
    const item = itemNormalizado({ ...(info.item || {}), ok: Boolean(info.acierto) }, categoria);
    registrarItems(categoria, [item]);

    let px = bonusDiario;
    if (item.ok && estado.diario.pxEntrenamiento < MAX_PX_ENTRENAMIENTO_DIA) {
      estado.diario.pxEntrenamiento += 1;
      estado.xp += 1;
      px += 1;
    }

    const nuevos = evaluarDesbloqueos({ categoria, porcentaje: 0, total: 0 });
    const nivelDespues = nivelActual();
    guardar();
    renderTodo();

    if (nuevos.length || nivelDespues > nivelAntes) {
      mostrarToastProgreso({ px, nuevos, nivelAntes, nivelDespues });
    }

    return { px, nuevos, nivelAntes, nivelDespues };
  }

  function registrarExamenInterno(info) {
    const nivelAntes = nivelActual();
    const categoria = info.categoria || "mapas";
    const total = Number(info.total || 0);
    const aciertos = Number(info.aciertos || 0);
    const porcentaje = total ? Math.round(aciertos / total * 100) : 0;
    const esRepaso = Boolean(info.esRepaso);
    const items = Array.isArray(info.items) ? info.items : [];
    const bonusDiario = asegurarDia();

    registrarItems(categoria, items);
    estado.examenes += 1;
    if (!esRepaso && porcentaje >= 70) estado.examenesAprobados += 1;

    const region = String(info.region || "");
    if (!esRepaso && porcentaje >= 70 && ["Europa", "Asia", "África", "América", "Oceanía"].includes(region)) {
      estado.regionesAprobadas[region] = true;
    }

    let pxExamen = 0;
    let repetido = false;

    if (esRepaso) {
      const posible = aciertos * 4;
      const restante = Math.max(0, MAX_PX_REPASO_DIA - estado.diario.pxRepaso);
      pxExamen = Math.min(posible, restante);
      estado.diario.pxRepaso += pxExamen;
    } else {
      limpiarFirmasExamen();
      const firma = firmaExamen(info);
      const previo = Number(estado.firmasExamen[firma] || 0);
      repetido = previo > Date.now() - 24 * 60 * 60 * 1000;
      if (!repetido) {
        pxExamen = calcularPxBase(total, porcentaje);
        estado.firmasExamen[firma] = Date.now();
      }
    }

    estado.xp += pxExamen;
    const nuevos = evaluarDesbloqueos({ categoria, porcentaje, total });
    const nivelDespues = nivelActual();
    guardar();
    renderTodo();

    const reporte = {
      categoria,
      porcentaje,
      total,
      aciertos,
      px: pxExamen + bonusDiario,
      pxExamen,
      bonusDiario,
      repetido,
      esRepaso,
      nuevos,
      nivelAntes,
      nivelDespues,
      rango: rangoActual(nivelDespues).nombre
    };

    mostrarRecompensaExamen(reporte);
    return reporte;
  }

  function registrarExamen(info) {
    if (!info) return null;

    if (!progresoActivado) {
      examenPendiente = JSON.parse(JSON.stringify(info));
      mostrarInvitacionExamen();
      return null;
    }

    return registrarExamenInterno(info);
  }

  function pendientesHoy() {
    const fecha = fechaLocalAValor(hoy());
    return Object.values(estado.repaso)
      .filter(x => fechaLocalAValor(x.due) <= fecha)
      .sort((a, b) => (b.fallos || 0) - (a.fallos || 0));
  }

  function renderHome() {
    const cont = document.getElementById("progreso-home");
    if (!cont) return;

    if (!progresoActivado) {
      cont.innerHTML = `
        <div class="progreso-home-main">
          <div class="progreso-home-simbolo">◎</div>
          <div>
            <strong>Mi expedición</strong>
            <span>PX, niveles, dominio y logros</span>
          </div>
        </div>
        <button type="button" id="progreso-home-abrir" class="progreso-home-btn">Ver progreso</button>
      `;
    } else {
      const nivel = nivelActual();
      const rango = rangoActual(nivel);
      cont.innerHTML = `
        <div class="progreso-home-main">
          <div class="progreso-home-simbolo">${escapeHTML(rango.simbolo)}</div>
          <div>
            <strong>Nivel ${nivel} · ${escapeHTML(rango.nombre)}</strong>
            <span>${estado.xp} PX · Racha ${estado.racha.actual} día${estado.racha.actual === 1 ? "" : "s"}</span>
          </div>
        </div>
        <div class="progreso-home-nivel">
          <progress max="${PX_POR_NIVEL}" value="${progresoNivel()}" aria-label="Progreso hacia el siguiente nivel"></progress>
          <small>${progresoNivel()} / ${PX_POR_NIVEL} PX</small>
        </div>
        <button type="button" id="progreso-home-abrir" class="progreso-home-btn">Mi expedición</button>
      `;
    }

    document.getElementById("progreso-home-abrir")?.addEventListener("click", abrirExpedicion);
  }

  function renderDominio() {
    const bloques = Object.keys(CATEGORIAS).map(cat => {
      const n = estado.dominio[cat]?.historial?.length || 0;
      const d = obtenerDominio(cat);
      const valor = d === null ? 0 : d;
      return `
        <div class="dominio-item ${n === 0 ? "dominio-vacio" : ""}">
          <div class="dominio-cabecera">
            <span>${escapeHTML(etiquetaCategoria(cat))}</span>
            <strong>${d === null ? "—" : `${d}%`}</strong>
          </div>
          <progress max="100" value="${valor}" aria-label="Dominio de ${escapeHTML(etiquetaCategoria(cat))}"></progress>
          <small>${n ? `Últimas ${Math.min(n, MAX_HISTORIAL_DOMINIO)} respuestas` : "Sin práctica registrada"}</small>
        </div>
      `;
    }).join("");
    return `<div class="dominio-grid">${bloques}</div>`;
  }

  function renderObjetos() {
    return `
      <div class="coleccion-grid">
        ${OBJETOS.map(obj => {
          const obtenido = Boolean(estado.objetos[obj.id]);
          return `
            <div class="objeto-card ${obtenido ? "objeto-obtenido" : "objeto-bloqueado"}">
              <div class="objeto-icono">${obtenido ? obj.icono : "?"}</div>
              <strong>${escapeHTML(obj.nombre)}</strong>
              <span>${escapeHTML(obj.descripcion)}</span>
              <small>${obtenido ? `Conseguido · ${escapeHTML(estado.objetos[obj.id].fecha)}` : "Bloqueado"}</small>
            </div>
          `;
        }).join("")}
      </div>
    `;
  }

  function renderLogros() {
    return `
      <div class="logros-lista">
        ${LOGROS.map(l => {
          const obtenido = Boolean(estado.logros[l.id]);
          return `
            <div class="logro-linea ${obtenido ? "logro-ok" : ""}">
              <span class="logro-marca">${obtenido ? "✓" : "○"}</span>
              <div><strong>${escapeHTML(l.nombre)}</strong><small>${escapeHTML(l.descripcion)}</small></div>
            </div>
          `;
        }).join("")}
      </div>
    `;
  }

  function renderRepaso() {
    const lista = pendientesHoy();
    if (!lista.length) {
      return `<div class="repaso-vacio"><strong>Todo al día</strong><span>No tienes conceptos pendientes de repaso hoy.</span></div>`;
    }

    return `
      <div class="repaso-lista">
        ${lista.slice(0, 10).map(x => `
          <div class="repaso-item">
            <div><strong>${escapeHTML(etiquetaCategoria(x.categoria))}</strong><span>${escapeHTML(x.label)}</span></div>
            <small>${x.correct ? `Respuesta: ${escapeHTML(x.correct)}` : "Concepto pendiente"}</small>
          </div>
        `).join("")}
      </div>
      ${lista.length > 10 ? `<p class="repaso-mas">Y ${lista.length - 10} conceptos más pendientes.</p>` : ""}
    `;
  }

  function renderExpedicion() {
    const cont = document.getElementById("progreso-expedicion-contenido");
    if (!cont) return;

    if (!progresoActivado) {
      cont.innerHTML = `
        <div class="progreso-activar-card">
          <div class="progreso-avatar progreso-avatar-inactivo">◎</div>
          <h2>Activa tu expedición</h2>
          <p>GeoTrainer puede guardar en este dispositivo tus PX, niveles, dominio, logros y conceptos pendientes de repaso.</p>
          <div class="progreso-privacidad-mini">No requiere cuenta, no se envía a ningún servidor y puedes borrarlo o exportarlo cuando quieras.</div>
          <button type="button" id="progreso-activar" class="btn-progreso-principal">Activar progreso local</button>
        </div>
      `;
      document.getElementById("progreso-activar")?.addEventListener("click", activarProgreso);
      return;
    }

    const nivel = nivelActual();
    const rango = rangoActual(nivel);
    const precision = estado.totalRespuestas ? Math.round(estado.totalAciertos / estado.totalRespuestas * 100) : 0;
    const objetos = Object.keys(estado.objetos).length;
    const logros = Object.keys(estado.logros).length;

    cont.innerHTML = `
      <section class="expedicion-hero">
        <div class="progreso-avatar">${escapeHTML(rango.simbolo)}</div>
        <div class="expedicion-identidad">
          <span class="expedicion-kicker">Mi expedición</span>
          <h2>Nivel ${nivel} · ${escapeHTML(rango.nombre)}</h2>
          <p>${estado.xp} PX acumulados</p>
          <progress max="${PX_POR_NIVEL}" value="${progresoNivel()}" aria-label="Progreso al siguiente nivel"></progress>
          <small>${PX_POR_NIVEL - progresoNivel()} PX para el nivel ${nivel + 1}</small>
        </div>
      </section>

      <section class="expedicion-resumen-grid">
        <div class="stat-card"><strong>${estado.examenes}</strong><span>Exámenes</span></div>
        <div class="stat-card"><strong>${precision}%</strong><span>Precisión global</span></div>
        <div class="stat-card"><strong>${estado.racha.actual}</strong><span>Racha actual</span></div>
        <div class="stat-card"><strong>${pendientesHoy().length}</strong><span>Para repasar</span></div>
      </section>

      <section class="expedicion-bloque">
        <div class="expedicion-titulo"><span>Mi Atlas</span><small>Dominio basado en tus respuestas recientes</small></div>
        ${renderDominio()}
      </section>

      <section class="expedicion-bloque">
        <div class="expedicion-titulo"><span>Para repasar hoy</span><small>Los errores vuelven a aparecer con intervalos crecientes</small></div>
        ${renderRepaso()}
      </section>

      <section class="expedicion-bloque">
        <div class="expedicion-titulo"><span>Colección de expedición</span><small>${objetos} de ${OBJETOS.length} objetos</small></div>
        ${renderObjetos()}
      </section>

      <section class="expedicion-bloque">
        <div class="expedicion-titulo"><span>Logros</span><small>${logros} de ${LOGROS.length}</small></div>
        ${renderLogros()}
      </section>

      <section class="expedicion-bloque progreso-gestion">
        <div class="expedicion-titulo"><span>Progreso local</span><small>Solo en este dispositivo</small></div>
        <p>Puedes guardar una copia para trasladar el progreso a otro navegador o dispositivo.</p>
        <div class="progreso-acciones">
          <button type="button" id="progreso-exportar" class="btn-secundario">Exportar progreso</button>
          <button type="button" id="progreso-importar" class="btn-secundario">Importar progreso</button>
          <button type="button" id="progreso-borrar" class="btn-progreso-peligro">Borrar progreso</button>
        </div>
        <input id="progreso-import-file" class="oculto" type="file" accept="application/json,.json">
      </section>
    `;

    document.getElementById("progreso-exportar")?.addEventListener("click", exportarProgreso);
    document.getElementById("progreso-importar")?.addEventListener("click", () => document.getElementById("progreso-import-file")?.click());
    document.getElementById("progreso-import-file")?.addEventListener("change", importarProgreso);
    document.getElementById("progreso-borrar")?.addEventListener("click", borrarProgreso);
  }

  function renderTodo() {
    renderHome();
    if (!document.getElementById("progreso-expedicion")?.classList.contains("oculto")) renderExpedicion();
  }

  function activarProgreso() {
    progresoActivado = true;
    try { localStorage.setItem(ENABLED_KEY, "1"); } catch (_) {}
    estado = crearEstado();
    guardar();
    renderTodo();

    if (examenPendiente) {
      const pendiente = examenPendiente;
      examenPendiente = null;
      registrarExamenInterno(pendiente);
    }
  }

  function abrirExpedicion() {
    if (typeof ocultarTodasLasPantallas === "function") ocultarTodasLasPantallas();
    const pantalla = document.getElementById("progreso-expedicion");
    if (pantalla) pantalla.classList.remove("oculto");
    renderExpedicion();
  }

  function ocultarPantallasProgreso() {
    document.getElementById("progreso-expedicion")?.classList.add("oculto");
  }

  function resultadoVisible() {
    const ids = [
      "resultado-examen",
      "mapas-resultado-examen",
      "rios-resultado-examen",
      "mares-resultado-examen",
      "montanas-resultado-examen",
      "monedas-resultado-examen"
    ];
    return ids.map(id => document.getElementById(id)).find(el => el && !el.closest(".oculto"));
  }

  function limpiarTarjetaRecompensa() {
    document.querySelectorAll(".progreso-recompensa-examen").forEach(x => x.remove());
  }

  function mostrarInvitacionExamen() {
    limpiarTarjetaRecompensa();
    const cont = resultadoVisible();
    if (!cont) return;
    const card = document.createElement("div");
    card.className = "progreso-recompensa-examen progreso-recompensa-inactiva";
    card.innerHTML = `
      <div><span class="recompensa-kicker">Mi expedición</span><strong>Este examen puede darte PX</strong><small>Activa el progreso local para guardar niveles, dominio y logros.</small></div>
      <button type="button" class="btn-progreso-activar-examen">Activar y guardar este resultado</button>
    `;
    cont.insertAdjacentElement("afterend", card);
    card.querySelector("button")?.addEventListener("click", activarProgreso);
  }

  function descripcionDesbloqueo(n) {
    if (n.tipo === "objeto") {
      const obj = OBJETOS.find(x => x.id === n.id);
      return obj ? `${obj.icono} ${obj.nombre}` : n.id;
    }
    const logro = LOGROS.find(x => x.id === n.id);
    return logro ? `✓ ${logro.nombre}` : n.id;
  }

  function mostrarRecompensaExamen(reporte) {
    limpiarTarjetaRecompensa();
    const cont = resultadoVisible();
    if (!cont) return;

    const card = document.createElement("div");
    card.className = "progreso-recompensa-examen";
    const nivelSube = reporte.nivelDespues > reporte.nivelAntes;
    let nota = "";
    if (reporte.esRepaso) nota = "PX de repaso: se premia corregir errores anteriores.";
    else if (reporte.repetido) nota = "Este mismo examen ya dio PX hoy; el dominio sí se ha actualizado.";
    else if (reporte.porcentaje < 70) nota = "A partir del 70 % los exámenes conceden PX de resultado.";
    else nota = "Resultado registrado en tu expedición.";

    card.innerHTML = `
      <div class="recompensa-cabecera">
        <span class="recompensa-kicker">Mi expedición</span>
        <strong>${reporte.px > 0 ? `+${reporte.px} PX` : "Dominio actualizado"}</strong>
      </div>
      <div class="recompensa-nivel">Nivel ${reporte.nivelDespues} · ${escapeHTML(reporte.rango)}</div>
      <progress max="${PX_POR_NIVEL}" value="${progresoNivel()}" aria-label="Progreso al siguiente nivel"></progress>
      <small>${escapeHTML(nota)}</small>
      ${reporte.bonusDiario ? `<div class="recompensa-extra">+${reporte.bonusDiario} PX por primera actividad del día</div>` : ""}
      ${nivelSube ? `<div class="recompensa-desbloqueo"><strong>Nuevo nivel</strong><span>Has alcanzado el nivel ${reporte.nivelDespues}.</span></div>` : ""}
      ${reporte.nuevos.length ? `<div class="recompensa-desbloqueo"><strong>Nuevo desbloqueo</strong><span>${reporte.nuevos.map(descripcionDesbloqueo).map(escapeHTML).join(" · ")}</span></div>` : ""}
    `;

    cont.insertAdjacentElement("afterend", card);
  }

  function mostrarToastProgreso(reporte) {
    document.querySelector(".progreso-toast")?.remove();
    const toast = document.createElement("div");
    toast.className = "progreso-toast";
    const partes = [];
    if (reporte.nivelDespues > reporte.nivelAntes) partes.push(`Nivel ${reporte.nivelDespues}`);
    reporte.nuevos.forEach(n => partes.push(descripcionDesbloqueo(n)));
    toast.innerHTML = `<strong>Mi expedición</strong><span>${escapeHTML(partes.join(" · "))}</span>`;
    document.body.appendChild(toast);
    setTimeout(() => toast.remove(), 4500);
  }

  function exportarProgreso() {
    if (!progresoActivado) return;
    const blob = new Blob([JSON.stringify(estado, null, 2)], { type: "application/json" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = `geotrainer-progreso-${hoy()}.json`;
    document.body.appendChild(a);
    a.click();
    a.remove();
    URL.revokeObjectURL(url);
  }

  function importarProgreso(evento) {
    const archivo = evento.target.files?.[0];
    if (!archivo) return;
    const lector = new FileReader();
    lector.onload = () => {
      try {
        const datos = JSON.parse(String(lector.result || ""));
        if (!datos || typeof datos !== "object") throw new Error("Formato no válido");
        estado = normalizarEstado(datos);
        progresoActivado = true;
        try { localStorage.setItem(ENABLED_KEY, "1"); } catch (_) {}
        guardar();
        renderTodo();
        alert("Progreso importado correctamente.");
      } catch (_) {
        alert("No se ha podido importar este archivo de progreso.");
      }
      evento.target.value = "";
    };
    lector.readAsText(archivo);
  }

  function borrarProgreso() {
    if (!confirm("¿Quieres borrar de este dispositivo todos tus PX, niveles, logros y datos de repaso?")) return;
    try {
      localStorage.removeItem(STORAGE_KEY);
      localStorage.removeItem(ENABLED_KEY);
    } catch (_) {}
    progresoActivado = false;
    estado = crearEstado();
    examenPendiente = null;
    renderTodo();
    renderExpedicion();
  }

  // API pública usada por los distintos módulos de GeoTrainer.
  window.GeoProgress = {
    registrarEntrenamiento,
    registrarExamen,
    abrirExpedicion,
    ocultarPantallasProgreso,
    activo: () => progresoActivado,
    estado: () => JSON.parse(JSON.stringify(estado))
  };

  window.ocultarPantallasProgreso = ocultarPantallasProgreso;

  document.getElementById("volver-progreso-expedicion")?.addEventListener("click", () => {
    if (typeof mostrarInicioPrincipal === "function") mostrarInicioPrincipal();
  });

  renderTodo();
})();
