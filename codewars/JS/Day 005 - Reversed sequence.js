// const reverseSeq = n => {
//     var returnArray = [];
//     while(n>0){
//         returnArray.push(n);
//         n--;
//     }
//     return returnArray;
// };

const reverseSeq = n => {
    return Array(n).fill(0).map((e, i) => n - i );
};

console.log(reverseSeq(5)); // Output: [5, 4, 3, 2, 1]

