// unshift && push
let myArray = ['a', 'b', 'c', 'd'];
    // myArray.unshift('start');
    // myArray.push('end');
    myArray = ['start', ...myArray, 'end']
    console.log(myArray);

// variable in local scope of function
let secretVariable = function() {
    let secret = 'super secret'
    return function() {
        return secret;
    }
}
let getSecret = secretVariable();
console.log(secretVariable)
console.log(secretVariable())
console.log(getSecret());

var num = 4; // closures
function outer() {
    var num = 2
    function inner() {
        num++;
        var num = 3;
        console.log(num); // = 3
    }
    inner();
}
outer();


console.log(typeof typeof 1);


console.log([] + []) //typecast first, convert to string then concat
console.log({} + [])

function a() {
    return 'hello world'
}
const sentence = a `hey`; //tagged templates
console.log(sentence);

// document.body.contentEditable = true  // make webpage editable 


function y() {
    console.log(this.length)
}
var x = {
    length: 5,
    method: function(y) {
        arguments[0]();
    }
}
x.method(y, 1);

console.log(('hi').__proto__.__proto__.__proto__) //null
console.log(('hi').__proto__.__proto__) // {} // Object
console.log(('hi').__proto__) // String
//__proto__ means what is the creator? What object?

let arg = function() {
    return [].slice.call(arguments).length;
}
console.log(arg(1,2,3,4,5));

var a = {
    x: function() {
        console.log('x')
        return a // return this
    },
    y: function() {
        console.log('y')
        return a // return this
    },
    z: function() {
        console.log('z')
        return a // return this
    },
}

console.log(a.x().y().z()); // print x y z

console.log(Number.MAX_VALUE);
console.log(Number.MIN_VALUE);

let lst = [1,2,3] + [4,5,6]
console.log(lst)

console.log(Number.MAX_SAFE_INTEGER); // 16 digits

console.log(NaN == NaN);