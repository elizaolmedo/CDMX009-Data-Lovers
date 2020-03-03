import { example } from './data.js';

console.log(example());

  let categories = document.getElementsByName("category");
  let country = document.getElementById("countrySelect");
  
  //console.log(country);

  for(let i=0; i < categories.length; i ++){
    //console.log(categories[i] + categories[i].checked + categories[i].value);
    categories[i].onclick = categorySelected;
  } 

  prueba(country);
  country.addEventListener("change", prueba);

function categorySelected(){ 

  console.log("Hay click!");
  for(let i=0; i < categories.length; i ++){
    //console.log(categories[i] + categories[i].checked + categories[i].value);
    if(!categories[i].checked){
      console.log("ningún checked");
      //let categoryValue = categories[i].value;
      
    }else{
      console.log("entra al if");
      let categoryValue = categories[i].value;
      console.log(categoryValue);
      prueba(categoryValue);
    }
  }
}  

function prueba(){
  //values();
  //categorySelected();
  console.log("regresé");
  if (country.value == "0" || categoryValue.checked == false){
    console.log("Entre sin pais o sin categoria");
  }else{
    console.log("El país es:" + country.value + " La categoria es:" + categoryValue.value);
  }
  console.log("Fin");
}

/*
function countrySelector(){
  document.getElementById("countrySelect")
}*/









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

