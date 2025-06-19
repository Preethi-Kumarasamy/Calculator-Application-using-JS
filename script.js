function clearDisplay() {
    document.calculator.display.value = '';
}

function deleteLastChar() {
    document.calculator.display.value = document.calculator.display.value.toString().slice(0, -1);
}

function appendChar(character) {
    document.calculator.display.value += character;
}

function calculate() {
    try {
        document.calculator.display.value = eval(document.calculator.display.value);
    } catch (e) {
        alert("Invalid expression");
    }
}
