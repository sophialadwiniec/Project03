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
        background("#0D688C"); 
        textSize(this.textSize); 
        textFont(this.font); 
        fill("#DFE4F2"); 
        var add = 0; 
        for(let i = 0; i < this.text.length; i++){
            text(this.text[i],this.x, this.y + add); 
            add+=60; 
        }
    }
}