/*
You have written an anonymous love letter and you don’t want your handwriting 
to be recognized. Since you don’t have a printer within reach, 
you are trying to write this letter by copying and pasting characters from a newspaper.

Given a string L representing the letter and a string N representing the newspaper, 
return true if the L can be written entirely from N and false otherwise. 
The letter includes only ascii characters.
From http://www.pramp.com/tryout

L = "I love you" 
N = "Trump Has Publicly Attacked the Russia Investigation More Than 1,100 Times"
containsL = true

L = "I love you"
N = "5 Americans arrested in Haiti as violent protests continue"
containsL = false
*/
// Using javascript string methods, the time complexity for this would be O(n)
// where n is the length of L

let L = "I love you",
    N = "5 Americans arrested in Haiti as violent protests continue",
    containsL = false,
    l = L.toLowerCase(),
    n = N.toLowerCase();

for (i = 0; i < l.length; i++) {
  let letter = l.charAt(i);
  
  if (n.includes(letter)) {
    containsL = true;
    n.slice(i - 1, i);
  }
  else {
    containsL = false;
    break;
    // i = l.length; // either break or i manipulation would work here.
  }
}

console.log(containsL);