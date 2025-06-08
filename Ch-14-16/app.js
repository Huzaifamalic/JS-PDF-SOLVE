// Question: 1 Declare an empty array using JS literal notation to store
//student names in future.
// Answer: 1;

var studentNames = [];
// Question: 2 Declare an array with 5 student names using JS literal notation.
// Answer: 2;
var studentNames = ["malick", "ali", "faisal", "hamid", "Eve"];
 
// Question: 3 Declare and initialize a strings array.

// Answer: 3;
var stringsArray = ["apple", "banana", "cherry", "date", "elderberry"];

// Question: 4 Declare and initialize a numbers array.

// Answer: 4;
var numbersArray = [1, 2, 3, 4, 5];

// Question: 5 Declare and initialize a boolean array.

// Answer: 5;

var booleanArray = [true, false, true, false, true];

// Question: 6 Declare and initialize a mixed array.

// Answer: 6;
var mixedArray = ["John", 25, true, null, ];

// Question: 7 Declare and Initialize an array and store available
//education qualifications in Pakistan (e.g. SSC, HSC, BCS,
//BS, BCOM, MS, M. Phil., PhD). Show the listed
//qualifications in your browser like:
// Answer: 7;
 
var educationQualifications = [
  "SSC",
  "HSC",
  "BCS",
  "BS",
  "BCOM",
  "MS",
  "M. Phil.",
  "PhD"
];  
document.write("Available education qualifications in Pakistan:<br>");
for (var i = 0; i < educationQualifications.length; i++) {
  document.write((i + 1) + ") " + educationQualifications[i] + "<br>");
}

// Question: 8 Write a program to store 3 student names in an array.Take
//another array to store score of these three students.
//Assume that total marks are 500 for each student, display
//the scores & percentages of students like:

// Answer: 8;

var students = ["John", "Alice", "Bob"];
var scores = [450, 480, 400];
var totalMarks = 500;

document.write("<h2>Student Scores and Percentages</h2>");
for (var i = 0; i < students.length; i++) {
  var percentage = (scores[i] / totalMarks) * 100;
  document.write(students[i] + ": " + scores[i] + " marks, " + percentage.toFixed(2) + "%<br>");
}

// Question: 9 9. Initialize an array with color names. Display the array
//elements in your browser.
//a. Ask the user what color he/she wants to add to the
//beginning & add that color to the beginning of the array.
//Display the updated array in your browser.
//b. Ask the user what color he/she wants to add to the end
//& add that color to the end of the array. Display the
//updated array in your browser.
//c. Add two more color to the beginning of the array.
//Display the updated array in your browser.
//d. Delete the first color in the array. Display the updated
//array in your browser.
//e. Delete the last color in the array. Display the updated
//array in your browser.
//f. Ask the user at which index he/she wants to add a color
//& color name. Then add the color to desired
//position/index. . Display the updated array in your
//browser.
//g. Ask the user at which index he/she wants to delete
//color(s) & how many colors he/she wants to delete. Then
// remove the same number of color(s) from user-defined
//position/index. . Display the updated array in your
//browser.

// Answer: 9;
var colors = ["Red", "Green", "Blue", "Yellow"];
document.write("<h2>Original Colors Array:</h2>");
document.write(colors.join(", ") + "<br>");
// a. Add color to the beginning
var newColorBeginning = prompt("Enter a color to add to the beginning of the array:");
colors.unshift(newColorBeginning);
document.write("<h2>After Adding to Beginning:</h2>");
document.write(colors.join(", ") + "<br>");
// b. Add color to the end
var newColorEnd = prompt("Enter a color to add to the end of the array:");
colors.push(newColorEnd);
document.write("<h2>After Adding to End:</h2>");
document.write(colors.join(", ") + "<br>");
// c. Add two more colors to the beginning
var newColor1 = prompt("Enter the first color to add to the beginning of the array:");
var newColor2 = prompt("Enter the second color to add to the beginning of the array:");
colors.unshift(newColor1, newColor2);
document.write("<h2>After Adding Two More Colors to Beginning:</h2>");
document.write(colors.join(", ") + "<br>");
// d. Delete the first color
colors.shift();
document.write("<h2>After Deleting the First Color:</h2>");
document.write(colors.join(", ") + "<br>");
// e. Delete the last color
colors.pop();
document.write("<h2>After Deleting the Last Color:</h2>");
document.write(colors.join(", ") + "<br>");
// f. Add color at user-defined index
var indexToAdd = parseInt(prompt("At which index do you want to add a color?"));
  
var colorToAdd = prompt("Enter the color you want to add:");
if (indexToAdd >= 0 && indexToAdd <= colors.length) {
  colors.splice(indexToAdd, 0, colorToAdd);
  document.write("<h2>After Adding Color at Index " + indexToAdd + ":</h2>");
  document.write(colors.join(", ") + "<br>");
}
// g. Delete color(s) at user-defined index
var indexToDelete = parseInt(prompt("At which index do you want to delete color(s)?"));
var numberOfColorsToDelete = parseInt(prompt("How many colors do you want to delete?"));
if (indexToDelete >= 0 && indexToDelete < colors.length && numberOfColorsToDelete > 0) {
  colors.splice(indexToDelete, numberOfColorsToDelete);
  document.write("<h2>After Deleting " + numberOfColorsToDelete + " Color(s) at Index " + indexToDelete + ":</h2>");
  document.write(colors.join(", ") + "<br>");
}





