// Question : 1
// Answer : 1

// function showDtaeAndTime(){
//     var d = new Date();
//     console.log(d)
//     return d
// }
// showDtaeAndTime();

// Question : 2

// Answer : 2

// function greet( greet,fnmae, lname){
   
// return console.log(greet + " " + fnmae + " " + lname);
// }
// greet("Hello", "Huzaifa", "Malick")

// Question : 3

// Answer : 3

// function addNumbers(num1,opration, num2){
//     return num1 + num2;

// }

// var add = addNumbers(5, 10);
// console.log("The sum of the two numbers is: " + add);

// Question : 4
// Answer : 4
// function oprationParfrome(num1,opration, num2){
//     var rezult;
//     if (opration === "*") {
//         rezult = num1 * num2;
//     } else if (opration === "+") {
//         rezult = num1 + num2;
//     } else if (opration === "-") {
//         rezult = num1 - num2;
//     } else if (opration === "/") {
//         rezult = num1 / num2;
//     } else {
//         return "Invalid operation";
//     }
 
//     return rezult



//  }
// var add =  oprationParfrome(5, '*', 10);
// console.log(" Numbers is: " + add);

// Question : 5

// Answer : 5

// function squar(num){
//     return num*num;
// }
// var result = squar(50);
// console.log("The square of the number is: " + result);

// Question : 6
// Answer : 6
// function factorile(num) {
//     if (num === 0 || num === 1) {
//         return 1;
//     } else {
//         return num * factorile(num - 1);
//     }
// }
// var result = factorile(5);
// console.log("The factorial of the number is: " + result);

// Question : 7
// Answer : 7       

// function cunting(start, end) {
//     var count = [];
//     for (var i = start; i <= end; i++) {
//         count.push(i);
//     }
//     return count;
// }
// var result = cunting(1, 10);
// console.log("The counting from " + 1 + " to " + 10 + " is: " + result.join(", "));


// Question : 8

// Answer : 8

// function  calculateWithHeight(width, heigh){
//     return width * heigh;
// }
// var result = calculateWithHeight(10, 10);
// console.log("The area of the rectangle is: " + result);

// Question : 9

// Answer : 9

// function palindrome(str) {
//     var reversedStr = str.split("").reverse().join("");
//     if (str === reversedStr) {
//         console.log("The string is a palindrome.");
//         return true;
//     } else {
//         console.log("The string is not a palindrome.");
//         return false;
//     }
// }
// var result = palindrome("madam");
// console.log("The result is: " + result);


// Question : 10

// Answer : 10

var sentence = prompt("Enter a sentence");
var CapitializeString = ""; 
function CapitializeWord() {
    for(var i = 0; i < sentence.length; i++) {
      
        if (sentence[i - 1] == " "){
            CapitializeString += sentence[i].toUpperCase() 
        } else if (i === 0) {
            CapitializeString += sentence[i].toUpperCase() 
        } else {
            CapitializeString += sentence[i] 
        }
    }
}
var result = CapitializeWord();
console.log("The capitalized string is: " + CapitializeString);