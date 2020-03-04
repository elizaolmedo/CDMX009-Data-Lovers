import { example } from './data.js';

console.log(example());

let categories = document.getElementsByName("category");
let country = document.getElementById("countrySelect");
  
for(let i=0; i < categories.length; i ++){
  categories[i].onclick = categorySelected;
} 

function categorySelected(category){ 
  for(let i=0; i < categories.length; i ++){
    if(categories[i].checked){
      console.log("Hay click! "+ categories[i].value + country.value);
      if(country.value == "0"){
        categories[i].checked = false;
        country.style.borderColor = "red";
        setTimeout(function(){ country.style.borderColor = ""; }, 2000);
        
      }else{
        countryCategory(country.value, categories[i].value);
      } 
    }
  }
}  

function countryCategory(country,category){
  //Aquí pasamos a la siguiente página, explorar indicadores
  console.log("Cambia página con: " + country + " " + category)
}
  
 




//Estas eran pruebas con Json
/*
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
  
});*/
//Estas eran pruebas del overlay
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

