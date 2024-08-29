function duplicateEncode(word){
    let data = {};
    for (let index = 0; index < word.length; index++) {
        if(data[word[index].toLowerCase()]!==undefined){
            data[word[index].toLowerCase()] += 1;
        }else{
            data[word[index].toLowerCase()] = 1;
        }
    }
    var returnValue ='';
    
    for (let index = 0; index < word.length; index++) {
        if(data[word[index].toLowerCase()]===1){
            returnValue += '(';
        } else {
            returnValue += ')';
        }
    }

    return returnValue;
}

console.log(duplicateEncode("hello")); 