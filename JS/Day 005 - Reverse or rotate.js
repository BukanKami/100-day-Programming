function revrot(str, sz) {
    if (str.length < sz || sz === 0) return ''; // Handle edge cases

    function reverseThis(thisStr) {
        return thisStr.split('').reverse().join(''); // Reverse the string
    }

    function rotateThis(thisStr) {
        return thisStr.substring(1) + thisStr[0]; // Rotate the string by moving the first char to the end
    }

    var resultSum = 0;
    var chunks = Math.floor(str.length / sz); // Calculate the number of full chunks
    var resultsChunks = [];

    // Process each chunk
    for (let chunkIndex = 0; chunkIndex < chunks; chunkIndex++) {
        let thisStr = '';
        resultSum = 0;

        // Extract the current chunk of size 'sz'
        for (let i = chunkIndex * sz; i < (chunkIndex + 1) * sz; i++) {
            thisStr += str[i];
            resultSum += parseInt(str[i], 10); // Sum the digits of the chunk
        }

        // Reverse if sum is even, rotate if odd
        if (resultSum % 2 === 0) {
            resultsChunks.push(reverseThis(thisStr));
        } else {
            resultsChunks.push(rotateThis(thisStr));
        }
    }

    // Combine all processed chunks
    return resultsChunks.join(''); // Add leftover part of the string if any
}

console.log(revrot("733049910872815764", 5)); // Expected: "330479108928157"
