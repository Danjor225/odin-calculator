// Variables
let num1Text = "";
let num2Text = "";
let num1 = 0;
let num2 = 0;
let total = 0;
let operator = ""
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
        return add(num1, num2);
    } else if (operator == "-"){
        return subtract(num1,num2)
    } else if (operator == "x"){
        return multiply(num1,num2)
    } else if (operator == "/"){
        return divide(num1,num2);
    }
}

// Element Variables
const numberContainer = document.querySelector("#numbers-container")
const display = document.querySelector("#display")
const operatorContainer = document.querySelector("#operator-container")
const clearButton = document.querySelector(".clear-button")
const delButton = document.querySelector(".backspace-button")



// Interactivity of Buttons

numberContainer.addEventListener("click", (event) => {
    if(checkFirstDisplay()){
        clearDisplay()
    }

    if(!operatorUsed){
        assignVariable("num1", event.target.textContent)
        display.textContent += event.target.textContent
    } else {
        assignVariable("num2", event.target.textContent)
        display.textContent += event.target.textContent
        
        
        
    }
    
})

operatorContainer.addEventListener("click", (event) => {
    // If = is pressed
    if(event.target.textContent == "="){
        if(!checkAllNumbersAssigned()){
            alert("Please enter your full calculation")
        } else {
            if(checkZeroDivision()){
                alert("Cannot divide by zero.")
                clearVariables()
                clearDisplay()
               } else {
            calculation()
            display.textContent = total;}
           
        }
       
    } 
    // If an operator is pressed
    else {
        if(checkFirstDisplay() || checkNoNum()){
            alert("Please enter a number before using an operator")
        } else if(operatorUsed && num2Text == ""){
            alert("Only one operator at a time")
        } 
        // Second Operator click instead of =
        else if (num2Text != ""){

           if(checkZeroDivision()){
            alert("Cannot divide by zero.")
            clearVariables()
            clearDisplay()
           } else {
            calculation()
            operator = event.target.textContent
            display.textContent = total + " " + operator + " ";
            operatorUsed = true;
           }
           
            
        }
        // Otherwise assign operator and display the operator
        else {
           
            assignVariable("operator", event.target.textContent)
            display.textContent += " " + event.target.textContent + " "
            operatorUsed = true
        }
    }
    
})

clearButton.addEventListener("click", () => {
    clearVariables()
    clearDisplay()

})


delButton.addEventListener("click", () => {

    if(checkNoNum() || checkFirstDisplay()){
        alert("Nothing to delete")
    } else {
        deleteDisplay()
        deleteVariable()
    }
   
    
   
})



// Check Functions
function checkFirstDisplay(){
    if(display.textContent == "DISPLAY"){
        return true
    } else {
        return false
    }
}

function checkNoNum(){
    if(display.textContent == ""){
        return true 
    } else {return false }
}


function checkAllNumbersAssigned(){
    if(num1Text == "" || num2Text == "") {
        return false
    } else {return true}
}




//Useful Functions

function clearDisplay(){
    display.textContent = ""
console.log("Display cleared")
}

function clearVariables(){
    num1 = 0;
    num1Text = "";
    num2 = 0;
    num2Text = "";
    operator = ""
    operatorUsed = false;
}

function assignVariable(globalVariable, toAssign){
    if(globalVariable == "operator"){
        // assigned once an operator is clicked
        operator = toAssign
    } else if (globalVariable == "num1"){
        //num 1 assigned after operator clicked
        num1Text += toAssign
    } else if (globalVariable == "num2"){
        // store num2 as a string until = is clicked
        num2Text += toAssign
    }
}

function calculation(){

    num1 = parseFloat(num1Text)
    num2 = parseFloat(num2Text)
    total = operate()
    total = roundToFourDecimals(total)
    clearVariables()
    clearDisplay()
    num1Text = total.toString()
    
    
}

function checkZeroDivision(){

    if(num2Text == "0" && operator == "/"){
        return true
    } else if (num1Text == "." || num2Text == "."){
        return true 
    }else {
        return false
    }
}

function roundToFourDecimals(num){

       return Math.round(num * 10000) / 10000
}

function deleteVariable(){

   
    if(num2Text != ""){
        num2Text = num2Text.slice(0, -1)
    } else if(operator != ""){
        operator = operator.slice(0, -1) 
        operatorUsed = false
    }else if (num1Text != ""){
        num1Text = num1Text.slice(0, -1)
    } 

}

function deleteDisplay(){

    if(operator != "" && num2Text == ""){
        display.textContent = display.textContent.slice(0,-3)
    } else {
        display.textContent = display.textContent.slice(0,-1)
    }
}

