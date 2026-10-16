// ==========================================
// GEOTRAINER · REVISIÓN 2 · UI
// Progreso de examen y criterios/fuentes
// ==========================================

const criteriosFuentes = document.getElementById("criterios-fuentes");
const btnCriteriosFuentes = document.getElementById("btn-criterios-fuentes");
const volverCriteriosFuentes = document.getElementById("volver-criterios-fuentes");

function ocultarPantallasRevision2() {
  if (criteriosFuentes) {
    criteriosFuentes.classList.add("oculto");
  }
}

if (btnCriteriosFuentes) {
  btnCriteriosFuentes.addEventListener("click", () => {
    ocultarTodasLasPantallas();
    criteriosFuentes.classList.remove("oculto");
  });
}

if (volverCriteriosFuentes) {
  volverCriteriosFuentes.addEventListener("click", mostrarInicioPrincipal);
}

function prepararBarraProgreso(info) {
  if (!info || info.dataset.progresoPreparado === "1") return;

  info.dataset.progresoPreparado = "1";

  const barra = document.createElement("progress");
  barra.className = "progreso-examen oculto";
  barra.setAttribute("aria-label", "Progreso del examen");
  barra.max = 1;
  barra.value = 0;

  info.insertAdjacentElement("afterend", barra);

  const actualizar = () => {
    const texto = [...info.querySelectorAll("span")]
      .map(elemento => elemento.textContent || "")
      .join(" ");

    const coincidencia =
      texto.match(/Pregunta\s+(\d+)\s+de\s+(\d+)/i);

    if (!coincidencia) {
      barra.classList.add("oculto");
      return;
    }

    const actual = Number(coincidencia[1]);
    const total = Number(coincidencia[2]);

    if (!total) {
      barra.classList.add("oculto");
      return;
    }

    barra.max = total;
    barra.value = Math.min(actual, total);
    barra.classList.remove("oculto");
  };

  new MutationObserver(actualizar).observe(
    info,
    { subtree: true, childList: true, characterData: true }
  );

  actualizar();
}

document
  .querySelectorAll(".info-partida")
  .forEach(prepararBarraProgreso);


function textoRendimiento(porcentaje) {
  if (porcentaje >= 90) return "Dominio muy alto. Revisa solo los fallos puntuales para consolidar el tema.";
  if (porcentaje >= 75) return "Buen nivel. Repasar las preguntas falladas te ayudará a fijar los detalles.";
  if (porcentaje >= 50) return "Base correcta, pero conviene repetir este bloque y revisar los fallos.";
  return "Conviene reforzar este bloque antes de pasar a uno nuevo y repetir después el examen.";
}

function actualizarResumenRendimiento(contenedor) {
  if (!contenedor) return;

  const nota = contenedor.querySelector(".nota-grande");
  if (!nota) return;

  const coincidencia = (nota.textContent || "").match(/(\d+)\s*\/\s*(\d+)/);
  if (!coincidencia) return;

  const aciertos = Number(coincidencia[1]);
  const total = Number(coincidencia[2]);
  if (!total) return;

  const porcentaje = Math.round(aciertos / total * 100);
  let resumen = contenedor.querySelector(".resumen-rendimiento");

  if (!resumen) {
    resumen = document.createElement("div");
    resumen.className = "resumen-rendimiento";
    contenedor.appendChild(resumen);
  }

  const mensaje = textoRendimiento(porcentaje);
  if (resumen.textContent !== mensaje) {
    resumen.textContent = mensaje;
  }
}

[
  "resultado-examen",
  "rios-resultado-examen",
  "mapas-resultado-examen",
  "monedas-resultado-examen",
  "mares-resultado-examen",
  "montanas-resultado-examen"
].forEach(id => {
  const contenedor = document.getElementById(id);
  if (!contenedor) return;

  new MutationObserver(() => actualizarResumenRendimiento(contenedor))
    .observe(contenedor, { subtree: true, childList: true, characterData: true });
});
