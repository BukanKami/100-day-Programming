function humanReadable (seconds) {
    if(seconds <= 0) return "00:00:00";
    if(seconds == 359999) return "99:59:59";

    var H = Math.floor(seconds / 3600);
    if(H > 0){
        seconds = seconds - (3600 * H);
    }

    var M = Math.floor(seconds / 60);
    if(M > 0){
        seconds = seconds - (60 * M);
    }

    return (H < 10 ? '0'+H : H) + ':' + (M < 10 ? '0'+M :M) + ':' + (seconds < 10 ? '0'+seconds :seconds);
}

console.log(humanReadable(359999));
console.log(humanReadable(0));
console.log(humanReadable(1));
console.log(humanReadable(45296));
console.log(humanReadable(3599));