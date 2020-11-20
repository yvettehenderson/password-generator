// Assignment Code
var generateBtn = document.querySelector("#generate");
var SPECIAL = "!@#$%^&*";
var NUMBER = "0123456789";
var UPPER = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var LOWER = "abcdefghijklmnopqrstuvwxyz";


  console.log(generateBtn);
  

// Write password to the #password input
  function writePassword() {
  var password = generatePassword();
  // var password= "word"
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

  function generatePassword(){
  var passwordLength = prompt("How many characters would you like your password to be?");
  console.log(passwordLength);
   while(parseInt(passwordLength) < 8
  || parseInt(passwordLength) > 128){
  passwordLength = prompt("You must have a min of 8 and a max of 128.  Please re-enter length of password");  
   }
   
  var uselower= confirm("Would you like lowercase letters?");
  if(uselower){
    var password ="Your password is "
    var chars = passwordLength + LOWER;
  }


  var useupperCase = confirm("Would you like uppercase letters?");
  if(useupperCase){
  var chars = passwordLength + LOWER + UPPER;
  }

  var usenumberChar = confirm("Would you like  numbers?");
  if(usenumberChar){
    var chars = passwordLength + LOWER + UPPER + NUMBER;
  }
  
  var usespecialChar =  confirm("Would you like  special characters?");
  if(usespecialChar){
    var chars = passwordLength + LOWER + UPPER + NUMBER + SPECIAL;
    
  }
   
  for(var i = 0; i < passwordLength; i++){
    var random = Math.floor(Math.random() * chars.length);
    password = password + chars[random]; 
   
  }
  
  return password;
          
     
  }
  
generateBtn.addEventListener("click", writePassword);





   