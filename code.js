let numBefore = null;
let numCurrent = "0";
let operator = null;
let dispalayValue = null;


const btns = document.querySelectorAll("button");
btns.forEach((button)=>{
    button.addEventListener("mousedown", calculator);
    button.addEventListener("mouseup", removeBtnLook);
});

const display = {
    current: document.getElementById("display-current"),
    cache: document.getElementById("display-cache")
}




const operations = {

    "+" : function(a,b){
        
        return +a + +b;
    },
    "-" : function(a,b){
        return +a - +b;
    },
    "*": function(a,b){
        return (+a * +b);
    },
    "/":function(a,b){
        if(b === "0"){
            return "ERROR";
        }
        return (+a / +b).toFixed(8);
    }

}




function updateDisplay(button){
        display.current.innerText = numCurrent;
        const cacheDisplayText = (numBefore? numBefore : "") + " " + (operator? operator: "") ;
        console.log(cacheDisplayText);
        display.cache.innerText = cacheDisplayText;

    
    console.log("hi")
}

function operate(button){
    const input = button.innerText;
    
    if (input in operations){
        console.log("pressedOp")
        if(!(numBefore === "ERROR" && numCurrent === "0")){
            if(operator === null){
            
                if(!numBefore){
                    operator = input;
                    numBefore = numCurrent;
                }else if(numCurrent === "0"){
                    operator = input;
                operator = input;
                }else{
                    numBefore = numCurrent;
                }

            }else{
            numBefore = operations[operator](numBefore, numCurrent);
            operator = input;
            }
        numCurrent = "0";
        }else{ return}
    }else if(input === "clear"){
        numBefore = null;
        numCurrent = "0";
        operator = null;
    }else if(input === "del"){
        if(numCurrent.length <= 1){
            numCurrent = "0";
        }else{
            numCurrent = numCurrent.slice(0, -1);
        }
    }else if(!isNaN(input)){
        if(numBefore && !operator){
            numBefore = null;
        }
        
        if(numCurrent === "0"){
            numCurrent = input;
        }else{
            
            numCurrent += input;
        }
    }else if(input === "="){
        if(operator){
        numBefore = operations[operator](numBefore, numCurrent);

        }
        console.log(numBefore);
        if(numBefore !== "ERROR"){
            numCurrent ="0";
            
        }
        operator = null;
    }else if(input === "clear"){
        operator = null;
        numCurrent = "0";
        numBefore = null;
    }else if(input === "."){
        if(!numCurrent.includes(".")) {
            numCurrent+=".";
        }
    }
}

function addBtnLook(btn){
    btn.classList.add("btn-pressed");
  
}

function removeBtnLook(){
    this.classList.remove("btn-pressed");
}


function calculator(){
    operate(this);
    updateDisplay(this);
    addBtnLook(this);
}