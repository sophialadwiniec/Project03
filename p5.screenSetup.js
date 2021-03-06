class screenSetup  {
    constructor(textFile, buttonFile) { 
        this.textTable = loadTable(textFile, 'csv', 'header');
        this.buttonTable = loadTable(buttonFile, 'csv', 'header'); 
        this.currentStateString = ""; 
        this.currentState;
        this.stateMap = new Map(); 
        this.buttonMap = new Map(); 
        this.background = loadImage('assets/Background.png'); 
        this.imageMap = new Map(); 
    }

    setup() {

        for(let i = 0; i < this.buttonTable.getRowCount(); i++) {
            var buttonName = this.buttonTable.getString(i, "Name"); 
            var stateName = this.buttonTable.getString(i, "State"); 
            var x = eval(this.buttonTable.getString(i, "x")); 
            var y = eval(this.buttonTable.getString(i, "y"));
            var width = eval(this.buttonTable.getString(i, "Width")); 
            var height = eval(this.buttonTable.getString(i,"Height")); 
            var textSize = eval(this.buttonTable.getString(i,"TextSize")); 
            var nextState = this.buttonTable.getString(i, "NextState"); 
            var text = this.buttonTable.getString(i, "Text"); 

            var c = new Clickable(); 
            c.name = buttonName; 
            c.text = text; 
            c.textSize = textSize; 
            c.width = width; 
            c.height = height; 
            c.x = x; 
            c.y = y; 
            c.nextState = nextState; 
          

            if(this.buttonMap.get(stateName) === undefined) {
                var buttonList = [c]; 
                this.buttonMap.set(stateName,buttonList);  
            }
            else if(this.buttonMap.get(stateName) !== undefined) {
                this.buttonMap.get(stateName).push(c); 
            }

        }

        for( let i = 0; i < this.textTable.getRowCount(); i++ ) {
            var screenName = this.textTable.getString(i, 'ScreenName');

            var textList = []; 
            var text = this.textTable.getString(i, 'Text'); 
            textList.push(text); 
           
            if(this.textTable.getString(i,'Text2') !== "") {
                textList.push(this.textTable.getString(i,'Text2')); 
            }
            if(this.textTable.getString(i,'Text3') !== "") {
                textList.push(this.textTable.getString(i,'Text3')); 
            }
            if(this.textTable.getString(i,'Text4') !== "") {
                textList.push(this.textTable.getString(i,'Text4')); 
            }
            if(this.textTable.getString(i,'Text5') !== "") {
                textList.push(this.textTable.getString(i,'Text5')); 
            }
            if(this.textTable.getString(i,'Text6') !== "") {
                textList.push(this.textTable.getString(i,'Text6')); 
            }
            if(this.textTable.getString(i,'Text7') !== "") {
                textList.push(this.textTable.getString(i,'Text7')); 
            }
            if(this.textTable.getString(i,'Text8') !== "") {
                textList.push(this.textTable.getString(i,'Text8')); 
            }
            if(this.textTable.getString(i,'Text9') !== "") {
                textList.push(this.textTable.getString(i,'Text9')); 
            }

            var textSize = eval(this.textTable.getString(i, 'TextSize')); 
            var x = eval(this.textTable.getString(i, 'x')); 
            var y = eval(this.textTable.getString(i, 'y')); 

            if(this.textTable.getString(i, 'ClassName') === "Screen") {
                var screen = new Screen(screenName, textList, textSize, x, y); 
                screen.buttonList = this.buttonMap.get(screenName);  
                screen.preload(); 
                this.stateMap.set(screenName, screen); 
                if(i == 0) {
                    this.currentState = screen; 
                    this.currentStateString = screenName; 
                }

                if(this.textTable.getString(i, "watch1") !== "") {
                    var img = loadImage(this.textTable.getString(i, "watch1")); 
                    var img_list = []; 
                    img_list.push(img); 
                    
                    if(this.textTable.getString(i, "watch2") !== "") {
                        img = loadImage(this.textTable.getString(i, "watch2")); 
                        img_list.push(img); 
                    }
                    screen.img_list = img_list; 
                }

                if(this.textTable.getString(i, "textW") !== ""){
                    screen.otherName = this.textTable.getString(i, "textW"); 
                }

                if(this.textTable.getString(i, "photo") !== ""){
                    screen.end_image = loadImage(this.textTable.getString(i, "photo")); 
                    screen.p_width = eval(this.textTable.getString(i, 'width')); 
                    screen.p_height = eval(this.textTable.getString(i, 'height')); 
                    
                }
            }

            if(this.textTable.getString(i, 'ClassName') === "characterScreen") {
                var cs = new characterScreen(screenName, textList, textSize, x, y); 
                
                cs.buttonList = this.buttonMap.get(screenName);  
                cs.preload(); 
                this.stateMap.set(screenName, cs); 
            }
        }
    }

    setState(state) {
        print(this.currentState); 
        this.currentState = this.stateMap.get(state); 
        this.currentState.setup(); 
        this.currentStateString = state; 
    }

    parseText(name, vName, vName2) {
        for(let value of this.stateMap.values()) {
             
            for(let i = 0; i < value.text.length; i++){
                var new_text = "";
                let split_text = split(value.text[i], " "); 
                
                for(let j = 0; j < split_text.length; j++){
                    if(split_text[j] === vName || split_text[j] == vName2) {
                        new_text += (name + " "); 
                    } else {
                        new_text += (split_text[j] + " "); 
                    }
                }
                value.text[i] = new_text;  
            } 
        }
    }

    parseButtons(name, vName, vName2) {
        for(let value of this.buttonMap.values()) {
            

            for(let i = 0; i < value.length; i++){
                var new_text = ""; 
                var split_text = split(value[i].text, " "); 

                for(let j = 0; j < split_text.length; j++){
                    if(split_text[j] === vName || split_text[j] == vName2) {
                        new_text += (name + " "); 
                    } else {
                        new_text += (split_text[j] + " "); 
                    }
                }
                value[i].text = new_text; 
            }
            
            
        }
    }

    draw() {
        background("#0D688C"); 
        image(this.background,0,0); 
        this.currentState.draw(); 

    }

}
