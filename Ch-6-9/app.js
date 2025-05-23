// Qustions: 01 Write a program to take a number in a variable, do the
//required arithmetic to display the following result in your
// browser:

// Answer: 1

var num = 5;
document.write(" Result <br> The value of num is: " + num + "<br>");
document.write(" ..........................................................");
document.write("<br> The value of ++num is: " + ++num + "<br>");
document.write(" Now the value of num is: " + num + "<br>");
document.write("<br> The value of num++ is: " + num++ + "<br>");
document.write(" Now the value of num is: " + num + "<br>");
document.write("<br> The value of --num is: " + --num + "<br>");
document.write(" Now the value of num is: " + num + "<br>");
document.write("<br> The value of num-- is: " + num-- + "<br>");
document.write(" Now the value of num is: " + num + "<br>");
document.write(" <br> Answer: 2 <br>");


// Qustions: 02 What will be the output in variables a, b & result after
// execution of the following script:
// Answer: 2
var a = 6, b = 8;
var result = --a - --b + ++b + b--;
//              5 - 7 + 8 + 8
//              -2 + 8 + 8
//              6 + 8
//              14

document.write("<br> a is: " + a + "<br>");
document.write(" b is: " + b + "<br>");
document.write(" result is: " + result + "<br>");


// Qustions: 03 Write a program that takes input a name from user & greet the user.

// Answer: 3
document.write(" <br> Answer: 3 <br>");

var userName = prompt("Enter your name");
document.write("Hello " + userName + "! Welcome to our website.");

// Qustions: 04 Write a program to take input a number from user & display it in your browser.

// Answer: 4
document.write(" <br> Answer: 4 <br>");

var userNumber = prompt("Enter a number");
document.write("You entered: " + userNumber);

// Qustions: 05 Write a program to take two numbers & add them in your browser.

// Answer: 5

document.write(" <br> Answer: 5 <br>");

var firstNumber = parseInt(prompt("Enter first number"));
var secondNumber = parseInt(prompt("Enter second number"));
var sum = firstNumber + secondNumber;
document.write("The sum of " + firstNumber + " and " + secondNumber + " is: " + sum);

// Qustions: 06 Write a program to take two numbers & multiply them in your browser.

// Answer: 6

document.write(" <br> Answer: 6 <br>");

var firstNumber = parseInt(prompt("Enter first number"));
var secondNumber = parseInt(prompt("Enter second number"));
var product = firstNumber * secondNumber;
document.write("The product of " + firstNumber + " and " + secondNumber + " is: " + product);

// Qustions: 07 Write a program to take two numbers & divide them in your browser.

// Answer: 7
document.write(" <br> Answer: 7 <br>");

var firstNumber = parseInt(prompt("Enter first number"));
var secondNumber = parseInt(prompt("Enter second number"));
var quotient = firstNumber / secondNumber;
document.write("The quotient of " + firstNumber + " and " + secondNumber + " is: " + quotient);


