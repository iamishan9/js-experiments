
var people = [{
  id: 1,
  name: "Aegon Targaryen",
  children: [{
    id: 2,
    name: "Jaehaerys Targaryen",
    children: [{
      id: 4,
      name: "Daenerys Targaryen"
    },{
      id: 5,
      name: "Rhaegar Targaryen",
      children: [{
        id: 6,
        name: "Aegon Targaryen"
      }]
    }]
  },{
    id: 3,
    name: "Rhaelle Targaryen"
  }],
}];

var newList = [];
var newObj = {};

function normalize(famList){

  for(var i=0; i<famList.length; i++){

    newObj = {  id: famList[i].id,
                name: famList[i].name,
                children: 
              []};

    if(famList[i].children === undefined){
      newList.push(newObj);
      return;
    }


    for(var j=0; j<(famList[i].children).length;j++){

      (newObj.children).push(famList[i].children[j].id);

    }

    newList.push(newObj);

    famList = famList[i].children;
    normalize(famList);
  }


}
console.log("newList: ", newList);

console.log(normalize(people));
