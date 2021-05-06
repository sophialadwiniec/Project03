var screenManager;

function preload() {
  screenManager = new screenSetup('data/textTable.csv', 'data/buttonTable.csv'); 
}


function setup() {
  createCanvas(1280, 720);
  screenManager.setup(); 
  
}

function draw() {
  screenManager.draw();
  var buttonList =  screenManager.currentState.buttonList;
  for(let i = 0; i < buttonList.length; i++) {
    buttonList[i].draw(); 
    buttonList[i].onPress = clickableButtonPressed; 
    buttonList[i].onHover = clickableButtonHover; 
    buttonList[i].onOutside = clickableButtonOnOutside; 
  }
}

clickableButtonHover = function () {
  this.color = "#D99AAB";
}

clickableButtonOnOutside = function () {
  this.color = "#0889A6";
}

clickableButtonPressed = function() {
  screenManager.setState(this.nextState);
} 



