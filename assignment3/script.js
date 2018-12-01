var gameContainer = document.getElementById('main-div');


var bird = document.createElement('img');
bird.style.left = "50px";
var birdY = 250;
var pressY = 0;
var speed = 10;
var gravity= 5;

bird.src = './images/bird.png';


var stopGame = function(){

}

var runGame = function (){


  
gameContainer.appendChild(bird);
  birdY += gravity;
  bird.style.top = birdY + "px";
  document.addEventListener("keydown", moveUp);





function moveUp(){
  pressY = -50;
  birdY += pressY;
  bird.style.top = birdY + "px";

}

}


setInterval(runGame, 1000);

