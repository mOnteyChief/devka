function sortArray(arr) {
    return arr.sort((a, b) => a - b);
}

const numbers = [5, 3, 8, 1, 2];
const sortedNumbers = sortArray(numbers);
console.log("Posortowana tablica:", sortedNumbers);
