// Concept of this keyword

// The “this” keyword refers to the object that the function is a property of.

// The value of “this” keyword will always depend on the object that is invoking the function.

function doSomething() {
  console.log(this);
}
        
doSomething();


// rest parameter
// It provides an improved way of handling parameters of a function.

// Using the rest parameter syntax, we can create functions that can take a variable number of arguments.

// Any number of arguments will be converted into an array using the rest parameter.

// It also helps in extracting all or some parts of the arguments.

// Rest parameter can be used by applying three dots (...) before the parameters.


// function extractingArgs(...args){
//     return args[1];
//   }
//   // extractingArgs(8,9,1); // Returns 9
//   function addAllArgs(...args){
//     let sumOfArgs = 0;
//     let i = 0;
//     while(i < args.length){
//       sumOfArgs += args[i];
//       i++;
//     }
//     return sumOfArgs;
//   }
// console.log(addAllArgs(6, 5, 7, 99))
// console.log(addAllArgs(1, 3, 4))



// function sum(...inp){
//     let t=0
//     for(let i of inp){
//         t=t+i
//     }
//     console.log(t)
// }
// sum(1,2,3,4,5,6,7,8,9,10)



let func=function(...args){
  console.log(args)
}
func(3)
func(4,5,6)




// spread operators
// Although the syntax of spread operator is exactly the same as the rest parameter, spread operator is used to 
// spread an array, and object literals. We also use spread operators where one or more arguments are expected
// in a function call.


// let array1 = [3, 4, 5, 6];
// let clonedArray1 = [...array1];
// // Spreads the array into 3,4,5,6
// console.log(clonedArray1); // Outputs [3,4,5,6]


// let obj1 = {x:'Hello', y:'Bye'};
// let clonedObj1 = {...obj1}; // Spreads and clones obj1
// console.log(obj1);

// let obj2 = {z:'Yes', a:'No'};
// let mergedObj = {...obj1, ...obj2}; // Spreads both the objects and merges it
// console.log(mergedObj);
// // Outputs {x:'Hello', y:'Bye',z:'Yes',a:'No'};





const v=["my","name","is","shivani"]
console.log(...v)
// console.log(v)



const a=["one","two"]
const b=[...a,"three","four","five"]
console.log(b)





// dectructing

// Object destructuring is a new way to extract elements from an object or an array.

const classDetails = {
  strength: 78,
  benches: 39,
  blackBoard:1
}

const {strength:classStrength, benches:classBenches,blackBoard:classBlackBoard} = classDetails;

console.log(classStrength); // Outputs 78
console.log(classBenches); // Outputs 39
console.log(classBlackBoard); // Outputs 1




// filter

//  the filter method creates a new arry with all element that pass the provided function

const l=["4",5,6.0,"shivi",4,3,2,1]
const n=l.filter((s)=>{
    if(typeof(s)=="string"){
        return s
    }
})

console.log(n)


// Reduce

// the reduce method exicutes the reduce function for arry elements. the reduce method reduce a single value. 

const message = ["JavaScript ", "is ", "fun."];

// function to join each string elements
function joinStrings(accumulator, currentValue) {
  return accumulator + currentValue;
}

// reduce join each element of the string
let joinedString = message.reduce(joinStrings);
console.log(joinedString);

// Output: JavaScript is fun.



const msg = [1,2,3,4];

// function to join each string elements
function joinStrings(ac, cu) {
  return ac + cu;
}

// reduce join each element of the string
let joine = msg.reduce(joinStrings);
console.log(joine);

// Output: 10



// map
// map is collection of element where each element as key values pairs map object can hold both object 
// and primitive as ether key value/ it's similer to object [key value]


let numbers = [2, 4, 6, 8, 10];

// function to return the square of a number
function square(number) {
  return number * number;
}

// apply square() function to each item of the numbers list
let square_numbers = numbers.map(square);
console.log(square_numbers);

// Output: [ 4, 16, 36, 64, 100 ]




// class

// class are a templeate it's create a new object

class Car {
    constructor(name, year) {
      this.name = name;
      this.year = year;
    }
  }


herry=new Car("shivi","2022")
console.log(herry)



// callbacks

// Functions that are used as an argument to another function are called callback functions.

function divideByHalf(sum){
    console.log(Math.floor(sum / 2));
  }
  
  function multiplyBy2(sum){
    console.log(sum * 2);
  }
  
  function operationOnSum(num1,num2,operation){
    var sum = num1 + num2;
    operation(sum);
  }
  
  operationOnSum(3, 3, divideByHalf); // Outputs 3
  
  operationOnSum(5, 5, multiplyBy2); // Outputs 20

  
// callback hell

// means that you have multiple function that are asynchronous those function are depended on each other 
// and this things create a error






// promises
// Promises are used to handle asynchronous operations in javascript.

// Before promises, callbacks were used to handle asynchronous operations. But due to limited functionality of callback,
// using multiple callbacks to handle asynchronous code can lead to unmanageable code.

// Promise object has four states -

// Pending - Initial state of promise. This state represents that the promise has neither been fulfilled nor been rejected, it is in the pending state.
// Fulfilled - This state represents that the promise has been fulfilled, meaning the async operation is completed.
// Rejected - This state represents that the promise has been rejected for some reason, meaning the async operation has failed.
// Settled - This state represents that the promise has been either rejected or fulfilled.

function sumOfThreeElements(...elements){
    return new Promise((resolve,reject)=>{
      if(elements.length > 3 ){
        reject("Only three elements or less are allowed");
      }
      else{
        let sum = 0;
        let i = 0;
        while(i < elements.length){
          sum += elements[i];
          i++;
        }
        resolve("Sum has been calculated: "+sum);
      }
    })
  }
  sumOfThreeElements(4, 5, 6)
  .then(result=> console.log(result))
  .catch(error=> console.log(error));
  // In the code above, the promise is fulfilled so the then() method gets executed
  
  sumOfThreeElements(7, 0, 33, 41)
  .then(result => console.log(result))
  .catch(error=> console.log(error));
  // In the code above, the promise is rejected hence the catch() method gets executed

  



//   Async and await
// there is a special syntax to work with promise in a more comfortable fashion called "asyncwait" it's 
// surprisingly easy to understand and use 



async function f(){
    let promise=new promise((resolve,reject)=>{
        setTimeout(()=>resolve())
    },1000)
    let result=await promise;
    console.log(result)
}

f()




// a promise
let promise = new Promise(function (resolve, reject) {
    setTimeout(function () {
    resolve('Promise resolved')}, 4000); 
});

// async function
async function asyncFunc() {

    // wait until the promise resolves 
    let result = await promise; 

    console.log(result);
    console.log('hello');
}

// calling the async function
asyncFunc();



// Difference between bind, apply, and call

// bind()

// This method returns a new function, where the value of “this” keyword will be bound to the owner object, which is provided as a parameter.

// Example with arguments:

var bikeDetails = { 
    displayDetails: function(registrationNumber,brandName){
    return this.name+ " , "+ "bike details: "+ registrationNumber + " , " + brandName;
  }
}
        
var person1 = {name:  "Vivek"};
        
var detailsOfPerson1 = bikeDetails.displayDetails.bind(person1, "TS0122", "Bullet");
        
// Binds the displayDetails function to the person1 object
        
        
detailsOfPerson1();
// Returns Vivek, bike details: TS0452, Thunderbird




// call()

// It’s a predefined method in javascript.

// This method invokes a method (function) by specifying the owner object.


function sayHello(){
  return "Hello " + this.name;
}
        
var obj = {name: "Sandy"};
        
sayHello.call(obj);
        


// apply()

// The apply method is similar to the call() method. The only difference is that,

// call() method takes arguments separately whereas, apply() method takes arguments as an array.

function saySomething(message){
  return this.name + " is " + message;
}
        
var person4 = {name:  "John"};
        
saySomething.apply(person4, ["awesome"]);




// Higher-order function
// Higher-order functions are functions that take other functions as arguments or return function as their results.

function higherOrder(fn) {
    fn();
  }
       
higherOrder(function() { console.log("Hello world") }); 
  




function higherOrder2() {
    return function() {
      return "Do something";
    }
  }
          
  var x = higherOrder2();
  x()   // Returns "Do something"
  
  


// Pure function
// It is a function that produces the same output for the same input. It means it returns the same result
// when you pass the same arguments. A pure function shouldn't have any side effects to change the expected output



var x=10
function add(x){
    console.log(x+1)
}
add(10)
add(11)
add(12)



// Hoisting
// Hoisting is a default behaviour of javascript where all the variable and function declarations are moved on top.

hoistedVariable = 3;
console.log(hoistedVariable); // outputs 3 even when the variable is declared after it is initialized	
var hoistedVariable;

// Example 2:

hoistedFunction();  // Outputs " Hello world! " even when the function is declared after calling

function hoistedFunction(){ 
  console.log(" Hello world! ");
}



// Scope
// Scope in JS, determines the accessibility of variables and functions at various parts in one’s code.

// In general terms, the scope will let us know at a given part of code, what are the variables and functions that
// we can or cannot access.

// There are three types of scopes in JS:

// Global Scope
// Local or Function Scope
// Block Scope



// Event Loop

// JavaScript has a runtime model based on an event loop, which is responsible for executing the code,
// collecting and processing events, and executing queued sub-tasks. This model is quite different from models
// in other languages like C and Java.



function first(){
    console.log("first called")
}
function second(){
    console.log("second called")
    setTimeout(()=>{
        console.log("api data")
    },3000)
}
function third(){
    console.log("third called")
}
first()
second()
third()




// Closures
// Closures is an ability of a function to remember the variables and functions that are declared in its outer scope.

var Person = function(pName){
    var name = pName;
  
    this.getName = function(){
      return name;
    }
  }
  
  var person = new Person("Neelesh");
  console.log(person.getName());
  
  
//   Let’s understand closures by example:
  
function randomFunc(){
    var obj1 = {name:"Vivian", age:45};
  
    return function(){
      console.log(obj1.name + " is "+ "awesome"); // Has access to obj1 even when the randomFunc function is executed
  
    }
  }
  
  var initialiseClosure = randomFunc(); // Returns a function
  
  initialiseClosure(); 
  




var f=function(pn){
    var n=pn
    this.getName=function(){
        return n
    }
}

var f=new f("shivi")
console.log(p1.getName())



// 
