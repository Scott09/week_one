const passwordarg = process.argv[2];

const password = function(password) {
  for (let j = 0; j < password.length; j++) {
    if (password[j] === "a"){
      password[j] = "4";
    } else if (password[j] === "e") {
      password[j] = "3";
    } else if (password[j] === "o") {
      password[j] = "0";
    } else if (password[j] === "l") {
      password[j] = "1";
    }
  }
  return password;
};


console.log(password(passwordarg));