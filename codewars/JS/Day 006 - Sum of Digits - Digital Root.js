function digitalRoot(n) {
    var results = 0;

    while (n > 0) {
        results += n % 10;
        n = Math.floor(n / 10);
    }
    
    if (results >= 10) {
        return digitalRoot(results);
    }

    return results 
}

console.log(digitalRoot(89));