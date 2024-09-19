// function spinWords(string){
//     //TODO Have fun :)
//     let returnString = '';
//     let words = string.split(' ');
//     for(let i = 0; i < words.length; i++){
//         if (i > 0 && words.length > 1 && i < words.length){
//             returnString += ' ';
//         }

//         if(words[i].length >= 5){
//             let reversedWord = words[i].split('').reverse().join('');
//             returnString = returnString + reversedWord;
//         }else{
//             returnString = returnString + words[i];
//         }
//     }

//     return returnString;
// }

function spinWords(words){
    return words.split(" ").map(function(word){
        return word.length <= 5 ? word : word.split('').reverse().join(''); 
    });
}

console.log(spinWords('Welcome'));
console.log(spinWords('this is a test'));
console.log(spinWords('Hey fellow warriors'));