function zeros (n) {
    if (n == 0) return 0
    if (n < 9) return 1
    let result = 0;
    for (let i = 5; i <= n; i *= 5) {
        result += Math.floor(n / i);
    }
    return result;
}

console.log(zeros(30))