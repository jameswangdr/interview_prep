let arr = [1, 2, 3, 4]

function addArr(arr) {
    let sum = 0;
    for (let i = 0; i < arr.length; i++) {
        sum += arr[i];
    }
    return sum
}

let fancy = arr.reduce((acc, item) => acc + item)
console.log(fancy)
console.log(addArr(arr));

let missing = [2, 3, 5, 6, 7, 8, 9, 10, 11, 13, 1, 4]

function find(arr) {
    let index = 0
    arr.sort((a, b) => {
        return a - b;
    })
    console.log(arr)
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] - 1 != index) {
            break
        }
        index = arr[i];
    }
    return index + 1;
}
console.log(find(missing));

function find2(arr) {
    let sum = 0
    let sumsum = 0
    for (let i = 0; i < arr.length; i++) {
        sum += arr[i]
    }
    console.log(sum)
    for (let j = 1; j < 12; j++) {
        sumsum += j
    }
    console.log(sumsum)
    return sumsum - sum;
}
console.log(find2(missing));

const til = {
    penny: 12,
    nickel: 10,
    dime: 2,
    quarter: 12,
    dollar: 30
}
let total = 20.27

function count(total) {
    let tracker = 0
    let coins = 0;
    let cents = 0
    if (tracker != total) {
        for (let i = 0; i < Math.round(total); i++) {
            coins++
            tracker++
        }
        console.log("current numbers", coins, tracker);
        cents = Math.round((total - tracker) * 100)
        console.log(cents);
        while (cents != 0) {
            if (cents >= 25) {
                cents -= 25
                coins++
                console.log('quarter + 1')
            }
            else if (cents < 25 && cents >= 10) {
                cents -= 10
                coins++
                console.log('dime + 1')

            }
            else if (cents < 10 && cents >= 5) {
                cents -= 5
                coins++
                console.log('nickel + 1')

            }
            else if (cents < 5 && cents >= 1) {
                cents -= 1
                console.log('penny + 1')
                coins++
            }
            console.log('1 loop', cents)
        }
    }
    return coins
}

console.log(count(total));

let str = 'I love Javascript'

function reverse(str) {
    let temp = [...str]
    temp.reverse();
    console.log(temp)
    let newNew = temp.join();
    console.log(newNew)

    return newNew;
}

function reverse2(str) {
    let temp = str.split(" ").reverse().join(" ")
    return temp;
}

console.log(reverse2(str));
console.log(reverse(str))