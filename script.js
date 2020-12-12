// Assignment Code
var generateBtn = document.querySelector("#generate");

// Arrays
var lowercaseChar = "abcdefghijklmnopqrstuvwxyz";
var uppercaseChar = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var specialChar = "!@#$%^&*()_-+={}[];:'`~<,>.?/|";
var numberChar = "0123456789";
var passwordLength;
var passwordUppercase;
var passwordLowercase;
var passwordSpecial;
var passwordNumber;

// prompt confirming the length of password
function determineLength() {
  passwordLength = prompt("How many characters long would you like your password to be (between 8-128 characters");
}

if (passwordLength < 8) {
  alert("Password length must be between 8-128 characters");
  determineLength();
}
else if (passwordLength > 128) {
  alert("Passwoerd length must be between 8-128 characters")
}

//prompt for lower case
function determineLowercase() {
  passwordLowercase = prompt("Do you want to include lowercase letters in your password")
}
passwordLowercase = passwordLowercase.toUppercase();

if (passwordLowercase === null || passwordLowercase === "") {
  alert("Answer Yes or No");
  determineLowercase();
}
else if (passwordLowercase === "yes" || passwordLowercase === "y") {
  passwordLowercase = true;
  return passwordLowercase;
}
else {
  alert("Answer Yes or No");
  determineLowercase();
}
return passwordLowercase;
  








// Write password to the #password input
function writePassword() {
  var password1 = "";
  password1 = generatePassword();
  var passwordText = document.querySelector("#password");
  passwordText.value = password1;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
