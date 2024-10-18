
function duplicateCount(text){
    var results = text.toUpperCase().split('');
    var found = 0;
    var countResults = 0;
    var Founded = '';
    for(var i = 0; i < results.length; i++){
        for(var j = 0; j < results.length; j++){
            if(i!=j && results[i] == results[j]){
                if(Founded.match(results[i])){
                    break;
                }
                found++;
                break;
            }
        }
        
        if(found > 0){
            Founded += results[i];
            countResults++;
            found = 0;
        }
    }

    return countResults
}

console.log(duplicateCount('abcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyz')); 