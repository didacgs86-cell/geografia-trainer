
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
                r="4.5"
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

    <div class="mapas-leyenda">
      <span>
        Datos cartográficos: Natural Earth · dominio público
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

            responderMapa(
              elemento.dataset.iso
            );
          }
        );
      }
    );
}


function activarClicksCapitalesMapas() {

  mapasLienzo
    .querySelectorAll(
      ".mapas-capital"
    )
    .forEach(
      elemento => {

        elemento.addEventListener(
          "click",
          evento => {

            evento.stopPropagation();

            responderMapa(
              elemento.dataset.iso
            );
          }
        );
      }
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

    mapasAyuda.textContent =
      "Toca el punto correspondiente a la capital.";
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
