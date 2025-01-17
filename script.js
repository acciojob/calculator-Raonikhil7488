let display = document.getElementById("input");

function appendValue(value) {
    display.value += value;
}

function clearDisplay() {
    display.value = '';
}

function calculateResult() {
    let expression = display.value;
    
    // Handle division by 0 or 0/0
    if (expression.includes('/') && (expression.includes('0') && !expression.includes('0.'))) {
        if (expression === '0/0') {
            display.value = 'NaN';
        } else {
            display.value = 'Infinity';
        }
    } else {
        try {
            display.value = eval(expression);
        } catch (error) {
            display.value = "Error";
        }
    }
}

