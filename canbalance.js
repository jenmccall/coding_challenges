// UNFINISHED WORK IN PROGRESS

/*
Given a non-empty array, return true if there is a place to split the array 
so that the sum of the numbers on one side is equal to the sum of the numbers on the other side.


array = [1, 1, 1, 2, 1] → canBalance = true
array = [2, 1, 1, 2, 1] → canBalance = false
array = [10, 10] → canBalance = true
*/

let array = [1, 1, 1, 2, 1],
    canBalance = false;

for (i = 0; i <= array.length; i++) {
    let frontSum = 0,
        backSum = 0;
    // front sum
        for (k = 0; k <= i; k++){
            frontSum += array[k];

            console.log(frontSum);
        }
    // back sum

    // compare
}
