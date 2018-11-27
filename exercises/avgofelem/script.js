var array = [1, 2, 3, 4, 5];
var sum=0;
for(var i=0;i< array.length;i++){
  sum=sum+ array[i];
}

var avg=sum/(array.length);

console.log(avg);





var array = [1, 2, 3, 4, 5];

var result = array.reduce(function(acc, val) {
    return acc + val/array.length;
}, 0);

console.log(result);

