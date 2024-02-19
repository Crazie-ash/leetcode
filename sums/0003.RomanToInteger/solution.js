const romanToInt = function (romanNumeral) {
    const romanToIntMap = {
        I: 1,
        V: 5,
        X: 10,
        L: 50,
        C: 100,
        D: 500,
        M: 1000,
    };
    console.log("Roman numeral input:", romanNumeral);
    let integerValue = romanToIntMap[romanNumeral[romanNumeral.length - 1]];
    console.log(`Initial value for last digit (${romanNumeral[romanNumeral.length - 1]}):`, integerValue);
    for (let i = 0; i < romanNumeral.length - 1; ++i) {
        const currentDigit = romanToIntMap[romanNumeral[i]];
        const nextDigit = romanToIntMap[romanNumeral[i + 1]];
        const sign = currentDigit < nextDigit ? -1 : 1;
        console.log(`Current digit (${romanNumeral[i]}):`, currentDigit);
        console.log(`Next digit (${romanNumeral[i + 1]}):`, nextDigit);
        console.log(`Sign for ${romanNumeral[i]} (${currentDigit} ${sign < 0 ? '<' : '>'} ${nextDigit}):`, sign);
        integerValue += sign * currentDigit;
        console.log(`Updated value after ${romanNumeral[i]}:`, integerValue);
    }
    console.log("Final integer value:", integerValue);
    return integerValue;
};

const inputRomanNumeral = "LVIII";
const outputIntegerValue = romanToInt(inputRomanNumeral);
console.log("Output Integer Value:", outputIntegerValue);
