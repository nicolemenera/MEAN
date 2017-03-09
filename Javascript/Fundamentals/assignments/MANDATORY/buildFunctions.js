// PROBLEM 1
// Basic: Make a function that can be used anywhere in your file and that when 
// invoked will console.log('I am running!'); 
// Give it the name runningLogger.

function runningLogger() {
  console.log('I am running!');
}
runningLogger();



// PROBLEM 2
// Basic: Make a function that is callable, has one parameter and multiplies the 
// value of the parameter by 10 before returning the result. Give it the name 
// multiplyByTen. Invoke it, passing it the argument 5.

function multiplyByTen(num) {
  return num * 10;
}
console.log(multiplyByTen(5));



// PROBLEM 3
// Basic: Write two functions (stringReturnOne and stringReturnTwo) that each return 
// a different hard-coded string

function stringReturnOne() {
  return "I am string one"
}
console.log(stringReturnOne());

function stringReturnTwo() {
  return "I am string two"
}
console.log(stringReturnTwo());



// PROBLEM 4
// Medium: Write a function named caller that has one parameter. If the argument provided
// to caller is a function (typeof may be useful), invoke the argument. Nothing is returned.

// function caller() {
  
// }


function caller(someParam) {
  if (typeof someParam === "function") {
    someParam();
  }
}
caller(random);

function random() {
  console.log("Hey there! I'm a function!");
}



// PROBLEM 5
// Medium: Write a function named myDoubleConsoleLog that has two parameters, if the arguments 
// passed to the function are functions, console.log the value that each, when invoked, returns.

function myDoubleConsoleLog(paramA, paramB){
  if (typeof paramA === "function") {
    console.log(paramA());
  }
  if (typeof paramB === "function") {
    console.log(paramB());
  }
}
function returnFive(){
  return 5;
}
function returnHello(){
  return "Hello";
}
myDoubleConsoleLog(function(){
  console.log("What's up?!")
  return "Nothing Much!"
}, function(){
  return 5
})



// PROBLEM 6
// Hard: Write a function named caller2 that has one parameter. Have it console.log the string 
// 'starting', wait 2 seconds, and then invokes the argument if the argument is a function. 
// (setTimeout may be useful for this one.) The function should then console.log ‘ending?’ and 
// return “interesting”. Invoke this function by passing it myDoubleConsoleLog.

function caller2(paramC){
  console.log("Starting...")
  setTimeout(function(){
    if (typeof paramC === "function") {
      console.log("About to invoke a function!")
      paramC(returnFive, returnHello);
    }
  }, 2000);
  console.log("Ending?")
  return "Interesting..";
}
console.log(caller2(myDoubleConsoleLog));
