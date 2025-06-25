// Qusetion : 1

// Answer : 1

// var inp = +prompt("Enter a Number:");
// var num = inp
// var around = Math.round(inp);
// console.log("The number is: " + num);
// console.log("The number rounded to the nearest integer is: " + around);
// var floor = Math.floor(inp);
// console.log("The number rounded down to the nearest integer is: " + floor);
// var ceil = Math.ceil(inp);
// console.log("The number rounded up to the nearest integer is: " + ceil);

// Question : 2
// Answer : 2


// var num = -5.6;
// console.log("The number is: " + num);
// var around = Math.round(num);
// console.log("The number rounded to the nearest integer is: " + around);
// var floor = Math.floor(num);
// console.log("The number rounded down to the nearest integer is: " + floor);
// var ceil = Math.ceil(num);
// console.log("The number rounded up to the nearest integer is: " + ceil);


// Question : 3
// Answer : 3

// var number = prompt("Enter a number:");
//   var absoluteValue = Math.abs(number);
//     console.log("The absolute value of " + number + " is: " + absoluteValue);

// Question : 4
// Answer : 4

// var randomNumber = Math.floor(Math.random() * 6) + 1;
// console.log("Random dice value: " + randomNumber);

// Question : 5
// Answer : 5
// var inp_user = prompt("Enter 'head' or 'tail':").toLowerCase();

// var randomNumber = Math.floor(Math.random() * 2) ;
// var head = 0;
// var tail = 1;



// if ( inp_user === "head"  && randomNumber === head ) {
//     console.log("you won");
// }
// else if ( inp_user === "tail" && randomNumber === tail ) {

//     console.log("you won");

// } else if(inp_user === "head" || inp_user   === "tail") {
//     console.log('you lost')

// } 
// else {
//     console.log("Invalid input. Please enter 'head' or 'tail'.");
// }

// Question : 6
// Answer : 6

// var randomNumber = Math.floor(Math.random() * 100) + 1;
// console.log("Random number between 1 and 100: " + randomNumber);

// Question : 7

// Answer : 7

// var weight = prompt("Enter your weight in kilograms (e.g., 50.5kg):");

// var user_weight =Number(weight)
// console.log("Your weight is: " + user_weight + " kilograms");

// Question : 8

// Answer : 8

var randomNumber = Math.floor(Math.random() * 10) + 1;
var userGuess = +prompt("Guess a number between 1 and 10:");

if(randomNumber=== userGuess) {
    console.log("Congratulations! You guessed the correct number: " + randomNumber);
} else {
    console.log("Sorry, the correct number was: " + randomNumber);
}