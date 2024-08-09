function double(arr) {
   return arr.map(function(val) {
     return val * 2;
   });
 }

 //Refactoring into ES2015
 //Option 1
function doubleES (arr){
   return arr.map((val) => val * 2);
}

//Option 2
const double = arr => arr.map(val => val *2);


//Replacing ALL functions with arrow functions
//Original
function squareAndFindEvens(numbers){
   var squares = numbers.map(function(num){
     return num ** 2;
   });
   var evens = squares.filter(function(square){
     return square % 2 === 0;
   });
   return evens;
 }

 //Refactored
 const squareAndFindEvens2 = numbers => {
   var squares = numbers.map(num => num **2);
   var evens = squares.filter(square => square % 2 === 0);
   return evens;
 }

 //Alternative
 const squareAndFindEvens3 = numbers => numbers.map(num => num ** 2).filter(square => square % 2 === 0);