/*

Part 1: Debugging Challenge
The JavaScript code below contains intentional bugs related to type conversion.
Please do the following:
  - Run the script to observe unexpected outputs.
  - Debug and fix the errors using explicit type conversion methods like  Number() ,  String() , or    Boolean()  where necessary.
  - Annotate the code with comments explaining why the fix works.

Part 2: Write Your Own Examples
Write their own code that demonstrates:
  - One example of implicit type conversion.
  - One example of explicit type conversion.

  *We encourage you to:
Include at least one edge case, like NaN, undefined, or null .
Use console.log() to clearly show the before-and-after type conversions.

*/


/*
Part 1: Debugging Challenge
*/

// Convert "5" to a number before subtracting
let result = Number("5") - 2;
console.log("The result is: " + result); // 3

// Boolean("false") is true because it is a non-empty string
// Compare the string directly instead
let isValid = "false" === "true";

if (isValid) {
    console.log("This is valid!");
} else {
    console.log("This is not valid!");
}

// Convert age from a string to a number before adding
let age = "25";
let totalAge = Number(age) + 5;

console.log("Total Age: " + totalAge); // 30


/*
Part 2: Type Conversion Examples
*/

// Implicit type conversion
let value = "10";

console.log("Before:", value, typeof value);

let convertedResult = value - 2;

console.log("After:", convertedResult, typeof convertedResult);
// JavaScript automatically converts "10" to a number


// Explicit type conversion
let score = "90";

console.log("Before:", score, typeof score);

let convertedScore = Number(score);

console.log("After:", convertedScore, typeof convertedScore);
// Number() converts the string "90" into the number 90


// Edge case: NaN
let invalidNumber = "hello";

console.log("Before:", invalidNumber, typeof invalidNumber);

let convertedInvalidNumber = Number(invalidNumber);

console.log("After:", convertedInvalidNumber, typeof convertedInvalidNumber);
// "hello" cannot be converted to a valid number, so the result is NaN
