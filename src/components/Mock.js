let x = {
    a: 1,
    b: 2,
    c: 3
}

// let xArr = [Object.entries(x)]
let xArr = Object.values(x)
// let xArr = []
// for (let i in x) {
//     xArr.push(i);
// }
console.log(xArr);

let a = 'abcde'

function reverse(str) {
    // let answer = ""
    // for (let i = a.length; i > -1; i--) {
    //     answer += a[i]
    // }
    // return answer
    return str.split("").reverse().join()
}
console.log(reverse(a));

const obj = {
    a: 1,
    b: 2,
    getA() {
        console.log(this.a)
        return obj
    },
    getB() {
        console.log(this.b)
        return obj
    },
}

obj.getA().getB();

const jObj = {
    a: {
        b: {
            c: 'yolo'
        }
    }
}

console.log(jObj.a.b.c)

let clone = JSON.parse(JSON.stringify(jObj))
console.log(clone)

const aar = [1,2,5,7,9]
const bar = [2,5,6,12,100]

// function merge (arrA, arrB) {
//     let merged = []
//     merged = ((arrA.split("") + arrB.split("")).join());
//     return merged
// }

// console.log(merge(aar,bar));

console.log(aar+ ',' +bar)

let arr = [1,2,3,3,4,6,6,6,7,8]
let ob = {}

for(i in arr) {
    ob[i] = true;
}

let ans = Object.keys(arr);
console.log(ans)

let len = arr.length
noDup = (arr) => {
    let answer = []
    for (let i = 0; i < len; i++) {
        if (answer.indexOf(arr[i]) === -1) {
            answer.push(arr[i])
        }
    }
    return answer
}

console.log(noDup(arr));