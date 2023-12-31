// 1. Write a range function that takes two arguments, start and end, and returns an array
// containing all the numbers from start up to (and including) end.
// Example output:
// console.log(range(1, 10)); // outputs [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]


function range(start, end) {
    let rangeArray = [];
    for (let i = start; i <= end; i++) {
        rangeArray.push(i);
    }
        return rangeArray;
}
 console.log(range(1, 10)); 



// 2. Next, write a sum function that takes an array of numbers and returns the sum of
// these numbers. Run the example program and see whether it does indeed return 55.
// Example output:
// console.log(sum(range(1, 10))); // returns 55

    // when example was ran, it gave an error and states sum is not defined

function sum(array) {                  
    let addition = 0;
    for (let i = 0; i < array.length; i++) {
        addition += array[i];
    }
    return addition;
}
console.log(sum(range(1, 10)));


// 3. Arrays have a reverse method that changes the array by inverting the order in which
// its elements appear. For this exercise, write two functions, reverseArray and
// reverseArrayInPlace. The first, reverseArray, takes an array as an argument and
// produces a new array that has the same elements in the inverse order. The second,
// reverseArrayInPlace, does what the built-in reverse method does: it modifies the array
// given as an argument by reversing its elements. Neither may use the standard reverse
// method.

// Example output for reverseArray:
// console.log(reverseArray(["A", "B", "C"])); // outputs ["C", "B", "A"];
// Example output for reverseArrayInPlace:
// let arrayValue = [1, 2, 3, 4, 5];
// reverseArrayInPlace(arrayValue);
// console.log(arrayValue); // outputs [5, 4, 3, 2, 1]


function reverseArray(array) {
    let reverse = []; 
    for (let i = array.length; i >= 0; i --) {
        reverse.push(i);
    }                                //works but doesn't work, gives numbers not letters
        return reverse;             
}
console.log(reverseArray(["A",  "B", "C"]));




                                    
function reverseArrayInPlace(array) {
    
    let midPoint = 0;

    if (array.length % 2 == 0) {
        midPoint = array.length / 2 -1;
    } else {
        midPoint = array.length / 2;
    }
    

    for (let i = 0; i <= midPoint; i++ ) {
        let shortTerm = array[i];
        array[i] = array[array.length -i -1];
        array[array.length -i -1] = shortTerm;
    }
    return array;
}

function activateArray(array) {
    for (let i = 0; i < array.length; i++) {
        console.log(array[i]);
    }
}
let arrayValue = [1, 2, 3, 4, 5];
console.log(reverseArray(reverseArrayInPlace));
console.log(reverseArrayInPlace(reverseThisArray)); 