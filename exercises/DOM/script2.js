


var obj = {
  x:20,
  y:40,
  h:10,
  w:10,
  c:'red'
}

var parent= document.getElementById('myDiv');

parent.style.height='500px';
parent.style.width='500px';
parent.style.border='1px solid black';


var element = document.createElement('div');
element.style.position='absolute';
element.style.backgroundColor=obj.c;
element.style.width=obj.w+'px';
element.style.height=obj.h+'px';

element.style.left = obj.x+'px';

element.style.top = obj.y+'px';


parent.appendChild(element);
