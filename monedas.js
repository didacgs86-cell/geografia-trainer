// ==========================================
// GEOTRAINER - MONEDAS
// 195 estados soberanos · actualizado 2026-10
// ==========================================

const MONEDAS_POR_ISO = {"AF":{"codigo":"AFN","moneda":"afgani afgano","simbolo":"","nota":""},"AL":{"codigo":"ALL","moneda":"lek albanés","simbolo":"","nota":""},"DE":{"codigo":"EUR","moneda":"euro","simbolo":"€","nota":""},"AD":{"codigo":"EUR","moneda":"euro","simbolo":"€","nota":""},"AO":{"codigo":"AOA","moneda":"kuanza angoleño","simbolo":"","nota":""},"AG":{"codigo":"XCD","moneda":"dólar del Caribe Oriental","simbolo":"","nota":""},"SA":{"codigo":"SAR","moneda":"rial saudí","simbolo":"","nota":""},"DZ":{"codigo":"DZD","moneda":"dinar argelino","simbolo":"","nota":""},"AR":{"codigo":"ARS","moneda":"peso argentino","simbolo":"","nota":""},"AM":{"codigo":"AMD","moneda":"dram armenio","simbolo":"","nota":""},"AU":{"codigo":"AUD","moneda":"dólar australiano","simbolo":"A$","nota":""},"AT":{"codigo":"EUR","moneda":"euro","simbolo":"€","nota":""},"AZ":{"codigo":"AZN","moneda":"manat azerbaiyano","simbolo":"","nota":""},"BS":{"codigo":"BSD","moneda":"dólar bahameño","simbolo":"","nota":""},"BD":{"codigo":"BDT","moneda":"taka bangladesí","simbolo":"","nota":""},"BB":{"codigo":"BBD","moneda":"dólar barbadense","simbolo":"","nota":""},"BH":{"codigo":"BHD","moneda":"dinar bareiní","simbolo":"","nota":""},"BZ":{"codigo":"BZD","moneda":"dólar beliceño","simbolo":"","nota":""},"BJ":{"codigo":"XOF","moneda":"franco CFA de África Occidental","simbolo":"","nota":""},"BY":{"codigo":"BYN","moneda":"rublo bielorruso","simbolo":"","nota":""},"BO":{"codigo":"BOB","moneda":"boliviano","simbolo":"","nota":""},"BA":{"codigo":"BAM","moneda":"marco convertible de Bosnia y Herzegovina","simbolo":"","nota":""},"BW":{"codigo":"BWP","moneda":"pula botsuano","simbolo":"","nota":""},"BR":{"codigo":"BRL","moneda":"real brasileño","simbolo":"R$","nota":""},"BN":{"codigo":"BND","moneda":"dólar bruneano","simbolo":"","nota":""},"BG":{"codigo":"EUR","moneda":"euro","simbolo":"€","nota":"Bulgaria utiliza el euro desde el 1 de enero de 2026."},"BF":{"codigo":"XOF","moneda":"franco CFA de África Occidental","simbolo":"","nota":""},"BI":{"codigo":"BIF","moneda":"franco burundés","simbolo":"","nota":""},"BT":{"codigo":"BTN","moneda":"ngultrum butanés","simbolo":"","nota":"El ngultrum es la moneda nacional de Bután; la rupia india también circula ampliamente."},"BE":{"codigo":"EUR","moneda":"euro","simbolo":"€","nota":""},"CV":{"codigo":"CVE","moneda":"escudo de Cabo Verde","simbolo":"","nota":""},"KH":{"codigo":"KHR","moneda":"riel camboyano","simbolo":"","nota":""},"CM":{"codigo":"XAF","moneda":"franco CFA de África Central","simbolo":"","nota":""},"CA":{"codigo":"CAD","moneda":"dólar canadiense","simbolo":"C$","nota":""},"QA":{"codigo":"QAR","moneda":"rial catarí","simbolo":"","nota":""},"TD":{"codigo":"XAF","moneda":"franco CFA de África Central","simbolo":"","nota":""},"CZ":{"codigo":"CZK","moneda":"corona checa","simbolo":"Kč","nota":""},"CL":{"codigo":"CLP","moneda":"peso chileno","simbolo":"","nota":""},"CN":{"codigo":"CNY","moneda":"yuan renminbi","simbolo":"¥","nota":""},"CY":{"codigo":"EUR","moneda":"euro","simbolo":"€","nota":""},"VA":{"codigo":"EUR","moneda":"euro","simbolo":"€","nota":""},"CO":{"codigo":"COP","moneda":"peso colombiano","simbolo":"","nota":""},"KM":{"codigo":"KMF","moneda":"franco comorense","simbolo":"","nota":""},"KP":{"codigo":"KPW","moneda":"won norcoreano","simbolo":"","nota":""},"KR":{"codigo":"KRW","moneda":"won surcoreano","simbolo":"₩","nota":""},"CR":{"codigo":"CRC","moneda":"colón costarricense","simbolo":"","nota":""},"CI":{"codigo":"XOF","moneda":"franco CFA de África Occidental","simbolo":"","nota":""},"HR":{"codigo":"EUR","moneda":"euro","simbolo":"€","nota":""},"CU":{"codigo":"CUP","moneda":"peso cubano","simbolo":"","nota":""},"DK":{"codigo":"DKK","moneda":"corona danesa","simbolo":"","nota":""},"DM":{"codigo":"XCD","moneda":"dólar del Caribe Oriental","simbolo":"","nota":""},"EC":{"codigo":"USD","moneda":"dólar estadounidense","simbolo":"$","nota":""},"EG":{"codigo":"EGP","moneda":"libra egipcia","simbolo":"","nota":""},"SV":{"codigo":"USD","moneda":"dólar estadounidense","simbolo":"$","nota":""},"AE":{"codigo":"AED","moneda":"dírham de los Emiratos Árabes Unidos","simbolo":"","nota":""},"ER":{"codigo":"ERN","moneda":"nakfa eritreo","simbolo":"","nota":""},"SK":{"codigo":"EUR","moneda":"euro","simbolo":"€","nota":""},"SI":{"codigo":"EUR","moneda":"euro","simbolo":"€","nota":""},"ES":{"codigo":"EUR","moneda":"euro","simbolo":"€","nota":""},"US":{"codigo":"USD","moneda":"dólar estadounidense","simbolo":"$","nota":""},"EE":{"codigo":"EUR","moneda":"euro","simbolo":"€","nota":""},"SZ":{"codigo":"SZL","moneda":"lilangeni esuatiní","simbolo":"","nota":""},"ET":{"codigo":"ETB","moneda":"birr etíope","simbolo":"","nota":""},"PH":{"codigo":"PHP","moneda":"peso filipino","simbolo":"₱","nota":""},"FI":{"codigo":"EUR","moneda":"euro","simbolo":"€","nota":""},"FJ":{"codigo":"FJD","moneda":"dólar fiyiano","simbolo":"","nota":""},"FR":{"codigo":"EUR","moneda":"euro","simbolo":"€","nota":""},"GA":{"codigo":"XAF","moneda":"franco CFA de África Central","simbolo":"","nota":""},"GM":{"codigo":"GMD","moneda":"dalasi gambiano","simbolo":"","nota":""},"GE":{"codigo":"GEL","moneda":"lari georgiano","simbolo":"","nota":""},"GH":{"codigo":"GHS","moneda":"cedi ghanés","simbolo":"₵","nota":""},"GD":{"codigo":"XCD","moneda":"dólar del Caribe Oriental","simbolo":"","nota":""},"GR":{"codigo":"EUR","moneda":"euro","simbolo":"€","nota":""},"GT":{"codigo":"GTQ","moneda":"quetzal guatemalteco","simbolo":"","nota":""},"GN":{"codigo":"GNF","moneda":"franco guineano","simbolo":"","nota":""},"GQ":{"codigo":"XAF","moneda":"franco CFA de África Central","simbolo":"","nota":""},"GW":{"codigo":"XOF","moneda":"franco CFA de África Occidental","simbolo":"","nota":""},"GY":{"codigo":"GYD","moneda":"dólar guyanés","simbolo":"","nota":""},"HT":{"codigo":"HTG","moneda":"gourde haitiano","simbolo":"","nota":""},"HN":{"codigo":"HNL","moneda":"lempira hondureño","simbolo":"","nota":""},"HU":{"codigo":"HUF","moneda":"forinto húngaro","simbolo":"Ft","nota":""},"IN":{"codigo":"INR","moneda":"rupia india","simbolo":"₹","nota":""},"ID":{"codigo":"IDR","moneda":"rupia indonesia","simbolo":"Rp","nota":""},"IQ":{"codigo":"IQD","moneda":"dinar iraquí","simbolo":"","nota":""},"IE":{"codigo":"EUR","moneda":"euro","simbolo":"€","nota":""},"IR":{"codigo":"IRR","moneda":"rial iraní","simbolo":"","nota":""},"IS":{"codigo":"ISK","moneda":"corona islandesa","simbolo":"","nota":""},"MH":{"codigo":"USD","moneda":"dólar estadounidense","simbolo":"$","nota":""},"SB":{"codigo":"SBD","moneda":"dólar salomonense","simbolo":"","nota":""},"IL":{"codigo":"ILS","moneda":"nuevo séquel israelí","simbolo":"₪","nota":""},"IT":{"codigo":"EUR","moneda":"euro","simbolo":"€","nota":""},"JM":{"codigo":"JMD","moneda":"dólar jamaicano","simbolo":"","nota":""},"JP":{"codigo":"JPY","moneda":"yen japonés","simbolo":"¥","nota":""},"JO":{"codigo":"JOD","moneda":"dinar jordano","simbolo":"","nota":""},"KZ":{"codigo":"KZT","moneda":"tenge kazajo","simbolo":"","nota":""},"KE":{"codigo":"KES","moneda":"chelín keniano","simbolo":"","nota":""},"KG":{"codigo":"KGS","moneda":"som kirguís","simbolo":"","nota":""},"KI":{"codigo":"AUD","moneda":"dólar australiano","simbolo":"A$","nota":""},"KW":{"codigo":"KWD","moneda":"dinar kuwaití","simbolo":"","nota":""},"LA":{"codigo":"LAK","moneda":"kip laosiano","simbolo":"","nota":""},"LS":{"codigo":"LSL","moneda":"loti lesotense","simbolo":"","nota":"El loti es la moneda nacional de Lesoto; el rand sudafricano también circula en el país."},"LV":{"codigo":"EUR","moneda":"euro","simbolo":"€","nota":""},"LR":{"codigo":"LRD","moneda":"dólar liberiano","simbolo":"","nota":""},"LY":{"codigo":"LYD","moneda":"dinar libio","simbolo":"","nota":""},"LI":{"codigo":"CHF","moneda":"franco suizo","simbolo":"","nota":""},"LT":{"codigo":"EUR","moneda":"euro","simbolo":"€","nota":""},"LU":{"codigo":"EUR","moneda":"euro","simbolo":"€","nota":""},"LB":{"codigo":"LBP","moneda":"libra libanesa","simbolo":"","nota":""},"MK":{"codigo":"MKD","moneda":"dinar macedonio","simbolo":"","nota":""},"MG":{"codigo":"MGA","moneda":"ariari malgache","simbolo":"","nota":""},"MY":{"codigo":"MYR","moneda":"ringit malasio","simbolo":"RM","nota":""},"MW":{"codigo":"MWK","moneda":"kwacha malauí","simbolo":"","nota":""},"MV":{"codigo":"MVR","moneda":"rufiyaa maldiva","simbolo":"","nota":""},"ML":{"codigo":"XOF","moneda":"franco CFA de África Occidental","simbolo":"","nota":""},"MT":{"codigo":"EUR","moneda":"euro","simbolo":"€","nota":""},"MA":{"codigo":"MAD","moneda":"dírham marroquí","simbolo":"","nota":""},"MU":{"codigo":"MUR","moneda":"rupia mauriciana","simbolo":"","nota":""},"MR":{"codigo":"MRU","moneda":"uguiya mauritana","simbolo":"","nota":""},"FM":{"codigo":"USD","moneda":"dólar estadounidense","simbolo":"$","nota":""},"MD":{"codigo":"MDL","moneda":"leu moldavo","simbolo":"","nota":""},"MN":{"codigo":"MNT","moneda":"tugrik mongol","simbolo":"","nota":""},"ME":{"codigo":"EUR","moneda":"euro","simbolo":"€","nota":""},"MZ":{"codigo":"MZN","moneda":"metical mozambiqueño","simbolo":"","nota":""},"MM":{"codigo":"MMK","moneda":"kyat birmano","simbolo":"","nota":""},"MX":{"codigo":"MXN","moneda":"peso mexicano","simbolo":"","nota":""},"MC":{"codigo":"EUR","moneda":"euro","simbolo":"€","nota":""},"NA":{"codigo":"NAD","moneda":"dólar namibio","simbolo":"","nota":"El dólar namibio es la moneda nacional; el rand sudafricano también circula en Namibia."},"NR":{"codigo":"AUD","moneda":"dólar australiano","simbolo":"A$","nota":""},"NP":{"codigo":"NPR","moneda":"rupia nepalí","simbolo":"","nota":""},"NI":{"codigo":"NIO","moneda":"córdoba oro","simbolo":"","nota":""},"NG":{"codigo":"NGN","moneda":"naira nigeriano","simbolo":"₦","nota":""},"NO":{"codigo":"NOK","moneda":"corona noruega","simbolo":"","nota":""},"NZ":{"codigo":"NZD","moneda":"dólar neozelandés","simbolo":"NZ$","nota":""},"NE":{"codigo":"XOF","moneda":"franco CFA de África Occidental","simbolo":"","nota":""},"OM":{"codigo":"OMR","moneda":"rial omaní","simbolo":"","nota":""},"PK":{"codigo":"PKR","moneda":"rupia pakistaní","simbolo":"","nota":""},"PW":{"codigo":"USD","moneda":"dólar estadounidense","simbolo":"$","nota":""},"PS":{"codigo":"ILS","moneda":"nuevo séquel israelí","simbolo":"₪","nota":"Palestina no emite una moneda nacional propia. El nuevo séquel israelí es la moneda de uso cotidiano predominante; también circulan legalmente otras divisas."},"PA":{"codigo":"PAB","moneda":"balboa panameño","simbolo":"","nota":"Panamá tiene el balboa como moneda nacional y el dólar estadounidense también es de curso legal y de uso cotidiano."},"PG":{"codigo":"PGK","moneda":"kina papú","simbolo":"","nota":""},"PY":{"codigo":"PYG","moneda":"guaraní paraguayo","simbolo":"","nota":""},"NL":{"codigo":"EUR","moneda":"euro","simbolo":"€","nota":""},"PE":{"codigo":"PEN","moneda":"sol peruano","simbolo":"","nota":""},"PL":{"codigo":"PLN","moneda":"zloty polaco","simbolo":"zł","nota":""},"PT":{"codigo":"EUR","moneda":"euro","simbolo":"€","nota":""},"GB":{"codigo":"GBP","moneda":"libra esterlina","simbolo":"£","nota":""},"CF":{"codigo":"XAF","moneda":"franco CFA de África Central","simbolo":"","nota":""},"CD":{"codigo":"CDF","moneda":"franco congoleño","simbolo":"","nota":""},"DO":{"codigo":"DOP","moneda":"peso dominicano","simbolo":"","nota":""},"CG":{"codigo":"XAF","moneda":"franco CFA de África Central","simbolo":"","nota":""},"RW":{"codigo":"RWF","moneda":"franco ruandés","simbolo":"","nota":""},"RO":{"codigo":"RON","moneda":"leu rumano","simbolo":"","nota":""},"RU":{"codigo":"RUB","moneda":"rublo ruso","simbolo":"₽","nota":""},"WS":{"codigo":"WST","moneda":"tala samoano","simbolo":"","nota":""},"KN":{"codigo":"XCD","moneda":"dólar del Caribe Oriental","simbolo":"","nota":""},"SM":{"codigo":"EUR","moneda":"euro","simbolo":"€","nota":""},"VC":{"codigo":"XCD","moneda":"dólar del Caribe Oriental","simbolo":"","nota":""},"LC":{"codigo":"XCD","moneda":"dólar del Caribe Oriental","simbolo":"","nota":""},"ST":{"codigo":"STN","moneda":"dobra santotomense","simbolo":"","nota":""},"SN":{"codigo":"XOF","moneda":"franco CFA de África Occidental","simbolo":"","nota":""},"RS":{"codigo":"RSD","moneda":"dinar serbio","simbolo":"","nota":""},"SC":{"codigo":"SCR","moneda":"rupia seychellense","simbolo":"","nota":""},"SL":{"codigo":"SLE","moneda":"leone sierraleonés","simbolo":"","nota":""},"SG":{"codigo":"SGD","moneda":"dólar singapurense","simbolo":"S$","nota":""},"SY":{"codigo":"SYP","moneda":"libra siria","simbolo":"","nota":""},"SO":{"codigo":"SOS","moneda":"chelín somalí","simbolo":"","nota":""},"LK":{"codigo":"LKR","moneda":"rupia esrilanquesa","simbolo":"","nota":""},"ZA":{"codigo":"ZAR","moneda":"rand sudafricano","simbolo":"R","nota":""},"SD":{"codigo":"SDG","moneda":"libra sudanesa","simbolo":"","nota":""},"SS":{"codigo":"SSP","moneda":"libra sursudanesa","simbolo":"","nota":""},"SE":{"codigo":"SEK","moneda":"corona sueca","simbolo":"","nota":""},"CH":{"codigo":"CHF","moneda":"franco suizo","simbolo":"","nota":""},"SR":{"codigo":"SRD","moneda":"dólar surinamés","simbolo":"","nota":""},"TH":{"codigo":"THB","moneda":"baht tailandés","simbolo":"฿","nota":""},"TZ":{"codigo":"TZS","moneda":"chelín tanzano","simbolo":"","nota":""},"TJ":{"codigo":"TJS","moneda":"somoni tayiko","simbolo":"","nota":""},"TL":{"codigo":"USD","moneda":"dólar estadounidense","simbolo":"$","nota":""},"TG":{"codigo":"XOF","moneda":"franco CFA de África Occidental","simbolo":"","nota":""},"TO":{"codigo":"TOP","moneda":"paanga tongano","simbolo":"","nota":""},"TT":{"codigo":"TTD","moneda":"dólar de Trinidad y Tobago","simbolo":"","nota":""},"TM":{"codigo":"TMT","moneda":"manat turcomano","simbolo":"","nota":""},"TR":{"codigo":"TRY","moneda":"lira turca","simbolo":"₺","nota":""},"TV":{"codigo":"AUD","moneda":"dólar australiano","simbolo":"A$","nota":""},"TN":{"codigo":"TND","moneda":"dinar tunecino","simbolo":"","nota":""},"UA":{"codigo":"UAH","moneda":"grivna ucraniana","simbolo":"₴","nota":""},"UG":{"codigo":"UGX","moneda":"chelín ugandés","simbolo":"","nota":""},"UY":{"codigo":"UYU","moneda":"peso uruguayo","simbolo":"","nota":""},"UZ":{"codigo":"UZS","moneda":"sum uzbeko","simbolo":"","nota":""},"VU":{"codigo":"VUV","moneda":"vatu vanuatense","simbolo":"","nota":""},"VE":{"codigo":"VES","moneda":"bolívar venezolano","simbolo":"","nota":""},"VN":{"codigo":"VND","moneda":"dong vietnamita","simbolo":"₫","nota":""},"YE":{"codigo":"YER","moneda":"rial yemení","simbolo":"","nota":""},"DJ":{"codigo":"DJF","moneda":"franco yibutiano","simbolo":"","nota":""},"ZM":{"codigo":"ZMW","moneda":"kuacha zambiano","simbolo":"","nota":""},"ZW":{"codigo":"ZWG","moneda":"Zimbabwe Gold (ZiG)","simbolo":"","nota":"Zimbabwe utiliza el Zimbabwe Gold (ZiG) como moneda local y mantiene además un sistema multimoneda en el que pueden utilizarse divisas extranjeras."}};
const MONEDAS_TIEMPO_EXAMEN = 10;

const MONEDAS_DATA = GEO_DATA
  .filter(p => p.categoria === "estado" && MONEDAS_POR_ISO[p.iso2])
  .map(p => ({ ...p, ...MONEDAS_POR_ISO[p.iso2] }));

const monedasMenu = document.getElementById("monedas-menu");
const monedasConfig = document.getElementById("monedas-config");
const monedasJuego = document.getElementById("monedas-juego");
const monedasFin = document.getElementById("monedas-fin");
const monedasPausa = document.getElementById("monedas-pausa");

const monedasConfigTitulo = document.getElementById("monedas-config-titulo");
const monedasConfigIcono = document.getElementById("monedas-config-icono");
const monedasConfigDescripcion = document.getElementById("monedas-config-descripcion");
const monedasRegionSelect = document.getElementById("monedas-region");
const monedasDisponibles = document.getElementById("monedas-disponibles");

const monedasExamen10 = document.getElementById("monedas-examen10");
const monedasExamen20 = document.getElementById("monedas-examen20");
const monedasExamen10Titulo = document.getElementById("monedas-examen10-titulo");
const monedasExamen20Titulo = document.getElementById("monedas-examen20-titulo");
const monedasExamen20Subtitulo = document.getElementById("monedas-examen20-subtitulo");

const monedasTipoPartida = document.getElementById("monedas-tipo-partida");
const monedasNumeroPregunta = document.getElementById("monedas-numero-pregunta");
const monedasTemporizador = document.getElementById("monedas-temporizador");
const monedasAciertosTexto = document.getElementById("monedas-aciertos");
const monedasFallosTexto = document.getElementById("monedas-fallos");
const monedasPreguntaTexto = document.getElementById("monedas-pregunta");
const monedasRespuestas = document.getElementById("monedas-respuestas");
const monedasFeedback = document.getElementById("monedas-feedback");
const monedasSiguiente = document.getElementById("monedas-siguiente");
const monedasPausaTexto = document.getElementById("monedas-pausa-texto");
const monedasResultadoExamen = document.getElementById("monedas-resultado-examen");
const monedasRevisionExamen = document.getElementById("monedas-revision-examen");

let monedasModoActual = "pais-moneda";
let monedasRegionActual = "Todos";
let monedasTipoActual = "entrenamiento";
let monedasPlanActual = [];
let monedasIndiceActual = 0;
let monedasPreguntaActual = null;
let monedasOpcionesActuales = [];
let monedasAciertos = 0;
let monedasFallos = 0;
let monedasResultados = [];
let monedasColaEntrenamiento = [];
let monedasUltimoIdEntrenamiento = null;
let monedasContestadasEntrenamiento = 0;
let monedasPausaPendiente = false;
let monedasTemporizadorId = null;
let monedasTiempoRestante = MONEDAS_TIEMPO_EXAMEN;
let monedasUltimoExamen = null;
let monedasCantidadExamenConfigurada = 10;
let monedasEsRepasoFallos = false;

function barajarMonedas(lista) {
  const copia = [...lista];
  for (let i = copia.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [copia[i], copia[j]] = [copia[j], copia[i]];
  }
  return copia;
}

function banderaMonedas(iso) {
  if (!iso || iso.length !== 2) return "";
  return String.fromCodePoint(
    ...[...iso.toUpperCase()].map(letra => 127397 + letra.charCodeAt(0))
  );
}

function escaparMonedas(texto) {
  return String(texto ?? "")
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#039;");
}

function capitalizarMonedas(texto) {
  if (!texto) return "";
  return texto.charAt(0).toUpperCase() + texto.slice(1);
}

function monedaCortaMonedas(moneda) {

  if (!moneda) return "";

  if (moneda.codigo === "ILS") {
    return "séquel";
  }

  if (moneda.codigo === "ZWG") {
    return "ZiG";
  }

  const nombre =
    String(moneda.moneda || "")
      .trim();

  if (!nombre) {
    return moneda.codigo || "";
  }

  return nombre
    .split(/\s+/)[0]
    .toLowerCase();
}

function etiquetaMoneda(moneda) {
  const simbolo = moneda.simbolo ? ` · ${moneda.simbolo}` : "";
  return `${capitalizarMonedas(moneda.moneda)} (${moneda.codigo})${simbolo}`;
}

function regionTextoMonedas() {
  return monedasRegionActual === "Todos" ? "Todo el mundo" : monedasRegionActual;
}

function datosFiltradosMonedas() {
  if (monedasRegionActual === "Todos") return [...MONEDAS_DATA];
  return MONEDAS_DATA.filter(p => p.continente === monedasRegionActual);
}

function crearBancoMonedas() {
  const datos = datosFiltradosMonedas();

  if (monedasModoActual === "pais-moneda") {
    return datos.map(pais => ({
      id: `pais-moneda-${pais.iso2}`,
      tipo: "pais-moneda",
      pais
    }));
  }

  const porDenominacion =
    new Map();

  datos.forEach(pais => {

    const corta =
      monedaCortaMonedas(pais);

    if (
      !porDenominacion.has(
        corta
      )
    ) {
      porDenominacion.set(
        corta,
        []
      );
    }

    porDenominacion
      .get(corta)
      .push(pais);
  });

  return [...porDenominacion.entries()]
    .map(
      ([monedaCorta, paises]) => ({
        id:
          `moneda-pais-${monedaCorta}`,
        tipo:
          "moneda-pais",
        monedaCorta,
        paisesCorrectos:
          paises
      })
    );
}

function concretarPreguntaMonedas(base) {
  if (base.tipo === "pais-moneda") return { ...base };

  return {
    ...base,
    paisCorrecto: barajarMonedas(base.paisesCorrectos)[0]
  };
}

function crearOpcionesMonedas(pregunta) {
  const datos = datosFiltradosMonedas();

  if (pregunta.tipo === "pais-moneda") {

    const correctoCodigo =
      pregunta.pais.codigo;

    const correctoCorto =
      monedaCortaMonedas(
        pregunta.pais
      );

    const porDenominacion =
      new Map();

    datos.forEach(pais => {

      const corta =
        monedaCortaMonedas(pais);

      if (
        corta !== correctoCorto &&
        !porDenominacion.has(corta)
      ) {
        porDenominacion.set(
          corta,
          pais
        );
      }
    });

    const distractores =
      barajarMonedas(
        [...porDenominacion.values()]
      )
        .slice(0, 3);

    return barajarMonedas([
      {
        valor: correctoCodigo,
        texto:
          capitalizarMonedas(
            correctoCorto
          )
      },
      ...distractores.map(
        pais => ({
          valor:
            pais.codigo,
          texto:
            capitalizarMonedas(
              monedaCortaMonedas(
                pais
              )
            )
        })
      )
    ]);
  }

  const correctos =
    new Set(
      pregunta.paisesCorrectos.map(
        p => p.iso2
      )
    );

  const distractores =
    barajarMonedas(
      datos.filter(
        pais =>
          !correctos.has(
            pais.iso2
          ) &&
          monedaCortaMonedas(
            pais
          ) !==
            pregunta.monedaCorta
      )
    )
      .slice(0, 3);

  return barajarMonedas([
    pregunta.paisCorrecto,
    ...distractores
  ])
    .map(
      pais => ({
        valor:
          pais.iso2,
        texto:
          `${banderaMonedas(pais.iso2)} ${pais.pais}`
      })
    );
}

function cancelarTemporizadorMonedas() {
  if (monedasTemporizadorId !== null) {
    clearInterval(monedasTemporizadorId);
    monedasTemporizadorId = null;
  }

  monedasTemporizador.classList.add("oculto");
  monedasTemporizador.classList.remove("urgente");
}

function ocultarPantallasMonedas() {
  cancelarTemporizadorMonedas();

  [monedasMenu, monedasConfig, monedasJuego, monedasFin].forEach(pantalla => {
    if (pantalla) pantalla.classList.add("oculto");
  });

  if (monedasPausa) monedasPausa.classList.add("oculto");
}

function abrirMonedasMenu() {
  ocultarTodasLasPantallas();
  monedasMenu.classList.remove("oculto");
}

function abrirConfiguracionMonedas(modo) {
  monedasModoActual = modo;
  monedasRegionActual = "Todos";
  monedasRegionSelect.value = "Todos";

  ocultarTodasLasPantallas();
  monedasConfig.classList.remove("oculto");

  if (modo === "pais-moneda") {
    monedasConfigIcono.textContent = "🌍";
    monedasConfigTitulo.textContent = "País → Moneda";
    monedasConfigDescripcion.textContent = "Te damos un país y eliges su moneda.";
  } else {
    monedasConfigIcono.textContent = "💵";
    monedasConfigTitulo.textContent = "Moneda → País";
    monedasConfigDescripcion.textContent = "Te damos una moneda y eliges un país que la utiliza.";
  }

  actualizarDisponibilidadMonedas();
}

function actualizarDisponibilidadMonedas() {
  monedasRegionActual = monedasRegionSelect.value;

  const total = crearBancoMonedas().length;
  const unidad = monedasModoActual === "pais-moneda" ? "países" : "monedas distintas";

  monedasDisponibles.innerHTML =
    `<strong>${total}</strong> ${unidad} disponibles en ${regionTextoMonedas()}.`;

  const cantidad10 = Math.min(10, total);
  const cantidad20 = Math.min(20, total);

  monedasExamen10Titulo.textContent =
    cantidad10 === 10 ? "Examen · 10 preguntas" : `Examen · ${cantidad10} preguntas (máximo)`;

  monedasExamen10.disabled = cantidad10 < 4;

  monedasExamen20Titulo.textContent =
    cantidad20 === 20 ? "Examen · 20 preguntas" : `Examen · ${cantidad20} preguntas (máximo)`;

  if (cantidad20 <= cantidad10) {
    monedasExamen20.disabled = true;
    monedasExamen20Subtitulo.textContent =
      `No hay más de ${cantidad10} preguntas distintas con este filtro.`;
  } else {
    monedasExamen20.disabled = false;
    monedasExamen20Subtitulo.textContent =
      "⏱ 10 s por pregunta · Revisión final.";
  }
}

function crearPlanExamenMonedas(cantidad, evitarIds = []) {
  const banco = crearBancoMonedas();
  const evitar = new Set(evitarIds);

  const nuevas = barajarMonedas(banco.filter(p => !evitar.has(p.id)));
  const antiguas = barajarMonedas(banco.filter(p => evitar.has(p.id)));

  return [...nuevas, ...antiguas]
    .slice(0, Math.min(cantidad, banco.length))
    .map(concretarPreguntaMonedas);
}

function prepararColaEntrenamientoMonedas() {
  let banco = barajarMonedas(crearBancoMonedas());

  if (
    monedasUltimoIdEntrenamiento &&
    banco.length > 1 &&
    banco[0].id === monedasUltimoIdEntrenamiento
  ) {
    [banco[0], banco[1]] = [banco[1], banco[0]];
  }

  monedasColaEntrenamiento = banco;
}

function siguienteEntrenamientoMonedas() {
  if (monedasColaEntrenamiento.length === 0) {
    prepararColaEntrenamientoMonedas();
  }

  const base = monedasColaEntrenamiento.shift();
  monedasUltimoIdEntrenamiento = base.id;

  return concretarPreguntaMonedas(base);
}

function iniciarPartidaMonedas(tipo, cantidad = null, planExacto = null) {
  cancelarTemporizadorMonedas();

  monedasTipoActual = tipo;
  monedasAciertos = 0;
  monedasFallos = 0;
  monedasResultados = [];
  monedasIndiceActual = 0;
  monedasPreguntaActual = null;
  monedasOpcionesActuales = [];
  monedasContestadasEntrenamiento = 0;
  monedasPausaPendiente = false;
  monedasEsRepasoFallos = false;

  monedasAciertosTexto.textContent = "0";
  monedasFallosTexto.textContent = "0";

  if (tipo === "entrenamiento") {
    monedasPlanActual = [];
    monedasColaEntrenamiento = [];
    monedasUltimoIdEntrenamiento = null;
  } else {
    monedasPlanActual = planExacto
      ? JSON.parse(JSON.stringify(planExacto))
      : crearPlanExamenMonedas(cantidad);

    monedasCantidadExamenConfigurada = monedasPlanActual.length;
  }

  ocultarTodasLasPantallas();
  monedasJuego.classList.remove("oculto");
  mostrarPreguntaMonedas();
}

function mostrarPreguntaMonedas() {
  cancelarTemporizadorMonedas();

  monedasFeedback.innerHTML = "";
  monedasFeedback.classList.remove("monedas-respondida");
  monedasFeedback.classList.add("oculto");
  monedasSiguiente.classList.add("oculto");
  monedasRespuestas.innerHTML = "";

  if (monedasTipoActual === "entrenamiento") {
    monedasPreguntaActual = siguienteEntrenamientoMonedas();
    monedasNumeroPregunta.textContent =
      `Pregunta ${monedasContestadasEntrenamiento + 1}`;
    monedasTipoPartida.textContent =
      `${monedasModoActual === "pais-moneda" ? "País → Moneda" : "Moneda → País"} · Entrenamiento · ${regionTextoMonedas()}`;
  } else {
    monedasPreguntaActual = monedasPlanActual[monedasIndiceActual];

    if (!monedasPreguntaActual) {
      finalizarExamenMonedas();
      return;
    }

    monedasNumeroPregunta.textContent =
      `Pregunta ${monedasIndiceActual + 1} de ${monedasPlanActual.length}`;
    monedasTipoPartida.textContent =
      `${monedasModoActual === "pais-moneda" ? "País → Moneda" : "Moneda → País"} · Examen · ${regionTextoMonedas()}`;
  }

  if (monedasPreguntaActual.tipo === "pais-moneda") {
    const pais = monedasPreguntaActual.pais;
    monedasPreguntaTexto.innerHTML =
      `¿Cuál es la moneda de <strong>${banderaMonedas(pais.iso2)} ${escaparMonedas(pais.pais)}</strong>?`;
  } else {
    monedasPreguntaTexto.innerHTML =
      `¿Cuál de estos países utiliza <strong>${escaparMonedas(capitalizarMonedas(monedasPreguntaActual.monedaCorta))}</strong>?`;
  }

  monedasOpcionesActuales = crearOpcionesMonedas(monedasPreguntaActual);

  monedasOpcionesActuales.forEach(opcion => {
    const boton = document.createElement("button");
    boton.type = "button";
    boton.className = "moneda-respuesta";
    boton.textContent = opcion.texto;
    boton.dataset.valor = opcion.valor;

    boton.addEventListener("click", () => {
      responderMonedas(opcion.valor, boton);
    });

    monedasRespuestas.appendChild(boton);
  });

  iniciarTemporizadorMonedas();
}

function iniciarTemporizadorMonedas() {
  if (monedasTipoActual === "entrenamiento") {
    monedasTemporizador.classList.add("oculto");
    return;
  }

  monedasTiempoRestante = MONEDAS_TIEMPO_EXAMEN;
  monedasTemporizador.classList.remove("oculto");
  actualizarTemporizadorMonedas();

  monedasTemporizadorId = setInterval(() => {
    monedasTiempoRestante--;
    actualizarTemporizadorMonedas();

    if (monedasTiempoRestante <= 0) {
      clearInterval(monedasTemporizadorId);
      monedasTemporizadorId = null;
      responderMonedas(null, null, true);
    }
  }, 1000);
}

function actualizarTemporizadorMonedas() {
  monedasTemporizador.textContent = `⏱ ${monedasTiempoRestante} s`;
  monedasTemporizador.classList.toggle("urgente", monedasTiempoRestante <= 3);
}

function respuestaCorrectaMonedas() {
  if (monedasPreguntaActual.tipo === "pais-moneda") {
    return monedasPreguntaActual.pais.codigo;
  }

  return monedasPreguntaActual.paisCorrecto.iso2;
}

function responderMonedas(valor, botonElegido, tiempoAgotado = false) {
  if (monedasFeedback.classList.contains("monedas-respondida")) return;

  cancelarTemporizadorMonedas();
  monedasFeedback.classList.add("monedas-respondida");

  const correcta = respuestaCorrectaMonedas();
  const acierto = valor === correcta;

  if (acierto) monedasAciertos++;
  else monedasFallos++;

  monedasAciertosTexto.textContent = String(monedasAciertos);
  monedasFallosTexto.textContent = String(monedasFallos);

  [...monedasRespuestas.children].forEach(boton => {
    boton.disabled = true;

    if (boton.dataset.valor === correcta) {
      boton.classList.add("respuesta-correcta");
    }
  });

  if (!acierto && botonElegido) {
    botonElegido.classList.add("respuesta-incorrecta");
  }

  const resultado = {
    pregunta: JSON.parse(JSON.stringify(monedasPreguntaActual)),
    respuesta: valor,
    acierto,
    tiempoAgotado
  };

  if (monedasTipoActual !== "entrenamiento") {
    monedasResultados.push(resultado);
  } else {
    monedasContestadasEntrenamiento++;

    if (
      monedasContestadasEntrenamiento > 0 &&
      monedasContestadasEntrenamiento % 15 === 0
    ) {
      monedasPausaPendiente = true;
    }
  }

  mostrarFeedbackMonedas(acierto, tiempoAgotado);

  monedasSiguiente.classList.remove("oculto");

  if (monedasTipoActual === "entrenamiento") {
    monedasSiguiente.textContent =
      monedasPausaPendiente ? "Continuar práctica →" : "Siguiente pregunta →";
  } else {
    monedasSiguiente.textContent =
      monedasIndiceActual === monedasPlanActual.length - 1
        ? "Ver resultado →"
        : "Siguiente pregunta →";
  }
}

function paisesQueCompartenMoneda(codigo, excluirISO = null) {
  return MONEDAS_DATA.filter(
    pais => pais.codigo === codigo && pais.iso2 !== excluirISO
  );
}

function textoCompartidaMonedas(codigo, excluirISO = null) {
  const otros = paisesQueCompartenMoneda(codigo, excluirISO);

  if (otros.length === 0) return "";

  const visibles = otros.slice(0, 6);
  const resto = otros.length - visibles.length;

  return `
    <div class="moneda-compartida">
      <strong>También se utiliza en:</strong>
      ${visibles.map(p => `${banderaMonedas(p.iso2)} ${escaparMonedas(p.pais)}`).join(" · ")}
      ${resto > 0 ? ` · y ${resto} más` : ""}
    </div>
  `;
}

function mostrarFeedbackMonedas(acierto, tiempoAgotado) {
  const pregunta = monedasPreguntaActual;

  let pais;
  let moneda;

  if (pregunta.tipo === "pais-moneda") {
    pais = pregunta.pais;
    moneda = pregunta.pais;
  } else {
    pais = pregunta.paisCorrecto;
    moneda = pregunta.paisCorrecto;
  }

  const titulo = tiempoAgotado
    ? "⏱ Tiempo agotado"
    : acierto
      ? "✅ Correcto"
      : "❌ Incorrecto";

  const nota = pais.nota
    ? `<div class="moneda-nota">💡 ${escaparMonedas(pais.nota)}</div>`
    : "";

  monedasFeedback.innerHTML = `
    <div class="moneda-feedback-titulo">${titulo}</div>

    <div class="moneda-ficha">
      <div class="moneda-ficha-pais">
        ${banderaMonedas(pais.iso2)}
        <strong>${escaparMonedas(pais.pais)}</strong>
      </div>

      <div class="moneda-ficha-nombre">
        ${escaparMonedas(capitalizarMonedas(moneda.moneda))}
      </div>

      <div class="moneda-ficha-codigo">
        Código: <strong>${escaparMonedas(moneda.codigo)}</strong>
        ${moneda.simbolo ? ` · Símbolo: <strong>${escaparMonedas(moneda.simbolo)}</strong>` : ""}
      </div>

      ${nota}
      ${textoCompartidaMonedas(moneda.codigo, pais.iso2)}
    </div>
  `;

  monedasFeedback.classList.remove("oculto");
}

function avanzarMonedas() {
  monedasFeedback.classList.remove("monedas-respondida");

  if (monedasTipoActual === "entrenamiento") {
    if (monedasPausaPendiente) {
      monedasPausaTexto.textContent =
        `Llevas ${monedasContestadasEntrenamiento} preguntas: ${monedasAciertos} correctas y ${monedasFallos} incorrectas. ¿Quieres seguir practicando?`;

      monedasPausa.classList.remove("oculto");
      return;
    }

    mostrarPreguntaMonedas();
    return;
  }

  if (monedasIndiceActual >= monedasPlanActual.length - 1) {
    finalizarExamenMonedas();
    return;
  }

  monedasIndiceActual++;
  mostrarPreguntaMonedas();
}

function textoRespuestaMonedas(resultado) {
  if (!resultado.respuesta) return "Sin respuesta";

  if (resultado.pregunta.tipo === "pais-moneda") {
    const ejemplo = MONEDAS_DATA.find(p => p.codigo === resultado.respuesta);
    return ejemplo ? etiquetaMoneda(ejemplo) : resultado.respuesta;
  }

  const pais = MONEDAS_DATA.find(p => p.iso2 === resultado.respuesta);
  return pais ? `${banderaMonedas(pais.iso2)} ${pais.pais}` : resultado.respuesta;
}

function correctaRevisionMonedas(resultado) {
  const p = resultado.pregunta;

  if (p.tipo === "pais-moneda") {
    return etiquetaMoneda(p.pais);
  }

  return `${banderaMonedas(p.paisCorrecto.iso2)} ${p.paisCorrecto.pais}`;
}

function enunciadoRevisionMonedas(resultado) {
  const p = resultado.pregunta;

  if (p.tipo === "pais-moneda") {
    return `¿Cuál es la moneda de ${p.pais.pais}?`;
  }

  return `¿Qué país utiliza ${capitalizarMonedas(p.monedaCorta)}?`;
}

function crearRevisionMonedas() {
  return `
    <div class="revision-examen">
      <h3>📚 Revisión del examen</h3>
      <p class="revision-intro">Repasa las asociaciones entre países y monedas.</p>

      <div class="revision-lista">
        ${monedasResultados.map((resultado, indice) => `
          <div class="revision-item ${resultado.acierto ? "acierto" : "fallo"}">
            <div class="revision-cabecera">
              <span>Pregunta ${indice + 1}</span>
              <span>${resultado.acierto ? "✅ Correcta" : "❌ Incorrecta"}</span>
            </div>

            <div class="moneda-revision-enunciado">
              ${escaparMonedas(enunciadoRevisionMonedas(resultado))}
            </div>

            <div class="revision-correcta">
              Respuesta correcta:
              <strong>${escaparMonedas(correctaRevisionMonedas(resultado))}</strong>
            </div>

            ${resultado.acierto ? "" : `
              <div class="revision-tu-respuesta">
                Tu respuesta:
                <strong>${escaparMonedas(textoRespuestaMonedas(resultado))}</strong>
              </div>
            `}
          </div>
        `).join("")}
      </div>
    </div>
  `;
}

function finalizarExamenMonedas() {
  cancelarTemporizadorMonedas();

  ocultarTodasLasPantallas();
  monedasFin.classList.remove("oculto");

  const total = monedasResultados.length;
  const porcentaje = total > 0
    ? Math.round((monedasAciertos / total) * 100)
    : 0;

  monedasResultadoExamen.innerHTML = `
    <div class="nota-grande">${monedasAciertos} / ${total}</div>
    <div class="detalle-examen">
      ${porcentaje}% de aciertos
      <br>
      ${monedasModoActual === "pais-moneda" ? "País → Moneda" : "Moneda → País"}
      · ${regionTextoMonedas()}
    </div>
  `;

  monedasRevisionExamen.innerHTML = crearRevisionMonedas();

  const falladas = monedasResultados.filter(r => !r.acierto);
  const btnRepasar = document.getElementById("monedas-repasar-fallos");

  if (falladas.length > 0) {
    btnRepasar.textContent = `🎯 Repasar solo mis fallos (${falladas.length})`;
    btnRepasar.classList.remove("oculto");
  } else {
    btnRepasar.classList.add("oculto");
  }

  if (!monedasEsRepasoFallos) {
    monedasUltimoExamen = {
      modo: monedasModoActual,
      region: monedasRegionActual,
      cantidad: monedasPlanActual.length,
      plan: JSON.parse(JSON.stringify(monedasPlanActual)),
      resultados: JSON.parse(JSON.stringify(monedasResultados))
    };
  }
}

function repetirExamenMonedas() {
  if (!monedasUltimoExamen) return;

  monedasModoActual = monedasUltimoExamen.modo;
  monedasRegionActual = monedasUltimoExamen.region;
  monedasRegionSelect.value = monedasRegionActual;

  iniciarPartidaMonedas(
    "examen",
    monedasUltimoExamen.cantidad,
    monedasUltimoExamen.plan
  );
}

function nuevoExamenMonedas() {
  const cantidad = monedasUltimoExamen
    ? monedasUltimoExamen.cantidad
    : monedasCantidadExamenConfigurada;

  const evitar = monedasUltimoExamen
    ? monedasUltimoExamen.plan.map(p => p.id)
    : [];

  const plan = crearPlanExamenMonedas(cantidad, evitar);

  iniciarPartidaMonedas("examen", plan.length, plan);
}

function repasarFallosMonedas() {
  const falladas = monedasResultados
    .filter(r => !r.acierto)
    .map(r => JSON.parse(JSON.stringify(r.pregunta)));

  if (falladas.length === 0) return;

  iniciarPartidaMonedas("examen", falladas.length, falladas);
  monedasEsRepasoFallos = true;
}

// ==========================================
// EVENTOS
// ==========================================

document.querySelectorAll(".monedas-modo").forEach(boton => {
  boton.addEventListener("click", () => {
    abrirConfiguracionMonedas(boton.dataset.monedasModo);
  });
});

document.getElementById("volver-monedas-viajes")
  .addEventListener("click", mostrarViajesMenu);

document.getElementById("volver-monedas-menu")
  .addEventListener("click", abrirMonedasMenu);

monedasRegionSelect.addEventListener("change", actualizarDisponibilidadMonedas);

document.getElementById("monedas-entrenamiento")
  .addEventListener("click", () => iniciarPartidaMonedas("entrenamiento"));

monedasExamen10.addEventListener("click", () => {
  const cantidad = Math.min(10, crearBancoMonedas().length);
  monedasCantidadExamenConfigurada = cantidad;
  iniciarPartidaMonedas("examen", cantidad);
});

monedasExamen20.addEventListener("click", () => {
  if (monedasExamen20.disabled) return;
  const cantidad = Math.min(20, crearBancoMonedas().length);
  monedasCantidadExamenConfigurada = cantidad;
  iniciarPartidaMonedas("examen", cantidad);
});

document.getElementById("volver-monedas-desde-juego")
  .addEventListener("click", abrirMonedasMenu);

monedasSiguiente.addEventListener("click", avanzarMonedas);

document.getElementById("monedas-continuar")
  .addEventListener("click", () => {
    monedasPausaPendiente = false;
    monedasPausa.classList.add("oculto");
    mostrarPreguntaMonedas();
  });

document.getElementById("monedas-salir")
  .addEventListener("click", abrirMonedasMenu);

document.getElementById("monedas-repetir-examen")
  .addEventListener("click", repetirExamenMonedas);

document.getElementById("monedas-nuevo-examen")
  .addEventListener("click", nuevoExamenMonedas);

document.getElementById("monedas-repasar-fallos")
  .addEventListener("click", repasarFallosMonedas);

document.getElementById("volver-monedas-fin")
  .addEventListener("click", abrirMonedasMenu);

document.getElementById("monedas-volver-menu")
  .addEventListener("click", abrirMonedasMenu);
