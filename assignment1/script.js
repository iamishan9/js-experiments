

var sliderUl = document.getElementById('slider-ul');
var dots = document.getElementsByTagName('span');

var buttonPrevious = document.getElementsByClassName('left-arrow')[0];
var buttonNext = document.getElementsByClassName('right-arrow')[0];


var timer;
var rtimeout;
var pagg;
var gapp;
var dir = -1;
var imgWidth = 800;
var totImg = imageCounter();
var maxMargin = totImg * imgWidth - imgWidth;
var currMargin = 0;
var index = 0;
var newCurrMargin = 0;
var butclick = 0;
var getMargin = 0;


//count the number of images
function imageCounter(){
  var imgs = document.getElementsByTagName('li'); 
  return imgs.length;
}

//left arrow
function previousImage(){
 
  // index--;
  // if(index<0) {index = totImg-1;}
  // else if(index>totImg-1) {index = 0;}
  gotoSlide(1);
}

//right arrow
function nextImage(){
  gotoSlide(-1);
}


buttonPrevious.onclick = function(){
  previousImage();
}

buttonNext.onclick = function(){
  nextImage();
}

// //when clicked on dots
// dots[0].onclick = function(){gotoSlide(0);}
// dots[1].onclick = function(){gotoSlide(1);}
// dots[2].onclick = function(){gotoSlide(2);}






function gotoSlide(d){
  clearInterval(timer);
  clearTimeout(rtimeout);
  clearInterval(gapp);
  dir = d;
  timer = setInterval(function() {
 
    if((newCurrMargin <= -maxMargin && dir === -1 ) || (newCurrMargin === 0 && dir===1)){
      clearInterval(timer);
      start();
    }
    else{
        
    newCurrMargin += dir * 10;
    sliderUl.style.marginLeft = newCurrMargin + 'px';

    if(newCurrMargin >= 0)  dir = -1;
    else if(newCurrMargin <= -maxMargin)  dir= 1;


    if (newCurrMargin % imgWidth === 0) {
      clearInterval(timer);
      start();
     }
    }
    }, 10);

}


function slide(){
  newCurrMargin += dir * 10;
  sliderUl.style.marginLeft = newCurrMargin + 'px';

  if(newCurrMargin >= 0)  dir = -1;
  if(newCurrMargin <= -maxMargin)  dir= 1;
    

  if(newCurrMargin % imgWidth === 0 ){
    sliderUl.style.marginLeft = newCurrMargin + 'px';
    clearInterval(gapp);
    start();
  }


}


function start(){
  rtimeout = setTimeout(function(){
    gapp = setInterval(slide, 10);
  },2000);
}


start();