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
    while(parseInt(passwordLength) < 8
    || parseInt(passwordLength) > 128){
    passwordLength = prompt("You must have a min of 8 and a max of 128.  Please re-enter length of password");  
    }
  
  var password ="Your password is "
  var uselower= confirm("Click ok for lowercase letters?");
  if(uselower){
  var chars = LOWER;

    
  } 
  
  
  var password ="Your password is "
  var useupperCase = confirm("Click ok for uppercase letters?");
  if(useupperCase){
    var chars = chars + UPPER;
  
    

  } 
  var password ="Your password is "
  var usenumberChar = confirm("Click ok  for numbers?");
  console.log(usenumberChar)
  if(usenumberChar){
    var chars = chars + NUMBER;

    
  }  
   
  var password ="Your password is "
  var usespecialChar =  confirm("Click ok for  special characters?");
  if(usespecialChar){
    var chars = chars + SPECIAL;   

  } 
   
  for(var i = 0; i < passwordLength; i++){
    var random = Math.floor(Math.random() * chars.length);
    password = password + chars[random]; 
   
  }
  
  return password;
          
     
  }
  
generateBtn.addEventListener("click", writePassword);





   