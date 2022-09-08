



function myLight() {
    
   // window.open('https://www.secretlantern.org/labyrinth-of-light');
    
   // document.getElementsByName("titleZ")[0].style.color = "black";
   // document.getElementsByName("titleZ")[0].style.fontFamily = "inherit";
    
    document.getElementsByName("bodyF")[0].style.backgroundColor = "silver";
    document.getElementsByName("bodyA")[0].style.backgroundColor = "silver";
    
   // document.getElementsByName("subT")[0].style.color = "black";
    //document.getElementsByName("subT")[0].style.fontFamily = "inherit";
    return "";
    
   
    
    
}

function myWeb() {
    window.open('https://www.secretlantern.org/labyrinth-of-light');
    return "";
   
}

let art1 = {name:"Zeus - God of Thunder", artist:"Kidou", price: 8400};
let art2 = {name:"Aphrodite - Goddess of Love", artist:"Endou", price: 3500};
let art3 = {name:"Ares - God of War", artist:"Lucina", price: 6600};
let art4 = {name:"Hestia - Goddess of Hearth", artist: "Picasso", price: 5000};
let art5 = {name:"Athena - Goddess of Warfare", artist: "Pallas", price: 7000};
let art6 = {name:"Apollo - God of Sun, Archery", artist: "Delphi", price: 9500};

let photos = [];

photos[0] = art1;
photos[1] = art2;
photos[2] = art3;
photos[3] = art4;
photos[4] = art5;
photos[5] = art6;

//When a new image is selected this function will change the title to match the God.

const label = document.getElementsByName('painH');
function changeGodTitle(numZ) {
    
      //window.alert(photos[numZ - 1].name)
      //document.getElementsByName("painH")[0].stylE.innerHTML = "hI";
      //label[0].style.backgroundColor = "blue";
      label[0].textContent = photos[numZ -1].name;
      //document.getElementsByName
    
    
    
}



function propertyCheck(z) {
    let Output = "";
    if(z === 1) {
       window.open('https://en.wikipedia.org/wiki/Zeus');
    } else if (z === 2) {
       window.open('https://en.wikipedia.org/wiki/Aphrodite');
    } else if (z === 3) {
        window.open('https://en.wikipedia.org/wiki/Ares');
    } else if(z=== 4) {
        window.open('https://en.wikipedia.org/wiki/Hestia');
    } else if (z=== 5) {
        window.open('https://en.wikipedia.org/wiki/Athena');
    } else if(z=== 6) {
        window.open('https://en.wikipedia.org/wiki/Apollo')
    } else {
        
    }
        
    
    
    console.log(Output);
}

function myPicSelect(z) {
    let Output ="";
    Output = "Title: " + photos[z-1].name + "\nArtist: " + photos[z-1].artist  +"\nPrice: $" + photos[z-1].price;
    window.alert(Output);
    console.log(Output);
}


let shoppingBasket =[];

function addToCart() {
    
    let paintingSelect = label[0].textContent;
    
    for(let i = 0; i < photos.length; i++) {
        if (label[0].textContent === photos[i].name) {
            let product = {name:photos[i].name, cost: photos[i].price};
            
            shoppingBasket.push(product);
            
            console.log(product.name + " " + product.cost);
            
        } //else {
           // let product = {name:photos[i].name, cost: photos[i].price};
          //  shoppingBasket.push(product);
         //   
          //  for (const key in product) {
           //     console.log(product.name + " " + product.cost);
          //  }
        }
    
    for (let i =0; i < shoppingBasket.length; i++) {
        console.log(shoppingBasket[i]);
        window.alert("You have " + shoppingBasket[i].name + " in your basket.")
    }
    
    localStorage.setItem('customerList', JSON.stringify(shoppingBasket));
}

const labelB = document.getElementsByName("Tally");

function basketCheck() {
     var val = JSON.parse(localStorage.getItem('customerList'));
     let total = "";
     for(let i = 0; i < val.length; i++) {
        total = total + "Title: " + val[i].name  + " Price: $" + val[i].cost + ",          ";
     }
    labelB[0].textContent = total;
    
    totalPrice();
    
}

const labelC = document.getElementsByName("Cost");

function totalPrice() {
    var vale = JSON.parse(localStorage.getItem('customerList'));
    let totalCost = 0;
    for(let i = 0; i< vale.length; i++) {
        totalCost = totalCost + vale[i].cost;
    }
    labelC[0].textContent = "Total Cost: $" + totalCost;
}


