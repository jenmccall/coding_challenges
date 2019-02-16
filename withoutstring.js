// UNFINISHED WORK IN PROGRESS

/*
Given two strings, base and remove, return a version of the base string where 
all instances of the remove string have been removed (not case sensitive). 
You may assume that the remove string is length 1 or more. 
Remove only non-overlapping instances, so with "xxx" removing "xx" leaves "x".

string = "Hello there"
withoutString = "llo" → "He there"
withoutString = "e") → "Hllo thr"
withoutString = "x") → "Hello there"
 */

let string = "Hello there",
    remove = "llo",
    erase = [];


for (i = 0; i <= remove.length; i++) {
    for (k = i + 1; k <= string.length; k++) {
        for (x = k; x <= remove.length(); x++)
            //if (string.charAt(k) == remove.charAt(i)) {
            console.log(i);
            //}
    }
}

console.log(erase);

