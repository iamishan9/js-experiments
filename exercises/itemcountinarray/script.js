var input = ['John', 'Mary', 'John', 'John', 'Sherlock', 'Sherlock']


var output = input.reduce(function(count, val){
  count[val] = count[val] === undefined ? 1 : count[val] += 1;
  return count;
}, {});


  console.log(output)