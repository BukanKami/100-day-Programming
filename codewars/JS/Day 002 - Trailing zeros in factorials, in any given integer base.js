function trailingZeros(num, base) {
    const primeFactors = [];
    let factor = 2;

    // Efficient prime factorization
    while (factor * factor <= base) {
        if (base % factor === 0) {
            let count = 0;
            while (base % factor === 0) {
                base /= factor;
                count++;
            }
            primeFactors.push([factor, count]);
        }
        factor++;
    }
    if (base > 1) primeFactors.push([base, 1]);

    let result = Infinity;

    for (const [prime, count] of primeFactors) {
        let tempResult = 0;
        let power = prime;
        while (num >= power) {
            tempResult += Math.floor(num / power);
            if (power > num / prime) break;  // Avoid overflow in power *= prime;
            power *= prime;
        }
        result = Math.min(result, Math.floor(tempResult / count));
    }

    return result;
}

console.log(trailingZeros(3353301001684942, 791495263));