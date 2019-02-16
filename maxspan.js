/*
Consider the leftmost and righmost appearances of some value in an array. 
We'll say that the "span" is the number of elements between the two inclusive. 
A single value has a span of 1. Returns the largest span found in the given array. (Efficiency is not a priority.)


a = [1, 2, 1, 3] → 3
a = [1, 4, 2, 1, 4, 1, 4] → 6
a = [1, 4, 2, 1, 4, 2, 3] → 4
*/

let a  = [1, 4, 2, 1, 4, 2, 3],
    allSpans = [],
    maxSpan = 1;

for (i = 0; i <= a.length; i++) {
    let leftSpan = a[i];

    for (k = i + 1; k < a.length; k++){
        if (a[k] === leftSpan){
            allSpans.push((k - i) + 1);
        }
    }
}

maxSpan = Math.max.apply(null, allSpans);

console.log(allSpans);
console.log(maxSpan);

/*
look at i position in a
    look at every other position in a one at a time
        keep track of distance between i matches (currentLongest) (
            if n position is = leftSpan
            currentLongest = the distance between leftSpan and n
        )
            
        compare distance to current largest distance
        if maxSpan < currentLongest
            set cL as new maxSpan




*/