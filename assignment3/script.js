var birdy = document.getElementById('birdy');
var sprite = document.getElementById('sprite');
var spriteStepWidth = 92;
var spriteSteps     = 2;
var step            = 0;
var score           = 0;
var check           = 1;
var up = false;
var scoreBoard = document.getElementById('score-board');
var pipes = document.getElementsByClassName('pipe');
var pipeWidth = pipes[0].offsetWidth;


function Bird(){
  
  
}

function animateSprite () {
  sprite.style.left= -step * spriteStepWidth + 'px';
  if (step == spriteSteps) {
    step = 0;
  }
  else {
    step++;
  }

}

document.onkeydown = function (e) {
  if ( e.keyCode == 32 ) {
    up = true;
  }
}
document.onkeyup = function (e) {
  if ( e.keyCode == 32 ) {
    up = false;
  }
}

function animateFly () {
  var fall = birdy.offsetTop;
  if (up == true) {
    birdy.style.top = (fall - 20) + 'px';
  }
  else {
    birdy.style.top = (fall + 12) + 'px';
  }

}

function updateHeight (upPipe, downPipe) {
   var obstacle = 70;
   var blockObstacle = obstacle / 3;
   var random = Math.floor( Math.random() * blockObstacle );
   var upObstacle = blockObstacle + random;
   var downObstacle = blockObstacle + (blockObstacle - random);

   upPipe.style.height = upObstacle + '%';
   downPipe.style.height = downObstacle + '%';

}

function touchPipe (pipe) {
  var pipeLeft = pipe.offsetLeft;
  var pipeRight = pipe.offsetLeft + pipe.offsetWidth;
  var pipeUp = pipe.children[0].offsetTop+ pipe.children[0].offsetHeight;
  var pipeDown = pipe.children[1].offsetTop;
  var birdyyRight = birdy.offsetLeft + birdy.offsetWidth;
  var birdyyLeft = birdy.offsetLeft;
  var birdyyUp = birdy.offsetTop;
  var birdyyDown = birdy.offsetHeight + birdy.offsetTop;

  if ( birdyyRight > pipeLeft && birdyyLeft < pipeRight ) {

    if (birdyyDown > pipeDown ) window.confirm("Game Over!");
    if (birdyyUp < pipeUp) window.confirm("Game Over");
    score++;
    if(score % 19 == 0 )   scoreBoard.innerHTML=[check++];
    }
}

function animatePipes () {  
  Array.prototype.forEach.call( pipes, function (pipe) {
    var left = pipe.offsetLeft;
    pipe.style.left = left - 10 + 'px';
    if (left < -pipeWidth) {
      pipe.style.left = 100 + '%';
      updateHeight(pipe.children[0], pipe.children[1]);
    }
    touchPipe (pipe);
  });
}

function animateScene () {
  animateSprite();
  animateFly();
  animatePipes();
}

var startGame =setInterval(animateScene, 40);