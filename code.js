let num1 = null;
let num2 = null;
let operator = null;
let dispalayValue = "_";


const btns = document.querySelectorAll("button");
btns.forEach((button)=>{
    button.addEventListener("click", updateDisplay);
});

const display = {
    current: document.getElementById("display-current"),
    result: document.getElementById("dislay-result")
}




const operations = {

    "+" : function(a,b){
        return a+b;
    },
    "-" : function(a,b){
        return a-b;
    },
    "*": function(a,b){
        return a*b;
    },
    "/":function(a,b){
        return a/b;
    }

}


function updateDisplay(){
    display.current.innerText += this.textContent;
    console.log("hi")
}

function operate(num1, operator, num2){
    console.log(operations[operator](num1,num2))
}



operate(10, "/", 5);

