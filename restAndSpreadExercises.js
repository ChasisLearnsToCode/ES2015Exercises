//Original
function filterOutOdds() {
   var nums = Array.prototype.slice.call(arguments);
   return nums.filter(function(num) {
     return num % 2 === 0
   });
 }

 //Refactored
 function filterOutOdds2 (...nums){
   return nums.filter(function(number){
      return number % 2 === 0;
   });
 }
//Using arrow functions too
 function filterOutOdds3 (...nums){
   return nums.filter(num => num % 2 === 0);
 }

 //Using only arrow functions
 const filterOutOdds4 = (...nums) => nums.filter(num => num % 2 === 0);

 //findMin
 const findMin = (...nums) => Math.min(...nums);

 //mergeObjects
 let home = {
   greeting: 'welcome home!',
   location: '1332 Tullo RD, Martinsville'
 };
 let car = {
   type: 'Jeep',
   color: 'blue'
 };
 let car1 = 'hello';

const mergeObjects = (obj,obj2) => ({...obj,obj2});

//doubleAndReturnArgs
const doubleAndReturnArgs = (arr,...args) => [...arr, args.map(v => v * 2)];

//Slice and Dice!!!
/** remove a random element in the items array
and return a new array without that item. */

//TestArr
const testArray = [1.5,4,6,1,2,15,1332];

function removeRandom(items) {
   if (items.length === 0) return undefined; //Handles empty array
   let randomNumberIndex = Math.floor(Math.random() * items.length);
   return items.filter(item => item !== items[randomNumberIndex])
}

const strArr = ['today','tomorrow','yesterday','day after tomorrow'];
/** Return a new array with every item in array1 and array2. */
function extend(array1, array2) {
   return [...array1,...array2];
}

/** Return a new object with all the keys and values
from obj and a new key/value pair */
function addKeyVal(obj, key, val) {
   const newObj = {...obj, [key] : val};
   return newObj;
}

function addKeyVal2(obj, key, val) {
   let newObj = {...obj};
   newObj[key] = val;
   return newObj;
}


/** Return a new object with a key removed. */
function removeKey(obj, key) {
   const {[key]: _, ...newObj} = obj;
   return newObj;
}

/** Combine two objects and return a new object. */
function combine(obj1, obj2) {
   const combinedObj = {...obj1,...obj2};
   return combinedObj;
}

/** Return a new object with a modified key and value. */
function update(obj, key, val) {
   const newObj = {...obj, [key]: val};
   return newObj;
}
   
   