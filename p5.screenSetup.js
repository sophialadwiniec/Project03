class screenSetup  {
    constructor(textFile, buttonFile) { 
        this.textTable = loadTable(textFile, 'csv', 'header');
        this.buttonTable = loadTable(buttonFile, 'csv', 'header'); 
        this.currentStateString = ""; 
        this.currentState;
        this.stateMap = new Map(); 
        this.buttonMap = new Map(); 
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
            //setting the textMap
            var screenName = this.textTable.getString(i, 'ScreenName');
            var text = this.textTable.getString(i, 'Text'); 
            var textSize = eval(this.textTable.getString(i, 'TextSize')); 
            var x = eval(this.textTable.getString(i, 'x')); 
            var y = eval(this.textTable.getString(i, 'y')); 

            if(this.textTable.getString(i, 'ClassName') === "Screen") {
                var screen = new Screen(screenName, text, textSize, x, y); 
                // this.states.push(screen); 
                screen.buttonList = this.buttonMap.get(screenName); 
                
                screen.preload(); 
                this.stateMap.set(screenName, screen); 
                // print(this.stateMap); 
                if(i == 0) {
                    this.currentState = screen; 
                    this.currentStateString = screenName; 
                }
            }
        }

  
    }
    setState(state) {
        print(this.currentState); 
        this.currentState = this.stateMap.get(state); 
        this.currentStateString = state; 
    }
    draw() {
        this.currentState.draw(); 
    }

}
