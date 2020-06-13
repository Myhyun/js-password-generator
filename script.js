// Assignment Code
var generateBtn = document.querySelector("#generate");

var spChars = ["!", "@", "#", "$", "%", "^", "&", "*",]
var numChars = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "0"]
var lowerChars = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"]
var upperChars = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"]
var masterArray = []


// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

//function to generate the random password
function generatePassword() {
  var pwLength = prompt("Please input password length desired (8-128)");

  if (pwLength < 8 || pwLength > 128) {
    alert("Please input a number between 8 and 128")
  }

  else {
    var spCharsTrue = confirm("Include Special characters?");
    var numsTrue = confirm("Include Numbers?");
    var lowerTrue = confirm("Include Lowercase letters?");
    var upperTrue = confirm("Include Uppercase letters?");

    if (!spCharsTrue && !numsTrue && !lowerTrue && !upperTrue) {
      alert("Please allow at least 1 type of character requirement")
    }

    if (numsTrue) {
      masterArray.push(numChars)
    }

    if (spCharsTrue) {
      masterArray.push(spChars)
    }

    if (lowerTrue) {
      masterArray.push(lowerChars)
    }

    if (upperTrue) {
      masterArray.push(upperChars)
    }

    var possCharArray = masterArray.flat(4);

    possCharArray.join();

    console.log(possCharArray);


    function randomPassword(pwLength) {
      var randomGenPassword = "";
      for (var x = 0; x < pwLength; x++) {
        var i = Math.floor(Math.random() * possCharArray.length);
        randomGenPassword += possCharArray[i]
      }

      return randomGenPassword
    
    }

    return randomPassword(pwLength);

    //return the generated password

  }
}

