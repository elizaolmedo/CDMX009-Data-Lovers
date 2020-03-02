import { example } from './data.js';

console.log(example());

fetch('./data/worldbank/worldbank.json')
  .then(function(resp){
  return resp.json();
})
let algoThen =  p.then(function(data){
    return data;
})


console.log(algoThen);


/*
document.getElementById("rita").addEventListener("click", on);
document.getElementById("overlay").addEventListener("click", off);


function on() {
    document.getElementById("overlay").style.display = "block";
  }
  
  function off() {
    document.getElementById("overlay").style.display = "none";
  }
*/  

