// ==========================================
// GEOTRAINER - MARAVILLAS DEL MUNDO
// ==========================================

const MARAVILLAS = {
  antiguas: [
    {
      nombre: "Gran Pirámide de Guiza",
      lugar: "Guiza · Egipto",
      fecha: "c. 2560 a. C.",
      texto: "Construida como tumba del faraón Keops. Es la única de las siete maravillas antiguas que sigue en pie."
    },
    {
      nombre: "Jardines Colgantes de Babilonia",
      lugar: "Babilonia · actual Irak",
      fecha: "tradicionalmente s. VI a. C.",
      texto: "Su existencia y localización exacta siguen siendo objeto de debate histórico y arqueológico."
    },
    {
      nombre: "Templo de Artemisa en Éfeso",
      lugar: "Éfeso · actual Turquía",
      fecha: "s. VI a. C.",
      texto: "Gran santuario jónico dedicado a Artemisa, reconstruido varias veces tras destrucciones."
    },
    {
      nombre: "Estatua de Zeus en Olimpia",
      lugar: "Olimpia · Grecia",
      fecha: "s. V a. C.",
      texto: "Estatua criselefantina atribuida a Fidias y dedicada a Zeus en su gran santuario panhelénico."
    },
    {
      nombre: "Mausoleo de Halicarnaso",
      lugar: "Halicarnaso · actual Bodrum, Turquía",
      fecha: "s. IV a. C.",
      texto: "Tumba monumental de Mausolo. Su nombre dio origen al término «mausoleo»."
    },
    {
      nombre: "Coloso de Rodas",
      lugar: "Rodas · Grecia",
      fecha: "s. III a. C.",
      texto: "Enorme estatua de Helios levantada tras la resistencia de Rodas a un asedio."
    },
    {
      nombre: "Faro de Alejandría",
      lugar: "Alejandría · Egipto",
      fecha: "s. III a. C.",
      texto: "Construido en la isla de Faros para orientar la navegación hacia el puerto de Alejandría."
    }
  ],

  modernas: [
    {
      nombre: "Gran Muralla China",
      lugar: "China",
      fecha: "Diversas fases entre la Antigüedad y la Edad Moderna",
      texto: "Conjunto de fortificaciones construidas y reconstruidas por diferentes dinastías."
    },
    {
      nombre: "Petra",
      lugar: "Jordania",
      fecha: "Especialmente floreciente desde época nabatea",
      texto: "Ciudad excavada y construida entre formaciones rocosas, gran centro caravanero de los nabateos."
    },
    {
      nombre: "Cristo Redentor",
      lugar: "Río de Janeiro · Brasil",
      fecha: "1931",
      texto: "Monumental estatua de Cristo situada en la cima del Corcovado."
    },
    {
      nombre: "Machu Picchu",
      lugar: "Perú",
      fecha: "s. XV",
      texto: "Complejo incaico andino situado sobre una cresta montañosa por encima del valle del Urubamba."
    },
    {
      nombre: "Chichén Itzá",
      lugar: "Yucatán · México",
      fecha: "Principal desarrollo entre los siglos IX-XIII",
      texto: "Importante ciudad maya conocida por la pirámide de Kukulkán y su arquitectura monumental."
    },
    {
      nombre: "Coliseo",
      lugar: "Roma · Italia",
      fecha: "s. I d. C.",
      texto: "Anfiteatro flavio destinado a espectáculos públicos y uno de los grandes símbolos de Roma."
    },
    {
      nombre: "Taj Mahal",
      lugar: "Agra · India",
      fecha: "s. XVII",
      texto: "Complejo funerario mogol mandado construir por Shah Jahan en memoria de Mumtaz Mahal."
    }
  ]
};

const maravillasMenu =
  document.getElementById("maravillas-menu");

const maravillasLista =
  document.getElementById("maravillas-lista");

function ocultarPantallasMaravillas() {
  if (maravillasMenu) {
    maravillasMenu.classList.add("oculto");
  }
}

function abrirMaravillas() {
  ocultarTodasLasPantallas();
  maravillasMenu.classList.remove("oculto");
  mostrarGrupoMaravillas("antiguas");
}

function mostrarGrupoMaravillas(grupo) {
  document.querySelectorAll(".maravillas-tab").forEach(b => {
    b.classList.toggle(
      "activa",
      b.dataset.maravillasGrupo === grupo
    );
  });

  const datos = MARAVILLAS[grupo];

  maravillasLista.innerHTML = `
    ${grupo === "modernas"
      ? `<div class="maravillas-nota">
          La lista moderna corresponde a la votación internacional New7Wonders anunciada en 2007; no es una lista oficial de la UNESCO.
        </div>`
      : `<div class="maravillas-nota">
          La lista antigua procede de la tradición grecorromana. Solo la Gran Pirámide de Guiza se conserva.
        </div>`
    }

    <div class="maravillas-grid">
      ${datos.map((m, i) => `
        <article class="maravilla-card">
          <div class="maravilla-numero">${i + 1}</div>
          <div>
            <h3>${m.nombre}</h3>
            <div class="maravilla-lugar">${m.lugar}</div>
            <div class="maravilla-fecha">${m.fecha}</div>
            <p>${m.texto}</p>
          </div>
        </article>
      `).join("")}
    </div>
  `;
}

document.getElementById("btn-maravillas")
  .addEventListener("click", abrirMaravillas);

document.getElementById("volver-maravillas-viajes")
  .addEventListener("click", mostrarViajesMenu);

document.querySelectorAll(".maravillas-tab").forEach(b => {
  b.addEventListener("click", () => {
    mostrarGrupoMaravillas(b.dataset.maravillasGrupo);
  });
});
