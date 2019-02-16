/*
Given a string, return the sum of the numbers appearing in the string, ignoring all other characters. 
A number is a series of 1 or more digit chars in a row.

string = "abc123xyz" → sumNumbers = 123
string = "aa11b33" → sumNumbers = 44
string = "7a11" → sumNumbers = 18
*/

let string = "aa11b33x11",
    array = [],
    numString = "0";

for (i = 0; i <= string.length;) {
    let isNumber = string.charAt(i);
    
    if (isNaN(isNumber)) {
        i++;
    }
    else {
        numString = "" + string.charAt(i);
        
        for (k = 1; !isNaN(string.charAt(i + k)) && k <= string.length; k++) {
            numString = numString + string.charAt(i + k);
        }
        i = i + numString.length + 1;

        array.push(Number(numString));
    }
}

let sumNumbers = array.reduce((a, b) => a + b, 0);

console.log(sumNumbers);
