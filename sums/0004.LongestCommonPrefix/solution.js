const longestCommonPrefix = function (stringsArray) {
    // Loop through characters of the first string
    for (let charIndex = 0; charIndex < stringsArray[0].length; charIndex++) {
        console.log("Checking character at index:", charIndex);

        // Loop through each string in the array
        for (let stringIndex = 0; stringIndex < stringsArray.length; stringIndex++) {
            console.log("Comparing character at index", charIndex, "of first string with index", charIndex, "of string at index", stringIndex);
            
            // Check if characters at the same index in different strings don't match
            if (stringsArray[0][charIndex] !== stringsArray[stringIndex][charIndex]) {
                
                
                // Return the substring of the first string up to the current index
                const prefix = stringsArray[0].substring(0, charIndex);
                console.log("Longest common prefix found:", prefix);
                return prefix;
            }
        }
    }
    // Return the entire first string if no non-matching characters are found
    console.log(stringsArray[0]);
    return stringsArray[0];
};

const input = ["flower", "flow", "flight"];
console.log("Input:", input);

const output = longestCommonPrefix(input);
console.log("Longest common prefix:", output);
