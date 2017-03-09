// ***Turn the following problems from JS Fundamentals Part I into functions that take variable inputs***

// Problem 1:
// Create a simple for loop that sums all the integers between x and y (inclusive). Have it 
// console log the final sum.

function sumXY(x, y) {
  var sum = 0;
  for (var i = x; i <= y; i++) {
    sum += i;
  }
  console.log(sum)
}

sumXY(3,12);

// Problem 2:
// Write a loop that will go through an array, find the minimum value, 
// and then return it.

function returnMin(arr) {
  var min = arr[0];
  for (var i = 1; i < arr.length; i++) {
    if ( arr[i] < min ) {
      console.log(`Replacing min with ${arr[i]}`);
      min = arr[i];
    }
  }
  console.log(min);
}
returnMin([16,15,9,12]);



// Problem 3:
// Write a loop that will go through an array, find the average of all of the
// values, and then return it.

function average(randomarr) {
  var sum = randomarr[0];
  for (var i = 1; i < randomarr.length; i++) {
    sum += randomarr[i];
  }
  return sum/randomarr.length;
}
console.log(average([9,12,6,20]));



// Problem 4:
// Rewrite these 3 as anonymous functions assigned to variables.

var sumXY = function (x, y) {
  var sum = 0;
  for (var i = x; i <= y; i++) {
    sum += i;
  }
  return sum;
}
console.log(sumXY(3,12));


var returnMin = function (arr) {
  var min = arr[0];
  for (var i = 1; i < arr.length; i++) {
    if ( arr[i] < min ) {
      console.log(`Replacing min with ${arr[i]}`);
      min = arr[i];
    }
  }
  return min;
}
console.log(returnMin([16,15,9,12]));


var average = function (randomarr) {
  var sum = randomarr[0];
  for (var i = 1; i < randomarr.length; i++) {
    sum += randomarr[i];
  }
  return sum/randomarr.length;
}
console.log(average([9,12,6,20]));



// Problem 5:
// Rewrite these as methods of an 

var myCrazyObject = {
  sumXY : function (x, y) {
    var sum = 0;
    for (var i = x; i <= y; i++) {
      sum += i;
    }
    return sum;
  },
  returnMin : function (arr) {
    var min = arr[0];
    for (var i = 1; i < arr.length; i++) {
      if ( arr[i] < min ) {
        console.log(`Replacing min with ${arr[i]}`);
        min = arr[i];
      }
    }
    return min;
  },
    average : function (randomarr) {
    var sum = randomarr[0];
    for (var i = 1; i < randomarr.length; i++) {
      sum += randomarr[i];
    }
    return sum/randomarr.length;
  }
}

console.log(myCrazyObject.sumXY(0,2));




// Create a JavaScript object called person with the following properties/methods
// ***Properties***
// name - set this as your own name           distance_traveled - set this initially as zero
// ***Methods***
// say_name - should alert the object’s name property
// say_something - have it accept a parameter. This function should then say for example 
// “{{your name}} says ‘I am cool’” if you pass ‘I am cool’ as an argument to this method.
// walk - have it alert for example “{{your name}} is walking” and increase distance_traveled by 3
// run - have it alert for example “{{your name}} is running” and increase distance_traveled by 10
// crawl - have it alert for example “{{your name}} is crawling” and increase distance_traveled by 1

var person = {
  name: "Nikki",
  distance_traveled : 0,
  say_name : function(){
    console.log(person.name);
  },
  say_something : function(phrase){
    console.log(`${person.name} says: ${phrase}`);
  },
  walk : function(){
    console.log(`${person.name} is walking!`);
    person.distance_traveled += 3;
    return person;
  },
  run : function(){
    console.log(`${person.name} is running!`);
    person.distance_traveled += 10;
    return person;
  },
  crawling : function(){
    console.log(`${person.name} is crawling!`);
    person.distance_traveled += 1;
    return person;
  }
}
console.log(person.distance_traveled)
person.walk().run().crawling().run().walk();
console.log(person.distance_traveled);
