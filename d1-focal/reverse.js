let args = process.argv;


let reverse = function(args){
  for (let j = 2; j < args.length; j++) {
    console.log(reverseString(args[j]));
  }
}

// HELPER FUNCTION TO REVERSE EACH ARG STRING
let reverseString = function(str){
  let myString = '';
  for (let i = str.length - 1; i >= 0; i--) {
    myString += str[i];
  }
  return myString;
};

reverse(args);
