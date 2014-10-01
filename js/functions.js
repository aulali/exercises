// var slap = function () {
//   alert('SLAP');
// };
// slap();

// var kick = function (name) {
//   alert(name + ' reproaches your behavior.');
// };
// kick('Billy');

// var doubleIt = function (x) {
//   var X = 2*x;
//   alert(x + ' times two is ' + X);
// };
// doubleIt(8);

// var greet = function (name) {
//   alert("Welcome, " + name);
// };
// greet('Bob');

// var yell = function (thing) {
//   var yelledThing = thing.toUpperCase();
//   alert(yelledThing + "!!!");
// };
// yell('hi');

// var divideBy = function(x,y){
//   var result = x/y;
//   return result;
// }

// var result = divideBy(50, 2);
// console.log('Result should be 25:', result);

// result = divideBy(40, 10);
// console.log('Result should be 4:', result);

// result = divideBy(99, 3);
// console.log('Result should be 33:', result);

/**
 * Exercise 2 Part 1: ofAge
**/

// Write a function named `ofAge` that:
    // takes 1 argument: age.
    // calculate if that age is 21 or above.
    // Output true or false based on if the age is above age

var ofAge = function(age){
  legalDrinkingAge = 21;
  if (age >= legalDrinkingAge){
    return true;
  } else {
    return false;
  }
}

// console.assert(ofAge(21) === true);
// console.assert(ofAge(22) === true);
// console.assert(ofAge(18) === false);
// console.assert(ofAge(0) === false);
// console.assert(ofAge(-2) === false);

/**
 * Exercise 2 Part 2: getAge
**/

    function calculateAge(birthMonth, birthDay, birthYear) {

        // Get Todays Date
        var todayDate = new Date(),
            todayYear = todayDate.getFullYear(),
            todayMonth = todayDate.getMonth(),
            todayDay = todayDate.getDate();

        // Calculate Age
        var age = todayYear - birthYear;

        // Check month discrepancies
        if (todayMonth < (birthMonth - 1)) {
            age--;
        }

        // Check day discrepancies
        if (((birthMonth - 1) == todayMonth) && (todayDay < birthDay)) {
            age--;
        }

        // @return {Number} age
        return age;
    }

// console.assert(calculateAge(8, 4, 1982) === 32);
// console.assert(calculateAge(9, 30, 1982) === 32);

/**
 * Exercise 2 Part 3: checkOfAge
**/

// Write a function named `checkOfAge` that:
    // takes 3 arguments: month, day, year.
    // Use the getAge function to calculate the age.
    // calculate if that age is 21 or above.
    // Output true or false based on if the age is above age

 var checkOfAge = function(birthMonth, birthDay, birthYear) {
   var age = calculateAge(birthMonth, birthDay, birthYear);
   var isOfAge = ofAge(age);
   return isOfAge;
 }

console.assert(checkOfAge(12,01,1988) === true);
console.assert(checkOfAge(1,1,1993) === true);
console.assert(checkOfAge(1,1,2001) === false);