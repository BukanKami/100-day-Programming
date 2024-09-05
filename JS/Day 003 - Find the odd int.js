function findOdd(A) {
    let results = [];
    for (var i = 0; i < A.length; i++){
        if (results[A[i]] === undefined) results[A[i]] = 1;
        else results[A[i]] += 1;
    }

    for(var key in results){
        if(results[key] % 2!= 0){
            return parseInt(key);
        }
    }
    
    console.log(results);
}

console.log(findOdd([7]));
console.log(findOdd([0]));
console.log(findOdd([1,1,2]));
console.log(findOdd([0,1,0,1,0]));
console.log(findOdd([1,2,2,3,3,3,4,3,3,3,2,2,1]));
