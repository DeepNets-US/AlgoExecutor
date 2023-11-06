document.addEventListener("DOMContentLoaded", function () {
    const calculateButton = document.getElementById("calculate-button");
    const gcdResult = document.querySelector(".gcd-result-value");
    const inputNum1 = document.getElementById("input-num1");
    const inputNum2 = document.getElementById("input-num2");

    calculateButton.addEventListener("click", calculateGCD);
    inputNum1.addEventListener("keyup", function (event) {
        if (event.key === "Enter") {
            calculateGCD();
        }
    });
    inputNum2.addEventListener("keyup", function (event) {
        if (event.key === "Enter") {
            calculateGCD();
        }
    });

    function calculateGCD() {
        const num1 = parseInt(inputNum1.value);
        const num2 = parseInt(inputNum2.value);

        if (num1 >= 1 && num2 >= 1) {
            const gcd = calculateGCDRecursive(num1, num2);
            gcdResult.textContent = `The GCD of ${num1} and ${num2} is: ${gcd}`;
        } else {
            alert("Both numbers must be greater than or equal to 1.");
        }
    }

    function calculateGCDRecursive(a, b) {
        if (b === 0) {
            return a;
        }
        return calculateGCDRecursive(b, a % b);
    }
});
    