function FindMaxMin(arr) {
  if (arr.length === 0) {
    return "Array is empty";
  }

  let max = arr[0];
  let min = arr[0];
  for (let i = 1; i < arr.length; i++) {
    if (arr[i] > max) {
      max = arr[i];
    }
    if (arr[i] < min) {
      min = arr[i];
    }
  }
  return { max, min };
}

const arr = [3, 7, 2, 8, 1, 9, 4];
console.log(FindMaxMin(arr));
