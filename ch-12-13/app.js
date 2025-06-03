// Qusetion : 1 Write a program that takes a character (number or string)
//in a variable & checks whether the given input is a
//number, uppercase letter or lower case letter. (Hint: ASCII
//codes:- A=65, Z=90, a=97, z=122).

// Answer: 1;
var input = prompt("Enter a character (number or string):");
function checkCharacterType(char) {
    var asciiCode = char.charCodeAt(0);
    
    if (asciiCode >= 65 && asciiCode <= 90) {
        return "Uppercase letter";
    } else if (asciiCode >= 97 && asciiCode <= 122) {
        return "Lowercase letter";
    } else if (asciiCode >= 48 && asciiCode <= 57) {
        return "Number";
    } else {
        return "Special character or other";
    }
}

