// Variables
let num1;
let num2;
let operator = "+"
let operatorUsed = false

// Calculus Functions
function add(num1, num2){
    return num1 + num2;
}

function subtract(num1, num2){
    return num1 - num2;
}

function multiply(num1, num2){
    return num1 * num2;

}

function divide(num1, num2){
    return num1 / num2;
}

function operate(){
    if(operator == "+"){
        add(num1, num2);
    } else if (operator == "-"){
        subtract(num1,num2)
    } else if (operator == "*"){
        multiply(num1,num2)
    } else if (operator == "/"){
            divide(num1,num2);
    }
}

// Element Variables
const numberContainer = document.querySelector("#numbers-container")
const display = document.querySelector("#display")
const operatorContainer = document.querySelector("#operator-container")


// Interactivity of Buttons

numberContainer.addEventListener("click", (event) => {
    if(checkFirstDisplay){
        clearDisplay()
    }

    if(checkFirstNumInput){
        assignVariable("num2", event.target.textContent)
        display.textContent += event.target.textContent
    } else {
        display.textContent += event.target.textContent
    }
    
})

operatorContainer.addEventListener("click", (event) => {
    if(checkFirstDisplay() || checkNoNum()){
        alert("Please enter a number before using an operator")
    } else if(operatorUsed){
        alert("Only one operator at a time")
    } else {
       
        assignVariable("num1", display.textContent)
        assignVariable("operator", event.target.textContent)
        display.textContent += " " + event.target.textContent + " "
        operatorUsed = true
    }
})


// Useful Functions
function checkFirstDisplay(){
    if(display.textContent === "DISPLAY"){
        return true
    } else {
        return false
    }
}

function clearDisplay(){
        display.textContent = ""
    
}

function checkNoNum(){
    if(display.textContent == ""){
        return true 
    } else {return false }
}

function checkFirstNumInput(){
    if(num1 != ""){
        return true
    } else {
        return false
    }
}



function assignVariable(globalVariable, toAssign){
    if(globalVariable == "operator"){
        // assigned once an operator is clicked
        operator = toAssign
    } else if (globalVariable == "num1"){
        //num 1 converted to integer after an operator is clicked
        num1 = parseInt(toAssign)
    } else if (globalVariable == "num2"){
        // store num2 as a string until = is clicked
        num2 += toAssign
    }
}