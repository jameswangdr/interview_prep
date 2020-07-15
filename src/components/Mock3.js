const arr = [2,4,3,1,5]

function minMax(arr) {
    let min = 0;
    let max = 0;
    let minArr = arr.sort((a, b) => {
        return a - b
    }).pop()
    let maxArr = arr.sort((a, b) => {
        return a - b
    }).reverse().pop()
    console.log(minArr);
    console.log(maxArr);
    for (let i = 0; i < minArr.length; i++) {
        min += minArr[i];
    }
    for (let i = 0; i < maxArr.length; i++) {
        max += maxArr[i];
    }
    return (`Min:${min}, Max:${max}`)
}

console.log(minMax(arr));

let x = 123
function length(num) {
    let length = 0
    while (num > 1) {
        num = num / 10;
        length++
        console.log(num)
        console.log(length)
    }
    return length;
}
console.log(length(x));