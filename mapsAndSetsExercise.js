// 1) What does the following code return?
new Set([1,1,2,2,3,4]);//creates a new set and removes duplicates {1,2,3,4}

// 2) What does the following code return?
[...new Set("referee")].join("")// creates a new array with 'referee' and a space ' '

// 3) What does the following code return?
let m = new Map();
m.set([1,2,3], true);
m.set([1,2,3], false);

//returns a set with 2 key/value pairs reflecting the above

// 4) Write a function called hasDuplicate which accepts an array and returns true or false if that array contains a duplicate

const hasDuplicate = arr => new Set(arr).size !== arr.length;

// 5) Write a function called vowelCount which accepts a string and returns a map where the keys are numbers and the values are the count of the vowels in the string.

function isVowel (char){
   return 'aeiou'.includes(char);
}

function vowelCount(str){
   const vowelMap = new Map();
   for (let char of str){
      let lowerCaseChar = char.toLowerCase();
      if(isVowel(lowerCaseChar)){
         if(vowelMap.has(lowerCaseChar)){
            vowelMap.set(lowerCaseChar, vowelMap.get(lowerCaseChar) + 1);
         } else {
            vowelMap.set(lowerCaseChar, 1);
         }
      }
   }
   return vowelMap;
}