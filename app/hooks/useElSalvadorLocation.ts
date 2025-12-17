import { useState, useEffect } from "react";

interface Municipio {
  codigo: string;
  nombre: string;
}

interface Departamento {
  codigo: string;
  nombre: string;
  municipios: Municipio[];
}

// Datos de departamentos y municipios de El Salvador
const departamentosData: Departamento[] = [
  {
    codigo: "01",
    nombre: "Ahuachapán",
    municipios: [
      { codigo: "0101", nombre: "Ahuachapán" },
      { codigo: "0102", nombre: "Apaneca" },
      { codigo: "0103", nombre: "Atiquizaya" },
      { codigo: "0104", nombre: "Concepción de Ataco" },
      { codigo: "0105", nombre: "El Refugio" },
      { codigo: "0106", nombre: "Guaymango" },
      { codigo: "0107", nombre: "Jujutla" },
      { codigo: "0108", nombre: "San Francisco Menéndez" },
      { codigo: "0109", nombre: "San Lorenzo" },
      { codigo: "0110", nombre: "San Pedro Puxtla" },
      { codigo: "0111", nombre: "Tacuba" },
      { codigo: "0112", nombre: "Turín" }
    ]
  },
  {
    codigo: "02",
    nombre: "Santa Ana",
    municipios: [
      { codigo: "0201", nombre: "Candelaria de la Frontera" },
      { codigo: "0202", nombre: "Chalchuapa" },
      { codigo: "0203", nombre: "Coatepeque" },
      { codigo: "0204", nombre: "El Congo" },
      { codigo: "0205", nombre: "El Porvenir" },
      { codigo: "0206", nombre: "Masahuat" },
      { codigo: "0207", nombre: "Metapán" },
      { codigo: "0208", nombre: "San Antonio Pajonal" },
      { codigo: "0209", nombre: "San Sebastián Salitrillo" },
      { codigo: "0210", nombre: "Santa Ana" },
      { codigo: "0211", nombre: "Santa Rosa Guachipilín" },
      { codigo: "0212", nombre: "Santiago de la Frontera" },
      { codigo: "0213", nombre: "Texistepeque" }
    ]
  },
  {
    codigo: "03",
    nombre: "Sonsonate",
    municipios: [
      { codigo: "0301", nombre: "Acajutla" },
      { codigo: "0302", nombre: "Armenia" },
      { codigo: "0303", nombre: "Caluco" },
      { codigo: "0304", nombre: "Cuisnahuat" },
      { codigo: "0305", nombre: "Izalco" },
      { codigo: "0306", nombre: "Juayúa" },
      { codigo: "0307", nombre: "Nahuizalco" },
      { codigo: "0308", nombre: "Nahulingo" },
      { codigo: "0309", nombre: "Salcoatitán" },
      { codigo: "0310", nombre: "San Antonio del Monte" },
      { codigo: "0311", nombre: "San Julián" },
      { codigo: "0312", nombre: "Santa Catarina Masahuat" },
      { codigo: "0313", nombre: "Santa Isabel Ishuatán" },
      { codigo: "0314", nombre: "Santo Domingo de Guzmán" },
      { codigo: "0315", nombre: "Sonsonate" },
      { codigo: "0316", nombre: "Sonzacate" }
    ]
  },
  {
    codigo: "04",
    nombre: "La Libertad",
    municipios: [
      { codigo: "0401", nombre: "Antiguo Cuscatlán" },
      { codigo: "0402", nombre: "Chiltiupán" },
      { codigo: "0403", nombre: "Ciudad Arce" },
      { codigo: "0404", nombre: "Colón" },
      { codigo: "0405", nombre: "Comasagua" },
      { codigo: "0406", nombre: "Huizúcar" },
      { codigo: "0407", nombre: "Jayaque" },
      { codigo: "0408", nombre: "Jicalapa" },
      { codigo: "0409", nombre: "La Libertad" },
      { codigo: "0410", nombre: "Santa Tecla" },
      { codigo: "0411", nombre: "Nuevo Cuscatlán" },
      { codigo: "0412", nombre: "San Juan Opico" },
      { codigo: "0413", nombre: "Quezaltepeque" },
      { codigo: "0414", nombre: "Sacacoyo" },
      { codigo: "0415", nombre: "San José Villanueva" },
      { codigo: "0416", nombre: "San Matías" },
      { codigo: "0417", nombre: "San Pablo Tacachico" },
      { codigo: "0418", nombre: "Tamanique" },
      { codigo: "0419", nombre: "Talnique" },
      { codigo: "0420", nombre: "Teotepeque" },
      { codigo: "0421", nombre: "Tepecoyo" },
      { codigo: "0422", nombre: "Zaragoza" }
    ]
  },
  {
    codigo: "05",
    nombre: "San Salvador",
    municipios: [
      { codigo: "0501", nombre: "Aguilares" },
      { codigo: "0502", nombre: "Apopa" },
      { codigo: "0503", nombre: "Ayutuxtepeque" },
      { codigo: "0504", nombre: "Cuscatancingo" },
      { codigo: "0505", nombre: "El Paisnal" },
      { codigo: "0506", nombre: "Guazapa" },
      { codigo: "0507", nombre: "Ilopango" },
      { codigo: "0508", nombre: "Mejicanos" },
      { codigo: "0509", nombre: "Nejapa" },
      { codigo: "0510", nombre: "Panchimalco" },
      { codigo: "0511", nombre: "Rosario de Mora" },
      { codigo: "0512", nombre: "San Marcos" },
      { codigo: "0513", nombre: "San Martín" },
      { codigo: "0514", nombre: "San Salvador" },
      { codigo: "0515", nombre: "Santiago Texacuangos" },
      { codigo: "0516", nombre: "Santo Tomás" },
      { codigo: "0517", nombre: "Soyapango" },
      { codigo: "0518", nombre: "Tonacatepeque" },
      { codigo: "0519", nombre: "Delgado" }
    ]
  },
  {
    codigo: "06",
    nombre: "Chalatenango",
    municipios: [
      { codigo: "0601", nombre: "Agua Caliente" },
      { codigo: "0602", nombre: "Arcatao" },
      { codigo: "0603", nombre: "Azacualpa" },
      { codigo: "0604", nombre: "Chalatenango" },
      { codigo: "0605", nombre: "Citalá" },
      { codigo: "0606", nombre: "Comalapa" },
      { codigo: "0607", nombre: "Concepción Quezaltepeque" },
      { codigo: "0608", nombre: "Dulce Nombre de María" },
      { codigo: "0609", nombre: "El Carrizal" },
      { codigo: "0610", nombre: "El Paraíso" },
      { codigo: "0611", nombre: "La Laguna" },
      { codigo: "0612", nombre: "La Palma" },
      { codigo: "0613", nombre: "La Reina" },
      { codigo: "0614", nombre: "Las Vueltas" },
      { codigo: "0615", nombre: "Nombre de Jesús" },
      { codigo: "0616", nombre: "Nueva Concepción" },
      { codigo: "0617", nombre: "Nueva Trinidad" },
      { codigo: "0618", nombre: "Ojos de Agua" },
      { codigo: "0619", nombre: "Potonico" },
      { codigo: "0620", nombre: "San Antonio de la Cruz" },
      { codigo: "0621", nombre: "San Antonio Los Ranchos" },
      { codigo: "0622", nombre: "San Fernando" },
      { codigo: "0623", nombre: "San Francisco Lempa" },
      { codigo: "0624", nombre: "San Francisco Morazán" },
      { codigo: "0625", nombre: "San Ignacio" },
      { codigo: "0626", nombre: "San Isidro Labrador" },
      { codigo: "0627", nombre: "San José Cancasque" },
      { codigo: "0628", nombre: "San Luis del Carmen" },
      { codigo: "0629", nombre: "San Miguel de Mercedes" },
      { codigo: "0630", nombre: "San Rafael" },
      { codigo: "0631", nombre: "Santa Rita" },
      { codigo: "0632", nombre: "Tejutla" },
      { codigo: "0633", nombre: "La Montañona" }
    ]
  },
  {
    codigo: "07",
    nombre: "Cuscatlán",
    municipios: [
      { codigo: "0701", nombre: "Candelaria" },
      { codigo: "0702", nombre: "Cojutepeque" },
      { codigo: "0703", nombre: "El Carmen" },
      { codigo: "0704", nombre: "El Rosario" },
      { codigo: "0705", nombre: "Monte San Juan" },
      { codigo: "0706", nombre: "Oratorio de Concepción" },
      { codigo: "0707", nombre: "San Bartolomé Perulapía" },
      { codigo: "0708", nombre: "San Cristóbal" },
      { codigo: "0709", nombre: "San José Guayabal" },
      { codigo: "0710", nombre: "San Pedro Perulapán" },
      { codigo: "0711", nombre: "San Rafael Cedros" },
      { codigo: "0712", nombre: "San Ramón" },
      { codigo: "0713", nombre: "Santa Cruz Analquito" },
      { codigo: "0714", nombre: "Santa Cruz Michapa" },
      { codigo: "0715", nombre: "Suchitoto" },
      { codigo: "0716", nombre: "Tenancingo" }
    ]
  },
  {
    codigo: "08",
    nombre: "La Paz",
    municipios: [
      { codigo: "0801", nombre: "Cuyultitán" },
      { codigo: "0802", nombre: "El Rosario" },
      { codigo: "0803", nombre: "Jerusalén" },
      { codigo: "0804", nombre: "Mercedes La Ceiba" },
      { codigo: "0805", nombre: "Olocuilta" },
      { codigo: "0806", nombre: "Paraíso de Osorio" },
      { codigo: "0807", nombre: "San Antonio Masahuat" },
      { codigo: "0808", nombre: "San Emigdio" },
      { codigo: "0809", nombre: "San Francisco Chinameca" },
      { codigo: "0810", nombre: "San Juan Nonualco" },
      { codigo: "0811", nombre: "San Juan Talpa" },
      { codigo: "0812", nombre: "San Juan Tepezontes" },
      { codigo: "0813", nombre: "San Luis La Herradura" },
      { codigo: "0814", nombre: "San Luis Talpa" },
      { codigo: "0815", nombre: "San Miguel Tepezontes" },
      { codigo: "0816", nombre: "San Pedro Masahuat" },
      { codigo: "0817", nombre: "San Pedro Nonualco" },
      { codigo: "0818", nombre: "San Rafael Obrajuelo" },
      { codigo: "0819", nombre: "Santa María Ostuma" },
      { codigo: "0820", nombre: "Santiago Nonualco" },
      { codigo: "0821", nombre: "Tapalhuaca" },
      { codigo: "0822", nombre: "Zacatecoluca" }
    ]
  },
  {
    codigo: "09",
    nombre: "Cabañas",
    municipios: [
      { codigo: "0901", nombre: "Cinquera" },
      { codigo: "0902", nombre: "Dolores" },
      { codigo: "0903", nombre: "Guacotecti" },
      { codigo: "0904", nombre: "Ilobasco" },
      { codigo: "0905", nombre: "Jutiapa" },
      { codigo: "0906", nombre: "San Isidro" },
      { codigo: "0907", nombre: "Sensuntepeque" },
      { codigo: "0908", nombre: "Tejutepeque" },
      { codigo: "0909", nombre: "Victoria" }
    ]
  },
  {
    codigo: "10",
    nombre: "San Vicente",
    municipios: [
      { codigo: "1001", nombre: "Apastepeque" },
      { codigo: "1002", nombre: "Guadalupe" },
      { codigo: "1003", nombre: "San Cayetano Istepeque" },
      { codigo: "1004", nombre: "San Esteban Catarina" },
      { codigo: "1005", nombre: "San Ildefonso" },
      { codigo: "1006", nombre: "San Lorenzo" },
      { codigo: "1007", nombre: "San Sebastián" },
      { codigo: "1008", nombre: "San Vicente" },
      { codigo: "1009", nombre: "Santa Clara" },
      { codigo: "1010", nombre: "Santo Domingo" },
      { codigo: "1011", nombre: "Tecoluca" },
      { codigo: "1012", nombre: "Tepetitán" },
      { codigo: "1013", nombre: "Verapaz" }
    ]
  },
  {
    codigo: "11",
    nombre: "Usulután",
    municipios: [
      { codigo: "1101", nombre: "Alegría" },
      { codigo: "1102", nombre: "Berlín" },
      { codigo: "1103", nombre: "California" },
      { codigo: "1104", nombre: "Concepción Batres" },
      { codigo: "1105", nombre: "El Triunfo" },
      { codigo: "1106", nombre: "Ereguayquín" },
      { codigo: "1107", nombre: "Estanzuelas" },
      { codigo: "1108", nombre: "Jiquilisco" },
      { codigo: "1109", nombre: "Jucuapa" },
      { codigo: "1110", nombre: "Jucuarán" },
      { codigo: "1111", nombre: "Mercedes Umaña" },
      { codigo: "1112", nombre: "Nueva Granada" },
      { codigo: "1113", nombre: "Ozatlán" },
      { codigo: "1114", nombre: "Puerto El Triunfo" },
      { codigo: "1115", nombre: "San Agustín" },
      { codigo: "1116", nombre: "San Buenaventura" },
      { codigo: "1117", nombre: "San Dionisio" },
      { codigo: "1118", nombre: "San Francisco Javier" },
      { codigo: "1119", nombre: "Santa Elena" },
      { codigo: "1120", nombre: "Santa María" },
      { codigo: "1121", nombre: "Santiago de María" },
      { codigo: "1122", nombre: "Tecapán" },
      { codigo: "1123", nombre: "Usulután" }
    ]
  },
  {
    codigo: "12",
    nombre: "San Miguel",
    municipios: [
      { codigo: "1201", nombre: "Carolina" },
      { codigo: "1202", nombre: "Chapeltique" },
      { codigo: "1203", nombre: "Chinameca" },
      { codigo: "1204", nombre: "Chirilagua" },
      { codigo: "1205", nombre: "Ciudad Barrios" },
      { codigo: "1206", nombre: "Comacarán" },
      { codigo: "1207", nombre: "El Tránsito" },
      { codigo: "1208", nombre: "Lolotique" },
      { codigo: "1209", nombre: "Moncagua" },
      { codigo: "1210", nombre: "Nueva Guadalupe" },
      { codigo: "1211", nombre: "Nuevo Edén de San Juan" },
      { codigo: "1212", nombre: "Quelepa" },
      { codigo: "1213", nombre: "San Antonio del Mosco" },
      { codigo: "1214", nombre: "San Gerardo" },
      { codigo: "1215", nombre: "San Jorge" },
      { codigo: "1216", nombre: "San Luis de la Reina" },
      { codigo: "1217", nombre: "San Miguel" },
      { codigo: "1218", nombre: "San Rafael Oriente" },
      { codigo: "1219", nombre: "Sesori" },
      { codigo: "1220", nombre: "Uluazapa" }
    ]
  },
  {
    codigo: "13",
    nombre: "Morazán",
    municipios: [
      { codigo: "1301", nombre: "Arambala" },
      { codigo: "1302", nombre: "Cacaopera" },
      { codigo: "1303", nombre: "Chilanga" },
      { codigo: "1304", nombre: "Corinto" },
      { codigo: "1305", nombre: "Delicias de Concepción" },
      { codigo: "1306", nombre: "El Divisadero" },
      { codigo: "1307", nombre: "El Rosario" },
      { codigo: "1308", nombre: "Gualococti" },
      { codigo: "1309", nombre: "Guatajiagua" },
      { codigo: "1310", nombre: "Joateca" },
      { codigo: "1311", nombre: "Jocoaitique" },
      { codigo: "1312", nombre: "Jocoro" },
      { codigo: "1313", nombre: "Lolotiquillo" },
      { codigo: "1314", nombre: "Meanguera" },
      { codigo: "1315", nombre: "Osicala" },
      { codigo: "1316", nombre: "Perquín" },
      { codigo: "1317", nombre: "San Carlos" },
      { codigo: "1318", nombre: "San Fernando" },
      { codigo: "1319", nombre: "San Francisco Gotera" },
      { codigo: "1320", nombre: "San Isidro" },
      { codigo: "1321", nombre: "San Simón" },
      { codigo: "1322", nombre: "Sensembra" },
      { codigo: "1323", nombre: "Sociedad" },
      { codigo: "1324", nombre: "Torola" },
      { codigo: "1325", nombre: "Yamabal" },
      { codigo: "1326", nombre: "Yoloaiquín" }
    ]
  },
  {
    codigo: "14",
    nombre: "La Unión",
    municipios: [
      { codigo: "1401", nombre: "Anamorós" },
      { codigo: "1402", nombre: "Bolívar" },
      { codigo: "1403", nombre: "Concepción de Oriente" },
      { codigo: "1404", nombre: "Conchagua" },
      { codigo: "1405", nombre: "El Carmen" },
      { codigo: "1406", nombre: "El Sauce" },
      { codigo: "1407", nombre: "Intipucá" },
      { codigo: "1408", nombre: "La Unión" },
      { codigo: "1409", nombre: "Lislique" },
      { codigo: "1410", nombre: "Meanguera del Golfo" },
      { codigo: "1411", nombre: "Nueva Esparta" },
      { codigo: "1412", nombre: "Pasaquina" },
      { codigo: "1413", nombre: "Polorós" },
      { codigo: "1414", nombre: "San Alejo" },
      { codigo: "1415", nombre: "San José" },
      { codigo: "1416", nombre: "Santa Rosa de Lima" },
      { codigo: "1417", nombre: "Yayantique" },
      { codigo: "1418", nombre: "Yucuaiquín" }
    ]
  }
];

export function useElSalvadorLocation() {
  const [departamentos, setDepartamentos] = useState<Departamento[]>([]);
  const [municipios, setMunicipios] = useState<Municipio[]>([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    // Cargar departamentos al iniciar
    setDepartamentos(departamentosData);
  }, []);

  const getMunicipiosByDepartamento = (departamentoCodigo: string) => {
    const departamento = departamentosData.find(d => d.codigo === departamentoCodigo);
    return departamento ? departamento.municipios : [];
  };

  const getDepartamentoOptions = () => {
    return departamentos.map(d => ({
      value: d.codigo,
      label: d.nombre
    }));
  };

  const getMunicipioOptions = (departamentoCodigo: string) => {
    const municipios = getMunicipiosByDepartamento(departamentoCodigo);
    return municipios.map(m => ({
      value: m.codigo,
      label: m.nombre
    }));
  };

  return {
    departamentos,
    municipios,
    loading,
    getDepartamentoOptions,
    getMunicipioOptions,
    getMunicipiosByDepartamento
  };
}
