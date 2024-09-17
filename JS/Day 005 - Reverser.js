function reverse(n){
    var results = 0;
    while(n!=0){
        results = results * 10 + n % 10;
        n = Math.floor(n / 10);
    }
    return results;
}


console.log(reverse(123));