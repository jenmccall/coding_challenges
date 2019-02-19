/*
Find the nth digit of the infinite integer sequence 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, ...
Note: n is positive and will fit within the range of a 32-bit signed integer (n < 231).
From http://www.leetcode.com

Input:
3
Output:
3

Input:
11
Output:
0
Explanation:
The 11th digit of the sequence 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, ... is a 0, which is part of the number 10.
*/

// Declare variables - note that number is an integer, not a string.
// This is because intergers will be easier to check when refering to the sequence in my opinion.
let number = 19,
    sequence = [];

// This block draws out the sequence of numbers up until string.
// Note that numbers with more than one digit will more space in the array.
for (k = 1; k <= number; k++) {
    if (k.toString().length > 1) {
        for (i = 0; i < number.toString().length; i++){
           let digit = k.toString().charAt(i);

           sequence.push(parseInt(digit));
        }
    }
    else {
        sequence.push(k);
    }
}

// Now we can check the string-th digit in the sequence put together.
// Arrays begin at index 0, so we must subtract 1 from our number to see that place.
console.log(sequence[number - 1]);