function fibonacciSequence(n) {
  let fibb = [0, 1];
  for (let i = 2; i < n; i++) {
    fibb[i] = fibb[i - 1] + fibb[i - 2];
  }
  return fibb;
}
console.log(fibonacciSequence(2))
console.log(fibonacciSequence(5))
console.log(fibonacciSequence(7))