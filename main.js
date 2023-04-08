

var canvas = document.getElementById("myCanvas");
var ctx = canvas.getContext("2d");
ctx.font = "30px Comic Sans MS";
ctx.fillStyle = "red";
ctx.textAlign = "center";
ctx.fillText("BetSpot", canvas.width/2, canvas.height/2);


var text ="Continue betting with us";
var output = document.getElementById("welcome");
var i = 0;
function writeText(){
  
  output.innerHTML= text.slice(0,i);
  i++;
  if(i>text.length){
    i=0;
  }
  
}
setInterval(writeText,150);

function validate(){
alert("Login successful");
return false;
}
