function FindFactorialRecursion(n) {
  if (n <= 1) {
    return 1;
  }
  return n * FindFactorialRecursion(n - 1);
}

console.log(FindFactorialRecursion(5)); //120
console.log(FindFactorialRecursion(6)); // 720
console.log(FindFactorialRecursion(7)); // 5040
