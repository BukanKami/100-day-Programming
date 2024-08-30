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
// 800 > ms

// function rot13(message) {
//     const lookup = {
//         a: 'n', b: 'o', c: 'p', d: 'q', e: 'r', f: 's', g: 't', h: 'u', i: 'v', j: 'w', k: 'x', l: 'y', m: 'z',
//         n: 'a', o: 'b', p: 'c', q: 'd', r: 'e', s: 'f', t: 'g', u: 'h', v: 'i', w: 'j', x: 'k', y: 'l', z: 'm',
//         A: 'N', B: 'O', C: 'P', D: 'Q', E: 'R', F: 'S', G: 'T', H: 'U', I: 'V', J: 'W', K: 'X', L: 'Y', M: 'Z',
//         N: 'A', O: 'B', P: 'C', Q: 'D', R: 'E', S: 'F', T: 'G', U: 'H', V: 'I', W: 'J', X: 'K', Y: 'L', Z: 'M'
//     };

//     return Array.from(message).map(char => lookup[char] || char).join('');
// }
// 700 > ms, somtime 600

let message = "Test";
const resrot13 = message => 
    message.replace(/[a-zA-Z]/g, char => {
        const base = char <= 'Z' ? 65 : 97;
        return String.fromCharCode(((char.charCodeAt(0) - base + 13) % 26) + base);
    });

console.log(resrot13(message));  

console.log(rot13("Test")); // Should return "Grfg"