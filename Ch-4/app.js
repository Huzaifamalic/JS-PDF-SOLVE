// Qustions: 01 Declare 3 variables in one statement.

// Answer:01
var a = 1, b = 2, c = 3;
// Qustions: 02 Declare 5 legal & 5 illegal variable names.

// Answer:02
var legalVar1 = "legal1";
var legalVar2 = "legal2";   
var legalVar3 = "legal3";
var legalVar4 = "legal4";
var legalVar5 = "legal5";
// illegal variable names

// var 1illegalVar = "illegal1"; // cannot start with a number
// var illegal-Var = "illegal2"; // cannot contain hyphen
// var illegal Var = "illegal3"; // cannot contain spaces
// var illegal@Var = "illegal4"; // cannot contain special characters
// var illegal$Var = "illegal5"; // cannot start with a special character


// Qustions: 03 Declare 3 variables of different types & print them in console.
//a) A heading stating “Rules for naming JS variables”
//b) Variable names can only contain ______, ______,
//______ and ______.
//For example $my_1stVariable
//c) Variables must begin with a ______, ______ or
//_____. For example $name, _name or name
//d) Variable names are case _________
//e) Variable names should not be JS _________

// Answer:03
var stringVar = "Hello, World!";
var numberVar = 42; 
var booleanVar = true;
console.log("Rules for naming JS variables");
console.log("Variable names can only contain letters, numbers, underscores, and dollar signs.");    
console.log("For example: $my_1stVariable");
console.log("Variables must begin with a letter, underscore, or dollar sign. For example: $name, _name, or name");
console.log("Variable names are case sensitive.");
console.log("Variable names should not be JS keywords.");
console.log(stringVar); // Output: Hello, World!
console.log(numberVar); // Output: 42

console.log(booleanVar); // Output: true

document.write("Rules for naming JS variables<br>");
document.write("Variable names can only contain letters, numbers, underscores, and dollar signs.<br>");
document.write("For example: $my_1stVariable<br>");
document.write("Variables must begin with a letter, underscore, or dollar sign. For example: $name, _name, or name<br>");
document.write("Variable names are case sensitive.<br>");
document.write("Variable names should not be JS keywords.<br>");
document.write(stringVar + "<br>"); // Output: Hello, World!
document.write(numberVar + "<br>"); // Output: 42
document.write(booleanVar + "<br>"); // Output: true
