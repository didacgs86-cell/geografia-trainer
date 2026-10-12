
// ==========================================
// GEOTRAINER - RÍOS DE EUROPA
// ==========================================

const RIOS_EUROPA = [
  {
    "id": "danubio",
    "nombre": "Danubio",
    "paises": [
      "Alemania",
      "Austria",
      "Eslovaquia",
      "Hungría",
      "Croacia",
      "Serbia",
      "Bulgaria",
      "Rumanía",
      "Moldavia",
      "Ucrania"
    ],
    "ciudades": [
      "Viena",
      "Bratislava",
      "Budapest",
      "Belgrado"
    ],
    "desembocadura": "Mar Negro",
    "pistas": [
      "Pasa por Viena, Bratislava, Budapest y Belgrado.",
      "Recorre o bordea 10 países europeos.",
      "Desemboca en el mar Negro."
    ]
  },
  {
    "id": "rin",
    "nombre": "Rin",
    "paises": [
      "Suiza",
      "Liechtenstein",
      "Austria",
      "Alemania",
      "Francia",
      "Países Bajos"
    ],
    "ciudades": [
      "Basilea",
      "Estrasburgo",
      "Colonia",
      "Düsseldorf"
    ],
    "desembocadura": "Mar del Norte",
    "pistas": [
      "Nace en los Alpes.",
      "Forma parte de la frontera franco-alemana.",
      "Desemboca en el mar del Norte."
    ]
  },
  {
    "id": "volga",
    "nombre": "Volga",
    "paises": [
      "Rusia"
    ],
    "ciudades": [
      "Nizhni Nóvgorod",
      "Kazán",
      "Samara",
      "Volgogrado",
      "Astracán"
    ],
    "desembocadura": "Mar Caspio",
    "pistas": [
      "Es el río más largo de Europa.",
      "Su recorrido está íntegramente en Rusia.",
      "Desemboca en el mar Caspio."
    ]
  },
  {
    "id": "sena",
    "nombre": "Sena",
    "paises": [
      "Francia"
    ],
    "ciudades": [
      "París",
      "Ruan"
    ],
    "desembocadura": "Canal de la Mancha",
    "pistas": [
      "Atraviesa París.",
      "Recorre el norte de Francia.",
      "Desemboca en el canal de la Mancha."
    ]
  },
  {
    "id": "tamesis",
    "nombre": "Támesis",
    "paises": [
      "Reino Unido"
    ],
    "ciudades": [
      "Oxford",
      "Londres"
    ],
    "desembocadura": "Mar del Norte",
    "pistas": [
      "Atraviesa Londres.",
      "Recorre el sur de Inglaterra.",
      "Desemboca en el mar del Norte."
    ]
  },
  {
    "id": "tajo",
    "nombre": "Tajo",
    "paises": [
      "España",
      "Portugal"
    ],
    "ciudades": [
      "Toledo",
      "Lisboa"
    ],
    "desembocadura": "Océano Atlántico",
    "pistas": [
      "Es el río más largo de la península ibérica.",
      "Pasa por Toledo y llega a Lisboa.",
      "Desemboca en el océano Atlántico."
    ]
  },
  {
    "id": "ebro",
    "nombre": "Ebro",
    "paises": [
      "España"
    ],
    "ciudades": [
      "Logroño",
      "Zaragoza",
      "Tortosa"
    ],
    "desembocadura": "Mar Mediterráneo",
    "pistas": [
      "Es el río más caudaloso de España.",
      "Atraviesa Zaragoza.",
      "Forma un gran delta en el Mediterráneo."
    ]
  },
  {
    "id": "rodano",
    "nombre": "Ródano",
    "paises": [
      "Suiza",
      "Francia"
    ],
    "ciudades": [
      "Ginebra",
      "Lyon",
      "Aviñón"
    ],
    "desembocadura": "Mar Mediterráneo",
    "pistas": [
      "Atraviesa el lago Lemán.",
      "Pasa por Lyon.",
      "Desemboca en el Mediterráneo formando un delta."
    ]
  },
  {
    "id": "loira",
    "nombre": "Loira",
    "paises": [
      "Francia"
    ],
    "ciudades": [
      "Orleans",
      "Tours",
      "Nantes"
    ],
    "desembocadura": "Océano Atlántico",
    "pistas": [
      "Es el río más largo de Francia.",
      "Da nombre al famoso valle de los castillos.",
      "Desemboca en el Atlántico cerca de Nantes."
    ]
  },
  {
    "id": "elba",
    "nombre": "Elba",
    "paises": [
      "Chequia",
      "Alemania"
    ],
    "ciudades": [
      "Dresde",
      "Magdeburgo",
      "Hamburgo"
    ],
    "desembocadura": "Mar del Norte",
    "pistas": [
      "Nace en Chequia.",
      "Atraviesa Dresde y Hamburgo.",
      "Desemboca en el mar del Norte."
    ]
  },
  {
    "id": "oder",
    "nombre": "Óder",
    "paises": [
      "Chequia",
      "Polonia",
      "Alemania"
    ],
    "ciudades": [
      "Breslavia",
      "Szczecin"
    ],
    "desembocadura": "Mar Báltico",
    "pistas": [
      "Pasa por Breslavia.",
      "Forma parte de la frontera entre Polonia y Alemania.",
      "Llega al Báltico a través de la laguna de Szczecin."
    ]
  },
  {
    "id": "vistula",
    "nombre": "Vístula",
    "paises": [
      "Polonia"
    ],
    "ciudades": [
      "Cracovia",
      "Varsovia"
    ],
    "desembocadura": "Mar Báltico",
    "pistas": [
      "Es el río más largo de Polonia.",
      "Pasa por Cracovia y Varsovia.",
      "Desemboca en el mar Báltico."
    ]
  },
  {
    "id": "po",
    "nombre": "Po",
    "paises": [
      "Italia"
    ],
    "ciudades": [
      "Turín",
      "Piacenza",
      "Cremona"
    ],
    "desembocadura": "Mar Adriático",
    "pistas": [
      "Es el río más largo de Italia.",
      "Recorre la gran llanura del norte italiano.",
      "Desemboca en el Adriático."
    ]
  },
  {
    "id": "dnieper",
    "nombre": "Dniéper",
    "paises": [
      "Rusia",
      "Bielorrusia",
      "Ucrania"
    ],
    "ciudades": [
      "Kiev",
      "Dnipro",
      "Zaporiyia"
    ],
    "desembocadura": "Mar Negro",
    "pistas": [
      "Atraviesa Kiev.",
      "Recorre Rusia, Bielorrusia y Ucrania.",
      "Desemboca en el mar Negro."
    ]
  },
  {
    "id": "don",
    "nombre": "Don",
    "paises": [
      "Rusia"
    ],
    "ciudades": [
      "Vorónezh",
      "Rostov del Don"
    ],
    "desembocadura": "Mar de Azov",
    "pistas": [
      "Recorre el sur de Rusia.",
      "Da nombre a Rostov del Don.",
      "Desemboca en el mar de Azov."
    ]
  },
  {
    "id": "ural",
    "nombre": "Ural",
    "paises": [
      "Rusia",
      "Kazajistán"
    ],
    "ciudades": [
      "Oremburgo",
      "Oral",
      "Atyrau"
    ],
    "desembocadura": "Mar Caspio",
    "pistas": [
      "Recorre Rusia y Kazajistán.",
      "Se asocia tradicionalmente a la frontera entre Europa y Asia.",
      "Desemboca en el mar Caspio."
    ]
  },
  {
    "id": "tiber",
    "nombre": "Tíber",
    "paises": [
      "Italia"
    ],
    "ciudades": [
      "Roma"
    ],
    "desembocadura": "Mar Tirreno",
    "pistas": [
      "Atraviesa Roma.",
      "Está ligado a los orígenes históricos de la ciudad.",
      "Desemboca en el mar Tirreno."
    ]
  },
  {
    "id": "duero",
    "nombre": "Duero",
    "paises": [
      "España",
      "Portugal"
    ],
    "ciudades": [
      "Zamora",
      "Oporto"
    ],
    "desembocadura": "Océano Atlántico",
    "pistas": [
      "Recorre la Meseta Norte española.",
      "En Portugal es conocido como Douro.",
      "Desemboca en el Atlántico junto a Oporto."
    ]
  },
  {
    "id": "neva",
    "nombre": "Neva",
    "paises": [
      "Rusia"
    ],
    "ciudades": [
      "San Petersburgo"
    ],
    "desembocadura": "Golfo de Finlandia",
    "pistas": [
      "Atraviesa San Petersburgo.",
      "Conecta el lago Ládoga con el Báltico.",
      "Desemboca en el golfo de Finlandia."
    ]
  },
  {
    "id": "garona",
    "nombre": "Garona",
    "paises": [
      "España",
      "Francia"
    ],
    "ciudades": [
      "Toulouse",
      "Burdeos"
    ],
    "desembocadura": "Océano Atlántico",
    "pistas": [
      "Nace en los Pirineos españoles.",
      "Pasa por Toulouse y Burdeos.",
      "Junto al Dordoña forma el estuario de la Gironda."
    ]
  },
  {
    "id": "shannon",
    "nombre": "Shannon",
    "paises": [
      "Irlanda"
    ],
    "ciudades": [
      "Athlone",
      "Limerick"
    ],
    "desembocadura": "Océano Atlántico",
    "pistas": [
      "Es el río más largo de Irlanda.",
      "Pasa por Athlone y Limerick.",
      "Desemboca en el Atlántico por un gran estuario."
    ]
  },
  {
    "id": "mosa",
    "nombre": "Mosa",
    "paises": [
      "Francia",
      "Bélgica",
      "Países Bajos"
    ],
    "ciudades": [
      "Namur",
      "Lieja",
      "Maastricht"
    ],
    "desembocadura": "Mar del Norte",
    "pistas": [
      "Recorre Francia, Bélgica y Países Bajos.",
      "Pasa por Lieja y Maastricht.",
      "Alcanza el mar del Norte en el gran delta neerlandés."
    ]
  },
  {
    "id": "sava",
    "nombre": "Sava",
    "paises": [
      "Eslovenia",
      "Croacia",
      "Bosnia y Herzegovina",
      "Serbia"
    ],
    "ciudades": [
      "Zagreb",
      "Belgrado"
    ],
    "desembocadura": "Danubio",
    "pistas": [
      "Es uno de los grandes ríos de los Balcanes.",
      "Pasa por Zagreb.",
      "Se une al Danubio en Belgrado."
    ]
  },
  {
    "id": "guadalquivir",
    "nombre": "Guadalquivir",
    "paises": [
      "España"
    ],
    "ciudades": [
      "Córdoba",
      "Sevilla"
    ],
    "desembocadura": "Océano Atlántico",
    "pistas": [
      "Atraviesa Córdoba y Sevilla.",
      "Es uno de los grandes ríos de Andalucía.",
      "Desemboca en el Atlántico cerca de Sanlúcar de Barrameda."
    ]
  },
  {
    "id": "daugava",
    "nombre": "Daugava",
    "paises": [
      "Rusia",
      "Bielorrusia",
      "Letonia"
    ],
    "ciudades": [
      "Daugavpils",
      "Riga"
    ],
    "desembocadura": "Golfo de Riga",
    "pistas": [
      "También se conoce como Dvina Occidental.",
      "Atraviesa Riga.",
      "Desemboca en el golfo de Riga, en el Báltico."
    ]
  }
];

const RIOS_MODOS = {
  "rio-paises": {
    titulo: "Río → Países",
    icono: "🌊",
    descripcion: "Identifica países por los que pasa o que bordea cada gran río."
  },

  "pais-rio": {
    titulo: "País → Río",
    icono: "🌍",
    descripcion: "Relaciona cada país con uno de sus grandes ríos."
  },

  "ciudad-rio": {
    titulo: "Ciudad → Río",
    icono: "🏙️",
    descripcion: "Relaciona ciudades europeas con el río que las atraviesa."
  },

  "desembocadura": {
    titulo: "Desembocaduras",
    icono: "🌅",
    descripcion: "¿Dónde termina cada uno de los grandes ríos de Europa?"
  },

  "adivina": {
    titulo: "Adivina el río",
    icono: "🧩",
    descripcion: "Usa tres pistas para identificar el río correcto."
  }
};

const riosMenu =
  document.getElementById("rios-menu");

const riosConfig =
  document.getElementById("rios-config");

const riosJuego =
  document.getElementById("rios-juego");

const riosFin =
  document.getElementById("rios-fin");

const riosMapaProximamente =
  document.getElementById("rios-mapa-proximamente");

const riosConfigTitulo =
  document.getElementById("rios-config-titulo");

const riosConfigIcono =
  document.getElementById("rios-config-icono");

const riosConfigDescripcion =
  document.getElementById("rios-config-descripcion");

const riosTipoPartida =
  document.getElementById("rios-tipo-partida");

const riosNumeroPregunta =
  document.getElementById("rios-numero-pregunta");

const riosTemporizador =
  document.getElementById("rios-temporizador");

const riosAciertosTexto =
  document.getElementById("rios-aciertos");

const riosFallosTexto =
  document.getElementById("rios-fallos");

const riosPreguntaTexto =
  document.getElementById("rios-pregunta");

const riosPistas =
  document.getElementById("rios-pistas");

const riosRespuestas =
  document.getElementById("rios-respuestas");

const riosResultado =
  document.getElementById("rios-resultado");

const riosSiguiente =
  document.getElementById("rios-siguiente");

const riosResultadoExamen =
  document.getElementById("rios-resultado-examen");

const riosRevisionExamen =
  document.getElementById("rios-revision-examen");

const riosPausa =
  document.getElementById("rios-pausa");

const riosPausaTexto =
  document.getElementById("rios-pausa-texto");

const riosExamen10Desc =
  document.getElementById("rios-examen10-desc");

const riosExamen20Desc =
  document.getElementById("rios-examen20-desc");

const riosMapaSelector =
  document.getElementById("rios-mapa-selector");

const riosMapaJuego =
  document.getElementById("rios-mapa-juego");

const riosMapaTipo =
  document.getElementById("rios-mapa-tipo");

const riosMapaNumero =
  document.getElementById("rios-mapa-numero");

const riosMapaAciertosTexto =
  document.getElementById("rios-mapa-aciertos");

const riosMapaFallosTexto =
  document.getElementById("rios-mapa-fallos");

const riosMapaPregunta =
  document.getElementById("rios-mapa-pregunta");

const riosMapaAyuda =
  document.getElementById("rios-mapa-ayuda");

const riosMapaLienzo =
  document.getElementById("rios-mapa-lienzo");

const riosMapaRespuestas =
  document.getElementById("rios-mapa-respuestas");

const riosMapaFeedback =
  document.getElementById("rios-mapa-feedback");

const riosMapaSiguiente =
  document.getElementById("rios-mapa-siguiente");

const RIOS_TIEMPO_POR_PREGUNTA = 10;
const RIOS_TIEMPO_ADIVINA = 15;

let riosModoActual = null;
let riosTotalExamen = null;
let riosCantidadExamenConfigurada = null;

let riosPlanActual = [];
let riosIndiceActual = 0;
let riosPreguntaActual = null;

let riosAciertos = 0;
let riosFallos = 0;
let riosRespondida = false;

let riosResultados = [];
let riosColaEntrenamiento = [];
let riosUltimaSemillaEntrenamiento = null;
let riosContestadasEntrenamiento = 0;
let riosPausaPendiente = false;

let riosTemporizadorId = null;
let riosAvanceAutomaticoId = null;
let riosTiempoRestante = RIOS_TIEMPO_POR_PREGUNTA;

let riosUltimoExamen = null;
let riosEsRepasoFallos = false;


// ==========================================
// ESTADO · MAPA DE RÍOS
// ==========================================

let riosMapaModoActual = null;
let riosMapaCola = [];
let riosMapaActual = null;
let riosMapaAciertos = 0;
let riosMapaFallos = 0;
let riosMapaNumeroActual = 0;
let riosMapaRespondida = false;

const RIOS_MAPA_VIEWBOX_INICIAL = {
  x: 0,
  y: 0,
  ancho: 1100,
  alto: 650
};

let riosMapaViewBox = {
  ...RIOS_MAPA_VIEWBOX_INICIAL
};

let riosMapaPunteros =
  new Map();

let riosMapaArrastre = null;
let riosMapaDistanciaPinza = null;
let riosMapaIgnorarClick = false;


// ==========================================
// UTILIDADES
// ==========================================

function barajarRios(lista) {

  const copia = [...lista];

  for (let i = copia.length - 1; i > 0; i--) {

    const j =
      Math.floor(Math.random() * (i + 1));

    [copia[i], copia[j]] =
      [copia[j], copia[i]];

  }

  return copia;
}


function escaparRios(texto) {

  return String(texto)
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#039;");
}


function banderaPaisRios(pais) {

  if (typeof GEO_DATA === "undefined") {
    return "";
  }

  const entrada =
    GEO_DATA.find(item => item.pais === pais);

  if (
    !entrada ||
    !entrada.iso2 ||
    entrada.iso2.length !== 2
  ) {
    return "";
  }

  const puntos =
    [...entrada.iso2.toUpperCase()]
      .map(
        letra =>
          127397 + letra.charCodeAt(0)
      );

  return String.fromCodePoint(...puntos);
}


function nombrePaisConBanderaRios(pais) {

  const bandera =
    banderaPaisRios(pais);

  return bandera
    ? `${bandera} ${pais}`
    : pais;
}


function rioPorNombreRios(nombre) {

  return RIOS_EUROPA.find(
    rio => rio.nombre === nombre
  );
}


function paisesUnicosRios() {

  return [
    ...new Set(
      RIOS_EUROPA.flatMap(
        rio => rio.paises
      )
    )
  ];
}


function desembocadurasUnicasRios() {

  return [
    ...new Set(
      RIOS_EUROPA.map(
        rio => rio.desembocadura
      )
    )
  ];
}


// ==========================================
// PANTALLAS
// ==========================================

function cancelarTemporizadoresRios() {

  if (riosTemporizadorId !== null) {
    clearInterval(riosTemporizadorId);
    riosTemporizadorId = null;
  }

  if (riosAvanceAutomaticoId !== null) {
    clearTimeout(riosAvanceAutomaticoId);
    riosAvanceAutomaticoId = null;
  }

  if (riosTemporizador) {
    riosTemporizador.classList.add("oculto");
    riosTemporizador.classList.remove("urgente");
  }
}


function ocultarPantallasRios() {

  cancelarTemporizadoresRios();

  [
    riosMenu,
    riosConfig,
    riosJuego,
    riosFin,
    riosMapaProximamente
  ].forEach(
    pantalla => {
      if (pantalla) {
        pantalla.classList.add("oculto");
      }
    }
  );

  if (riosPausa) {
    riosPausa.classList.add("oculto");
  }
}


function abrirRiosMenu() {

  ocultarTodasLasPantallas();

  riosMenu.classList.remove("oculto");
}


function abrirConfigRios(modo) {

  riosModoActual = modo;

  const info =
    RIOS_MODOS[modo];

  ocultarTodasLasPantallas();

  riosConfigTitulo.textContent =
    info.titulo;

  riosConfigIcono.textContent =
    info.icono;

  riosConfigDescripcion.textContent =
    info.descripcion;

  const segundos =
    modo === "adivina"
      ? RIOS_TIEMPO_ADIVINA
      : RIOS_TIEMPO_POR_PREGUNTA;

  if (riosExamen10Desc) {
    riosExamen10Desc.textContent =
      `⏱ ${segundos} s por pregunta · Sin preguntas repetidas.`;
  }

  if (riosExamen20Desc) {
    riosExamen20Desc.textContent =
      `⏱ ${segundos} s por pregunta · Revisión completa al terminar.`;
  }

  riosConfig.classList.remove("oculto");
}


function abrirMapaRiosProximamente() {

  ocultarTodasLasPantallas();

  riosMapaProximamente.classList.remove(
    "oculto"
  );

  mostrarSelectorMapaRios();
}


// ==========================================
// BANCO DE PREGUNTAS
// ==========================================

function crearSemillasRios(modo) {

  if (modo === "rio-paises") {

    return RIOS_EUROPA.map(
      rio => ({
        id: `rio-pais:${rio.id}`,
        rio
      })
    );
  }


  if (modo === "pais-rio") {

    const mapa =
      new Map();

    RIOS_EUROPA.forEach(rio => {

      rio.paises.forEach(pais => {

        if (!mapa.has(pais)) {
          mapa.set(pais, []);
        }

        mapa.get(pais).push(rio);

      });

    });

    return [
      ...mapa.entries()
    ].map(
      ([pais, rios]) => ({
        id: `pais-rio:${pais}`,
        pais,
        rios
      })
    );
  }


  if (modo === "ciudad-rio") {

    const mapa =
      new Map();

    RIOS_EUROPA.forEach(rio => {

      rio.ciudades.forEach(ciudad => {

        if (!mapa.has(ciudad)) {
          mapa.set(ciudad, rio);
        }

      });

    });

    return [
      ...mapa.entries()
    ].map(
      ([ciudad, rio]) => ({
        id: `ciudad-rio:${ciudad}`,
        ciudad,
        rio
      })
    );
  }


  if (modo === "desembocadura") {

    return RIOS_EUROPA.map(
      rio => ({
        id: `desembocadura:${rio.id}`,
        rio
      })
    );
  }


  return RIOS_EUROPA.map(
    rio => ({
      id: `adivina:${rio.id}`,
      rio
    })
  );
}


function crearOpcionesRios(
  correcta,
  candidatas
) {

  const distintas =
    [
      ...new Set(candidatas)
    ].filter(
      opcion => opcion !== correcta
    );

  const distractores =
    barajarRios(distintas)
      .slice(0, 3);

  return barajarRios([
    correcta,
    ...distractores
  ]);
}


function crearPreguntaRios(
  semilla,
  modo
) {

  if (modo === "rio-paises") {

    const rio =
      semilla.rio;

    const correcta =
      barajarRios(rio.paises)[0];

    const candidatas =
      paisesUnicosRios().filter(
        pais =>
          !rio.paises.includes(pais)
      );

    return {
      id: semilla.id,
      modo,
      prompt:
        `¿Cuál de estos países recorre o bordea el ${rio.nombre}?`,
      correcta,
      opciones:
        crearOpcionesRios(
          correcta,
          candidatas
        ),
      rio,
      pistas: []
    };
  }


  if (modo === "pais-rio") {

    const correctaRio =
      barajarRios(semilla.rios)[0];

    const candidatas =
      RIOS_EUROPA.filter(
        rio =>
          !rio.paises.includes(
            semilla.pais
          )
      ).map(
        rio => rio.nombre
      );

    return {
      id: semilla.id,
      modo,
      prompt:
        `¿Cuál de estos ríos recorre o bordea ${semilla.pais}?`,
      correcta:
        correctaRio.nombre,
      opciones:
        crearOpcionesRios(
          correctaRio.nombre,
          candidatas
        ),
      rio: correctaRio,
      pais: semilla.pais,
      pistas: []
    };
  }


  if (modo === "ciudad-rio") {

    const rio =
      semilla.rio;

    const candidatas =
      RIOS_EUROPA
        .filter(
          item =>
            item.id !== rio.id
        )
        .map(
          item => item.nombre
        );

    return {
      id: semilla.id,
      modo,
      prompt:
        `¿Qué río pasa por ${semilla.ciudad}?`,
      correcta: rio.nombre,
      opciones:
        crearOpcionesRios(
          rio.nombre,
          candidatas
        ),
      rio,
      ciudad: semilla.ciudad,
      pistas: []
    };
  }


  if (modo === "desembocadura") {

    const rio =
      semilla.rio;

    const correcta =
      rio.desembocadura;

    return {
      id: semilla.id,
      modo,
      prompt:
        `¿Dónde desemboca el ${rio.nombre}?`,
      correcta,
      opciones:
        crearOpcionesRios(
          correcta,
          desembocadurasUnicasRios()
        ),
      rio,
      pistas: []
    };
  }


  const rio =
    semilla.rio;

  const candidatas =
    RIOS_EUROPA
      .filter(
        item =>
          item.id !== rio.id
      )
      .map(
        item => item.nombre
      );

  return {
    id: semilla.id,
    modo,
    prompt:
      "¿Qué río encaja con estas tres pistas?",
    correcta: rio.nombre,
    opciones:
      crearOpcionesRios(
        rio.nombre,
        candidatas
      ),
    rio,
    pistas: [...rio.pistas]
  };
}


// ==========================================
// CREAR PARTIDAS
// ==========================================

function crearPlanExamenRios(
  cantidad,
  evitarIds = []
) {

  const semillas =
    crearSemillasRios(
      riosModoActual
    );

  const evitar =
    new Set(evitarIds);

  const nuevas =
    semillas.filter(
      semilla =>
        !evitar.has(semilla.id)
    );

  const antiguas =
    semillas.filter(
      semilla =>
        evitar.has(semilla.id)
    );

  const seleccion =
    [
      ...barajarRios(nuevas),
      ...barajarRios(antiguas)
    ].slice(
      0,
      Math.min(
        cantidad,
        semillas.length
      )
    );

  return seleccion.map(
    semilla =>
      crearPreguntaRios(
        semilla,
        riosModoActual
      )
  );
}


function prepararColaEntrenamientoRios() {

  let semillas =
    barajarRios(
      crearSemillasRios(
        riosModoActual
      )
    );

  if (
    riosUltimaSemillaEntrenamiento &&
    semillas.length > 1 &&
    semillas[0].id ===
      riosUltimaSemillaEntrenamiento
  ) {

    [
      semillas[0],
      semillas[1]
    ] = [
      semillas[1],
      semillas[0]
    ];
  }

  riosColaEntrenamiento =
    semillas;
}


function siguientePreguntaEntrenamientoRios() {

  if (
    riosColaEntrenamiento.length === 0
  ) {
    prepararColaEntrenamientoRios();
  }

  const semilla =
    riosColaEntrenamiento.shift();

  riosUltimaSemillaEntrenamiento =
    semilla.id;

  return crearPreguntaRios(
    semilla,
    riosModoActual
  );
}


function iniciarPartidaRios(
  tipo,
  cantidad = null,
  planExacto = null
) {

  cancelarTemporizadoresRios();

  riosAciertos = 0;
  riosFallos = 0;
  riosResultados = [];
  riosRespondida = false;
  riosContestadasEntrenamiento = 0;
  riosPausaPendiente = false;
  riosIndiceActual = 0;
  riosPreguntaActual = null;
  riosEsRepasoFallos = false;

  riosAciertosTexto.textContent = "0";
  riosFallosTexto.textContent = "0";

  if (tipo === "entrenamiento") {

    riosTotalExamen = null;
    riosCantidadExamenConfigurada = null;
    riosPlanActual = [];
    riosColaEntrenamiento = [];
    riosUltimaSemillaEntrenamiento = null;

  } else {

    riosTotalExamen =
      planExacto
        ? planExacto.length
        : cantidad;

    if (!planExacto) {
      riosCantidadExamenConfigurada =
        cantidad;
    }

    riosPlanActual =
      planExacto
        ? planExacto.map(
            pregunta => ({
              ...pregunta,
              opciones: [
                ...pregunta.opciones
              ],
              pistas: [
                ...pregunta.pistas
              ]
            })
          )
        : crearPlanExamenRios(
            cantidad
          );
  }

  ocultarTodasLasPantallas();

  riosJuego.classList.remove("oculto");

  mostrarPreguntaActualRios();
}


// ==========================================
// MOSTRAR PREGUNTA
// ==========================================

function mostrarPreguntaActualRios() {

  cancelarTemporizadoresRios();

  riosRespondida = false;

  if (riosTotalExamen === null) {

    riosPreguntaActual =
      siguientePreguntaEntrenamientoRios();

    riosNumeroPregunta.textContent =
      `Pregunta ${riosContestadasEntrenamiento + 1}`;

    riosTipoPartida.textContent =
      `${RIOS_MODOS[riosModoActual].titulo} · Entrenamiento`;

  } else {

    riosPreguntaActual =
      riosPlanActual[
        riosIndiceActual
      ];

    if (!riosPreguntaActual) {
      finalizarExamenRios();
      return;
    }

    riosNumeroPregunta.textContent =
      `Pregunta ${riosIndiceActual + 1} de ${riosPlanActual.length}`;

    riosTipoPartida.textContent =
      `${RIOS_MODOS[riosModoActual].titulo} · Examen`;
  }

  riosPreguntaTexto.textContent =
    riosPreguntaActual.prompt;

  riosResultado.innerHTML = "";
  riosResultado.classList.add("oculto");

  riosSiguiente.classList.add("oculto");

  if (
    riosPreguntaActual.pistas.length > 0
  ) {

    riosPistas.innerHTML =
      riosPreguntaActual.pistas
        .map(
          (pista, indice) => `
            <div class="rio-pista">
              <span>${indice + 1}</span>
              ${escaparRios(pista)}
            </div>
          `
        )
        .join("");

    riosPistas.classList.remove(
      "oculto"
    );

  } else {

    riosPistas.innerHTML = "";
    riosPistas.classList.add(
      "oculto"
    );
  }

  riosRespuestas.innerHTML = "";

  riosPreguntaActual.opciones.forEach(
    opcion => {

      const boton =
        document.createElement(
          "button"
        );

      boton.textContent = opcion;

      boton.addEventListener(
        "click",
        () => {
          responderRios(
            opcion,
            boton
          );
        }
      );

      riosRespuestas.appendChild(
        boton
      );

    }
  );

  iniciarTemporizadorRios();
}


// ==========================================
// TEMPORIZADOR
// ==========================================

function actualizarTemporizadorRios() {

  riosTemporizador.textContent =
    `⏱ ${riosTiempoRestante} s`;

  riosTemporizador.classList.toggle(
    "urgente",
    riosTiempoRestante <= 3
  );
}


function iniciarTemporizadorRios() {

  if (riosTotalExamen === null) {

    riosTemporizador.classList.add(
      "oculto"
    );

    return;
  }

  riosTiempoRestante =
    riosModoActual === "adivina"
      ? RIOS_TIEMPO_ADIVINA
      : RIOS_TIEMPO_POR_PREGUNTA;

  riosTemporizador.classList.remove(
    "oculto"
  );

  actualizarTemporizadorRios();

  riosTemporizadorId =
    setInterval(
      () => {

        riosTiempoRestante--;

        actualizarTemporizadorRios();

        if (
          riosTiempoRestante <= 0
        ) {

          clearInterval(
            riosTemporizadorId
          );

          riosTemporizadorId = null;

          tiempoAgotadoRios();
        }

      },
      1000
    );
}


function tiempoAgotadoRios() {

  if (riosRespondida) return;

  riosRespondida = true;
  riosFallos++;

  riosFallosTexto.textContent =
    String(riosFallos);

  bloquearRespuestasRios(
    riosPreguntaActual.correcta,
    null
  );

  riosResultados.push({
    pregunta:
      clonarPreguntaRios(
        riosPreguntaActual
      ),
    correcta:
      riosPreguntaActual.correcta,
    respuesta: null,
    acierto: false,
    tiempoAgotado: true
  });

  mostrarExplicacionRios(
    false,
    null,
    true
  );

  riosSiguiente.classList.remove(
    "oculto"
  );

  riosSiguiente.textContent =
    riosIndiceActual ===
      riosPlanActual.length - 1
        ? "Ver resultado →"
        : "Siguiente pregunta →";

  riosAvanceAutomaticoId =
    setTimeout(
      () => {
        riosAvanceAutomaticoId = null;
        avanzarRios();
      },
      1500
    );
}


// ==========================================
// RESPONDER
// ==========================================

function bloquearRespuestasRios(
  correcta,
  elegida
) {

  const botones =
    riosRespuestas
      .querySelectorAll("button");

  botones.forEach(
    boton => {

      boton.disabled = true;

      if (
        boton.textContent === correcta
      ) {
        boton.classList.add(
          "correcta"
        );
      }

      if (
        elegida !== null &&
        boton.textContent === elegida &&
        elegida !== correcta
      ) {
        boton.classList.add(
          "incorrecta"
        );
      }

    }
  );
}


function responderRios(
  opcion,
  boton
) {

  if (riosRespondida) return;

  riosRespondida = true;

  if (riosTemporizadorId !== null) {
    clearInterval(
      riosTemporizadorId
    );
    riosTemporizadorId = null;
  }

  const acierto =
    opcion ===
    riosPreguntaActual.correcta;

  if (acierto) {
    riosAciertos++;
  } else {
    riosFallos++;
  }

  riosAciertosTexto.textContent =
    String(riosAciertos);

  riosFallosTexto.textContent =
    String(riosFallos);

  bloquearRespuestasRios(
    riosPreguntaActual.correcta,
    opcion
  );

  if (riosTotalExamen !== null) {

    riosResultados.push({
      pregunta:
        clonarPreguntaRios(
          riosPreguntaActual
        ),
      correcta:
        riosPreguntaActual.correcta,
      respuesta: opcion,
      acierto,
      tiempoAgotado: false
    });

  } else {

    riosContestadasEntrenamiento++;

    if (
      riosContestadasEntrenamiento > 0 &&
      riosContestadasEntrenamiento % 15 === 0
    ) {
      riosPausaPendiente = true;
    }
  }

  mostrarExplicacionRios(
    acierto,
    opcion,
    false
  );

  riosSiguiente.classList.remove(
    "oculto"
  );

  if (riosTotalExamen === null) {

    riosSiguiente.textContent =
      riosPausaPendiente
        ? "Continuar práctica →"
        : "Siguiente pregunta →";

  } else {

    riosSiguiente.textContent =
      riosIndiceActual ===
        riosPlanActual.length - 1
          ? "Ver resultado →"
          : "Siguiente pregunta →";
  }
}


function clonarPreguntaRios(
  pregunta
) {

  return {
    ...pregunta,
    opciones: [
      ...pregunta.opciones
    ],
    pistas: [
      ...pregunta.pistas
    ]
  };
}


// ==========================================
// EXPLICACIÓN / MINI FICHA
// ==========================================

function fichaRioHTML(rio) {

  const paises =
    rio.paises
      .map(
        pais =>
          nombrePaisConBanderaRios(
            pais
          )
      )
      .join(" · ");

  const ciudades =
    rio.ciudades
      .slice(0, 5)
      .join(" · ");

  return `
    <div class="rio-ficha">
      <div class="rio-ficha-titulo">
        🌊 ${escaparRios(rio.nombre)}
      </div>

      <div>
        <strong>Países:</strong>
        ${escaparRios(paises)}
      </div>

      <div>
        <strong>Ciudades:</strong>
        ${escaparRios(ciudades)}
      </div>

      <div>
        <strong>Desembocadura:</strong>
        ${escaparRios(rio.desembocadura)}
      </div>
    </div>
  `;
}


function mostrarExplicacionRios(
  acierto,
  respuesta,
  tiempoAgotado
) {

  const encabezado =
    tiempoAgotado
      ? "⏱ Tiempo agotado."
      : acierto
        ? "✅ Correcto."
        : `❌ Incorrecto. La respuesta correcta es ${escaparRios(riosPreguntaActual.correcta)}.`;

  riosResultado.innerHTML = `
    <div class="rio-feedback-titulo">
      ${encabezado}
    </div>

    ${fichaRioHTML(
      riosPreguntaActual.rio
    )}
  `;

  riosResultado.classList.remove(
    "oculto"
  );
}


// ==========================================
// AVANZAR / PAUSA
// ==========================================

function avanzarRios() {

  if (riosAvanceAutomaticoId !== null) {
    clearTimeout(
      riosAvanceAutomaticoId
    );
    riosAvanceAutomaticoId = null;
  }

  if (riosTotalExamen === null) {

    if (riosPausaPendiente) {
      mostrarPausaRios();
      return;
    }

    mostrarPreguntaActualRios();
    return;
  }

  if (
    riosIndiceActual >=
      riosPlanActual.length - 1
  ) {
    finalizarExamenRios();
    return;
  }

  riosIndiceActual++;

  mostrarPreguntaActualRios();
}


function mostrarPausaRios() {

  riosPausaTexto.textContent =
    `Llevas ${riosContestadasEntrenamiento} preguntas: ${riosAciertos} correctas y ${riosFallos} incorrectas. ¿Quieres seguir practicando?`;

  riosPausa.classList.remove(
    "oculto"
  );
}


// ==========================================
// FINAL DEL EXAMEN
// ==========================================

function crearRevisionRios() {

  return `
    <div class="revision-examen">
      <h3>📚 Revisión del examen</h3>

      <p class="revision-intro">
        Repasa las respuestas correctas y fíjate especialmente en las que has fallado.
      </p>

      <div class="revision-lista">

        ${riosResultados.map(
          (resultado, indice) => {

            const clase =
              resultado.acierto
                ? "acierto"
                : "fallo";

            const estado =
              resultado.acierto
                ? "✅ Correcta"
                : "❌ Incorrecta";

            const respuestaUsuario =
              resultado.respuesta === null
                ? "Sin respuesta"
                : resultado.respuesta;

            return `
              <div class="revision-item ${clase}">

                <div class="revision-cabecera">
                  <span>Pregunta ${indice + 1}</span>
                  <span>${estado}</span>
                </div>

                <div class="rio-revision-pregunta">
                  ${escaparRios(resultado.pregunta.prompt)}
                </div>

                <div class="revision-correcta">
                  <strong>
                    ${escaparRios(resultado.correcta)}
                  </strong>
                </div>

                ${
                  resultado.acierto
                    ? ""
                    : `
                      <div class="revision-tu-respuesta">
                        Tu respuesta:
                        <strong>${escaparRios(respuestaUsuario)}</strong>
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


function finalizarExamenRios() {

  cancelarTemporizadoresRios();

  ocultarTodasLasPantallas();

  riosFin.classList.remove("oculto");

  const total =
    riosResultados.length;

  const porcentaje =
    total > 0
      ? Math.round(
          riosAciertos /
          total *
          100
        )
      : 0;

  riosResultadoExamen.innerHTML = `
    <div class="nota-grande">
      ${riosAciertos} / ${total}
    </div>

    <div class="detalle-examen">
      ${porcentaje}% de aciertos
      <br>
      ${RIOS_MODOS[riosModoActual].titulo}
    </div>
  `;

  riosRevisionExamen.innerHTML =
    crearRevisionRios();

  const falladas =
    riosResultados.filter(
      resultado =>
        !resultado.acierto
    );

  const btnRepasar =
    document.getElementById(
      "rios-repasar-fallos"
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

  if (!riosEsRepasoFallos) {

    riosUltimoExamen = {
      modo: riosModoActual,
      cantidad:
        riosPlanActual.length,
      plan:
        riosPlanActual.map(
          clonarPreguntaRios
        ),
      resultados:
        riosResultados.map(
          item => ({
            ...item,
            pregunta:
              clonarPreguntaRios(
                item.pregunta
              )
          })
        )
    };
  }
}


// ==========================================
// NUEVO / REPETIR / FALLOS
// ==========================================

function repetirUltimoExamenRios() {

  if (!riosUltimoExamen) return;

  riosModoActual =
    riosUltimoExamen.modo;

  iniciarPartidaRios(
    "examen",
    riosUltimoExamen.cantidad,
    riosUltimoExamen.plan
  );
}


function nuevoExamenRios() {

  const cantidad =
    riosCantidadExamenConfigurada ||
    (
      riosUltimoExamen
        ? riosUltimoExamen.cantidad
        : 10
    );

  const evitar =
    riosUltimoExamen
      ? riosUltimoExamen.plan.map(
          pregunta =>
            pregunta.id
        )
      : [];

  riosTotalExamen = cantidad;
  riosPlanActual =
    crearPlanExamenRios(
      cantidad,
      evitar
    );

  iniciarPartidaRios(
    "examen",
    cantidad,
    riosPlanActual
  );
}


function repasarFallosRios() {

  const falladas =
    riosResultados
      .filter(
        resultado =>
          !resultado.acierto
      )
      .map(
        resultado =>
          clonarPreguntaRios(
            resultado.pregunta
          )
      );

  if (falladas.length === 0) {
    return;
  }

  riosEsRepasoFallos = true;

  iniciarPartidaRios(
    "examen",
    falladas.length,
    falladas
  );

  riosEsRepasoFallos = true;
}



// ==========================================
// MAPA INTERACTIVO DE RÍOS
// ==========================================

function mostrarSelectorMapaRios() {

  riosMapaModoActual = null;

  if (riosMapaSelector) {
    riosMapaSelector.classList.remove(
      "oculto"
    );
  }

  if (riosMapaJuego) {
    riosMapaJuego.classList.add(
      "oculto"
    );
  }

  if (riosMapaLienzo) {
    riosMapaLienzo.innerHTML = "";
  }

  if (riosMapaRespuestas) {
    riosMapaRespuestas.innerHTML = "";
    riosMapaRespuestas.classList.add(
      "oculto"
    );
  }

  if (riosMapaFeedback) {
    riosMapaFeedback.innerHTML = "";
    riosMapaFeedback.classList.add(
      "oculto"
    );
  }

  if (riosMapaSiguiente) {
    riosMapaSiguiente.classList.add(
      "oculto"
    );
  }
}


function obtenerRiosMapaDisponibles() {

  if (
    typeof MAPA_RIOS_EUROPA === "undefined"
  ) {
    return [];
  }

  return MAPA_RIOS_EUROPA.orden
    .map(
      id => rioPorNombreRios(
        MAPA_RIOS_EUROPA.rios[id].nombre
      )
    )
    .filter(Boolean);
}


function prepararColaMapaRios() {

  riosMapaCola =
    barajarRios(
      obtenerRiosMapaDisponibles()
    );
}


function siguienteRioMapa() {

  if (
    riosMapaCola.length === 0
  ) {
    prepararColaMapaRios();
  }

  return riosMapaCola.shift();
}


function iniciarMapaRios(modo) {

  riosMapaModoActual = modo;

  riosMapaAciertos = 0;
  riosMapaFallos = 0;
  riosMapaNumeroActual = 0;
  riosMapaRespondida = false;
  riosMapaCola = [];

  riosMapaAciertosTexto.textContent =
    "0";

  riosMapaFallosTexto.textContent =
    "0";

  riosMapaSelector.classList.add(
    "oculto"
  );

  riosMapaJuego.classList.remove(
    "oculto"
  );

  mostrarPreguntaMapaRios();
}


function mostrarPreguntaMapaRios() {

  riosMapaRespondida = false;
  riosMapaNumeroActual++;

  riosMapaActual =
    siguienteRioMapa();

  if (!riosMapaActual) {
    return;
  }

  riosMapaNumero.textContent =
    `Pregunta ${riosMapaNumeroActual}`;

  riosMapaFeedback.innerHTML = "";
  riosMapaFeedback.classList.add(
    "oculto"
  );

  riosMapaSiguiente.classList.add(
    "oculto"
  );

  riosMapaRespuestas.innerHTML = "";
  riosMapaRespuestas.classList.add(
    "oculto"
  );

  if (
    riosMapaModoActual === "localiza"
  ) {

    riosMapaTipo.textContent =
      "🎯 Localiza el río";

    riosMapaPregunta.textContent =
      `Localiza el ${riosMapaActual.nombre}`;

    riosMapaAyuda.textContent =
      "Toca directamente el trazado del río en el mapa.";

  } else {

    riosMapaTipo.textContent =
      "🔎 Identifica el río";

    riosMapaPregunta.textContent =
      "¿Qué río está destacado?";

    riosMapaAyuda.textContent =
      "Observa su recorrido y elige la respuesta correcta.";
  }

  crearMapaVisualRios();

  if (
    riosMapaModoActual === "identifica"
  ) {
    crearOpcionesIdentificaMapaRios();
  }
}


function crearMapaVisualRios() {

  const paises =
    MAPA_RIOS_EUROPA.paises
      .map(
        d => `
          <path
            class="rios-mapa-pais"
            d="${d}"
            fill-rule="evenodd"
          ></path>
        `
      )
      .join("");


  const rios =
    MAPA_RIOS_EUROPA.orden
      .map(
        id => {

          const info =
            MAPA_RIOS_EUROPA.rios[id];

          const esObjetivo =
            riosMapaActual &&
            riosMapaActual.id === id;

          const claseObjetivo =
            riosMapaModoActual === "identifica" &&
            esObjetivo
              ? "rios-mapa-rio-destacado"
              : "";

          const claseSecundaria =
            riosMapaModoActual === "identifica" &&
            !esObjetivo
              ? "rios-mapa-rio-secundario"
              : "";

          return `
            <g
              class="rios-mapa-grupo ${claseObjetivo} ${claseSecundaria}"
              data-rio-id="${id}"
            >
              <path
                class="rios-mapa-rio"
                d="${info.d}"
              ></path>

              <path
                class="rios-mapa-rio-hit"
                d="${info.d}"
              ></path>
            </g>
          `;
        }
      )
      .join("");


  riosMapaLienzo.innerHTML = `
    <svg
      id="rios-mapa-svg"
      viewBox="${MAPA_RIOS_EUROPA.viewBox}"
      role="img"
      aria-label="Mapa interactivo de los principales ríos de Europa"
    >

      <rect
        class="rios-mapa-mar"
        x="0"
        y="0"
        width="1100"
        height="650"
      ></rect>

      <g class="rios-mapa-paises">
        ${paises}
      </g>

      <g class="rios-mapa-capa-rios">
        ${rios}
      </g>

    </svg>

    <div class="rios-mapa-controles">
      <button
        type="button"
        id="rios-mapa-zoom-mas"
        class="rios-mapa-control"
        aria-label="Ampliar mapa"
      >+</button>

      <button
        type="button"
        id="rios-mapa-zoom-menos"
        class="rios-mapa-control"
        aria-label="Reducir mapa"
      >−</button>

      <button
        type="button"
        id="rios-mapa-zoom-reset"
        class="rios-mapa-control rios-mapa-control-reset"
        aria-label="Restablecer vista"
      >↺</button>
    </div>

    <div class="rios-mapa-leyenda">
      Natural Earth · trazados fluviales didácticos simplificados
    </div>
  `;

  reiniciarVistaMapaRios();
  activarZoomMapaRios();
  activarGestosMapaRios();

  if (
    riosMapaModoActual === "localiza"
  ) {

    riosMapaLienzo
      .querySelectorAll(
        ".rios-mapa-grupo"
      )
      .forEach(
        grupo => {

          grupo.addEventListener(
            "click",
            evento => {

              evento.stopPropagation();

              if (riosMapaIgnorarClick) {
                riosMapaIgnorarClick = false;
                return;
              }

              responderLocalizaMapaRios(
                grupo.dataset.rioId
              );
            }
          );
        }
      );
  }
}


function crearOpcionesIdentificaMapaRios() {

  const candidatas =
    obtenerRiosMapaDisponibles()
      .map(
        rio => rio.nombre
      );

  const opciones =
    crearOpcionesRios(
      riosMapaActual.nombre,
      candidatas
    );

  riosMapaRespuestas.classList.remove(
    "oculto"
  );

  opciones.forEach(
    nombre => {

      const boton =
        document.createElement(
          "button"
        );

      boton.textContent =
        nombre;

      boton.addEventListener(
        "click",
        () => {
          responderIdentificaMapaRios(
            nombre,
            boton
          );
        }
      );

      riosMapaRespuestas.appendChild(
        boton
      );
    }
  );
}


function responderLocalizaMapaRios(
  idSeleccionado
) {

  if (riosMapaRespondida) return;

  riosMapaRespondida = true;

  const correcto =
    idSeleccionado ===
    riosMapaActual.id;

  if (correcto) {
    riosMapaAciertos++;
  } else {
    riosMapaFallos++;
  }

  actualizarMarcadorMapaRios();

  marcarRioMapa(
    idSeleccionado,
    correcto
      ? "rios-mapa-correcto"
      : "rios-mapa-incorrecto"
  );

  marcarRioMapa(
    riosMapaActual.id,
    "rios-mapa-correcto"
  );

  bloquearMapaRios();

  mostrarFeedbackMapaRios(
    correcto,
    idSeleccionado
  );
}


function responderIdentificaMapaRios(
  nombre,
  botonSeleccionado
) {

  if (riosMapaRespondida) return;

  riosMapaRespondida = true;

  const correcto =
    nombre ===
    riosMapaActual.nombre;

  if (correcto) {
    riosMapaAciertos++;
  } else {
    riosMapaFallos++;
  }

  actualizarMarcadorMapaRios();

  riosMapaRespuestas
    .querySelectorAll("button")
    .forEach(
      boton => {

        boton.disabled = true;

        if (
          boton.textContent ===
          riosMapaActual.nombre
        ) {
          boton.classList.add(
            "correcta"
          );
        }
      }
    );

  if (
    !correcto &&
    botonSeleccionado
  ) {
    botonSeleccionado.classList.add(
      "incorrecta"
    );
  }

  marcarRioMapa(
    riosMapaActual.id,
    "rios-mapa-correcto"
  );

  mostrarFeedbackMapaRios(
    correcto,
    null
  );
}


function marcarRioMapa(
  id,
  clase
) {

  const grupo =
    riosMapaLienzo.querySelector(
      `.rios-mapa-grupo[data-rio-id="${id}"]`
    );

  if (grupo) {
    grupo.classList.add(
      clase
    );
  }
}


function bloquearMapaRios() {

  riosMapaLienzo
    .querySelectorAll(
      ".rios-mapa-grupo"
    )
    .forEach(
      grupo => {
        grupo.classList.add(
          "rios-mapa-bloqueado"
        );
      }
    );
}


function actualizarMarcadorMapaRios() {

  riosMapaAciertosTexto.textContent =
    String(riosMapaAciertos);

  riosMapaFallosTexto.textContent =
    String(riosMapaFallos);
}


function mostrarFeedbackMapaRios(
  correcto,
  idSeleccionado
) {

  const paises =
    riosMapaActual.paises
      .slice(0, 5)
      .map(
        nombrePaisConBanderaRios
      )
      .join(" · ");

  const masPaises =
    riosMapaActual.paises.length > 5
      ? ` · +${riosMapaActual.paises.length - 5}`
      : "";

  let seleccion = "";

  if (
    !correcto &&
    idSeleccionado
  ) {

    const seleccionado =
      RIOS_EUROPA.find(
        rio =>
          rio.id === idSeleccionado
      );

    if (seleccionado) {
      seleccion = `
        <span class="rios-mapa-tu-respuesta">
          Has tocado:
          <strong>${escaparRios(seleccionado.nombre)}</strong>
        </span>
      `;
    }
  }

  riosMapaFeedback.innerHTML = `
    <div class="rios-mapa-feedback-titulo">
      ${correcto ? "✅ Correcto." : "❌ Incorrecto."}
    </div>

    <div class="rios-mapa-ficha">
      <strong>
        🌊 ${escaparRios(riosMapaActual.nombre)}
      </strong>

      <span>
        ${paises}${masPaises}
      </span>

      <span>
        Desembocadura:
        ${escaparRios(riosMapaActual.desembocadura)}
      </span>

      ${seleccion}
    </div>
  `;

  riosMapaFeedback.classList.remove(
    "oculto"
  );

  riosMapaSiguiente.classList.remove(
    "oculto"
  );
}


function reiniciarVistaMapaRios() {

  riosMapaViewBox = {
    ...RIOS_MAPA_VIEWBOX_INICIAL
  };

  riosMapaPunteros.clear();
  riosMapaArrastre = null;
  riosMapaDistanciaPinza = null;
  riosMapaIgnorarClick = false;

  aplicarVistaMapaRios();
}


function aplicarVistaMapaRios() {

  const svg =
    document.getElementById(
      "rios-mapa-svg"
    );

  if (!svg) return;

  svg.setAttribute(
    "viewBox",
    [
      riosMapaViewBox.x,
      riosMapaViewBox.y,
      riosMapaViewBox.ancho,
      riosMapaViewBox.alto
    ].join(" ")
  );
}


function zoomVistaMapaRios(
  factor
) {

  const centroX =
    riosMapaViewBox.x +
    riosMapaViewBox.ancho / 2;

  const centroY =
    riosMapaViewBox.y +
    riosMapaViewBox.alto / 2;

  const anchoMin =
    RIOS_MAPA_VIEWBOX_INICIAL.ancho /
    3.5;

  const anchoNuevo =
    Math.max(
      anchoMin,
      Math.min(
        RIOS_MAPA_VIEWBOX_INICIAL.ancho,
        riosMapaViewBox.ancho /
        factor
      )
    );

  const altoNuevo =
    anchoNuevo *
    (
      RIOS_MAPA_VIEWBOX_INICIAL.alto /
      RIOS_MAPA_VIEWBOX_INICIAL.ancho
    );

  riosMapaViewBox = {
    x:
      centroX -
      anchoNuevo / 2,
    y:
      centroY -
      altoNuevo / 2,
    ancho:
      anchoNuevo,
    alto:
      altoNuevo
  };

  riosMapaViewBox.x =
    Math.max(
      0,
      Math.min(
        RIOS_MAPA_VIEWBOX_INICIAL.ancho -
          riosMapaViewBox.ancho,
        riosMapaViewBox.x
      )
    );

  riosMapaViewBox.y =
    Math.max(
      0,
      Math.min(
        RIOS_MAPA_VIEWBOX_INICIAL.alto -
          riosMapaViewBox.alto,
        riosMapaViewBox.y
      )
    );

  aplicarVistaMapaRios();
}


function activarZoomMapaRios() {

  const btnMas =
    document.getElementById(
      "rios-mapa-zoom-mas"
    );

  const btnMenos =
    document.getElementById(
      "rios-mapa-zoom-menos"
    );

  const btnReset =
    document.getElementById(
      "rios-mapa-zoom-reset"
    );

  if (
    btnMas &&
    btnMenos &&
    btnReset
  ) {

    btnMas.addEventListener(
      "click",
      evento => {
        evento.stopPropagation();
        zoomVistaMapaRios(1.45);
      }
    );

    btnMenos.addEventListener(
      "click",
      evento => {
        evento.stopPropagation();
        zoomVistaMapaRios(
          1 / 1.45
        );
      }
    );

    btnReset.addEventListener(
      "click",
      evento => {
        evento.stopPropagation();
        reiniciarVistaMapaRios();
      }
    );
  }
}


function distanciaPinzaMapaRios() {

  const puntos =
    [...riosMapaPunteros.values()];

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


function centroPinzaMapaRios() {

  const puntos =
    [...riosMapaPunteros.values()];

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


function limitarVistaMapaRios() {

  const maxX =
    RIOS_MAPA_VIEWBOX_INICIAL.ancho -
    riosMapaViewBox.ancho;

  const maxY =
    RIOS_MAPA_VIEWBOX_INICIAL.alto -
    riosMapaViewBox.alto;

  riosMapaViewBox.x =
    Math.max(
      0,
      Math.min(
        maxX,
        riosMapaViewBox.x
      )
    );

  riosMapaViewBox.y =
    Math.max(
      0,
      Math.min(
        maxY,
        riosMapaViewBox.y
      )
    );
}


function zoomMapaRiosEnPunto(
  factor,
  clientX,
  clientY
) {

  const svg =
    document.getElementById(
      "rios-mapa-svg"
    );

  if (!svg) return;

  const rect =
    svg.getBoundingClientRect();

  if (
    rect.width === 0 ||
    rect.height === 0
  ) {
    return;
  }

  const svgX =
    riosMapaViewBox.x +
    (
      (clientX - rect.left) /
      rect.width
    ) *
    riosMapaViewBox.ancho;

  const svgY =
    riosMapaViewBox.y +
    (
      (clientY - rect.top) /
      rect.height
    ) *
    riosMapaViewBox.alto;

  const anchoMin =
    RIOS_MAPA_VIEWBOX_INICIAL.ancho /
    3.5;

  const anchoNuevo =
    Math.max(
      anchoMin,
      Math.min(
        RIOS_MAPA_VIEWBOX_INICIAL.ancho,
        riosMapaViewBox.ancho /
        factor
      )
    );

  const altoNuevo =
    anchoNuevo *
    (
      RIOS_MAPA_VIEWBOX_INICIAL.alto /
      RIOS_MAPA_VIEWBOX_INICIAL.ancho
    );

  const proporcionX =
    (
      svgX -
      riosMapaViewBox.x
    ) /
    riosMapaViewBox.ancho;

  const proporcionY =
    (
      svgY -
      riosMapaViewBox.y
    ) /
    riosMapaViewBox.alto;

  riosMapaViewBox = {
    x:
      svgX -
      proporcionX *
      anchoNuevo,
    y:
      svgY -
      proporcionY *
      altoNuevo,
    ancho:
      anchoNuevo,
    alto:
      altoNuevo
  };

  limitarVistaMapaRios();
  aplicarVistaMapaRios();
}


function activarGestosMapaRios() {

  const svg =
    document.getElementById(
      "rios-mapa-svg"
    );

  if (!svg) return;


  svg.addEventListener(
    "wheel",
    evento => {

      evento.preventDefault();

      zoomMapaRiosEnPunto(
        evento.deltaY < 0
          ? 1.16
          : 1 / 1.16,
        evento.clientX,
        evento.clientY
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

      riosMapaPunteros.set(
        evento.pointerId,
        {
          x: evento.clientX,
          y: evento.clientY
        }
      );

      if (
        riosMapaPunteros.size === 1
      ) {

        riosMapaArrastre = {
          x: evento.clientX,
          y: evento.clientY
        };

      } else if (
        riosMapaPunteros.size === 2
      ) {

        riosMapaDistanciaPinza =
          distanciaPinzaMapaRios();

        riosMapaArrastre = null;
      }
    }
  );


  svg.addEventListener(
    "pointermove",
    evento => {

      if (
        !riosMapaPunteros.has(
          evento.pointerId
        )
      ) {
        return;
      }

      riosMapaPunteros.set(
        evento.pointerId,
        {
          x: evento.clientX,
          y: evento.clientY
        }
      );


      if (
        riosMapaPunteros.size === 2
      ) {

        const nuevaDistancia =
          distanciaPinzaMapaRios();

        const centro =
          centroPinzaMapaRios();

        if (
          riosMapaDistanciaPinza &&
          nuevaDistancia &&
          centro
        ) {

          const factor =
            nuevaDistancia /
            riosMapaDistanciaPinza;

          if (
            Math.abs(
              nuevaDistancia -
              riosMapaDistanciaPinza
            ) > 2
          ) {
            riosMapaIgnorarClick = true;
          }

          zoomMapaRiosEnPunto(
            factor,
            centro.x,
            centro.y
          );

          riosMapaDistanciaPinza =
            nuevaDistancia;
        }

        return;
      }


      if (
        riosMapaPunteros.size === 1 &&
        riosMapaArrastre &&
        riosMapaViewBox.ancho <
          RIOS_MAPA_VIEWBOX_INICIAL.ancho
      ) {

        const dx =
          evento.clientX -
          riosMapaArrastre.x;

        const dy =
          evento.clientY -
          riosMapaArrastre.y;

        if (
          Math.abs(dx) > 3 ||
          Math.abs(dy) > 3
        ) {
          riosMapaIgnorarClick = true;
        }

        const rect =
          svg.getBoundingClientRect();

        riosMapaViewBox.x -=
          dx /
          rect.width *
          riosMapaViewBox.ancho;

        riosMapaViewBox.y -=
          dy /
          rect.height *
          riosMapaViewBox.alto;

        limitarVistaMapaRios();
        aplicarVistaMapaRios();

        riosMapaArrastre = {
          x: evento.clientX,
          y: evento.clientY
        };
      }
    }
  );


  const terminar =
    evento => {

      riosMapaPunteros.delete(
        evento.pointerId
      );

      if (
        riosMapaPunteros.size < 2
      ) {
        riosMapaDistanciaPinza = null;
      }

      if (
        riosMapaPunteros.size === 1
      ) {

        const restante =
          [...riosMapaPunteros.values()][0];

        riosMapaArrastre = {
          x: restante.x,
          y: restante.y
        };

      } else {

        riosMapaArrastre = null;
      }

      if (riosMapaIgnorarClick) {
        setTimeout(
          () => {
            riosMapaIgnorarClick = false;
          },
          150
        );
      }
    };


  svg.addEventListener(
    "pointerup",
    terminar
  );

  svg.addEventListener(
    "pointercancel",
    terminar
  );
}


// ==========================================
// EVENTOS
// ==========================================

document
  .querySelectorAll(
    ".rios-modo"
  )
  .forEach(
    boton => {

      boton.addEventListener(
        "click",
        () => {
          abrirConfigRios(
            boton.dataset.riosModo
          );
        }
      );

    }
  );


document
  .getElementById(
    "volver-rios-orografia"
  )
  .addEventListener(
    "click",
    () => {
      mostrarMapasOrografiaMenu();
    }
  );


document
  .getElementById(
    "volver-rios-menu"
  )
  .addEventListener(
    "click",
    abrirRiosMenu
  );


document
  .getElementById(
    "volver-rios-desde-juego"
  )
  .addEventListener(
    "click",
    abrirRiosMenu
  );


document
  .getElementById(
    "rios-entrenamiento"
  )
  .addEventListener(
    "click",
    () => {
      iniciarPartidaRios(
        "entrenamiento"
      );
    }
  );


document
  .getElementById(
    "rios-examen10"
  )
  .addEventListener(
    "click",
    () => {
      riosCantidadExamenConfigurada = 10;
      iniciarPartidaRios(
        "examen",
        10
      );
    }
  );


document
  .getElementById(
    "rios-examen20"
  )
  .addEventListener(
    "click",
    () => {
      riosCantidadExamenConfigurada = 20;
      iniciarPartidaRios(
        "examen",
        20
      );
    }
  );


riosSiguiente.addEventListener(
  "click",
  avanzarRios
);


document
  .getElementById(
    "rios-continuar"
  )
  .addEventListener(
    "click",
    () => {

      riosPausaPendiente = false;

      riosPausa.classList.add(
        "oculto"
      );

      mostrarPreguntaActualRios();
    }
  );


document
  .getElementById(
    "rios-salir"
  )
  .addEventListener(
    "click",
    abrirRiosMenu
  );


document
  .getElementById(
    "rios-repetir-examen"
  )
  .addEventListener(
    "click",
    repetirUltimoExamenRios
  );


document
  .getElementById(
    "rios-nuevo-examen"
  )
  .addEventListener(
    "click",
    nuevoExamenRios
  );


document
  .getElementById(
    "rios-repasar-fallos"
  )
  .addEventListener(
    "click",
    repasarFallosRios
  );


document
  .getElementById(
    "volver-rios-fin"
  )
  .addEventListener(
    "click",
    abrirRiosMenu
  );


document
  .getElementById(
    "rios-volver-menu"
  )
  .addEventListener(
    "click",
    abrirRiosMenu
  );


document
  .querySelectorAll(
    ".rios-mapa-modo"
  )
  .forEach(
    boton => {

      boton.addEventListener(
        "click",
        () => {
          iniciarMapaRios(
            boton.dataset.riosMapaModo
          );
        }
      );
    }
  );


document
  .getElementById(
    "rios-mapa-cambiar-modo"
  )
  .addEventListener(
    "click",
    mostrarSelectorMapaRios
  );


riosMapaSiguiente.addEventListener(
  "click",
  mostrarPreguntaMapaRios
);


document
  .getElementById(
    "btn-rios-mapa"
  )
  .addEventListener(
    "click",
    abrirMapaRiosProximamente
  );


document
  .getElementById(
    "volver-rios-mapa"
  )
  .addEventListener(
    "click",
    abrirRiosMenu
  );
