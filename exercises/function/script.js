var numbers = [1, 2, 3, 4];

var result =[];


function transform(collection, tranFunc) {
  
    collection.forEach(function(element){
      result.push(tranFunc(element));
    })
  
}

var output = transform(numbers, function(num) {
    return num * 2;
});


console.log(result);