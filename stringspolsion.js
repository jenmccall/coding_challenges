/*
Given a non-empty string like "Code" return a string like "CCoCodCode".


s = "Code" → "CCoCodCode"
s = "abc" → "aababc"
s = "ab" → "aab"
*/

let s = "Testing 1, 2, 3",
    output = "";


for (i = 0; i <= s.length; i++) {
    output = output + s.slice(0, i);
}

console.log(output);
