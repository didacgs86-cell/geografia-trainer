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
const configuracion = document.getElementById("configuracion");
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
// MENÚ PRINCIPAL
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
btnSabiasQue.addEventListener("click", () => {

  ocultarTodasLasPantallas();

  sabiasQueMenu.classList.remove("oculto");

  mostrarListaSabiasQue();

});


btnVolverSabiasQueInicio.addEventListener(
  "click",
  volverAlMenu
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

  ocultarTodasLasPantallas();

  inicio.classList.remove("oculto");
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
// SIGUIENTE
// ==========================================

btnSiguiente.addEventListener("click", () => {

  cancelarAvanceAutomatico();

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

  inicio.classList.add("oculto");

  configuracion.classList.add("oculto");

  juego.classList.add("oculto");

  finExamen.classList.add("oculto");

  if (revisionExamenFinal) {
    revisionExamenFinal.innerHTML = "";
  }

  banderasMenu.classList.add("oculto");
espanaMenu.classList.add("oculto");
  espanaConfig.classList.add("oculto");
  sabiasQueMenu.classList.add("oculto");
sabiasQueDetalle.classList.add("oculto");
  sabiasQueSeccion.classList.add("oculto");
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
