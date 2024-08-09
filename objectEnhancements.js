//Original
function createInstructor(firstName, lastName){
   return {
     firstName: firstName,
     lastName: lastName
   }
 }
//Refactored
function createInstructor2(firstName,lastName){
   return {
      firstName,
      lastName
   }
}

//Original
var favoriteNumber = 42;

var instructor = {
  firstName: "Colt"
}

instructor[favoriteNumber] = "That is my favorite!"

//Refactored
let favoriteNumber = 42;
const instructor = {
   firstName : 'Colt',
   [favoriteNumber] : 'That is my favorite!'
}

//Original
var instructor = {
   firstName: "Colt",
   sayHi: function(){
     return "Hi!";
   },
   sayBye: function(){
     return this.firstName + " says bye!";
   }
 }


//Refactored
const instructor = {
   firstName: 'Colt',
   sayHi () {
      return 'Hi!';
   },
   sayBye () {
      return this.firstName + " says bye!";
   }
};

//createAnimal function
function createAnimal (species,verb,noise){
   return {
      species,
      [verb] () {
         return noise;
      }
   }
}