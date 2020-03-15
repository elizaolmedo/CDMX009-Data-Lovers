// import data from './data/injuries/injuries.js';
// import data from './data/lol/lol.js';
// import data from './data/patient/patient.js';
// import data from './data/pokemon/pokemon.js';
// import data from './data/rickandmorty/rickandmorty.js';
// import data from './data/steam/steam.js';
import data from './data/worldbank/worldbank.js';
 
/* data para worldbank es un objeto. Cuando se trae con Object.entries
regresa como un array, sin embargo, es más "sencillo" traer los datos
a través de keys y values para el primer nivel. Así, solo tomamos los datos
que el usuario a elegido. 
*/

const filterData = (country, category) => {
  
  //let country = "BRA";
  //let category = "poblacionMujeres"; 
  let countryData;
  let countryIndicators;
  
  let indicatorsData;
  let indicators;
  let categoryKeyWords = {"fuerzaLaboral":["fuerza", "laboral", "activa", "activo", 
                                          "negocio", "empresas", "capital humano", 
                                          "trabajo", "empleados", "trabajador",
                                          "estimación"],
                       "poblacion":["población"],
                              "desempleo":["desempleo", "desempleados", "desempleadas"],
                              "educacion":["alumnos", "escuela", "escolar", "ingreso", "inscripción",
                                          "alfabetización", "alfabetizados"]};
  

  for(let i=0; i <= Object.keys(data).length; i ++){
    if(Object.keys(data)[i] == country){
      countryData = Object.values(data)[i]; //countryData es un objeto
    }
  }

  for(let i=0; i <= Object.keys(countryData).length; i ++){
    if(Object.keys(countryData)[i] == "indicators"){
      countryIndicators = Object.values(countryData)[i]; //countryIndicators es un array
    }
  }
  
  const getIndicators = () => {
    
    indicators = countryIndicators.filter(element => {
      let counter = 0;
      let keyW;
      switch(category){
        case "fuerza laboral":
          keyW = categoryKeyWords.fuerzaLaboral;
          break;
        case "población": 
          keyW = categoryKeyWords.poblacion;
          break;
        case "desempleo":
          keyW = categoryKeyWords.desempleo;
          break;
        case "educación":
          keyW = categoryKeyWords.educacion;
          break;
        default:
          break;       
      }
      
      for(let i=0; i <= keyW.length; i++){
        if(element.indicatorName.toLowerCase().includes(keyW[i])){
          counter ++;
        }
      }
      if(counter != 0){
        return true;
      }else{
        return false;
      }
    });

    return indicators;
  }

  return getIndicators();
  
};

const getIndicatorsName = (country, category) => {

  let indicators = filterData(country, category);
  let indicatorsName = [];

  indicatorsName = indicators.map(e => {
    return e.indicatorName;
  });
 
  return indicatorsName; 
}

const getIndicatorsData = (country, category, indicator) => {

  let indicators = filterData(country, category);
  let indicatorsData;

  for(let i in indicators){
    if(indicators[i].indicatorName == indicator){
      indicatorsData = indicators[i].data;
      break;
    }else{
      indicatorsData = "error: "+ indicator + "\n" + "de data: " + indicators[1].indicatorName;
    }
  }
 
  return indicatorsData; 
}


const bankData = {
  getIndicatorsName,
  getIndicatorsData
};

export default bankData;
