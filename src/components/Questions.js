console.log(2 + '2'); // 22
console.log(2 - '2'); // 0


let nums = [1,2,2,3]; // [1,2,3]
[...new Set(nums)]; // Returns set without dup's
console.log([...new Set(nums)]); // Spread operator to change back to Array


let func = function(){
    {
        (function(){ // Immediately invoked function
            let l = 'let';
            var v = 'var';
        })(); 
    }
    // console.log(l);
    // console.log(v);
}
func();


console.log(5 < 6 < 7); // true (true < 7) (1 < 7)
console.log(7 > 6 > 5); // false (true > 5) (1 > 5)


// let a = () => { return arguments }
let a = (...n) => { // arguments does not bind well with arrow functions
    return n
}
console.log(a('hi'));


let profile = {
    name: 'techsmith'
}
Object.freeze(profile) // prevents user from adding/removing property
Object.seal(profile) // allows user to edit properties without adding
// Object.defineProperty(profile, 'age', {
    // value: 3,
    // writeable: false
// }) // prevents user from editing specific property
// profile.age = 3;
console.log(profile);


console.log(Math.max()); // -Infinity


// Difference between let and var?
// let has block scope while var has functional scope
// var is hoisted while let is not



// Difference between '==' and '==='?
// '==' compares value, while '===' compares value and type


// Difference between 'let' and 'const'?
// const's value cannot be re-assigned


// Difference between null and undefined?
// Both represent empty value, variable without value is automatically undefined
// Null must be manually set 



// What is prototypal inheritance?
// Constructor function = make new object


function funcD() {
    console.log('This is a function declaration')
}
let funcF = function funcF() { //An anonymous function saved into a variable
    console.log('This is a function expression')
}

// Why do we  use closures? Functional scope // block scope
// JS uses lexical scoping, the variables 
// Define a function somewhere, but call it / execute it somewhere else in another block.
// Only have closure for values being used
// let = block scope
let f = () => {
    let i = 1;
    let j = 2;
    return () => {
        console.log(i);
        console.log(j);
    }
};
console.log(f());

for (let i = 0; i < 3; i++) {
    setTimeout(() => {
        console.log(i);
    }, 1000);
}
console.log('after the loop');

i = 0__f(c:i(0))
i = 1__f(c:i(1))
i = 2__f(c:i(2))

i = 0__f(c:i(3)) //value changes and updates closure
i = 1__f(c:i(3))
i = 2__f(c:i(3))
i = 3__f(c:i(3))

// Immediately Invoked Function Scope runs as block scope
for (let i = 0; i < 3; i++) {
    ((i) => {
        setTimeout(() => {
            console.log(i);
        }, 1000);
    })(i)
}