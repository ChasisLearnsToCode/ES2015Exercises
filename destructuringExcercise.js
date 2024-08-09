// 1)What does the following code return/print?
// let facts = {numPlanets: 8, yearNeptuneDiscovered: 1846};
// let {numPlanets, yearNeptuneDiscovered} = facts;

// console.log(numPlanets); // prints '8'
// console.log(yearNeptuneDiscovered); // prints '1846 

// 2) What does the following code return/print?
let planetFacts = {
   numPlanets: 8,
   yearNeptuneDiscovered: 1846,
   yearMarsDiscovered: 1659
 };
 
 let {numPlanets, ...discoveryYears} = planetFacts;
 
 console.log(discoveryYears); // Prints an object that includes yearNeptuneDiscovered and yearMarsDiscovered

 // 3) What does the following code return/print?
 function getUserData({firstName, favoriteColor="green"}){
   return `Your name is ${firstName} and you like ${favoriteColor}`;
 }
 
 getUserData({firstName: "Alejandro", favoriteColor: "purple"}) // prints 'Your name is Alejandro and you like purple
 getUserData({firstName: "Melissa"}) // prints 'Your name is Melissa and you like green
 getUserData({}) // prints 'Your name is undefined and you like green

  // 4) What does the following code return/print?
  let [first, second, third] = ["Maya", "Marisa", "Chi"];

   console.log(first); // prints "Maya"
   console.log(second); // prints "Marisa"
   console.log(third); // prints "Chi"

  // 5) What does the following code return/print?
  let [raindrops, whiskers, ...aFewOfMyFavoriteThings] = [
   "Raindrops on roses",
   "whiskers on kittens",
   "Bright copper kettles",
   "warm woolen mittens",
   "Brown paper packages tied up with strings"
 ]
 
   console.log(raindrops); // Prints "Raindrops on roses"
   console.log(whiskers); // Prints "whiskers on kittens"
   console.log(aFewOfMyFavoriteThings); // Prints an array that includes:
   // "Bright copper kettles",
   // "warm woolen mittens",
   // "Brown paper packages tied up with strings"

  // 6) What does the following code return/print?
  let numbers = [10, 20, 30];
   [numbers[1], numbers[2]] = [numbers[2], numbers[1]]

   console.log(numbers) // prints an array [10,30,20]


   //REFACTORING
   // 7) Original
   // var obj = {
   //    numbers: {
   //      a: 1,
   //      b: 2
   //    }
   //  };
    
   //  var a = obj.numbers.a;
   //  var b = obj.numbers.b;

    //Refactored
    let obj1 = {
      numbers: {
         a: 1,
         b: 2
      }
    }

   // const { numbers: {a= 1,b = 2}} = obj1;
   //OR
   const { numbers: {a,b}} = obj1;

   // 8) Original
   //Array Swap
   var arr = [1, 2];
   var temp = arr[0];
   arr[0] = arr[1];
   arr[1] = temp;

   //Refactored
   //One-Line Array Swap with Destructuring
   let arr1 = [1,2];
   [arr1[0],arr1[1]] = [arr1[1],arr1[0]]

   // 9) raceResults()

   //Refactored
   const raceResults = ['Tom', 'Margaret', 'Allison', 'David', 'Pierre'];

   //Function
   function raceResultsOption1 ([first,second,third,...rest]){
      return {
         first,
         second,
         third,
         rest
      };
   }

   //One-liner
   const raceResultsOption2 = ([first,second,third,...rest]) => ({first , second , third, rest});
