var countBits = function(n) {
    var sisa = 0;
    var results = 0;
    while (n>0){
        sisa = n%2;
        results += sisa;
        n = Math.floor(n/2);
    }

    return results;
};


console.log(countBits(5));