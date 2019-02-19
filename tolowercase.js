/*
Implement function ToLowerCase() that has a string parameter str, and returns the same string in lowercase.
From http://www.leetcode.com

Input: "Hello"
Output: "hello"

Input: "here"
Output: "here"

Input: "LOVELY"
Output: "lovely"
*/

let string = "Is ThIs HoW iT wOrKs?",
    upper = ["Q", "W", "E", "R", "T", "Y", "U", "I", "O", 
             "P", "A", "S", "D", "F", "G", "H", "J", "K", 
             "L", "Z", "X", "C", "V", "B", "N", "M"],
    lower = ["q", "w", "e", "r", "t", "y", "u", "i", "o",
             "p", "a", "s", "d", "f", "g", "h", "j", "k", 
             "l", "z", "x", "c", "v", "b", "n", "m"];

var toLowerCase = function(str) {
    let lowerStr = "";
    
    for (i = 0; i <= str.length; i++){
        let letter = str.charAt(i);

        if (upper.includes(letter)){
            match = upper.indexOf(letter);

            letter = lower[match];
        }

        lowerStr += letter;
    }

    console.log(lowerStr);
};

toLowerCase(string);