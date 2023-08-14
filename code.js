let num1 = null;
let num2 = null;
let operator = null;


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



function operate(num1, operator, num2){
    console.log(operations[operator](num1,num2))
}

operate(10, "/", 5);

