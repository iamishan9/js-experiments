
var parent= document.getElementById('myDiv');

parent.style.top='10px';
parent.style.height='500px';
parent.style.width='500px';
parent.style.border='1px solid black';


var speed= 1;
var ptop=10;
var element = document.createElement('div');
element.style.height='10px';
element.style.width='10px';
element.style.backgroundColor='red';
element.style.left='245px';



element.style.position='absolute';

parent.appendChild(element);

function anim(){
  

ptop = ptop + speed;
element.style.top = ptop + 'px';

console.log(ptop);

if(ptop == (parseInt(parent.style.height))){
  speed = speed * (-1);
}

if(ptop == 10){
  speed = speed * (-1);
}



};

setInterval(anim,10);


