//findSecondLargestNumber

function FindSecondLargestNumber(arr) {
  if (arr.length < 2) {
    return "Array should have at least two elements.";
  }

  let largest = arr[0];
  let secondLargest = null;

  // Find the largest element in the array
  for (let i = 1; i < arr.length; i++) {
    if (arr[i] > largest) {
      secondLargest = largest;
      largest = arr[i];
    } else if (
      arr[i] !== largest &&
      (secondLargest === null || arr[i] > secondLargest)
    ) {
      secondLargest = arr[i];
    }
  }

  return secondLargest;
}

const arr = [10, 5, 20, 15, 30];
console.log(FindSecondLargestNumber(arr));
