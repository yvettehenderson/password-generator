// Assignment Code
var generateBtn = document.querySelector("#generate");

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

  confirm("Would you like lowercase letters?");


  confirm("Would you like uppercase letters?");


  confirm("Would you like  numbers?");
  
  confirm("Would you like  special characters?");
    
      

  function generatePassword(passwordLength){
    
    var numberChars = "0123456789";
    var upperChars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    var lowerChars = "abcdefghijklmnopqrstuvwxyz";
    var specialChars = "!@#$%^&*"
    var allChars = numberChars + upperChars + lowerChars + specialChars;
    var randPasswordArray = Array(passwordLength);
    randPasswordArray[0] = numberChars;
    randPasswordArray[1] = upperChars;
    randPasswordArray[2] = lowerChars;
    randPasswordArray[3] = specialChars;
    randPasswordArray = randPasswordArray.fill(allChars, 4);
     return shuffleArray(randPasswordArray.map(function(x) { return x[Math.floor(Math.random() * x.length)] })).join('');
  }
      
      function shuffleArray(array) {
        for (var i = array.length - 1; i > 0; i--) {
          var j = Math.floor(Math.random() * (i + 1));
          var temp = array[i];
          array[i] = array[j];
          array[j] = temp;
        }
        return array;
       
      }
       alert(generatePassword(12))
        
     
  }
  
generateBtn.addEventListener("click", writePassword);





   