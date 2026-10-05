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
const juego = document.getElementById("juego");
const finExamen = document.getElementById("fin-examen");
const espanaMenu = document.getElementById("espana-menu");
const espanaConfig = document.getElementById("espana-config");
const btnCapitales = document.getElementById("btn-capitales");
const btnPaises = document.getElementById("btn-paises");
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
let colaPreguntasEspana = [];
let listaPreguntas = [];
let colaPreguntas = [];
let preguntaActual = null;

let numeroPregunta = 0;
let aciertos = 0;
let fallos = 0;

let totalPreguntasExamen = null;
let yaRespondida = false;


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

  tituloConfiguracion.textContent =
    tipoJuego === "capitales"
      ? "🏛️ Practicar capitales"
      : "🌍 Practicar países";
}


// ==========================================
// VOLVER
// ==========================================

btnVolverInicio.addEventListener("click", volverAlMenu);
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


function prepararPartida() {

  numeroPregunta = 0;
  aciertos = 0;
  fallos = 0;

  yaRespondida = false;

  ocultarMapa();


  // FILTRAR BASE DE DATOS

  listaPreguntas = GEO_DATA
    .filter(esEntradaDelContenido)
    .filter(esEntradaDeLaRegion)
    .filter(esAptaParaCapitales);


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
      mezclar([...listaPreguntas])
        .slice(0, totalPreguntasExamen);

  }

  else {

    totalPreguntasExamen = null;

    colaPreguntas =
      mezclar([...listaPreguntas]);

  }


  ocultarTodasLasPantallas();

  juego.classList.remove("oculto");


  tipoPartida.textContent =
    tipoJuego === "capitales"
      ? "🏛️ Capitales"
      : "🌍 Países";


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
      mezclar([...listaPreguntas]);

  }


  preguntaActual =
    colaPreguntas.shift();


  numeroPregunta++;


  // TEXTO DE PREGUNTA

  if (tipoJuego === "capitales") {

    textoPregunta.textContent =
      `¿Cuál es la capital de ${preguntaActual.pais}?`;

  }

  else {

    textoPregunta.textContent =
      `¿A qué país o territorio pertenece ${preguntaActual.capital}?`;

  }


  // NÚMERO DE PREGUNTA

  textoNumeroPregunta.textContent =

    totalPreguntasExamen !== null

      ? `Pregunta ${numeroPregunta}/${totalPreguntasExamen}`

      : `Pregunta ${numeroPregunta}`;


  const respuestas =
    generarRespuestas();


  respuestas.forEach(respuesta => {

    const boton =
      document.createElement("button");

    boton.textContent =
      respuesta;


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
      .filter(esAptaParaCapitales);


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
          esAptaParaCapitales
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

  return tipoJuego === "capitales"

    ? p.capital

    : p.pais;
}


function obtenerRespuestaCorrecta() {

  return valorRespuesta(
    preguntaActual
  );
}


// ==========================================
// COMPROBAR RESPUESTA
// ==========================================

function comprobarRespuesta(
  respuestaSeleccionada,
  botonSeleccionado
) {

  if (yaRespondida) return;


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

      <strong>
        ${escaparHTML(
          preguntaActual.pais
        )}
      </strong>

      →

      ${escaparHTML(
        preguntaActual.capital
      )}

      ${crearDetalleEstatus(
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

      <strong>
        ${escaparHTML(
          preguntaActual.pais
        )}
      </strong>

      →

      <strong>
        ${escaparHTML(
          preguntaActual.capital
        )}
      </strong>

      <br><br>

      🌍
      ${escaparHTML(
        obtenerRegion(
          preguntaActual
        )
      )}

      ${crearDetalleEstatus(
        preguntaActual
      )}

    `;


    mostrarMapaError(
      preguntaActual
    );

  }


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


      ${
        tipoJuego === "capitales"

          ? "🏛️ Capitales"

          : "🌍 Países"
      }

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

    </div>

  `;

}


// ==========================================
// REPETIR EXAMEN
// ==========================================

btnRepetirExamen.addEventListener("click", () => {

  if (modoEspana !== null) {

    iniciarJuegoEspana(
      tipoPracticaEspana,
      totalPreguntasEspana
    );

  } else {

    prepararPartida();

  }

});


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

  inicio.classList.add("oculto");

  configuracion.classList.add("oculto");

  juego.classList.add("oculto");

  finExamen.classList.add("oculto");
espanaMenu.classList.add("oculto");
  espanaConfig.classList.add("oculto");
  sabiasQueMenu.classList.add("oculto");
sabiasQueDetalle.classList.add("oculto");
}
// ==========================================
// JUEGO DE ESPAÑA
// ==========================================

function iniciarJuegoEspana(tipoPractica, cantidadPreguntas) {

  tipoPracticaEspana = tipoPractica;
  totalPreguntasEspana = cantidadPreguntas;

  numeroPregunta = 0;
  aciertos = 0;
  fallos = 0;
  yaRespondida = false;

  colaPreguntasEspana =
    mezclar([...ESPANA_PROVINCIAS]);

  if (totalPreguntasEspana !== null) {

    colaPreguntasEspana =
      colaPreguntasEspana.slice(
        0,
        totalPreguntasEspana
      );
  }

  ocultarTodasLasPantallas();

  juego.classList.remove("oculto");

  tipoPartida.textContent =
    "🇪🇸 España";

  if (modoEspana === "capitales") {
    continentePartida.textContent =
      "Capitales de provincia";
  }
if (modoEspana === "comunidades") {
  continentePartida.textContent =
    "Comunidades autónomas";
}
  if (modoEspana === "provincia-comunidad") {
    continentePartida.textContent =
      "Provincia → Comunidad";
  }

  if (modoEspana === "comunidad-provincia") {
    continentePartida.textContent =
      "Comunidad → Provincia";
  }

  if (modoEspana === "mixto") {
    continentePartida.textContent =
      "Modo mixto";
  }

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

 let tipoPregunta = modoEspana;


// MODO COMUNIDADES AUTÓNOMAS
// Alterna preguntas en los dos sentidos

if (modoEspana === "comunidades") {

  const tiposComunidades = [
    "provincia-comunidad",
    "comunidad-provincia",
    "ciudad-autonoma"
  ];

  tipoPregunta =
    tiposComunidades[
      Math.floor(Math.random() * tiposComunidades.length)
    ];
}


// MODO MIXTO

if (modoEspana === "mixto") {

  const tipos = [
    "capitales",
    "provincia-comunidad",
    "comunidad-provincia",
    "ciudad-autonoma"
  ];

  tipoPregunta =
    tipos[Math.floor(Math.random() * tipos.length)];
}

  if (colaPreguntasEspana.length === 0) {

  colaPreguntasEspana =
    mezclar([...ESPANA_PROVINCIAS]);

}

if (tipoPregunta === "ciudad-autonoma") {

  const ciudad =
    ESPANA_CIUDADES_AUTONOMAS[
      Math.floor(
        Math.random() * ESPANA_CIUDADES_AUTONOMAS.length
      )
    ];

  preguntaActual = {
    ciudad: ciudad.ciudad,
    capital: ciudad.capital,
    tipo: ciudad.tipo,
    tipoPregunta: "ciudad-autonoma"
  };

} else {

  const provincia =
    colaPreguntasEspana.shift();

  preguntaActual = {
    ...provincia,
    tipoPregunta: tipoPregunta
  };

}


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
    generarRespuestasEspana(preguntaActual);


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

  let nombreModo = "";

  if (modoEspana === "capitales") {
    nombreModo = "Capitales de provincia";
  }

  if (modoEspana === "provincia-comunidad") {
    nombreModo = "Provincia → Comunidad";
  }

  if (modoEspana === "comunidad-provincia") {
    nombreModo = "Comunidad → Provincia";
  }

  if (modoEspana === "mixto") {
    nombreModo = "Modo mixto";
  }

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

    </div>
  `;
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
