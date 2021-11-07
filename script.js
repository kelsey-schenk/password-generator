// Assignment code here
const lowercase = "abcdefghijklmnopqrstuvwxyz";
const uppercase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const number = "123456789";
const character = "!@#$%^*&*()";

// Get references to the #generate element
function userInput() {
  while (true) {
    var passwordLength = prompt("How long do you want your password to be? (Must be between 8 and 128 characters", 8);
    if ((passwordLength %1) != 0 || passwordLength < 8 || passwordLength > 128) {
      alert("Invalid input");
    } 
    else {
    break;
    }
  }
  var passwordLower = confirm("Would you like lower case characters in your password?");
  if (confirm-passwordLower) {
    const lowercase = lowercase[Math.floor(Math.random() * lowercase.length)];
    console.log(random, lowercase[random]);
  }

  var passwordUpper = confirm("Would you like upper case characters in your password?");
  if (confirm-passwordUpper) {
    const uppercase = uppercase[Math.floor(Math.random() * lowercase.length)];
  }

  var passwordNum = confirm("Would you like numbers to be included in your password?");
  if (confirm-passwordNum) {
    const number = number[Math.floor(Math.random() * number.length)];
  }
  var passwordCharacter = confirm("Would you like your password to include special characters?");
  if (confirm-passwordCharacter) {
    const character = character[Math.floor(Math.random() * character.length)];
  }

  var inoutObj = {
    Length : passwordLength,
    Lower : passwordLower,
    Upper : passwordUpper,
    Num   : passwordNum,
    Character : passwordCharacter,
  }
  return inoutObj;
}
var generateBtn = document.querySelector("#generate");
function generatePassword() {
  var userInputs = userInput();
  console.log(userInputs.Length)
  console.log(userInputs.Lower)
  console.log(userInputs.Upper)
  console.log(userInputs.Num)
  console.log(userInputs.Character)

  var length = userInput (passwordLength)

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