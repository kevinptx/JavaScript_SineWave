function init() {
  // The setInterval() method calls a function or evaluates an expression at specified intervals 	//(in milliseconds). Example: setInterval(function(){ alert("Hello"); }, 3000);
  //Alert "Hello" every 3 seconds (3000 milliseconds):
  setInterval(OnDraw, 200);
}
// we are initializing the time to 0
let time = 0;
//this is setting the line color to yellow
let color = "rgb(191, 255, 0)";

//OnDraw() is associated with HTML5 Canvas
function OnDraw() {

  time = time + -0.35;
  let canvas = document.getElementById("mycanvas");
  let line = canvas.getContext("2d");

  //The clearRect() method clears the specified pixels within a given rectangle.
  line.clearRect(0, 0, canvas.width, canvas.height);

  //The beginPath() method begins a path, or resets the current path.
  line.beginPath();
  for (cnt = -1; cnt <= canvas.width; cnt++) {
    line.lineTo(cnt, canvas.height * 0.5 - (Math.random() * 1 + Math.sin(time + cnt * 0.045) * 60));
  }
  //setting the width of the line
  line.lineWidth = 6;
  //setting the color of the line with the value from line 9
  line.strokeStyle = color;
  line.stroke();
}

init();