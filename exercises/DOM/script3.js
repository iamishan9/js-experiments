var points = [
  {x:10,y:20},
  {x:40,y:40},
  {x:60,y:20}
]


var parent= document.getElementById('myDiv');

parent.style.height='500px';
parent.style.width='500px';
parent.style.border='1px solid black';

for(var i=0;i< points.length;i++){

drawPoint(points[i].x,points[i].y)
}

function drawPoint(x,y){
  

var element = document.createElement('div');

element.style.position='absolute';
element.style.backgroundColor='red';
element.style.width='10px';
element.style.height='10px';

element.style.left = x+'px';

element.style.top =y+'px';

parent.appendChild(element);

}