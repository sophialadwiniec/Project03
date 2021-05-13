var screenManager;
var checkCharacterScreen = true;
// input boxes 
var characterName; 
var friend1Name; 
var friend2Name; 
var crushName; 
// clickables for just the character screen 
var b1; 
var b2; 
var b3; 
var b4; 
// button map to match the clickable with the right word to replace
var buttonMap;  


function preload() {
  screenManager = new screenSetup('data/textTable.csv', 'data/buttonTable.csv'); 
}


function setup() {
  createCanvas(1280, 720);
  screenManager.setup(); 

  buttonMap = new Map(); 
  b1 = new Clickable(); 
  buttonMap.set(b1, "characterName");

  b2 = new Clickable(); 
  buttonMap.set(b2, "friend1"); 
  b2.text = "submit"; 

  b3 = new Clickable(); 
  buttonMap.set(b3, "friend2"); 
  b3.text = "submit"; 

  b4 = new Clickable(); 
  buttonMap.set(b4, "Danny"); 

  

  var y = 150; 
  for(let key of buttonMap.keys()) {
    var button = key; 
    button.text = "submit"; 
    button.textSize = 20; 
    button.width = 100; 
    button.height = 30; 
    button.x = 925; 
    button.y = y; 
    y = y + 150; 
    button.pressed = true; 
  }

}

function draw() {
  
  screenManager.draw();
  if(screenManager.currentState.buttonList !== undefined){ 
    var buttonList =  screenManager.currentState.buttonList;
    for(let i = 0; i < buttonList.length; i++) {
      buttonList[i].draw(); 
      buttonList[i].pressed = true; 
      buttonList[i].onPress = clickableButtonPressed; 
      buttonList[i].onHover = clickableButtonHover; 
      buttonList[i].onOutside = clickableButtonOnOutside; 
    }
  
  }
 
  if (screenManager.currentStateString === "ChooseCharacter" && checkCharacterScreen == true) {
   characterName = createInput(); 
   characterName.position(700,150); 
   characterName.size(200); 
    
    friend1Name = createInput(); 
    friend1Name.position(700,300); 
    friend1Name.size(200); 
        
  
    friend2Name = createInput(); 
    friend2Name.position(700,450); 
    friend2Name.size(200); 

    crushName = createInput(); 
    crushName.position(700,600); 
    crushName.size(200); 
    checkCharacterScreen = false; 
  }

  if(screenManager.currentStateString === "ChooseCharacter") {
    for(let key of buttonMap.keys()) {
      key.draw(); 
      key.onHover = clickableButtonHover; 
      key.onOutside = clickableButtonOnOutside; 
      key.onPress = clickableButtonPressed; 
    }
  }

}

clickableButtonHover = function () {
  if(this.pressed === true) {
    this.color = "#D99AAB";
  }
  else {
    this.color = "#808080"
  }
}

clickableButtonOnOutside = function () {
  if(this.pressed === true) {
    this.color = "#0889A6";
  }
  else {
    this.color = "#808080"
  }
  
}

clickableButtonPressed = function() {
  if(buttonMap.get(this) === undefined && screenManager.currentStateString === "ChooseCharacter") {
    characterName.remove(); 
    friend1Name.remove(); 
    friend2Name.remove(); 
    crushName.remove(); 
  } 
  if(buttonMap.get(this) === undefined) {
    screenManager.setState(this.nextState);
  } 
  else {
    if(buttonMap.get(this) === "friend1" && this.pressed === true) {
      print(friend1Name.value()); 
      this.pressed = false; 
      screenManager.parseText(friend1Name.value(), "friend1", "Friend1"); 
      screenManager.parseButtons(friend1Name.value(), "friend1", "Friend1"); 
    }
    if(buttonMap.get(this) === "friend2" && this.pressed === true) {
      print(friend2Name.value()); 
      this.pressed = false; 
      screenManager.parseText(friend2Name.value(), "friend2", "Friend2"); 
      screenManager.parseButtons(friend2Name.value(), "friend2", "Friend2");  
    }
    if(buttonMap.get(this) === "Danny" && this.pressed === true) {
      print(crushName.value()); 
      this.pressed = false; 
      screenManager.parseText(crushName.value(), "Danny", "Danny"); 
      screenManager.parseButtons(crushName.value(), "Danny", "Danny"); 
    }
    if(buttonMap.get(this) === "characterName" && this.pressed === true) {
      print(characterName.value()); 
      this.pressed = false;  
    }
  }
  
} 
