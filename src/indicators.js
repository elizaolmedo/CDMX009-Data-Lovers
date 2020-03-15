import  bankData  from './data.js';

let country = localStorage.country;
let category = localStorage.category;
let indicator;
let indicatorData;


let indicatorName = bankData.getIndicatorsName(country, category);
let section =  document.getElementById("indicatorsCards");
let indicatorsCards = document.getElementsByClassName("aCard");
let indicatorSelected = document.getElementsByClassName("indicatorTittle");
let pageTittle = document.getElementById("pageTittle");
let modal = document.getElementById("myModal");
let span = document.getElementsByClassName("close")[0];

pageTittle.textContent = country.toUpperCase() + " - " + category.toUpperCase();

for (let i=0; i< indicatorName.length; i ++){
    let card = document.createElement("div");
    let aCard = document.createElement("a");
    let cardImage = document.createElement("div");
    let figure = document.createElement("figure");
    let img = document.createElement("img");
    let cardContent = document.createElement("div");
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
        
    indicatorTittle.innerHTML= indicatorName[i] + "." ;
    aTwitter.innerHTML= "Twitter";
    aFacebook.innerHTML= "Facebook";
    aMail.innerHTML= "EMAIL";
    
    figure.appendChild(img);
    cardImage.appendChild(figure);
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

const createGraphic = () => {
  let graphicModal = document.getElementById("graphicModal");
  let graphic =  document.createElement("canvas");
  graphic.setAttribute("id","myChart");
  graphicModal.appendChild(graphic);
}

const compareGraphic = () => {
  var ctx= document.getElementById("myChart").getContext("2d");
  var myChart= new Chart(ctx,{
      type:"line",
      data:{
          labels:Object.keys(indicatorData),
          datasets:[{
                    label:'PER', 
                    data:Object.values(bankData.getIndicatorsData('PER', category, indicator)),
                    backgroundColor:'rgba(250,150,0,0.5)',
                    borderColor: 'rgba(250,150,0,1)',
                    borderWidth: 3, 
                    fill: false
                  },{
                    label:'BRA', 
                    type: 'line',
                    data:Object.values(bankData.getIndicatorsData('BRA', category, indicator)),
                    backgroundColor:'rgb(79, 205, 169,0.5)',
                    borderColor: 'rgb(79, 205, 169,1)',
                    borderWidth: 3, 
                    fill: false                 
                  },{
                    label:'MEX', 
                    type: 'line',
                    data:Object.values(bankData.getIndicatorsData('MEX', category, indicator)),
                    backgroundColor:'rgb(229, 89, 50,1)',
                    borderColor: 'rgb(229, 89, 50,1)',
                    borderWidth: 3, 
                    fill: false                 
                  },{
                    label:'CHL', 
                    type: 'line',
                    data: Object.values(bankData.getIndicatorsData('CHL', category, indicator)),
                    backgroundColor:'rgb(66, 134, 244,1)',
                    borderColor: 'rgb(66, 134, 244,1)',
                    borderWidth: 3, 
                    fill: false                 
                  } 
              ]},
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

const oneGraphic = () => {
  var ctx= document.getElementById("myChart").getContext("2d");
  var myChart= new Chart(ctx,{
      type:"bar",
      data:{
          labels:Object.keys(indicatorData),
          datasets:[{
                    label:country, 
                    data:Object.values(indicatorData),
                    backgroundColor:'rgba(242,193,19,0.5)',
                    borderColor: 'rgba(242,193,19,1)',
                    borderWidth: 3 
                    
                  }
              ]},
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

const removeGraphic = () => {
  let graphicModal = document.getElementById("graphicModal");
  let eraseChild = graphicModal.lastChild;
  graphicModal.removeChild(eraseChild);
} 

const showGraphic = (indicator) => {
  let toggleButtonFlag = false;
  let modalHeader = document.getElementById("modalHeader");
  let modalIndicator = document.getElementById("modalIndicator");
  let compareButton = document.getElementById("compare");
  compareButton.value = "Comparar";
  
  createGraphic();

  modal.style.display = "block";
  modalHeader.textContent = category.toUpperCase();
  modalIndicator.textContent = indicator;
  indicatorData = bankData.getIndicatorsData(country, category, indicator);
  
  console.log(Object.keys(indicatorData));
  console.log(Object.values(indicatorData));
  console.log(bankData.getIndicatorsData(country, category, indicator));

  oneGraphic();

  compareButton.addEventListener("click", compared => {
    removeGraphic();
    createGraphic();
    if (toggleButtonFlag == false){
      compareButton.value = "Regresar";
      compareGraphic();   
      toggleButtonFlag = true;
    }else{
      compareButton.value = "Comparar";
      oneGraphic();        
      toggleButtonFlag = false;
    }
  });
} 

for(let i=0; i < indicatorsCards.length; i ++){
    indicatorsCards[i].addEventListener("click", indicatorsSelected => {
    indicator = indicatorSelected[i].textContent.slice(0,-1);
    showGraphic(indicator);
  });
}


// When the user clicks (x) of the modal, close it
span.onclick = function() {
  modal.style.display = "none";
  removeGraphic();
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
    removeGraphic();
  }
}


