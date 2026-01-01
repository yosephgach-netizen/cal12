let num1 = "";
let num2 = "";
let op = "";

function press(number) {
    if (op === "") {
        num1 += number;
        document.getElementById("display").value = num1;
    } else {
        num2 += number;
        document.getElementById("display").value = num2;
    }
}

function operator(sign) {
    if (num1 !== "") {
        op = sign;
    }
}

function equal() {
    let a = Number(num1);
    let b = Number(num2);
    let result = 0;

    if (op === "+") result = a + b;
    if (op === "-") result = a - b;
    if (op === "*") result = a * b;
    if (op === "/") result = b !== 0 ? a / b : "Error";

    document.getElementById("display").value = result;

    num1 = result.toString();
    num2 = "";
    op = "";
}

function clearAll() {
    num1 = "";
    num2 = "";
    op = "";
    document.getElementById("display").value = "";
}
