// Write a function to remove duplicates from an array.

const arr = [1,3,5,4,1,8,9,5,7,5,6,6]

const unique = []
for (let i = 0; i < arr.length; i++) {
    let count = 0;
    for (let jnd = 0; jnd < i; jnd++) {
        if (arr[i] === arr[jnd]) {
            count++
        }
    }
    if (count == 0) {
        unique[unique.length] = arr[i]
    }
}
console.log(unique)