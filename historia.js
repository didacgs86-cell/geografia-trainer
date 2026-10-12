// ==========================================
// GEOTRAINER - HISTORIA
// ==========================================

const HISTORIA_TEMAS = {
  grecia: {
    icono: "🏛️",
    titulo: "Antigua Grecia",
    subtitulo: "Del mundo egeo a Alejandro Magno y el helenismo.",
    bloques: [
      {
        titulo: "1. Mundo egeo y época oscura",
        texto: "Las civilizaciones minoica (Creta) y micénica precedieron al mundo griego clásico. Tras el colapso de los palacios micénicos hacia 1200 a. C. comenzó una etapa de retroceso demográfico y político conocida tradicionalmente como Edad Oscura."
      },
      {
        titulo: "2. Polis y expansión griega",
        texto: "Entre los siglos VIII y VI a. C. se consolidaron las polis, comunidades políticas independientes como Atenas, Esparta, Corinto o Tebas. La expansión colonial extendió ciudades y redes comerciales por el Mediterráneo y el mar Negro."
      },
      {
        titulo: "3. Guerras médicas",
        texto: "A comienzos del siglo V a. C. varias polis griegas combatieron al Imperio persa. Maratón (490 a. C.), Termópilas y Salamina (480 a. C.) son algunos de los episodios más conocidos."
      },
      {
        titulo: "4. Atenas, Esparta y la guerra del Peloponeso",
        texto: "El siglo V a. C. vio el apogeo de la democracia ateniense y de su imperio marítimo. La rivalidad con Esparta desembocó en la guerra del Peloponeso (431-404 a. C.), que terminó con la derrota de Atenas."
      },
      {
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
        titulo: "1. Monarquía",
        texto: "La tradición romana situaba la fundación de Roma en 753 a. C. La etapa monárquica concluyó tradicionalmente en 509 a. C., cuando se instauró la República."
      },
      {
        titulo: "2. República",
        texto: "La República se organizó mediante magistraturas, Senado y asambleas. Roma expandió su dominio por Italia y, tras las guerras púnicas contra Cartago, se convirtió en la principal potencia del Mediterráneo occidental."
      },
      {
        titulo: "3. Crisis de la República",
        texto: "Las conquistas transformaron la economía y la sociedad. Conflictos políticos, desigualdades, ejércitos ligados a sus generales y guerras civiles marcaron los siglos II y I a. C. César fue asesinado en 44 a. C."
      },
      {
        titulo: "4. Principado e Imperio",
        texto: "Octavio recibió el título de Augusto en 27 a. C. El sistema imperial mantuvo instituciones republicanas formalmente, pero concentró el poder en el emperador. Los siglos I y II d. C. fueron el periodo de máxima expansión territorial."
      },
      {
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
  },

  mesopotamia: {
    icono: "𒀭",
    titulo: "Mesopotamia",
    subtitulo: "Ciudades, imperios y escritura entre el Tigris y el Éufrates.",
    bloques: [
      {
        titulo: "1. Sumer y las primeras ciudades",
        texto: "En el sur de Mesopotamia surgieron durante el IV milenio a. C. centros urbanos como Uruk, Ur o Lagash. La escritura cuneiforme se desarrolló inicialmente para necesidades administrativas y económicas."
      },
      {
        titulo: "2. Imperio acadio",
        texto: "Sargón de Acad creó en el siglo XXIV a. C. un poder territorial que integró amplias zonas de Mesopotamia. Sumerio y acadio convivieron durante siglos como lenguas de cultura y administración."
      },
      {
        titulo: "3. Babilonia",
        texto: "Babilonia alcanzó gran importancia con Hammurabi en el siglo XVIII a. C. Su célebre recopilación legal muestra una sociedad jerarquizada y una administración compleja."
      },
      {
        titulo: "4. Asiria",
        texto: "El Imperio neoasirio dominó gran parte de Oriente Próximo entre los siglos IX y VII a. C. mediante una poderosa organización militar, una administración provincial y deportaciones de población."
      },
      {
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
  }
};

const historiaTemaPantalla =
  document.getElementById("historia-tema");

const historiaTemaContenido =
  document.getElementById("historia-tema-contenido");

function ocultarPantallasHistoriaContenido() {
  if (historiaTemaPantalla) {
    historiaTemaPantalla.classList.add("oculto");
  }
}

function abrirTemaHistoria(id) {
  const tema = HISTORIA_TEMAS[id];
  if (!tema) return;

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
          <article class="historia-bloque">
            <h3>${b.titulo}</h3>
            <p>${b.texto}</p>
          </article>
        `).join("")}
      </div>

      <aside class="historia-claves">
        <h3>Conceptos clave</h3>
        ${tema.claves.map(c => `<div class="historia-clave">${c}</div>`).join("")}
      </aside>
    </div>
  `;
}

document.querySelectorAll(".historia-tema-btn").forEach(b => {
  b.addEventListener("click", () => abrirTemaHistoria(b.dataset.historiaTema));
});

document.getElementById("volver-historia-tema")
  .addEventListener("click", mostrarHistoriaMenu);
