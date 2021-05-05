class Screen {
    
    constructor(stateName, text, textSize, x, y){
        this.stateName = stateName; 
        this.text = text; 
        this.textSize = textSize; 
        this.x = x;
        this.y = y; 
        this.font; 
        this.buttonList = [];
    }

    preload() {
        this.font = loadFont('fonts/OmegleRegular-gxDaq.otf');
    }

    // clickableButtonHover = function () {
    //     //   this.color = "#AA33AA";
    //     //   this.noTint = false;
    //     //   this.tint = "#FF0000";
    // }
    
    //     // // color a light gray if off
    // clickableButtonOnOutside = function () {
    //     // backto our gray color
    //     //   this.color = "#AAAAAA";
    // }
    
    // clickableButtonPressed = function() {
    //    //setState(this.nextState); 
    // } 

    draw() {
        background(0); 
        fill(255); 
        textSize(this.textSize); 
        textFont(this.font); 
        text(this.text, this.x, this.y); 
        for(let i = 0; i < this.buttonList.length; i++) {
            this.buttonList[i].draw(); 
            // var nextState = this.buttonList[i].onPress; 
            // print(nextState); 
           // this.buttonList[i].onOutside = clickableButtonOnOutside; 
        }
        
    }
}