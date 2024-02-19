// const isPalindrome = function(x) {
//     if (x < 0 || (x > 0 && x % 10 === 0)) {
//         return false; 
//     }

//     let y = 0;
//     for (; y < x; x = ~~(x / 10)) {
//         y = y * 10 + (x % 10);
//     }

//     return x === y || x === ~~(y / 10);
// };

// const x = 121;
// console.log(isPalindrome(x)); 


const isPalindrome = function(number) {
    console.log("Input number:", number);
    if (number < 0 || (number > 0 && number % 10 === 0)) {
        console.log("Number is negative or ends with zero, not a palindrome.");
        return false; 
    }

    let reversedNumber = 0;
    let originalNumber = number;

    for (; reversedNumber < originalNumber; originalNumber = Math.floor(originalNumber / 10)) {
        console.log(`lOOP ; ${reversedNumber} < ${originalNumber}; ${originalNumber} = Math.floor(${originalNumber} / 10)`);
        console.log("Original number in loop:", originalNumber);
        console.log("Reversed number in loop:", reversedNumber);
        console.log(`${reversedNumber} * 10 + (${originalNumber} % 10)`);
        reversedNumber = reversedNumber * 10 + (originalNumber % 10);
        console.log('new reversed number: ',reversedNumber)
    }
    console.log(`${originalNumber} === ${reversedNumber} || ${originalNumber} === Math.floor(${reversedNumber} / 10)`);
    const isPalindrome = originalNumber === reversedNumber || originalNumber === Math.floor(reversedNumber / 10);
    console.log("Is Palindrome:", isPalindrome);
    return isPalindrome;
};

const inputNumber = 121;
console.log(isPalindrome(inputNumber)); 
