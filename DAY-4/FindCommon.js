
// Write a function to find the common elements between two arrays.

const arr1 = [1, 2, 3, 4, 5];
const arr2 = [3, 4, 5, 6, 7];

function FindCommon(arr1,arr2){
    const commonElements = [];

    for (let i = 0; i < arr1.length; i++) {

        if (arr2.includes(arr1[i])) {
            commonElements.push(arr1[i]);
        }
    }
    return commonElements;
}
const commonElements = FindCommon(arr1,arr2)

console.log(commonElements)