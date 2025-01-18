// Variables
let num1 = 0;
let num2 = 0;
let operator = "+"

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

function operate(operator, num1, num2){
    if(operator == "+"){
        add(num1, num2);
    } elseif (operator == "-");{
        subtract(num1,num2)
    } elseif (operator == "*");{
        multiply(num1,num2)
    } elseif (operator == "/");{
            divide(num1,num2);
    }
}

// Element Variables
const buttonContainer = document.querySelector("#buttons-container")
const display = document.querySelector("#display")


// Interactivity of Buttons

buttonContainer.addEventListener("click", (event) => {
    if(display.textContent === "DISPLAY"){
        display.textContent = ""
    }
    display.textContent += event.target.textContent
})