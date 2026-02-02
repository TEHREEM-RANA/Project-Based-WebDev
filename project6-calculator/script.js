let num1Input = document.getElementById("num1");
let num2Input = document.getElementById("num2");
let resultText = document.getElementById("result");

let addBtn = document.getElementById("add");
let subBtn = document.getElementById("sub");
let mulBtn = document.getElementById("mul");
let divBtn = document.getElementById("div");

// ADD
addBtn.onclick = function () {
    let a = Number(num1Input.value);
    let b = Number(num2Input.value);
    resultText.innerText = "Result: " + (a + b);
};

// SUBTRACT
subBtn.onclick = function () {
    let a = Number(num1Input.value);
    let b = Number(num2Input.value);
    resultText.innerText = "Result: " + (a - b);
};

// MULTIPLY
mulBtn.onclick = function () {
    let a = Number(num1Input.value);
    let b = Number(num2Input.value);
    resultText.innerText = "Result: " + (a * b);
};

// DIVIDE
divBtn.onclick = function () {
    let a = Number(num1Input.value);
    let b = Number(num2Input.value);

    if (b === 0) {
        resultText.innerText = "Result: Cannot divide by 0";
    } else {
        resultText.innerText = "Result: " + (a / b);
    }
};
// You now understand:
// Reading input values
// Converting string → number
// Button events
// Reusable logic
// if condition (real-life rule)
// This is the core of programming.