var screenManager;


function preload() {
  screenManager = new screenSetup('data/textTable.csv', 'data/buttonTable.csv'); 
}

// Setup the adventure manager
function setup() {
  createCanvas(1280, 720);
  screenManager.setup(); 
  
}

// Adventure manager handles it all!
function draw() {
  background(0); 
  screenManager.draw();
  var buttonList =  screenManager.currentState.buttonList;
  for(let i = 0; i < buttonList.length; i++) {
    buttonList[i].draw(); 
    buttonList[i].onPress = clickableButtonPressed; 
  }
}
// function setupClickables() {
//   // All clickables to have same effects
//   for( let i = 0; i < clickables.length; i++ ) {
//     clickables[i].onHover = clickableButtonHover;
//     clickables[i].onOutside = clickableButtonOnOutside;    
//   }
// }

// // tint when mouse is over
// clickableButtonHover = function () {
//   this.color = "#AA33AA";
//   this.noTint = false;
//   this.tint = "#FF0000";
// }

// // color a light gray if off
// clickableButtonOnOutside = function () {
//   // backto our gray color
//   this.color = "#AAAAAA";
// }

clickableButtonPressed = function() {
  screenManager.setState(this.nextState);
} 



