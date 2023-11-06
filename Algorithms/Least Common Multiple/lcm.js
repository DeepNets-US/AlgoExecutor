document.getElementById("calculate-button").addEventListener("click", function () {
    calculateLCD();
});

document.addEventListener("keydown", function (event) {
    if (event.key === "Enter") {
        calculateLCD();
    }
});

function calculateLCD() {
    // Get input values
    const num1Input = document.getElementById("input-num1");
    const num2Input = document.getElementById("input-num2");

    const num1 = parseInt(num1Input.value);
    const num2 = parseInt(num2Input.value);

    if (num1 <= 0 || num2 <= 0) {
        alert("Please enter positive numbers greater than 0.");
    } else if (isNaN(num1) || isNaN(num2)) {
        alert("Please enter valid numeric values.");
    } else {
        // Calculate LCD using the new algorithm
        const lcd = (num1 * num2) / calculateGCD(num1, num2);

        // Display the result
        const resultElement = document.getElementById("lcm-result-value");
        resultElement.textContent = `LCM of ${num1} and ${num2} is: ${lcd}`;
    }
}

function calculateGCD(a, b) {
    // Euclidean Algorithm for calculating GCD
    while (b !== 0) {
        const temp = b;
        b = a % b;
        a = temp;
    }
    return a;
}
