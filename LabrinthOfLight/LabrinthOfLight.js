
function myLight() {
    
   // window.open('https://www.secretlantern.org/labyrinth-of-light');
    
   // document.getElementsByName("titleZ")[0].style.color = "black";
   // document.getElementsByName("titleZ")[0].style.fontFamily = "inherit";
    
    document.getElementsByName("bodyF")[0].style.backgroundColor = "silver";
    document.getElementsByName("bodyA")[0].style.backgroundColor = "silver";
    
   // document.getElementsByName("subT")[0].style.color = "black";
    //document.getElementsByName("subT")[0].style.fontFamily = "inherit";
    
   
    
    
}

function myWeb() {
    window.open('https://www.secretlantern.org/labyrinth-of-light');
   
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


let photos = [];
let art1 = {name:"Zeus", artist:"Kidou", price: 8400};
let art2 = {name:"Aphrodite", artist:"Endou", price: 3500};
let art3 = {name:"Ares", artist:"Lucina", price: 6600};
let art4 = {name:"Hestia", artist: "Picasso", price: 5000};
let art5 = {name:"Athena", artist: "Pallas", price: 7000};
let art6 = {name:"Apollo", artist: "Delphi", price: 9500};

photos[0] = art1;
photos[1] = art2;
photos[2] = art3;
photos[3] = art4;
photos[4] = art5;
photos[5] = art6;
