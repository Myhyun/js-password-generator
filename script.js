// Assignment Code
var generateBtn = document.querySelector("#generate");


// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);


function generatePassword(){
  var userInput = prompt("Please input password length desired (8-128)");

  if (userInput < 8 || userInput > 128) {
    alert("Please input a number between 8 and 128")
  }

  else {
    confirm("Include Special characters?");
    confirm("Include Numbers?");
    confirm("Include Lowercase letters?");
    confirm("Include Uppercase letters?");
  }
  return "password"
}







var spCharsTrue = confirm
var numsTrue = confirm
var lowerTrue = confirm
var upperTrue = confirm

var spChars = ["!", "@", "#", "$", "%", "^", "&", "*",]
var numChars = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "0"]
var lowerChars = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"]
var upperChars = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"]
