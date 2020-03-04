// import data from './data/injuries/injuries.js';
// import data from './data/lol/lol.js';
// import data from './data/patient/patient.js';
// import data from './data/pokemon/pokemon.js';
// import data from './data/rickandmorty/rickandmorty.js';
// import data from './data/steam/steam.js';
import data from './data/worldbank/worldbank.js';
 
// esta es una función de ejemplo

export const example = () => {
  
  let bankData = Object.entries(data);
  let country = "MEX";
  let countryData;

  /*
  for(let i=0; i <= Object.keys(data).length; i ++){
    if(Object.keys(data)[i] == country){
      countryData = Object.values(data)[i];
    }
  }*/

  //const array1 = ['a', 'b', 'c'];
  let algo = Object.entries(data).filter(element => element[0] == country);
  countryData = Object.keys(algo[0][1]);
  //let indicador = algo.filter(element => element[1] == "indicators");

  return countryData;

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
