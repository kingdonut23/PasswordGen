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

  writePassword()
}

function generatePassword() {
  var passwordLength = prompt("How long would you like your password to be?");
  var passwordSpecial = confirm("Would you like your password to contain special characters? Okay for 'YES' Cancel of 'No'");
  var passwordcase = confirm("Would you like the password to have capital letter? Okay for 'YES' Cancel of 'No'")

  if (passwordSpecial === true && passwordcase === true) {
    var length = passwordLength,
      charset = charsetalt2
    passwordText = "";
    for (var i = 0, n = charset.length; i < length; ++i) {
      passwordText += charset.charAt(Math.floor(Math.random() * n));

    }
    return passwordText;
  }
  else if (passwordSpecial === false && passwordcase === true) {
    var length = passwordLength,
      charset = charset1
    passwordText = "";
    for (var i = 0, n = charset.length; i < length; ++i) {
      passwordText += charset.charAt(Math.floor(Math.random() * n));

    }
    return passwordText;
  }
  else if (passwordSpecial === false && passwordcase === false) {
    var length = passwordLength,
      charset = charsetalt
    passwordText = "";
    for (var i = 0, n = charset.length; i < length; ++i) {
      passwordText += charset.charAt(Math.floor(Math.random() * n));
    }
    return passwordText;
  }
  else if (passwordSpecial === true && passwordcase === false) {
    var length = passwordLength,
      charset = charsetalt3
    passwordText = "";
    for (var i = 0, n = charset.length; i < length; ++i) {
      passwordText += charset.charAt(Math.floor(Math.random() * n));
    }
    return passwordText;
  }
}
generatePassword()


// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
