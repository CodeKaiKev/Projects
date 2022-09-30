//This sets the player value to the circle
var player = document.getElementById("player");
var game = document.getElementById("game");
var interval;
var both = 0;
var timer = 0;
var checkifFinish = true;
var blocksPresent = [];
var speed = 2;

var scoreCounter = 0;
var moveSpeed = 4;

function difficultSelect() {
    moveSpeed = 2;
    
    window.location.href = "fallGame.html";
    /*
    switch(check) {
        case 1:
            moveSpeed = 6;
            break;
        case 2;
            moveSpeed = 4;
            break;
        case 3;
            moveSpeed = 2;
            break;
        default:
            moveSpeed = 6;
    }
    */
    
    //if (check == "1") {
     //   moveSpeed = 6;
    //}else if (check == "2") {
    //    moveSpeed = 4;
    //}else {
   
    //}
    
    
}



function leftMove() {
    var left = parseInt(window.getComputedStyle(player).getPropertyValue("left"));
    if(left>0) {
        
        player.style.left = left - moveSpeed + "px";
    }
}


function rightMove() {
     var left = parseInt(window.getComputedStyle(player).getPropertyValue("left"));
     if(left<380) {
        
        player.style.left = left + moveSpeed + "px";
     }
}



document.addEventListener("keydown", event =>{
    if(both==0){
        both++;
        if(event.key==="ArrowLeft"){
            interval = setInterval(leftMove, 1);
        }
        if(event.key==="ArrowRight"){
            interval = setInterval(rightMove, 1);
        }
    }
});

document.addEventListener("keyup", event =>{
    clearInterval(interval);
    both = 0;
    
});


//This interval creates new holes and blocks to run throgh

var blocks = setInterval(function() {
    
    var blockLast = document.getElementById("block" + (timer-1));
    var holeLast = document.getElementById("hole" + (timer-1));
    
    if (timer>0){
        var blockLastTop = parseInt(window.getComputedStyle(blockLast).getPropertyValue("top"));
        var holeLastTop = parseInt(window.getComputedStyle(holeLast).getPropertyValue("top"));
        
    }
    
    if (blockLastTop < 400 || timer == 0) {
        
       
        
        var block = document.createElement("div");
        var hole = document.createElement("div");
        block.setAttribute("class", "block");
        hole.setAttribute("class", "hole")
        block.setAttribute("id", "block"+timer);
        hole.setAttribute("id", "hole"+timer)
        block.style.top = blockLastTop + 100 + "px";
        hole.style.top = holeLastTop + 100 + "px";
        var random = Math.floor(Math.random()* 360);
        hole.style.left = random + "px";
        game.appendChild(block);
        game.appendChild(hole);
        blocksPresent.push(timer);
        timer++;
    }
     
    var chracterTop = parseInt(window.getComputedStyle(player).getPropertyValue("top"));
    
    var chracterLeft = parseInt(window.getComputedStyle(player).getPropertyValue("left"));
    
    var drop = 0;
    
    if(chracterTop <= 0) {
        clearInterval(blocks);
        location.reload();
        exitProgram(timer);
        
    }
    
    for(var i = 0; i < blocksPresent.length; i++) {
        let now = blocksPresent[i];
        let nowBlock = document.getElementById("block"+now);
        let nowHole = document.getElementById("hole"+now);
        let iblockTop = parseFloat(window.getComputedStyle(nowBlock).getPropertyValue("top"));
        let iholeLeft = parseFloat(window.getComputedStyle(nowHole).getPropertyValue("left"));
        nowBlock.style.top = iblockTop - 0.5 + "px";
        nowHole.style.top = iblockTop - 0.5 + "px";
        if(iblockTop < -20) {
            blocksPresent.shift();
            nowBlock.remove();
            nowHole.remove();
        }
        if(iblockTop-20<chracterTop && iblockTop>chracterTop) {
            drop++;
            if(iholeLeft<=chracterLeft && iholeLeft+20>=chracterLeft) {
                drop = 0;
            }
        }
        
         if(chracterTop == iblockTop) {
             document.getElementById("score").innerHTML ="Score: " + (timerCheck -9);
         }
        
        
    }
    if(drop==0) {
        if(chracterTop < 480) {
            player.style.top = chracterTop + 2 + "px";
           
        }
    }else {
        player.style.top = chracterTop - 0.5 + "px";
        updateScore();
    }
    
   
    
    
   
    
}, speed);


function updateScore() {
    if ((timer-9) <= 0 ){
      document.getElementById("score").innerHTML ="Score: 0";
      console.log("Score: 0");
    } else {
      document.getElementById("score").innerHTML ="Score: " + (timer -9);
        console.log("Score: " + (timer-9)); 
    }
    
    if ((timer-9) > 10) {
        speed = 1;
    }
    
}




function exitProgram(timerCheck) {
    
  
    
   if(checkifFinish) {     
        var scoreZ = (timerCheck - 9);
        switch(true) {
                case (scoreZ <= 10):
                    alert("Uh oh, better luck next time. Score: " + scoreZ);
                    window.location.href = "fallHome.html";
                    break;
                case (scoreZ <= 50) && (scoreZ > 10) :
                    alert("Well done recruit. Score: " + scoreZ);
                    window.location.href = "fallHome.html";
                    break;
                case (scoreZ <= 100) && (scoreZ > 50) :
                    alert("You've become a seasoned vet. Score: " + scoreZ);
                    window.location.href = "fallHome.html";
                    break;
                case (scoreZ > 100) :
                    alert("You are now the master. Score: " + scoreZ);
                    window.location.href = "fallHome.html";
                    break;
                default:
                    alert("Yo!");
                    window.location.href = "fallHome.html";

        }
       checkifFinish = false;
   }
   window.location.href = "fallHome.html";

   
    
    
};