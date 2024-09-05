// function humanReadable (seconds) {
//     if(seconds <= 0) return "00:00:00";
//     if(seconds == 359999) return "99:59:59";

//     var H = Math.floor(seconds / 3600);
//     if(H > 0){
//         seconds = seconds - (3600 * H);
//     }

//     var M = Math.floor(seconds / 60);
//     if(M > 0){
//         seconds = seconds - (60 * M);
//     }

//     return (H < 10 ? '0'+H : H) + ':' + (M < 10 ? '0'+M :M) + ':' + (seconds < 10 ? '0'+seconds :seconds);
// }

function humanReadable(sec) {
    let h = sec / 3600 | 0,
        m = (sec - h * 3600) / 60 | 0,
        s = sec - h * 3600 - m * 60;
    return `${h < 10 ? '0' + h : h}:${m < 10 ? '0' + m : m}:${s < 10 ? '0' + s : s}`;
}

console.log(humanReadable(359999));
console.log(humanReadable(0));
console.log(humanReadable(1));
console.log(humanReadable(45296));
console.log(humanReadable(3599));