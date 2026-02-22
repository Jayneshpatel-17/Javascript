// Primitive

// 7 Types: String , Number , Boolean, null , undefined , BigInt ,Symbol

const score = 100
const scoreValue = 100.3

const isLoggedIn = false
const outsideTemp = null
let userEmail;

const id = Symbol('123')
const anotherId = Symbol('123')

console.log(id === anotherId);

// const bigNumber = 2354679297319361n

// References (Non primitive)

// Array , Objects, Function

const heros = ["shaktiman", "naagraj","doga"];

let myObj = {
    name: "jaynesh",
    age: 20
}

const myFunction = function(){
    console.log("Hello World");
}

console.log(typeof anotherId);

// stack (primitive), Heap (non-primitive)

let myName = "Jaynesh"

let anotherName = myName

anotherName = "patel"

console.log(myName);
console.log(anotherName);

let userOne = {
    email: "user@google.com",
    upi: "user@ybl"
}

let userTwo = userOne

userTwo.email = "usertwo@google.com"

console.log(userOne.email);
console.log(userTwo.email);