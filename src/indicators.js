//import * from './main.js'; 
import  bankData  from './data.js';


let country = "BRA";
let category = "educación";
//let indicator = "Inscripción escolar, nivel terciario, mujeres (% bruto)";
let indicator;
let indicatorData;
let section =  document.getElementById("indicatorsCards");

let indicatorsCards = document.getElementsByClassName("aCard");
let indicatorSelected = document.getElementsByClassName("indicatorTittle");

let indicatorName = bankData.getIndicatorsName(country, category);
//console.log(indicatorName);

let overlayDiv = document.getElementById("text");


for (let i=0; i< indicatorName.length; i ++){
    let card = document.createElement("div");
    let aCard = document.createElement("a");
    let cardImage = document.createElement("div");
    let figure = document.createElement("figure");
    let img = document.createElement("img");
    let cardContent = document.createElement("div");
   // let media = document.createElement("div");
   // let tittle = document.createElement("p");
    let content = document.createElement("div");
    let indicatorTittle = document.createElement("p");
    let footer = document.createElement("footer");
    let aTwitter = document.createElement("a");
    let aFacebook = document.createElement("a");
    let aMail = document.createElement("a");

    aCard.setAttribute("id","card"+[i]);

    card.setAttribute("class","card");
    aCard.setAttribute("class","aCard");
    cardImage.setAttribute("class","card-image");
    figure.setAttribute("class","imageMedia");
    cardContent.setAttribute("class","card-content");
   // media.setAttribute("class","media");
   // tittle.setAttribute("class","tittle is-4");
    content.setAttribute("class","content");
    indicatorTittle.setAttribute("class","indicatorTittle");
    footer.setAttribute("class","share-btn");
    aTwitter.setAttribute("class","share-btn-twitter");
    aFacebook.setAttribute("class","share-btn-facebook");
    aMail.setAttribute("class","share-btn-email");

    img.setAttribute("src","images/"+[i]+".png");
    img.setAttribute("style","width:110%");
    aTwitter.setAttribute("href","https://twitter.com/share?url=<URL>&text=<TEXT>via=<USERNAME>");
    aFacebook.setAttribute("href","https://www.facebook.com/sharer/sharer.php?u=<URL>");
    aMail.setAttribute("href","mailto:?subject=<SUBJECT>&body=<BODY>");
    //aCard.setAttribute("href","");
    
  //  tittle.innerHTML= category.toUpperCase();
    indicatorTittle.innerHTML= String(indicatorName[i] + ".") ;
    aTwitter.innerHTML= "Twitter";
    aFacebook.innerHTML= "Facebook";
    aMail.innerHTML= "EMAIL";
    
    figure.appendChild(img);
    cardImage.appendChild(figure);
  //  media.appendChild(tittle);
  //  cardContent.appendChild(media);
    cardContent.appendChild(content);
    footer.appendChild(aTwitter);
    footer.appendChild(aFacebook);
    footer.appendChild(aMail);
    content.appendChild(indicatorTittle);
    aCard.appendChild(cardImage);
    aCard.appendChild(cardContent);
    card.appendChild(aCard);
    card.appendChild(footer);
    section.appendChild(card);
}

/*
const indicatorSelected = () =>{

  let indicatorData = bankData.getIndicatorsData(country, category, indicator);
  console.log("Click!!");
}*/

const prueba = (indicator) => {
  indicatorData = bankData.getIndicatorsData(country, category, indicator);
  console.log(Object.keys(indicatorData));
  console.log(Object.values(indicatorData));
  console.log(bankData.getIndicatorsData(country, category, indicator));
  //overlayDiv.innerHTML = Object.keys(indicatorData);
  var ctx= document.getElementById("myChart").getContext("2d");
  var myChart= new Chart(ctx,{
      type:"bar",
      data:{
          labels:Object.keys(indicatorData),
          datasets:[{
                  label:'Data', 
                  data:Object.values(indicatorData),
                  backgroundColor:'rgba(242,193,19,1)'
                  /*[
                      'rgb(66, 134, 244,1)',
                      'rgb(74, 135, 72,1)',
                      'rgb(229, 89, 50,1)'
                  ]*/
          }]
      },
      options:{
          scales:{
              yAxes:[{
                      ticks:{
                          beginAtZero:true
                      }
              }]
          }
      }
  });
} 


for(let i=0; i < indicatorsCards.length; i ++){
  //categories[i].onclick = categorySelected;
  indicatorsCards[i].addEventListener("click", indicatorsSelected => {
    indicator = String(indicatorSelected[i].innerHTML.slice(0,-1));//.replace(/&nbsp;/g,' ');
    //indicatorData = bankData.getIndicatorsData(country, category, indicator);
    prueba(indicator);
    //console.log(indicator);
    //console.log(indicatorData);
    //return indicator;
  });
}

/*
document.getElementById("card0").addEventListener("click", on);
document.getElementById("overlay").addEventListener("click", off);


function on() {
    document.getElementById("overlay").style.display = "block";
  }
  
  function off() {
    document.getElementById("overlay").style.display = "none";
  }*/


  var modal = document.getElementById("myModal");

  // Get the button that opens the modal
  var btn = document.getElementById("card0");
  
  // Get the <span> element that closes the modal
  var span = document.getElementsByClassName("close")[0];
  
  // When the user clicks the button, open the modal 
  btn.onclick = function() {
    modal.style.display = "block";
  }
  
  // When the user clicks on <span> (x), close the modal
  span.onclick = function() {
    modal.style.display = "none";
  }
  
  // When the user clicks anywhere outside of the modal, close it
  window.onclick = function(event) {
    if (event.target == modal) {
      modal.style.display = "none";
    }
  }





/*
<div class="card">
        <div class="card-image">
          <figure class="imageMedia">
            <img src="images/1.png" style="width:110%" alt="Abstract image">
          </figure>
        </div>
        <div class="card-content">
          <div class="media"> 
            <p id="cardCategory" class="title is-4">Educación</p>
          </div>
          <div class="content">
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Phasellus nec iaculis mauris. <br></p> 
          <footer class="share-btn">
            <a href="https://twitter.com/share?url=<URL>&text=<TEXT>via=<USERNAME>" class="share-btn-twitter">Twitter</a>
            <a href="https://www.facebook.com/sharer/sharer.php?u=<URL>" class="share-btn-facebook">Facebook</a>
            <a href="mailto:?subject=<SUBJECT>&body=<BODY>" class="share-btn-email">Email</a>
          </footer>
        </div>  
      </div>
    */


console.log(category);
//console.log(categorySelection());

//console.log("Cambia página con: " + country + " " + category);
//console.log(bankData.filterData(country, category));