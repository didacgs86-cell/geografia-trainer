const paises = [
  // EUROPA
  { pais: "España", capital: "Madrid", continente: "Europa", x: 90, y: 225 },
  { pais: "Francia", capital: "París", continente: "Europa", x: 125, y: 190 },
  { pais: "Italia", capital: "Roma", continente: "Europa", x: 180, y: 210 },
  { pais: "Portugal", capital: "Lisboa", continente: "Europa", x: 75, y: 210 },
  { pais: "Alemania", capital: "Berlín", continente: "Europa", x: 170, y: 160 },
  { pais: "Reino Unido", capital: "Londres", continente: "Europa", x: 110, y: 110 },
  { pais: "Irlanda", capital: "Dublín", continente: "Europa", x: 80, y: 110 },
  { pais: "Bélgica", capital: "Bruselas", continente: "Europa", x: 145, y: 155 },
  { pais: "Países Bajos", capital: "Ámsterdam", continente: "Europa", x: 150, y: 140 },
  { pais: "Suiza", capital: "Berna", continente: "Europa", x: 155, y: 190 },
  { pais: "Austria", capital: "Viena", continente: "Europa", x: 190, y: 180 },
  { pais: "Polonia", capital: "Varsovia", continente: "Europa", x: 220, y: 145 },
  { pais: "Grecia", capital: "Atenas", continente: "Europa", x: 250, y: 245 },
  { pais: "Noruega", capital: "Oslo", continente: "Europa", x: 180, y: 70 },
  { pais: "Suecia", capital: "Estocolmo", continente: "Europa", x: 220, y: 85 },
  { pais: "Finlandia", capital: "Helsinki", continente: "Europa", x: 270, y: 75 },
  { pais: "Dinamarca", capital: "Copenhague", continente: "Europa", x: 180, y: 120 },
  { pais: "Islandia", capital: "Reikiavik", continente: "Europa", x: 35, y: 55 },
  { pais: "Croacia", capital: "Zagreb", continente: "Europa", x: 210, y: 200 },
  { pais: "Serbia", capital: "Belgrado", continente: "Europa", x: 230, y: 205 },

  // ASIA
  { pais: "Japón", capital: "Tokio", continente: "Asia", x: 430, y: 120 },
  { pais: "China", capital: "Pekín", continente: "Asia", x: 340, y: 150 },
  { pais: "India", capital: "Nueva Delhi", continente: "Asia", x: 260, y: 210 },
  { pais: "Corea del Sur", capital: "Seúl", continente: "Asia", x: 400, y: 140 },
  { pais: "Tailandia", capital: "Bangkok", continente: "Asia", x: 330, y: 220 },
  { pais: "Vietnam", capital: "Hanói", continente: "Asia", x: 350, y: 215 },
  { pais: "Indonesia", capital: "Yakarta", continente: "Asia", x: 390, y: 270 },
  { pais: "Kazajistán", capital: "Astaná", continente: "Asia", x: 240, y: 110 },
  { pais: "Uzbekistán", capital: "Taskent", continente: "Asia", x: 230, y: 145 },
  { pais: "Kirguistán", capital: "Biskek", continente: "Asia", x: 260, y: 145 },
  { pais: "Tayikistán", capital: "Dusambé", continente: "Asia", x: 255, y: 165 },
  { pais: "Turkmenistán", capital: "Asjabad", continente: "Asia", x: 205, y: 155 },
  { pais: "Mongolia", capital: "Ulán Bator", continente: "Asia", x: 330, y: 95 },
  { pais: "Nepal", capital: "Katmandú", continente: "Asia", x: 290, y: 185 },
  { pais: "Filipinas", capital: "Manila", continente: "Asia", x: 405, y: 215 },

  // ÁFRICA
  { pais: "Egipto", capital: "El Cairo", continente: "África", x: 250, y: 75 },
  { pais: "Marruecos", capital: "Rabat", continente: "África", x: 95, y: 85 },
  { pais: "Argelia", capital: "Argel", continente: "África", x: 135, y: 95 },
  { pais: "Etiopía", capital: "Adís Abeba", continente: "África", x: 290, y: 170 },
  { pais: "Kenia", capital: "Nairobi", continente: "África", x: 300, y: 210 },
  { pais: "Senegal", capital: "Dakar", continente: "África", x: 85, y: 150 },
  { pais: "Ghana", capital: "Acra", continente: "África", x: 130, y: 190 },
  { pais: "Nigeria", capital: "Abuya", continente: "África", x: 165, y: 190 },
  { pais: "Angola", capital: "Luanda", continente: "África", x: 220, y: 255 },

  // AMÉRICA
  { pais: "Estados Unidos", capital: "Washington D. C.", continente: "América", x: 150, y: 90 },
  { pais: "Canadá", capital: "Ottawa", continente: "América", x: 120, y: 50 },
  { pais: "México", capital: "Ciudad de México", continente: "América", x: 110, y: 150 },
  { pais: "Argentina", capital: "Buenos Aires", continente: "América", x: 320, y: 275 },
  { pais: "Chile", capital: "Santiago", continente: "América", x: 255, y: 250 },
  { pais: "Perú", capital: "Lima", continente: "América", x: 255, y: 200 },
  { pais: "Colombia", capital: "Bogotá", continente: "América", x: 205, y: 175 },
  { pais: "Brasil", capital: "Brasilia", continente: "América", x: 290, y: 200 },
  { pais: "Uruguay", capital: "Montevideo", continente: "América", x: 325, y: 240 },
  { pais: "Paraguay", capital: "Asunción", continente: "América", x: 300, y: 220 },

  // OCEANÍA
  { pais: "Australia", capital: "Canberra", continente: "Oceanía", x: 240, y: 170 },
  { pais: "Nueva Zelanda", capital: "Wellington", continente: "Oceanía", x: 380, y: 230 }
];

const mapasContinente = {
  "Europa": `
    <path class="continent-shape" d="M55 225
      L60 175 L90 125 L125 95 L175 70 L250 72 L315 100 L340 145
      L330 185 L295 220 L235 248 L155 255 L100 245 Z" />
  `,
  "Asia": `
    <path class="continent-shape" d="M70 165
      L95 110 L145 90 L220 75 L310 70 L390 90 L445 125 L452 170
      L430 200 L390 215 L360 245 L310 255 L250 235 L205 190 L165 195
      L120 178 Z" />
  `,
  "África": `
    <path class="continent-shape" d="M110 55
      L180 45 L250 60 L300 105 L315 155 L302 225 L255 285 L195 300
      L150 270 L122 225 L108 160 L120 105 Z" />
  `,
  "América": `
    <path class="continent-shape" d="M95 30
      L145 28 L198 45 L220 75 L205 110 L180 140 L178 168 L208 172
      L248 165 L285 182 L310 218 L320 255 L310 292 L285 300 L258 275
      L245 235 L222 200 L190 180 L155 145 L125 105 L102 70 Z" />
  `,
  "Oceanía": `
    <path class="continent-shape" d="M165 170
      L195 145 L245 138 L285 152 L302 182 L290 212 L255 225 L210 220
      L175 205 L160 185 Z" />
    <path class="continent-shape" d="M365 215
      L385 205 L398 225 L388 248 L370 238 Z" />
  `
};

// ELEMENTOS HTML
const pantallaInicio = document.getElementById("inicio");
const pantallaJuego = document.getElementById("juego");

const botonCapitales = document.getElementById("btn-capitales");
const botonPaises = document.getElementById("btn-paises");

const textoPregunta = document.getElementById("pregunta");
const contenedorRespuestas = document.getElementById("respuestas");
const resultado = document.getElementById("resultado");
const botonSiguiente = document.getElementById("siguiente");

const textoNumeroPregunta = document.getElementById("numero-pregunta");
const textoAciertos = document.getElementById("aciertos");
const textoFallos = document.getElementById("fallos");

const mapaError = document.getElementById("mapa-error");
const mapaTitulo = document.getElementById("mapa-titulo");
const mapaSvg = document.getElementById("mapa-svg");

// ESTADO DEL JUEGO
let preguntaActual = null;
let numeroPregunta = 0;
let aciertos = 0;
let fallos = 0;
let yaRespondida = false;
let modoActual = "capitales";

// EVENTOS
botonCapitales.addEventListener("click", () => iniciarJuego("capitales"));
botonPaises.addEventListener("click", () => iniciarJuego("paises"));
botonSiguiente.addEventListener("click", generarPregunta);

// INICIAR JUEGO
function iniciarJuego(modo) {
  modoActual = modo;

  pantallaInicio.classList.add("oculto");
  pantallaJuego.classList.remove("oculto");

  numeroPregunta = 0;
  aciertos = 0;
  fallos = 0;

  actualizarMarcador();
  generarPregunta();
}

// GENERAR PREGUNTA
function generarPregunta() {
  yaRespondida = false;
  numeroPregunta++;

  resultado.innerHTML = "";
  botonSiguiente.classList.add("oculto");
  contenedorRespuestas.innerHTML = "";
  ocultarMapa();

  preguntaActual = paises[Math.floor(Math.random() * paises.length)];

  textoNumeroPregunta.textContent =
    `Pregunta ${numeroPregunta} · ${modoActual === "capitales" ? "Capitales" : "Países"}`;

  if (modoActual === "capitales") {
    textoPregunta.textContent = `¿Cuál es la capital de ${preguntaActual.pais}?`;
  } else {
    textoPregunta.textContent = `¿A qué país pertenece la capital ${preguntaActual.capital}?`;
  }

  const respuestas = generarRespuestas();

  respuestas.forEach((respuesta) => {
    const boton = document.createElement("button");
    boton.textContent = respuesta;

    boton.addEventListener("click", () => {
      comprobarRespuesta(respuesta, boton);
    });

    contenedorRespuestas.appendChild(boton);
  });
}

// GENERAR 4 OPCIONES
function generarRespuestas() {
  const respuestas = [];
  const correcta = obtenerRespuestaCorrecta();

  respuestas.push(correcta);

  while (respuestas.length < 4) {
    const paisAleatorio = paises[Math.floor(Math.random() * paises.length)];
    const opcion = modoActual === "capitales" ? paisAleatorio.capital : paisAleatorio.pais;

    if (!respuestas.includes(opcion)) {
      respuestas.push(opcion);
    }
  }

  return mezclar(respuestas);
}

// COMPROBAR RESPUESTA
function comprobarRespuesta(respuestaSeleccionada, botonSeleccionado) {
  if (yaRespondida) return;

  yaRespondida = true;

  const correcta = obtenerRespuestaCorrecta();
  const botones = contenedorRespuestas.querySelectorAll("button");

  botones.forEach((boton) => {
    boton.disabled = true;

    if (boton.textContent === correcta) {
      boton.classList.add("correcta");
    }
  });

  if (respuestaSeleccionada === correcta) {
    aciertos++;

    if (modoActual === "capitales") {
      resultado.innerHTML = `
        ✅ Correcto.<br>
        <strong>${preguntaActual.pais}</strong> → ${preguntaActual.capital}
      `;
    } else {
      resultado.innerHTML = `
        ✅ Correcto.<br>
        <strong>${preguntaActual.capital}</strong> → ${preguntaActual.pais}
      `;
    }
  } else {
    fallos++;
    botonSeleccionado.classList.add("incorrecta");

    if (modoActual === "capitales") {
      resultado.innerHTML = `
        ❌ Incorrecto.<br><br>
        La capital de <strong>${preguntaActual.pais}</strong> es <strong>${preguntaActual.capital}</strong>.<br>
        🌍 Continente: ${preguntaActual.continente}
      `;
    } else {
      resultado.innerHTML = `
        ❌ Incorrecto.<br><br>
        La capital <strong>${preguntaActual.capital}</strong> pertenece a <strong>${preguntaActual.pais}</strong>.<br>
        🌍 Continente: ${preguntaActual.continente}
      `;
    }

    mostrarMapaError(preguntaActual);
  }

  actualizarMarcador();
  botonSiguiente.classList.remove("oculto");
}

// OBTENER RESPUESTA CORRECTA
function obtenerRespuestaCorrecta() {
  return modoActual === "capitales"
    ? preguntaActual.capital
    : preguntaActual.pais;
}

// MARCADOR
function actualizarMarcador() {
  textoAciertos.textContent = aciertos;
  textoFallos.textContent = fallos;
}

// MAPA CUANDO FALLA
function mostrarMapaError(paisInfo) {
  mapaError.classList.remove("oculto");
  mapaTitulo.textContent = `${paisInfo.pais} · ${paisInfo.continente}`;
  mapaSvg.innerHTML = crearMapaSVG(paisInfo);
}

function ocultarMapa() {
  mapaError.classList.add("oculto");
  mapaTitulo.textContent = "";
  mapaSvg.innerHTML = "";
}

function crearMapaSVG(paisInfo) {
  const paisesContinente = paises.filter(
    (p) => p.continente === paisInfo.continente
  );

  const otrosPuntos = paisesContinente
    .filter((p) => p.pais !== paisInfo.pais)
    .map(
      (p) => `<circle class="country-dot" cx="${p.x}" cy="${p.y}" r="4"></circle>`
    )
    .join("");

  const labelX = paisInfo.x > 380 ? paisInfo.x - 12 : paisInfo.x + 14;
  const textAnchor = paisInfo.x > 380 ? "end" : "start";
  const labelY = paisInfo.y < 35 ? paisInfo.y + 22 : paisInfo.y - 14;

  return `
    <svg viewBox="0 0 500 320" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Mapa de ${paisInfo.continente}">
      <rect class="map-bg" x="8" y="8" width="484" height="304" rx="18"></rect>

      <text x="24" y="34" class="continent-title">${escaparHTML(paisInfo.continente)}</text>

      ${mapasContinente[paisInfo.continente] || ""}

      ${otrosPuntos}

      <circle class="target-ring" cx="${paisInfo.x}" cy="${paisInfo.y}" r="16"></circle>
      <circle class="target-dot" cx="${paisInfo.x}" cy="${paisInfo.y}" r="7"></circle>

      <text
        x="${labelX}"
        y="${labelY}"
        text-anchor="${textAnchor}"
        class="target-label"
      >
        ${escaparHTML(paisInfo.pais)}
      </text>
    </svg>
  `;
}

// UTILIDADES
function mezclar(array) {
  const copia = [...array];

  for (let i = copia.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [copia[i], copia[j]] = [copia[j], copia[i]];
  }

  return copia;
}

function escaparHTML(texto) {
  return texto
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#039;");
}
