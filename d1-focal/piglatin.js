const args = process.argv;


const pitlatin = function(args) {
  let myString = '';
  for (let j = 2; j < args.length; j++){
    myString += pigstring(args[j]) + ' ';
  }
  return myString;
};

const pigstring = function(str) {
  let pigString = ''
  for (let i = 1; i < str.length; i++){
    pigString += str[i];
  }
  return pigString + str[0] + 'ay';
};

console.log(pitlatin(args));