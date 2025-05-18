// Qustions: 01 Write a program that take two numbers & add them in a new variable. Show the result in your browser.

// Answer: 1

var num1 = 5;
var num2 = 10;
var sum = num1 + num2;
document.write("The sum of " + num1 + " and " + num2 + " is: " + sum);
   
// Qustions: 02 2. Repeat task1 for subtraction, multiplication, division & modulus.

// Answer: 2

var num1 = 20;
var num2 = 10;
var sum = num1 + num2;
var sub = num1 - num2;
var mul = num1 * num2;
var div = num1 / num2;
var mod = num1 % num2;
document.write('<br>'+"The sum of " + num1 + " and " + num2 + " is: " + sum + "<br>");
document.write("The subtraction of " + num1 + " and " + num2 + " is: " + sub + "<br>");
document.write("The multiplication of " + num1 + " and " + num2 + " is: " + mul + "<br>");
document.write("The division of " + num1 + " and " + num2 + " is: " + div + "<br>");
document.write("The modulus of " + num1 + " and " + num2 + " is: " + mod + "<br>");

// Qustions: 03. Do the following using JS Mathematic Expressions

//a. Declare a variable.
//b. Show the value of variable in your browser like “Value
//after variable declaration is: ??”.
//c. Initialize the variable with some number.
//d. Show the value of variable in your browser like “Initial
//value: 5”.
//e. Increment the variable.
//f. Show the value of variable in your browser like “Value
//after increment is: 6”.
//g. Add 7 to the variable.
//h. Show the value of variable in your browser like “Value
//after addition is: 13”.
//i. Decrement the variable.
//j. Show the value of variable in your browser like “Value
//after decrement is: 12”.
//k. Show the remainder after dividing the variable’s value
//by 3.
//l. Output : “The remainder is : 0”.
// Answer: 3

var num;
document.write('<br>'+"Value after variable declaration is: " + num + "<br>");
num = 5;
document.write("Initial value: " + num + "<br>");
num++;
document.write("Value after increment is: " + num + "<br>");
num += 7;
document.write("Value after addition is: " + num + "<br>");
num--;
document.write("Value after decrement is: " + num + "<br>");
var remainder = num % 3;
document.write("The remainder is: " + remainder + "<br>");

// Qustions: 04. Cost of one movie ticket is 600 PKR. Write a script to store
// ticket price in a variable & calculate the cost of buying 5 tickets
// to movie. Example output:
// “Total cost to buy 5 tickets to a movie is 3000 PKR”
// Answer: 4
var ticketPrice = 600;
var numberOfTickets = 5;
var totalCost = ticketPrice * numberOfTickets;
document.write('<br>'+"Total cost to buy " + numberOfTickets + " tickets to a movie is: " + totalCost + " PKR" + "<br>");


// Qustions: 06. The Temperature Converter: It’s hot out! Let’s make a converter
// that converts the temperature in Celsius to Fahrenheit and vice versa.
// The formula to convert Celsius to Fahrenheit is: F = (C × 9/5) + 32
// The formula to convert Fahrenheit to Celsius is: C = (F − 32) × 5/9
// Your script should ask for a temperature in Celsius, convert it to
// Fahrenheit, and display the result in a new window.
// Your script should ask for a temperature in Fahrenheit, convert it to
// Celsius, and display the result in a new window.
// Answer: 6
var celsius = prompt("Enter temperature in Celsius:");
var fahrenheit = (celsius * 9/5) + 32;
document.write('<br>' + celsius + "°C is " + fahrenheit + "°F" + "<br>");
var fahrenheit = prompt("Enter temperature in Fahrenheit:");
var celsius = (fahrenheit - 32) * 5/9;
document.write(fahrenheit + "°F is " + celsius + "°C" + "<br>");

// Qustions: 07. Write a program to implement checkout process of a shopping
// cart system for an e-commerce website. Store the following in
// variables:
// a. Price of item 1
// b. Price of item 2
// c. Ordered quantity of item 1
// d. Ordered quantity of item 2
// e. Shipping charges
// Compute the total cost & show the receipt in your browser.
// Example Output:
// “Price of item 1 is 650
// Quantity of item 1 is 3
// Price of item 2 is 100
// Quantity of item 2 is 7
// Shipping charges 100
// Total cost of your order is 2200”

// Answer: 7
var priceItem1 = 650;
var priceItem2 = 100;
var quantityItem1 = 3;
var quantityItem2 = 7;
var shippingCharges = 100;
var totalCost = (priceItem1 * quantityItem1) + (priceItem2 * quantityItem2) + shippingCharges;
document.write('<br>'+"Price of item 1 is: " + priceItem1 + "<br>");    
document.write("Quantity of item 1 is: " + quantityItem1 + "<br>");
document.write("Price of item 2 is: " + priceItem2 + "<br>");
document.write("Quantity of item 2 is: " + quantityItem2 + "<br>");
document.write("Shipping charges: " + shippingCharges + "<br>");
document.write("Total cost of your order is: " + totalCost + "<br>");

// Qustions: 08. Write a program to store student’s scores in 3 different
// subjects & calculate total, percentage & average.
// Total marks for each subject is 100, so total marks for 3 subjects is 300.
// Assume that student received 80, 70 and 90 marks in Math, English and
// Urdu respectively.
// Compute and show the total marks, percentage & average in your browser.
// Example Output:
// “Total marks: 300
// Marks obtained: 240
// Percentage: 80%
// Average: 80%”

// Answer: 8

var subject1 = "Math";
var subject2 = "English";
var subject3 = "Urdu";
var totalMarks = 300;
var marksObtained1 = 80;
var marksObtained2 = 70;
var marksObtained3 = 90;
var totalMarksObtained = marksObtained1 + marksObtained2 + marksObtained3;
var percentage = (totalMarksObtained / totalMarks) * 100;
var average = totalMarksObtained / 3;
document.write('<br>'+"Total marks: " + totalMarks + "<br>");
document.write("Marks obtained: " + totalMarksObtained + "<br>");
document.write("Percentage: " + percentage + "%" + "<br>");
document.write("Average: " + average + "%" + "<br>");

// Qustions: 09. Assume we have 10 US dollars & 25 Saudi Riyals. Write a
// script to convert the total currency to Pakistani Rupees.
// (Exchange rates : 1 US Dollar = 104.80 PKR and 1 Saudi Riyal = 28 PKR)
// Example Output:
// “Total currency in PKR: 10480 + 700 = 11180 PKR”

// Answer: 9

var usDollars = 10;
var saudiRiyals = 25;
var exchangeRateUSD = 104.80;
var exchangeRateSAR = 28;
var totalPKR = (usDollars * exchangeRateUSD) + (saudiRiyals * exchangeRateSAR);
document.write('<br>'+"Total currency in PKR: " + totalPKR + " PKR" + "<br>");












