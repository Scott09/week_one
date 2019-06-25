const passwordarg = process.argv[2];

const obfuscate = function(password) {
  let passwordArray = password.split('');
  for (let i = 0; i < passwordArray.length; i++){
    if (passwordArray[i] === "a"){
      passwordArray[i] = "4"; 
    } else if (passwordArray[i] === "e"){
      passwordArray[i] = "3";
    } else if (passwordArray[i] === "o"){
      passwordArray[i] = "0";
    } else if (passwordArray[i] === "l"){
      passwordArray[i] = "1";
    }
  }
  let mypasswordString = passwordArray.join('');
  return mypasswordString;
};


console.log(obfuscate(passwordarg));