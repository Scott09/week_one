let args = process.argv.slice(2);

let sum = function(args) {
    console.log('The sum of our first two command line arguments are ' + (parseInt(args[0]) + parseInt(args[1])));
};

sum(args);

