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


const without = function(array, unwanteditems) {
  let array1 = array.slice(0);
  for (let j = 0; j < array1.length; j++){
    if (unwanteditems.includes(array1[j])){
      array1.splice(j, 1);
    }
  }
  // make sure initial array was not changed
  console.log(array);
  // return new array without unwanted items
  return array1;
};

console.log(without([1,2,3], [1]));
console.log(without(["1", "2", "3"], [1, 2, "3"]));
// TEST CASES USING assertArraysEqual function
assertArraysEqual([2,3], without([1,2,3], [1]));
assertArraysEqual([1,3,5], without([1,3,5,7], [7]));
