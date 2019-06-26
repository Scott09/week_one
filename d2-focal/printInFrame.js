const printInFrame = function(list) {
  list = list.split(' ');
  const longest = longestStr(list).length;
  const border = repeat('*', longest);

  console.log(border + `****`);
  for (word of list) {
    console.log(`* ${word}${repeat(' ', longest - word.length + 1)}*`);
  }
  console.log(border + `****`);
}

const repeat = function(str, times) {
  let result = str;

  for (let i = 0; i < times; i++) {
    result += str;
  }

  return result;
}

// find longest str
const longestStr = function(list) {
  let longest = list[0];

  
  for (str of list) {
    if (str.length > longest.length){
      longest = str;
    }
    
  }

  return longest;
}

// Test driver code, do not modify
printInFrame('May the force be with you');
printInFrame('Here\'s Johnny!');
printInFrame('Supercalifragalisticexpialadocious');
printInFrame('Lost, like tears in the rain');