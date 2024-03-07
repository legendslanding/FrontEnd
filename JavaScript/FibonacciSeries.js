function fibonacciSeries(N) {
    let fibSeries = [];
    let a = 0, b = 1, nextTerm;

    for (let i = 1; i <= N; i++) {
        fibSeries.push(a);
        nextTerm = a + b;
        a = b;
        b = nextTerm;
    }

    return fibSeries;
}

// Example usage:
const N = 10;
const fibSeries = fibonacciSeries(N);
console.log("Fibonacci Series up to", N, "terms:", fibSeries.join(' '));
