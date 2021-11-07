// Assignment code here
const lowercase = "abcdefghijklmnopqrstuvwxyz";
const uppercase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const number = "123456789";
const character = "!@#$%^*&*()";

var passwordLower = false;
var passwordUpper = false;
var passwordNum = false;
var passwordCharacter = false;

var passwordLength = 0;

// Get references to the #generate element
function userInput() {
  while (true) {
    passwordLength = prompt("How long do you want your password to be? (Must be between 8 and 128 characters", 8);
    if ((passwordLength %1) != 0 || passwordLength < 8 || passwordLength > 128) {
      alert("Invalid input");
    }
    else {
    break;
    }
  }
  while (passwordLower == false && passwordUpper == false && passwordNum == false && passwordCharacter == false) {
    passwordLower = confirm("Would you like lowercase characters in your password?");
    passwordUpper = confirm("Would you like upper case characters in your password?");
    passwordNum = confirm("Would you like numbers to be included in your password?");
    passwordCharacter = confirm("Would you like your password to include special characters?");
    if (passwordLower == false && passwordUpper == false && passwordNum == false && passwordCharacter == false) {
        window.alert("Please choose at least one option.");
      }
    else {
    break;
    }
  } 
}

function createPassword() {
  var parameter = "";
  var pass = "";
  if (passwordLower) {
    parameter = parameter + lowercase;
  }
  if (passwordUpper) {
    parameter = parameter + uppercase;
  }
  if (passwordNum) {
    parameter = parameter + number;
  }
  if (passwordCharacter) {
    parameter = parameter + character;
  }
  for (i = 0; i < passwordLength; i++) {
     var newChar = Math.floor(Math.random() * parameter.length);
    pass = pass + parameter.charAt(newChar);
  }

  return pass;
}


var generateBtn = document.querySelector("#generate");
function generatePassword() {
  userInput();
  console.log(passwordLength)
  console.log(passwordLower)
  console.log(passwordUpper)
  console.log(passwordNum)
  console.log(passwordCharacter)

  var userPass = createPassword ();
  return userPass;
}

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);


// GIVEN I need a new, secure password
// WHEN I click the button to generate a password
// THEN I am presented with a series of prompts for password criteria
// WHEN prompted for password criteria
// THEN I select which criteria to include in the password
// WHEN prompted for the length of the password
// THEN I choose a length of at least 8 characters and no more than 128 characters
// WHEN asked for character types to include in the password
// THEN I confirm whether or not to include lowercase, uppercase, numeric, and/or special characters
// WHEN I answer each prompt
// THEN my input should be validated and at least one character type should be selected
// WHEN all prompts are answered
// THEN a password is generated that matches the selected criteria
// WHEN the password is generated
// THEN the password is either displayed in an alert or written to the page