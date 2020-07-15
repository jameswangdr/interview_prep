function fizzBuzz() {
    for (let i = 1; i <= 100; i++) {
        if (i % 3 === 0 && i % 5 === 0) {
            console.log(i, 'fizzbuzz')
        }
        else if (i % 3 === 0) {
            console.log(i, 'fizz')
        }
        else if (i % 5 === 0) {
            console.log(i, 'buzz')
        }
        else console.log(i);
    }
}

// fizzBuzz();


function deNom(x, y) {
    let max = 0
    let highest = 0
    if (x > y) {
        max = x
    }
    else max = y

    for (let i = 1; i < max; i++) {
        if (x % i == 0 && y % i == 0) {
            highest = i
        }
    }
    return highest;
}

console.log(deNom(5, 15))
console.log(deNom(19, 69))
console.log(deNom(16, 64))
console.log(deNom(60, 12))
console.log('-----------------------------------')


function circle(n, k, i) { // n number of kids, k amount of toys, i starting index
    let position = i
    while (k > 0) {
        if (position + 1 == n) {
            position = 0
        }
        console.log(k, 'toys left')
        console.log(position, 'kid #')
        k--
        position++
    }
    return position

    //    return ((k % n) - i)
    // for (let i = 0; i < k; i ++) {

    // }
}

console.log('circle kid position', circle(3, 5, 1));
// console.log('circle kid position', circle(3, 5, 2));
// console.log('circle kid position', circle(3, 5, 3));

const palan = 12521
console.log([...palan.toString()]);

function checkr(num) {
    let temp = []
    while (num > 1) {
        let x = 0
        x = num / 10
        temp.push(x)
        num / 10;

    }
    return  temp;
}

// console.log(checkr(palan));
// console.log(12521 / 10);

function gene() {
    let questions = 0
    let x = Math.floor(Math.random() * 10)
    let y = Math.floor(Math.random() * 10)
    while (questions < 5) {
        if (x + y <= 10) {
            console.log(`${x} + ${y} = ?`)
            questions++
        }
        x = Math.floor(Math.random() * 10)
        y = Math.floor(Math.random() * 10)
    }
}

console.log(gene());

let addTo = function(passed) {
    let add = function(inner) {
        return passed + inner
    }
    return add
}

console.log()