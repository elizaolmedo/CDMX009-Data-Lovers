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

export const example = () => {
  
  let bankData = Object.entries(data);
  let country = "MEX";
  let category = "fuerza laboral"; 
  let countryData;
  let countryIndicators;
  let countryIndicator;
  let categoryKeyWords = {"fuerzaLaboral":["fuerza", "laboral", "activa", "activo", 
                                          "negocio", "empresas", "capital humano", 
                                          "trabajo", "empleados", "trabajador",
                                          "estimación"],
                       "poblacionMujeres":["población", "mujeres"],
                              "desempleo":["desempleo", "desempleados", "desempleadas"],
                              "educacion":["alumnos", "escuela", "escolar", "ingreso", "inscripción",
                                          "alfabetización", "alfabetizados"]};
  

  for(let i=0; i <= Object.keys(data).length; i ++){
    if(Object.keys(data)[i] == country){
      countryData = Object.values(data)[i];
      //countryData es un objeto
    }
  }

  /*  
  const getIndicatorsName = () => {
    //return countryIndicators[0];
    return countryIndicators.filter(element => {
      return element.indicatorName.includes(category) || 
             element.indicatorName.includes("activa") ||
             element.indicatorName.includes("activo") ||
             element.indicatorName.includes("negocio") ||
             element.indicatorName.includes("empresas") ||
             element.indicatorName.includes("Capital Humano")})
  }*/

  /*
  const filterKeyWords = () => {
    categoryKeyWords.filter(e => {})
  }*/
  
  
  const getIndicatorsName = () => {
    //return countryIndicators[0];
    return countryIndicators.filter(element => {
      //let keyW = Object.values(categoryKeyWords.fuerzaLaboral);
      return element.indicatorName.includes("fuerza" || "laboral");
    });
  }

  function prueba(e){
    return true;
  }

  for(let i=0; i <= Object.keys(countryData).length; i ++){
    if(Object.keys(countryData)[i] == "indicators"){
      countryIndicators = Object.values(countryData)[i];
      //getIndicatorsName(countryIndicators);
    }
  }
  
  //countryIndicators.forEach(element => countryIndicator += element);

  /*
  for(let i=0; i <= countryIndicators.length; i ++){
    countryIndicator = countryIndicators[i];
  }*/
  
  //let algo = countryIndicators.filter(element =>  == "indicatorName");
  
  //let indicador = algo.filter(element => element[1] == "indicators");
  
  return getIndicatorsName();

};





/*
  let datoPrueba;
  let datos = {};
  let datoPrueba = bank.country.indicators[0];
  let country = "PER";
  let countryData;
  let countryDataKeys;
  let countryDataValues;

  const result = datoPrueba.filter(word => word == "data");
  
  datoPrueba = Object.entries(data)[1][0];
   
  
  for (let i=0; i <= Object.entries(data).length; i ++){
      //countryData = Object.entries(data)[i];
      if (Object.entries(data)[i][0] == country){
        datos = Object.entries(data)[i][1];
      }
  }*/
  
  /*
  for(let i in Object.values(data.PER.indicators)){
    datoPrueba = Object.values(data.PER.indicators[i].indicatorName);
    datos = datoPrueba;
  }*/
  
  //return datoPrueba.length;
  //return countryDataKeys + countryDataValues;
  //return datos;
  //return datoPrueba;
  //return data;
  /*
  let objData = {};
  fetch('./data/worldbank/worldbank.json')
  .then(function(resp){
    return resp.json();
  })
  .then(function(data){
  objData = data;
  example(); 
  
  });

  return objData;*/


/*

let show = function(){
  console.log(objData);
} */
