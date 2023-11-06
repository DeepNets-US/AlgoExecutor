document.addEventListener("DOMContentLoaded", function () {
    const fibonacciOutput = document.getElementById("output");
    const form = document.getElementById("fibonacci-form");

    form.addEventListener("submit", function (event) {
        event.preventDefault();

        const nthNumberInput = document.getElementById("nth-number");
        const nthValue = parseInt(nthNumberInput.value);

        if (nthValue >= 1) {
            const sequence = generateFibonacci(nthValue);
            displayFibonacci(sequence);
        }
    });

    function generateFibonacci(n) {
        const sequence = [0, 1];
        if (n <= 2) return sequence.slice(0, n);
        for (let i = 2; i < n; i++) {
            sequence.push(sequence[i - 1] + sequence[i - 2]);
        }
        return sequence;
    }

    function displayFibonacci(sequence) {
        const outputText = sequence.join(", ");
        fibonacciOutput.innerHTML = `<h2 style="color: rgb(17, 87, 152);">The Fibonacci Sequence</h2><p style="color: rgb(44, 20, 43);">${outputText}</p>`;
    }
});
