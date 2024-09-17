function arrayDiff(a, b) {
    var thisArray = []
    for (var i = 0; i < b.length; i++) {
        thisArray =  a.indexOf(b[i])
        if (thisArray > -1) { // only splice array when item is found
            a.splice(a, 1); // 2nd parameter means remove one item only
            thisArray = a;
        }
    }
    return thisArray;
}

console.log(arrayDiff([1,2], [1])); 