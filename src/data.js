// import data from './data/injuries/injuries.js';
// import data from './data/lol/lol.js';
// import data from './data/patient/patient.js';
// import data from './data/pokemon/pokemon.js';
// import data from './data/rickandmorty/rickandmorty.js';
// import data from './data/steam/steam.js';
// import data from './data/worldbank/worldbank.js';
 
// esta es una función de ejemplo

export const example = () => {
  
  let flag = "Hola, me comunico";
  return flag;

  //let datoPrueba;
  //let datos;
  //datoPrueba = Object.values(data.PER.indicators[1].indicatorName);
  /*
  for(let i in Object.values(data.PER.indicators)){
    datoPrueba = Object.values(data.PER.indicators[i].indicatorName);
    datos += i+".-"+ datoPrueba.join("") + ".\n";
  }
  
  return datos;*/
  //return datoPrueba.length;
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
  
};

/*

let show = function(){
  console.log(objData);
} */
