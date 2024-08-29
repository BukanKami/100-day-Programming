var uniqueInOrder=function(iterable){
    let datas=[];
    let count=0;
    for (let index = 0; index < iterable.length; index++) {
        console.log(iterable[index]);
        if(iterable[index] != datas[count-1]){
            datas.push(iterable[index]);
            count+=1;
        }
    }
    return datas;
};

// var uniqueInOrder=function(iterable){
//     return [...iterable].filter((a, i) => a !== iterable[i-1])
// }
// best practice

console.log(uniqueInOrder('AAAABBBCCDAABBB'));