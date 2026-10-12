
// ==========================================
// GEOTRAINER - MAPAS INTERACTIVOS
// Primera fase: Europa
// ==========================================

const MAPAS_TIEMPO_POR_PREGUNTA = 10;

const mapasMenu =
  document.getElementById("mapas-menu");

const mapasContinente =
  document.getElementById("mapas-continente");

const mapasConfig =
  document.getElementById("mapas-config");

const mapasJuego =
  document.getElementById("mapas-juego");

const mapasFin =
  document.getElementById("mapas-fin");

const mapasContinenteTitulo =
  document.getElementById("mapas-continente-titulo");

const mapasContinenteIcono =
  document.getElementById("mapas-continente-icono");

const mapasConfigTitulo =
  document.getElementById("mapas-config-titulo");

const mapasConfigIcono =
  document.getElementById("mapas-config-icono");

const mapasConfigDescripcion =
  document.getElementById("mapas-config-descripcion");

const mapasTipoPartida =
  document.getElementById("mapas-tipo-partida");

const mapasNumeroPregunta =
  document.getElementById("mapas-numero-pregunta");

const mapasTemporizador =
  document.getElementById("mapas-temporizador");

const mapasAciertosTexto =
  document.getElementById("mapas-aciertos");

const mapasFallosTexto =
  document.getElementById("mapas-fallos");

const mapasPreguntaTexto =
  document.getElementById("mapas-pregunta");

const mapasAyuda =
  document.getElementById("mapas-ayuda");

const mapasLienzo =
  document.getElementById("mapas-lienzo");

const mapasFeedback =
  document.getElementById("mapas-feedback");

const mapasSiguiente =
  document.getElementById("mapas-siguiente");

const mapasResultadoExamen =
  document.getElementById("mapas-resultado-examen");

const mapasRevisionExamen =
  document.getElementById("mapas-revision-examen");

const mapasPausa =
  document.getElementById("mapas-pausa");

const mapasPausaTexto =
  document.getElementById("mapas-pausa-texto");


let mapasModoActual = null;
let mapasContinenteActual = "europa";

let mapasTotalExamen = null;
let mapasCantidadExamenConfigurada = null;

let mapasPlanActual = [];
let mapasIndiceActual = 0;
let mapasObjetivoActual = null;

let mapasAciertos = 0;
let mapasFallos = 0;
let mapasRespondida = false;

let mapasResultados = [];
let mapasColaEntrenamiento = [];
let mapasUltimoObjetivoEntrenamiento = null;
let mapasContestadasEntrenamiento = 0;
let mapasPausaPendiente = false;

let mapasTemporizadorId = null;
let mapasAvanceAutomaticoId = null;
let mapasTiempoRestante = MAPAS_TIEMPO_POR_PREGUNTA;

let mapasUltimoExamen = null;
let mapasEsRepasoFallos = false;


// ==========================================
// ESTADO DEL MAPA: ZOOM, PAN Y GESTOS
// ==========================================

const MAPAS_VIEWBOX_INICIAL = {
  x: 0,
  y: 0,
  ancho: 1000,
  alto: 650
};

const MAPAS_ZOOM_MIN = 1;
const MAPAS_ZOOM_MAX = 4.5;

let mapasViewBoxActual = {
  ...MAPAS_VIEWBOX_INICIAL
};

let mapasPunterosActivos =
  new Map();

let mapasArrastre = null;
let mapasDistanciaPinza = null;
let mapasCentroPinza = null;
let mapasHuboMovimiento = false;
let mapasIgnorarSiguienteClick = false;


// ==========================================
// UTILIDADES
// ==========================================

function barajarMapas(lista) {

  const copia = [...lista];

  for (let i = copia.length - 1; i > 0; i--) {

    const j =
      Math.floor(
        Math.random() * (i + 1)
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


function escaparMapas(texto) {

  return String(texto)
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#039;");
}


function banderaMapas(iso) {

  if (
    !iso ||
    iso.length !== 2
  ) {
    return "";
  }

  return String.fromCodePoint(
    ...[...iso.toUpperCase()]
      .map(
        letra =>
          127397 +
          letra.charCodeAt(0)
      )
  );
}


function datosObjetivoMapas(iso) {

  const capital =
    MAPA_EUROPA.capitales[iso];

  return {
    iso,
    pais:
      MAPA_EUROPA.nombres[iso],
    capital:
      capital.capital
  };
}


// ==========================================
// PANTALLAS
// ==========================================

function cancelarTemporizadoresMapas() {

  if (mapasTemporizadorId !== null) {
    clearInterval(
      mapasTemporizadorId
    );
    mapasTemporizadorId = null;
  }

  if (
    mapasAvanceAutomaticoId !== null
  ) {
    clearTimeout(
      mapasAvanceAutomaticoId
    );
    mapasAvanceAutomaticoId = null;
  }

  if (mapasTemporizador) {
    mapasTemporizador.classList.add(
      "oculto"
    );
    mapasTemporizador.classList.remove(
      "urgente"
    );
  }
}


function ocultarPantallasMapas() {

  cancelarTemporizadoresMapas();

  [
    mapasMenu,
    mapasContinente,
    mapasConfig,
    mapasJuego,
    mapasFin
  ].forEach(
    pantalla => {
      if (pantalla) {
        pantalla.classList.add(
          "oculto"
        );
      }
    }
  );

  if (mapasPausa) {
    mapasPausa.classList.add(
      "oculto"
    );
  }
}


function abrirMapasMenu() {

  ocultarTodasLasPantallas();

  mapasMenu.classList.remove(
    "oculto"
  );
}


function abrirContinentesMapas(modo) {

  mapasModoActual = modo;

  ocultarTodasLasPantallas();

  mapasContinente.classList.remove(
    "oculto"
  );

  if (modo === "paises") {

    mapasContinenteIcono.textContent =
      "🌍";

    mapasContinenteTitulo.textContent =
      "Localizar países";

  } else {

    mapasContinenteIcono.textContent =
      "📍";

    mapasContinenteTitulo.textContent =
      "Localizar capitales";
  }
}


function abrirConfigMapasEuropa() {

  mapasContinenteActual = "europa";

  ocultarTodasLasPantallas();

  mapasConfig.classList.remove(
    "oculto"
  );

  if (mapasModoActual === "paises") {

    mapasConfigIcono.textContent =
      "🌍";

    mapasConfigTitulo.textContent =
      "Europa · Países";

    mapasConfigDescripcion.textContent =
      "Localiza cada país directamente sobre el mapa de Europa.";

  } else {

    mapasConfigIcono.textContent =
      "📍";

    mapasConfigTitulo.textContent =
      "Europa · Capitales";

    mapasConfigDescripcion.textContent =
      "Localiza cada capital tocando su punto sobre el mapa.";
  }
}


// ==========================================
// GENERAR MAPA SVG
// ==========================================

function crearSvgEuropaMapas() {

  const paths =
    MAPA_EUROPA.ordenISO
      .map(
        iso => {

          const d =
            MAPA_EUROPA.paises[iso];

          if (!d) return "";

          return `
            <path
              class="mapas-pais"
              data-iso="${iso}"
              d="${d}"
              fill-rule="evenodd"
            ></path>
          `;
        }
      )
      .join("");


  const microestados =
    Object.entries(
      MAPA_EUROPA.microestados
    )
      .map(
        ([iso, punto]) => {

          const esObjetivoActual =
            mapasModoActual === "paises" &&
            mapasObjetivoActual &&
            mapasObjetivoActual.iso === iso;

          return `
            <g
              class="mapas-microestado ${
                esObjetivoActual
                  ? "mapas-micro-objetivo"
                  : ""
              }"
              data-iso="${iso}"
            >
              <circle
                class="mapas-micro-visible"
                cx="${punto.x}"
                cy="${punto.y}"
                r="4"
              ></circle>

              <circle
                class="mapas-micro-hit"
                cx="${punto.x}"
                cy="${punto.y}"
                r="14"
              ></circle>
            </g>
          `;
        }
      )
      .join("");


  const capitales =
    MAPA_EUROPA.ordenISO
      .map(
        iso => {

          const capital =
            MAPA_EUROPA.capitales[iso];

          return `
            <g
              class="mapas-capital"
              data-iso="${iso}"
            >
              <circle
                class="mapas-capital-visible"
                cx="${capital.x}"
                cy="${capital.y}"
                r="5.5"
              ></circle>

              <circle
                class="mapas-capital-hit"
                cx="${capital.x}"
                cy="${capital.y}"
                r="12"
              ></circle>
            </g>
          `;
        }
      )
      .join("");


  mapasLienzo.innerHTML = `
    <svg
      id="mapas-svg"
      viewBox="${MAPA_EUROPA.viewBox}"
      role="img"
      aria-label="Mapa interactivo de Europa"
    >

      <rect
        class="mapas-mar"
        x="0"
        y="0"
        width="1000"
        height="650"
      ></rect>

      <g id="mapas-paises-capa">
        ${paths}
        ${microestados}
      </g>

      <g id="mapas-capitales-capa">
        ${capitales}
      </g>

    </svg>

    <div
      class="mapas-controles"
      aria-label="Controles del mapa"
    >
      <button
        type="button"
        id="mapas-zoom-mas"
        class="mapas-control"
        aria-label="Ampliar mapa"
        title="Ampliar"
      >
        +
      </button>

      <button
        type="button"
        id="mapas-zoom-menos"
        class="mapas-control"
        aria-label="Reducir mapa"
        title="Reducir"
      >
        −
      </button>

      <button
        type="button"
        id="mapas-zoom-reset"
        class="mapas-control mapas-control-reset"
        aria-label="Restablecer vista"
        title="Ver Europa completa"
      >
        ↺
      </button>
    </div>

    <div class="mapas-leyenda">
      <span>
        Natural Earth · dominio público
      </span>
    </div>
  `;


  const capaCapitales =
    document.getElementById(
      "mapas-capitales-capa"
    );

  const capaPaises =
    document.getElementById(
      "mapas-paises-capa"
    );

  reiniciarVistaMapas();
  activarControlesMapa();
  activarGestosMapa();


  if (mapasModoActual === "paises") {

    capaCapitales.classList.add(
      "oculto"
    );

    capaPaises.classList.remove(
      "mapas-capa-inactiva"
    );

    activarClicksPaisesMapas();

  } else {

    capaCapitales.classList.remove(
      "oculto"
    );

    capaPaises.classList.add(
      "mapas-capa-inactiva"
    );

    activarClicksCapitalesMapas();
  }
}


function activarClicksPaisesMapas() {

  mapasLienzo
    .querySelectorAll(
      ".mapas-pais, .mapas-microestado"
    )
    .forEach(
      elemento => {

        elemento.addEventListener(
          "click",
          evento => {

            evento.stopPropagation();

            if (mapasIgnorarSiguienteClick) {
              mapasIgnorarSiguienteClick = false;
              return;
            }

            responderMapa(
              elemento.dataset.iso
            );
          }
        );
      }
    );
}


function activarClicksCapitalesMapas() {

  const svg =
    document.getElementById(
      "mapas-svg"
    );

  if (!svg) return;

  svg.addEventListener(
    "click",
    evento => {

      if (mapasRespondida) return;

      if (mapasIgnorarSiguienteClick) {
        mapasIgnorarSiguienteClick = false;
        return;
      }

      const punto =
        convertirPuntoClienteASvg(
          evento.clientX,
          evento.clientY
        );

      if (!punto) return;

      const isoMasCercano =
        capitalMasCercanaMapas(
          punto.x,
          punto.y
        );

      if (isoMasCercano) {
        responderMapa(
          isoMasCercano
        );
      }
    }
  );
}


function capitalMasCercanaMapas(
  x,
  y
) {

  /*
    Primero damos prioridad a la capital que se está preguntando
    si el usuario ha tocado razonablemente cerca de ella.

    Esto es especialmente importante en casos como Roma /
    Ciudad del Vaticano: a escala continental sus puntos son
    prácticamente coincidentes y no sería justo obligar al
    usuario a distinguirlos con precisión submilimétrica.
  */

  const capitalesMicroestado =
    new Set([
      "VA",
      "MC",
      "SM",
      "LI",
      "AD",
      "MT",
      "LU"
    ]);

  if (
    mapasObjetivoActual &&
    mapasObjetivoActual.iso &&
    capitalesMicroestado.has(
      mapasObjetivoActual.iso
    )
  ) {

    const objetivo =
      MAPA_EUROPA.capitales[
        mapasObjetivoActual.iso
      ];

    const svg =
      obtenerSvgMapas();

    if (
      objetivo &&
      svg
    ) {

      const dxObjetivo =
        objetivo.x - x;

      const dyObjetivo =
        objetivo.y - y;

      const distanciaSvg =
        Math.sqrt(
          dxObjetivo * dxObjetivo +
          dyObjetivo * dyObjetivo
        );

      const rect =
        svg.getBoundingClientRect();

      const escalaPantalla =
        rect.width /
        mapasViewBoxActual.ancho;

      const distanciaPantalla =
        distanciaSvg *
        escalaPantalla;

      if (
        distanciaPantalla <= 30
      ) {
        return mapasObjetivoActual.iso;
      }
    }
  }


  let mejorISO = null;
  let mejorDistancia = Infinity;

  MAPA_EUROPA.ordenISO.forEach(
    iso => {

      const capital =
        MAPA_EUROPA.capitales[iso];

      const dx =
        capital.x - x;

      const dy =
        capital.y - y;

      const distancia =
        Math.sqrt(
          dx * dx +
          dy * dy
        );

      if (
        distancia <
        mejorDistancia
      ) {
        mejorDistancia =
          distancia;

        mejorISO =
          iso;
      }
    }
  );

  return mejorISO;
}

// ==========================================
// ZOOM / PAN / SELECCIÓN ESPACIAL
// ==========================================

function obtenerSvgMapas() {

  return document.getElementById(
    "mapas-svg"
  );
}


function aplicarViewBoxMapas() {

  const svg =
    obtenerSvgMapas();

  if (!svg) return;

  svg.setAttribute(
    "viewBox",
    [
      mapasViewBoxActual.x,
      mapasViewBoxActual.y,
      mapasViewBoxActual.ancho,
      mapasViewBoxActual.alto
    ].join(" ")
  );
}


function limitarViewBoxMapas() {

  const inicial =
    MAPAS_VIEWBOX_INICIAL;

  mapasViewBoxActual.ancho =
    Math.max(
      inicial.ancho /
        MAPAS_ZOOM_MAX,
      Math.min(
        inicial.ancho /
          MAPAS_ZOOM_MIN,
        mapasViewBoxActual.ancho
      )
    );

  mapasViewBoxActual.alto =
    mapasViewBoxActual.ancho *
    (
      inicial.alto /
      inicial.ancho
    );

  const maxX =
    inicial.x +
    inicial.ancho -
    mapasViewBoxActual.ancho;

  const maxY =
    inicial.y +
    inicial.alto -
    mapasViewBoxActual.alto;

  mapasViewBoxActual.x =
    Math.max(
      inicial.x,
      Math.min(
        maxX,
        mapasViewBoxActual.x
      )
    );

  mapasViewBoxActual.y =
    Math.max(
      inicial.y,
      Math.min(
        maxY,
        mapasViewBoxActual.y
      )
    );
}


function reiniciarVistaMapas() {

  mapasViewBoxActual = {
    ...MAPAS_VIEWBOX_INICIAL
  };

  mapasPunterosActivos.clear();
  mapasArrastre = null;
  mapasDistanciaPinza = null;
  mapasCentroPinza = null;
  mapasHuboMovimiento = false;
  mapasIgnorarSiguienteClick = false;

  aplicarViewBoxMapas();
}


function convertirPuntoClienteASvg(
  clientX,
  clientY
) {

  const svg =
    obtenerSvgMapas();

  if (!svg) return null;

  const rect =
    svg.getBoundingClientRect();

  if (
    rect.width === 0 ||
    rect.height === 0
  ) {
    return null;
  }

  return {
    x:
      mapasViewBoxActual.x +
      (
        (clientX - rect.left) /
        rect.width
      ) *
      mapasViewBoxActual.ancho,

    y:
      mapasViewBoxActual.y +
      (
        (clientY - rect.top) /
        rect.height
      ) *
      mapasViewBoxActual.alto
  };
}


function zoomMapas(
  factor,
  centroCliente = null
) {

  const svg =
    obtenerSvgMapas();

  if (!svg) return;

  const zoomActual =
    MAPAS_VIEWBOX_INICIAL.ancho /
    mapasViewBoxActual.ancho;

  const zoomNuevo =
    Math.max(
      MAPAS_ZOOM_MIN,
      Math.min(
        MAPAS_ZOOM_MAX,
        zoomActual * factor
      )
    );

  const anchoNuevo =
    MAPAS_VIEWBOX_INICIAL.ancho /
    zoomNuevo;

  const altoNuevo =
    MAPAS_VIEWBOX_INICIAL.alto /
    zoomNuevo;

  let centroSvg;

  if (centroCliente) {

    centroSvg =
      convertirPuntoClienteASvg(
        centroCliente.x,
        centroCliente.y
      );

  } else {

    centroSvg = {
      x:
        mapasViewBoxActual.x +
        mapasViewBoxActual.ancho / 2,
      y:
        mapasViewBoxActual.y +
        mapasViewBoxActual.alto / 2
    };
  }

  if (!centroSvg) return;

  const proporcionX =
    (
      centroSvg.x -
      mapasViewBoxActual.x
    ) /
    mapasViewBoxActual.ancho;

  const proporcionY =
    (
      centroSvg.y -
      mapasViewBoxActual.y
    ) /
    mapasViewBoxActual.alto;

  mapasViewBoxActual = {
    x:
      centroSvg.x -
      proporcionX *
      anchoNuevo,
    y:
      centroSvg.y -
      proporcionY *
      altoNuevo,
    ancho:
      anchoNuevo,
    alto:
      altoNuevo
  };

  limitarViewBoxMapas();
  aplicarViewBoxMapas();
}


function activarControlesMapa() {

  const btnMas =
    document.getElementById(
      "mapas-zoom-mas"
    );

  const btnMenos =
    document.getElementById(
      "mapas-zoom-menos"
    );

  const btnReset =
    document.getElementById(
      "mapas-zoom-reset"
    );

  if (
    !btnMas ||
    !btnMenos ||
    !btnReset
  ) {
    return;
  }

  btnMas.addEventListener(
    "click",
    evento => {

      evento.stopPropagation();

      zoomMapas(1.45);
    }
  );

  btnMenos.addEventListener(
    "click",
    evento => {

      evento.stopPropagation();

      zoomMapas(
        1 / 1.45
      );
    }
  );

  btnReset.addEventListener(
    "click",
    evento => {

      evento.stopPropagation();

      reiniciarVistaMapas();
    }
  );
}


function distanciaEntrePunterosMapas() {

  const puntos =
    [...mapasPunterosActivos.values()];

  if (puntos.length < 2) {
    return null;
  }

  const dx =
    puntos[0].x -
    puntos[1].x;

  const dy =
    puntos[0].y -
    puntos[1].y;

  return Math.sqrt(
    dx * dx +
    dy * dy
  );
}


function centroEntrePunterosMapas() {

  const puntos =
    [...mapasPunterosActivos.values()];

  if (puntos.length < 2) {
    return null;
  }

  return {
    x:
      (
        puntos[0].x +
        puntos[1].x
      ) / 2,

    y:
      (
        puntos[0].y +
        puntos[1].y
      ) / 2
  };
}


function activarGestosMapa() {

  const svg =
    obtenerSvgMapas();

  if (!svg) return;

  svg.addEventListener(
    "wheel",
    evento => {

      evento.preventDefault();

      const factor =
        evento.deltaY < 0
          ? 1.16
          : 1 / 1.16;

      zoomMapas(
        factor,
        {
          x: evento.clientX,
          y: evento.clientY
        }
      );
    },
    {
      passive: false
    }
  );


  svg.addEventListener(
    "pointerdown",
    evento => {

      if (
        evento.pointerType === "mouse" &&
        evento.button !== 0
      ) {
        return;
      }

      svg.setPointerCapture(
        evento.pointerId
      );

      mapasPunterosActivos.set(
        evento.pointerId,
        {
          x: evento.clientX,
          y: evento.clientY
        }
      );

      mapasHuboMovimiento = false;

      if (
        mapasPunterosActivos.size === 1
      ) {

        mapasArrastre = {
          x: evento.clientX,
          y: evento.clientY
        };

      } else if (
        mapasPunterosActivos.size === 2
      ) {

        mapasDistanciaPinza =
          distanciaEntrePunterosMapas();

        mapasCentroPinza =
          centroEntrePunterosMapas();

        mapasArrastre = null;
      }
    }
  );


  svg.addEventListener(
    "pointermove",
    evento => {

      if (
        !mapasPunterosActivos.has(
          evento.pointerId
        )
      ) {
        return;
      }

      const anterior =
        mapasPunterosActivos.get(
          evento.pointerId
        );

      mapasPunterosActivos.set(
        evento.pointerId,
        {
          x: evento.clientX,
          y: evento.clientY
        }
      );


      if (
        mapasPunterosActivos.size === 2
      ) {

        const nuevaDistancia =
          distanciaEntrePunterosMapas();

        const nuevoCentro =
          centroEntrePunterosMapas();

        if (
          mapasDistanciaPinza &&
          nuevaDistancia &&
          nuevoCentro
        ) {

          const diferencia =
            Math.abs(
              nuevaDistancia -
              mapasDistanciaPinza
            );

          if (diferencia > 2) {
            mapasHuboMovimiento = true;
          }

          const factor =
            nuevaDistancia /
            mapasDistanciaPinza;

          zoomMapas(
            factor,
            nuevoCentro
          );

          mapasDistanciaPinza =
            nuevaDistancia;

          mapasCentroPinza =
            nuevoCentro;
        }

        return;
      }


      if (
        mapasPunterosActivos.size === 1 &&
        mapasArrastre
      ) {

        const dxPix =
          evento.clientX -
          mapasArrastre.x;

        const dyPix =
          evento.clientY -
          mapasArrastre.y;

        if (
          Math.abs(dxPix) > 3 ||
          Math.abs(dyPix) > 3
        ) {
          mapasHuboMovimiento = true;
        }

        if (
          mapasViewBoxActual.ancho <
          MAPAS_VIEWBOX_INICIAL.ancho
        ) {

          const rect =
            svg.getBoundingClientRect();

          mapasViewBoxActual.x -=
            dxPix /
            rect.width *
            mapasViewBoxActual.ancho;

          mapasViewBoxActual.y -=
            dyPix /
            rect.height *
            mapasViewBoxActual.alto;

          limitarViewBoxMapas();
          aplicarViewBoxMapas();
        }

        mapasArrastre = {
          x: evento.clientX,
          y: evento.clientY
        };
      }
    }
  );


  const terminarPuntero =
    evento => {

      mapasPunterosActivos.delete(
        evento.pointerId
      );

      if (
        mapasHuboMovimiento
      ) {
        mapasIgnorarSiguienteClick = true;

        setTimeout(
          () => {
            mapasIgnorarSiguienteClick = false;
          },
          120
        );
      }

      if (
        mapasPunterosActivos.size < 2
      ) {
        mapasDistanciaPinza = null;
        mapasCentroPinza = null;
      }

      if (
        mapasPunterosActivos.size === 1
      ) {

        const restante =
          [...mapasPunterosActivos.values()][0];

        mapasArrastre = {
          x: restante.x,
          y: restante.y
        };

      } else {

        mapasArrastre = null;
      }
    };


  svg.addEventListener(
    "pointerup",
    terminarPuntero
  );

  svg.addEventListener(
    "pointercancel",
    terminarPuntero
  );
}



// ==========================================
// PREGUNTAS
// ==========================================

function crearObjetivosMapas() {

  return MAPA_EUROPA.ordenISO.map(
    iso => datosObjetivoMapas(iso)
  );
}


function crearPlanExamenMapas(
  cantidad,
  evitarISO = []
) {

  const evitar =
    new Set(evitarISO);

  const objetivos =
    crearObjetivosMapas();

  const nuevos =
    objetivos.filter(
      objetivo =>
        !evitar.has(objetivo.iso)
    );

  const antiguos =
    objetivos.filter(
      objetivo =>
        evitar.has(objetivo.iso)
    );

  return [
    ...barajarMapas(nuevos),
    ...barajarMapas(antiguos)
  ].slice(
    0,
    Math.min(
      cantidad,
      objetivos.length
    )
  );
}


function prepararColaEntrenamientoMapas() {

  let objetivos =
    barajarMapas(
      crearObjetivosMapas()
    );

  if (
    mapasUltimoObjetivoEntrenamiento &&
    objetivos.length > 1 &&
    objetivos[0].iso ===
      mapasUltimoObjetivoEntrenamiento
  ) {

    [
      objetivos[0],
      objetivos[1]
    ] = [
      objetivos[1],
      objetivos[0]
    ];
  }

  mapasColaEntrenamiento =
    objetivos;
}


function siguienteObjetivoEntrenamientoMapas() {

  if (
    mapasColaEntrenamiento.length === 0
  ) {
    prepararColaEntrenamientoMapas();
  }

  const objetivo =
    mapasColaEntrenamiento.shift();

  mapasUltimoObjetivoEntrenamiento =
    objetivo.iso;

  return objetivo;
}


// ==========================================
// PARTIDAS
// ==========================================

function iniciarPartidaMapas(
  tipo,
  cantidad = null,
  planExacto = null
) {

  cancelarTemporizadoresMapas();

  mapasAciertos = 0;
  mapasFallos = 0;
  mapasResultados = [];
  mapasRespondida = false;
  mapasIndiceActual = 0;
  mapasObjetivoActual = null;
  mapasContestadasEntrenamiento = 0;
  mapasPausaPendiente = false;
  mapasEsRepasoFallos = false;

  mapasAciertosTexto.textContent =
    "0";

  mapasFallosTexto.textContent =
    "0";


  if (tipo === "entrenamiento") {

    mapasTotalExamen = null;
    mapasCantidadExamenConfigurada = null;
    mapasPlanActual = [];
    mapasColaEntrenamiento = [];
    mapasUltimoObjetivoEntrenamiento = null;

  } else {

    mapasTotalExamen =
      planExacto
        ? planExacto.length
        : cantidad;

    if (!planExacto) {
      mapasCantidadExamenConfigurada =
        cantidad;
    }

    mapasPlanActual =
      planExacto
        ? planExacto.map(
            objetivo => ({
              ...objetivo
            })
          )
        : crearPlanExamenMapas(
            cantidad
          );
  }


  ocultarTodasLasPantallas();

  mapasJuego.classList.remove(
    "oculto"
  );

  mostrarPreguntaMapas();
}


// ==========================================
// MOSTRAR PREGUNTA
// ==========================================

function mostrarPreguntaMapas() {

  cancelarTemporizadoresMapas();

  mapasRespondida = false;

  mapasFeedback.innerHTML = "";
  mapasFeedback.classList.add(
    "oculto"
  );

  mapasSiguiente.classList.add(
    "oculto"
  );


  if (mapasTotalExamen === null) {

    mapasObjetivoActual =
      siguienteObjetivoEntrenamientoMapas();

    mapasNumeroPregunta.textContent =
      `Pregunta ${mapasContestadasEntrenamiento + 1}`;

    mapasTipoPartida.textContent =
      mapasModoActual === "paises"
        ? "Europa · Países · Entrenamiento"
        : "Europa · Capitales · Entrenamiento";

  } else {

    mapasObjetivoActual =
      mapasPlanActual[
        mapasIndiceActual
      ];

    if (!mapasObjetivoActual) {
      finalizarExamenMapas();
      return;
    }

    mapasNumeroPregunta.textContent =
      `Pregunta ${mapasIndiceActual + 1} de ${mapasPlanActual.length}`;

    mapasTipoPartida.textContent =
      mapasModoActual === "paises"
        ? "Europa · Países · Examen"
        : "Europa · Capitales · Examen";
  }


  if (mapasModoActual === "paises") {

    mapasPreguntaTexto.textContent =
      `Localiza ${mapasObjetivoActual.pais}`;

    mapasAyuda.textContent =
      MAPA_EUROPA.microestados[mapasObjetivoActual.iso]
        ? "Toca el punto discreto que representa este microestado."
        : "Toca directamente el país correcto sobre el mapa.";

  } else {

    mapasPreguntaTexto.textContent =
      `Localiza ${mapasObjetivoActual.capital}`;

    mapasAyuda.innerHTML =
      `${banderaMapas(mapasObjetivoActual.iso)} <strong>${escaparMapas(mapasObjetivoActual.pais)}</strong> · Toca la zona del mapa donde se encuentra la capital.`;
  }


  crearSvgEuropaMapas();

  iniciarTemporizadorMapas();
}


// ==========================================
// TEMPORIZADOR
// ==========================================

function actualizarTemporizadorMapas() {

  mapasTemporizador.textContent =
    `⏱ ${mapasTiempoRestante} s`;

  mapasTemporizador.classList.toggle(
    "urgente",
    mapasTiempoRestante <= 3
  );
}


function iniciarTemporizadorMapas() {

  if (mapasTotalExamen === null) {

    mapasTemporizador.classList.add(
      "oculto"
    );

    return;
  }

  mapasTiempoRestante =
    MAPAS_TIEMPO_POR_PREGUNTA;

  mapasTemporizador.classList.remove(
    "oculto"
  );

  actualizarTemporizadorMapas();

  mapasTemporizadorId =
    setInterval(
      () => {

        mapasTiempoRestante--;

        actualizarTemporizadorMapas();

        if (
          mapasTiempoRestante <= 0
        ) {

          clearInterval(
            mapasTemporizadorId
          );

          mapasTemporizadorId = null;

          tiempoAgotadoMapas();
        }

      },
      1000
    );
}


function tiempoAgotadoMapas() {

  if (mapasRespondida) return;

  mapasRespondida = true;
  mapasFallos++;

  mapasFallosTexto.textContent =
    String(mapasFallos);

  marcarResultadoMapa(
    null,
    mapasObjetivoActual.iso
  );

  if (mapasTotalExamen !== null) {

    mapasResultados.push({
      objetivo: {
        ...mapasObjetivoActual
      },
      respuestaISO: null,
      acierto: false,
      tiempoAgotado: true
    });
  }

  mostrarFeedbackMapas(
    false,
    null,
    true
  );

  mapasSiguiente.classList.remove(
    "oculto"
  );

  mapasSiguiente.textContent =
    mapasIndiceActual ===
      mapasPlanActual.length - 1
        ? "Ver resultado →"
        : "Siguiente pregunta →";

  mapasAvanceAutomaticoId =
    setTimeout(
      () => {
        mapasAvanceAutomaticoId = null;
        avanzarMapas();
      },
      1500
    );
}


// ==========================================
// RESPONDER EN EL MAPA
// ==========================================

function responderMapa(isoSeleccionado) {

  if (mapasRespondida) return;

  mapasRespondida = true;

  if (mapasTemporizadorId !== null) {
    clearInterval(
      mapasTemporizadorId
    );
    mapasTemporizadorId = null;
  }

  const acierto =
    isoSeleccionado ===
    mapasObjetivoActual.iso;

  if (acierto) {
    mapasAciertos++;
  } else {
    mapasFallos++;
  }

  mapasAciertosTexto.textContent =
    String(mapasAciertos);

  mapasFallosTexto.textContent =
    String(mapasFallos);

  marcarResultadoMapa(
    isoSeleccionado,
    mapasObjetivoActual.iso
  );

  if (mapasTotalExamen !== null) {

    mapasResultados.push({
      objetivo: {
        ...mapasObjetivoActual
      },
      respuestaISO:
        isoSeleccionado,
      acierto,
      tiempoAgotado: false
    });

  } else {

    mapasContestadasEntrenamiento++;

    if (
      mapasContestadasEntrenamiento > 0 &&
      mapasContestadasEntrenamiento % 15 === 0
    ) {
      mapasPausaPendiente = true;
    }
  }

  mostrarFeedbackMapas(
    acierto,
    isoSeleccionado,
    false
  );

  mapasSiguiente.classList.remove(
    "oculto"
  );

  if (mapasTotalExamen === null) {

    mapasSiguiente.textContent =
      mapasPausaPendiente
        ? "Continuar práctica →"
        : "Siguiente pregunta →";

  } else {

    mapasSiguiente.textContent =
      mapasIndiceActual ===
        mapasPlanActual.length - 1
          ? "Ver resultado →"
          : "Siguiente pregunta →";
  }
}


function marcarResultadoMapa(
  isoSeleccionado,
  isoCorrecto
) {

  if (mapasModoActual === "paises") {

    if (isoSeleccionado) {
      colorearPaisMapas(
        isoSeleccionado,
        isoSeleccionado ===
          isoCorrecto
          ? "mapas-correcto"
          : "mapas-incorrecto"
      );
    }

    colorearPaisMapas(
      isoCorrecto,
      "mapas-correcto"
    );

  } else {

    if (isoSeleccionado) {
      colorearCapitalMapas(
        isoSeleccionado,
        isoSeleccionado ===
          isoCorrecto
          ? "mapas-capital-correcta"
          : "mapas-capital-incorrecta"
      );
    }

    colorearCapitalMapas(
      isoCorrecto,
      "mapas-capital-correcta"
    );
  }


  mapasLienzo
    .querySelectorAll(
      ".mapas-pais, .mapas-microestado, .mapas-capital"
    )
    .forEach(
      elemento => {
        elemento.classList.add(
          "mapas-bloqueado"
        );
      }
    );
}


function colorearPaisMapas(
  iso,
  clase
) {

  mapasLienzo
    .querySelectorAll(
      `[data-iso="${iso}"]`
    )
    .forEach(
      elemento => {
        elemento.classList.add(
          clase
        );
      }
    );
}


function colorearCapitalMapas(
  iso,
  clase
) {

  const elemento =
    mapasLienzo.querySelector(
      `.mapas-capital[data-iso="${iso}"]`
    );

  if (elemento) {
    elemento.classList.add(
      clase
    );
  }
}


// ==========================================
// FEEDBACK
// ==========================================

function mostrarFeedbackMapas(
  acierto,
  isoSeleccionado,
  tiempoAgotado
) {

  const objetivo =
    mapasObjetivoActual;

  let titulo;

  if (tiempoAgotado) {

    titulo =
      "⏱ Tiempo agotado.";

  } else if (acierto) {

    titulo =
      "✅ Correcto.";

  } else {

    titulo =
      "❌ Incorrecto.";
  }


  const seleccion =
    isoSeleccionado
      ? datosObjetivoMapas(
          isoSeleccionado
        )
      : null;


  if (mapasModoActual === "paises") {

    mapasFeedback.innerHTML = `
      <div class="mapas-feedback-titulo">
        ${titulo}
      </div>

      <div class="mapas-ficha">
        <strong>
          ${banderaMapas(objetivo.iso)}
          ${escaparMapas(objetivo.pais)}
        </strong>

        <span>
          Capital:
          ${escaparMapas(objetivo.capital)}
        </span>

        ${
          !acierto &&
          seleccion
            ? `
              <span class="mapas-tu-respuesta">
                Has seleccionado:
                ${banderaMapas(seleccion.iso)}
                ${escaparMapas(seleccion.pais)}
              </span>
            `
            : ""
        }
      </div>
    `;

  } else {

    mapasFeedback.innerHTML = `
      <div class="mapas-feedback-titulo">
        ${titulo}
      </div>

      <div class="mapas-ficha">
        <strong>
          📍 ${escaparMapas(objetivo.capital)}
        </strong>

        <span>
          ${banderaMapas(objetivo.iso)}
          ${escaparMapas(objetivo.pais)}
        </span>

        ${
          !acierto &&
          seleccion
            ? `
              <span class="mapas-tu-respuesta">
                Has seleccionado:
                ${escaparMapas(seleccion.capital)}
                ·
                ${escaparMapas(seleccion.pais)}
              </span>
            `
            : ""
        }
      </div>
    `;
  }

  mapasFeedback.classList.remove(
    "oculto"
  );
}


// ==========================================
// AVANZAR / PAUSA
// ==========================================

function avanzarMapas() {

  if (
    mapasAvanceAutomaticoId !== null
  ) {
    clearTimeout(
      mapasAvanceAutomaticoId
    );
    mapasAvanceAutomaticoId = null;
  }

  if (mapasTotalExamen === null) {

    if (mapasPausaPendiente) {
      mostrarPausaMapas();
      return;
    }

    mostrarPreguntaMapas();
    return;
  }

  if (
    mapasIndiceActual >=
      mapasPlanActual.length - 1
  ) {
    finalizarExamenMapas();
    return;
  }

  mapasIndiceActual++;

  mostrarPreguntaMapas();
}


function mostrarPausaMapas() {

  mapasPausaTexto.textContent =
    `Llevas ${mapasContestadasEntrenamiento} preguntas: ${mapasAciertos} correctas y ${mapasFallos} incorrectas. ¿Quieres seguir practicando?`;

  mapasPausa.classList.remove(
    "oculto"
  );
}


// ==========================================
// RESULTADO FINAL
// ==========================================

function nombreRespuestaMapas(
  iso
) {

  if (!iso) {
    return "Sin respuesta";
  }

  const datos =
    datosObjetivoMapas(iso);

  if (mapasModoActual === "paises") {
    return datos.pais;
  }

  return `${datos.capital} · ${datos.pais}`;
}


function crearRevisionMapas() {

  return `
    <div class="revision-examen">

      <h3>📚 Revisión del examen</h3>

      <p class="revision-intro">
        Repasa dónde estaba cada país o capital.
      </p>

      <div class="revision-lista">

        ${mapasResultados.map(
          (resultado, indice) => {

            const clase =
              resultado.acierto
                ? "acierto"
                : "fallo";

            const estado =
              resultado.acierto
                ? "✅ Correcta"
                : "❌ Incorrecta";

            const objetivo =
              resultado.objetivo;

            const correcta =
              mapasModoActual === "paises"
                ? `${banderaMapas(objetivo.iso)} ${objetivo.pais}`
                : `📍 ${objetivo.capital} · ${objetivo.pais}`;

            const elegida =
              nombreRespuestaMapas(
                resultado.respuestaISO
              );

            return `
              <div class="revision-item ${clase}">

                <div class="revision-cabecera">
                  <span>
                    Pregunta ${indice + 1}
                  </span>
                  <span>
                    ${estado}
                  </span>
                </div>

                <div class="mapas-revision-enunciado">
                  ${
                    mapasModoActual === "paises"
                      ? `Localiza ${escaparMapas(objetivo.pais)}`
                      : `Localiza ${escaparMapas(objetivo.capital)}`
                  }
                </div>

                <div class="revision-correcta">
                  <strong>
                    ${correcta}
                  </strong>
                </div>

                ${
                  resultado.acierto
                    ? ""
                    : `
                      <div class="revision-tu-respuesta">
                        Tu respuesta:
                        <strong>
                          ${escaparMapas(elegida)}
                        </strong>
                      </div>
                    `
                }

              </div>
            `;

          }
        ).join("")}

      </div>

    </div>
  `;
}


function finalizarExamenMapas() {

  cancelarTemporizadoresMapas();

  ocultarTodasLasPantallas();

  mapasFin.classList.remove(
    "oculto"
  );

  const total =
    mapasResultados.length;

  const porcentaje =
    total > 0
      ? Math.round(
          mapasAciertos /
          total *
          100
        )
      : 0;

  mapasResultadoExamen.innerHTML = `
    <div class="nota-grande">
      ${mapasAciertos} / ${total}
    </div>

    <div class="detalle-examen">
      ${porcentaje}% de aciertos
      <br>
      ${
        mapasModoActual === "paises"
          ? "Europa · Localizar países"
          : "Europa · Localizar capitales"
      }
    </div>
  `;

  mapasRevisionExamen.innerHTML =
    crearRevisionMapas();

  const falladas =
    mapasResultados.filter(
      resultado =>
        !resultado.acierto
    );

  const btnRepasar =
    document.getElementById(
      "mapas-repasar-fallos"
    );

  if (falladas.length > 0) {

    btnRepasar.textContent =
      `🎯 Repasar solo mis fallos (${falladas.length})`;

    btnRepasar.classList.remove(
      "oculto"
    );

  } else {

    btnRepasar.classList.add(
      "oculto"
    );
  }


  if (!mapasEsRepasoFallos) {

    mapasUltimoExamen = {
      modo: mapasModoActual,
      continente:
        mapasContinenteActual,
      cantidad:
        mapasPlanActual.length,
      plan:
        mapasPlanActual.map(
          objetivo => ({
            ...objetivo
          })
        ),
      resultados:
        mapasResultados.map(
          resultado => ({
            ...resultado,
            objetivo: {
              ...resultado.objetivo
            }
          })
        )
    };
  }
}


// ==========================================
// REPETIR / NUEVO / FALLOS
// ==========================================

function repetirUltimoExamenMapas() {

  if (!mapasUltimoExamen) return;

  mapasModoActual =
    mapasUltimoExamen.modo;

  mapasContinenteActual =
    mapasUltimoExamen.continente;

  iniciarPartidaMapas(
    "examen",
    mapasUltimoExamen.cantidad,
    mapasUltimoExamen.plan
  );
}


function nuevoExamenMapas() {

  const cantidad =
    mapasCantidadExamenConfigurada ||
    (
      mapasUltimoExamen
        ? mapasUltimoExamen.cantidad
        : 10
    );

  const evitar =
    mapasUltimoExamen
      ? mapasUltimoExamen.plan.map(
          objetivo =>
            objetivo.iso
        )
      : [];

  const nuevoPlan =
    crearPlanExamenMapas(
      cantidad,
      evitar
    );

  iniciarPartidaMapas(
    "examen",
    cantidad,
    nuevoPlan
  );
}


function repasarFallosMapas() {

  const falladas =
    mapasResultados
      .filter(
        resultado =>
          !resultado.acierto
      )
      .map(
        resultado => ({
          ...resultado.objetivo
        })
      );

  if (falladas.length === 0) {
    return;
  }

  iniciarPartidaMapas(
    "examen",
    falladas.length,
    falladas
  );

  mapasEsRepasoFallos = true;
}


// ==========================================
// EVENTOS
// ==========================================

document
  .querySelectorAll(
    ".mapas-modo"
  )
  .forEach(
    boton => {

      boton.addEventListener(
        "click",
        () => {
          abrirContinentesMapas(
            boton.dataset.mapasModo
          );
        }
      );

    }
  );


document
  .getElementById(
    "volver-mapas-orografia"
  )
  .addEventListener(
    "click",
    () => {
      mostrarMapasOrografiaMenu();
    }
  );


document
  .getElementById(
    "volver-mapas-modo"
  )
  .addEventListener(
    "click",
    abrirMapasMenu
  );


document
  .getElementById(
    "mapas-europa"
  )
  .addEventListener(
    "click",
    abrirConfigMapasEuropa
  );


document
  .getElementById(
    "volver-mapas-continente"
  )
  .addEventListener(
    "click",
    () => {
      abrirContinentesMapas(
        mapasModoActual
      );
    }
  );


document
  .getElementById(
    "mapas-entrenamiento"
  )
  .addEventListener(
    "click",
    () => {
      iniciarPartidaMapas(
        "entrenamiento"
      );
    }
  );


document
  .getElementById(
    "mapas-examen10"
  )
  .addEventListener(
    "click",
    () => {
      mapasCantidadExamenConfigurada = 10;
      iniciarPartidaMapas(
        "examen",
        10
      );
    }
  );


document
  .getElementById(
    "mapas-examen20"
  )
  .addEventListener(
    "click",
    () => {
      mapasCantidadExamenConfigurada = 20;
      iniciarPartidaMapas(
        "examen",
        20
      );
    }
  );


document
  .getElementById(
    "volver-mapas-desde-juego"
  )
  .addEventListener(
    "click",
    abrirMapasMenu
  );


mapasSiguiente.addEventListener(
  "click",
  avanzarMapas
);


document
  .getElementById(
    "mapas-continuar"
  )
  .addEventListener(
    "click",
    () => {

      mapasPausaPendiente = false;

      mapasPausa.classList.add(
        "oculto"
      );

      mostrarPreguntaMapas();
    }
  );


document
  .getElementById(
    "mapas-salir"
  )
  .addEventListener(
    "click",
    abrirMapasMenu
  );


document
  .getElementById(
    "mapas-repetir-examen"
  )
  .addEventListener(
    "click",
    repetirUltimoExamenMapas
  );


document
  .getElementById(
    "mapas-nuevo-examen"
  )
  .addEventListener(
    "click",
    nuevoExamenMapas
  );


document
  .getElementById(
    "mapas-repasar-fallos"
  )
  .addEventListener(
    "click",
    repasarFallosMapas
  );


document
  .getElementById(
    "volver-mapas-fin"
  )
  .addEventListener(
    "click",
    abrirMapasMenu
  );


document
  .getElementById(
    "mapas-volver-menu"
  )
  .addEventListener(
    "click",
    abrirMapasMenu
  );
