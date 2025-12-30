let display = document.getElementById("display");

let firstNumber = "";
let secondNumber = "";
let operator = "";

function press(num) {
    if (operator === "") {
        firstNumber += num;
        display.value = firstNumber;
    } else {
        secondNumber += num;
        display.value = secondNumber;
    }
}
function setOperator (op) {
    if (firstNumber !== "") {
        operator = op;
    }
}
function calculate() {
    let result = 0;
    let num1 = Number(firstNumber);
    let num2 = Number(secondNumber);
    if (operator === "+") result = num1 + num2;
    else if (operator === "-") result = num1 - num2;
    else if (operator === "*") result = num1 * num2;
    else if (operator === "/") result = num1 / num2;
    display.value = result;
}

function clearDisplay() {
    firstNumber = "";
    secondNumber = "";
    operator = "";
    display.value = "";
}