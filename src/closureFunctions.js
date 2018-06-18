// greetingFactory takes in an initial string that is stored and returns a function.
// The returned function should take in the name of the person to greet and return
// a complete greeting in the form of "{greeting}, {person}"

// EXAMPLE
// var helloGreeting = greetingFactory('Hello');
// helloGreeting('Sam'); // 'Hello, Sam'
// var holaGreeting = greetingFactory('Hola');
// holaGreeting('Shi-Hao'); // 'Hola, Shi-Hao'
 
//works
// var greetingFactory = function (greeting) {
//   // INSERT CODE HERE  
//   return function(name) {
//     return greeting + ', ' + name;
//   };
// };


var greetingFactory = function(greeting) {
  // INSERT CODE HERE  
  return name =>`${greeting}, ${name}`;
};
// sumCalculator takes in an initial number that is stored and returns a function
// that continues adding to the stored value. The function returned by
// sumCalculator should take as many numbers as passed in, sum them to the
// stored value, and return the new total

// EXAMPLE
// var calculatorOne = sumCalculator(25);
// var calculatorTwo = sumCalculator(10);

// calculatorOne(1, 3) // 29
// calculatorTwo() // 10
// calculatorOne(1, 1, 4, 5) // 40
// calculatorTwo() // 10

var sumCalculator = function(initialValue) {
  return function() {
    if (!initialValue) {
      return 0;
    }
    for (var i = 0; i < arguments.length; i++) {
      initialValue += arguments[i];
    }
    return initialValue;
  }
};

// coinFlipTally should generate a storage object, take no arguments, and 
// return another object with two methods, makeCoinFlip and checkTally. The returned 
// object should contain no other properties

// makeCoinFlip should make a 50/50 coin flip, adding to a tally, and returning 
// 'heads' or 'tails'.
// checkTally should return a storage object containing the coin flips.

// example storage object format:
// {
//   heads: 4,
//   tails: 2
// }

// EXAMPLE

// var gameTally = coinFlipTally();
// gameTally.makeCoinFlip(); // returns 'heads' or 'tails'
// gameTally.checkTally(); // should have updated count with heads added or tails added
// gameTally.makeCoinFlip();
// gameTally.checkTally(); // should have updated count with heads added or tails added
// gameTally.makeCoinFlip();
// gameTally.checkTally(); // should have updated count with heads added or tails added
// gameTally.makeCoinFlip();
// gameTally.checkTally(); // should have updated count with heads added or tails added

var coinFlipTally = function() {
  var tally = { heads:0, tails:0};
  //variable object
  makeCoinFlip = () => {
    //initialize variable to record random number 0 or 1;
    var coinFlipResult = Math.floor(Math.random() * 2) ? 'heads' : 'tails';
    tally[coinFlipResult]++;
    return coinFlipResult;      
  } 
  checkTally = () => {
    return tally;     
  };
  return {
    makeCoinFlip, checkTally
  };
};

var gameTally = coinFlipTally();
gameTally.makeCoinFlip(); // returns 'heads' or 'tails'
console.log(gameTally.checkTally()); // should have updated count with heads added or tails added
gameTally.makeCoinFlip();
console.log(gameTally.checkTally()); // should have updated count with heads added or tails added
gameTally.makeCoinFlip();
console.log(gameTally.checkTally()); // should have updated count with heads added or tails added
gameTally.makeCoinFlip();
console.log(gameTally.checkTally()); 


module.exports = {
  greetingFactory: greetingFactory,
  sumCalculator: sumCalculator,
  coinFlipTally: coinFlipTally
}