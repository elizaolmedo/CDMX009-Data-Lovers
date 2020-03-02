import { example } from './data.js';

console.log(example());


let objData;

let show = function(){
  console.log(objData);
} 

fetch('./data/worldbank/worldbank.json')
.then(function(resp){
  return resp.json();
})
.then(function(data){
   objData = data;
   show(objData); 
  
});




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

