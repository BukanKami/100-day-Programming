const reverseSeq = n => {
    var returnArray = [];
    while(n>0){
        returnArray.push(n);
        n--;
    }
    return returnArray;
};

console.log(reverseSeq(5)); // Output: [5, 4, 3, 2, 1]