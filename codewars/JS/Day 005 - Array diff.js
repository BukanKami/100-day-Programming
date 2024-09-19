function arrayDiff(a, b) {
    return a.filter(thisValue => !b.includes(thisValue));
}

// contoh array
console.log(arrayDiff([1,2], [1]));