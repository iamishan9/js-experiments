var obj = {
    name: "Ishan",
    address: "Bhaisepati",
    email: "iamishan9@gmail.com",
    interest:"sports and programming",
    education:[{name:'KEC',enrolledDate:'2071'},{name:'ADV',enrolledDate:'2072'}]
}



for (var i = 0; i < obj.education.length; i++) {
  current=obj.education[i];
  console.log("name= " + current.name + ", enrolled date = "+ current.enrolledDate );
}

