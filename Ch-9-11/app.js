// Qustions : 1  Write a program to take “city” name as input from user. If
// user enters “Karachi”, welcome the user like this:
// “Welcome to city of lights”

// Answer : 1

var citey_name = prompt("Enter your city name:");
if (citey_name === "Karachi") {
    alert("Welcome to city of lights");
} else{
    alert("wrong city name");
}

// Qustions : 2 Write a program to take

// Answer : 2

 var gander = prompt("Enter a gander:");

 if (gander=== "Male"){
    alert("Good Morning Sir");
 } else if (gander === "   Female") {
    alert("Good Morning Ma'am");
 } else {
    alert("Plse enter a valid gander");
 }

 // Qustions : 3 Write a program to take input color from user. If user enters
// “Red”, “Green” or “Blue”, welcome the user with the message
// “Welcome to the color world”. If user enters any other color, show the message
// “You are not welcome”.

// Answer : 3
var color = prompt("Enter a color:");
if (color === "Red"){
    alert("Must stop at red light");

} else if (color === "Yellow") {
    alert("Get ready to go at yellow light");


} else if (color === "Green") {
    alert("You can go at green light");

} else {
    alert("plse enter a valid color");
}

// Qustions : 4 Write a program to take input number from user. If user enters
// number greater than 10, show the message “Number is greater than 10”.    

var number = prompt("Enter a number:");
if (number > 10) {
    alert("Number is greater than 10");
} else if (number < 10) {
    alert("Number is less than 10");
} else {
    alert("Number is equal to 10");
}

// Qustion : 5 4. Write a program to take input remaining fuel in car (in
//litres) from user. If the current fuel is less than 0.25litres,
//show the message “Please refill the fuel in your car”

// Answer : 5

var fuel = parseFloat(prompt("Enter remaining fuel in car (in litres):"));
if (fuel < 0.25) {
    alert("Please refill the fuel in your car");
}   else {
    alert("You have enough fuel in your car");
}

// Qustion : 65. Run this script, & check whether alert message would be
//displayed or not. Record the outputs
// Answer : 6
var a = 4;
if (++a === 5) {
    alert("given condition for variable a is true");
}
// Qustion : 7 Guess game:
//Store a secret number (ranging from 1 to 10) in a variable.
//Prompt user to guess the secret number.
//a. If user guesses the same number, show “Bingo! Correct
//answer”.
//b. If the guessed number +1 is the secret number, show
//“Close enough to the correct answer”.

// Answer : 7
var secretNumber = 7;
var guessedNumber = parseInt(prompt("Guess the secret number (between 1 and 10):"));
if (guessedNumber === secretNumber) {
    alert("Bingo! Correct answer");
}
else if (guessedNumber + 1 === secretNumber) {
    alert("Close enough to the correct answer");
} else {
    alert("Wrong guess, try again!");
}

// Qustion : 8 Write a program to check whether the given number is
//divisible by 3. Show the message to the user if the number
//is divisible by 3.

// Answer : 8

var number = parseInt(prompt("Enter a number:"));
if (number % 3 === 0) {
    alert("The number is divisible by 3");
}
else {
    alert("The number is not divisible by 3");
}
// Qustion : 9 Write a program to check whether the given number is even
//or odd. Show the message to the user if the number is even.

// Answer : 9

var number = parseInt(prompt("Enter a number:"));
if (number % 2 === 0) {
    alert("The number is even");
}
else {
    alert("The number is odd");
}

// Qustion : 10 Write a program that takes temperature as input and
//shows a message based on following criteria
// a. T > 40 then “It is too hot outside.”
// b. T > 30 then “The Weather today is Normal.”
// c. T > 20 then “Today’s Weather is cool.”
// d. T > 10 then “OMG! Today’s weather is so Cool.”

// Answer : 10

var temperature = parseInt(prompt("Enter the temperature:"));
if (temperature > 40) {
    alert("It is too hot outside.");
}
else if (temperature > 30) {
    alert("The Weather today is Normal.");
}
else if (temperature > 20) {
    alert("Today's Weather is cool.");
}
else if (temperature > 10) {
    alert("OMG! Today's weather is so Cool.");
}
else {
    alert("It's cold outside.");
}

// Qustion : 11 Write a program to create a calculator for +, -, *, / & %
// using if statements. Take the following input:
// a. First number
// b. Second number
// c. Operation (+, -, *, /, %)
// Based on operation, display the calculated result to user.
// Answer : 11

var firstNumber = parseFloat(prompt("Enter the first number:"));
var secondNumber = parseFloat(prompt("Enter the second number:"));
var operation = prompt("Enter the operation (+, -, *, /, %):");
var result;
if (operation === "+") {
    result = firstNumber + secondNumber;
}   else if (operation === "-") {
    result = firstNumber - secondNumber;
} else if (operation === "*") {
    result = firstNumber * secondNumber;
} else if (operation === "/") {
    result = firstNumber / secondNumber;
} else if (operation === "%") {
    result = firstNumber % secondNumber;
} else {
    alert("Invalid operation");
}
if (result !== undefined) {
    alert("The result is: " + result);
}   else {  
    alert("Please enter a valid operation");
}


