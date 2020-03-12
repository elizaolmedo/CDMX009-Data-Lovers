//import * from './main.js'; 
import  bankData  from './data.js';


let country = "PER";
let category = "población";
//let indicator = "Inscripción escolar, nivel terciario, mujeres (% bruto)";
let indicator;
let indicatorData;
let cardId;
let section =  document.getElementById("indicatorsCards");
let indicatorsCards = document.getElementsByClassName("aCard");
let indicatorSelected = document.getElementsByClassName("indicatorTittle");
let indicatorName = bankData.getIndicatorsName(country, category);
let overlayDiv = document.getElementById("text");
let pageTittle = document.getElementById("pageTittle");
let modal = document.getElementById("myModal");
let span = document.getElementsByClassName("close")[0];

pageTittle.textContent = country.toUpperCase() + "-" + category.toUpperCase();

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
    indicatorTittle.innerHTML= indicatorName[i] + "." ;
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


const showGraphic = (cardId,indicator) => {

  modal.style.display = "block";
  let modalHeader = document.getElementById("modalHeader");
  modalHeader.textContent = category.toUpperCase();
  let modalIndicator = document.getElementById("modalIndicator");
  modalIndicator.textContent = indicator;
  let graphicModal = document.getElementById("graphicModal");

  let graphic =  document.createElement("canvas");
  graphic.setAttribute("id","myChart");
  graphicModal.appendChild(graphic);

  indicatorData = bankData.getIndicatorsData(country, category, indicator);
  console.log(Object.keys(indicatorData));
  console.log(Object.values(indicatorData));
  console.log(bankData.getIndicatorsData(country, category, indicator));
  //overlayDiv.innerHTML = Object.keys(indicatorData);
  /*
  let barChartData = {
    labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
    datasets: [{
      label: 'Dataset 1',
      backgroundColor: 'rgba(242,193,19,0.5)',
      data: [
        10, 20, 30, 40, 50
      ]
    }, {
      label: 'Dataset 2',
      backgroundColor: 'rgb(66, 134, 244,1)',
      data: [
        5, 15, 25, 30, 35, 40
      ]
    }, {
      label: 'Dataset 3',
      backgroundColor: 'rgb(229, 89, 50,1)',
      data: [
        20, 23, 34, 45, 56
      ]
    }]

  };*/



  var ctx= document.getElementById("myChart").getContext("2d");
  var myChart= new Chart(ctx,{
      type:"line",
      data:{
          labels:Object.keys(indicatorData),
          datasets:[{
                    label:country, 
                    data:Object.values(indicatorData),
                    //data: barChartData,
                    backgroundColor:'rgba(242,193,19,0.5)',
                    borderColor: 'rgba(242,193,19,1)',
                    borderWidth: 3, 
                    fill: false
                   },{
                    label:'BRA', 
                    type: 'line',
                    data:Object.values(bankData.getIndicatorsData('BRA', category, indicator)),
                    //data: barChartData,
                    backgroundColor:'rgb(79, 205, 169,0.5)',
                    borderColor: 'rgb(79, 205, 169,1)',
                    borderWidth: 3, 
                    fill: false                 
                   },{
                    label:'MEX', 
                    type: 'line',
                    data:Object.values(bankData.getIndicatorsData('MEX', category, indicator)),
                    //data: barChartData,
                    backgroundColor:'rgb(229, 89, 50,1)',
                    borderColor: 'rgb(229, 89, 50,1)',
                    borderWidth: 3, 
                    fill: false                 
                   },{
                    label:'CHL', 
                    type: 'line',
                    data:Object.values(bankData.getIndicatorsData('CHL', category, indicator)),
                    //data: barChartData,
                    backgroundColor:'rgb(66, 134, 244,1)',
                    borderColor: 'rgb(66, 134, 244,1)',
                    borderWidth: 3, 
                    fill: false                 
                  } /*{
                  label: '',
                  data:[10, 50, 60],
                  type:'bar',
                  backgroundColor:'rgb(74, 135, 72,1)',
                
                  }, {
                  label: '',
                  data:[10, 40, 50],
                  type:'bar',
                  backgroundColor:'rgb(229, 89, 50,1)',
                
                }*/
               ]},
      options:{
          /*
					title: {
						display: true,
						text: indicator
					},
					tooltips: {
						mode: 'index',
						intersect: false
					},
					responsive: true,
					scales: {
						xAxes: [{
							stacked: true,
						}],
						yAxes: [{
							stacked: true
						}]
					}*/
          
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
    indicatorsCards[i].addEventListener("click", indicatorsSelected => {
    cardId = indicatorSelected[i].id;
    indicator = indicatorSelected[i].textContent.slice(0,-1);
    showGraphic(cardId,indicator);
    //console.log(indicator);
    //console.log(indicatorData);
    //return indicator;
  });
}



// Get the button that opens the modal
//var btn = document.getElementById(cardId);

// Get the <span> element that closes the modal

// When the user clicks the button, open the modal 
// btn.onclick = function() {
// modal.style.display = "block";
// }
// When the user clicks on <span> (x), close the modal
span.onclick = function() {
  modal.style.display = "none";
  let graphicModal = document.getElementById("graphicModal");
  let eraseChild = graphicModal.lastChild;
  graphicModal.removeChild(eraseChild); 
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
    let graphicModal = document.getElementById("graphicModal");
    let eraseChild = graphicModal.lastChild;
    graphicModal.removeChild(eraseChild);
  }
}


