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

    draw() {
        background(0); 
        fill(255); 
        textSize(this.textSize); 
        textFont(this.font); 
        text(this.text, this.x, this.y); 
    }
}