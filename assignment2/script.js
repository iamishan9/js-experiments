
var boxArray = [];
var boxHW = 20;
var boundaryHW = 500;


function handleBorderCollision(box) {

    if (box.x <= 0) {
        box.dx = -box.dx;
    } else if (box.x >= boundaryHW) {
        box.dx = -box.dx;
        box.x = boundaryHW;
    } else if (box.y <= 0) {
        box.dy = -box.dy;
    } else if (box.y >= boundaryHW) {
        box.dy = -box.dy;
        box.y = boundaryHW; 
    }

}

function handleBoxCollision(box, boxIndex) {
    for (var i = 0; i < boxArray.length; i++) {
        var otherBox = boxArray[i];
        if (i !== boxIndex) {
            if (box.x <= otherBox.x + boxHW &&
                box.x + boxHW >= otherBox.x &&
                box.y <= otherBox.y + boxHW &&
                boxHW + box.y >= otherBox.y) {
                box.dx = -box.dx ;
                box.dy = -box.dy ;
              }
        }
    }
}


function handleCollision(box, index) {
    handleBorderCollision(box);
    handleBoxCollision(box, index);
}

function boxMovement(boxInfo, box) {
    box.x += box.dx;
    box.y += box.dy;
    boxInfo.style.left = box.x + 'px';
    boxInfo.style.top = box.y + 'px';
}


function runCollision() {
    var boxDiv = document.getElementsByClassName('box');

    for (var i = 0; i < boxArray.length; i++) {

        boxMovement(boxDiv[i], boxArray[i]);
        handleCollision(boxArray[i], i);

    }
}


function appendBox(box) {

    var boxesDiv = document.createElement('div');
    boxesDiv.style.background ="red";
    boxesDiv.style.width = boxHW + "px";
    boxesDiv.style.height = boxHW + "px";
    boxesDiv.style.position = "absolute";
    boxesDiv.style.left = box.x + "px";
    boxesDiv.style.top = box.y + "px";
    boxesDiv.setAttribute("class", "box");
    document.body.appendChild(boxesDiv);
}

function generateRandomNum(max = 1, min = 0) {
  return (Math.floor(Math.random() * max) + min);
}

function createBox(a, b, c, d) {
    boxArray.push({
        x: a,y: b,dx: c,dy: d
    })
}

function createBoxes() {
    for (var i = 0; i < 10; i++) {

        createBox(
            generateRandomNum(boundaryHW),
            generateRandomNum(boundaryHW), 
            generateRandomNum(2, 1), 
            generateRandomNum(2, 1)
        );

        appendBox(boxArray[i]);
    }
}
createBoxes();
setInterval(runCollision, 10);