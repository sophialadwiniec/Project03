var screenManager;
var checkCharacterScreen = true;
// input boxes 
var characterName; 
var friend1Name; 
var friend2Name; 
var crushName; 
  
function preload() {
  screenManager = new screenSetup('data/textTable.csv', 'data/buttonTable.csv'); 
}

function setup() {
  createCanvas(1280, 720);
  screenManager.setup(); 
}

function draw() {
  screenManager.draw();
  if(screenManager.currentState.buttonList !== undefined){ 
    var buttonList =  screenManager.currentState.buttonList;
    for(let i = 0; i < buttonList.length; i++) {
      buttonList[i].draw(); 
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
}

clickableButtonHover = function () {
  this.color = "#D99AAB";
}

clickableButtonOnOutside = function () {
  this.color = "#0889A6";
}

clickableButtonPressed = function() {
  if(screenManager.currentStateString === "ChooseCharacter") {
    
    if(crushName.value() !== ""){
      screenManager.parseText(crushName.value(), "Danny", "Danny"); 
      screenManager.parseButtons(crushName.value(), "Danny", "Danny"); 
    } else {
      screenManager.parseText("Blake", "Danny", "Danny"); 
      screenManager.parseButtons("Blake", "Danny", "Danny"); 
    }

    if(friend1Name.value() !== "") {
      screenManager.parseText(friend1Name.value(), "friend1", "Friend1"); 
      screenManager.parseButtons(friend1Name.value(), "friend1", "Friend1"); 
    } else {
      screenManager.parseText("Jordan", "friend1", "Friend1"); 
      screenManager.parseButtons("Jordan", "friend1", "Friend1"); 
    }

    if(friend2Name.value() !== ""){
      screenManager.parseText(friend2Name.value(), "friend2", "Friend2"); 
      screenManager.parseButtons(friend2Name.value(), "friend2", "Friend2");  
    } else {
      screenManager.parseText("Avery", "friend2", "Friend2"); 
      screenManager.parseButtons("Avery", "friend2", "Friend2"); 
    }

    characterName.remove(); 
    friend1Name.remove(); 
    friend2Name.remove(); 
    crushName.remove(); 
  
  } 
  
  screenManager.setState(this.nextState); 
} 
