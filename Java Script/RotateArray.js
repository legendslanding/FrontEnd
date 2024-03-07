function rotateLeft(arr, x) {
    if (!Array.isArray(arr) || typeof x !== 'number') {
        return "Invalid input";
    }

    const n = arr.length;
    const rotatedArray = [];

    for (let i = x; i < n; i++) {
        rotatedArray.push(arr[i]);
    }

    for (let i = 0; i < x; i++) {
        rotatedArray.push(arr[i]);
    }

    return rotatedArray;
}

// Example usage:
const arr = [1, 2, 3, 4, 5, 6, 7];
const x = 2;
const rotatedArray = rotateLeft(arr, x);
console.log("Original Array:", arr); // Output: [1, 2, 3, 4, 5, 6, 7]
console.log("Rotated Array:", rotatedArray); // Output: [3, 4, 5, 6, 7, 1, 2]
