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

// countBits = n => n.toString(2).split('0').join('').length;
console.log(countBits(5));