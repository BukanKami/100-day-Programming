function rot13(message){
    let abcd = 'abcdefghijklmnopqrstuvwxyz';
    let upperABCD = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    let result = '';

    for (let thisChar of message) {
        console.log(thisChar);
        if (abcd.includes(thisChar)) {
            if(abcd.indexOf(thisChar) + 13 < abcd.length) {
                result += abcd[(abcd.indexOf(thisChar) + 13)];
            }else{
                result += abcd[(abcd.indexOf(thisChar) + 13 - abcd.length )];
            }
        }else if(upperABCD.includes(thisChar)){
            if((upperABCD.indexOf(thisChar) + 13) < abcd.length) {
                result += upperABCD[(upperABCD.indexOf(thisChar) + 13)];
            }else{
                result += upperABCD[(upperABCD.indexOf(thisChar) + 13 - abcd.length )]; 
            }
        }else{
            result += thisChar;
        }
    }

    return result
}

console.log(rot13("Test")); // Should return "Grfg"