document.getElementById("sort-button").addEventListener("click", function () {
    // Get input string and split into an array
    const input = document.getElementById("input-array").value;
    const inputArray = input.split(/[, ]+/).map(Number);

    // Check if the input is empty
    if (inputArray.length === 0) {
        console.log("Input array is empty");
        return;
    }

    // Bubble Sort algorithm
    for (let i = 0; i < inputArray.length - 1; i++) {
        for (let j = 0; j < inputArray.length - i - 1; j++) {
            if (inputArray[j] > inputArray[j + 1]) {
                // Swap elements
                const temp = inputArray[j];
                inputArray[j] = inputArray[j + 1];
                inputArray[j + 1] = temp;
            }
        }
    }

    // Display the sorted array
    const resultParagraph = document.querySelector(".sort-result");
    resultParagraph.textContent = inputArray.join(", ");
    console.log("Sorted Array:", inputArray);
});
