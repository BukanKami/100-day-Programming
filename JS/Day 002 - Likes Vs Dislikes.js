// Like, Dislike, Nothing come from Preloaded

function likeOrDislike(buttons) {
    let returnData = 'Nothing';
    for (let i = 0; i < buttons.length; i++) {
        returnData = returnData === buttons[i] ? 'Nothing' : buttons[i];
    }
    return returnData;
}

console.log(likeOrDislike(['Like']));
console.log(likeOrDislike(['Dislike','Like']));
console.log(likeOrDislike(['Like','Dislike']));
console.log(likeOrDislike(['Like','Like']));
console.log(likeOrDislike(['Dislike','Dislike']));
console.log(likeOrDislike(['Like','Dislike','Dislike']));