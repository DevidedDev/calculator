let numBefore = null;
let numCurrent = "0";
let operator = null;
let dispalayValue = null;


const btns = document.querySelectorAll("button");
btns.forEach((button)=>{
    button.addEventListener("click", calculator);
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
        return +a * +b;
    },
    "/":function(a,b){
        return +a / +b;
    }

}




function updateDisplay(button){
    if( !isNaN(button.innerText)){
        display.current.innerText += button.innerText;
    }
    
    if(button.innerText in operations ){
        display.cache.innerText = `${numBefore} ${operator}`  ;

    }
    
    console.log("hi")
}

function operate(button){
    const input = button.innerText;
    
    if (input in operations){
        console.log("pressedOp")
        
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
        console.log(operator);
        numBefore = operations[operator](numBefore, numCurrent);
        operator = input;
        }
        numCurrent = "0";
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
        numBefore = operations[operator](numBefore, numCurrent);
        numCurrent ="0";
        operator = null;
    }



}

function calculator(){
    operate(this);
    updateDisplay(this);
    
    console.table(["before: " +numBefore, "op: "+ operator, "current:" + numCurrent]);
    

}

// function operate(num1, operator, num2){
    
//     console.log(operations[operator](num1,num2))
// }



operate(10, "/", 5);

