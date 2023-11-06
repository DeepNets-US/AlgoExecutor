document.getElementById("sort-button").addEventListener("click", function () {
    // Get input string and split into an array
    const input = document.getElementById("input-array").value;
    const inputArray = input.split(/[, ]+/).map(Number);

    // Check if the input is empty
    if (inputArray.length === 0) {
        console.log("Input array is empty");
        return;
    }

    // Merge Sort algorithm
    function merge(left, right) {
        const result = [];
        let leftIndex = 0;
        let rightIndex = 0;

        // Compare and merge sub-arrays
        while (leftIndex < left.length && rightIndex < right.length) {
            if (left[leftIndex] < right[rightIndex]) {
                result.push(left[leftIndex]);
                leftIndex++;
            } else {
                result.push(right[rightIndex]);
                rightIndex++;
            }
        }

        // Merge any remaining elements
        return result.concat(left.slice(leftIndex), right.slice(rightIndex));
    }

    function mergeSort(arr) {
        const len = arr.length;
        if (len <= 1) {
            return arr;
        }

        const middle = Math.floor(len / 2);
        const left = arr.slice(0, middle);
        const right = arr.slice(middle);

        // Recursively sort and merge the sub-arrays
        return merge(mergeSort(left), mergeSort(right));
    }

    const sortedArray = mergeSort(inputArray);

    // Display the sorted array
    const resultParagraph = document.querySelector(".sort-result");
    resultParagraph.textContent = sortedArray.join(", ");
    console.log("Sorted Array (Merge Sort):", sortedArray);
});
