function sumOfSums(n) {
    // Ensure 'n' is treated as an integer and convert to BigInt
    n = BigInt(parseInt(n, 10));

    // Step 1: Calculate the sum of sums using the formula (n * (n + 1) * (n + 2)) / 6
    let sumOfsum = (n * (n + BigInt(1)) * (n + BigInt(2))) / BigInt(6);

    // Step 2: Sum all numbers up to 'sumOfsum' using the formula (sumOfsum * (sumOfsum + 1)) / 2
    return (sumOfsum * (sumOfsum + BigInt(1))) / BigInt(2);
}

console.log(sumOfSums('3n'));