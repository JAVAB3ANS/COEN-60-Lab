d3.select("body").style("background-color", "#dbf6f3");

function getRandomColor() {
    var alphaNum = "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    var color = "#";

    for (var i = 0; i < 6; i++) {
      color += alphaNum[Math.floor(Math.random() * 16)];
    }

    return color;
}

function addSquare() {
  var xPosition = Math.floor(Math.random() * 460) + 11;
  var yPosition = Math.floor(Math.random() * 250) + 11;
  var randomColor = getRandomColor();
  var box = document.createElement("div");

  box.style.width = "50px";
  box.style.height = "50px";
  box.style.background = randomColor;
  box.style.color = "white";
  box.style.position = "absolute";
  box.style.left = xPosition + "px";
  box.style.top = yPosition + "px";
  box.style.border = "5px solid black";

  document.getElementById("bigOne").appendChild(box);
}

function deleteAll() {
  var mybigBoxVar = document.getElementById("bigOne");

  while (mybigBoxVar.hasChildNodes()) {
    mybigBoxVar.removeChild(mybigBoxVar.firstChild);
  }
}

function changeColors() {
  var bigBoxVar = document.getElementById("bigOne").children;
  
  for (i = 0; i < bigBoxVar.length; i++) {
      var randomColor = getRandomColor();
      bigBoxVar[i].style.background = randomColor;
  }
}