// Assignment code here
var lowercase = ["a","b","c","d","e","f", "g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];

// Get references to the #generate element
var generateBtn = document.querySelector("#generate");
function userInput() {
  var passwordLength = prompt("How long do you want your password to be?", 8);
  if (passwordLength<8) {alert("Choose a number bigger than 8"); return null};
  if (passwordLength>128) {alert("Choose a smaller number!"); return null };

  var passwordLower = confirm("Would you like lower case characters in your password?");
  if (confirm-passwordLower) {
    
  }
  else {

  }
  var passwordUpper = confrim("Would you like upper case characters in your password?");
  if (confirm-passwordUpper) {

  }
  else {

  }
  var passwordNum = confirm("Would you like numbers to be included in your password?");
  var passwordCharacter = confirm("Would you like your password to include special characters?");

  var inoutObj = {
    Length : passwordLength,
    Lower : passwordLower,
    Upper : passwordUpper,
    Num   : passwordNum,
    Character : passwordCharacter
  }
  return inoutObj;
}
function generatePassword() {
  var userInputs = userInput();
  console.log(userInputs.Length)
  console.log(userInputs.Lower)
  console.log(userInputs.Upper)
  console.log(userInputs.Num)
  console.log(userInputs.Character)
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