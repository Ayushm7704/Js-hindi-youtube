// Primitive

// 7 Types: String, Number, Boolean, null, undefined, symbol, bigInt

const score = 100
const scoreValue = 100.3
const outsideTemp = null
let userEmai;;

const id = Symbol('123')
const anotherId = Symbol('123')
// console.log(id === anotherId);

// const bigNumber = 2233343423223432332n;



// Reference (Non-Primitive)

// Array, Objects, Functions

// Arrays-

const heros = ["Shaktiman", "nagraj", "Doga"];

// Objects-

let myObj = {
    name: "Ayush",
    age: 22,
}

// Function

const myFunction = function(){
    console.log("Hello world");
    
}

// console.log(typeof bigNumber);
// console.log(typeof outsideTemp);
// console.log(typeof myFunction);
// console.log(typeof anotherId);



//++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

/*

Memory Use:-
             Stack (Primitive), Heap (Non-Primitive)

*/

let myYoutubename = "AyushMishadotcom"

let anotherName = myYoutubename
anotherName = "chaiaurcode"

console.log(myYoutubename);
console.log(anotherName);

let userOne = {
    email: "user@google.com",
    upi: "user@ybl"
}

let userTwo = userOne

userTwo.email = "Ayush@google.com"

console.log(userOne.email);
console.log(userTwo.email);
