//import * from './main.js'; 
import  bankData  from './data.js';


let country = "BRA";
let category = "fuerza laboral";
let indicator = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus nec iaculis mauris.";
let section =  document.getElementById("indicatorsCards");

let indicatorName = bankData.filterData(country, category);
console.log(indicatorName);


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

    card.setAttribute("class","card");
    cardImage.setAttribute("class","card-image");
    figure.setAttribute("class","imageMedia");
    cardContent.setAttribute("class","card-content");
   // media.setAttribute("class","media");
   // tittle.setAttribute("class","tittle is-4");
    content.setAttribute("class","content");
    footer.setAttribute("class","share-btn");
    aTwitter.setAttribute("class","share-btn-twitter");
    aFacebook.setAttribute("class","share-btn-facebook");
    aMail.setAttribute("class","share-btn-email");

    img.setAttribute("src","images/"+[i]+".png");
    img.setAttribute("style","width:110%");
    aTwitter.setAttribute("href","https://twitter.com/share?url=<URL>&text=<TEXT>via=<USERNAME>");
    aFacebook.setAttribute("href","https://www.facebook.com/sharer/sharer.php?u=<URL>");
    aMail.setAttribute("href","mailto:?subject=<SUBJECT>&body=<BODY>");
    aCard.setAttribute("href","");
    
  //  tittle.innerHTML= category.toUpperCase();
    indicatorTittle.innerHTML= indicatorName[i] + "." + "<br>";
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