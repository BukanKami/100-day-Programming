let morseCode = '.... . -.--   .--- ..- -.. .';

let code = {
    "...---...": "SOS",
    ".-": "A",
    "-...": "B",
    "-.-.": "C",
    "-..": "D",
    ".": "E",
    "..-.": "F",
    "--.": "G",
    "....": "H",
    "..": "I",
    ".---": "J",
    "-.-": "K",
    ".-..": "L",
    "--": "M",
    "-.": "N",
    "---": "O",
    ".--.": "P",
    "--.-": "Q",
    ".-.": "R",
    "...": "S",
    "-": "T",
    "..-": "U",
    "...-": "V",
    ".--": "W",
    "-..-": "X",
    "-.--": "Y",
    "--..": "Z",
    "-.-.--": "!",
    ".-.-.-": ".",
};

let result = "";
const words = morseCode.trim().split("  ");

for (let i = 0; i < words.length; i++) {
    const letters = words[i].split(" ");
    for (let j = 0; j < letters.length; j++) {
        if (code[letters[j]] !== undefined) {
        result += code[letters[j]];
        }
    }

    if (i < words.length - 1) {
        result += " ";
    }
}

console.log(result)

// using  MORSE_CODE[letter]
decodeMorse = function (morseCode) {
    function decodeMorseLetter(letter) {
        return MORSE_CODE[letter];
    }
    function decodeMorseWord(word) {
        return word.split(" ").map(decodeMorseLetter).join("");
    }
    return morseCode.trim().split("   ").map(decodeMorseWord).join(" ");
};