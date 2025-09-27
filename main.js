
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
  console.log(" Hi, I'm " + this.name +", I'm am"+ this.age +" years old :) ");
}
} ;

//  parameter IN
function greet(Name) {
  console.log("Hello," + "friend" +"!")
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

//strings and conditionals 

const Name1 = "Abby";
const age1 = 18; 

//"If" Conditional statement

if (age1 >= 18) {
  console.log(`${Name1} is an adult.`);
} else {
  console.log(`${Name1} is not an adult yet.`);
}

//switch

let day = "Wednesday";
switch(day) {
  case "Monday": console.log("Start of the week!"); break;
  case "Wednesday": console.log("Midweek already!"); break;
  case "Friday": console.log("Weekend is near!"); break;
  default: console.log("Just another day.");
}

// string method
console.log(Name1.toUpperCase());

//loops and doom

// For loop
console.log("cou ting from 1 to 5:");
for(let i = 1; i <= 5; i++){
  console.log("Number:",i);

}

// While Loop countdown
console.log("Counting down from 5");
let count =5;
while (count >0){
   console.log("countdown:", count);
   count--;
}

// change css with js
function changeColor(){
  const box = document.getElementById("colorBox");
  box.style.backgroundColor="lightblue";
  box.style.color="white";
  box.style.fontSize = "20px";
  box.innerText= "color change!";
}

// change css variable value
function updateBox() {
  const box = document.getElementById("colorBox");
  let mood = "happy";


if ( mood === "happy") {
  box.style.backgroundColor = "yellow"
  box.innerText = " i'm feeling happy :)";
}
else if (mood ==="sad") {
  box.style.backgroundColor="lightblue";
  box.innerText= "im feeling sad:(";
}
else {
  box.style.backgroundColor= "grey";
  box.innerText= " just neutral :|"
}
}