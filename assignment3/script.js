var canv = document.getElementById("canvas");
var canvContext = canv.getContext("2d");



var bird = new Image();
var backGround = new Image();
var foreGround = new Image();
var pipeUp = new Image();
var pipeDown = new Image();



bird.src = "images/bird.png";
backGround.src = "images/backGround.png";
foreGround.src = "images/foreGround.png";
pipeUp.src = "images/pipeUp.png";
pipeDown.src = "images/pipeDown.png";


var gap = 75;
var gravity = 1;
var dx = 20;
var dy = 100;
var score = 0;



document.addEventListener("keydown",moveUp);

function flyUp(){
  dy -= 25;
}


// var pipe = [];

// pipe[0] = {
//     x : canv.width,
//     y : 0
// };





















