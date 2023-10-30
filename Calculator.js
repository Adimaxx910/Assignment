let display = document.getElementById('display');
let currentInput = '';

function DisplayValue(value) {
    currentInput += value;
    display.value = currentInput;
}

function clearDisplay() {
    currentInput = '';
    display.value = '';
}

function calculate() {
    try {
        currentInput = eval(currentInput);
        display.value = currentInput;
    } 
    catch (error) {
        display.value = 'Error';
        currentInput = '';
    }
}
