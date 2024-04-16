// Binary Search

function binarySearch(arr, target) {
  let start = 0;
  let end = arr.length - 1;
  while (start <= end) {
    let mid = Math.floor((start + end) / 2);
    if (target === arr[mid]) {
      return mid;
    }
    if (target < arr[mid]) {
      end = mid - 1;
    } else {
      start = mid + 1;
    }
  }
  return -1;
}
console.log(binarySearch([1, 3, 2, 8, 4, 6], 6));

// recursive Binary search

function recursiveBinarySearch(arr, target) {
  return search(arr, target, 0, arr.length - 1);
}
function search(arr, target, start, end) {
  if (start > end) {
    return -1;
  }
  let mid = Math.floor((start + end) / 2);
  if (target === arr[mid]) {
    return mid;
  }
  if (target < arr[mid]) {
    return search(arr, target, start, mid - 1);
  } else {
    return search(arr, target, mid + 1, end);
  }
}
console.log(recursiveBinarySearch([-5, 2, 4, 6, 10], 10));
console.log(recursiveBinarySearch([-5, 2, 4, 6, 10], 6));
console.log(recursiveBinarySearch([-5, 2, 4, 6, 10], 20));
