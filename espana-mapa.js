// ==========================================
// GEOTRAINER · MAPA DIDÁCTICO DE ESPAÑA
// Provincias, comunidades, ríos y relieve
// ==========================================

const ESPANA_FONDO_MAPA = {"FR":"M1024.0,-167.8 L1043.5,-158.6 L1103.0,-152.1 L1082.1,-127.9 L1076.9,-102.8 L1065.5,-96.8 L1046.7,-100.0 L1048.1,-91.0 L1017.8,-71.2 L1017.2,-55.2 L1037.0,-60.8 L1051.1,-45.3 L1049.4,-35.3 L1061.6,-22.1 L1047.3,-11.3 L1057.9,16.0 L1080.3,20.5 L1075.6,35.8 L1038.2,55.7 L956.7,46.2 L896.5,57.6 L891.8,78.9 L843.9,83.5 L797.5,67.5 L782.4,75.1 L706.4,59.1 L689.9,45.4 L711.3,24.2 L719.2,-46.1 L676.5,-83.2 L646.1,-101.0 L583.0,-114.6 L578.8,-140.3 L632.3,-148.0 L701.7,-138.9 L688.6,-178.9 L727.6,-163.7 L823.8,-191.3 L836.2,-220.2 L872.3,-227.3 L878.3,-214.9 L897.5,-214.3 L916.7,-200.1 L945.5,-183.5 L966.7,-186.2 L1002.8,-170.2 L1012.1,-167.1 L1024.0,-167.8 Z M1129.7,73.4 L1156.3,59.9 L1163.3,90.2 L1149.7,117.5 L1131.0,110.3 L1121.4,86.5 L1129.7,73.4 Z","DZ":"M409.8,611.0 L410.6,604.2 L410.6,601.8 L410.2,560.0 L476.9,534.0 L518.1,528.6 L552.0,519.1 L567.8,501.4 L616.0,487.5 L617.8,461.3 L641.7,458.3 L660.4,445.2 L714.5,439.3 L722.0,425.5 L711.1,418.0 L696.9,380.8 L694.4,359.3 L678.9,336.7 L718.6,317.4 L763.2,311.3 L789.3,296.7 L829.1,286.0 L899.1,279.7 L967.4,276.8 L988.2,282.1 L1027.1,268.2 L1071.3,267.9 L1088.1,276.1 L1116.3,273.9 L1107.9,292.1 L1114.5,325.7 L1104.7,354.8 L1079.3,374.5 L1082.9,401.1 L1116.7,422.1 L1117.0,430.7 L1142.5,444.9 L1160.1,508.3 L1173.5,539.4 L1175.7,555.8 L1168.5,584.6 L1171.4,600.7 L1166.2,620.0 L1169.8,642.2 L1153.4,657.0 L1177.8,682.7 L1179.4,697.8 L1194.1,717.5 L1213.4,711.0 L1246.0,727.4 L1264.1,749.5 L1122.6,816.8 L1003.0,886.1 L944.7,901.9 L898.9,905.3 L898.4,882.9 L879.3,877.1 L853.6,867.0 L843.8,850.5 L704.5,773.5 L565.1,696.5 L409.8,611.0 Z","PT":"M395.3,99.8 L410.3,90.8 L427.1,85.7 L437.5,103.0 L461.9,102.9 L469.0,98.5 L493.0,99.7 L504.6,117.4 L485.5,127.0 L485.0,154.5 L478.3,159.7 L476.6,176.3 L458.8,179.3 L475.3,200.4 L463.9,223.6 L478.1,234.1 L472.5,243.7 L457.2,256.9 L460.6,268.6 L444.0,277.8 L422.2,272.8 L400.9,276.7 L407.2,249.1 L403.3,227.4 L384.9,224.1 L375.0,210.7 L378.3,187.6 L394.7,174.8 L397.7,160.6 L406.3,139.3 L405.4,124.4 L397.1,111.7 L395.3,99.8 Z","ES":"M460.6,268.6 L457.2,256.9 L472.5,243.7 L478.1,234.1 L463.9,223.6 L475.3,200.4 L458.8,179.3 L476.6,176.3 L478.3,159.7 L485.0,154.5 L485.5,127.0 L504.6,117.4 L493.0,99.7 L469.0,98.5 L461.9,102.9 L437.5,103.0 L427.1,85.7 L410.3,90.8 L395.3,99.8 L397.4,74.7 L380.5,59.4 L438.9,33.9 L489.5,40.3 L544.9,40.0 L588.9,46.1 L623.2,44.2 L689.9,45.4 L706.4,59.1 L782.4,75.1 L797.5,67.5 L843.9,83.5 L891.8,78.9 L894.0,99.4 L854.9,122.9 L802.0,130.4 L798.3,142.2 L772.9,161.8 L757.0,190.5 L773.1,210.7 L749.2,226.4 L740.3,249.4 L709.1,256.4 L679.8,283.6 L627.4,284.1 L588.0,283.4 L562.2,295.9 L546.4,309.2 L526.2,306.3 L510.9,294.4 L499.2,274.1 L460.6,268.6 Z","MA":"M678.9,336.7 L694.4,359.3 L696.9,380.8 L711.1,418.0 L722.0,425.5 L714.5,439.3 L660.4,445.2 L641.7,458.3 L617.8,461.3 L616.0,487.5 L567.8,501.4 L552.0,519.1 L518.1,528.6 L476.9,534.0 L410.2,560.0 L410.6,601.8 L404.3,601.8 L405.2,620.7 L379.7,621.9 L366.4,629.9 L347.6,629.9 L332.7,625.3 L297.9,629.1 L284.5,656.6 L271.6,659.2 L252.1,703.7 L194.7,741.8 L181.1,790.5 L164.2,806.4 L159.2,819.1 L66.2,821.9 L65.5,821.9 L67.4,805.5 L83.3,795.9 L96.8,777.5 L94.1,765.5 L108.3,740.6 L131.3,718.2 L145.2,712.5 L156.2,691.9 L157.1,673.1 L172.0,651.3 L199.6,638.5 L225.7,602.4 L226.5,601.9 L247.3,588.4 L285.7,584.5 L318.2,560.3 L338.9,550.9 L373.4,521.5 L363.1,477.6 L378.8,447.2 L384.3,428.6 L410.9,404.8 L452.3,388.6 L483.0,374.0 L510.6,337.5 L523.5,315.8 L553.9,316.0 L578.8,331.0 L618.1,328.5 L660.9,336.3 L678.9,336.7 Z"};

const ESPANA_CAPITALES_COORD = {
  "A Coruña":[43.3701,-8.3911],"Albacete":[38.9959,-1.8557],"Alicante":[38.3455,-0.4832],"Almería":[36.8389,-2.4641],"Ávila":[40.6559,-4.6977],"Badajoz":[38.8787,-6.9710],"Barcelona":[41.3842,2.1763],"Bilbao":[43.2572,-2.9239],"Burgos":[42.3411,-3.7042],"Cáceres":[39.4732,-6.3712],"Cádiz":[36.5217,-6.2841],"Castellón de la Plana":[39.9864,-0.0369],"Ciudad Real":[38.9865,-3.9313],"Córdoba":[37.8795,-4.7803],"Cuenca":[40.0765,-2.1315],"Girona":[41.9819,2.8241],"Granada":[37.1764,-3.6000],"Guadalajara":[40.6344,-3.1621],"Huelva":[37.2600,-6.9504],"Huesca":[42.1406,-0.4084],"Jaén":[37.7652,-3.7904],"Las Palmas de Gran Canaria":[28.0994,-15.4134],"León":[42.5991,-5.5671],"Lleida":[41.6153,0.6206],"Logroño":[42.4664,-2.4457],"Lugo":[43.0091,-7.5582],"Madrid":[40.4084,-3.6876],"Málaga":[36.7203,-4.4200],"Murcia":[37.9844,-1.1285],"Ourense":[42.3365,-7.8637],"Oviedo":[43.3623,-5.8437],"Palencia":[42.0078,-4.5346],"Palma":[39.5711,2.6518],"Pamplona":[42.8141,-1.6452],"Pontevedra":[42.4338,-8.6480],"Salamanca":[40.9674,-5.6654],"San Sebastián":[43.3172,-1.9819],"Donostia / San Sebastián":[43.3172,-1.9819],"Santa Cruz de Tenerife":[28.4629,-16.2472],"Santander":[43.4630,-3.8047],"Segovia":[40.9499,-4.1252],"Sevilla":[37.3862,-5.9925],"Soria":[41.7633,-2.4662],"Tarragona":[41.1191,1.2584],"Teruel":[40.3441,-1.1093],"Toledo":[39.8572,-4.0243],"Valencia":[39.4753,-0.3757],"Valladolid":[41.6523,-4.7233],"Vitoria-Gasteiz":[42.8506,-2.6728],"Zamora":[41.4991,-5.7549],"Zaragoza":[41.6565,-0.8793],"Ceuta":[35.8881,-5.3068],"Melilla":[35.2947,-2.9423]
};

const ESPANA_CAPITAL_ALIAS = {
  "Alicante":"Alicante","Castellón de la Plana":"Castellón de la Plana","Vitoria-Gasteiz":"Vitoria-Gasteiz","San Sebastián":"San Sebastián"
};

const ESPANA_RIOS_MAPA = [
  {id:"tajo",nombre:"Tajo",puntos:[[-1.8,40.3],[-3.8,39.9],[-5.5,39.8],[-7.0,39.5],[-9.1,38.7]]},
  {id:"ebro",nombre:"Ebro",puntos:[[-3.8,43.0],[-2.4,42.6],[-0.9,41.7],[0.3,41.3],[0.8,40.7]]},
  {id:"duero",nombre:"Duero",puntos:[[-2.4,41.9],[-4.7,41.7],[-6.0,41.5],[-7.8,41.2],[-8.7,41.1]]},
  {id:"guadalquivir",nombre:"Guadalquivir",puntos:[[-2.7,37.8],[-4.8,37.9],[-6.0,37.4],[-6.4,36.9]]},
  {id:"guadiana",nombre:"Guadiana",puntos:[[-3.0,39.0],[-4.5,39.0],[-6.8,38.9],[-7.4,37.5]]},
  {id:"mino",nombre:"Miño",puntos:[[-7.3,43.1],[-7.7,42.6],[-8.2,42.2],[-8.8,41.9]]},
  {id:"jucar",nombre:"Júcar",puntos:[[-2.0,40.2],[-1.2,39.7],[-0.4,39.2]]},
  {id:"segura",nombre:"Segura",puntos:[[-2.4,38.1],[-1.2,38.0],[-0.7,38.1]]}
];

const ESPANA_RELIEVE_MAPA = [
  {id:"pirineos",nombre:"Pirineos",lat:42.65,lon:1.2},
  {id:"cantabrica",nombre:"Cordillera Cantábrica",lat:43.0,lon:-5.0},
  {id:"central",nombre:"Sistema Central",lat:40.65,lon:-4.4},
  {id:"iberico",nombre:"Sistema Ibérico",lat:41.0,lon:-1.6},
  {id:"beticos",nombre:"Cordilleras Béticas",lat:37.1,lon:-3.2},
  {id:"sierra-morena",nombre:"Sierra Morena",lat:38.3,lon:-4.5},
  {id:"galaico",nombre:"Macizo Galaico",lat:42.5,lon:-7.5}
];

const espanaMapaPantalla=document.getElementById("espana-mapa");
const espanaMapaSelector=document.getElementById("espana-mapa-selector");
const espanaMapaJuego=document.getElementById("espana-mapa-juego");
const espanaMapaPregunta=document.getElementById("espana-mapa-pregunta");
const espanaMapaAyuda=document.getElementById("espana-mapa-ayuda");
const espanaMapaLienzo=document.getElementById("espana-mapa-lienzo");
const espanaMapaFeedback=document.getElementById("espana-mapa-feedback");
const espanaMapaSiguiente=document.getElementById("espana-mapa-siguiente");
const espanaMapaAciertos=document.getElementById("espana-mapa-aciertos");
const espanaMapaFallos=document.getElementById("espana-mapa-fallos");
const espanaMapaNumero=document.getElementById("espana-mapa-numero");
let espanaMapaModo="provincia",espanaMapaCola=[],espanaMapaActual=null,espanaMapaOk=0,espanaMapaKo=0,espanaMapaN=0,espanaMapaRespondida=false;

function ocultarPantallasEspanaMapa(){if(espanaMapaPantalla)espanaMapaPantalla.classList.add("oculto");}
function abrirEspanaMapa(){ocultarTodasLasPantallas();espanaMapaPantalla.classList.remove("oculto");espanaMapaSelector.classList.remove("oculto");espanaMapaJuego.classList.add("oculto");}
function proyectarEspana(lat,lon){const minLon=-18,maxLon=5,minLat=27,maxLat=44;return{x:25+(lon-minLon)/(maxLon-minLon)*950,y:25+(maxLat-lat)/(maxLat-minLat)*600};}
function provinciasMapa(){return ESPANA_PROVINCIAS.map(p=>{const c=ESPANA_CAPITALES_COORD[p.capital];return c?{id:`prov:${p.provincia}`,nombre:p.provincia,detalle:`Capital: ${p.capital}`,lat:c[0],lon:c[1]}:null;}).filter(Boolean).concat(ESPANA_CIUDADES_AUTONOMAS.map(c=>{const p=ESPANA_CAPITALES_COORD[c.ciudad];return{id:`prov:${c.ciudad}`,nombre:c.ciudad,detalle:"Ciudad autónoma",lat:p[0],lon:p[1]};}));}
function comunidadesMapa(){return ESPANA_COMUNIDADES.map(com=>{const ps=ESPANA_PROVINCIAS.filter(p=>p.comunidad===com).map(p=>ESPANA_CAPITALES_COORD[p.capital]).filter(Boolean);const lat=ps.reduce((a,p)=>a+p[0],0)/ps.length,lon=ps.reduce((a,p)=>a+p[1],0)/ps.length;return{id:`com:${com}`,nombre:com,detalle:`${ps.length} provincia${ps.length===1?'':'s'}`,lat,lon};});}
function bancoEspanaMapa(){if(espanaMapaModo==="provincia")return provinciasMapa();if(espanaMapaModo==="comunidad")return comunidadesMapa();if(espanaMapaModo==="rios")return ESPANA_RIOS_MAPA.map(x=>({...x,detalle:"Río de España"}));return ESPANA_RELIEVE_MAPA.map(x=>({...x,detalle:"Unidad principal del relieve"}));}
function iniciarEspanaMapa(modo){espanaMapaModo=modo;espanaMapaCola=[];espanaMapaOk=0;espanaMapaKo=0;espanaMapaN=0;espanaMapaAciertos.textContent="0";espanaMapaFallos.textContent="0";espanaMapaSelector.classList.add("oculto");espanaMapaJuego.classList.remove("oculto");mostrarEspanaMapa();}
function siguienteEspanaMapa(){if(!espanaMapaCola.length)espanaMapaCola=[...bancoEspanaMapa()].sort(()=>Math.random()-.5);return espanaMapaCola.shift();}
function lineaPathEspana(puntos){return puntos.map((p,i)=>{const q=proyectarEspana(p[1],p[0]);return`${i?'L':'M'}${q.x.toFixed(1)},${q.y.toFixed(1)}`;}).join(' ');}
function renderEspanaMapa(){
  let elems='';
  const banco=bancoEspanaMapa();
  if(espanaMapaModo==="rios"){
    elems=banco.map(x=>`<path class="esp-mapa-rio" data-id="${x.id}" d="${lineaPathEspana(x.puntos)}"></path><path class="esp-mapa-rio-hit" data-id="${x.id}" d="${lineaPathEspana(x.puntos)}"></path>`).join('');
  }else{
    elems=banco.map(x=>{const p=proyectarEspana(x.lat,x.lon);return`<g class="esp-mapa-punto" data-id="${x.id}"><circle class="esp-mapa-punto-visible" cx="${p.x}" cy="${p.y}" r="${espanaMapaModo==='comunidad'?6:4}"></circle><circle class="esp-mapa-punto-hit" cx="${p.x}" cy="${p.y}" r="14"></circle></g>`}).join('');
  }
  const contexto=['PT','FR','MA','DZ'].map(iso=>ESPANA_FONDO_MAPA[iso]?`<path class="espana-pais-contexto" d="${ESPANA_FONDO_MAPA[iso]}" fill-rule="evenodd"></path>`:'').join('');
  const espana=ESPANA_FONDO_MAPA.ES?`<path class="espana-pais-principal" d="${ESPANA_FONDO_MAPA.ES}" fill-rule="evenodd"></path>`:'';
  const islas=`<g class="espana-islas-didacticas" aria-hidden="true"><ellipse cx="871" cy="176" rx="16" ry="5"></ellipse><ellipse cx="900" cy="188" rx="6" ry="3"></ellipse><ellipse cx="116" cy="598" rx="8" ry="4"></ellipse><ellipse cx="151" cy="611" rx="9" ry="5"></ellipse><ellipse cx="80" cy="592" rx="5" ry="3"></ellipse><ellipse cx="190" cy="604" rx="5" ry="3"></ellipse></g>`;
  espanaMapaLienzo.innerHTML=`<svg viewBox="0 0 1000 650" class="espana-mapa-svg" role="img" aria-label="Mapa didáctico de España"><rect class="fisico-mar" width="1000" height="650"></rect><g>${contexto}${espana}${islas}</g><g>${elems}</g></svg><div class="mapas-fuente">Natural Earth · provincias/comunidades por puntos de referencia · ríos y relieve simplificados</div>`;
  espanaMapaLienzo.querySelectorAll('[data-id]').forEach(el=>el.addEventListener('click',()=>responderEspanaMapa(el.dataset.id)));
}
function mostrarEspanaMapa(){
  espanaMapaRespondida=false;
  espanaMapaActual=siguienteEspanaMapa();
  espanaMapaN++;
  espanaMapaNumero.textContent=`Pregunta ${espanaMapaN}`;
  if(espanaMapaModo==='provincia'){
    espanaMapaPregunta.innerHTML=`Localiza la provincia de <strong>${espanaMapaActual.nombre}</strong>`;
    espanaMapaAyuda.textContent='Cada provincia se representa por la posición de su capital.';
  }else if(espanaMapaModo==='comunidad'){
    espanaMapaPregunta.innerHTML=`Localiza <strong>${espanaMapaActual.nombre}</strong>`;
    espanaMapaAyuda.textContent='Toca el punto de referencia didáctico de la comunidad autónoma.';
  }else if(espanaMapaModo==='rios'){
    espanaMapaPregunta.innerHTML=`Localiza el río <strong>${espanaMapaActual.nombre}</strong>`;
    espanaMapaAyuda.textContent='Toca el trazado aproximado del río.';
  }else{
    espanaMapaPregunta.innerHTML=`Localiza <strong>${espanaMapaActual.nombre}</strong>`;
    espanaMapaAyuda.textContent='Toca el punto aproximado de esta unidad del relieve.';
  }
  espanaMapaFeedback.classList.add('oculto');
  espanaMapaSiguiente.classList.add('oculto');
  renderEspanaMapa();
}
function responderEspanaMapa(id){if(espanaMapaRespondida)return;espanaMapaRespondida=true;const ok=id===espanaMapaActual.id;if(ok)espanaMapaOk++;else espanaMapaKo++;if(window.GeoProgress){window.GeoProgress.registrarEntrenamiento({categoria:"espana",acierto:ok,item:{key:`mapa:${espanaMapaModo}:${espanaMapaActual.id}`,label:espanaMapaActual.nombre,correct:espanaMapaActual.nombre}});}espanaMapaAciertos.textContent=String(espanaMapaOk);espanaMapaFallos.textContent=String(espanaMapaKo);espanaMapaLienzo.querySelectorAll(`[data-id="${espanaMapaActual.id}"]`).forEach(x=>x.classList.add('esp-mapa-correcto'));if(!ok)espanaMapaLienzo.querySelectorAll(`[data-id="${id}"]`).forEach(x=>x.classList.add('esp-mapa-incorrecto'));espanaMapaFeedback.innerHTML=`<div class="feedback-kicker">${ok?'✅ Correcto':'❌ Incorrecto'}</div><div class="feedback-ficha"><strong>${espanaMapaActual.nombre}</strong><span>${espanaMapaActual.detalle}</span></div>`;espanaMapaFeedback.classList.remove('oculto');espanaMapaSiguiente.classList.remove('oculto');}

document.getElementById('btn-espana-mapa').addEventListener('click',abrirEspanaMapa);
document.getElementById('volver-espana-mapa').addEventListener('click',mostrarEspanaMenu);
document.getElementById('espana-mapa-cambiar').addEventListener('click',()=>{espanaMapaJuego.classList.add('oculto');espanaMapaSelector.classList.remove('oculto');});
document.querySelectorAll('.espana-mapa-modo').forEach(b=>b.addEventListener('click',()=>iniciarEspanaMapa(b.dataset.espanaMapaModo)));
espanaMapaSiguiente.addEventListener('click',mostrarEspanaMapa);
