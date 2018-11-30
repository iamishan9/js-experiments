// var arr=[[1, 2, 3], [2, 4, 5], 6];

// function flatten(arr) {
//   return arr.reduce(function (ip, op) {
//     return ip.concat(Array.isArray(op) ? flatten(op) : op);  // return ip.concat(op);
//   }, []);
// }

// var result= flatten(arr);
//  console.log(result);


var data = [
  [1, 2, 3],
  [2, 4, 5], 6, [2, [3, 10, [15, [15, 21, 23], 22], 36], 7, 1]
];

function flattenArray(data, acc) {
  var result = data.reduce(function (arr, val) {
    if (Array.isArray(val)) {
      arr = flattenArray(val, arr);
    } else if (arr.indexOf(val) == -1) {
      arr.push(val);
    }
    return arr;
  }, acc);
  return result;
}

var answer = flattenArray(data, []);

console.log(answer);