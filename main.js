
console.log("Do you think my favorite drink is Dr.Pepper or Coke?");

document.write("Hello Professor!! What's my favorite food?")

// Global variable 
var globalNumber = 10;
console.log("Global number:", globalNumber);

{
  // Block variable
  let blockNumber = 5;
  console.log("Block number:", blockNumber);
}

let sum = globalNumber + 5;
console.log("Global number + 5 =", sum);

// String variable
let favoriteFood = "Burgers";
console.log("My favorite food is:", favoriteFood);

const person = {
  name: "Abigail",
  age: 25,
  favoriteFood: "Burgers"
};
console.log("Person object:", person);


// Function And Parameters assignment

//create a object 

const student = {
  name:"Abigail",
  age: 21,

  // Method
introduce: function() {
  console.log(" Hi, I'm " + this.name);
}
} ;

//  parameter IN
function greet(Name) {
  console.log("Hello," + name +"!")
}

// parameter OUT
function addNumbers(num1,num2) {
  return num1+ num2;
}

// Invoke
greet("Abigail");

let total= addNumbers (5,10);
console.log(total);
// call function 
student.introduce();
//event
function buttonClicked(){
  console.log("Button was clicked!");
}