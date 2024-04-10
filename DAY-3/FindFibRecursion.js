function FindFibRecursion(n) {
  if (n <= 1) {
    return n;
  }
  return FindFibRecursion(n - 1) + FindFibRecursion(n - 2);
}

console.log(FindFibRecursion(0)); // Output: 0
console.log(FindFibRecursion(1)); // Output: 1
console.log(FindFibRecursion(2)); // Output: 1
console.log(FindFibRecursion(3)); // Output: 2
console.log(FindFibRecursion(4)); // Output: 3
console.log(FindFibRecursion(5)); // Output: 5
console.log(FindFibRecursion(6)); // Output: 8
    