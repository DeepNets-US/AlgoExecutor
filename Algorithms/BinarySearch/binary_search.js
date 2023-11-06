document.getElementById("search-button").addEventListener("click", function () {

    const input = document.getElementById("input-array").value;
    const inputArray = input.split(/[, ]+/).map(Number);


    const target = parseInt(document.getElementById("target-number").value);


    if (inputArray.length === 0) {
        return;
    }


    function binarySearch(arr, target) {
        let left = 0;
        let right = arr.length - 1;

        while (left <= right) {
            const mid = Math.floor((left + right) / 2);

            if (arr[mid] === target) {
                return mid;
            } else if (arr[mid] < target) {
                left = mid + 1;
            } else {
                right = mid - 1;
            }
        }

        return -1;
    }

    const resultIndex = binarySearch(inputArray, target);

    const resultParagraph = document.querySelector(".search-result");
    if (resultIndex !== -1) {
        resultParagraph.textContent = `Element ${target} found at index ${resultIndex}.`;
    } else {
        resultParagraph.textContent = `Element ${target} not found in the array.`;
    }
});
