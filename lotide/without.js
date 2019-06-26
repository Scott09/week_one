const eqArrays = (array1, array2) => {
  if (array1.length !== array2.length){
    return false;
  } else {
    for(let i = array1.length; i--;){
      if(array1[i] !== array2[i]){
        return false;
      }
    }
  }
  return true;
};


const assertArraysEqual = function(array1, array2){
  if (eqArrays(array1, array2)){
    console.log(`✅✅✅ Assertion Passed: ${array1} === ${array2}`)
  } else {
    console.log(`🛑🛑🛑 Assertion Failed: ${array1} !== ${array2}`)
  }
};


let without = function(array, unwanteditems) {
  let newArray = [];
  for (let i = 0; i < array.length; i++){
    if (!unwanteditems.includes(array[i])) {
      newArray.push(array[i]);
    }
  }
  return newArray;
};

console.log(without([1,2,3], [1,2]));
console.log(without([1,2,3,4,5], [1,5]));







