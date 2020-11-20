// Assignment Code
var generateBtn = document.querySelector("#generate");
var special = "!@#$%^&*";
var number = "0123456789";
var upper = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var lower = "abcdefghijklmnopqrstuvwxyz";


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
  passwordLength = prompt("You must have a minium of 8 and a maxium of 128.  Please re-enter length of password");  
   }
   
  var lower= confirm("Would you like lowercase letters?");
  if(lower){
    var password ="Your password is "
    var chars = passwordLength + lower;
  }


  var upper = confirm("Would you like uppercase letters?");
  if(upper){
  var chars = passwordLength + lower + upper;
  }

  var number = confirm("Would you like  numbers?");
  if(number){
    var chars = passwordLength + lower + upper + number;
  }
  
  var special =  confirm("Would you like  special characters?");
  if( special){
    var chars = passwordLength + lower + upper + number + special;
    
  }
   
  for(var i = 0; i < passwordLength; i++){
    var random = Math.floor(Math.random() * chars.length);
    password = password + chars[random]; 
    
  }
  
  return password;
          
     
  }
  
generateBtn.addEventListener("click", writePassword);





   