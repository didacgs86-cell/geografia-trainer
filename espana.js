// ==========================================
// GEOTRAINER - ESPAÑA
// 17 comunidades autónomas
// 50 provincias
// 2 ciudades autónomas
// ==========================================

const ESPANA_COMUNIDADES = [
  "Andalucía",
  "Aragón",
  "Principado de Asturias",
  "Illes Balears",
  "Canarias",
  "Cantabria",
  "Castilla-La Mancha",
  "Castilla y León",
  "Cataluña",
  "Comunitat Valenciana",
  "Extremadura",
  "Galicia",
  "Comunidad de Madrid",
  "Región de Murcia",
  "Comunidad Foral de Navarra",
  "País Vasco",
  "La Rioja"
];


const ESPANA_PROVINCIAS = [

  // ANDALUCÍA
  {
    provincia: "Almería",
    capital: "Almería",
    comunidad: "Andalucía"
  },
  {
    provincia: "Cádiz",
    capital: "Cádiz",
    comunidad: "Andalucía"
  },
  {
    provincia: "Córdoba",
    capital: "Córdoba",
    comunidad: "Andalucía"
  },
  {
    provincia: "Granada",
    capital: "Granada",
    comunidad: "Andalucía"
  },
  {
    provincia: "Huelva",
    capital: "Huelva",
    comunidad: "Andalucía"
  },
  {
    provincia: "Jaén",
    capital: "Jaén",
    comunidad: "Andalucía"
  },
  {
    provincia: "Málaga",
    capital: "Málaga",
    comunidad: "Andalucía"
  },
  {
    provincia: "Sevilla",
    capital: "Sevilla",
    comunidad: "Andalucía"
  },


  // ARAGÓN
  {
    provincia: "Huesca",
    capital: "Huesca",
    comunidad: "Aragón"
  },
  {
    provincia: "Teruel",
    capital: "Teruel",
    comunidad: "Aragón"
  },
  {
    provincia: "Zaragoza",
    capital: "Zaragoza",
    comunidad: "Aragón"
  },


  // ASTURIAS
  {
    provincia: "Asturias",
    capital: "Oviedo",
    comunidad: "Principado de Asturias"
  },


  // ILLES BALEARS
  {
    provincia: "Illes Balears",
    capital: "Palma",
    comunidad: "Illes Balears"
  },


  // CANARIAS
  {
    provincia: "Las Palmas",
    capital: "Las Palmas de Gran Canaria",
    comunidad: "Canarias"
  },
  {
    provincia: "Santa Cruz de Tenerife",
    capital: "Santa Cruz de Tenerife",
    comunidad: "Canarias"
  },


  // CANTABRIA
  {
    provincia: "Cantabria",
    capital: "Santander",
    comunidad: "Cantabria"
  },


  // CASTILLA-LA MANCHA
  {
    provincia: "Albacete",
    capital: "Albacete",
    comunidad: "Castilla-La Mancha"
  },
  {
    provincia: "Ciudad Real",
    capital: "Ciudad Real",
    comunidad: "Castilla-La Mancha"
  },
  {
    provincia: "Cuenca",
    capital: "Cuenca",
    comunidad: "Castilla-La Mancha"
  },
  {
    provincia: "Guadalajara",
    capital: "Guadalajara",
    comunidad: "Castilla-La Mancha"
  },
  {
    provincia: "Toledo",
    capital: "Toledo",
    comunidad: "Castilla-La Mancha"
  },


  // CASTILLA Y LEÓN
  {
    provincia: "Ávila",
    capital: "Ávila",
    comunidad: "Castilla y León"
  },
  {
    provincia: "Burgos",
    capital: "Burgos",
    comunidad: "Castilla y León"
  },
  {
    provincia: "León",
    capital: "León",
    comunidad: "Castilla y León"
  },
  {
    provincia: "Palencia",
    capital: "Palencia",
    comunidad: "Castilla y León"
  },
  {
    provincia: "Salamanca",
    capital: "Salamanca",
    comunidad: "Castilla y León"
  },
  {
    provincia: "Segovia",
    capital: "Segovia",
    comunidad: "Castilla y León"
  },
  {
    provincia: "Soria",
    capital: "Soria",
    comunidad: "Castilla y León"
  },
  {
    provincia: "Valladolid",
    capital: "Valladolid",
    comunidad: "Castilla y León"
  },
  {
    provincia: "Zamora",
    capital: "Zamora",
    comunidad: "Castilla y León"
  },


  // CATALUÑA
  {
    provincia: "Barcelona",
    capital: "Barcelona",
    comunidad: "Cataluña"
  },
  {
    provincia: "Girona",
    capital: "Girona",
    comunidad: "Cataluña"
  },
  {
    provincia: "Lleida",
    capital: "Lleida",
    comunidad: "Cataluña"
  },
  {
    provincia: "Tarragona",
    capital: "Tarragona",
    comunidad: "Cataluña"
  },


  // COMUNITAT VALENCIANA
  {
    provincia: "Alicante",
    capital: "Alicante",
    comunidad: "Comunitat Valenciana"
  },
  {
    provincia: "Castellón",
    capital: "Castellón de la Plana",
    comunidad: "Comunitat Valenciana"
  },
  {
    provincia: "Valencia",
    capital: "Valencia",
    comunidad: "Comunitat Valenciana"
  },


  // EXTREMADURA
  {
    provincia: "Badajoz",
    capital: "Badajoz",
    comunidad: "Extremadura"
  },
  {
    provincia: "Cáceres",
    capital: "Cáceres",
    comunidad: "Extremadura"
  },


  // GALICIA
  {
    provincia: "A Coruña",
    capital: "A Coruña",
    comunidad: "Galicia"
  },
  {
    provincia: "Lugo",
    capital: "Lugo",
    comunidad: "Galicia"
  },
  {
    provincia: "Ourense",
    capital: "Ourense",
    comunidad: "Galicia"
  },
  {
    provincia: "Pontevedra",
    capital: "Pontevedra",
    comunidad: "Galicia"
  },


  // MADRID
  {
    provincia: "Madrid",
    capital: "Madrid",
    comunidad: "Comunidad de Madrid"
  },


  // MURCIA
  {
    provincia: "Murcia",
    capital: "Murcia",
    comunidad: "Región de Murcia"
  },


  // NAVARRA
  {
    provincia: "Navarra",
    capital: "Pamplona",
    comunidad: "Comunidad Foral de Navarra"
  },


  // PAÍS VASCO
  {
    provincia: "Araba/Álava",
    capital: "Vitoria-Gasteiz",
    comunidad: "País Vasco"
  },
  {
    provincia: "Bizkaia",
    capital: "Bilbao",
    comunidad: "País Vasco"
  },
  {
    provincia: "Gipuzkoa",
    capital: "Donostia / San Sebastián",
    comunidad: "País Vasco"
  },


  // LA RIOJA
  {
    provincia: "La Rioja",
    capital: "Logroño",
    comunidad: "La Rioja"
  }

];


// ==========================================
// CIUDADES AUTÓNOMAS
// No son provincias
// ==========================================

const ESPANA_CIUDADES_AUTONOMAS = [
  {
    ciudad: "Ceuta",
    capital: "Ceuta",
    tipo: "Ciudad autónoma"
  },
  {
    ciudad: "Melilla",
    capital: "Melilla",
    tipo: "Ciudad autónoma"
  }
];
