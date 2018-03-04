module.exports = function calculatePrimesUpToMax(max) {
    if (max < 2) {
        return [];
    }
    const primes = Array.from({ length: max - 1 }, (value, index) => true);
    const highestNumberToTest = Math.floor(Math.sqrt(max));

    const out = [];
    for(let i=2; i <= highestNumberToTest; i++) {
        if(primes[i - 2]) {
            out.push(i);
            for(let j=Math.pow(i, 2); j <= max; j+=i) {
                primes[j - 2] = false;
            }
        }
    }
    for(let i=highestNumberToTest+1; i <= max; i++) {
        if (primes[i - 2]) {
            out.push(i);
        }
    }
    return out;
}