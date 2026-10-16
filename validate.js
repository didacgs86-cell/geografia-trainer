#!/usr/bin/env node
"use strict";

const fs = require("fs");
const path = require("path");
const vm = require("vm");
const { spawnSync } = require("child_process");

const ROOT = __dirname;
let failures = 0;

function ok(message) { console.log(`✓ ${message}`); }
function fail(message) { failures += 1; console.error(`✗ ${message}`); }
function read(name) { return fs.readFileSync(path.join(ROOT, name), "utf8"); }

function loadConst(file, constName) {
  const code = read(file) + `\n;globalThis.__VALIDATOR_EXPORT__ = ${constName};`;
  const sandbox = {};
  vm.createContext(sandbox);
  vm.runInContext(code, sandbox, { filename: file });
  return sandbox.__VALIDATOR_EXPORT__;
}

function loadConstBefore(file, constName, stopMarker) {
  const source = read(file);
  const stop = source.indexOf(stopMarker);

  if (stop < 0) {
    throw new Error(`No se encontró el marcador ${stopMarker} en ${file}`);
  }

  const code =
    source.slice(0, stop) +
    `\n;globalThis.__VALIDATOR_EXPORT__ = ${constName};`;

  const sandbox = {};
  vm.createContext(sandbox);
  vm.runInContext(code, sandbox, { filename: file });

  return sandbox.__VALIDATOR_EXPORT__;
}

function duplicates(values) {
  const counts = new Map();
  values.forEach(v => counts.set(v, (counts.get(v) || 0) + 1));
  return [...counts.entries()].filter(([, count]) => count > 1).map(([value]) => value);
}

const jsFiles = [
  "countries.js","espana.js","sabiasque.js","script.js","mapas-europa.js",
  "rios.js","mapas.js","monedas.js","mares.js","historia.js","maravillas.js","montanas.js",
  "mapas-mundo.js","mapas-fisicos.js","espana-mapa.js","ui-revision2.js"
];

for (const file of jsFiles) {
  const r = spawnSync(process.execPath, ["--check", path.join(ROOT, file)], { encoding: "utf8" });
  if (r.status === 0) ok(`Sintaxis JS: ${file}`);
  else fail(`Error de sintaxis en ${file}: ${r.stderr.trim()}`);
}

const html = read("index.html");
const ids = [...html.matchAll(/\bid="([^"]+)"/g)].map(m => m[1]);
const duplicateIds = duplicates(ids);
if (duplicateIds.length === 0) ok("No hay IDs HTML duplicados");
else fail(`IDs HTML duplicados: ${duplicateIds.join(", ")}`);

if (!/\bon[a-z]+\s*=/i.test(html)) ok("No hay manejadores on*= inline");
else fail("Se detectaron manejadores on*= inline");

const textFiles = fs.readdirSync(ROOT)
  .filter(f => /\.(?:html|js|css|md)$/i.test(f))
  .filter(f => f !== "validate.js");
const inlineStyleHits = textFiles.filter(f => /\bstyle\s*=/i.test(read(f)));
if (inlineStyleHits.length === 0) ok("No hay atributos style= inline");
else fail(`Atributos style= en: ${inlineStyleHits.join(", ")}`);

if (/Content-Security-Policy/i.test(html)) ok("CSP presente");
else fail("Falta Content-Security-Policy");

if (/script-src 'self'/.test(html)) ok("CSP restringe scripts a self");
else fail("CSP no restringe script-src a self");

for (const [label, rx] of [
  ["fetch()", /\bfetch\s*\(/],
  ["XMLHttpRequest", /\bXMLHttpRequest\b/],
  ["WebSocket", /\bWebSocket\b/],
  ["eval()", /\beval\s*\(/],
  ["new Function", /\bnew\s+Function\b/]
]) {
  const hits = textFiles.filter(f => /\.(?:html|js)$/i.test(f)).filter(f => rx.test(read(f)));
  if (hits.length === 0) ok(`Sin ${label}`);
  else fail(`${label} detectado en: ${hits.join(", ")}`);
}

const inlineJsStyleHits = jsFiles.filter(f => /\.style\.|setAttribute\(\s*["']style["']/.test(read(f)));
if (inlineJsStyleHits.length === 0) ok("Sin estilos inline generados desde JavaScript");
else fail(`Estilos inline generados desde JavaScript: ${inlineJsStyleHits.join(", ")}`);

for (const [label, rx] of [
  ["localStorage", /\blocalStorage\b/],
  ["sessionStorage", /\bsessionStorage\b/],
  ["document.cookie", /\bdocument\.cookie\b/]
]) {
  const hits = jsFiles.filter(f => rx.test(read(f)));
  if (hits.length === 0) ok(`Sin uso JS de ${label}`);
  else fail(`${label} usado en: ${hits.join(", ")}`);
}

const secretRx = /(sk_live_|sk_test_|sbp_[A-Za-z0-9]+|eyJ[A-Za-z0-9_-]{20,}\.[A-Za-z0-9_-]{20,}\.|SUPABASE_(?:KEY|URL)|api[_-]?key\s*[:=]\s*["'][^"']+)/i;
const secretHits = textFiles.filter(f => secretRx.test(read(f)));
if (secretHits.length === 0) ok("No se detectan claves/tokens obvios");
else fail(`Posibles secretos en: ${secretHits.join(", ")}`);

const GEO_DATA = loadConst("countries.js", "GEO_DATA");
const states = GEO_DATA.filter(x => x.categoria === "estado");
if (states.length === 195) ok("195 estados soberanos");
else fail(`Se esperaban 195 estados; hay ${states.length}`);

const isoDup = duplicates(GEO_DATA.map(x => x.iso2));
if (isoDup.length === 0) ok("ISO2 sin duplicados");
else fail(`ISO2 duplicados: ${isoDup.join(", ")}`);

const nameDup = duplicates(GEO_DATA.map(x => x.pais));
if (nameDup.length === 0) ok("Nombres sin duplicados");
else fail(`Nombres duplicados: ${nameDup.join(", ")}`);

const invalidISO = GEO_DATA.filter(x => !/^[A-Z]{2}$/.test(x.iso2 || "")).map(x => x.pais);
if (invalidISO.length === 0) ok("Todos los ISO2 tienen formato válido");
else fail(`ISO2 inválidos: ${invalidISO.join(", ")}`);

const allGeoNames = new Set(GEO_DATA.map(x => x.pais));
const allowedNonCountries = new Set(["Antártida"]);

const RIOS = loadConstBefore("rios.js", "RIOS_MUNDO", "const riosMenu");
const riverIdDup = duplicates(RIOS.map(x => x.id));
if (riverIdDup.length === 0) ok(`Ríos: ${RIOS.length} IDs únicos`);
else fail(`IDs de ríos duplicados: ${riverIdDup.join(", ")}`);
if (RIOS.length === 50) ok("Ríos: banco mundial de 50 entradas");
else fail(`Se esperaban 50 ríos; hay ${RIOS.length}`);
const badRiverCountries = [...new Set(RIOS.flatMap(r => r.paises || []).filter(p => !allGeoNames.has(p) && !allowedNonCountries.has(p)))];
if (badRiverCountries.length === 0) ok("Ríos: referencias de países válidas");
else fail(`Ríos con países no reconocidos: ${badRiverCountries.join(", ")}`);

const MARES = loadConstBefore("mares.js", "MARES_DATA", "const maresMenu");
const seaIdDup = duplicates(MARES.map(x => x.id));
if (seaIdDup.length === 0) ok(`Mares/océanos: ${MARES.length} IDs únicos`);
else fail(`IDs de mares duplicados: ${seaIdDup.join(", ")}`);
const badSeaCountries = [...new Set(MARES.flatMap(m => m.paises || []).filter(p => !allGeoNames.has(p) && !allowedNonCountries.has(p)))];
if (badSeaCountries.length === 0) ok("Mares: referencias de países válidas");
else fail(`Mares con países no reconocidos: ${badSeaCountries.join(", ")}`);

const montCode = read("montanas.js");
const montMatch = montCode.match(/const MONTANAS_DATA = (\[[\s\S]*?\]);\nconst MONTANAS_TIEMPO/);
if (!montMatch) fail("No se pudo leer MONTANAS_DATA");
else {
  const MONTANAS = JSON.parse(montMatch[1]);
  const mountainIdDup = duplicates(MONTANAS.map(x => x.id));
  if (mountainIdDup.length === 0) ok(`Montañas: ${MONTANAS.length} IDs únicos`);
  else fail(`IDs de montañas duplicados: ${mountainIdDup.join(", ")}`);
  const badMountainCountries = [...new Set(MONTANAS.flatMap(m => m.paises || []).filter(p => !allGeoNames.has(p) && !allowedNonCountries.has(p)))];
  if (badMountainCountries.length === 0) ok("Montañas: referencias geográficas válidas");
  else fail(`Montañas con referencias no reconocidas: ${badMountainCountries.join(", ")}`);
}

const MAPA_EUROPA = loadConst("mapas-europa.js", "MAPA_EUROPA");
const mapIsos = new Set(MAPA_EUROPA.ordenISO);
const missingMapCapital = [...mapIsos].filter(iso => !MAPA_EUROPA.capitales[iso]);
if (missingMapCapital.length === 0) ok("Mapa Europa: todos los ISO tienen capital");
else fail(`Mapa Europa sin capital: ${missingMapCapital.join(", ")}`);
const knownIsos = new Set(GEO_DATA.map(x => x.iso2));
const unknownMapIso = [...mapIsos].filter(iso => !knownIsos.has(iso));
if (unknownMapIso.length === 0) ok("Mapa Europa: ISO presentes en countries.js");
else fail(`Mapa Europa con ISO desconocidos: ${unknownMapIso.join(", ")}`);

const MAPAS_MUNDO = loadConst("mapas-mundo.js", "MAPAS_MUNDO");
for (const [clave, esperado] of Object.entries({ asia:47, africa:54, america:35, oceania:14 })) {
  const mapa = MAPAS_MUNDO[clave];
  if (mapa && mapa.ordenISO.length === esperado) ok(`Mapa ${clave}: ${esperado} Estados`);
  else fail(`Mapa ${clave}: número inesperado de Estados`);
  const unknown = (mapa?.ordenISO || []).filter(iso => !knownIsos.has(iso));
  if (unknown.length === 0) ok(`Mapa ${clave}: ISO válidos`);
  else fail(`Mapa ${clave}: ISO desconocidos ${unknown.join(", ")}`);
  const sinLocalizador = (mapa?.ordenISO || []).filter(iso => !mapa.paises?.[iso] && !mapa.marcadores?.[iso]);
  if (sinLocalizador.length === 0) ok(`Mapa ${clave}: todos los Estados son localizables`);
  else fail(`Mapa ${clave}: sin localizador ${sinLocalizador.join(", ")}`);
  const sinCapital = (mapa?.ordenISO || []).filter(iso => !mapa.capitales?.[iso]);
  if (sinCapital.length === 0) ok(`Mapa ${clave}: todas las capitales tienen punto`);
  else fail(`Mapa ${clave}: capitales sin punto ${sinCapital.join(", ")}`);
}

const ESPANA_PROVINCIAS = loadConst("espana.js", "ESPANA_PROVINCIAS");
const ESPANA_CIUDADES = loadConst("espana.js", "ESPANA_CIUDADES_AUTONOMAS");
const ESPANA_COORDS = loadConstBefore("espana-mapa.js", "ESPANA_CAPITALES_COORD", "const espanaMapaPantalla");
const sinCoordEspana = ESPANA_PROVINCIAS.filter(p => !ESPANA_COORDS[p.capital]).map(p => p.provincia);
const sinCoordCiudades = ESPANA_CIUDADES.filter(c => !ESPANA_COORDS[c.ciudad]).map(c => c.ciudad);
if (sinCoordEspana.length === 0 && sinCoordCiudades.length === 0) ok("Mapa España: 50 provincias + Ceuta y Melilla con referencia");
else fail(`Mapa España: faltan referencias ${[...sinCoordEspana, ...sinCoordCiudades].join(", ")}`);

for (const phrase of [
  "ESTO ES UNA PRUEBA",
  "Aquí podrás escribir toda la información que quieras",
  "Este subapartado ya está preparado",
  "Cuando me pases tu documento",
  "el propio texto presenta",
  "sin perder tu redacción",
  "Próximamente",
  "Sección preparada",
  "Podremos construir aquí"
]) {
  const hits = textFiles.filter(file => read(file).includes(phrase));
  if (hits.length === 0) ok(`Sin texto interno: ${phrase}`);
  else fail(`Texto interno "${phrase}" en: ${hits.join(", ")}`);
}


for (const requiredId of [
  "mapas-asia","mapas-africa","mapas-america","mapas-oceania",
  "btn-montanas-mapa","btn-mares-mapa","fisico-mapa",
  "btn-espana-mapa","espana-mapa","criterios-fuentes","btn-criterios-fuentes"
]) {
  if (ids.includes(requiredId)) ok(`ID Revisión 2: ${requiredId}`);
  else fail(`Falta ID Revisión 2: ${requiredId}`);
}

for (const file of ["mapas-mundo.js","mapas-fisicos.js","espana-mapa.js","ui-revision2.js"]) {
  if (html.includes(file)) ok(`Script Revisión 2 cargado: ${file}`);
  else fail(`Script Revisión 2 no cargado: ${file}`);
}

for (const asset of [
  "home-hero.webp","logo-globo.png","icon-192.png","icon-512.png",
  "apple-touch-icon.png","favicon.ico","favicon-32.png","site.webmanifest"
]) {
  const p = path.join(ROOT, asset);
  if (fs.existsSync(p) && fs.statSync(p).size > 0) ok(`Asset válido: ${asset}`);
  else fail(`Asset ausente o vacío: ${asset}`);
}

console.log("");
console.log(`Validación terminada: ${failures} error(es).`);
process.exit(failures === 0 ? 0 : 1);
