let currentOperator = "";

function setOperator(operatorSymbol) {
    currentOperator = operatorSymbol;

    document.getElementById("btn-add").style.backgroundColor = "";
    document.getElementById("btn-add").style.color = "";
    document.getElementById("btn-sub").style.backgroundColor = "";
    document.getElementById("btn-sub").style.color = "";
    document.getElementById("btn-mult").style.backgroundColor = "";
    document.getElementById("btn-mult").style.color = "";
    document.getElementById("btn-div").style.backgroundColor = "";
    document.getElementById("btn-div").style.color = "";
    document.getElementById("btn-mod").style.backgroundColor = "";
    document.getElementById("btn-mod").style.color = "";

    if (currentOperator === '+') {
        document.getElementById("btn-add").style.backgroundColor = "blue";
        document.getElementById("btn-add").style.color = "white";
    }
    if (currentOperator === '-') {
        document.getElementById("btn-sub").style.backgroundColor = "blue";
        document.getElementById("btn-sub").style.color = "white";
    }
    if (currentOperator === '*') {
        document.getElementById("btn-mult").style.backgroundColor = "blue";
        document.getElementById("btn-mult").style.color = "white";
    }
    if (currentOperator === '/') {
        document.getElementById("btn-div").style.backgroundColor = "blue";
        document.getElementById("btn-div").style.color = "white";
    }
    if (currentOperator === '%') {
        document.getElementById("btn-mod").style.backgroundColor = "blue";
        document.getElementById("btn-mod").style.color = "white";
    }
}

function calculate() {
    let inputField1 = document.getElementById("input1");
    let inputField2 = document.getElementById("input2");
    let outputField = document.getElementById("screen");

    let inputValue1 = +(inputField1.value);
    let inputValue2 = +(inputField2.value);
    let total = 0;

    if (currentOperator === '+') {
        total = inputValue1 + inputValue2;
    }
    if (currentOperator === '-') {
        total = inputValue1 - inputValue2;
    }
    if (currentOperator === '*') {
        total = inputValue1 * inputValue2;
    }
    if (currentOperator === '/') {
        total = inputValue1 / inputValue2;
    }
    if (currentOperator === '%') {
        total = inputValue1 % inputValue2;
    }
    outputField.innerHTML = total;
}

function clearScreen() {
    // 1. Empty the input boxes
    document.getElementById("input1").value = "";
    document.getElementById("input2").value = "";

    // 2. Reset the output screen back to zero
    document.getElementById("screen").innerHTML = "0";

    // 3. Clear our memory variable
    currentOperator = "";

    // 4. Clear colors from ALL operator buttons
    document.getElementById("btn-add").style.backgroundColor = "";
    document.getElementById("btn-add").style.color = "";

    document.getElementById("btn-sub").style.backgroundColor = "";
    document.getElementById("btn-sub").style.color = "";

    document.getElementById("btn-mult").style.backgroundColor = "";
    document.getElementById("btn-mult").style.color = "";

    document.getElementById("btn-div").style.backgroundColor = "";
    document.getElementById("btn-div").style.color = "";

    document.getElementById("btn-mod").style.backgroundColor = "";
    document.getElementById("btn-mod").style.color = "";
}