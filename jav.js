const add = function(num1, num2){
    return Number(num1) + Number(num2)
}

const subtract = function(num1, num2){
    return (Number(num1) - Number(num2))
}

const multiply = function(num1, num2){
    return (Number(num1) * Number(num2))
}

const divide = function(num1, num2){
    return (Number(num1) / Number(num2))
}

let firstNum = null
let secondNum = ""
let operator = null
let operators = ["subtract", "add", "divide", "multiply"];

function operate(value1, value2, operator) {
    switch(operator) {
        case "add":
            return(add(value1, value2));
        case "subtract":
            return(subtract(value1, value2));
        case "multiply":
            return(multiply(value1, value2));
        case "divide":
            return(divide(value1, value2));
    }
}

let disp = document.getElementById("display");
const num = document.querySelectorAll(".number");
const oper = document.querySelectorAll(".operator");
const clear = document.querySelector("#clear")
const equal = document.querySelector("#operate")

num.forEach((button) => {
    button.addEventListener("click", () => {
       if (firstNum==null){
            disp.innerHTML += button.textContent;
       }
       else{
            secondNum += button.textContent
            disp.innerHTML = secondNum
       }
    });
});

clear.addEventListener("click", () => {
    firstNum=null
    secondNum=""
    operator=null
    disp.innerHTML = ""
  });

oper.forEach((button)=> {
    button.addEventListener("click", ()=>{
        if (firstNum== null){
            firstNum = disp.textContent
            operator = button.id
            disp.innerHTML = ""
        }
        else {
            if (secondNum == "" && (operator == "divide" || operator == "multiply")){
                secondNum = "1"
                let result = operate(firstNum, secondNum, operator)
                disp.innerHTML = parseFloat(result.toFixed(2))
                operator = button.id
                firstNum = disp.textContent
                secondNum = ""
                
            }
            else {
                let result = operate(firstNum, secondNum, operator)
                disp.innerHTML = parseFloat(result.toFixed(2))
                operator = button.id
                firstNum = disp.textContent
                secondNum = ""
            }
        }
    })
})

equal.addEventListener("click", () => {
    if (secondNum != ""){
        let result = operate(firstNum, secondNum, operator)
        disp.innerHTML = parseFloat(result.toFixed(2))
        firstNum = disp.textContent
        secondNum = ""
        }
})




