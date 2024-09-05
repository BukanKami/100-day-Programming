// function likes(names) {
//     // TODO :
//     // - length of the name
//     // - check if name is not empty
//     // - check if name is only one
//     // - check if name is only two
//     // - check if names array length is more than or equal to 3
//     // - return appropriate string based on conditions

//     let returnString = '';
    
//     if(names.length == 0){
//         return 'no one likes this';
//     }
    
//     if(names.length == 1){
//         return names[0] +' likes this';
//     }

//     if(names.length == 2){
//         return names[0] +' and '+ names[1] +' like this';
//     }

//     for(var i = 0; i < names.length; i++){
//         if(i > 1){
//             if(names.length == 3){
//                 returnString += 'and ' + names[i]+ ' like this';
//                 break;
//             }else{
//                 returnString += 'and '+ (names.length - 2) +' others like this';
//                 break;
//             }
//         }else{
//             returnString += names[i];
//             if(i < 1){
//                 returnString += ', ';
//             }else{
//                 returnString += ' ';
//             }
//         }
//     }

//     return returnString;
// }

function likes(names) {
    switch (names.length) {
        case 0:
            return 'no one likes this';
        case 1:
            return names[0] +' likes this';
        case 2:
            return names[0] +' and '+ names[1] +' like this';
        case 3:
            return names[0] +', '+ names[1] +' and '+ names[2] +' others like this';
        default:
            return names[0] +', '+ names[1] +' and '+ (names.length - 2) +' others like this';
    }
}

console.log(likes(['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i']));
console.log(likes(['a', 'b', 'c', 'd']));
console.log(likes(['a', 'b', 'c']));
console.log(likes(['a', 'b']));
console.log(likes(['a']));
console.log(likes([]));