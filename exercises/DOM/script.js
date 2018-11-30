

var element= document.getElementById('myDiv');
element.style.width='100px';
element.style.height='200px';
element.style.backgroundColor='red';


var col=['red','green','blue'];
var count=0;

element.addEventListener('click',function(e){

  
  
  element.style.backgroundColor=col[count];
  count++;

  if(count==col.length){
    count=0;
  }

});
