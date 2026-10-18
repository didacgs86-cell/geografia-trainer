// ==========================================
// GEOTRAINER · MAPAS DE GEOGRAFÍA FÍSICA
// Montañas y mares/océanos
// ==========================================

const fisicoPantalla = document.getElementById("fisico-mapa");
const fisicoSelector = document.getElementById("fisico-selector");
const fisicoJuego = document.getElementById("fisico-juego");
const fisicoTitulo = document.getElementById("fisico-titulo");
const fisicoDescripcion = document.getElementById("fisico-descripcion");
const fisicoPregunta = document.getElementById("fisico-pregunta");
const fisicoAyuda = document.getElementById("fisico-ayuda");
const fisicoLienzo = document.getElementById("fisico-lienzo");
const fisicoRespuestas = document.getElementById("fisico-respuestas");
const fisicoFeedback = document.getElementById("fisico-feedback");
const fisicoSiguiente = document.getElementById("fisico-siguiente");
const fisicoAciertosTexto = document.getElementById("fisico-aciertos");
const fisicoFallosTexto = document.getElementById("fisico-fallos");
const fisicoNumero = document.getElementById("fisico-numero");

let fisicoTipo = "montanas";
let fisicoModo = "localiza";
let fisicoCola = [];
let fisicoActual = null;
let fisicoAciertos = 0;
let fisicoFallos = 0;
let fisicoRespondida = false;
let fisicoN = 0;

function escaparFisico(t) {
  return String(t ?? "").replaceAll("&","&amp;").replaceAll("<","&lt;").replaceAll(">","&gt;").replaceAll('"',"&quot;").replaceAll("'","&#039;");
}
function barajarFisico(a) {
  const b=[...a]; for(let i=b.length-1;i>0;i--){const j=Math.floor(Math.random()*(i+1));[b[i],b[j]]=[b[j],b[i]];} return b;
}
function datosFisico() {
  if (fisicoTipo === "montanas") {
    return MONTANAS_DATA.map(x => ({ id:x.id, nombre:x.nombre, detalle:`${x.paises.join(" · ")} · ${x.cordillera}`, punto:MAPA_FISICO_MUNDO.montanas[x.id] })).filter(x=>x.punto);
  }
  return MARES_DATA.map(x => ({ id:x.id, nombre:x.nombre, detalle:x.region, punto:MAPA_FISICO_MUNDO.mares[x.id] })).filter(x=>x.punto);
}
function ocultarPantallasFisicos() {
  if (fisicoPantalla) fisicoPantalla.classList.add("oculto");
}
function abrirMapaFisico(tipo) {
  fisicoTipo=tipo; fisicoAciertos=0; fisicoFallos=0; fisicoN=0; fisicoCola=[];
  ocultarTodasLasPantallas(); fisicoPantalla.classList.remove("oculto"); fisicoSelector.classList.remove("oculto"); fisicoJuego.classList.add("oculto");
  fisicoTitulo.textContent = tipo === "montanas" ? "Mapa mundial de montañas" : "Mapa mundial de mares y océanos";
  fisicoDescripcion.textContent = tipo === "montanas" ? "Sitúa las grandes cumbres sobre un mapa mundial." : "Sitúa los principales mares y océanos sobre un mapa mundial.";
}
function iniciarFisico(modo) {
  fisicoModo=modo; fisicoAciertos=0; fisicoFallos=0; fisicoN=0; fisicoCola=[];
  fisicoAciertosTexto.textContent="0"; fisicoFallosTexto.textContent="0";
  fisicoSelector.classList.add("oculto"); fisicoJuego.classList.remove("oculto"); mostrarFisico();
}
function siguienteFisicoItem() {
  if(!fisicoCola.length) fisicoCola=barajarFisico(datosFisico());
  return fisicoCola.shift();
}
function svgFondoFisico() {
  return MAPA_FISICO_MUNDO.fondo.map(d=>`<path class="fisico-pais" d="${d}" fill-rule="evenodd"></path>`).join("");
}
function crearMapaFisico() {
  const datos=datosFisico();
  const puntos=datos.map(x=>{
    const p=x.punto; const activo=fisicoModo==="identifica" && fisicoActual && x.id===fisicoActual.id;
    return `<g class="fisico-punto ${activo?'fisico-punto-activo':''}" data-id="${x.id}">
      <circle class="fisico-punto-visible" cx="${p.x}" cy="${p.y}" r="${fisicoTipo==='mares'?6:4}"></circle>
      <circle class="fisico-punto-hit" cx="${p.x}" cy="${p.y}" r="15"></circle>
    </g>`;
  }).join("");
  fisicoLienzo.innerHTML=`<svg class="fisico-svg" viewBox="${MAPA_FISICO_MUNDO.viewBox}" role="img" aria-label="Mapa mundial interactivo"><rect class="fisico-mar" x="0" y="0" width="1000" height="650"></rect>${svgFondoFisico()}<g>${puntos}</g></svg><div class="mapas-fuente">Natural Earth · posiciones didácticas aproximadas</div>`;
  fisicoLienzo.querySelectorAll("[data-id]").forEach(el=>el.addEventListener("click",()=>{if(fisicoModo==="localiza") responderFisico(el.dataset.id);}));
}
function mostrarFisico() {
  fisicoRespondida=false; fisicoFeedback.classList.add("oculto"); fisicoFeedback.innerHTML=""; fisicoSiguiente.classList.add("oculto"); fisicoRespuestas.classList.add("oculto"); fisicoRespuestas.innerHTML="";
  fisicoActual=siguienteFisicoItem(); fisicoN++; fisicoNumero.textContent=`Pregunta ${fisicoN}`;
  if(fisicoModo==="localiza") {
    fisicoPregunta.innerHTML=`Localiza <strong>${escaparFisico(fisicoActual.nombre)}</strong>`;
    fisicoAyuda.textContent="Toca el punto correspondiente en el mapa.";
    crearMapaFisico();
  } else {
    fisicoPregunta.textContent=fisicoTipo==="montanas"?"¿Qué montaña está señalada?":"¿Qué mar u océano está señalado?";
    fisicoAyuda.textContent="Observa el punto destacado y elige una respuesta.";
    crearMapaFisico();
    const otros=barajarFisico(datosFisico().filter(x=>x.id!==fisicoActual.id)).slice(0,3);
    barajarFisico([fisicoActual,...otros]).forEach(x=>{const b=document.createElement("button");b.textContent=x.nombre;b.dataset.id=x.id;b.addEventListener("click",()=>responderFisico(x.id,b));fisicoRespuestas.appendChild(b);});
    fisicoRespuestas.classList.remove("oculto");
  }
}
function responderFisico(id, boton=null) {
  if(fisicoRespondida) return; fisicoRespondida=true;
  const ok=id===fisicoActual.id; if(ok) fisicoAciertos++; else fisicoFallos++;
  if(window.GeoProgress){window.GeoProgress.registrarEntrenamiento({categoria:fisicoTipo==="montanas"?"montanas":"mares",acierto:ok,item:{key:`mapa:${fisicoTipo}:${fisicoActual.id}`,label:fisicoActual.nombre,correct:fisicoActual.nombre}});}
  fisicoAciertosTexto.textContent=String(fisicoAciertos); fisicoFallosTexto.textContent=String(fisicoFallos);
  if(fisicoModo==="identifica") {
    [...fisicoRespuestas.children].forEach(b=>{b.disabled=true;if(b.dataset.id===fisicoActual.id)b.classList.add("respuesta-correcta");});
    if(boton&&!ok) boton.classList.add("respuesta-incorrecta");
  }
  const correcto=fisicoLienzo.querySelector(`[data-id="${fisicoActual.id}"]`); if(correcto) correcto.classList.add("fisico-punto-correcto");
  const mal=fisicoLienzo.querySelector(`[data-id="${id}"]`); if(mal&&!ok) mal.classList.add("fisico-punto-incorrecto");
  fisicoFeedback.innerHTML=`<div class="feedback-kicker">${ok?'✅ Correcto':'❌ Incorrecto'}</div><div class="feedback-ficha"><strong>${escaparFisico(fisicoActual.nombre)}</strong><span>${escaparFisico(fisicoActual.detalle)}</span></div>`;
  fisicoFeedback.classList.remove("oculto"); fisicoSiguiente.classList.remove("oculto");
}

document.getElementById("btn-montanas-mapa").addEventListener("click",()=>abrirMapaFisico("montanas"));
document.getElementById("btn-mares-mapa").addEventListener("click",()=>abrirMapaFisico("mares"));
document.getElementById("volver-fisico").addEventListener("click",()=>fisicoTipo==="montanas"?abrirMontanasMenu():abrirMaresMenu());
document.getElementById("fisico-cambiar-modo").addEventListener("click",()=>{fisicoJuego.classList.add("oculto");fisicoSelector.classList.remove("oculto");});
document.querySelectorAll(".fisico-modo").forEach(b=>b.addEventListener("click",()=>iniciarFisico(b.dataset.fisicoModo)));
fisicoSiguiente.addEventListener("click",mostrarFisico);
