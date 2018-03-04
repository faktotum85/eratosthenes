const calculatePrimesUpToMax = require('./primes');

describe('calculatePrimesUpToMax', () => {

    it('returns an empty array for any number below 2', () => {
        expect(calculatePrimesUpToMax(1)).toEqual([]);
    });

    it('returns [2] for a max of 2', () => {
        expect(calculatePrimesUpToMax(2)).toEqual([2]);
    });

    it('returns [2, 3, 5] for a max of 5', () => {
        expect(calculatePrimesUpToMax(5)).toEqual([2, 3, 5]);
    });

    it('returns [2, 3, 5, 7, 11, 13, 17, 19, 23, 29] for a max of 30', () => {
        expect(calculatePrimesUpToMax(30)).toEqual([2, 3, 5, 7, 11, 13, 17, 19, 23, 29]);
    });
    
    it('returns the 100th prime correctly', () => {
        expect(calculatePrimesUpToMax(541)[99]).toBe(541);
    });

    it('returns the last prime below 1000000 correctly', () => {
        const longPrimeList = calculatePrimesUpToMax(1000000);
        expect(longPrimeList[longPrimeList.length - 1]).toBe(999983);
    });

});
