// ==========================================
// GEOTRAINER - MARES Y OCÉANOS
// ==========================================

const MARES_DATA = [
  {
    id: "pacifico",
    nombre: "Océano Pacífico",
    tipo: "océano",
    region: "Entre Asia y Oceanía al oeste y América al este.",
    pistas: [
      "Es el océano más extenso de la Tierra.",
      "Separa Asia y Oceanía de América.",
      "En él se encuentra la Fosa de las Marianas."
    ],
    paises: []
  },
  {
    id: "atlantico",
    nombre: "Océano Atlántico",
    tipo: "océano",
    region: "Entre América y Europa-África.",
    pistas: [
      "Separa América de Europa y África.",
      "El Mediterráneo comunica con él por Gibraltar.",
      "Es el segundo océano más grande."
    ],
    paises: []
  },
  {
    id: "indico",
    nombre: "Océano Índico",
    tipo: "océano",
    region: "Entre África, Asia y Australia.",
    pistas: [
      "Se extiende entre África, Asia y Australia.",
      "La India se proyecta hacia su parte septentrional.",
      "Incluye grandes rutas marítimas del golfo Pérsico hacia Asia."
    ],
    paises: []
  },
  {
    id: "artico",
    nombre: "Océano Ártico",
    tipo: "océano",
    region: "Alrededor del Polo Norte.",
    pistas: [
      "Rodea el Polo Norte.",
      "Es el menor y menos profundo de los océanos.",
      "Está bordeado por América del Norte, Europa y Asia."
    ],
    paises: []
  },
  {
    id: "austral",
    nombre: "Océano Austral",
    tipo: "océano",
    region: "Rodea la Antártida.",
    pistas: [
      "Rodea completamente la Antártida.",
      "Sus aguas conectan los océanos Pacífico, Atlántico e Índico.",
      "La corriente circumpolar antártica domina su circulación."
    ],
    paises: []
  },
  {
    id: "mediterraneo",
    nombre: "Mar Mediterráneo",
    tipo: "mar",
    region: "Entre Europa, África y Asia.",
    pistas: [
      "Se encuentra entre Europa, África y Asia.",
      "Comunica con el Atlántico por el estrecho de Gibraltar.",
      "Fue el gran espacio marítimo de fenicios, griegos y romanos."
    ],
    paises: ["España","Francia","Mónaco","Italia","Malta","Eslovenia","Croacia","Bosnia y Herzegovina","Montenegro","Albania","Grecia","Turquía","Chipre","Siria","Líbano","Israel","Palestina","Egipto","Libia","Túnez","Argelia","Marruecos"]
  },
  {
    id: "caribe",
    nombre: "Mar Caribe",
    tipo: "mar",
    region: "Al este de América Central y al norte de Sudamérica.",
    pistas: [
      "Está al este de América Central.",
      "Las Antillas delimitan gran parte de su borde oriental y septentrional.",
      "Baña costas de Colombia, Venezuela, Cuba y numerosos estados insulares."
    ],
    paises: ["México","Belice","Guatemala","Honduras","Nicaragua","Costa Rica","Panamá","Colombia","Venezuela","Cuba","Jamaica","Haití","República Dominicana","Trinidad y Tobago","Granada","San Vicente y las Granadinas","Santa Lucía","Dominica","Antigua y Barbuda","San Cristóbal y Nieves"]
  },
  {
    id: "negro",
    nombre: "Mar Negro",
    tipo: "mar",
    region: "Entre Europa oriental y Anatolia.",
    pistas: [
      "Se encuentra entre Europa oriental y Turquía.",
      "Comunica con el Mediterráneo a través del Bósforo, el mar de Mármara y los Dardanelos.",
      "Ucrania, Rusia, Georgia, Turquía, Bulgaria y Rumanía tienen costa en él."
    ],
    paises: ["Turquía","Bulgaria","Rumanía","Ucrania","Rusia","Georgia"]
  },
  {
    id: "rojo",
    nombre: "Mar Rojo",
    tipo: "mar",
    region: "Entre el noreste de África y la península arábiga.",
    pistas: [
      "Separa el noreste de África de la península arábiga.",
      "Comunica con el Mediterráneo por el canal de Suez.",
      "Su salida meridional es el estrecho de Bab el-Mandeb."
    ],
    paises: ["Egipto","Sudán","Eritrea","Yibuti","Arabia Saudí","Yemen","Israel","Jordania"]
  },
  {
    id: "baltico",
    nombre: "Mar Báltico",
    tipo: "mar",
    region: "Norte de Europa.",
    pistas: [
      "Se encuentra en el norte de Europa.",
      "Suecia y Finlandia ocupan buena parte de su ribera septentrional.",
      "Polonia, Alemania y los estados bálticos se abren a sus aguas."
    ],
    paises: ["Dinamarca","Alemania","Polonia","Lituania","Letonia","Estonia","Rusia","Finlandia","Suecia"]
  },
  {
    id: "norte",
    nombre: "Mar del Norte",
    tipo: "mar",
    region: "Entre Gran Bretaña, Escandinavia y Europa continental.",
    pistas: [
      "Separa Gran Bretaña de parte de Europa continental y Escandinavia.",
      "Tiene importantes yacimientos de petróleo y gas.",
      "Países Bajos, Alemania, Dinamarca, Noruega y Reino Unido se asoman a sus aguas."
    ],
    paises: ["Reino Unido","Noruega","Dinamarca","Alemania","Países Bajos","Bélgica"]
  },
  {
    id: "arabigo",
    nombre: "Mar Arábigo",
    tipo: "mar",
    region: "Noroeste del océano Índico.",
    pistas: [
      "Forma parte del noroeste del océano Índico.",
      "La península arábiga queda al oeste y la India al este.",
      "Pakistán, India, Omán y Yemen tienen costa en sus aguas."
    ],
    paises: ["India","Pakistán","Irán","Omán","Yemen","Somalia"]
  },
  {
    id: "china-sur",
    nombre: "Mar de China Meridional",
    tipo: "mar",
    region: "Sudeste asiático.",
    pistas: [
      "Se sitúa entre China, Indochina, Borneo y Filipinas.",
      "Es una de las rutas marítimas comerciales más importantes del planeta.",
      "Sus islas y arrecifes son objeto de disputas territoriales."
    ],
    paises: ["China","Taiwán","Filipinas","Vietnam","Camboya","Tailandia","Malasia","Brunéi","Indonesia"]
  },
  {
    id: "china-oriental",
    nombre: "Mar de China Oriental",
    tipo: "mar",
    region: "Entre China, Corea, Japón y Taiwán.",
    pistas: [
      "Se encuentra al este de China.",
      "Japón se sitúa al este y Taiwán al sur.",
      "Incluye las islas Senkaku/Diaoyu, objeto de disputa."
    ],
    paises: ["China","Japón","Corea del Sur","Taiwán"]
  },
  {
    id: "japon",
    nombre: "Mar del Japón",
    tipo: "mar",
    region: "Entre Japón, Corea y Rusia.",
    pistas: [
      "Separa el archipiélago japonés del continente asiático.",
      "Rusia y las dos Coreas tienen costa en su ribera occidental.",
      "Japón ocupa prácticamente todo su borde oriental."
    ],
    paises: ["Japón","Rusia","Corea del Norte","Corea del Sur"]
  },
  {
    id: "bering",
    nombre: "Mar de Bering",
    tipo: "mar",
    region: "Entre Alaska y Siberia.",
    pistas: [
      "Se encuentra entre Alaska y Siberia.",
      "Al norte comunica con el océano Ártico por el estrecho de Bering.",
      "Estados Unidos y Rusia se enfrentan a través de sus aguas."
    ],
    paises: ["Estados Unidos","Rusia"]
  },
  {
    id: "ojotsk",
    nombre: "Mar de Ojotsk",
    tipo: "mar",
    region: "Noroeste del Pacífico, junto al extremo oriental de Rusia.",
    pistas: [
      "Se encuentra al norte de Japón.",
      "La península de Kamchatka cierra gran parte de su borde oriental.",
      "La mayor parte de su costa pertenece a Rusia."
    ],
    paises: ["Rusia","Japón"]
  },
  {
    id: "adriatico",
    nombre: "Mar Adriático",
    tipo: "mar",
    region: "Entre Italia y los Balcanes.",
    pistas: [
      "Separa la península itálica de los Balcanes.",
      "Venecia se encuentra en su extremo septentrional.",
      "Croacia posee una costa muy recortada sobre sus aguas."
    ],
    paises: ["Italia","Eslovenia","Croacia","Bosnia y Herzegovina","Montenegro","Albania"]
  },
  {
    id: "egeo",
    nombre: "Mar Egeo",
    tipo: "mar",
    region: "Entre Grecia y Turquía.",
    pistas: [
      "Se encuentra entre Grecia y Turquía.",
      "Está salpicado por numerosas islas griegas.",
      "Al norte comunica con los Dardanelos."
    ],
    paises: ["Grecia","Turquía"]
  },
  {
    id: "jonico",
    nombre: "Mar Jónico",
    tipo: "mar",
    region: "Entre el sur de Italia, Albania y Grecia.",
    pistas: [
      "Se sitúa al sur del Adriático.",
      "Baña el sur de Italia y el oeste de Grecia.",
      "Las islas Jónicas se encuentran en sus aguas."
    ],
    paises: ["Italia","Albania","Grecia"]
  },
  {
    id: "tirreno",
    nombre: "Mar Tirreno",
    tipo: "mar",
    region: "Al oeste de la península itálica.",
    pistas: [
      "Se encuentra al oeste de Italia.",
      "Queda entre la península itálica, Córcega, Cerdeña y Sicilia.",
      "Roma se encuentra relativamente cerca de su costa."
    ],
    paises: ["Italia","Francia"]
  },
  {
    id: "noruega",
    nombre: "Mar de Noruega",
    tipo: "mar",
    region: "Atlántico norte, entre Noruega e Islandia.",
    pistas: [
      "Se encuentra al oeste de Noruega.",
      "Conecta el Atlántico norte con mares del Ártico.",
      "Islandia queda hacia su borde occidental."
    ],
    paises: ["Noruega","Islandia"]
  },
  {
    id: "barents",
    nombre: "Mar de Barents",
    tipo: "mar",
    region: "Océano Ártico, al norte de Noruega y Rusia.",
    pistas: [
      "Forma parte del océano Ártico.",
      "Se encuentra al norte de Noruega y Rusia.",
      "El archipiélago de Svalbard delimita parte de su borde occidental."
    ],
    paises: ["Noruega","Rusia"]
  },
  {
    id: "coral",
    nombre: "Mar del Coral",
    tipo: "mar",
    region: "Pacífico suroccidental, frente al noreste de Australia.",
    pistas: [
      "Se encuentra frente al noreste de Australia.",
      "La Gran Barrera de Coral se extiende en sus márgenes.",
      "Papúa Nueva Guinea y varias islas de Melanesia están próximas."
    ],
    paises: ["Australia","Papúa Nueva Guinea","Islas Salomón","Vanuatu"]
  },
  {
    id: "tasmania",
    nombre: "Mar de Tasmania",
    tipo: "mar",
    region: "Entre Australia y Nueva Zelanda.",
    pistas: [
      "Se encuentra entre Australia y Nueva Zelanda.",
      "Forma parte del Pacífico suroccidental.",
      "La isla de Tasmania queda cerca de su borde occidental."
    ],
    paises: ["Australia","Nueva Zelanda"]
  },
  {
    id: "caspio",
    nombre: "Mar Caspio",
    tipo: "mar interior",
    region: "Entre Europa oriental y Asia occidental.",
    pistas: [
      "Es la mayor masa de agua interior cerrada del mundo.",
      "No tiene salida natural al océano.",
      "Rusia, Kazajistán, Turkmenistán, Irán y Azerbaiyán tienen costa en él."
    ],
    paises: ["Rusia","Kazajistán","Turkmenistán","Irán","Azerbaiyán"]
  }
];

const MARES_TIEMPO = 10;

const maresMenu = document.getElementById("mares-menu");
const maresConfig = document.getElementById("mares-config");
const maresJuego = document.getElementById("mares-juego");
const maresFin = document.getElementById("mares-fin");
const maresPausa = document.getElementById("mares-pausa");

const maresConfigTitulo = document.getElementById("mares-config-titulo");
const maresConfigDescripcion = document.getElementById("mares-config-descripcion");
const maresTipoPartida = document.getElementById("mares-tipo-partida");
const maresNumeroPregunta = document.getElementById("mares-numero-pregunta");
const maresTemporizador = document.getElementById("mares-temporizador");
const maresAciertosTexto = document.getElementById("mares-aciertos");
const maresFallosTexto = document.getElementById("mares-fallos");
const maresPregunta = document.getElementById("mares-pregunta");
const maresPistas = document.getElementById("mares-pistas");
const maresRespuestas = document.getElementById("mares-respuestas");
const maresFeedback = document.getElementById("mares-feedback");
const maresSiguiente = document.getElementById("mares-siguiente");
const maresPausaTexto = document.getElementById("mares-pausa-texto");
const maresResultadoExamen = document.getElementById("mares-resultado-examen");
const maresRevisionExamen = document.getElementById("mares-revision-examen");

let maresModo = "pistas";
let maresTipo = "entrenamiento";
let maresPlan = [];
let maresIndice = 0;
let maresActual = null;
let maresAciertos = 0;
let maresFallos = 0;
let maresResultados = [];
let maresCola = [];
let maresContestadas = 0;
let maresPausaPendiente = false;
let maresTimer = null;
let maresTiempo = MARES_TIEMPO;
let maresUltimoExamen = null;
let maresRepaso = false;

function mezclarMares(lista) {
  const copia = [...lista];
  for (let i = copia.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [copia[i], copia[j]] = [copia[j], copia[i]];
  }
  return copia;
}

function escaparMares(texto) {
  return String(texto ?? "")
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#039;");
}

function bancoMares() {
  return maresModo === "costa"
    ? MARES_DATA.filter(m => m.paises.length > 0)
    : [...MARES_DATA];
}

function ocultarPantallasMares() {
  cancelarTimerMares();
  [maresMenu, maresConfig, maresJuego, maresFin].forEach(p => {
    if (p) p.classList.add("oculto");
  });
  if (maresPausa) maresPausa.classList.add("oculto");
}

function abrirMaresMenu() {
  ocultarTodasLasPantallas();
  maresMenu.classList.remove("oculto");
}

function abrirConfigMares(modo) {
  maresModo = modo;
  ocultarTodasLasPantallas();
  maresConfig.classList.remove("oculto");

  if (modo === "pistas") {
    maresConfigTitulo.textContent = "Adivina el mar u océano";
    maresConfigDescripcion.textContent =
      "Lee tres pistas geográficas e identifica la masa de agua.";
  } else {
    maresConfigTitulo.textContent = "Mar → País";
    maresConfigDescripcion.textContent =
      "Elige un país que tenga costa en el mar indicado.";
  }
}

function planMares(cantidad, evitar = []) {
  const evitarSet = new Set(evitar);
  const banco = bancoMares();

  return [
    ...mezclarMares(banco.filter(x => !evitarSet.has(x.id))),
    ...mezclarMares(banco.filter(x => evitarSet.has(x.id)))
  ].slice(0, Math.min(cantidad, banco.length));
}

function iniciarMares(tipo, cantidad = null, planExacto = null) {
  maresTipo = tipo;
  maresIndice = 0;
  maresAciertos = 0;
  maresFallos = 0;
  maresResultados = [];
  maresCola = [];
  maresContestadas = 0;
  maresPausaPendiente = false;
  maresRepaso = false;

  maresAciertosTexto.textContent = "0";
  maresFallosTexto.textContent = "0";

  maresPlan = tipo === "examen"
    ? (planExacto ? JSON.parse(JSON.stringify(planExacto)) : planMares(cantidad))
    : [];

  ocultarTodasLasPantallas();
  maresJuego.classList.remove("oculto");
  mostrarPreguntaMares();
}

function siguienteEntrenamientoMares() {
  if (maresCola.length === 0) {
    maresCola = mezclarMares(bancoMares());
  }
  return maresCola.shift();
}

function crearOpcionesMares(actual) {
  if (maresModo === "pistas") {
    const distractores = mezclarMares(
      MARES_DATA.filter(x => x.id !== actual.id)
    ).slice(0, 3);

    return mezclarMares([actual, ...distractores]).map(x => ({
      valor: x.id,
      texto: x.nombre
    }));
  }

  const correcto = mezclarMares(actual.paises)[0];

  const todosPaises = [...new Set(
    MARES_DATA.flatMap(x => x.paises)
  )];

  const distractores = mezclarMares(
    todosPaises.filter(p => !actual.paises.includes(p))
  ).slice(0, 3);

  return mezclarMares([
    { valor: correcto, texto: correcto },
    ...distractores.map(p => ({ valor: p, texto: p }))
  ]);
}

function mostrarPreguntaMares() {
  cancelarTimerMares();

  maresFeedback.innerHTML = "";
  maresFeedback.classList.remove("mares-respondida");
  maresFeedback.classList.add("oculto");
  maresSiguiente.classList.add("oculto");
  maresRespuestas.innerHTML = "";

  maresActual = maresTipo === "entrenamiento"
    ? siguienteEntrenamientoMares()
    : maresPlan[maresIndice];

  if (!maresActual) {
    finalizarMares();
    return;
  }

  maresTipoPartida.textContent =
    `${maresModo === "pistas" ? "Adivina el mar" : "Mar → País"} · ${maresTipo === "examen" ? "Examen" : "Entrenamiento"}`;

  maresNumeroPregunta.textContent = maresTipo === "examen"
    ? `Pregunta ${maresIndice + 1} de ${maresPlan.length}`
    : `Pregunta ${maresContestadas + 1}`;

  if (maresModo === "pistas") {
    maresPregunta.textContent = "¿Qué mar u océano es?";
    maresPistas.innerHTML = maresActual.pistas
      .map((p, i) => `<div><strong>${i + 1}.</strong> ${escaparMares(p)}</div>`)
      .join("");
    maresPistas.classList.remove("oculto");
  } else {
    maresPregunta.innerHTML =
      `¿Cuál de estos países tiene costa en el <strong>${escaparMares(maresActual.nombre)}</strong>?`;
    maresPistas.classList.add("oculto");
  }

  const opciones = crearOpcionesMares(maresActual);

  opciones.forEach(op => {
    const b = document.createElement("button");
    b.type = "button";
    b.textContent = op.texto;
    b.dataset.valor = op.valor;
    b.addEventListener("click", () => responderMares(op.valor, b));
    maresRespuestas.appendChild(b);
  });

  iniciarTimerMares();
}

function respuestaCorrectaMares(valor) {
  if (maresModo === "pistas") {
    return valor === maresActual.id;
  }
  return maresActual.paises.includes(valor);
}

function responderMares(valor, boton = null, tiempoAgotado = false) {
  if (maresFeedback.classList.contains("mares-respondida")) return;

  cancelarTimerMares();
  maresFeedback.classList.add("mares-respondida");

  const acierto = !tiempoAgotado && respuestaCorrectaMares(valor);

  if (acierto) maresAciertos++;
  else maresFallos++;

  maresAciertosTexto.textContent = String(maresAciertos);
  maresFallosTexto.textContent = String(maresFallos);

  [...maresRespuestas.children].forEach(b => {
    b.disabled = true;

    if (
      (maresModo === "pistas" && b.dataset.valor === maresActual.id) ||
      (maresModo === "costa" && maresActual.paises.includes(b.dataset.valor))
    ) {
      b.classList.add("respuesta-correcta");
    }
  });

  if (!acierto && boton) {
    boton.classList.add("respuesta-incorrecta");
  }

  if (maresTipo === "examen") {
    maresResultados.push({
      item: JSON.parse(JSON.stringify(maresActual)),
      respuesta: valor,
      acierto,
      tiempoAgotado
    });
  } else {
    maresContestadas++;
    if (maresContestadas > 0 && maresContestadas % 15 === 0) {
      maresPausaPendiente = true;
    }
  }

  const titulo = tiempoAgotado
    ? "⏱ Tiempo agotado"
    : acierto
      ? "✅ Correcto"
      : "❌ Incorrecto";

  maresFeedback.innerHTML = `
    <div class="mares-feedback-titulo">${titulo}</div>
    <div class="mares-ficha">
      <strong>${escaparMares(maresActual.nombre)}</strong>
      <span>${escaparMares(maresActual.region)}</span>
      <small>${escaparMares(maresActual.pistas[0])}</small>
    </div>
  `;
  maresFeedback.classList.remove("oculto");

  maresSiguiente.classList.remove("oculto");
  maresSiguiente.textContent =
    maresTipo === "examen" && maresIndice === maresPlan.length - 1
      ? "Ver resultado →"
      : maresPausaPendiente
        ? "Continuar práctica →"
        : "Siguiente pregunta →";
}

function iniciarTimerMares() {
  if (maresTipo !== "examen") {
    maresTemporizador.classList.add("oculto");
    return;
  }

  maresTiempo = MARES_TIEMPO;
  maresTemporizador.classList.remove("oculto");
  actualizarTimerMares();

  maresTimer = setInterval(() => {
    maresTiempo--;
    actualizarTimerMares();

    if (maresTiempo <= 0) {
      clearInterval(maresTimer);
      maresTimer = null;
      responderMares(null, null, true);
    }
  }, 1000);
}

function actualizarTimerMares() {
  maresTemporizador.textContent = `⏱ ${maresTiempo} s`;
  maresTemporizador.classList.toggle("urgente", maresTiempo <= 3);
}

function cancelarTimerMares() {
  if (maresTimer !== null) {
    clearInterval(maresTimer);
    maresTimer = null;
  }
  if (maresTemporizador) {
    maresTemporizador.classList.add("oculto");
    maresTemporizador.classList.remove("urgente");
  }
}

function avanzarMares() {
  maresFeedback.classList.remove("mares-respondida");

  if (maresTipo === "entrenamiento") {
    if (maresPausaPendiente) {
      maresPausaTexto.textContent =
        `Llevas ${maresContestadas} preguntas: ${maresAciertos} correctas y ${maresFallos} incorrectas. ¿Quieres seguir practicando?`;
      maresPausa.classList.remove("oculto");
      return;
    }

    mostrarPreguntaMares();
    return;
  }

  if (maresIndice >= maresPlan.length - 1) {
    finalizarMares();
    return;
  }

  maresIndice++;
  mostrarPreguntaMares();
}

function finalizarMares() {
  cancelarTimerMares();
  ocultarTodasLasPantallas();
  maresFin.classList.remove("oculto");

  const total = maresResultados.length;
  const porcentaje = total
    ? Math.round((maresAciertos / total) * 100)
    : 0;

  maresResultadoExamen.innerHTML = `
    <div class="nota-grande">${maresAciertos} / ${total}</div>
    <div class="detalle-examen">${porcentaje}% de aciertos</div>
  `;

  maresRevisionExamen.innerHTML = `
    <div class="revision-examen">
      <h3>📚 Revisión del examen</h3>
      <div class="revision-lista">
        ${maresResultados.map((r, i) => `
          <div class="revision-item ${r.acierto ? "acierto" : "fallo"}">
            <div class="revision-cabecera">
              <span>Pregunta ${i + 1}</span>
              <span>${r.acierto ? "✅ Correcta" : "❌ Incorrecta"}</span>
            </div>
            <div class="mares-revision-titulo">
              <strong>${escaparMares(r.item.nombre)}</strong>
            </div>
            <div>${escaparMares(r.item.region)}</div>
          </div>
        `).join("")}
      </div>
    </div>
  `;

  const falladas = maresResultados.filter(r => !r.acierto);
  const btn = document.getElementById("mares-repasar-fallos");

  if (falladas.length) {
    btn.textContent = `🎯 Repasar solo mis fallos (${falladas.length})`;
    btn.classList.remove("oculto");
  } else {
    btn.classList.add("oculto");
  }

  if (!maresRepaso) {
    maresUltimoExamen = {
      modo: maresModo,
      plan: JSON.parse(JSON.stringify(maresPlan))
    };
  }
}

document.getElementById("btn-mares").addEventListener("click", abrirMaresMenu);
document.getElementById("volver-mares-orografia").addEventListener("click", mostrarMapasOrografiaMenu);
document.getElementById("volver-mares-menu").addEventListener("click", abrirMaresMenu);
document.getElementById("volver-mares-desde-juego").addEventListener("click", abrirMaresMenu);
document.getElementById("volver-mares-fin").addEventListener("click", abrirMaresMenu);
document.getElementById("mares-volver-menu").addEventListener("click", abrirMaresMenu);

document.querySelectorAll(".mares-modo").forEach(b => {
  b.addEventListener("click", () => abrirConfigMares(b.dataset.maresModo));
});

document.getElementById("mares-entrenamiento").addEventListener("click", () => iniciarMares("entrenamiento"));
document.getElementById("mares-examen10").addEventListener("click", () => iniciarMares("examen", 10));
document.getElementById("mares-examen20").addEventListener("click", () => iniciarMares("examen", 20));
maresSiguiente.addEventListener("click", avanzarMares);

document.getElementById("mares-continuar").addEventListener("click", () => {
  maresPausaPendiente = false;
  maresPausa.classList.add("oculto");
  mostrarPreguntaMares();
});

document.getElementById("mares-salir").addEventListener("click", abrirMaresMenu);

document.getElementById("mares-repetir-examen").addEventListener("click", () => {
  if (!maresUltimoExamen) return;
  maresModo = maresUltimoExamen.modo;
  iniciarMares("examen", maresUltimoExamen.plan.length, maresUltimoExamen.plan);
});

document.getElementById("mares-nuevo-examen").addEventListener("click", () => {
  const cantidad = maresUltimoExamen ? maresUltimoExamen.plan.length : 10;
  const evitar = maresUltimoExamen ? maresUltimoExamen.plan.map(x => x.id) : [];
  iniciarMares("examen", cantidad, planMares(cantidad, evitar));
});

document.getElementById("mares-repasar-fallos").addEventListener("click", () => {
  const plan = maresResultados.filter(r => !r.acierto).map(r => r.item);
  if (!plan.length) return;
  iniciarMares("examen", plan.length, plan);
  maresRepaso = true;
});
