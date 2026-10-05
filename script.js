const paises = [
  { pais: "España", capital: "Madrid", continente: "Europa" },
  { pais: "Francia", capital: "París", continente: "Europa" },
  { pais: "Italia", capital: "Roma", continente: "Europa" },
  { pais: "Portugal", capital: "Lisboa", continente: "Europa" },
  { pais: "Alemania", capital: "Berlín", continente: "Europa" },
  { pais: "Reino Unido", capital: "Londres", continente: "Europa" },
  { pais: "Irlanda", capital: "Dublín", continente: "Europa" },
  { pais: "Bélgica", capital: "Bruselas", continente: "Europa" },
  { pais: "Países Bajos", capital: "Ámsterdam", continente: "Europa" },
  { pais: "Suiza", capital: "Berna", continente: "Europa" },
  { pais: "Austria", capital: "Viena", continente: "Europa" },
  { pais: "Polonia", capital: "Varsovia", continente: "Europa" },
  { pais: "Grecia", capital: "Atenas", continente: "Europa" },
  { pais: "Noruega", capital: "Oslo", continente: "Europa" },
  { pais: "Suecia", capital: "Estocolmo", continente: "Europa" },
  { pais: "Finlandia", capital: "Helsinki", continente: "Europa" },
  { pais: "Dinamarca", capital: "Copenhague", continente: "Europa" },
  { pais: "Islandia", capital: "Reikiavik", continente: "Europa" },
  { pais: "Croacia", capital: "Zagreb", continente: "Europa" },
  { pais: "Serbia", capital: "Belgrado", continente: "Europa" },

  { pais: "Japón", capital: "Tokio", continente: "Asia" },
  { pais: "China", capital: "Pekín", continente: "Asia" },
  { pais: "India", capital: "Nueva Delhi", continente: "Asia" },
  { pais: "Corea del Sur", capital: "Seúl", continente: "Asia" },
  { pais: "Tailandia", capital: "Bangkok", continente: "Asia" },
  { pais: "Vietnam", capital: "Hanói", continente: "Asia" },
  { pais: "Indonesia", capital: "Yakarta", continente: "Asia" },
  { pais: "Kazajistán", capital: "Astaná", continente: "Asia" },
  { pais: "Uzbekistán", capital: "Taskent", continente: "Asia" },
  { pais: "Kirguistán", capital: "Biskek", continente: "Asia" },
  { pais: "Tayikistán", capital: "Dusambé", continente: "Asia" },
  { pais: "Turkmenistán", capital: "Asjabad", continente: "Asia" },
  { pais: "Mongolia", capital: "Ulán Bator", continente: "Asia" },
  { pais: "Nepal", capital: "Katmandú", continente: "Asia" },
  { pais: "Filipinas", capital: "Manila", continente: "Asia" },

  { pais: "Egipto", capital: "El Cairo", continente: "África" },
  { pais: "Marruecos", capital: "Rabat", continente: "África" },
  { pais: "Argelia", capital: "Argel", continente: "África" },
  { pais: "Etiopía", capital: "Adís Abeba", continente: "África" },
  { pais: "Kenia", capital: "Nairobi", continente: "África" },
  { pais: "Senegal", capital: "Dakar", continente: "África" },
  { pais: "Ghana", capital: "Acra", continente: "África" },
  { pais: "Nigeria", capital: "Abuya", continente: "África" },
  { pais: "Angola", capital: "Luanda", continente: "África" },

  { pais: "Estados Unidos", capital: "Washington D. C.", continente: "América" },
  { pais: "Canadá", capital: "Ottawa", continente: "América" },
  { pais: "México", capital: "Ciudad de México", continente: "América" },
  { pais: "Argentina", capital: "Buenos Aires", continente: "América" },
  { pais: "Chile", capital: "Santiago", continente: "América" },
  { pais: "Perú", capital: "Lima", continente: "América" },
  { pais: "Colombia", capital: "Bogotá", continente: "América" },
  { pais: "Brasil", capital: "Brasilia", continente: "América" },
  { pais: "Uruguay", capital: "Montevideo", continente: "América" },
  { pais: "Paraguay", capital: "Asunción", continente: "América" },

  { pais: "Australia", capital: "Canberra", continente: "Oceanía" },
  { pais: "Nueva Zelanda", capital: "Wellington", continente: "Oceanía" }
];


// ELEMENTOS DE LA PÁGINA

const pantallaInicio = document.getElementById("inicio");
const pantallaJuego = document.getElementById("juego");

const botonCapitales = document.getElementById("btn-capitales");

const textoPregunta = document.getElementById("pregunta");
const contenedorRespuestas = document.getElementById("respuestas");

const resultado = document.getElementById("resultado");
const botonSiguiente = document.getElementById("siguiente");

const textoNumeroPregunta = document.getElementById("numero-pregunta");
const textoAciertos = document.getElementById("aciertos");
const textoFallos = document.getElementById("fallos");


// VARIABLES DEL JUEGO

let preguntaActual = null;

let numeroPregunta = 0;
let aciertos = 0;
let fallos = 0;

let yaRespondida = false;


// EMPEZAR PARTIDA

botonCapitales.addEventListener("click", iniciarJuego);

function iniciarJuego() {

  pantallaInicio.classList.add("oculto");
  pantallaJuego.classList.remove("oculto");

  numeroPregunta = 0;
  aciertos = 0;
  fallos = 0;

  actualizarMarcador();

  generarPregunta();
}


// GENERAR UNA PREGUNTA

function generarPregunta() {

  yaRespondida = false;

  numeroPregunta++;

  resultado.innerHTML = "";
  botonSiguiente.classList.add("oculto");

  contenedorRespuestas.innerHTML = "";

  preguntaActual =
    paises[Math.floor(Math.random() * paises.length)];

  textoPregunta.textContent =
    `¿Cuál es la capital de ${preguntaActual.pais}?`;

  textoNumeroPregunta.textContent =
    `Pregunta ${numeroPregunta}`;

  const respuestas = generarRespuestas(
    preguntaActual.capital
  );

  respuestas.forEach(capital => {

    const boton = document.createElement("button");

    boton.textContent = capital;

    boton.addEventListener("click", () => {

      comprobarRespuesta(
        capital,
        boton
      );

    });

    contenedorRespuestas.appendChild(boton);

  });

}


// CREAR 4 RESPUESTAS

function generarRespuestas(capitalCorrecta) {

  const respuestas = [capitalCorrecta];

  while (respuestas.length < 4) {

    const paisAleatorio =
      paises[Math.floor(Math.random() * paises.length)];

    const capitalAleatoria =
      paisAleatorio.capital;

    if (!respuestas.includes(capitalAleatoria)) {

      respuestas.push(capitalAleatoria);

    }

  }

  return mezclar(respuestas);
}


// COMPROBAR RESPUESTA

function comprobarRespuesta(respuestaSeleccionada, botonSeleccionado) {

  if (yaRespondida) return;

  yaRespondida = true;

  const botones =
    contenedorRespuestas.querySelectorAll("button");

  botones.forEach(boton => {

    boton.disabled = true;

    if (boton.textContent === preguntaActual.capital) {

      boton.classList.add("correcta");

    }

  });


  if (respuestaSeleccionada === preguntaActual.capital) {

    aciertos++;

    resultado.innerHTML = `
      ✅ Correcto.<br>
      <strong>${preguntaActual.pais}</strong>
      → ${preguntaActual.capital}
    `;

  } else {

    fallos++;

    botonSeleccionado.classList.add("incorrecta");

    resultado.innerHTML = `
      ❌ Incorrecto.<br><br>

      <strong>${preguntaActual.pais}</strong>
      → ${preguntaActual.capital}<br>

      🌍 Continente:
      ${preguntaActual.continente}
    `;

  }

  actualizarMarcador();

  botonSiguiente.classList.remove("oculto");

}


// SIGUIENTE PREGUNTA

botonSiguiente.addEventListener("click", generarPregunta);


// ACTUALIZAR MARCADOR

function actualizarMarcador() {

  textoAciertos.textContent = aciertos;
  textoFallos.textContent = fallos;

}


// MEZCLAR RESPUESTAS

function mezclar(array) {

  const copia = [...array];

  for (let i = copia.length - 1; i > 0; i--) {

    const j =
      Math.floor(Math.random() * (i + 1));

    [copia[i], copia[j]] =
      [copia[j], copia[i]];

  }

  return copia;
}
