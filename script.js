// Assignment Code
var generateBtn = document.querySelector("#generate");


// Write password to the #password input

var charset1 = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";
var charsetalt = "abcdefghijklmnopqrstuvwxyz0123456789";
var charsetalt2 = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%^&*/?";
var charsetalt3 = "abcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*/?";

function writePassword() {

  var password = generatePassword();
  var passwordText = document.querySelector("#password");


  passwordText.value = password;

}

function generatePassword() {
  var passwordLength = prompt("How long would you like your password to be?");
  alert("You want your password to be " + passwordLength, "characters")
  var passwordSpecial = confirm("Would you like your password to contain special characters? Okay for 'YES' Cancel of 'No'"); {
    if (passwordSpecial === true) {
      alert("You want the password to have special characters");
    }
    else if (passwordSpecial === false) {
      alert("You want the password to not have special characters");
    }
  }
  var passwordCase = confirm("Would you like the password to have Uppercase letters? Okay for 'YES' Cancel of 'No'"); {
    if (passwordCase === true) {
      alert("You want the password to have Uppercase letters");
    }
    else if (passwordCase === false) {
      alert("You want the password to not have Uppercase letters");
    }
    console.log("Password length: " +passwordLength);
    console.log("Special characters: " +passwordSpecial);
    console.log("Uppercase letters: " +passwordCase);

  }

  if (passwordSpecial === true && passwordCase === true) {
    var length = passwordLength,
      charset = charsetalt2
    passwordText = "";
    for (var i = 0, n = charset.length; i < length; ++i) {
      passwordText += charset.charAt(Math.floor(Math.random() * n));

    }
    return passwordText;
  }
  else if (passwordSpecial === false && passwordCase === true) {
    var length = passwordLength,
      charset = charset1
    passwordText = "";
    for (var i = 0, n = charset.length; i < length; ++i) {
      passwordText += charset.charAt(Math.floor(Math.random() * n));

    }
    return passwordText;
  }
  else if (passwordSpecial === false && passwordCase === false) {
    var length = passwordLength,
      charset = charsetalt
    passwordText = "";
    for (var i = 0, n = charset.length; i < length; ++i) {
      passwordText += charset.charAt(Math.floor(Math.random() * n));
    }
    return passwordText;
  }
  else if (passwordSpecial === true && passwordCase === false) {
    var length = passwordLength,
      charset = charsetalt3
    passwordText = "";
    for (var i = 0, n = charset.length; i < length; ++i) {
      passwordText += charset.charAt(Math.floor(Math.random() * n));
    }
    return passwordText;
  }
}



// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
