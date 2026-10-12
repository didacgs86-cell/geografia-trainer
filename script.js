// ==========================================
// GEOTRAINER - MOTOR DEL JUEGO
// Usa la base de datos GEO_DATA de countries.js
// ==========================================

if (typeof GEO_DATA === "undefined") {
  throw new Error("No se ha cargado countries.js antes de script.js");
}

// ==========================================
// ELEMENTOS HTML
// ==========================================

const inicio = document.getElementById("inicio");
const heroPrincipal = document.getElementById("hero-principal");
const configuracion = document.getElementById("configuracion");

const geografiaMenu =
  document.getElementById("geografia-menu");

const historiaMenu =
  document.getElementById("historia-menu");

const viajesMenu =
  document.getElementById("viajes-menu");

const mapasOrografiaMenu =
  document.getElementById("mapas-orografia-menu");

const contenidoDesarrollo =
  document.getElementById("contenido-desarrollo");

const avisoLegal =
  document.getElementById("aviso-legal");

const politicaPrivacidad =
  document.getElementById("politica-privacidad");

const politicaCookies =
  document.getElementById("politica-cookies");

const btnAvisoLegal =
  document.getElementById("btn-aviso-legal");

const btnPrivacidad =
  document.getElementById("btn-privacidad");

const btnCookies =
  document.getElementById("btn-cookies");

const btnVolverAvisoLegal =
  document.getElementById("volver-aviso-legal");

const btnVolverPrivacidad =
  document.getElementById("volver-privacidad");

const btnVolverCookies =
  document.getElementById("volver-cookies");

const tituloContenidoDesarrollo =
  document.getElementById("titulo-contenido-desarrollo");

const iconoContenidoDesarrollo =
  document.getElementById("icono-contenido-desarrollo");

const textoContenidoDesarrollo =
  document.getElementById("texto-contenido-desarrollo");

const btnGeografia =
  document.getElementById("btn-geografia");

const btnHistoria =
  document.getElementById("btn-historia");

const btnViajes =
  document.getElementById("btn-viajes");

const btnVolverGeografiaInicio =
  document.getElementById("volver-geografia-inicio");

const btnVolverHistoriaInicio =
  document.getElementById("volver-historia-inicio");

const btnVolverViajesInicio =
  document.getElementById("volver-viajes-inicio");

const btnMapasOrografia =
  document.getElementById("btn-mapas-orografia");

const btnVolverMapasOrografiaGeografia =
  document.getElementById("volver-mapas-orografia-geografia");

const btnMontanas =
  document.getElementById("btn-montanas");

const btnRios =
  document.getElementById("btn-rios");

const btnMapas =
  document.getElementById("btn-mapas");

const btnVolverContenidoDesarrollo =
  document.getElementById("volver-contenido-desarrollo");

const sabiasQueMenu =
  document.getElementById("sabiasque-menu");

const sabiasQueDetalle =
  document.getElementById("sabiasque-detalle");

const listaSabiasQue =
  document.getElementById("lista-sabiasque");

const contenidoSabiasQue =
  document.getElementById("contenido-sabiasque");
const sabiasQueSeccion =
  document.getElementById("sabiasque-seccion");

const contenidoSabiasQueSeccion =
  document.getElementById("contenido-sabiasque-seccion");

const btnVolverSabiasQuePais =
  document.getElementById("volver-sabiasque-pais");
const juego = document.getElementById("juego");
const finExamen = document.getElementById("fin-examen");
const espanaMenu = document.getElementById("espana-menu");
const espanaConfig = document.getElementById("espana-config");
const banderasMenu = document.getElementById("banderas-menu");

const btnCapitales = document.getElementById("btn-capitales");
const btnPaises = document.getElementById("btn-paises");
const btnBanderas = document.getElementById("btn-banderas");
const btnBanderaPais = document.getElementById("btn-bandera-pais");
const btnPaisBandera = document.getElementById("btn-pais-bandera");
const btnVolverBanderasInicio =
  document.getElementById("volver-banderas-inicio");
const btnEspana = document.getElementById("btn-espana");
const btnSabiasQue =
  document.getElementById("btn-sabiasque");

const btnMonedas =
  document.getElementById("btn-monedas");

const btnVolverSabiasQueInicio =
  document.getElementById("volver-sabiasque-inicio");

const btnVolverSabiasQueLista =
  document.getElementById("volver-sabiasque-lista");
const btnEspanaCapitales =
  document.getElementById("btn-espana-capitales");
const btnEspanaComunidades =
  document.getElementById("btn-espana-comunidades");
const btnEspanaProvinciaComunidad =
  document.getElementById("btn-espana-provincia-comunidad");

const btnEspanaComunidadProvincia =
  document.getElementById("btn-espana-comunidad-provincia");

const btnEspanaMixto =
  document.getElementById("btn-espana-mixto");
const tituloEspanaConfig =
  document.getElementById("titulo-espana-config");

const btnVolverEspanaMenu =
  document.getElementById("volver-espana-menu");
const btnEspanaEntrenamiento =
  document.getElementById("espana-entrenamiento");

const btnEspanaExamen10 =
  document.getElementById("espana-examen10");

const btnEspanaExamen20 =
  document.getElementById("espana-examen20");
const btnVolverInicio = document.getElementById("volver-inicio");
const btnVolverMenu = document.getElementById("volver-menu");
const btnVolverFin = document.getElementById("volver-fin");
const btnVolverEspanaInicio =
  document.getElementById("volver-espana-inicio");
const btnEmpezar = document.getElementById("btn-empezar");
const btnSiguiente = document.getElementById("siguiente");
const btnRepetirExamen = document.getElementById("repetir-examen");
const btnNuevoExamen = document.getElementById("nuevo-examen");
const btnRepasarFallos = document.getElementById("repasar-fallos");

const selectorContenido = document.getElementById("contenido");
const selectorContinente = document.getElementById("continente");
const selectorModoJuego = document.getElementById("modo-juego");

const tituloConfiguracion = document.getElementById("titulo-configuracion");

const tipoPartida = document.getElementById("tipo-partida");
const continentePartida = document.getElementById("continente-partida");

const textoNumeroPregunta = document.getElementById("numero-pregunta");
const textoAciertos = document.getElementById("aciertos");
const textoFallos = document.getElementById("fallos");

const textoPregunta = document.getElementById("pregunta");
const contenedorRespuestas = document.getElementById("respuestas");
const resultado = document.getElementById("resultado");

const mapaError = document.getElementById("mapa-error");
const mapaTitulo = document.getElementById("mapa-titulo");
const mapaSvg = document.getElementById("mapa-svg");

const resultadoExamen = document.getElementById("resultado-examen");
const revisionExamenFinal = document.getElementById("revision-examen-final");
const textoTemporizador = document.getElementById("temporizador");

const pausaEntrenamiento =
  document.getElementById("pausa-entrenamiento");

const textoPausaEntrenamiento =
  document.getElementById("texto-pausa-entrenamiento");

const btnContinuarEntrenamiento =
  document.getElementById("continuar-entrenamiento");

const btnSalirEntrenamiento =
  document.getElementById("salir-entrenamiento");

// ==========================================
// ESTADO DEL JUEGO
// ==========================================

let tipoJuego = "capitales";
let contenidoSeleccionado = "estados";
let regionSeleccionada = "Todos";
let modoSeleccionado = "entrenamiento";
let modoEspana = null;
let tipoPracticaEspana = "entrenamiento";
let totalPreguntasEspana = null;
let listaPreguntasEspana = [];
let colaPreguntasEspana = [];
let listaPreguntas = [];
let colaPreguntas = [];
let preguntaActual = null;
let publicacionSabiasQueActual = null;

let numeroPregunta = 0;

// Control específico del modo Entrenamiento.
// Cuenta preguntas CONTESTADAS, no solo mostradas.
let preguntasContestadasEntrenamiento = 0;
let pausaEntrenamientoPendiente = false;
let aciertos = 0;
let fallos = 0;

let totalPreguntasExamen = null;
let yaRespondida = false;

const TIEMPO_POR_PREGUNTA = 10;
let tiempoRestante = TIEMPO_POR_PREGUNTA;
let temporizadorId = null;
let avanceAutomaticoId = null;

// Estado adicional de los exámenes para poder revisar,
// repetir exactamente el mismo examen y generar uno nuevo.
let planExamenActual = [];
let historialExamen = [];
let examenFinalizadoActual = null;
let ultimoExamenCompleto = null;
let esRepasoFallosActivo = false;
let cantidadExamenEspanaConfigurada = null;


// ==========================================
// TEMPORIZADOR DE EXAMEN
// ==========================================

function esExamenActivo() {

  if (modoEspana !== null) {
    return totalPreguntasEspana !== null;
  }

  return totalPreguntasExamen !== null;
}


function detenerIntervaloTemporizador() {

  if (temporizadorId !== null) {
    clearInterval(temporizadorId);
    temporizadorId = null;
  }
}


function cancelarAvanceAutomatico() {

  if (avanceAutomaticoId !== null) {
    clearTimeout(avanceAutomaticoId);
    avanceAutomaticoId = null;
  }
}


function cancelarTemporizadores() {

  detenerIntervaloTemporizador();
  cancelarAvanceAutomatico();

  if (textoTemporizador) {
    textoTemporizador.classList.add("oculto");
    textoTemporizador.classList.remove("urgente");
  }
}


function actualizarTemporizadorVisual() {

  if (!textoTemporizador) return;

  textoTemporizador.textContent =
    `⏱ ${tiempoRestante} s`;

  textoTemporizador.classList.toggle(
    "urgente",
    tiempoRestante <= 3
  );
}


function iniciarTemporizadorPregunta() {

  detenerIntervaloTemporizador();
  cancelarAvanceAutomatico();

  if (!textoTemporizador) return;

  if (!esExamenActivo()) {
    textoTemporizador.classList.add("oculto");
    textoTemporizador.classList.remove("urgente");
    return;
  }

  tiempoRestante = TIEMPO_POR_PREGUNTA;

  textoTemporizador.classList.remove("oculto");
  actualizarTemporizadorVisual();

  temporizadorId = setInterval(() => {

    tiempoRestante--;
    actualizarTemporizadorVisual();

    if (tiempoRestante <= 0) {

      detenerIntervaloTemporizador();
      gestionarTiempoAgotado();

    }

  }, 1000);
}


function prepararAvanceTrasTiempoAgotado() {

  avanceAutomaticoId = setTimeout(() => {

    avanceAutomaticoId = null;

    if (modoEspana !== null) {
      generarPreguntaEspana();
    } else {
      generarPregunta();
    }

  }, 1500);
}


function gestionarTiempoAgotado() {

  if (yaRespondida || !esExamenActivo()) return;

  if (modoEspana !== null) {
    gestionarTiempoAgotadoEspana();
  } else {
    gestionarTiempoAgotadoMundo();
  }
}


function gestionarTiempoAgotadoMundo() {

  yaRespondida = true;
  fallos++;

  const correcta =
    obtenerRespuestaCorrecta();

  registrarResultadoExamen(
    correcta,
    null,
    true
  );

  const botones =
    contenedorRespuestas.querySelectorAll("button");

  botones.forEach(boton => {

    boton.disabled = true;

    if (boton.textContent === correcta) {
      boton.classList.add("correcta");
    }

  });

  resultado.innerHTML = `

    ⏱ Tiempo agotado.

    <br><br>

    ${crearResumenPregunta(
      preguntaActual
    )}

  `;

  actualizarMarcador();

  btnSiguiente.textContent =
    numeroPregunta === totalPreguntasExamen
      ? "Ver resultado →"
      : "Siguiente pregunta →";

  btnSiguiente.classList.remove("oculto");

  prepararAvanceTrasTiempoAgotado();
}


function gestionarTiempoAgotadoEspana() {

  yaRespondida = true;
  fallos++;

  let correcta;

  if (preguntaActual.tipoPregunta === "capitales") {
    correcta = preguntaActual.capital;
  }

  if (preguntaActual.tipoPregunta === "provincia-comunidad") {
    correcta = preguntaActual.comunidad;
  }

  if (preguntaActual.tipoPregunta === "comunidad-provincia") {
    correcta = preguntaActual.provincia;
  }

  if (preguntaActual.tipoPregunta === "ciudad-autonoma") {
    correcta = preguntaActual.ciudad;
  }

  registrarResultadoExamen(
    correcta,
    null,
    true
  );

  const botones =
    contenedorRespuestas.querySelectorAll("button");

  botones.forEach(boton => {

    boton.disabled = true;

    if (boton.textContent === correcta) {
      boton.classList.add("correcta");
    }

  });

  resultado.innerHTML = `
    ⏱ Tiempo agotado.
    <br><br>
    ${textoExplicacionEspana()}
  `;

  actualizarMarcador();

  btnSiguiente.textContent =
    numeroPregunta === totalPreguntasEspana
      ? "Ver resultado →"
      : "Siguiente pregunta →";

  btnSiguiente.classList.remove("oculto");

  prepararAvanceTrasTiempoAgotado();
}



// ==========================================
// MEMORIA Y REVISIÓN DE EXÁMENES
// ==========================================

function clonarPregunta(pregunta) {
  return { ...pregunta };
}


function crearPlanExamenDesdePreguntas(preguntas) {

  return preguntas.map(pregunta => ({
    pregunta: clonarPregunta(pregunta),
    respuestas: null
  }));
}


function clonarPlanExamen(plan) {

  return plan.map(item => ({
    pregunta: clonarPregunta(item.pregunta),
    respuestas:
      Array.isArray(item.respuestas)
        ? [...item.respuestas]
        : null
  }));
}


function reiniciarRegistroExamen(plan, esRepaso = false) {

  planExamenActual = clonarPlanExamen(plan);
  historialExamen = [];
  examenFinalizadoActual = null;
  esRepasoFallosActivo = esRepaso;
}


function limpiarRegistroExamen() {

  planExamenActual = [];
  historialExamen = [];
  examenFinalizadoActual = null;
  esRepasoFallosActivo = false;
}


function obtenerRespuestasPlanActual(generador) {

  if (!esExamenActivo()) {
    return generador();
  }

  const indice = numeroPregunta - 1;
  const item = planExamenActual[indice];

  if (
    item &&
    Array.isArray(item.respuestas) &&
    item.respuestas.length > 0
  ) {
    return [...item.respuestas];
  }

  const respuestas = generador();

  if (item) {
    item.respuestas = [...respuestas];
  }

  return respuestas;
}


function registrarResultadoExamen(
  correcta,
  seleccionada,
  tiempoAgotado = false
) {

  if (!esExamenActivo()) return;

  const indice = numeroPregunta - 1;
  const itemPlan = planExamenActual[indice];

  historialExamen[indice] = {
    pregunta: clonarPregunta(preguntaActual),
    respuestas:
      itemPlan && Array.isArray(itemPlan.respuestas)
        ? [...itemPlan.respuestas]
        : [],
    correcta,
    seleccionada,
    acertada:
      !tiempoAgotado &&
      seleccionada === correcta,
    tiempoAgotado
  };
}


function clonarResultadosExamen(resultados) {

  return resultados
    .filter(Boolean)
    .map(item => ({
      pregunta: clonarPregunta(item.pregunta),
      respuestas: [...item.respuestas],
      correcta: item.correcta,
      seleccionada: item.seleccionada,
      acertada: item.acertada,
      tiempoAgotado: item.tiempoAgotado
    }));
}


function guardarExamenFinalizado() {

  const snapshot = {
    esEspana: modoEspana !== null,
    tipoJuego,
    modoEspana,
    tipoPracticaEspana,
    contenidoSeleccionado,
    regionSeleccionada,
    modoSeleccionado,
    cantidadExamenEspanaConfigurada,
    esRepaso: esRepasoFallosActivo,
    plan: clonarPlanExamen(planExamenActual),
    resultados: clonarResultadosExamen(historialExamen)
  };

  examenFinalizadoActual = snapshot;

  if (!esRepasoFallosActivo) {
    ultimoExamenCompleto = {
      ...snapshot,
      plan: clonarPlanExamen(snapshot.plan),
      resultados:
        clonarResultadosExamen(snapshot.resultados)
    };
  }

  return snapshot;
}


function obtenerClavesUltimoExamenMundo() {

  if (
    !ultimoExamenCompleto ||
    ultimoExamenCompleto.esEspana ||
    ultimoExamenCompleto.tipoJuego !== tipoJuego ||
    ultimoExamenCompleto.contenidoSeleccionado !== contenidoSeleccionado ||
    ultimoExamenCompleto.regionSeleccionada !== regionSeleccionada
  ) {
    return new Set();
  }

  return new Set(
    ultimoExamenCompleto.plan.map(
      item => clavePreguntaMundo(item.pregunta)
    )
  );
}


function seleccionarPreguntasMundoExamen(
  cantidad,
  evitarExamenAnterior = false
) {

  const barajadas = crearColaPreguntasMundo();

  if (!evitarExamenAnterior) {
    return barajadas.slice(0, cantidad);
  }

  const anteriores = obtenerClavesUltimoExamenMundo();

  if (anteriores.size === 0) {
    return barajadas.slice(0, cantidad);
  }

  const nuevas = barajadas.filter(
    p => !anteriores.has(clavePreguntaMundo(p))
  );

  const repetibles = barajadas.filter(
    p => anteriores.has(clavePreguntaMundo(p))
  );

  // Si el banco permite un examen totalmente distinto,
  // no se repite ninguna pregunta del examen anterior.
  // Si no hay suficientes, se minimiza el solapamiento.
  return [
    ...nuevas,
    ...repetibles
  ].slice(0, cantidad);
}


function obtenerClavesUltimoExamenEspana() {

  if (
    !ultimoExamenCompleto ||
    !ultimoExamenCompleto.esEspana ||
    ultimoExamenCompleto.modoEspana !== modoEspana
  ) {
    return new Set();
  }

  return new Set(
    ultimoExamenCompleto.plan.map(
      item => clavePreguntaEspana(item.pregunta)
    )
  );
}


function seleccionarPreguntasEspanaExamen(
  cantidad,
  evitarExamenAnterior = false
) {

  const barajadas = crearColaPreguntasEspana();

  if (!evitarExamenAnterior) {
    return barajadas.slice(0, cantidad);
  }

  const anteriores = obtenerClavesUltimoExamenEspana();

  if (anteriores.size === 0) {
    return barajadas.slice(0, cantidad);
  }

  const nuevas = barajadas.filter(
    p => !anteriores.has(clavePreguntaEspana(p))
  );

  const repetibles = barajadas.filter(
    p => anteriores.has(clavePreguntaEspana(p))
  );

  return [
    ...nuevas,
    ...repetibles
  ].slice(0, cantidad);
}


function formatearRespuestaRevisionMundo(valor, tipo) {

  if (valor === null || valor === undefined) {
    return "Sin respuesta";
  }

  if (tipo === "pais-bandera") {
    return `<span class="revision-bandera-mini">${escaparHTML(valor)}</span>`;
  }

  return `<strong>${escaparHTML(valor)}</strong>`;
}


function crearRelacionCorrectaMundo(pregunta, tipo) {

  const bandera = banderaDe(pregunta);
  const banderaHtml = bandera
    ? `<span class="revision-bandera-mini">${escaparHTML(bandera)}</span>`
    : "";

  if (tipo === "capitales") {
    return `
      ${banderaHtml}
      <strong>${escaparHTML(pregunta.pais)}</strong>
      <span class="revision-flecha">→</span>
      <strong>${escaparHTML(pregunta.capital)}</strong>
    `;
  }

  if (tipo === "paises") {
    return `
      <strong>${escaparHTML(pregunta.capital)}</strong>
      <span class="revision-flecha">→</span>
      ${banderaHtml}
      <strong>${escaparHTML(pregunta.pais)}</strong>
    `;
  }

  if (tipo === "bandera-pais") {
    return `
      <span class="revision-bandera">${escaparHTML(bandera)}</span>
      <strong>${escaparHTML(pregunta.pais)}</strong>
    `;
  }

  return `
    <strong>${escaparHTML(pregunta.pais)}</strong>
    <span class="revision-flecha">→</span>
    <span class="revision-bandera">${escaparHTML(bandera)}</span>
  `;
}


function crearRelacionCorrectaEspana(pregunta) {

  if (pregunta.tipoPregunta === "capitales") {
    return `
      <strong>${escaparHTML(pregunta.provincia)}</strong>
      <span class="revision-flecha">→</span>
      <strong>${escaparHTML(pregunta.capital)}</strong>
    `;
  }

  if (pregunta.tipoPregunta === "provincia-comunidad") {
    return `
      <strong>${escaparHTML(pregunta.provincia)}</strong>
      <span class="revision-flecha">→</span>
      <strong>${escaparHTML(pregunta.comunidad)}</strong>
    `;
  }

  if (pregunta.tipoPregunta === "comunidad-provincia") {
    return `
      <strong>${escaparHTML(pregunta.comunidad)}</strong>
      <span class="revision-flecha">→</span>
      <strong>${escaparHTML(pregunta.provincia)}</strong>
    `;
  }

  return `
    <strong>${escaparHTML(pregunta.ciudad)}</strong>
    <span class="revision-flecha">→</span>
    <strong>Ciudad autónoma</strong>
  `;
}


function crearRevisionExamen(snapshot) {

  if (
    !snapshot ||
    !Array.isArray(snapshot.resultados) ||
    snapshot.resultados.length === 0
  ) {
    return `
      <div class="revision-examen">
        <h3>📚 Revisión del examen</h3>
        <p class="revision-intro">
          No se han podido recuperar las respuestas de este examen.
        </p>
      </div>
    `;
  }

  const tarjetas = snapshot.resultados.map(
    (item, indice) => {

      const clase = item.acertada
        ? "acierto"
        : "fallo";

      const estado = item.acertada
        ? "✅ Correcta"
        : item.tiempoAgotado
          ? "⏱ Tiempo agotado"
          : "❌ Incorrecta";

      const relacion = snapshot.esEspana
        ? crearRelacionCorrectaEspana(item.pregunta)
        : crearRelacionCorrectaMundo(
            item.pregunta,
            snapshot.tipoJuego
          );

      let respuestaUsuario = "";
      let explicacionBanderaRevision = "";

      if (
        !item.acertada &&
        !snapshot.esEspana &&
        (
          snapshot.tipoJuego === "bandera-pais" ||
          snapshot.tipoJuego === "pais-bandera"
        )
      ) {

        explicacionBanderaRevision = `
          <div class="revision-bandera-explicacion">
            <div class="revision-bandera-explicacion-titulo">
              💡 Para recordarla
            </div>
            <div>
              ${escaparHTML(
                explicacionBandera(
                  item.pregunta
                )
              )}
            </div>
          </div>
        `;
      }

      if (!item.acertada) {

        if (item.tiempoAgotado) {
          respuestaUsuario = `
            <div class="revision-tu-respuesta">
              Tu respuesta: <strong>sin respuesta</strong>
            </div>
          `;
        } else if (snapshot.esEspana) {
          respuestaUsuario = `
            <div class="revision-tu-respuesta">
              Tu respuesta:
              <strong>${escaparHTML(item.seleccionada)}</strong>
            </div>
          `;
        } else {
          respuestaUsuario = `
            <div class="revision-tu-respuesta">
              Tu respuesta:
              ${formatearRespuestaRevisionMundo(
                item.seleccionada,
                snapshot.tipoJuego
              )}
            </div>
          `;
        }
      }

      return `
        <div class="revision-item ${clase}">

          <div class="revision-cabecera">
            <span>Pregunta ${indice + 1}</span>
            <span>${estado}</span>
          </div>

          <div class="revision-correcta">
            ${relacion}
          </div>

          ${respuestaUsuario}

          ${explicacionBanderaRevision}

        </div>
      `;
    }
  ).join("");

  return `
    <div class="revision-examen">

      <h3>📚 Revisión del examen</h3>

      <p class="revision-intro">
        Estas son todas las respuestas correctas.
        Las preguntas falladas aparecen destacadas para que puedas repasarlas.
      </p>

      <div class="revision-lista">
        ${tarjetas}
      </div>

    </div>
  `;
}


function actualizarBotonesFinExamen(snapshot) {

  btnRepetirExamen.textContent = snapshot.esRepaso
    ? "↻ Repetir este repaso"
    : "↻ Repetir este examen";

  const fallosSnapshot = snapshot.resultados.filter(
    item => !item.acertada
  );

  if (fallosSnapshot.length > 0) {
    btnRepasarFallos.textContent =
      `🎯 Repasar solo mis fallos (${fallosSnapshot.length})`;
    btnRepasarFallos.classList.remove("oculto");
  } else {
    btnRepasarFallos.classList.add("oculto");
  }
}


function resetearContadoresExamen() {

  numeroPregunta = 0;
  aciertos = 0;
  fallos = 0;
  yaRespondida = false;
  preguntaActual = null;
  ocultarMapa();
}


function iniciarExamenMundoDesdePlan(
  snapshot,
  plan,
  esRepaso = false
) {

  modoEspana = null;
  tipoJuego = snapshot.tipoJuego;
  contenidoSeleccionado = snapshot.contenidoSeleccionado;
  regionSeleccionada = snapshot.regionSeleccionada;
  modoSeleccionado = snapshot.modoSeleccionado;

  resetearContadoresExamen();

  listaPreguntas = prepararListaPreguntasMundo(
    GEO_DATA
      .filter(esEntradaDelContenido)
      .filter(esEntradaDeLaRegion)
      .filter(esAptaParaJuego)
  );

  totalPreguntasExamen = plan.length;
  colaPreguntas = plan.map(
    item => clonarPregunta(item.pregunta)
  );

  reiniciarRegistroExamen(plan, esRepaso);

  ocultarTodasLasPantallas();
  juego.classList.remove("oculto");

  tipoPartida.textContent = etiquetaTipoJuego();

  continentePartida.textContent =
    regionSeleccionada === "Todos"
      ? `🌎 Todo el mundo · ${etiquetaContenido()}`
      : `🌎 ${regionSeleccionada} · ${etiquetaContenido()}`;

  actualizarMarcador();
  generarPregunta();
}


function nombreModoEspanaActual() {

  if (modoEspana === "capitales") {
    return "Capitales de provincia";
  }

  if (modoEspana === "comunidades") {
    return "Comunidades autónomas";
  }

  if (modoEspana === "provincia-comunidad") {
    return "Provincia → Comunidad";
  }

  if (modoEspana === "comunidad-provincia") {
    return "Comunidad → Provincia";
  }

  return "Modo mixto";
}


function mostrarCabeceraJuegoEspana() {

  tipoPartida.textContent = "🇪🇸 España";
  continentePartida.textContent = nombreModoEspanaActual();
}


function iniciarExamenEspanaDesdePlan(
  snapshot,
  plan,
  esRepaso = false
) {

  modoEspana = snapshot.modoEspana;
  tipoPracticaEspana = "examen";
  cantidadExamenEspanaConfigurada =
    snapshot.cantidadExamenEspanaConfigurada || plan.length;

  resetearContadoresExamen();

  listaPreguntasEspana = crearBancoPreguntasEspana();
  totalPreguntasEspana = plan.length;
  colaPreguntasEspana = plan.map(
    item => clonarPregunta(item.pregunta)
  );

  reiniciarRegistroExamen(plan, esRepaso);

  ocultarTodasLasPantallas();
  juego.classList.remove("oculto");

  mostrarCabeceraJuegoEspana();
  actualizarMarcador();
  generarPreguntaEspana();
}


function repetirExamenFinalizado() {

  if (!examenFinalizadoActual) return;

  const snapshot = examenFinalizadoActual;
  const plan = clonarPlanExamen(snapshot.plan);

  if (snapshot.esEspana) {
    iniciarExamenEspanaDesdePlan(
      snapshot,
      plan,
      snapshot.esRepaso
    );
  } else {
    iniciarExamenMundoDesdePlan(
      snapshot,
      plan,
      snapshot.esRepaso
    );
  }
}


function iniciarNuevoExamen() {

  if (!examenFinalizadoActual) return;

  const snapshot = examenFinalizadoActual;

  if (snapshot.esEspana) {

    modoEspana = snapshot.modoEspana;

    iniciarJuegoEspana(
      "examen",
      snapshot.cantidadExamenEspanaConfigurada || 10,
      true
    );

  } else {

    tipoJuego = snapshot.tipoJuego;
    contenidoSeleccionado = snapshot.contenidoSeleccionado;
    regionSeleccionada = snapshot.regionSeleccionada;
    modoSeleccionado = snapshot.modoSeleccionado;

    prepararPartida(true);
  }
}


function repasarFallosExamen() {

  if (!examenFinalizadoActual) return;

  const snapshot = examenFinalizadoActual;

  const resultadosFallados = snapshot.resultados.filter(
    item => !item.acertada
  );

  if (resultadosFallados.length === 0) return;

  const planFallos = resultadosFallados.map(item => ({
    pregunta: clonarPregunta(item.pregunta),
    respuestas: [...item.respuestas]
  }));

  if (snapshot.esEspana) {
    iniciarExamenEspanaDesdePlan(
      snapshot,
      planFallos,
      true
    );
  } else {
    iniciarExamenMundoDesdePlan(
      snapshot,
      planFallos,
      true
    );
  }
}


// ==========================================
// COORDENADAS EXTRA PARA ALGUNOS LUGARES
// ==========================================

const COORDENADAS_EXTRA = {
  AD: { lat: 42.5063, lon: 1.5218 },
  VA: { lat: 41.9029, lon: 12.4534 },
  CW: { lat: 12.1696, lon: -68.99 },
  AX: { lat: 60.1785, lon: 19.9156 },
  TC: { lat: 21.694, lon: -71.7979 },
  VG: { lat: 18.4207, lon: -64.64 },
  VI: { lat: 18.3358, lon: -64.8963 },
  ME: { lat: 42.7087, lon: 19.3744 },
  MM: { lat: 21.9162, lon: 95.956 },
  PS: { lat: 31.9522, lon: 35.2332 },
  BL: { lat: 17.9, lon: -62.8333 },
  MF: { lat: 18.0708, lon: -63.0501 },
  SX: { lat: 18.0425, lon: -63.0548 }
};


// ==========================================
// NAVEGACIÓN PRINCIPAL
// ==========================================

function mostrarInicioPrincipal() {

  ocultarTodasLasPantallas();

  if (heroPrincipal) {
    heroPrincipal.classList.remove("oculto");
  }

  inicio.classList.remove("oculto");
}


function mostrarAvisoLegal() {

  ocultarTodasLasPantallas();

  avisoLegal.classList.remove("oculto");
}


function mostrarPoliticaPrivacidad() {

  ocultarTodasLasPantallas();

  politicaPrivacidad.classList.remove("oculto");
}


function mostrarPoliticaCookies() {

  ocultarTodasLasPantallas();

  politicaCookies.classList.remove("oculto");
}


btnAvisoLegal.addEventListener(
  "click",
  mostrarAvisoLegal
);

btnPrivacidad.addEventListener(
  "click",
  mostrarPoliticaPrivacidad
);

btnCookies.addEventListener(
  "click",
  mostrarPoliticaCookies
);

btnVolverAvisoLegal.addEventListener(
  "click",
  mostrarInicioPrincipal
);

btnVolverPrivacidad.addEventListener(
  "click",
  mostrarInicioPrincipal
);

btnVolverCookies.addEventListener(
  "click",
  mostrarInicioPrincipal
);


// ==========================================
// MENÚS PRINCIPALES
// ==========================================

function mostrarGeografiaMenu() {

  ocultarTodasLasPantallas();

  geografiaMenu.classList.remove("oculto");
}


function mostrarHistoriaMenu() {

  ocultarTodasLasPantallas();

  historiaMenu.classList.remove("oculto");
}


function mostrarViajesMenu() {

  ocultarTodasLasPantallas();

  viajesMenu.classList.remove("oculto");
}


function mostrarMapasOrografiaMenu() {

  ocultarTodasLasPantallas();

  mapasOrografiaMenu.classList.remove("oculto");
}


let contenidoDesarrolloVolverA =
  mostrarMapasOrografiaMenu;


function mostrarContenidoDesarrollo(
  titulo,
  icono,
  texto,
  volverA = mostrarMapasOrografiaMenu
) {

  ocultarTodasLasPantallas();

  contenidoDesarrollo.classList.remove("oculto");

  contenidoDesarrolloVolverA =
    typeof volverA === "function"
      ? volverA
      : mostrarMapasOrografiaMenu;

  tituloContenidoDesarrollo.textContent = titulo;
  iconoContenidoDesarrollo.textContent = icono;
  textoContenidoDesarrollo.textContent = texto;
}


btnGeografia.addEventListener(
  "click",
  mostrarGeografiaMenu
);

btnHistoria.addEventListener(
  "click",
  mostrarHistoriaMenu
);

btnViajes.addEventListener(
  "click",
  mostrarViajesMenu
);

btnVolverGeografiaInicio.addEventListener(
  "click",
  mostrarInicioPrincipal
);

btnVolverHistoriaInicio.addEventListener(
  "click",
  mostrarInicioPrincipal
);

btnVolverViajesInicio.addEventListener(
  "click",
  mostrarInicioPrincipal
);

btnMapasOrografia.addEventListener(
  "click",
  mostrarMapasOrografiaMenu
);

btnVolverMapasOrografiaGeografia.addEventListener(
  "click",
  mostrarGeografiaMenu
);

btnMontanas.addEventListener(
  "click",
  () => {
    mostrarContenidoDesarrollo(
      "Montañas",
      "⛰️",
      "Aquí construiremos la práctica de montañas, cordilleras y grandes cumbres."
    );
  }
);

btnRios.addEventListener(
  "click",
  () => {
    abrirRiosMenu();
  }
);

btnMapas.addEventListener(
  "click",
  () => {
    abrirMapasMenu();
  }
);

btnVolverContenidoDesarrollo.addEventListener(
  "click",
  () => {
    contenidoDesarrolloVolverA();
  }
);


// ==========================================
// MENÚ DE GEOGRAFÍA
// ==========================================

btnCapitales.addEventListener("click", () => {
  abrirConfiguracion("capitales");
});

btnPaises.addEventListener("click", () => {
  abrirConfiguracion("paises");
});

btnBanderas.addEventListener("click", () => {

  ocultarTodasLasPantallas();

  banderasMenu.classList.remove("oculto");

});

btnVolverBanderasInicio.addEventListener(
  "click",
  volverAlMenu
);

btnBanderaPais.addEventListener("click", () => {
  abrirConfiguracion("bandera-pais");
});

btnPaisBandera.addEventListener("click", () => {
  abrirConfiguracion("pais-bandera");
});

btnEspana.addEventListener("click", () => {

  ocultarTodasLasPantallas();

  espanaMenu.classList.remove("oculto");

});


// ==========================================
// MENÚ DE VIAJES
// ==========================================

btnSabiasQue.addEventListener("click", () => {

  ocultarTodasLasPantallas();

  sabiasQueMenu.classList.remove("oculto");

  mostrarListaSabiasQue();

});

btnMonedas.addEventListener("click", () => {
  abrirMonedasMenu();
});


btnVolverSabiasQueInicio.addEventListener(
  "click",
  mostrarViajesMenu
);


btnVolverSabiasQueLista.addEventListener(
  "click",
  () => {

    ocultarTodasLasPantallas();

    sabiasQueMenu.classList.remove("oculto");

  }
);
btnVolverSabiasQuePais.addEventListener(
  "click",
  () => {

    if (publicacionSabiasQueActual) {

      mostrarDetalleSabiasQue(
        publicacionSabiasQueActual
      );

    }

  }
);
btnEspanaCapitales.addEventListener("click", () => {
  abrirConfiguracionEspana(
    "capitales",
    "Capitales de provincia"
  );
});
btnEspanaComunidades.addEventListener("click", () => {
  abrirConfiguracionEspana(
    "comunidades",
    "Comunidades autónomas"
  );
});
btnEspanaProvinciaComunidad.addEventListener("click", () => {
  abrirConfiguracionEspana(
    "provincia-comunidad",
    "Provincia → Comunidad"
  );
});

btnEspanaComunidadProvincia.addEventListener("click", () => {
  abrirConfiguracionEspana(
    "comunidad-provincia",
    "Comunidad → Provincia"
  );
});

btnEspanaMixto.addEventListener("click", () => {
  abrirConfiguracionEspana(
    "mixto",
    "Modo mixto"
  );
});
function abrirConfiguracionEspana(modo, titulo) {

  modoEspana = modo;

  ocultarTodasLasPantallas();

  espanaConfig.classList.remove("oculto");

  tituloEspanaConfig.textContent = titulo;
}
btnVolverEspanaMenu.addEventListener("click", () => {

  ocultarTodasLasPantallas();

  espanaMenu.classList.remove("oculto");

});
btnEspanaEntrenamiento.addEventListener("click", () => {
  iniciarJuegoEspana("entrenamiento", null);
});

btnEspanaExamen10.addEventListener("click", () => {
  iniciarJuegoEspana("examen", 10);
});

btnEspanaExamen20.addEventListener("click", () => {
  iniciarJuegoEspana("examen", 20);
});
function abrirConfiguracion(tipo) {
  modoEspana = null;
  tipoJuego = tipo;

  ocultarTodasLasPantallas();

  configuracion.classList.remove("oculto");

  const titulos = {
    capitales: "🏛️ Practicar capitales",
    paises: "🌍 Practicar países",
    "bandera-pais": "🚩 Bandera → País",
    "pais-bandera": "🚩 País → Bandera"
  };

  tituloConfiguracion.textContent =
    titulos[tipoJuego] || "Configurar partida";
}


// ==========================================
// VOLVER
// ==========================================

btnVolverInicio.addEventListener("click", () => {

  if (esJuegoBanderas()) {

    ocultarTodasLasPantallas();

    banderasMenu.classList.remove("oculto");

    return;
  }

  volverAlMenu();

});
btnVolverMenu.addEventListener("click", volverAlMenu);
btnVolverFin.addEventListener("click", volverAlMenu);
btnVolverEspanaInicio.addEventListener(
  "click",
  volverAlMenu
);

function volverAlMenu() {

  mostrarGeografiaMenu();
}


// ==========================================
// EMPEZAR PARTIDA
// ==========================================

btnEmpezar.addEventListener("click", () => {

  contenidoSeleccionado = selectorContenido.value;

  regionSeleccionada = selectorContinente.value;

  modoSeleccionado = selectorModoJuego.value;

  prepararPartida();

});


function prepararPartida(evitarExamenAnterior = false) {

  numeroPregunta = 0;
  preguntasContestadasEntrenamiento = 0;
  pausaEntrenamientoPendiente = false;
  aciertos = 0;
  fallos = 0;

  yaRespondida = false;
  preguntaActual = null;

  ocultarMapa();


  // FILTRAR BASE DE DATOS Y ELIMINAR
  // PREGUNTAS DUPLICADAS O AMBIGUAS

  listaPreguntas = prepararListaPreguntasMundo(
    GEO_DATA
      .filter(esEntradaDelContenido)
      .filter(esEntradaDeLaRegion)
      .filter(esAptaParaJuego)
  );


  if (listaPreguntas.length === 0) {

    alert(
      "No hay preguntas disponibles con esa combinación. " +
      "Prueba otra región o tipo de contenido."
    );

    return;
  }


  // CONFIGURAR EXAMEN

  let preguntasSolicitadas = null;

  if (modoSeleccionado === "examen10") {
    preguntasSolicitadas = 10;
  }

  if (modoSeleccionado === "examen20") {
    preguntasSolicitadas = 20;
  }


  if (preguntasSolicitadas !== null) {

    totalPreguntasExamen =
      Math.min(
        preguntasSolicitadas,
        listaPreguntas.length
      );


    if (
      totalPreguntasExamen <
      preguntasSolicitadas
    ) {

      alert(
        `Esta selección tiene ${listaPreguntas.length} lugares disponibles. ` +
        `El examen será de ${totalPreguntasExamen} preguntas sin repetir.`
      );

    }


    colaPreguntas =
      seleccionarPreguntasMundoExamen(
        totalPreguntasExamen,
        evitarExamenAnterior
      );

    reiniciarRegistroExamen(
      crearPlanExamenDesdePreguntas(colaPreguntas),
      false
    );

  }

  else {

    totalPreguntasExamen = null;

    colaPreguntas =
      crearColaPreguntasMundo();

    limpiarRegistroExamen();

  }


  ocultarTodasLasPantallas();

  juego.classList.remove("oculto");


  tipoPartida.textContent =
    etiquetaTipoJuego();


  continentePartida.textContent =

    regionSeleccionada === "Todos"

      ? `🌎 Todo el mundo · ${etiquetaContenido()}`

      : `🌎 ${regionSeleccionada} · ${etiquetaContenido()}`;


  actualizarMarcador();

  generarPregunta();
}


// ==========================================
// FILTROS
// ==========================================

function esEntradaDelContenido(p) {

  if (contenidoSeleccionado === "estados") {

    return p.categoria === "estado";

  }


  if (contenidoSeleccionado === "territorios") {

    return p.categoria === "territorio";

  }


  // "todos" incluye:
  // estados + territorios + casos especiales

  return true;
}


function esEntradaDeLaRegion(p) {

  if (regionSeleccionada === "Todos") {

    return true;

  }

  return obtenerRegion(p) === regionSeleccionada;
}


function esAptaParaCapitales(p) {

  return (
    p.quizCapital === true &&
    Boolean(p.capital)
  );
}


function esJuegoBanderas() {

  return (
    tipoJuego === "bandera-pais" ||
    tipoJuego === "pais-bandera"
  );
}


function tieneBandera(p) {

  return (
    typeof p.iso2 === "string" &&
    /^[A-Z]{2}$/.test(p.iso2)
  );
}


function esAptaParaJuego(p) {

  if (esJuegoBanderas()) {

    return tieneBandera(p);

  }

  return esAptaParaCapitales(p);
}


// ==========================================
// EVITAR PREGUNTAS REPETIDAS
// ==========================================

function clavePreguntaMundo(p) {

  if (tipoJuego === "capitales") {
    return `capitales|${p.pais}`;
  }

  if (tipoJuego === "paises") {
    return `paises|${p.capital}`;
  }

  if (tipoJuego === "bandera-pais") {
    return `bandera-pais|${p.iso2}`;
  }

  return `pais-bandera|${p.pais}`;
}


function prepararListaPreguntasMundo(lista) {

  let candidatas = [...lista];


  // En Países (capital → país), una misma capital puede
  // corresponder a más de una entrada. Si ambas están en
  // la selección, la pregunta sería ambigua y se elimina.

  if (tipoJuego === "paises") {

    const frecuenciaCapitales = new Map();

    candidatas.forEach(p => {

      const clave = p.capital;

      frecuenciaCapitales.set(
        clave,
        (frecuenciaCapitales.get(clave) || 0) + 1
      );

    });

    candidatas = candidatas.filter(
      p => frecuenciaCapitales.get(p.capital) === 1
    );
  }


  const clavesVistas = new Set();

  return candidatas.filter(p => {

    const clave = clavePreguntaMundo(p);

    if (clavesVistas.has(clave)) {
      return false;
    }

    clavesVistas.add(clave);
    return true;

  });
}


function crearColaPreguntasMundo() {

  const nuevaCola =
    mezclar([...listaPreguntas]);


  // Al terminar una vuelta de entrenamiento, evitamos
  // que la primera pregunta de la nueva vuelta sea igual
  // a la última que se acaba de mostrar.

  if (
    nuevaCola.length > 1 &&
    preguntaActual
  ) {

    const ultimaClave =
      clavePreguntaMundo(preguntaActual);

    if (
      clavePreguntaMundo(nuevaCola[0]) === ultimaClave
    ) {

      const indiceAlternativo =
        nuevaCola.findIndex(
          p => clavePreguntaMundo(p) !== ultimaClave
        );

      if (indiceAlternativo > 0) {

        [
          nuevaCola[0],
          nuevaCola[indiceAlternativo]
        ] = [
          nuevaCola[indiceAlternativo],
          nuevaCola[0]
        ];

      }
    }
  }


  return nuevaCola;
}


// ==========================================
// NORMALIZAR REGIONES
// ==========================================

function obtenerRegion(p) {

  // México es Norteamérica

  if (p.iso2 === "MX") {

    return "Norteamérica";

  }


  // Para América usamos subregiones

  if (p.continente === "América") {

    return p.subregion;

  }


  return p.continente;
}


function etiquetaContenido() {

  if (contenidoSeleccionado === "estados") {

    return "Países soberanos";

  }

  if (contenidoSeleccionado === "territorios") {

    return "Territorios";

  }

  return "Países + territorios";
}


function etiquetaTipoJuego() {

  if (tipoJuego === "capitales") {
    return "🏛️ Capitales";
  }

  if (tipoJuego === "paises") {
    return "🌍 Países";
  }

  if (tipoJuego === "bandera-pais") {
    return "🚩 Bandera → País";
  }

  if (tipoJuego === "pais-bandera") {
    return "🚩 País → Bandera";
  }

  return "GeoTrainer";
}


function banderaDe(p) {

  if (!tieneBandera(p)) {
    return "";
  }

  return p.iso2
    .toUpperCase()
    .split("")
    .map(
      letra =>
        String.fromCodePoint(
          127397 + letra.charCodeAt(0)
        )
    )
    .join("");
}


const BANDERA_EXPLICACIONES = {
  "AF": "El emoji suele mostrar el antiguo tricolor negro, rojo y verde de la república afgana: colores vinculados históricamente al pasado, la lucha y la esperanza; el emblema central recoge símbolos islámicos.",
  "AL": "El fondo rojo y el águila bicéfala negra proceden del emblema de Skanderbeg; el águila es un símbolo histórico de Albania.",
  "DE": "El negro, rojo y oro se asocian al movimiento liberal y nacional alemán del siglo XIX y quedaron ligados a la tradición democrática alemana.",
  "AD": "El azul, amarillo y rojo combinan influencias francesas y españolas; el escudo central reúne símbolos de los copríncipes y de los territorios históricos vinculados a Andorra.",
  "AO": "El rojo recuerda la lucha por la independencia y el negro al continente africano; el engranaje, el machete y la estrella aluden al trabajo, la producción y el ideal revolucionario.",
  "AG": "El sol naciente simboliza una nueva era; negro, azul, blanco y rojo se relacionan habitualmente con el pueblo, el Caribe, la esperanza y la energía.",
  "SA": "El verde está estrechamente ligado al islam; la shahada expresa la fe islámica y la espada simboliza justicia y la tradición del Estado saudí.",
  "DZ": "El verde y el blanco se vinculan al islam y a la pureza; la media luna y la estrella rojas son símbolos islámicos tradicionales.",
  "AR": "El celeste y blanco están ligados a la revolución e independencia; el Sol de Mayo representa la emancipación y remite a la simbología de la Revolución de Mayo.",
  "AM": "El rojo, azul y naranja forman el tricolor nacional; se interpretan comúnmente como lucha y supervivencia, cielo/paz y trabajo o creatividad del pueblo armenio.",
  "AU": "La Union Jack recuerda la herencia británica; la gran estrella de siete puntas representa la federación y las demás forman la Cruz del Sur.",
  "AT": "El rojo-blanco-rojo es uno de los diseños nacionales más antiguos de Europa y deriva del escudo medieval de la casa de Babenberg.",
  "AZ": "El azul se asocia a la herencia túrquica, el rojo a modernización y progreso y el verde al islam; la media luna y la estrella refuerzan esa identidad.",
  "BS": "El azul aguamarina representa el mar, el dorado las playas y el sol, y el triángulo negro la fuerza y determinación del pueblo.",
  "BD": "El verde se relaciona con el paisaje y la juventud del país; el disco rojo simboliza el sol naciente y también la sangre derramada en la independencia.",
  "BB": "El azul representa mar y cielo, el dorado la arena; el tridente roto simboliza la ruptura del vínculo colonial con Gran Bretaña.",
  "BH": "El rojo es un color histórico del golfo Pérsico; el blanco simboliza paz y las cinco puntas de la línea dentada recuerdan los cinco pilares del islam.",
  "BZ": "El azul procede de la tradición política dominante en la independencia y el rojo de la oposición histórica; el escudo muestra la industria maderera, clave en la historia del país.",
  "BJ": "El verde, amarillo y rojo son colores panafricanos; suelen asociarse a esperanza, riqueza y valor o sacrificio.",
  "BY": "El rojo y verde retoman colores de la etapa soviética y de la tradición bielorrusa; el ornamento lateral reproduce un motivo textil popular tradicional.",
  "BO": "El rojo, amarillo y verde se interpretan habitualmente como sacrificio histórico, riqueza mineral y naturaleza; son los colores del tricolor boliviano desde el siglo XIX.",
  "BA": "El azul y las estrellas evocan Europa; el triángulo alude a la forma del país y a sus tres pueblos constituyentes, mientras las estrellas sugieren continuidad.",
  "BW": "El azul claro simboliza el agua y la lluvia, esenciales en un país seco; la franja negra con bordes blancos representa convivencia y armonía racial.",
  "BR": "El verde y amarillo procedían originalmente de las casas imperiales de Braganza y Habsburgo; el globo azul muestra el cielo y las estrellas representan estados y distrito federal.",
  "BN": "El amarillo es el color tradicional del sultán; las franjas blanca y negra representan a los principales ministros y el escudo rojo simboliza la monarquía y el islam.",
  "BG": "El blanco, verde y rojo forman el tricolor nacional; suelen interpretarse como paz, fertilidad/naturaleza y valor o sacrificio.",
  "BF": "El rojo y verde son colores panafricanos y recuerdan la revolución y la tierra; la estrella amarilla simboliza la guía de la revolución.",
  "BI": "La cruz blanca divide rojo y verde, colores ligados a lucha e independencia y esperanza; las tres estrellas aluden al lema nacional y a grupos históricos del país.",
  "BT": "El amarillo representa la autoridad secular del rey y el naranja la tradición budista; el dragón Druk simboliza el 'Reino del Dragón del Trueno'.",
  "BE": "El negro, amarillo y rojo proceden de los colores del antiguo ducado de Brabante; la disposición vertical se adoptó durante la revolución belga.",
  "CV": "El azul representa el océano que rodea el archipiélago; las franjas recuerdan paz y esfuerzo, y las diez estrellas simbolizan las diez islas principales.",
  "KH": "El azul se asocia a la monarquía y el rojo a la nación; Angkor Wat en blanco representa el patrimonio jemer y la religión.",
  "CM": "Verde, rojo y amarillo son colores panafricanos; la estrella central simboliza la unidad y el rojo ocupa el centro como vínculo entre norte y sur.",
  "CA": "La hoja de arce es el gran símbolo nacional canadiense; rojo y blanco fueron proclamados colores nacionales y remiten también a las tradiciones francesa e inglesa.",
  "QA": "El granate es el color distintivo de Catar y el blanco simboliza paz; las nueve puntas recuerdan su incorporación histórica al grupo de emiratos del Golfo tras acuerdos británicos.",
  "TD": "El azul, amarillo y rojo combinan el azul de tradición francesa con colores panafricanos; suelen asociarse a cielo/esperanza, sol/desierto y sacrificio.",
  "CZ": "El blanco y rojo proceden de Bohemia; el triángulo azul se añadió para distinguir la bandera checoslovaca y representar también a Eslovaquia en el diseño original.",
  "CL": "El blanco se vincula a los Andes nevados, el azul al cielo y Pacífico y el rojo a la lucha por la independencia; la estrella simboliza guía y unidad.",
  "CN": "El rojo está ligado a la revolución; la gran estrella representa al Partido Comunista y las cuatro menores la unidad del pueblo en torno a él.",
  "CY": "El mapa de la isla aparece en color cobre, aludiendo al mineral que dio fama histórica a Chipre; las ramas de olivo simbolizan paz entre comunidades.",
  "VA": "El amarillo y blanco son los colores pontificios; las llaves cruzadas de san Pedro y la tiara representan la autoridad del papa y de la Santa Sede.",
  "CO": "El amarillo ocupa la mitad de la bandera y suele vincularse a riqueza y recursos; azul y rojo se asocian al mar/cielo y a la sangre de la independencia.",
  "KM": "Las cuatro franjas y las cuatro estrellas representan las cuatro islas históricas del archipiélago; el verde, la media luna y las estrellas expresan la identidad islámica.",
  "KP": "El rojo ocupa el centro y refleja la tradición revolucionaria; la estrella roja es símbolo socialista, mientras blanco y azul se asocian oficialmente a pureza y soberanía/paz.",
  "KR": "El taegeuk rojo y azul representa el equilibrio de fuerzas complementarias; los cuatro trigramas proceden de la filosofía oriental y simbolizan principios de la naturaleza.",
  "CR": "El azul, blanco y rojo siguen la tradición centroamericana y republicana; el rojo central se asocia al calor y generosidad del pueblo y a la lucha por la libertad.",
  "CI": "El naranja, blanco y verde forman un tricolor inspirado en Francia; se asocian habitualmente a sabana/tierra, paz y bosques/esperanza.",
  "HR": "Rojo, blanco y azul son colores paneslavos; el escudo ajedrezado es el símbolo histórico croata y la corona superior reúne emblemas regionales.",
  "CU": "Las franjas azules representan antiguas divisiones de la isla y las blancas ideales de independencia; el triángulo rojo y la estrella solitaria simbolizan libertad y sacrificio.",
  "DK": "La cruz nórdica blanca sobre rojo, conocida como Dannebrog, es uno de los diseños nacionales más antiguos y sirvió de modelo para otras banderas escandinavas.",
  "DM": "El verde refleja la vegetación; la cruz tricolor recuerda la Trinidad y el cristianismo, y el loro sisserou central es una especie emblemática de Dominica.",
  "EC": "El amarillo, azul y rojo comparten origen con la Gran Colombia; el escudo incorpora el Chimborazo, el río Guayas y símbolos de soberanía y comercio.",
  "EG": "El rojo, blanco y negro proceden de la tradición panárabe; el águila de Saladino es un emblema de soberanía y nacionalismo árabe.",
  "SV": "El azul y blanco derivan de la antigua Federación Centroamericana; el escudo central muestra símbolos de las cinco repúblicas centroamericanas y el lema nacional.",
  "AE": "Rojo, verde, blanco y negro son colores panárabes; expresan la identidad árabe común y la unión de los emiratos.",
  "ER": "El verde alude a agricultura, el azul al mar Rojo y el rojo a la lucha por la independencia; la rama de olivo recuerda la paz y la herencia de la ONU.",
  "SK": "Blanco, azul y rojo son colores paneslavos; el escudo muestra la doble cruz sobre tres montes, símbolo histórico de Eslovaquia.",
  "SI": "Blanco, azul y rojo son colores paneslavos; el escudo representa el monte Triglav, el Adriático y estrellas históricas de los condes de Celje.",
  "ES": "El rojo-amarillo-rojo se eligió en 1785 por su buena visibilidad naval; el escudo actual reúne símbolos de los antiguos reinos y de la monarquía constitucional.",
  "US": "Las 13 franjas recuerdan las colonias originales y las 50 estrellas representan los estados actuales; rojo, blanco y azul se consolidaron como colores nacionales.",
  "EE": "Azul, negro y blanco se asocian tradicionalmente al cielo y mares, la tierra y la identidad nacional, y la luz o la nieve.",
  "SZ": "El escudo, las lanzas y el bastón de combate reflejan la cultura suazi; azul se asocia a paz, amarillo a recursos y rojo a las luchas del pasado.",
  "ET": "Verde, amarillo y rojo son colores históricos etíopes que inspiraron el panafricanismo; el disco azul y la estrella simbolizan unidad y convivencia.",
  "PH": "Azul y rojo simbolizan tradicionalmente paz/justicia y valor; el triángulo blanco representa igualdad, el sol la independencia y las tres estrellas los grandes grupos insulares.",
  "FI": "La cruz nórdica azul sobre blanco se interpreta como los numerosos lagos y el cielo frente a la nieve del paisaje finlandés.",
  "FJ": "La Union Jack refleja la herencia británica; el escudo conserva símbolos agrícolas e históricos y el azul claro enfatiza el carácter oceánico del país.",
  "FR": "El tricolor nació con la Revolución francesa; azul y rojo eran colores de París y el blanco estaba vinculado a la monarquía francesa.",
  "GA": "Verde, amarillo y azul se asocian a bosques, línea ecuatorial/sol y océano Atlántico; es una composición propia de la identidad gabonesa.",
  "GM": "El rojo simboliza sol y sabana, el azul el río Gambia y el verde bosques/agricultura; las franjas blancas expresan paz y unidad.",
  "GE": "La gran cruz de san Jorge y las cuatro cruces menores enlazan con la tradición cristiana medieval georgiana y con antiguos símbolos del reino.",
  "GH": "Rojo, amarillo y verde son colores panafricanos; la estrella negra representa la libertad africana y el legado del panafricanismo.",
  "GD": "El rojo, amarillo y verde son colores caribeños y africanos; la nuez moscada recuerda uno de los cultivos emblemáticos de Granada y las estrellas sus divisiones administrativas.",
  "GR": "La cruz expresa la tradición ortodoxa; azul y blanco se asocian al mar y cielo griegos, y las nueve franjas se relacionan tradicionalmente con el lema independentista.",
  "GT": "Azul y blanco derivan de la tradición centroamericana; el escudo incluye el quetzal, pergamino de independencia, rifles y laureles.",
  "GN": "Rojo, amarillo y verde son colores panafricanos; suelen asociarse a sacrificio, recursos/sol y vegetación.",
  "GQ": "Verde, blanco y rojo representan naturaleza, paz y lucha por la independencia; el triángulo azul alude al mar y el escudo muestra el árbol de la seda o ceiba.",
  "GW": "Rojo, amarillo y verde son panafricanos; la estrella negra simboliza unidad africana y el legado de los movimientos de liberación.",
  "GY": "El verde representa bosques y agricultura, el dorado recursos minerales, el rojo dinamismo; blanco y negro se asocian a ríos y resistencia.",
  "HT": "El azul y rojo proceden de la bandera francesa tras eliminarse el blanco colonial; el escudo central lleva palmeras, armas y el lema 'La unión hace la fuerza'.",
  "HN": "Azul y blanco proceden de la Federación Centroamericana; las cinco estrellas recuerdan a los cinco estados de aquella unión y el ideal de integración regional.",
  "HU": "Rojo, blanco y verde son colores históricos del escudo húngaro y se convirtieron en el tricolor nacional durante el siglo XIX.",
  "IN": "El azafrán, blanco y verde se asocian oficialmente a valor/renuncia, verdad/paz y fertilidad/fe; la rueda azul de Ashoka simboliza ley y movimiento.",
  "ID": "Rojo y blanco son colores históricos del archipiélago, presentes ya en el imperio Majapahit; hoy se interpretan también como valor y pureza.",
  "IQ": "Rojo, blanco, negro y verde son colores panárabes; la inscripción 'Allahu Akbar' en verde refuerza la identidad islámica del Estado.",
  "IE": "El verde representa la tradición nacionalista y católica, el naranja la tradición protestante vinculada a Guillermo de Orange y el blanco la paz entre ambas.",
  "IR": "Verde, blanco y rojo son colores nacionales de larga tradición; el emblema central estiliza la palabra Alá y el borde repite una expresión religiosa.",
  "IS": "La cruz nórdica refleja la tradición escandinava; azul, blanco y rojo se asocian comúnmente al mar, hielo/nieve y fuego volcánico.",
  "MH": "El azul representa el Pacífico, las franjas naranja y blanca se asocian a valentía/riqueza y paz, y la estrella señala los distritos e islas del país.",
  "SB": "El azul simboliza el océano, el verde la tierra y el amarillo el sol; las cinco estrellas representan los cinco grupos insulares originales.",
  "IL": "Las franjas azules se inspiran en el talit, manto de oración judío; la estrella de David es uno de los principales símbolos del judaísmo y del Estado de Israel.",
  "IT": "El tricolor verde, blanco y rojo procede de las repúblicas italianas de época napoleónica y se convirtió en símbolo de la unificación nacional.",
  "JM": "El negro representa la fuerza y creatividad del pueblo, el verde esperanza y recursos agrícolas, y el dorado la luz del sol y riqueza natural.",
  "JP": "El disco rojo representa el sol, elemento central de la identidad simbólica japonesa; el fondo blanco crea el diseño conocido como Hinomaru.",
  "JO": "Negro, blanco, verde y rojo son colores panárabes vinculados a dinastías islámicas históricas; la estrella de siete puntas tiene significados religiosos y de unidad.",
  "KZ": "El azul celeste se asocia al cielo, paz y pueblos túrquicos; el sol, el águila esteparia y el ornamento tradicional reflejan naturaleza e identidad kazaja.",
  "KE": "Negro, rojo y verde simbolizan al pueblo, la lucha por la independencia y la tierra; el blanco expresa paz y el escudo masái defensa de la libertad.",
  "KG": "El rojo recuerda el estandarte atribuido a Manas; el sol de 40 rayos representa las tribus unificadas y el centro reproduce el tunduk de una yurta.",
  "KI": "El sol naciente, el océano y la fragata representan el entorno insular; las franjas onduladas son el Pacífico y el ave simboliza libertad y soberanía.",
  "KW": "Verde, blanco, rojo y negro son colores panárabes y enlazan con la identidad árabe y la historia política de la región.",
  "LA": "El rojo recuerda la lucha independentista, el azul representa prosperidad y el Mekong, y el disco blanco simboliza la luna sobre el río y la unidad.",
  "LS": "Azul, blanco y verde se relacionan con lluvia/cielo, paz y prosperidad; el sombrero mokorotlo negro es un símbolo cultural basotho.",
  "LV": "El granate y blanco proceden de una antigua tradición heráldica letona medieval; es uno de los diseños nacionales más antiguos documentados de Europa.",
  "LR": "Las franjas y la estrella reflejan la influencia histórica de Estados Unidos; las once franjas recuerdan a los firmantes de la declaración de independencia liberiana.",
  "LY": "Rojo, negro y verde son colores históricos y panárabes; la media luna y la estrella blancas sobre negro enlazan con la tradición islámica y con la antigua monarquía.",
  "LI": "Azul y rojo son colores históricos de la casa principesca; la corona dorada se añadió para distinguir la bandera de la de Haití y simboliza la monarquía.",
  "LT": "El amarillo, verde y rojo se asocian habitualmente a sol/prosperidad, naturaleza y sacrificio por la nación; son colores del movimiento nacional lituano.",
  "LU": "Rojo, blanco y azul claro proceden de los colores históricos del gran ducado y de su escudo; se parecen deliberadamente a la tradición heráldica neerlandesa.",
  "LB": "El cedro es un símbolo milenario del Líbano; rojo suele asociarse al sacrificio y blanco a paz/nieve, mientras el árbol verde representa permanencia.",
  "MK": "El sol amarillo de ocho rayos sobre rojo simboliza el 'nuevo sol de la libertad', expresión ligada al himno nacional y a la identidad macedonia.",
  "MG": "Blanco, rojo y verde combinan la tradición histórica de la monarquía merina con colores asociados a independencia y población campesina.",
  "MY": "Las franjas rojas y blancas representan los estados y territorios federales; azul simboliza unidad, amarillo a la monarquía y media luna/estrella al islam.",
  "MW": "Negro, rojo y verde son colores panafricanos; el sol naciente simboliza esperanza y el rojo recuerda la lucha por la libertad africana.",
  "MV": "El rojo recuerda a quienes defendieron el país, el verde la paz y prosperidad y la media luna blanca expresa la identidad islámica.",
  "ML": "Verde, amarillo y rojo son colores panafricanos; suelen asociarse a naturaleza, riqueza/sol y sacrificio por la independencia.",
  "MT": "Blanco y rojo son colores tradicionales vinculados a la historia medieval de Malta; la Cruz de Jorge recuerda la condecoración británica otorgada a la isla en la Segunda Guerra Mundial.",
  "MA": "El rojo es un color histórico de la dinastía alauí; el pentagrama verde, conocido como Sello de Salomón, añade simbolismo islámico y tradicional.",
  "MU": "Rojo, azul, amarillo y verde se interpretan como lucha por la libertad, océano Índico, luz de la independencia y vegetación/agricultura.",
  "MR": "El verde y la media luna con estrella expresan la identidad islámica; el dorado alude al Sahara y las franjas rojas añadidas recuerdan sacrificio y defensa de la patria.",
  "FM": "El azul representa el Pacífico; las cuatro estrellas blancas simbolizan los cuatro estados federados: Yap, Chuuk, Pohnpei y Kosrae.",
  "MD": "El azul, amarillo y rojo comparten tradición con Rumanía; el escudo con águila y cabeza de uro distingue la identidad histórica moldava.",
  "MN": "Rojo y azul son colores nacionales; el símbolo soyombo reúne elementos tradicionales que representan libertad, eternidad, fuego, sol, luna y equilibrio.",
  "ME": "El rojo con borde dorado remite a antiguas banderas principescas; el águila bicéfala y el león del escudo representan la tradición estatal y dinástica montenegrina.",
  "MZ": "Verde, negro, amarillo, blanco y rojo combinan panafricanismo, recursos y lucha; el libro, azada y fusil simbolizan educación, agricultura y defensa.",
  "MM": "Amarillo, verde y rojo se asocian oficialmente a solidaridad, paz/naturaleza y valor; la gran estrella blanca representa la unión del país.",
  "MX": "El verde, blanco y rojo forman el tricolor nacional; el águila con la serpiente sobre un nopal procede del mito fundacional mexica de Tenochtitlan.",
  "MC": "Rojo y blanco son los colores heráldicos de la casa Grimaldi, dinastía que gobierna Mónaco desde la Edad Media.",
  "NA": "Azul, rojo y verde se asocian a cielo/océano, pueblo y vegetación; el sol dorado representa vida y energía y los bordes blancos paz y unidad.",
  "NR": "El azul simboliza el Pacífico, la línea amarilla el ecuador y la estrella blanca señala la posición de Nauru al sur de éste y sus doce tribus tradicionales.",
  "NP": "Es la única bandera nacional no rectangular: los dos gallardetes derivan de estandartes tradicionales; sol y luna expresan permanencia y las montañas del Himalaya se evocan en el borde blanco.",
  "NI": "Azul y blanco derivan de la Federación Centroamericana; el escudo triangular incluye cinco volcanes, arco iris y gorro frigio como símbolos de unión y libertad.",
  "NG": "El verde representa agricultura y riqueza natural y el blanco paz y unidad; el diseño nació de un concurso previo a la independencia.",
  "NO": "La cruz nórdica refleja la tradición escandinava; rojo, blanco y azul también subrayan los vínculos históricos con Dinamarca y Suecia.",
  "NZ": "La Union Jack recuerda la herencia británica y las cuatro estrellas rojas representan la Cruz del Sur, visible desde el hemisferio sur.",
  "NE": "Naranja, blanco y verde se asocian al Sahara, pureza y zonas fértiles; el disco naranja central representa el sol.",
  "OM": "Blanco, rojo y verde son colores históricos del sultanato; el emblema del khanjar con espadas cruzadas es un símbolo tradicional omaní.",
  "PK": "El verde representa a la mayoría musulmana y el blanco a las minorías; la media luna expresa progreso y la estrella luz y conocimiento.",
  "PW": "El disco dorado representa la luna llena, importante en la tradición palauana; el fondo azul simboliza el océano y la paz.",
  "PS": "Negro, blanco, verde y rojo son colores panárabes y remiten a dinastías y movimientos históricos del mundo árabe.",
  "PA": "Rojo y azul representaban históricamente a los principales partidos políticos y el blanco la paz; las dos estrellas simbolizan pureza/autoridad y ley.",
  "PG": "Rojo y negro son colores tradicionales; el ave del paraíso identifica a Papúa Nueva Guinea y la Cruz del Sur sitúa al país en el Pacífico.",
  "PY": "Rojo, blanco y azul se inspiraron en ideales republicanos; es excepcional porque anverso y reverso llevan emblemas distintos vinculados al Estado y la Hacienda.",
  "NL": "Rojo, blanco y azul derivan del antiguo 'Prinsenvlag' neerlandés; el rojo sustituyó al naranja y el tricolor se convirtió en uno de los modelos históricos de Europa.",
  "PE": "Rojo y blanco son colores nacionales consolidados desde la independencia; su combinación procede de los primeros diseños creados por José de San Martín.",
  "PL": "Blanco y rojo proceden del escudo polaco: el águila blanca sobre campo rojo, colores nacionales desde el siglo XIX.",
  "PT": "Verde y rojo se asociaron a la república instaurada en 1910; la esfera armilar recuerda los descubrimientos marítimos y el escudo la historia del reino.",
  "GB": "La Union Jack combina las cruces de san Jorge, san Andrés y san Patricio, representando la unión histórica de Inglaterra, Escocia e Irlanda.",
  "CF": "Azul, blanco y rojo evocan la herencia francesa y verde, amarillo y rojo África; la franja roja central simboliza la unión entre ambos conjuntos.",
  "CD": "El azul se asocia a paz, la estrella a unidad y futuro, y la banda roja con bordes amarillos al sacrificio y la riqueza del país.",
  "DO": "La cruz blanca divide los campos azul y rojo y simboliza la fe; el escudo central incorpora Biblia, cruz y el lema nacional.",
  "CG": "Verde, amarillo y rojo son colores panafricanos; la disposición diagonal distingue la bandera congoleña de otros tricolores africanos.",
  "RW": "Azul, amarillo y verde se asocian a paz, desarrollo y prosperidad; el sol simboliza iluminación y una nueva etapa tras la historia reciente del país.",
  "RO": "Azul, amarillo y rojo proceden de los colores históricos de Valaquia y Moldavia y se consolidaron en el siglo XIX con el movimiento nacional rumano.",
  "RU": "Blanco, azul y rojo forman el tricolor histórico ruso desde la época de Pedro el Grande y ejercieron gran influencia en los colores paneslavos.",
  "WS": "El rojo es el fondo tradicional y el rectángulo azul con la Cruz del Sur sitúa a Samoa en el Pacífico y vincula el diseño a su historia moderna.",
  "KN": "Verde, amarillo, rojo y negro se asocian a tierra, sol, lucha y herencia africana; las dos estrellas blancas representan esperanza y libertad.",
  "SM": "Blanco y azul reflejan los colores tradicionales de San Marino; el escudo muestra el monte Titano, sus tres torres y la palabra 'Libertas'.",
  "VC": "Azul, amarillo y verde se relacionan con cielo/mar, calidez y vegetación; los tres diamantes verdes forman una 'V' alusiva a San Vicente.",
  "LC": "El azul representa el Caribe, los triángulos recuerdan los Pitons y los colores negro y blanco simbolizan convivencia; amarillo alude al sol.",
  "ST": "Verde, amarillo y rojo son panafricanos; las dos estrellas negras representan las dos islas principales y también la herencia africana.",
  "SN": "Verde, amarillo y rojo son colores panafricanos; la estrella verde central simboliza unidad, esperanza e independencia.",
  "RS": "Rojo, azul y blanco son colores paneslavos; el escudo incorpora el águila bicéfala y la cruz serbia, símbolos históricos del Estado.",
  "SC": "Las cinco bandas radiantes representan un país joven que avanza hacia el futuro; los colores se asocian a cielo, sol, pueblo, justicia y tierra.",
  "SL": "Verde, blanco y azul se interpretan como recursos/agricultura, unidad/justicia y puerto/océano, elementos centrales de la identidad nacional.",
  "SG": "Rojo simboliza fraternidad e igualdad y blanco pureza; la media luna representa una nación joven y las cinco estrellas democracia, paz, progreso, justicia e igualdad.",
  "SY": "El diseño sirio ha cambiado con la evolución política del país; sus colores y estrellas pertenecen a la tradición panárabe y a distintas etapas históricas de Siria.",
  "SO": "El azul se inspiró en la bandera de Naciones Unidas por su papel en la transición del país; la estrella blanca de cinco puntas representa los territorios habitados históricamente por somalíes.",
  "LK": "El león con espada procede de la tradición cingalesa; las franjas verde y naranja representan comunidades musulmana y tamil, y las hojas de bo simbolizan el budismo.",
  "ZA": "El diseño multicolor de 1994 simboliza convergencia y unidad tras el apartheid; combina colores ligados a movimientos políticos y tradiciones históricas sudafricanas.",
  "SD": "Rojo, blanco, negro y verde son colores panárabes; se relacionan con lucha, paz, pueblo y tradición islámica/agricultura.",
  "SS": "Negro, rojo, verde, blanco, azul y amarillo reúnen simbolismos panafricanos: pueblo, sacrificio, tierra, paz, Nilo y esperanza o unidad.",
  "SE": "La cruz nórdica amarilla sobre azul procede de la tradición escandinava y de los colores del escudo nacional sueco.",
  "CH": "La cruz blanca sobre rojo es un antiguo símbolo de la Confederación Suiza; su forma cuadrada es una particularidad entre las banderas nacionales.",
  "SR": "El verde, blanco y rojo se asocian a fertilidad, justicia/libertad y progreso; la estrella amarilla representa la unidad de los grupos del país.",
  "TH": "Rojo, blanco y azul se interpretan tradicionalmente como nación, religión y monarquía; el azul central se añadió durante la Primera Guerra Mundial.",
  "TZ": "Verde representa vegetación, azul lagos y océano, negro al pueblo y amarillo riqueza mineral; las diagonales unen los colores de Tanganica y Zanzíbar.",
  "TJ": "Rojo, blanco y verde se relacionan con unidad, algodón/nieve y agricultura; la corona y siete estrellas son símbolos de soberanía y tradición tayika.",
  "TL": "Rojo recuerda la lucha por la independencia, negro las dificultades del pasado y amarillo el legado colonial; la estrella blanca simboliza paz y esperanza.",
  "TG": "Verde, amarillo y rojo son colores panafricanos; la estrella blanca representa esperanza y pureza y las cinco franjas recuerdan regiones históricas.",
  "TO": "La cruz roja sobre blanco expresa la fuerte tradición cristiana del reino; el campo rojo completa un diseño fijado constitucionalmente desde el siglo XIX.",
  "TT": "Rojo, negro y blanco se interpretan como fuego/sol y vitalidad, tierra/pueblo y mar/pureza, unidos en la diagonal característica.",
  "TM": "El verde y la media luna expresan tradición islámica; la franja de alfombras muestra motivos de cinco tribus principales y las estrellas representan regiones del país.",
  "TR": "La media luna y la estrella blancas sobre rojo proceden de la tradición otomana y se convirtieron en uno de los símbolos más reconocibles de Turquía.",
  "TV": "La Union Jack recuerda la historia colonial británica; las estrellas representan las islas del archipiélago y su disposición aproxima su posición geográfica.",
  "TN": "El rojo procede de la tradición otomana; el disco blanco con media luna y estrella simboliza la identidad islámica y la historia tunecina.",
  "UA": "Azul y amarillo se interpretan popularmente como cielo sobre campos de trigo y son colores históricos presentes en la identidad nacional ucraniana.",
  "UG": "Negro, amarillo y rojo son colores asociados al pueblo africano, sol y fraternidad; la grulla coronada es un símbolo nacional heredado de la época colonial.",
  "UY": "Las nueve franjas recuerdan los departamentos originales y el Sol de Mayo simboliza la independencia, compartiendo tradición simbólica con Argentina.",
  "UZ": "Azul, blanco y verde se asocian a cielo/agua, paz y naturaleza; las líneas rojas a la fuerza vital y la media luna con estrellas a tradición y soberanía.",
  "VU": "Rojo, verde y negro reflejan sangre, tierra y pueblo melanesio; el colmillo de jabalí y hojas de namele son símbolos culturales de prosperidad y paz.",
  "VE": "Amarillo, azul y rojo proceden de la tradición de la Gran Colombia; las estrellas representan las provincias históricas vinculadas a la independencia.",
  "VN": "El fondo rojo representa revolución y lucha; la estrella amarilla simboliza la unidad de los principales grupos sociales bajo el Estado vietnamita.",
  "YE": "Rojo, blanco y negro pertenecen a la tradición panárabe y fueron adoptados como símbolo de unidad tras la unificación de Yemen en 1990.",
  "DJ": "Azul claro y verde representan mar/cielo y tierra, blanco paz; la estrella roja simboliza unidad y la lucha por la independencia.",
  "ZM": "El verde representa recursos naturales, rojo la lucha, negro al pueblo y naranja minerales; el águila simboliza capacidad de elevarse sobre las dificultades.",
  "ZW": "Verde, amarillo, rojo y negro son colores panafricanos; el ave de Zimbabue procede de las ruinas de Gran Zimbabue y la estrella roja refleja la lucha revolucionaria."
};


function explicacionBandera(p) {

  if (
    !p ||
    !p.iso2
  ) {
    return "";
  }

  return (
    BANDERA_EXPLICACIONES[p.iso2] ||
    `La bandera de ${p.pais} tiene un diseño ligado a su historia e identidad. Esta nota ampliada todavía no está disponible para este territorio.`
  );
}

// ==========================================
// GENERAR PREGUNTA
// ==========================================

function generarPregunta() {


  // FIN DEL EXAMEN

  if (
    totalPreguntasExamen !== null &&
    numeroPregunta >= totalPreguntasExamen
  ) {

    mostrarResultadoFinal();

    return;
  }


  yaRespondida = false;

  resultado.innerHTML = "";

  btnSiguiente.classList.add("oculto");

  contenedorRespuestas.innerHTML = "";

  ocultarMapa();


  // SI SE ACABAN LAS PREGUNTAS
  // EN ENTRENAMIENTO, VOLVEMOS A BARAJAR

  if (colaPreguntas.length === 0) {

    colaPreguntas =
      crearColaPreguntasMundo();

  }


  preguntaActual =
    colaPreguntas.shift();


  numeroPregunta++;


  // TEXTO DE PREGUNTA

  if (tipoJuego === "capitales") {

    textoPregunta.textContent =
      `¿Cuál es la capital de ${preguntaActual.pais}?`;

  }

  else if (tipoJuego === "paises") {

    textoPregunta.textContent =
      `¿A qué país o territorio pertenece ${preguntaActual.capital}?`;

  }

  else if (tipoJuego === "bandera-pais") {

    textoPregunta.innerHTML = `

      <span class="pregunta-bandera">
        ${banderaDe(preguntaActual)}
      </span>

      <span class="pregunta-bandera-texto">
        ¿De qué país o territorio es esta bandera?
      </span>

    `;

  }

  else {

    textoPregunta.textContent =
      `¿Cuál es la bandera de ${preguntaActual.pais}?`;

  }


  // NÚMERO DE PREGUNTA

  textoNumeroPregunta.textContent =

    totalPreguntasExamen !== null

      ? `Pregunta ${numeroPregunta}/${totalPreguntasExamen}`

      : `Pregunta ${numeroPregunta}`;


  const respuestas =
    obtenerRespuestasPlanActual(
      () => generarRespuestas()
    );


  respuestas.forEach(respuesta => {

    const boton =
      document.createElement("button");

    boton.textContent =
      respuesta;

    if (tipoJuego === "pais-bandera") {
      boton.classList.add("respuesta-bandera");
    }


    boton.addEventListener(
      "click",
      () => {

        comprobarRespuesta(
          respuesta,
          boton
        );

      }
    );


    contenedorRespuestas
      .appendChild(boton);

  });


  iniciarTemporizadorPregunta();

}


// ==========================================
// GENERAR 4 OPCIONES
// ==========================================

function generarRespuestas() {

  const correcta =
    obtenerRespuestaCorrecta();


  const respuestas = [
    correcta
  ];


  // Primero intentamos usar opciones
  // de la misma región seleccionada

  let candidatas =
    mezclar([...listaPreguntas]);


  const valoresEnSeleccion =
    new Set(
      candidatas
        .map(valorRespuesta)
        .filter(Boolean)
    );


  // Si hay menos de 4 posibles,
  // ampliamos al mismo tipo de contenido
  // pero de todo el mundo

  if (valoresEnSeleccion.size < 4) {

    const ampliacion = GEO_DATA
      .filter(esEntradaDelContenido)
      .filter(esAptaParaJuego);


    candidatas =
      mezclar([
        ...candidatas,
        ...ampliacion
      ]);

  }


  // Último respaldo

  if (
    new Set(
      candidatas
        .map(valorRespuesta)
        .filter(Boolean)
    ).size < 4
  ) {

    candidatas =
      mezclar([
        ...candidatas,
        ...GEO_DATA.filter(
          esAptaParaJuego
        )
      ]);

  }


  for (const candidata of candidatas) {

    const opcion =
      valorRespuesta(candidata);


    if (
      opcion &&
      !respuestas.includes(opcion)
    ) {

      respuestas.push(opcion);

    }


    if (respuestas.length === 4) {

      break;

    }

  }


  return mezclar(respuestas);
}


// ==========================================
// RESPUESTA
// ==========================================

function valorRespuesta(p) {

  if (tipoJuego === "capitales") {
    return p.capital;
  }

  if (
    tipoJuego === "paises" ||
    tipoJuego === "bandera-pais"
  ) {
    return p.pais;
  }

  return banderaDe(p);
}


function obtenerRespuestaCorrecta() {

  return valorRespuesta(
    preguntaActual
  );
}


function crearResumenPregunta(p) {

  if (esJuegoBanderas()) {

    return `

      <span class="resultado-bandera">
        ${banderaDe(p)}
      </span>

      <br>

      <strong>
        ${escaparHTML(p.pais)}
      </strong>

      ${crearDetalleEstatus(p)}

    `;

  }

  return `

    <strong>
      ${escaparHTML(p.pais)}
    </strong>

    →

    <strong>
      ${escaparHTML(p.capital)}
    </strong>

    ${crearDetalleEstatus(p)}

  `;
}


// ==========================================
// COMPROBAR RESPUESTA
// ==========================================

function comprobarRespuesta(
  respuestaSeleccionada,
  botonSeleccionado
) {

  if (yaRespondida) return;


  detenerIntervaloTemporizador();
  cancelarAvanceAutomatico();

  yaRespondida = true;


  const correcta =
    obtenerRespuestaCorrecta();


  const botones =
    contenedorRespuestas
      .querySelectorAll("button");


  // BLOQUEAR BOTONES

  botones.forEach(boton => {

    boton.disabled = true;


    if (
      boton.textContent === correcta
    ) {

      boton.classList.add(
        "correcta"
      );

    }

  });


  // ==========================
  // CORRECTA
  // ==========================

  if (
    respuestaSeleccionada ===
    correcta
  ) {

    aciertos++;


    resultado.innerHTML = `

      ✅ Correcto.

      <br><br>

      ${crearResumenPregunta(
        preguntaActual
      )}

    `;

  }


  // ==========================
  // INCORRECTA
  // ==========================

  else {

    fallos++;


    botonSeleccionado
      .classList.add(
        "incorrecta"
      );


    resultado.innerHTML = `

      ❌ Incorrecto.

      <br><br>

      ${crearResumenPregunta(
        preguntaActual
      )}

      <br><br>

      🌍
      ${escaparHTML(
        obtenerRegion(
          preguntaActual
        )
      )}

    `;


    mostrarMapaError(
      preguntaActual
    );

  }


  registrarResultadoExamen(
    correcta,
    respuestaSeleccionada,
    false
  );

  actualizarMarcador();

  registrarPreguntaContestadaEntrenamiento();


  if (
    totalPreguntasExamen !== null &&
    numeroPregunta ===
      totalPreguntasExamen
  ) {

    btnSiguiente.textContent =
      "Ver resultado →";

  }

  else {

    btnSiguiente.textContent =
      "Siguiente pregunta →";

  }


  btnSiguiente
    .classList
    .remove("oculto");

}


// ==========================================
// DETALLE DE TERRITORIOS
// ==========================================

function crearDetalleEstatus(p) {

  if (
    p.categoria === "territorio" &&
    p.parent
  ) {

    return `

      <br>

      <span style="font-weight:normal;">

        Territorio vinculado a
        ${escaparHTML(p.parent)}

      </span>

    `;

  }


  if (
    p.categoria === "especial" &&
    p.estatus
  ) {

    return `

      <br>

      <span style="font-weight:normal;">

        ${escaparHTML(
          p.estatus
        )}

      </span>

    `;

  }


  return "";
}


// ==========================================
// PAUSA CADA 15 PREGUNTAS EN ENTRENAMIENTO
// ==========================================

function esEntrenamientoActivo() {

  if (modoEspana !== null) {
    return totalPreguntasEspana === null;
  }

  return totalPreguntasExamen === null;
}


function registrarPreguntaContestadaEntrenamiento() {

  if (!esEntrenamientoActivo()) {
    return;
  }

  preguntasContestadasEntrenamiento++;

  if (
    preguntasContestadasEntrenamiento > 0 &&
    preguntasContestadasEntrenamiento % 15 === 0
  ) {

    pausaEntrenamientoPendiente = true;

    btnSiguiente.textContent =
      "Continuar práctica →";

  }

}


function mostrarPausaEntrenamiento() {

  const numero =
    preguntasContestadasEntrenamiento;

  // Fallback de seguridad por si el HTML del aviso
  // no estuviera cargado por caché o por una versión antigua.
  if (
    !pausaEntrenamiento ||
    !textoPausaEntrenamiento ||
    !btnContinuarEntrenamiento ||
    !btnSalirEntrenamiento
  ) {

    const seguir = window.confirm(
      `Llevas ${numero} preguntas. ¿Quieres seguir practicando?`
    );

    pausaEntrenamientoPendiente = false;

    if (seguir) {

      if (modoEspana !== null) {
        generarPreguntaEspana();
      } else {
        generarPregunta();
      }

    } else {

      volverAlMenu();

    }

    return;
  }

  textoPausaEntrenamiento.textContent =
    `Llevas ${numero} preguntas. ¿Quieres seguir practicando?`;

  pausaEntrenamiento.classList.remove("oculto");

  btnContinuarEntrenamiento.focus();
}


function ocultarPausaEntrenamiento() {

  if (!pausaEntrenamiento) return;

  pausaEntrenamiento.classList.add("oculto");
}


if (btnContinuarEntrenamiento) {

  btnContinuarEntrenamiento.addEventListener(
    "click",
    () => {

      pausaEntrenamientoPendiente = false;
      ocultarPausaEntrenamiento();

      if (modoEspana !== null) {
        generarPreguntaEspana();
      } else {
        generarPregunta();
      }

    }
  );

}


if (btnSalirEntrenamiento) {

  btnSalirEntrenamiento.addEventListener(
    "click",
    () => {

      pausaEntrenamientoPendiente = false;
      ocultarPausaEntrenamiento();
      volverAlMenu();

    }
  );

}


// ==========================================
// SIGUIENTE
// ==========================================

btnSiguiente.addEventListener("click", () => {

  cancelarAvanceAutomatico();

  if (pausaEntrenamientoPendiente) {
    mostrarPausaEntrenamiento();
    return;
  }

  if (modoEspana !== null) {

    generarPreguntaEspana();

  } else {

    generarPregunta();

  }

});


// ==========================================
// MARCADOR
// ==========================================

function actualizarMarcador() {

  textoAciertos.textContent =
    aciertos;

  textoFallos.textContent =
    fallos;
}


// ==========================================
// RESULTADO FINAL
// ==========================================

function mostrarResultadoFinal() {

  ocultarTodasLasPantallas();

  finExamen.classList
    .remove("oculto");


  const porcentaje =
    Math.round(
      (
        aciertos /
        totalPreguntasExamen
      ) * 100
    );


  let mensaje =
    "📚 Sigue practicando";


  if (porcentaje === 100) {

    mensaje =
      "🏆 ¡Perfecto!";

  }

  else if (porcentaje >= 80) {

    mensaje =
      "👏 Muy buen resultado";

  }

  else if (porcentaje >= 60) {

    mensaje =
      "👍 Buen progreso";

  }


  const snapshot =
    guardarExamenFinalizado();


  resultadoExamen.innerHTML = `

    <div>
      ${mensaje}
    </div>


    <div class="nota-grande">

      ${porcentaje}%

    </div>


    <div class="detalle-examen">

      <strong>
        ${aciertos}
      </strong>

      de

      <strong>
        ${totalPreguntasExamen}
      </strong>

      respuestas correctas


      <br><br>


      ✅ ${aciertos}

      &nbsp;&nbsp;

      ❌ ${fallos}


      <br><br>


      ${escaparHTML(
        etiquetaTipoJuego()
      )}

      ·

      ${
        regionSeleccionada === "Todos"

          ? "Todo el mundo"

          : escaparHTML(
              regionSeleccionada
            )
      }

      ·

      ${escaparHTML(
        etiquetaContenido()
      )}

      <br><br>

      ⏱ ${TIEMPO_POR_PREGUNTA} s por pregunta

    </div>

  `;

  if (revisionExamenFinal) {
    revisionExamenFinal.innerHTML =
      crearRevisionExamen(snapshot);
  }

  actualizarBotonesFinExamen(snapshot);
}


// ==========================================
// ACCIONES AL TERMINAR EL EXAMEN
// ==========================================

btnRepetirExamen.addEventListener(
  "click",
  repetirExamenFinalizado
);

btnNuevoExamen.addEventListener(
  "click",
  iniciarNuevoExamen
);

btnRepasarFallos.addEventListener(
  "click",
  repasarFallosExamen
);


// ==========================================
// MAPA AL FALLAR
// ==========================================

function mostrarMapaError(
  paisInfo
) {

  mapaError.classList
    .remove("oculto");


  mapaTitulo.textContent =

    `${paisInfo.pais} · ` +
    `${obtenerRegion(paisInfo)}`;


  mapaSvg.innerHTML =
    crearMapaSVG(
      paisInfo
    );

}


function ocultarMapa() {

  mapaError.classList
    .add("oculto");

  mapaTitulo.textContent = "";

  mapaSvg.innerHTML = "";
}


// ==========================================
// COORDENADAS
// ==========================================

function coordenadasDe(p) {

  if (
    Number.isFinite(p.lat) &&
    Number.isFinite(p.lon)
  ) {

    return {

      lat: p.lat,

      lon: p.lon

    };

  }


  return (
    COORDENADAS_EXTRA[
      p.iso2
    ] || null
  );
}


// ==========================================
// PROYECCIÓN PARA EL MAPA
// ==========================================

function proyectarMapa(
  lat,
  lon
) {

  return {

    x:
      ((lon + 180) / 360)
      * 720,

    y:
      ((90 - lat) / 180)
      * 360

  };

}


// ==========================================
// CREAR MAPA
// ==========================================

function crearMapaSVG(
  paisInfo
) {

  const coords =
    coordenadasDe(
      paisInfo
    );


  if (!coords) {

    return `

      <div
        style="
          padding:24px;
          text-align:center;
        "
      >

        No hay coordenadas
        disponibles para este lugar.

      </div>

    `;

  }


  const punto =
    proyectarMapa(
      coords.lat,
      coords.lon
    );


  const labelX =

    punto.x > 560

      ? punto.x - 14

      : punto.x + 14;


  const anchor =

    punto.x > 560

      ? "end"

      : "start";


  const labelY =

    punto.y < 45

      ? punto.y + 25

      : punto.y - 14;


  return `

    <svg

      viewBox="0 0 720 360"

      xmlns=
      "http://www.w3.org/2000/svg"

      role="img"

      aria-label=
      "Mapa de ubicación de ${escaparHTML(
        paisInfo.pais
      )}"

    >


      <rect

        class="map-bg"

        x="5"

        y="5"

        width="710"

        height="350"

        rx="18">

      </rect>


      <!-- NORTEAMÉRICA -->

      <path
        class="continent-shape"

        d="
        M55 70
        L90 40
        L165 32
        L235 55
        L278 92
        L250 125
        L205 145
        L175 165
        L125 145
        L88 118
        Z">
      </path>


      <!-- GROENLANDIA -->

      <path
        class="continent-shape"

        d="
        M250 25
        L292 20
        L315 45
        L298 76
        L265 67
        Z">
      </path>


      <!-- SUDAMÉRICA -->

      <path
        class="continent-shape"

        d="
        M230 166
        L278 154
        L320 180
        L330 220
        L310 275
        L282 330
        L255 292
        L245 240
        Z">
      </path>


      <!-- EUROPA -->

      <path
        class="continent-shape"

        d="
        M335 82
        L365 65
        L410 70
        L432 92
        L412 115
        L370 120
        L340 105
        Z">
      </path>


      <!-- ÁFRICA -->

      <path
        class="continent-shape"

        d="
        M350 124
        L410 120
        L455 148
        L445 210
        L410 275
        L372 245
        L350 185
        Z">
      </path>


      <!-- ASIA -->

      <path
        class="continent-shape"

        d="
        M410 72
        L485 48
        L575 55
        L655 88
        L670 125
        L620 160
        L550 178
        L500 160
        L448 125
        Z">
      </path>


      <!-- AUSTRALIA -->

      <path
        class="continent-shape"

        d="
        M575 245
        L620 225
        L675 245
        L665 292
        L612 307
        L575 280
        Z">
      </path>


      <text

        x="22"

        y="32"

        class="continent-title">

        ${escaparHTML(
          obtenerRegion(
            paisInfo
          )
        )}

      </text>


      <circle

        class="target-ring"

        cx="${punto.x}"

        cy="${punto.y}"

        r="14">

      </circle>


      <circle

        class="target-dot"

        cx="${punto.x}"

        cy="${punto.y}"

        r="7">

      </circle>


      <text

        x="${labelX}"

        y="${labelY}"

        text-anchor="${anchor}"

        class="target-label">

        ${escaparHTML(
          paisInfo.pais
        )}

      </text>


    </svg>

  `;

}


// ==========================================
// OCULTAR PANTALLAS
// ==========================================

function ocultarTodasLasPantallas() {

  cancelarTemporizadores();

  if (heroPrincipal) {
    heroPrincipal.classList.add("oculto");
  }

  inicio.classList.add("oculto");

  geografiaMenu.classList.add("oculto");
  historiaMenu.classList.add("oculto");
  viajesMenu.classList.add("oculto");
  mapasOrografiaMenu.classList.add("oculto");
  contenidoDesarrollo.classList.add("oculto");

  avisoLegal.classList.add("oculto");
  politicaPrivacidad.classList.add("oculto");
  politicaCookies.classList.add("oculto");

  configuracion.classList.add("oculto");

  juego.classList.add("oculto");

  finExamen.classList.add("oculto");

  if (revisionExamenFinal) {
    revisionExamenFinal.innerHTML = "";
  }

  ocultarPausaEntrenamiento();

  banderasMenu.classList.add("oculto");
espanaMenu.classList.add("oculto");
  espanaConfig.classList.add("oculto");
  sabiasQueMenu.classList.add("oculto");
sabiasQueDetalle.classList.add("oculto");
  sabiasQueSeccion.classList.add("oculto");

  if (typeof ocultarPantallasRios === "function") {
    ocultarPantallasRios();
  }

  if (typeof ocultarPantallasMapas === "function") {
    ocultarPantallasMapas();
  }

  if (typeof ocultarPantallasMonedas === "function") {
    ocultarPantallasMonedas();
  }
}
// ==========================================
// JUEGO DE ESPAÑA
// ==========================================

function crearPreguntaComunidadProvincia(comunidad) {

  const provincias =
    ESPANA_PROVINCIAS.filter(
      p => p.comunidad === comunidad
    );

  const provincia =
    mezclar(provincias)[0];

  return {
    ...provincia,
    tipoPregunta: "comunidad-provincia"
  };
}


function crearPreguntaCiudadAutonoma() {

  const ciudad =
    mezclar([...ESPANA_CIUDADES_AUTONOMAS])[0];

  return {
    ciudad: ciudad.ciudad,
    capital: ciudad.capital,
    tipo: ciudad.tipo,
    tipoPregunta: "ciudad-autonoma"
  };
}


function crearBancoPreguntasEspana() {

  const capitales =
    ESPANA_PROVINCIAS.map(p => ({
      ...p,
      tipoPregunta: "capitales"
    }));

  const provinciaComunidad =
    ESPANA_PROVINCIAS.map(p => ({
      ...p,
      tipoPregunta: "provincia-comunidad"
    }));

  const comunidadProvincia =
    ESPANA_COMUNIDADES.map(
      crearPreguntaComunidadProvincia
    );

  const ciudadAutonoma =
    crearPreguntaCiudadAutonoma();


  if (modoEspana === "capitales") {
    return capitales;
  }

  if (modoEspana === "provincia-comunidad") {
    return provinciaComunidad;
  }

  if (modoEspana === "comunidad-provincia") {
    return comunidadProvincia;
  }

  if (modoEspana === "comunidades") {
    return [
      ...provinciaComunidad,
      ...comunidadProvincia,
      ciudadAutonoma
    ];
  }

  return [
    ...capitales,
    ...provinciaComunidad,
    ...comunidadProvincia,
    ciudadAutonoma
  ];
}


function clavePreguntaEspana(pregunta) {

  if (pregunta.tipoPregunta === "capitales") {
    return `capitales|${pregunta.provincia}`;
  }

  if (pregunta.tipoPregunta === "provincia-comunidad") {
    return `provincia-comunidad|${pregunta.provincia}`;
  }

  if (pregunta.tipoPregunta === "comunidad-provincia") {
    return `comunidad-provincia|${pregunta.comunidad}`;
  }

  return "ciudad-autonoma";
}


function crearColaPreguntasEspana() {

  const nuevaCola =
    mezclar([...listaPreguntasEspana]);

  if (
    nuevaCola.length > 1 &&
    preguntaActual
  ) {

    const ultimaClave =
      clavePreguntaEspana(preguntaActual);

    if (
      clavePreguntaEspana(nuevaCola[0]) === ultimaClave
    ) {

      const indiceAlternativo =
        nuevaCola.findIndex(
          p => clavePreguntaEspana(p) !== ultimaClave
        );

      if (indiceAlternativo > 0) {

        [
          nuevaCola[0],
          nuevaCola[indiceAlternativo]
        ] = [
          nuevaCola[indiceAlternativo],
          nuevaCola[0]
        ];

      }
    }
  }

  return nuevaCola;
}


function iniciarJuegoEspana(
  tipoPractica,
  cantidadPreguntas,
  evitarExamenAnterior = false
) {

  tipoPracticaEspana = tipoPractica;
  totalPreguntasEspana = cantidadPreguntas;

  if (
    tipoPractica === "examen" &&
    cantidadPreguntas !== null
  ) {
    cantidadExamenEspanaConfigurada =
      cantidadPreguntas;
  }

  numeroPregunta = 0;
  preguntasContestadasEntrenamiento = 0;
  pausaEntrenamientoPendiente = false;
  aciertos = 0;
  fallos = 0;
  yaRespondida = false;
  preguntaActual = null;

  listaPreguntasEspana =
    crearBancoPreguntasEspana();


  if (totalPreguntasEspana !== null) {

    const preguntasSolicitadas =
      totalPreguntasEspana;

    totalPreguntasEspana =
      Math.min(
        preguntasSolicitadas,
        listaPreguntasEspana.length
      );

    if (
      totalPreguntasEspana <
      preguntasSolicitadas
    ) {

      alert(
        `Este modo tiene ${listaPreguntasEspana.length} preguntas distintas disponibles. ` +
        `El examen será de ${totalPreguntasEspana} preguntas sin repetir.`
      );

    }

    colaPreguntasEspana =
      seleccionarPreguntasEspanaExamen(
        totalPreguntasEspana,
        evitarExamenAnterior
      );

    reiniciarRegistroExamen(
      crearPlanExamenDesdePreguntas(
        colaPreguntasEspana
      ),
      false
    );

  } else {

    colaPreguntasEspana =
      crearColaPreguntasEspana();

    limpiarRegistroExamen();

  }

  ocultarTodasLasPantallas();

  juego.classList.remove("oculto");

  mostrarCabeceraJuegoEspana();

  actualizarMarcador();

  generarPreguntaEspana();
}


// ==========================================
// GENERAR PREGUNTA DE ESPAÑA
// ==========================================

function generarPreguntaEspana() {
if (
  totalPreguntasEspana !== null &&
  numeroPregunta >= totalPreguntasEspana
) {

  mostrarResultadoFinalEspana();
  return;
}
  yaRespondida = false;

  numeroPregunta++;

  resultado.innerHTML = "";

  contenedorRespuestas.innerHTML = "";

  btnSiguiente.classList.add("oculto");

  ocultarMapa();

  if (colaPreguntasEspana.length === 0) {

    // En entrenamiento, al completar todo el banco
    // generamos una nueva vuelta.

    listaPreguntasEspana =
      crearBancoPreguntasEspana();

    colaPreguntasEspana =
      crearColaPreguntasEspana();

  }


  preguntaActual =
    colaPreguntasEspana.shift();

  const tipoPregunta =
    preguntaActual.tipoPregunta;


 // CAPITAL DE PROVINCIA

if (tipoPregunta === "capitales") {

  textoPregunta.textContent =
    `¿Cuál es la capital de la provincia de ${preguntaActual.provincia}?`;

}


// PROVINCIA → COMUNIDAD

if (tipoPregunta === "provincia-comunidad") {

  textoPregunta.textContent =
    `¿A qué comunidad autónoma pertenece ${preguntaActual.provincia}?`;

}


// COMUNIDAD → PROVINCIA

if (tipoPregunta === "comunidad-provincia") {

  textoPregunta.textContent =
    `¿Cuál de estas provincias pertenece a ${preguntaActual.comunidad}?`;

}


// CIUDADES AUTÓNOMAS

if (tipoPregunta === "ciudad-autonoma") {

  textoPregunta.textContent =
    `¿Cuál de estas es una ciudad autónoma de España?`;

}


if (totalPreguntasEspana !== null) {

  textoNumeroPregunta.textContent =
    `Pregunta ${numeroPregunta}/${totalPreguntasEspana}`;

} else {

  textoNumeroPregunta.textContent =
    `Pregunta ${numeroPregunta}`;

}


  const respuestas =
    obtenerRespuestasPlanActual(
      () => generarRespuestasEspana(preguntaActual)
    );


  respuestas.forEach(respuesta => {

    const boton =
      document.createElement("button");

    boton.textContent =
      respuesta;

    boton.addEventListener(
      "click",
      () => comprobarRespuestaEspana(
        respuesta,
        boton
      )
    );

    contenedorRespuestas.appendChild(boton);

  });


  iniciarTemporizadorPregunta();

}


// ==========================================
// RESPUESTAS DE ESPAÑA
// ==========================================

function generarRespuestasEspana(pregunta) {

  let correcta;
  let candidatas;


  // CAPITAL

  if (pregunta.tipoPregunta === "capitales") {

    correcta = pregunta.capital;

    candidatas =
      ESPANA_PROVINCIAS.map(
        p => p.capital
      );

  }


  // PROVINCIA → COMUNIDAD

  if (pregunta.tipoPregunta === "provincia-comunidad") {

    correcta = pregunta.comunidad;

    candidatas =
      [...ESPANA_COMUNIDADES];

  }


  // COMUNIDAD → PROVINCIA

  if (pregunta.tipoPregunta === "comunidad-provincia") {

    correcta = pregunta.provincia;

    candidatas =
      ESPANA_PROVINCIAS
        .filter(
          p => p.comunidad !== pregunta.comunidad
        )
        .map(
          p => p.provincia
        );

  }
// CIUDAD AUTÓNOMA

if (pregunta.tipoPregunta === "ciudad-autonoma") {

  correcta = pregunta.ciudad;

  candidatas =
    ESPANA_PROVINCIAS.map(
      p => p.provincia
    );

}

  const respuestas = [correcta];

  const mezcladas =
    mezclar([...candidatas]);


  for (const opcion of mezcladas) {

    if (
      opcion !== correcta &&
      !respuestas.includes(opcion)
    ) {

      respuestas.push(opcion);

    }

    if (respuestas.length === 4) {
      break;
    }

  }


  return mezclar(respuestas);
}


// ==========================================
// COMPROBAR RESPUESTA ESPAÑA
// ==========================================

function comprobarRespuestaEspana(
  respuestaSeleccionada,
  botonSeleccionado
) {

  if (yaRespondida) return;

  detenerIntervaloTemporizador();
  cancelarAvanceAutomatico();

  yaRespondida = true;


  let correcta;


  if (
    preguntaActual.tipoPregunta === "capitales"
  ) {

    correcta =
      preguntaActual.capital;

  }


  if (
    preguntaActual.tipoPregunta === "provincia-comunidad"
  ) {

    correcta =
      preguntaActual.comunidad;

  }


  if (
    preguntaActual.tipoPregunta === "comunidad-provincia"
  ) {

    correcta =
      preguntaActual.provincia;

  }
if (
  preguntaActual.tipoPregunta === "ciudad-autonoma"
) {

  correcta =
    preguntaActual.ciudad;

}

  const botones =
    contenedorRespuestas.querySelectorAll("button");


  botones.forEach(boton => {

    boton.disabled = true;

    if (boton.textContent === correcta) {

      boton.classList.add("correcta");

    }

  });


  if (
    respuestaSeleccionada === correcta
  ) {

    aciertos++;

    resultado.innerHTML =
      `✅ Correcto.<br><br>${textoExplicacionEspana()}`;

  }

  else {

    fallos++;

    botonSeleccionado.classList.add("incorrecta");

    resultado.innerHTML =
      `❌ Incorrecto.<br><br>${textoExplicacionEspana()}`;

  }


  registrarResultadoExamen(
    correcta,
    respuestaSeleccionada,
    false
  );

  actualizarMarcador();

  registrarPreguntaContestadaEntrenamiento();

if (
  totalPreguntasEspana !== null &&
  numeroPregunta === totalPreguntasEspana
) {

  btnSiguiente.textContent =
    "Ver resultado →";

} else {

  btnSiguiente.textContent =
    "Siguiente pregunta →";

}
  btnSiguiente.classList.remove("oculto");
}


// ==========================================
// EXPLICACIÓN
// ==========================================
function mostrarResultadoFinalEspana() {

  ocultarTodasLasPantallas();

  finExamen.classList.remove("oculto");

  const porcentaje =
    Math.round(
      (aciertos / totalPreguntasEspana) * 100
    );

  let mensaje = "📚 Sigue practicando";

  if (porcentaje === 100) {
    mensaje = "🏆 ¡Perfecto!";
  }

  else if (porcentaje >= 80) {
    mensaje = "👏 Muy buen resultado";
  }

  else if (porcentaje >= 60) {
    mensaje = "👍 Buen progreso";
  }

  const nombreModo =
    nombreModoEspanaActual();

  const snapshot =
    guardarExamenFinalizado();

  resultadoExamen.innerHTML = `

    <div>${mensaje}</div>

    <div class="nota-grande">
      ${porcentaje}%
    </div>

    <div class="detalle-examen">

      <strong>${aciertos}</strong>
      de
      <strong>${totalPreguntasEspana}</strong>
      respuestas correctas

      <br><br>

      ✅ ${aciertos}
      &nbsp;&nbsp;
      ❌ ${fallos}

      <br><br>

      🇪🇸 España · ${nombreModo}

      <br><br>

      ⏱ ${TIEMPO_POR_PREGUNTA} s por pregunta

    </div>
  `;

  if (revisionExamenFinal) {
    revisionExamenFinal.innerHTML =
      crearRevisionExamen(snapshot);
  }

  actualizarBotonesFinExamen(snapshot);
}
function textoExplicacionEspana() {

  if (
    preguntaActual.tipoPregunta === "ciudad-autonoma"
  ) {

    return `
      <strong>${preguntaActual.ciudad}</strong>
      <br>
      Ciudad autónoma de España
    `;

  }

  return `
    <strong>${preguntaActual.provincia}</strong>
    → ${preguntaActual.capital}
    <br>
    ${preguntaActual.comunidad}
  `;
}
// ==========================================
// ¿SABÍAS QUE?
// ==========================================

function mostrarListaSabiasQue() {

  listaSabiasQue.innerHTML = "";


  SABIAS_QUE.forEach(publicacion => {

    const boton =
      document.createElement("button");

    boton.className = "boton-portada";


    boton.innerHTML = `

      <span class="boton-icono">
        ${escaparHTML(publicacion.bandera)}
      </span>

      <span class="boton-texto">

        <strong>
          ${escaparHTML(publicacion.pais)}
        </strong>

        <small>
          ${escaparHTML(publicacion.titulo)}
        </small>

      </span>

      <span class="boton-flecha">
        ›
      </span>

    `;


    boton.addEventListener(
      "click",
      () => {

        mostrarDetalleSabiasQue(
          publicacion
        );

      }
    );


    listaSabiasQue.appendChild(
      boton
    );

  });

}


// ==========================================
// MOSTRAR ARTÍCULO
// ==========================================

function mostrarDetalleSabiasQue(
  publicacion
) {
publicacionSabiasQueActual = publicacion;
  ocultarTodasLasPantallas();

  sabiasQueDetalle.classList.remove(
    "oculto"
  );


  const parrafos =
    String(publicacion.contenido)

      .trim()

      .split(/\n\s*\n/)

      .map(
        parrafo => `
          <p>
            ${escaparHTML(parrafo.trim())}
          </p>
        `
      )

      .join("");


  contenidoSabiasQue.innerHTML = `

    <div
      style="
        text-align:center;
        margin-bottom:30px;
      "
    >

      <div
        style="
          font-size:55px;
          margin-bottom:10px;
        "
      >
        ${escaparHTML(publicacion.bandera)}
      </div>


      <h2
        style="
          margin-bottom:8px;
        "
      >
        ${escaparHTML(publicacion.pais)}
      </h2>


      <h3
        style="
          margin-top:0;
          color:#475569;
        "
      >
        ${escaparHTML(publicacion.titulo)}
      </h3>


      <div
        style="
          font-size:12px;
          color:#94a3b8;
          margin-top:10px;
        "
      >
        ${escaparHTML(publicacion.fecha)}
      </div>

    </div>


    <div
      style="
        font-size:16px;
        line-height:1.8;
        color:#334155;
      "
    >

      ${parrafos}

    </div>

<div id="secciones-pais"></div>
    <div
      style="
        margin-top:35px;
        padding-top:15px;
        border-top:1px solid #e2e8f0;
        font-size:11px;
        color:#94a3b8;
        text-align:center;
      "
    >

      Publicado por Didac G.

    </div>

  `;
  const contenedorSecciones =
    document.getElementById("secciones-pais");


  if (
    Array.isArray(publicacion.secciones) &&
    publicacion.secciones.length > 0
  ) {

    publicacion.secciones.forEach(seccion => {

      const boton =
        document.createElement("button");

      boton.className = "boton-portada";

      boton.innerHTML = `

        <span class="boton-icono">
          ${escaparHTML(seccion.icono)}
        </span>

        <span class="boton-texto">

          <strong>
            ${escaparHTML(seccion.titulo)}
          </strong>

          <small>
            Abrir apartado
          </small>

        </span>

        <span class="boton-flecha">
          ›
        </span>

      `;

      boton.addEventListener(
        "click",
        () => {

          mostrarSeccionSabiasQue(
            publicacion,
            seccion
          );

        }
      );

      contenedorSecciones.appendChild(
        boton
      );

    });

  }
}
function mostrarSeccionSabiasQue(publicacion, seccion) {

  ocultarTodasLasPantallas();

  sabiasQueSeccion.classList.remove("oculto");

  btnVolverSabiasQuePais.textContent =
    `← Volver a ${publicacion.pais}`;


  const parrafos =
    String(seccion.contenido)
      .trim()
      .split(/\n\s*\n/)
      .map(
        parrafo => `
          <p>
            ${escaparHTML(parrafo.trim())}
          </p>
        `
      )
      .join("");


  contenidoSabiasQueSeccion.innerHTML = `

    <div style="text-align:center; margin-bottom:30px;">

      <div style="font-size:48px; margin-bottom:10px;">
        ${escaparHTML(seccion.icono)}
      </div>

      <h2>
        ${escaparHTML(seccion.titulo)}
      </h2>

      <div style="color:#64748b; font-size:14px;">
        ${escaparHTML(publicacion.bandera)}
        ${escaparHTML(publicacion.pais)}
      </div>

    </div>


    <div
      style="
        font-size:16px;
        line-height:1.8;
        color:#334155;
      "
    >
      ${parrafos}
    </div>

  `;

}
// ==========================================
// MEZCLAR
// ==========================================

function mezclar(array) {

  const copia = [
    ...array
  ];


  for (
    let i =
      copia.length - 1;

    i > 0;

    i--
  ) {

    const j =
      Math.floor(
        Math.random()
        * (i + 1)
      );


    [
      copia[i],
      copia[j]
    ] = [

      copia[j],
      copia[i]

    ];

  }


  return copia;
}


// ==========================================
// ESCAPAR TEXTO
// ==========================================

function escaparHTML(texto) {

  return String(texto)

    .replaceAll(
      "&",
      "&amp;"
    )

    .replaceAll(
      "<",
      "&lt;"
    )

    .replaceAll(
      ">",
      "&gt;"
    )

    .replaceAll(
      '"',
      "&quot;"
    )

    .replaceAll(
      "'",
      "&#039;"
    );

}
