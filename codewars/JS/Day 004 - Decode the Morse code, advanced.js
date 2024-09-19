const MORSE_CODE = {
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

function decodeBits(bits) {
    // Trim leading and trailing zeros
    bits = bits.replace(/^0+|0+$/g, '');

    // Find the shortest sequence of consecutive 1's or 0's
    const unitLengths = bits.match(/1+|0+/g).map(b => b.length);
    const minUnit = Math.min(...unitLengths); // This is the smallest time unit (T)

    // Replace the bit sequences with Morse code symbols
    return bits
        .replace(new RegExp(`1{${minUnit * 3}}`, 'g'), '-')  // 3T of 1's -> dash (-)
        .replace(new RegExp(`1{${minUnit}}`, 'g'), '.')  // 1T of 1's -> dot (.)
        .replace(new RegExp(`0{${minUnit * 7}}`, 'g'), '   ')  // 7T of 0's -> word space
        .replace(new RegExp(`0{${minUnit * 3}}`, 'g'), ' ')  // 3T of 0's -> letter space
        .replace(new RegExp(`0{${minUnit}}`, 'g'), '');  // 1T of 0's -> no space
}


function decodeMorse(morseCode) {
    return morseCode
        .trim()  // Remove leading/trailing spaces
        .split('   ')  // Split words by 3 spaces
        .map(word => word
            .split(' ')  // Split letters by 1 space
            .map(letter => MORSE_CODE[letter])  // Convert Morse code to letters
            .join(''))  // Join letters into words
        .join(' ');  // Join words into the final message
}
// Test case: "HEY JUDE"
let bits = '1100110011001100000011000000111111001100111111001111110000000000000011001111110011111100111111000000110011001111110000001111110011001100000011';

let morseCode = decodeBits(bits);  // Decode the bits to morse code
let message = decodeMorse(morseCode);  // Decode the morse code to a message

console.log(message);  // Expected output: 'HEY JUDE'

// Additional test cases:
console.log(decodeMorse(decodeBits('110011')));  // Expected: "E"
console.log(decodeMorse(decodeBits('1110111'))); // Expected: "T"
console.log(decodeMorse(decodeBits('11001100110011'))); // Expected: "EE"
console.log(decodeMorse(decodeBits('1110111000111000111'))); // Expected: "S"
console.log(decodeMorse(decodeBits('110011001100110011111100000011111100110011'))); // Expected: "HEY"
