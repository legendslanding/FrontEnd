function printPattern(rows) {
    for (let i = 0; i < rows; i++) {
        let output = '';
        for (let j = 0; j < rows; j++) {
            if (j < rows - i) {
                output += '+';
            } else {
                output += '-';
            }
        }
        console.log(output);
    }
}

// Call the function with the number of rows
printPattern(5);
