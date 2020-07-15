const profile = {
    name: 'techsith',
    getName: () => {
        console.log(this.name)
    }
}
const profileFix = {
    name: 'james',
    getName: () => {
        console.log(profileFix.name)
    }
}

profile.getName();
profileFix.getName();

let x = [1,2,4,3,3,4,3,4]

function max(arr) {
    let counter = 0
    let sorted = arr.sort((a,b) => a - b).reverse()
    for (let i = 0; i < sorted.length; i++) {
        if (sorted[i] === sorted[0]) {
            counter++
            console.log(sorted[i])
        }
        else break
    }
    return counter
}

console.log(max(x));

let hex = 69

function toHex(num) {
    let hexd = num.toString(2)
    return hexd
}

console.log(toHex(hex));