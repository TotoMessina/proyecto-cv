let display = document.getElementById('display');

function appendToDisplay(value) {
    display.value += value;
}

function clearDisplay() {
    display.value = '';
}

function toggleSign() {
    display.value = -parseFloat(display.value);
}

function calculatePercentage() {
    display.value = parseFloat(display.value) / 100;
}

function calculateResult() {
    try {
        display.value = eval(display.value);
    } catch (error) {
        display.value = 'Error';
    }
}
