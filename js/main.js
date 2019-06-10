var numSquare = 6;
var colors = generateRandomColors(numSquare);
var resetButton = document.querySelector("#reset");
var squares = document.querySelectorAll(".square");
var pickedColor = pickColor();
var displayColor = document.querySelector("#displayColor");
var messageDisplay = document.querySelector("#message");
var h1 = document.querySelector("h1");
var easyBtn = document.querySelector("#easy");
var hardBtn = document.querySelector("#hard");
displayColor.textContent = pickedColor;

//Easy Button Selected
easyBtn.addEventListener("click", function(){
  easyBtn.classList.add("selected");
  hardBtn.classList.remove("selected");
  numSquare = 3;
  colors = generateRandomColors(numSquare);
  pickedColor = pickColor();
  displayColor.textContent = pickedColor;
  for(var i =0; i < squares.length; i++){
    if(colors[i]){
      squares[i].style.backgroundColor = colors[i];
      } else {
        squares[i].style.display ="none";
      }
  }
})
//Hard Button Selected
hardBtn.addEventListener("click", function(){
  hardBtn.classList.add("selected");
  easyBtn.classList.remove("selected");
  numSquare = 6;
  colors = generateRandomColors(numSquare);
  pickedColor = pickColor();
  displayColor.textContent = pickedColor;
  for(var i =0; i < squares.length; i++){
    if(colors[i]){
      squares[i].style.backgroundColor = colors[i];
      squares[i].style.display ="block";
      }
  }
})

resetButton.addEventListener("click", function(){
 // reset the color again
  colors = generateRandomColors(numSquare);
 // pick a new random color
  pickedColor = pickColor();
 // reset new colors RGB on screen
  displayColor.textContent = pickedColor;
 //reset the squares colors again
  for(var i = 0; i < colors.length; i++){
  //give initial colors to squares
  squares[i].style.backgroundColor = colors[i];
  squares[i].style.visibility="visible";
 
    }
  h1.style.backgroundColor ="transparent";
  messageDisplay.textContent = "";
  resetButton.textContent="New Colors ?";
  })

for(var i = 0; i < colors.length; i++){
  //give initial colors to squares
  squares[i].style.backgroundColor = colors[i];
  //add event to square
  squares[i].addEventListener("click", function(){
  // grab the clicked square color
    var clickedColor = this.style.backgroundColor;
  // compare clickedColor with pickedColor
    if(clickedColor === pickedColor){
      messageDisplay.textContent = "Correct !"
      // function invoked here for changing colors to the correct one
      changeColor(clickedColor);
      // change h1 color with the clicked correct color
      h1.style.backgroundColor = clickedColor;
      resetButton.textContent="Play again ?";

    } else {
      this.style.visibility="hidden";
      messageDisplay.textContent = "Try Again."
      }
  })
};
// Change all color to the selected color if selected color is correct
function changeColor (color){
  //loop all square
  for(var i = 0; i < squares.length; i++){
    squares[i].style.backgroundColor = color;
  }
}

//function for give random color to the pickedColor
function pickColor(){
  var random = Math.floor(Math.random() * colors.length);
  return colors[random];
}

function generateRandomColors(num){
  // make an ampty array
  var arr = []
  // through the loop
  for(var i = 1; i <= num; i++){
    // push randomColor function into the empty array
    arr.push(randomColor());
  }
  // return arr
  return arr;
}
// rgb generator 
function randomColor(){
  var r = Math.floor(Math.random() * 256); //red
  var g = Math.floor(Math.random() * 256); //green
  var b = Math.floor(Math.random() * 256); //blue
  return "rgb(" + r + ", " + g +", " + b + ")"; // return rgb structor with variables value
}