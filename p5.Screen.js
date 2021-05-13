class Screen {
    
    constructor(stateName, text, textSize, x, y){
        this.stateName = stateName; 
        this.text = text; 
        this.textSize = textSize; 
        this.x = x;
        this.y = y; 
        this.font; 
        this.buttonList = [];
        this.img_list = []; 
        this.characterName = "You"; 
        this.otherName = ""; 
    }

    setup() {
        background("#0D688C"); 
    }

    preload() {
        this.font = loadFont('fonts/OmegleRegular-gxDaq.otf');
    }

    draw() {
       
        textSize(this.textSize); 
        textFont(this.font); 
        fill("#DFE4F2"); 
        var add = 0; 
        for(let i = 0; i < this.text.length; i++){
            text(this.text[i],this.x, this.y + add); 
            add+=60; 
        }

        if(this.img_list.length !== 0) {
            var x = 822; 
            for(let i = 0; i < this.img_list.length; i++) {
                image(this.img_list[i], x, 28, 172, 122); 
                x+= 230; 
            }
            text( this.characterName,880, 175); 
            
            if(this.img_list.length > 1) {
                text(this.otherName, 1100 , 175); 
            }
        }
    }
}


class characterScreen extends Screen {

    constructor(stateName, text, textSize, x, y){
        super(stateName, text, textSize, x, y); 
    }
  
    setup() {
      super.setup(); 
    }
  
  
    draw() {
        super.draw(); 
        textSize(32); 
        text("Enter your character name:", 300, 170); 
        text("Enter friend1's name:", 390, 320); 
        text("Enter friend2's name:", 390, 470); 
        text("Enter your crush's name:", 340, 620);
    }

  }
