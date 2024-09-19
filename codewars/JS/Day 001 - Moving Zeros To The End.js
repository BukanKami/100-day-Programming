function moveZeros(arr) {
    let countZeros = 0;
    let returnData = [];
    arr.forEach(element => {
        if(element === 0){
            countZeros++;
        }else{
            returnData.push(element);
        }
    });
    for(let i=0; i<countZeros; i++){
        returnData.push(0);
    }
    return returnData;
}

console.log(moveZeros([false,1,0,1,2,0,1,3,"a"]));