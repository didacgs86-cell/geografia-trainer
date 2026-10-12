// ==========================================
// GEOTRAINER - MONTAÑAS DEL MUNDO
// ==========================================

const MONTANAS_DATA = [{"id":"everest","nombre":"Everest","paises":["Nepal","China"],"cordillera":"Himalaya","altura":"8.849 m","continente":"Asia","pistas":["Es la cumbre más alta sobre el nivel del mar.","Se encuentra en la frontera entre Nepal y China.","Forma parte del Himalaya."]},{"id":"k2","nombre":"K2","paises":["Pakistán","China"],"cordillera":"Karakórum","altura":"8.611 m","continente":"Asia","pistas":["Es la segunda montaña más alta del mundo.","Se encuentra entre Pakistán y China.","Pertenece al Karakórum."]},{"id":"kanchenjunga","nombre":"Kangchenjunga","paises":["Nepal","India"],"cordillera":"Himalaya","altura":"8.586 m","continente":"Asia","pistas":["Es la tercera cumbre más alta del planeta.","Se encuentra en la frontera entre Nepal e India.","Forma parte del Himalaya oriental."]},{"id":"lhotse","nombre":"Lhotse","paises":["Nepal","China"],"cordillera":"Himalaya","altura":"8.516 m","continente":"Asia","pistas":["Es una de las montañas de más de ocho mil metros.","Está muy próxima al Everest.","Se alza en la frontera entre Nepal y China."]},{"id":"makalu","nombre":"Makalu","paises":["Nepal","China"],"cordillera":"Himalaya","altura":"8.485 m","continente":"Asia","pistas":["Es una de las grandes cumbres del Himalaya.","Se caracteriza por una forma piramidal muy marcada.","Se sitúa entre Nepal y China."]},{"id":"fuji","nombre":"Monte Fuji","paises":["Japón"],"cordillera":"Arco volcánico japonés","altura":"3.776 m","continente":"Asia","pistas":["Es la montaña más alta de Japón.","Es un volcán de silueta casi simétrica.","Se encuentra en la isla de Honshu."]},{"id":"ararat","nombre":"Monte Ararat","paises":["Turquía"],"cordillera":"Altiplano armenio","altura":"5.137 m","continente":"Asia","pistas":["Es un gran volcán del extremo oriental de Turquía.","Su silueta domina la región próxima a Armenia e Irán.","La tradición bíblica lo relaciona con el arca de Noé."]},{"id":"kailash","nombre":"Monte Kailash","paises":["China"],"cordillera":"Gangdise / Transhimalaya","altura":"6.638 m","continente":"Asia","pistas":["Es una montaña sagrada para varias religiones asiáticas.","Se encuentra en el Tíbet occidental.","Está próxima al origen de varios grandes sistemas fluviales de Asia."]},{"id":"aconcagua","nombre":"Aconcagua","paises":["Argentina"],"cordillera":"Andes","altura":"6.961 m","continente":"América del Sur","pistas":["Es la montaña más alta de América.","Está en Argentina, cerca de la frontera con Chile.","Pertenece a los Andes."]},{"id":"chimborazo","nombre":"Chimborazo","paises":["Ecuador"],"cordillera":"Andes","altura":"6.263 m","continente":"América del Sur","pistas":["Es un volcán de Ecuador.","Por el abultamiento ecuatorial, su cima es uno de los puntos de la superficie terrestre más alejados del centro de la Tierra.","Forma parte de los Andes."]},{"id":"cotopaxi","nombre":"Cotopaxi","paises":["Ecuador"],"cordillera":"Andes","altura":"5.897 m","continente":"América del Sur","pistas":["Es uno de los volcanes más conocidos de Ecuador.","Tiene una forma cónica muy característica.","Se encuentra en los Andes, al sur de Quito."]},{"id":"denali","nombre":"Denali","paises":["Estados Unidos"],"cordillera":"Cordillera de Alaska","altura":"6.190 m","continente":"América del Norte","pistas":["Es la montaña más alta de América del Norte.","Se encuentra en Alaska.","Durante décadas fue conocida oficialmente en EE. UU. como Mount McKinley."]},{"id":"logan","nombre":"Monte Logan","paises":["Canadá"],"cordillera":"Montes San Elías","altura":"5.959 m","continente":"América del Norte","pistas":["Es la montaña más alta de Canadá.","Se encuentra en el territorio del Yukón.","Pertenece a los montes San Elías."]},{"id":"elbrus","nombre":"Elbrus","paises":["Rusia"],"cordillera":"Cáucaso","altura":"5.642 m","continente":"Europa","pistas":["Es un volcán situado en el Cáucaso.","Suele considerarse la montaña más alta de Europa.","Se encuentra en Rusia."]},{"id":"mont-blanc","nombre":"Mont Blanc","paises":["Francia","Italia"],"cordillera":"Alpes","altura":"aprox. 4.806 m","continente":"Europa","pistas":["Es una de las cumbres más emblemáticas de los Alpes.","Se alza en la zona fronteriza entre Francia e Italia.","Da nombre al macizo del Mont Blanc."]},{"id":"matterhorn","nombre":"Cervino / Matterhorn","paises":["Suiza","Italia"],"cordillera":"Alpes","altura":"4.478 m","continente":"Europa","pistas":["Su silueta piramidal es una de las más reconocibles de los Alpes.","Se encuentra entre Suiza e Italia.","Zermatt está a sus pies en la vertiente suiza."]},{"id":"olympus","nombre":"Monte Olimpo","paises":["Grecia"],"cordillera":"Macizo del Olimpo","altura":"2.918 m","continente":"Europa","pistas":["Es la montaña más alta de Grecia.","En la mitología griega era la morada de los dioses.","Se encuentra en el norte de Grecia."]},{"id":"etna","nombre":"Etna","paises":["Italia"],"cordillera":"Macizo del Etna","altura":"aprox. 3.400 m","continente":"Europa","pistas":["Es uno de los volcanes más activos de Europa.","Se encuentra en Sicilia.","Domina el paisaje de la zona oriental de la isla."]},{"id":"kilimanjaro","nombre":"Kilimanjaro","paises":["Tanzania"],"cordillera":"Macizo del Kilimanjaro","altura":"5.895 m","continente":"África","pistas":["Es la montaña más alta de África.","Es un gran macizo volcánico aislado.","Se encuentra en Tanzania, cerca de la frontera con Kenia."]},{"id":"kenya","nombre":"Monte Kenia","paises":["Kenia"],"cordillera":"Macizo del monte Kenia","altura":"5.199 m","continente":"África","pistas":["Es la segunda montaña más alta de África.","Da nombre al país donde se encuentra.","Es un antiguo volcán muy erosionado."]},{"id":"toubkal","nombre":"Toubkal","paises":["Marruecos"],"cordillera":"Alto Atlas","altura":"4.167 m","continente":"África","pistas":["Es la cumbre más alta del norte de África.","Se encuentra en Marruecos.","Pertenece al Alto Atlas."]},{"id":"stanley","nombre":"Monte Stanley","paises":["Uganda","República Democrática del Congo"],"cordillera":"Rwenzori","altura":"5.109 m","continente":"África","pistas":["Se encuentra en la cordillera de Rwenzori.","Se alza en la frontera entre Uganda y la República Democrática del Congo.","Su cumbre más alta es Margherita Peak."]},{"id":"ras-dashen","nombre":"Ras Dashen","paises":["Etiopía"],"cordillera":"Montes Simien","altura":"4.550 m","continente":"África","pistas":["Es la montaña más alta de Etiopía.","Se encuentra en los montes Simien.","Está en las tierras altas etíopes."]},{"id":"puncak-jaya","nombre":"Puncak Jaya","paises":["Indonesia"],"cordillera":"Cordillera Sudirman","altura":"4.884 m","continente":"Oceanía","pistas":["Es la cumbre más alta de la isla de Nueva Guinea.","Se encuentra en la parte indonesia de la isla.","También es conocida como Pirámide de Carstensz."]},{"id":"aoraki","nombre":"Aoraki / Mount Cook","paises":["Nueva Zelanda"],"cordillera":"Alpes del Sur","altura":"3.724 m","continente":"Oceanía","pistas":["Es la montaña más alta de Nueva Zelanda.","Se encuentra en la Isla Sur.","Pertenece a los Alpes del Sur."]},{"id":"kosciuszko","nombre":"Monte Kosciuszko","paises":["Australia"],"cordillera":"Gran Cordillera Divisoria","altura":"2.228 m","continente":"Oceanía","pistas":["Es la cumbre más alta de la Australia continental.","Se encuentra en Nueva Gales del Sur.","Forma parte de los Alpes Australianos, dentro de la Gran Cordillera Divisoria."]},{"id":"mauna-kea","nombre":"Mauna Kea","paises":["Estados Unidos"],"cordillera":"Archipiélago de Hawái","altura":"4.207 m sobre el nivel del mar","continente":"Oceanía / Pacífico","pistas":["Es un gran volcán de Hawái.","Medido desde su base submarina, su relieve total supera al del Everest.","Alberga importantes observatorios astronómicos."]},{"id":"vinson","nombre":"Macizo Vinson","paises":["Antártida"],"cordillera":"Montes Ellsworth","altura":"4.892 m","continente":"Antártida","pistas":["Es la cumbre más alta de la Antártida.","Se encuentra en los montes Ellsworth.","Forma parte del reto de las Seven Summits."]}];
const MONTANAS_TIEMPO = 10;

const montanasMenu = document.getElementById("montanas-menu");
const montanasConfig = document.getElementById("montanas-config");
const montanasJuego = document.getElementById("montanas-juego");
const montanasFin = document.getElementById("montanas-fin");
const montanasPausa = document.getElementById("montanas-pausa");

const montanasConfigTitulo = document.getElementById("montanas-config-titulo");
const montanasConfigDescripcion = document.getElementById("montanas-config-descripcion");
const montanasTipoPartida = document.getElementById("montanas-tipo-partida");
const montanasNumeroPregunta = document.getElementById("montanas-numero-pregunta");
const montanasTemporizador = document.getElementById("montanas-temporizador");
const montanasAciertosTexto = document.getElementById("montanas-aciertos");
const montanasFallosTexto = document.getElementById("montanas-fallos");
const montanasPregunta = document.getElementById("montanas-pregunta");
const montanasPistas = document.getElementById("montanas-pistas");
const montanasRespuestas = document.getElementById("montanas-respuestas");
const montanasFeedback = document.getElementById("montanas-feedback");
const montanasSiguiente = document.getElementById("montanas-siguiente");
const montanasPausaTexto = document.getElementById("montanas-pausa-texto");
const montanasResultadoExamen = document.getElementById("montanas-resultado-examen");
const montanasRevisionExamen = document.getElementById("montanas-revision-examen");

let montanasModo = "montana-pais";
let montanasTipo = "entrenamiento";
let montanasPlan = [];
let montanasIndice = 0;
let montanasActual = null;
let montanasAciertos = 0;
let montanasFallos = 0;
let montanasResultados = [];
let montanasCola = [];
let montanasContestadas = 0;
let montanasPausaPendiente = false;
let montanasTimer = null;
let montanasTiempo = MONTANAS_TIEMPO;
let montanasUltimoExamen = null;
let montanasRepaso = false;

function barajarMontanas(lista) {
  const copia = [...lista];

  for (let i = copia.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [copia[i], copia[j]] = [copia[j], copia[i]];
  }

  return copia;
}

function escaparMontanas(texto) {
  return String(texto ?? "")
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#039;");
}

function nombreModoMontanas() {
  const nombres = {
    "montana-pais": "Montaña → País",
    "pais-montana": "País → Montaña",
    "cordillera": "Montaña → Cordillera",
    "adivina": "Adivina la montaña"
  };

  return nombres[montanasModo] || "Montañas";
}

function bancoMontanas() {
  return [...MONTANAS_DATA];
}

function ocultarPantallasMontanas() {
  cancelarTimerMontanas();

  [montanasMenu, montanasConfig, montanasJuego, montanasFin]
    .forEach(p => {
      if (p) p.classList.add("oculto");
    });

  if (montanasPausa) {
    montanasPausa.classList.add("oculto");
  }
}

function abrirMontanasMenu() {
  ocultarTodasLasPantallas();
  montanasMenu.classList.remove("oculto");
}

function abrirConfigMontanas(modo) {
  montanasModo = modo;

  ocultarTodasLasPantallas();
  montanasConfig.classList.remove("oculto");

  montanasConfigTitulo.textContent =
    nombreModoMontanas();

  const textos = {
    "montana-pais": "Relaciona cada gran cumbre con el país o los países donde se encuentra.",
    "pais-montana": "Relaciona países con algunas de sus montañas más conocidas.",
    "cordillera": "Identifica la cordillera o macizo al que pertenece cada montaña.",
    "adivina": "Lee tres pistas geográficas e identifica la montaña."
  };

  montanasConfigDescripcion.textContent =
    textos[modo] || "Elige cómo quieres practicar.";
}

function crearPlanMontanas(cantidad, evitarIds = []) {
  const evitar = new Set(evitarIds);
  const banco = bancoMontanas();

  return [
    ...barajarMontanas(banco.filter(x => !evitar.has(x.id))),
    ...barajarMontanas(banco.filter(x => evitar.has(x.id)))
  ].slice(0, Math.min(cantidad, banco.length));
}

function siguienteMontanaEntrenamiento() {
  if (montanasCola.length === 0) {
    montanasCola = barajarMontanas(bancoMontanas());
  }

  return montanasCola.shift();
}

function crearPreguntaMontanas(item) {
  if (montanasModo !== "pais-montana") {
    return {
      item,
      paisObjetivo: null
    };
  }

  return {
    item,
    paisObjetivo:
      barajarMontanas(item.paises)[0]
  };
}

function crearOpcionesMontanas(pregunta) {
  const actual = pregunta.item;

  if (montanasModo === "montana-pais") {
    const correcto = barajarMontanas(actual.paises)[0];

    const todosPaises = [...new Set(
      MONTANAS_DATA.flatMap(x => x.paises)
    )];

    const distractores = barajarMontanas(
      todosPaises.filter(p => !actual.paises.includes(p))
    ).slice(0, 3);

    return barajarMontanas([
      { valor: correcto, texto: correcto },
      ...distractores.map(p => ({ valor: p, texto: p }))
    ]);
  }

  if (montanasModo === "pais-montana") {
    const pais = pregunta.paisObjetivo;

    const correctas = MONTANAS_DATA.filter(
      x => x.paises.includes(pais)
    );

    const correcta = actual;

    const distractores = barajarMontanas(
      MONTANAS_DATA.filter(
        x =>
          x.id !== correcta.id &&
          !x.paises.includes(pais)
      )
    ).slice(0, 3);

    return barajarMontanas([
      correcta,
      ...distractores
    ]).map(x => ({
      valor: x.id,
      texto: x.nombre
    }));
  }

  if (montanasModo === "cordillera") {
    const correcta = actual.cordillera;

    const cordilleras = [...new Set(
      MONTANAS_DATA.map(x => x.cordillera)
    )];

    const distractores = barajarMontanas(
      cordilleras.filter(c => c !== correcta)
    ).slice(0, 3);

    return barajarMontanas([
      { valor: correcta, texto: correcta },
      ...distractores.map(c => ({ valor: c, texto: c }))
    ]);
  }

  const distractores = barajarMontanas(
    MONTANAS_DATA.filter(x => x.id !== actual.id)
  ).slice(0, 3);

  return barajarMontanas([
    actual,
    ...distractores
  ]).map(x => ({
    valor: x.id,
    texto: x.nombre
  }));
}

function iniciarMontanas(tipo, cantidad = null, planExacto = null) {
  montanasTipo = tipo;
  montanasIndice = 0;
  montanasAciertos = 0;
  montanasFallos = 0;
  montanasResultados = [];
  montanasCola = [];
  montanasContestadas = 0;
  montanasPausaPendiente = false;
  montanasRepaso = false;

  montanasAciertosTexto.textContent = "0";
  montanasFallosTexto.textContent = "0";

  montanasPlan = tipo === "examen"
    ? (
      planExacto
        ? JSON.parse(JSON.stringify(planExacto))
        : crearPlanMontanas(cantidad)
    )
    : [];

  ocultarTodasLasPantallas();
  montanasJuego.classList.remove("oculto");

  mostrarPreguntaMontanas();
}

function mostrarPreguntaMontanas() {
  cancelarTimerMontanas();

  montanasFeedback.innerHTML = "";
  montanasFeedback.classList.remove("montanas-respondida");
  montanasFeedback.classList.add("oculto");
  montanasSiguiente.classList.add("oculto");
  montanasRespuestas.innerHTML = "";

  const item = montanasTipo === "entrenamiento"
    ? siguienteMontanaEntrenamiento()
    : montanasPlan[montanasIndice];

  if (!item) {
    finalizarMontanas();
    return;
  }

  montanasActual = crearPreguntaMontanas(item);

  montanasTipoPartida.textContent =
    `${nombreModoMontanas()} · ${montanasTipo === "examen" ? "Examen" : "Entrenamiento"}`;

  montanasNumeroPregunta.textContent =
    montanasTipo === "examen"
      ? `Pregunta ${montanasIndice + 1} de ${montanasPlan.length}`
      : `Pregunta ${montanasContestadas + 1}`;

  const actual = montanasActual.item;

  montanasPistas.classList.add("oculto");

  if (montanasModo === "montana-pais") {
    montanasPregunta.innerHTML =
      `¿En cuál de estos países se encuentra <strong>${escaparMontanas(actual.nombre)}</strong>?`;
  }

  if (montanasModo === "pais-montana") {
    montanasPregunta.innerHTML =
      `¿Cuál de estas montañas se encuentra en <strong>${escaparMontanas(montanasActual.paisObjetivo)}</strong>?`;
  }

  if (montanasModo === "cordillera") {
    montanasPregunta.innerHTML =
      `¿A qué cordillera o macizo pertenece <strong>${escaparMontanas(actual.nombre)}</strong>?`;
  }

  if (montanasModo === "adivina") {
    montanasPregunta.textContent =
      "¿Qué montaña es?";

    montanasPistas.innerHTML =
      actual.pistas
        .map(
          (p, i) =>
            `<div><strong>${i + 1}.</strong> ${escaparMontanas(p)}</div>`
        )
        .join("");

    montanasPistas.classList.remove("oculto");
  }

  const opciones =
    crearOpcionesMontanas(
      montanasActual
    );

  opciones.forEach(op => {
    const boton = document.createElement("button");
    boton.type = "button";
    boton.textContent = op.texto;
    boton.dataset.valor = op.valor;

    boton.addEventListener(
      "click",
      () =>
        responderMontanas(
          op.valor,
          boton
        )
    );

    montanasRespuestas.appendChild(
      boton
    );
  });

  iniciarTimerMontanas();
}

function esCorrectaMontanas(valor) {
  const actual = montanasActual.item;

  if (montanasModo === "montana-pais") {
    return actual.paises.includes(valor);
  }

  if (montanasModo === "pais-montana") {
    return valor === actual.id;
  }

  if (montanasModo === "cordillera") {
    return valor === actual.cordillera;
  }

  return valor === actual.id;
}

function responderMontanas(
  valor,
  boton = null,
  tiempoAgotado = false
) {
  if (
    montanasFeedback.classList.contains(
      "montanas-respondida"
    )
  ) {
    return;
  }

  cancelarTimerMontanas();
  montanasFeedback.classList.add("montanas-respondida");

  const acierto =
    !tiempoAgotado &&
    esCorrectaMontanas(valor);

  if (acierto) montanasAciertos++;
  else montanasFallos++;

  montanasAciertosTexto.textContent =
    String(montanasAciertos);

  montanasFallosTexto.textContent =
    String(montanasFallos);

  const actual = montanasActual.item;

  [...montanasRespuestas.children]
    .forEach(b => {
      b.disabled = true;

      const v = b.dataset.valor;

      if (
        (montanasModo === "montana-pais" && actual.paises.includes(v)) ||
        (montanasModo === "pais-montana" && v === actual.id) ||
        (montanasModo === "cordillera" && v === actual.cordillera) ||
        (montanasModo === "adivina" && v === actual.id)
      ) {
        b.classList.add("respuesta-correcta");
      }
    });

  if (!acierto && boton) {
    boton.classList.add("respuesta-incorrecta");
  }

  const resultado = {
    item: JSON.parse(JSON.stringify(actual)),
    paisObjetivo: montanasActual.paisObjetivo,
    respuesta: valor,
    acierto,
    tiempoAgotado
  };

  if (montanasTipo === "examen") {
    montanasResultados.push(resultado);
  } else {
    montanasContestadas++;

    if (
      montanasContestadas > 0 &&
      montanasContestadas % 15 === 0
    ) {
      montanasPausaPendiente = true;
    }
  }

  const titulo = tiempoAgotado
    ? "⏱ Tiempo agotado"
    : acierto
      ? "✅ Correcto"
      : "❌ Incorrecto";

  montanasFeedback.innerHTML = `
    <div class="montanas-feedback-titulo">${titulo}</div>

    <div class="montanas-ficha">
      <strong>${escaparMontanas(actual.nombre)}</strong>

      <span>
        ${escaparMontanas(actual.paises.join(" · "))}
      </span>

      <span>
        ${escaparMontanas(actual.cordillera)}
      </span>

      <small>
        Altitud aproximada: ${escaparMontanas(actual.altura)}
      </small>
    </div>
  `;

  montanasFeedback.classList.remove("oculto");
  montanasSiguiente.classList.remove("oculto");

  montanasSiguiente.textContent =
    montanasTipo === "examen" &&
    montanasIndice === montanasPlan.length - 1
      ? "Ver resultado →"
      : montanasPausaPendiente
        ? "Continuar práctica →"
        : "Siguiente pregunta →";
}

function iniciarTimerMontanas() {
  if (montanasTipo !== "examen") {
    montanasTemporizador.classList.add("oculto");
    return;
  }

  montanasTiempo = MONTANAS_TIEMPO;
  montanasTemporizador.classList.remove("oculto");
  actualizarTimerMontanas();

  montanasTimer = setInterval(() => {
    montanasTiempo--;
    actualizarTimerMontanas();

    if (montanasTiempo <= 0) {
      clearInterval(montanasTimer);
      montanasTimer = null;
      responderMontanas(
        null,
        null,
        true
      );
    }
  }, 1000);
}

function actualizarTimerMontanas() {
  montanasTemporizador.textContent =
    `⏱ ${montanasTiempo} s`;

  montanasTemporizador.classList.toggle(
    "urgente",
    montanasTiempo <= 3
  );
}

function cancelarTimerMontanas() {
  if (montanasTimer !== null) {
    clearInterval(montanasTimer);
    montanasTimer = null;
  }

  if (montanasTemporizador) {
    montanasTemporizador.classList.add("oculto");
    montanasTemporizador.classList.remove("urgente");
  }
}

function avanzarMontanas() {
  montanasFeedback.classList.remove("montanas-respondida");

  if (montanasTipo === "entrenamiento") {
    if (montanasPausaPendiente) {
      montanasPausaTexto.textContent =
        `Llevas ${montanasContestadas} preguntas: ${montanasAciertos} correctas y ${montanasFallos} incorrectas. ¿Quieres seguir practicando?`;

      montanasPausa.classList.remove("oculto");
      return;
    }

    mostrarPreguntaMontanas();
    return;
  }

  if (montanasIndice >= montanasPlan.length - 1) {
    finalizarMontanas();
    return;
  }

  montanasIndice++;
  mostrarPreguntaMontanas();
}

function finalizarMontanas() {
  cancelarTimerMontanas();

  ocultarTodasLasPantallas();
  montanasFin.classList.remove("oculto");

  const total = montanasResultados.length;
  const porcentaje = total
    ? Math.round((montanasAciertos / total) * 100)
    : 0;

  montanasResultadoExamen.innerHTML = `
    <div class="nota-grande">${montanasAciertos} / ${total}</div>

    <div class="detalle-examen">
      ${porcentaje}% de aciertos
      <br>
      ${nombreModoMontanas()}
    </div>
  `;

  montanasRevisionExamen.innerHTML = `
    <div class="revision-examen">

      <h3>📚 Revisión del examen</h3>

      <div class="revision-lista">
        ${montanasResultados.map((r, i) => `
          <div class="revision-item ${r.acierto ? "acierto" : "fallo"}">

            <div class="revision-cabecera">
              <span>Pregunta ${i + 1}</span>
              <span>${r.acierto ? "✅ Correcta" : "❌ Incorrecta"}</span>
            </div>

            <div class="montanas-revision-titulo">
              <strong>${escaparMontanas(r.item.nombre)}</strong>
            </div>

            <div>
              ${escaparMontanas(r.item.paises.join(" · "))}
              ·
              ${escaparMontanas(r.item.cordillera)}
            </div>

          </div>
        `).join("")}
      </div>

    </div>
  `;

  const falladas =
    montanasResultados.filter(
      r => !r.acierto
    );

  const btn =
    document.getElementById(
      "montanas-repasar-fallos"
    );

  if (falladas.length) {
    btn.textContent =
      `🎯 Repasar solo mis fallos (${falladas.length})`;

    btn.classList.remove("oculto");
  } else {
    btn.classList.add("oculto");
  }

  if (!montanasRepaso) {
    montanasUltimoExamen = {
      modo: montanasModo,
      plan: JSON.parse(JSON.stringify(montanasPlan))
    };
  }
}

document
  .getElementById("volver-montanas-orografia")
  .addEventListener(
    "click",
    mostrarMapasOrografiaMenu
  );

document
  .getElementById("volver-montanas-menu")
  .addEventListener(
    "click",
    abrirMontanasMenu
  );

document
  .getElementById("volver-montanas-desde-juego")
  .addEventListener(
    "click",
    abrirMontanasMenu
  );

document
  .getElementById("volver-montanas-fin")
  .addEventListener(
    "click",
    abrirMontanasMenu
  );

document
  .getElementById("montanas-volver-menu")
  .addEventListener(
    "click",
    abrirMontanasMenu
  );

document
  .querySelectorAll(".montanas-modo")
  .forEach(b => {
    b.addEventListener(
      "click",
      () =>
        abrirConfigMontanas(
          b.dataset.montanasModo
        )
    );
  });

document
  .getElementById("montanas-entrenamiento")
  .addEventListener(
    "click",
    () =>
      iniciarMontanas(
        "entrenamiento"
      )
  );

document
  .getElementById("montanas-examen10")
  .addEventListener(
    "click",
    () =>
      iniciarMontanas(
        "examen",
        10
      )
  );

document
  .getElementById("montanas-examen20")
  .addEventListener(
    "click",
    () =>
      iniciarMontanas(
        "examen",
        20
      )
  );

montanasSiguiente.addEventListener(
  "click",
  avanzarMontanas
);

document
  .getElementById("montanas-continuar")
  .addEventListener(
    "click",
    () => {
      montanasPausaPendiente = false;
      montanasPausa.classList.add("oculto");
      mostrarPreguntaMontanas();
    }
  );

document
  .getElementById("montanas-salir")
  .addEventListener(
    "click",
    abrirMontanasMenu
  );

document
  .getElementById("montanas-repetir-examen")
  .addEventListener(
    "click",
    () => {
      if (!montanasUltimoExamen) return;

      montanasModo =
        montanasUltimoExamen.modo;

      iniciarMontanas(
        "examen",
        montanasUltimoExamen.plan.length,
        montanasUltimoExamen.plan
      );
    }
  );

document
  .getElementById("montanas-nuevo-examen")
  .addEventListener(
    "click",
    () => {
      const cantidad =
        montanasUltimoExamen
          ? montanasUltimoExamen.plan.length
          : 10;

      const evitar =
        montanasUltimoExamen
          ? montanasUltimoExamen.plan.map(x => x.id)
          : [];

      iniciarMontanas(
        "examen",
        cantidad,
        crearPlanMontanas(
          cantidad,
          evitar
        )
      );
    }
  );

document
  .getElementById("montanas-repasar-fallos")
  .addEventListener(
    "click",
    () => {
      const plan =
        montanasResultados
          .filter(r => !r.acierto)
          .map(r => r.item);

      if (!plan.length) return;

      iniciarMontanas(
        "examen",
        plan.length,
        plan
      );

      montanasRepaso = true;
    }
  );
