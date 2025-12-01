function appendToDisplay(num) {
    let display = document.getElementById('display');
    document.getElementById("display").value = display.value + num;
}

function clearDisplay() {
    document.getElementById("display").value = '';
}

function calculateResult() {
    let display = document.getElementById('display');
    try {
        let result = eval(display.value);
        if (result === Infinity || result === -Infinity || isNaN(result)) {
            throw new Error("Division by zero");
        }
        display.value = result;
    }
    catch (error) {
        display.value = "Error";
    }
}

function deleteLastCharacter() {
    let display = document.getElementById('display');
    display.value = display.value.slice(0, -1);
}