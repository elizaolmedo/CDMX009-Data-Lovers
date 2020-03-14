//import  bankData  from './data.js';

  let categories = document.getElementsByName("category");
  let countries = document.getElementById("countrySelect");
  
  let category;
  let country;

  const categorySelected = () => { 
    for(let i=0; i < categories.length; i ++){
      if(categories[i].checked){
        console.log("Hay click! "+ categories[i].value + countries.value);
        if(countries.value !== "0"){
          //console.log(categories[i].value + countries.value);
          //countryCategory(countries.value, categories[i].value);
          category = categories[i].value;
          country = countries.value;
          localStorage.category = category
          localStorage.country = country
          location.href="indicators.html"; //Aquí pasamos a la siguiente página, explorar indicadores
        }else{
          categories[i].checked = false;
          countries.style.borderColor = "red";
          countries.style.color = "red";
          setTimeout(function(){ countries.style.borderColor = ""; countries.style.color = "";}, 2000);
        } 
      } 
    }
  } 

  for(let i=0; i < categories.length; i ++){
    //categories[i].onclick = categorySelected;
    categories[i].addEventListener("click", categorySelected);
  }




  /*
  const countryCategory = (country, category) => {
    console.log();
  }*/

  //console.log(categorySelected());

//export country; 

/*
const countryCategory = {
  countrySelection, 
  categorySelection
};

export default countryCategory;
*/

//Estas eran pruebas del overlay
/*
document.getElementById("rita").addEventListener("click", on);
document.getElementById("overlay").addEventListener("click", off);


function on() {
    document.getElementById("overlay").style.display = "block";
  }
  
  function off() {
    document.getElementById("overlay").style.display = "none";
  }*/