const input = process.argv[2];

const diceRoll = function(numrolls) {
  let rollArray = [];
  for (let i = 0; i < numrolls; i++) {
    rollArray.push(Math.floor( Math.random() * 6 ) + 1)
  }
  return `You rolled ${numrolls} dice: ${rollArray.join(', ')}`
};

console.log(diceRoll(input));