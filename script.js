// Assignment Code
var generateBtn = document.querySelector("#generate");
var lowercaseChar = "abcdefghijklmnopqrstuvwxyz";
var uppercaseChar = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var specialChar = "!@#$%^&*()_-+={}[];:'`~<,>.?/|";
var numberChar = "0123456789";
var passwordLength;
var passwordUppercase;
var passwordSpecial;
var passwordNumber;

// prompt confirming the length of password
function determineLength() {
  passwordLength = prompt("How many characters long would you like your password to be (between 8-128 characters");


  if (passwordLength < 8) {
    alert("Password length must be between 8-128 characters");
    determineLength();
  }
  else if (passwordLength > 128) {
    alert("Passwoerd length must be between 8-128 characters");
    determineLength();
  }
  else if (isNaN(passwordLength)) {
    alert("Password length must be a between 8-128 characters");
    determineLength();
  }
  else {
    alert("The next screens will ask what type of characters  you would like to include in your password. If you choose 'no' for all, your password will only contain lowercase letters.");
  }
  return passwordLength;
}


//prompt for upper case
function determineUppercase() {
  passwordUppercase = prompt("Do you want to include uppercase letters in your password");
    

  if (passwordUppercase === null || passwordUppercase === "") {
    alert("Answer Yes or No");
    determineUppercase();
  }
  else if (passwordUppercase === "yes" || passwordUppercase === "y") {
    passwordUppercase = true;
    return passwordUppercase;
  }
  else if (passwordUppercase === "no" || passwordUppercase === "n") {
    passwordUppercase = false;
    return passwordUppercase;
  }
  else {
    alert("Answer Yes or No");
    determineUppercase();
  }
  return passwordUppercase;
}

//prompt to include numbers

function determineNumbers() {
  passwordNumber = prompt("Do you want to include numbers in your password");
    

  if (passwordNumber === null || passwordNumber === "") {
    alert("Answer Yes or No");
    determineNumber();
  }
  else if (passwordNumber === "yes" || passwordNumber === "y") {
    passwordNumber = true;
    return passwordNumber;
  }
  else if (passwordNumber === "no" || passwordNumber === "n") {
    passwordNumber = false;
    return passwordNumber;
  }
  else {
    alert("Answer Yes or No");
    determineNumber();
  }
  return passwordNumber;
}
//prompt for special characters
function determineSpecial() {
  passwordSpecial = prompt("Do you want to include special characters in your password");

  

  if (passwordSpecial === null || passwordSpecial === "") {
    alert("Answer Yes or No");
    determineSpecial();
  }
  else if (passwordSpecial === "yes" || passwordSpecial === "y") {
    passwordSpecial = true;
    return passwordSpecial;
  }
  else if (passwordSpecial === "no" || passwordSpecial === "n") {
    passwordSpecial = false;
    return passwordSpecial;
  }
  else {
    alert("Answer Yes or No");
    determineSpecial();
  }
  return passwordSpecial;
}

//function to generate password using random generator
function generatePassword() {
  determineLength();
  console.log(passwordLength);
  determineUppercase();  
  console.log(passwordUppercase);
  determineNumbers();
  console.log(passwordNumber);
  determineSpecial();
  console.log(passwordSpecial);

  var characters = lowercaseChar
  var password = "";
  if (passwordUppercase && passwordNumber && passwordSpecial) {
    characters += uppercaseChar + numberChar + specialChar;
  }
  else if (passwordUppercase && passwordNumber) {
    characters += uppercaseChar + numberChar;
  }
  else if (passwordNumber && passwordSpecial) {
    characters += numberChar + specialChar;
  }
  else if (passwordUppercase && passwordSpecial) {
    characters += uppercaseChar + specialChar;
  }
  else if (passwordUppercase) {
    characters += uppercaseChar;
  }
  else if (passwordNumber) {
    characters += numberChar;
  }
  else if (passwordSpecial) {
    characters += specialChar;
  }
  else {
    charaters += lowercaseChar;
  }
  for (var i = 0; i < passwordLength; i++) {
    password += characters.charAt(Math.floor(Math.random() * characters.length));
  }
  return password;
}


// Write password to the #password input
function writePassword() {
  var password1 = "";
  password1 = generatePassword();
  var passwordText = document.querySelector("#password");
  passwordText.value = password1;
}

// add event listener
generateBtn.addEventListener("click", writePassword);
