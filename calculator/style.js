let display = document.getElementById("display");

function clearDisplay() {
    display.value = "";
}

function input(value) {
    display.value += value;
}

function calculate() {
    try {
        display.value = eval(display.value);
    } catch (e) {
        display.value = "Error";
    }
}

function toggleSign() {
    if (display.value.startsWith("-")) {
        display.value = display.value.substring(1);
    } else {
        display.value = "-" + display.value;
    }
}

function backspace() {
    display.value = display.value.slice(0, -1);
}

