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
Cada que se obtienen datos desde Object.método(nombre_objeto), regresa
como un array.
*/

const filterData = (country, category) => {
  
  //let country = "BRA";
  //let category = "poblacionMujeres"; 
  let countryData;
  let countryIndicators;
  let indicatorsName = [];
  let indicatorsData = [];
  let indicators;
  let categoryKeyWords = {"fuerzaLaboral":["fuerza", "laboral", "activa", "activo", 
                                          "negocio", "empresas", "capital humano", 
                                          "trabajo", "empleados", "trabajador",
                                          "estimación"],
                       "poblacionMujeres":["población"],
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
      countryIndicators = Object.values(countryData)[i];
    }
  }
  
  
  const getIndicatorsName = (indicators) => {
    
    for(let i=0; i <= indicators.length; i ++){
      for(let j=0; j <= Object.keys(indicators[i]).length; j ++){
        if(Object.keys(indicators[i])[j] == "indicatorName"){
          indicatorsName += Object.keys(indicators[i])[j];
          indicatorsData += Object.values(indicators[i])[j]; 
        }
      }    
    }
    return indicators;
  }


  const getIndicators = () => {
    
    indicators = countryIndicators.filter(element => {
      let counter = 0;
      let keyW;
      switch(category){
        case "fuerzaLaboral":
          keyW = categoryKeyWords.fuerzaLaboral;
          break;
        case "poblacionMujeres": 
          keyW = categoryKeyWords.poblacionMujeres;
          break;
        case "desempleo":
          keyW = categoryKeyWords.desempleo;
          break;
        case "educacion":
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
    //return indicators;
    getIndicatorsName(indicators);
  }


/*  function prueba(indicators){
    return indicators;
  }*/
  
  return getIndicatorsName();
  //return Object.values(getIndicators()[0])[3];
  //return ("Hola, soy bankData.filterData y recibí:" + country +" - "+ category);

};


const bankData = {
  filterData
  //decode
};

export default bankData;

  /*
  const getIndicatorsName = () => {
    //return countryIndicators[0];
    return countryIndicators.filter(element => {
      return element.indicatorName.includes("Desempleo") || 
             element.indicatorName.includes("desempleados") ||
             element.indicatorName.includes("desempleadas") ||
             element.indicatorName.includes("desempleo") ||
             element.indicatorName.includes("empresas") ||
    element.indicatorName.includes("Capital Humano")}});
  }*/

  /*
  const filterKeyWords = () => {
    categoryKeyWords.filter(e => {})
  }
  */

/*
let show = function(){
  console.log(objData);
} */
