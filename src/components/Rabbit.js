const sample = [
    [5,7,8,6,3],
    [0,0,7,0,5],
    [4,6,3,4,9],
    [3,1,0,5,8],
    [3,1,0,5,8],
]
const sampleTwo = [
    [5,7,8,6],
    [0,0,7,0],
    [4,6,3,4],
    [3,1,0,5],
]
const sampleThree = [5,7,9,6]

function feedRabbit(arr) {

}

function findCenter(arr) {
    let x = 0
    let y = 0


    if (arr.length % 2 != 0) {
        x = arr[Math.floor(arr.length / 2)]
    }
    else if (arr.length % 2 == 0) {
        let i = (arr.length / 2) - 1
        let j = arr.length / 2
        if (arr[i] > arr[j]) {
            x = arr[i]
        }
        else x = arr[j]
    }
    return x
}

console.log(findCenter(sampleThree));

