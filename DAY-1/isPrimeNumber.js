// Explain the concept of prime numbers and write a
// function to check if a given number is prime.

//A natural number is said to be prime if it is only divisible by itself and 1.

function isPrimeNumber(n) {
  if (n < 2) {
    return false;
  }
  for (let i = 2; i < n; i++) {
    if (n % i === 0) {
      return false;
    }
  }

  // If no divisor was found, the number is prime
  return true;
}

console.log(isPrimeNumber(2));
