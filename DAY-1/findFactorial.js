//Write a function to calculate the factorial of a number using iteration.

function FindFactorial(n) {
  let factorial = 1;
  for (let i = 2; i < n; i++) {
    factorial *= i;
  }
  return factorial;
}

console.log(FindFactorial(5));
