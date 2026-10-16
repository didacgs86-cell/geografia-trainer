// ==========================================
// GEOTRAINER - HISTORIA
// ==========================================

const HISTORIA_TEMAS = {
  mesopotamia: {
    icono: "𒀭",
    titulo: "Mesopotamia",
    subtitulo: "Ciudades, imperios y escritura entre el Tigris y el Éufrates.",
    bloques: [
      {
        id: "sumer-primeras-ciudades",
        titulo: "1. Sumer y las primeras ciudades",
        texto: "En el sur de Mesopotamia surgieron durante el IV milenio a. C. centros urbanos como Uruk, Ur o Lagash. La escritura cuneiforme se desarrolló inicialmente para necesidades administrativas y económicas."
      },
      {
        id: "imperio-acadio",
        titulo: "2. Imperio acadio",
        texto: "Sargón de Acad creó en el siglo XXIV a. C. un poder territorial que integró amplias zonas de Mesopotamia. Sumerio y acadio convivieron durante siglos como lenguas de cultura y administración."
      },
      {
        id: "babilonia",
        titulo: "3. Babilonia",
        texto: "Babilonia alcanzó gran importancia con Hammurabi en el siglo XVIII a. C. Su célebre recopilación legal muestra una sociedad jerarquizada y una administración compleja."
      },
      {
        id: "asiria",
        titulo: "4. Asiria",
        texto: "El Imperio neoasirio dominó gran parte de Oriente Próximo entre los siglos IX y VII a. C. mediante una poderosa organización militar, una administración provincial y deportaciones de población."
      },
      {
        id: "neobabilonico-persa",
        titulo: "5. Imperio neobabilónico y conquista persa",
        texto: "Tras la caída de Asiria, Babilonia recuperó protagonismo bajo Nabucodonosor II. En 539 a. C., Ciro II de Persia conquistó la ciudad e incorporó Mesopotamia al Imperio aqueménida."
      }
    ],
    claves: [
      "Mesopotamia significa «tierra entre ríos».",
      "Tigris y Éufrates estructuraron agricultura, ciudades y comunicaciones.",
      "La escritura cuneiforme se utilizó durante más de tres milenios.",
      "Sumerios, acadios, babilonios y asirios no formaron una única civilización continua.",
      "539 a. C.: conquista persa de Babilonia."
    ]
  },

  grecia: {
    icono: "🏛️",
    titulo: "Antigua Grecia",
    subtitulo: "Del mundo egeo a Alejandro Magno y el helenismo.",
    bloques: [
      {
        id: "mundo-egeo-epoca-oscura",
        titulo: "1. Mundo egeo y época oscura",
        texto: "Las civilizaciones minoica (Creta) y micénica precedieron al mundo griego clásico. Tras el colapso de los palacios micénicos hacia 1200 a. C. comenzó una etapa de retroceso demográfico y político conocida tradicionalmente como Edad Oscura."
      },
      {
        id: "polis-expansion",
        titulo: "2. Polis y expansión griega",
        texto: "Entre los siglos VIII y VI a. C. se consolidaron las polis, comunidades políticas independientes como Atenas, Esparta, Corinto o Tebas. La expansión colonial extendió ciudades y redes comerciales por el Mediterráneo y el mar Negro."
      },
      {
        id: "guerras-medicas",
        titulo: "3. Guerras médicas",
        texto: "A comienzos del siglo V a. C. varias polis griegas combatieron al Imperio persa. Maratón (490 a. C.), Termópilas y Salamina (480 a. C.) son algunos de los episodios más conocidos."
      },
      {
        id: "peloponeso",
        titulo: "4. Atenas, Esparta y la guerra del Peloponeso",
        texto: "El siglo V a. C. vio el apogeo de la democracia ateniense y de su imperio marítimo. La rivalidad con Esparta desembocó en la guerra del Peloponeso (431-404 a. C.), que terminó con la derrota de Atenas."
      },
      {
        id: "macedonia-helenismo",
        titulo: "5. Macedonia y mundo helenístico",
        texto: "Filipo II de Macedonia impuso su hegemonía sobre gran parte de Grecia. Su hijo Alejandro Magno conquistó el Imperio persa y llegó hasta el valle del Indo. Tras su muerte en 323 a. C., sus dominios se dividieron en reinos helenísticos."
      }
    ],
    claves: [
      "Polis: comunidad política autónoma.",
      "Atenas: democracia directa limitada a ciudadanos varones libres.",
      "Esparta: sociedad militarizada y oligárquica.",
      "Alejandro Magno: expansión de la cultura griega hacia Oriente.",
      "Helenismo: fusión y circulación de tradiciones griegas y orientales."
    ]
  },

  roma: {
    icono: "🏺",
    titulo: "Antigua Roma",
    subtitulo: "De una ciudad del Lacio a un imperio mediterráneo.",
    bloques: [
      {
        id: "monarquia",
        titulo: "1. Monarquía",
        texto: "La tradición romana situaba la fundación de Roma en 753 a. C. La etapa monárquica concluyó tradicionalmente en 509 a. C., cuando se instauró la República."
      },
      {
        id: "republica",
        titulo: "2. República",
        texto: "La República se organizó mediante magistraturas, Senado y asambleas. Roma expandió su dominio por Italia y, tras las guerras púnicas contra Cartago, se convirtió en la principal potencia del Mediterráneo occidental."
      },
      {
        id: "crisis-republica",
        titulo: "3. Crisis de la República",
        texto: "Las conquistas transformaron la economía y la sociedad. Conflictos políticos, desigualdades, ejércitos ligados a sus generales y guerras civiles marcaron los siglos II y I a. C. César fue asesinado en 44 a. C."
      },
      {
        id: "principado-imperio",
        titulo: "4. Principado e Imperio",
        texto: "Octavio recibió el título de Augusto en 27 a. C. El sistema imperial mantuvo instituciones republicanas formalmente, pero concentró el poder en el emperador. Los siglos I y II d. C. fueron el periodo de máxima expansión territorial."
      },
      {
        id: "antiguedad-tardia-caida",
        titulo: "5. Antigüedad tardía y caída de Occidente",
        texto: "La crisis del siglo III fue seguida por reformas de Diocleciano y Constantino. Tras la división definitiva del Imperio en 395, Occidente sufrió una creciente fragmentación política. En 476 Odoacro depuso a Rómulo Augústulo."
      }
    ],
    claves: [
      "509 a. C.: inicio tradicional de la República.",
      "264-146 a. C.: guerras púnicas.",
      "27 a. C.: Augusto inaugura el Principado.",
      "395: división definitiva entre Oriente y Occidente.",
      "476: deposición de Rómulo Augústulo."
    ]
  }
};


const HISTORIA_ARTICULOS = {
  "roma/antiguedad-tardia-caida": {
    titulo: "La desintegración del Imperio romano de Occidente",
    subtitulo: "De Adrianópolis (378) a la deposición de Rómulo Augústulo (476)",
    parrafos: ["La desintegración del Imperio romano de Occidente fue un proceso largo y progresivo, no un acontecimiento puntual. Aunque tradicionalmente se considera el año 476 d. C. como la fecha de su desaparición, cuando Odoacro depuso al último emperador occidental, Rómulo Augústulo, la crisis del Imperio había comenzado mucho antes.", "Un momento importante fue la batalla de Adrianópolis, en el año 378, en la que los visigodos derrotaron al ejército romano y murió el emperador Valente. Este episodio mostró las crecientes dificultades del Imperio para controlar a los pueblos germánicos que penetraban dentro de sus fronteras.", "Tras la muerte del emperador Teodosio I en el año 395, el Imperio quedó definitivamente dividido entre sus dos hijos: Arcadio recibió el Imperio romano de Oriente y Honorio el Imperio romano de Occidente. Aunque ambas partes seguían considerándose integrantes de un mismo Imperio romano, en la práctica evolucionaron cada vez más por separado.", "Durante el gobierno de Honorio, el Imperio occidental atravesó graves problemas políticos, económicos y militares. El mantenimiento del ejército y de la administración imperial suponía una fuerte presión fiscal sobre la población, mientras que el poder central encontraba cada vez más dificultades para recaudar impuestos y controlar el territorio.", "Al mismo tiempo, el ejército romano dependió progresivamente de soldados y mandos de origen germánico. Este fenómeno se conoce habitualmente como “barbarización” del ejército, aunque muchos de estos militares estaban plenamente integrados en las estructuras romanas. Uno de los personajes más importantes fue Estilicón, general de origen vándalo que actuó como principal defensor del Imperio occidental durante los primeros años del reinado de Honorio.", "A comienzos del siglo V, los visigodos dirigidos por Alarico realizaron varias incursiones en Italia. Estilicón consiguió contenerlos en varias ocasiones y trató de utilizar a grupos germánicos mediante acuerdos y alianzas dentro del sistema imperial. Sin embargo, fue acusado de conspiración y ejecutado en el año 408.", "La muerte de Estilicón debilitó considerablemente la defensa de Occidente. Alarico volvió entonces a presionar al gobierno imperial y, tras fracasar las negociaciones con Honorio, saqueó Roma en el año 410. El saqueo tuvo una enorme repercusión simbólica, aunque Roma ya no era la capital política del Imperio occidental, que se encontraba en Rávena.", "Alarico murió poco después y fue sucedido por Ataúlfo. Los visigodos se desplazaron posteriormente hacia la Galia y la península ibérica. Ataúlfo contrajo matrimonio en el año 414 con Gala Placidia, hermana del emperador Honorio, que había sido capturada durante el saqueo de Roma.", "Paralelamente, otros pueblos habían penetrado en el Imperio. En la noche del 31 de diciembre del año 406, grupos de vándalos, suevos y alanos atravesaron el Rin y penetraron en la Galia. Posteriormente, muchos de ellos se desplazaron hacia Hispania. Los visigodos, por su parte, acabaron estableciéndose en el sur de la Galia mediante acuerdos con el Imperio y formaron el reino de Tolosa.", "Durante las décadas siguientes, el Imperio romano de Occidente fue perdiendo territorios y recursos. Los vándalos llegaron al norte de África y conquistaron Cartago en el año 439, privando al Imperio occidental de una de sus regiones más ricas y de una importante fuente de cereal e impuestos.", "A todo ello se añadieron la inestabilidad política, las luchas entre generales, las usurpaciones imperiales, las dificultades económicas y la creciente autonomía de los reinos germánicos establecidos dentro del antiguo territorio romano.", "El Imperio romano de Oriente intentó en diversas ocasiones intervenir en Occidente y recuperar territorios perdidos. Estas tentativas continuaron incluso después del año 476, especialmente durante el reinado de Justiniano en el siglo VI.", "Finalmente, en el año 476, el jefe militar Odoacro depuso a Rómulo Augústulo y envió las insignias imperiales a Constantinopla. Este hecho se utiliza tradicionalmente para señalar el final del Imperio romano de Occidente, aunque para muchos contemporáneos no supuso una ruptura inmediata, sino una etapa más dentro de un proceso de transformación política iniciado décadas antes."],
    cronologia: [
      { fecha: "378", texto: "Batalla de Adrianópolis. Muere el emperador Valente." },
      { fecha: "395", texto: "División definitiva entre Oriente y Occidente tras la muerte de Teodosio I." },
      { fecha: "406", texto: "Vándalos, suevos y alanos atraviesan el Rin." },
      { fecha: "408", texto: "Ejecución de Estilicón." },
      { fecha: "410", texto: "Alarico saquea Roma." },
      { fecha: "414", texto: "Ataúlfo contrae matrimonio con Gala Placidia." },
      { fecha: "439", texto: "Los vándalos conquistan Cartago." },
      { fecha: "476", texto: "Odoacro depone a Rómulo Augústulo." }
    ]
  }
};

const historiaTemaPantalla =
  document.getElementById("historia-tema");

const historiaTemaContenido =
  document.getElementById("historia-tema-contenido");

const historiaSubtemaPantalla =
  document.getElementById("historia-subtema");

const historiaSubtemaContenido =
  document.getElementById("historia-subtema-contenido");

let historiaTemaActual = null;

function ocultarPantallasHistoriaContenido() {
  if (historiaTemaPantalla) {
    historiaTemaPantalla.classList.add("oculto");
  }

  if (historiaSubtemaPantalla) {
    historiaSubtemaPantalla.classList.add("oculto");
  }
}

function abrirTemaHistoria(id) {
  const tema = HISTORIA_TEMAS[id];
  if (!tema) return;

  historiaTemaActual = id;

  ocultarTodasLasPantallas();
  historiaTemaPantalla.classList.remove("oculto");

  historiaTemaContenido.innerHTML = `
    <div class="historia-tema-cabecera">
      <div class="historia-tema-icono">${tema.icono}</div>
      <h2>${tema.titulo}</h2>
      <p>${tema.subtitulo}</p>
    </div>

    <div class="historia-tema-grid">
      <div class="historia-cronologia">
        ${tema.bloques.map(b => `
          <button
            type="button"
            class="historia-bloque historia-bloque-entrable"
            data-historia-subtema="${b.id}"
          >
            <div class="historia-bloque-texto">
              <h3>${b.titulo}</h3>
              <p>${b.texto}</p>
            </div>

            <span class="historia-bloque-flecha">›</span>
          </button>
        `).join("")}
      </div>

      <aside class="historia-claves">
        <h3>Conceptos clave</h3>
        ${tema.claves.map(c => `<div class="historia-clave">${c}</div>`).join("")}
      </aside>
    </div>
  `;

  historiaTemaContenido
    .querySelectorAll("[data-historia-subtema]")
    .forEach(boton => {
      boton.addEventListener("click", () => {
        abrirSubtemaHistoria(
          id,
          boton.dataset.historiaSubtema
        );
      });
    });
}


function renderArticuloCaidaRoma(tema, bloque, articulo) {

  const p = articulo.parrafos;

  return `
    <article class="historia-articulo historia-articulo-largo">

      <div class="historia-articulo-miga">
        ${tema.titulo} · ${bloque.titulo.replace(/^\d+\.\s*/, "")}
      </div>

      <header class="historia-articulo-header historia-articulo-header-editorial">
        <div class="historia-tema-icono">${tema.icono}</div>

        <h2>
          ${articulo.titulo}
        </h2>

        <p class="historia-articulo-subtitulo">
          ${articulo.subtitulo}
        </p>
      </header>

      <section class="historia-idea-central">
        <div class="historia-box-etiqueta">
          Idea central
        </div>

        <p>
          ${p[0]}
        </p>
      </section>


      <section class="historia-seccion">

        <div class="historia-seccion-kicker">
          Cronología rápida
        </div>

        <div class="historia-linea-tiempo">
          ${articulo.cronologia.map(hito => `
            <div class="historia-hito">
              <div class="historia-hito-fecha">
                ${hito.fecha}
              </div>

              <div class="historia-hito-texto">
                ${hito.texto}
              </div>
            </div>
          `).join("")}
        </div>

      </section>


      <section class="historia-seccion">

        <div class="historia-fecha-cabecera">
          <span class="historia-fecha-pill">378</span>
          <h3>Adrianópolis: una señal de alarma</h3>
        </div>

        <p>
          ${p[1]}
        </p>

      </section>


      <section class="historia-fecha-box">

        <div class="historia-fecha-grande">
          395
        </div>

        <div class="historia-fecha-contenido">
          <div class="historia-box-etiqueta">
            Punto de inflexión
          </div>

          <h3>
            Oriente y Occidente toman caminos cada vez más separados
          </h3>

          <p>
            ${p[2]}
          </p>
        </div>

      </section>


      <section class="historia-seccion">

        <div class="historia-seccion-kicker">
          Occidente bajo Honorio
        </div>

        <h3>
          Presión política, económica y militar
        </h3>

        <p>
          ${p[3]}
        </p>

      </section>


      <section class="historia-concepto-box">

        <div class="historia-box-etiqueta">
          Concepto clave
        </div>

        <h3>
          “Barbarización” del ejército
        </h3>

        <p>
          ${p[4]}
        </p>

      </section>


      <section class="historia-seccion">

        <div class="historia-seccion-kicker">
          Estilicón y Alarico
        </div>

        <h3>
          De la contención a la crisis
        </h3>

        <p>
          ${p[5]}
        </p>

        <p>
          ${p[6]}
        </p>

        <div class="historia-dato-box">
          <div class="historia-dato-icono">◆</div>

          <div>
            <strong>Dato importante</strong>
            <span>
              En 410 Roma sufrió un saqueo de enorme impacto simbólico,
              aunque la capital política del Imperio romano de Occidente
              se encontraba ya en Rávena.
            </span>
          </div>
        </div>

      </section>


      <section class="historia-seccion">

        <div class="historia-seccion-kicker">
          Reordenación del Occidente romano
        </div>

        <h3>
          Visigodos, vándalos, suevos y alanos
        </h3>

        <p>
          ${p[7]}
        </p>

        <p>
          ${p[8]}
        </p>

      </section>


      <section class="historia-fecha-box historia-fecha-box-secundaria">

        <div class="historia-fecha-grande">
          439
        </div>

        <div class="historia-fecha-contenido">

          <div class="historia-box-etiqueta">
            Pérdida estratégica
          </div>

          <h3>
            Los vándalos conquistan Cartago
          </h3>

          <p>
            ${p[9]}
          </p>

        </div>

      </section>


      <section class="historia-seccion">

        <div class="historia-seccion-kicker">
          Un poder cada vez más fragmentado
        </div>

        <p>
          ${p[10]}
        </p>

        <p>
          ${p[11]}
        </p>

      </section>


      <section class="historia-final-476">

        <div class="historia-final-fecha">
          476
        </div>

        <div class="historia-final-contenido">

          <div class="historia-box-etiqueta">
            Fecha convencional del final
          </div>

          <h3>
            Odoacro depone a Rómulo Augústulo
          </h3>

          <p>
            ${p[12]}
          </p>

          <div class="historia-recordar">
            <strong>Para recordar</strong>

            <span>
              El año 476 se utiliza como fecha convencional del final del Imperio
              romano de Occidente, pero su desaparición fue el resultado de un
              proceso largo de transformación y no de una ruptura súbita.
            </span>
          </div>

        </div>

      </section>

    </article>
  `;
}


function abrirSubtemaHistoria(temaId, subtemaId) {
  const tema = HISTORIA_TEMAS[temaId];
  if (!tema) return;

  const bloque =
    tema.bloques.find(
      item => item.id === subtemaId
    );

  if (!bloque) return;

  historiaTemaActual = temaId;

  ocultarTodasLasPantallas();
  historiaSubtemaPantalla.classList.remove("oculto");

  const claveArticulo =
    `${temaId}/${subtemaId}`;

  const articulo =
    HISTORIA_ARTICULOS[
      claveArticulo
    ];

  if (articulo) {
    historiaSubtemaContenido.innerHTML =
      renderArticuloCaidaRoma(
        tema,
        bloque,
        articulo
      );

    return;
  }

  historiaSubtemaContenido.innerHTML = `
    <article class="historia-articulo">

      <div class="historia-articulo-miga">
        ${tema.titulo}
      </div>

      <header class="historia-articulo-header">
        <div class="historia-tema-icono">${tema.icono}</div>
        <h2>${bloque.titulo.replace(/^\d+\.\s*/, "")}</h2>
      </header>

      <section class="historia-resumen-destacado">
        <span class="historia-resumen-etiqueta">Resumen</span>
        <p>${bloque.texto}</p>
      </section>

      <section class="historia-subtema-contexto">
        <span class="historia-resumen-etiqueta">Marco general</span>
        <p>${tema.subtitulo}</p>
      </section>

      <section class="historia-subtema-claves">
        <h3>Claves generales del tema</h3>
        <div class="historia-claves-lista">
          ${tema.claves.slice(0, 4).map(clave => `<div class="historia-clave-chip">${clave}</div>`).join("")}
        </div>
      </section>

    </article>
  `;
}

document
  .querySelectorAll(".historia-tema-btn")
  .forEach(b => {
    b.addEventListener(
      "click",
      () =>
        abrirTemaHistoria(
          b.dataset.historiaTema
        )
    );
  });

document
  .getElementById("volver-historia-tema")
  .addEventListener(
    "click",
    mostrarHistoriaMenu
  );

document
  .getElementById("volver-historia-subtema")
  .addEventListener(
    "click",
    () => {
      if (historiaTemaActual) {
        abrirTemaHistoria(
          historiaTemaActual
        );
      } else {
        mostrarHistoriaMenu();
      }
    }
  );
