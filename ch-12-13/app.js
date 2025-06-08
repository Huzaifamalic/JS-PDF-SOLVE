// Qusetion : 1 Write a program that takes a character (number or string)
//in a variable & checks whether the given input is a
//number, uppercase letter or lower case letter. (Hint: ASCII
//codes:- A=65, Z=90, a=97, z=122).

// Answer: 1;
var input = prompt("Enter a character (number or string):");

var ascii = input.charCodeAt(0); // character ka ASCII code nikaalna

if (ascii >= 65 && ascii <= 90) {
  alert("Uppercase letter");
} else if (ascii >= 97 && ascii <= 122) {
  alert("Lowercase letter");
} else if (ascii >= 48 && ascii <= 57) {
  alert("Number");
} else {
  alert("Special character or other");
}


// Question : 2 Write a JavaScript program that accept two integers and
// display the larger. Also show if the two integers are equal.
 
// Answer: 2;


var num1 = +prompt("Enter the first number:");
var num2 = +prompt("Enter the second number:");

if (num1 > num2) {
  console.log(num1 + " is larger.");
} else if (num2 > num1) {
  console.log(num2 + " is larger.");
} else {
  console.log("Both numbers are equal.");
}

// Question : 3 Write a program that takes input a number from user &
//state whether the number

// Answer: 3;

var number = +prompt("Enter a number:");
if (number > 0) {
    console.log("The number is positive.");
} else if (number < 0) {
    console.log("The number is negative.");
} else {
    console.log("The number is zero.");
}

// Question : 4 Write a program that takes a character (i.e. string of
//length 1) and returns true if it is a vowel, false otherwise

// Answer: 4;

var char = prompt("Enter a character (single letter):").toLowerCase();
var vowels = "aeiou";
if (vowels.includes(char)) {
    console.log("True, it is a vowel.");
}
else {
    console.log("False, it is not a vowel.");
}

// Question : 5  Write a program that
//a. Store correct password in a JS variable.
//b. Asks user to enter his/her password
//c. Validate the two passwords:
//i. Check if user has entered password. If not, then
//give message “ Please enter your password”
//ii. Check if both passwords are same. If they are
//same, show message “Correct! The password you
//entered matches the original password”. Show
//“Incorrect password” otherwise.

// Answer: 5 
var correctPassword =   "mySecretPassword";
var userPassword = prompt("Enter your password:");
if (userPassword === "") {
    console.log("Please enter your password.");
}   else if (userPassword === correctPassword) {
    console.log("Correct! The password you entered matches the original password.");
} else {
    console.log("Incorrect password.");
}

// Question : 6 This if/else statement does not work. Try to fix it:
//var greeting;
//var hour = 13;
//if (hour < 18) {
//greeting = "Good day";
//else
//greeting = "Good evening";
//}

// Answer: 6
var greeting;   
var hour = 13;

if (hour < 18) {
    greeting = "Good day";
}   else {
    greeting = "Good evening";
}

// Question : 7 Write a program that takes time as input from user in 24
//hours clock format like: 1900 = 7pm. Implement the
//following case using if, else & else if statements the

// Answer: 7
var time = +prompt("Enter time in 24-hour format (e.g., 1900 for 7 PM):");
if (time >= 0 && time < 1200) {
    console.log("Good Morning!");
}
else if (time >= 1200 && time < 1700) {
    console.log("Good Afternoon!");
} else if (time >= 1700 && time < 2100) {
    console.log("Good Evening!");
} else if (time >= 2100 && time <= 2359) {
    console.log("Good Night!");
} else {
    console.log("Invalid time input.");
} 
