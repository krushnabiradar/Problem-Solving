
// Write a function to find the nth Fibonacci number using iteration

function FindNthFibb(n) {
  if (n <= 1) {
    return n;
  }

  let fibPrev = 0;
  let fibCurr = 1;

  for (let i = 2; i <= n; i++) {
    let nextFib = fibPrev + fibCurr;
    fibPrev = fibCurr;
    fibCurr = nextFib;
  }

  return fibCurr;
}

const n = 6;
console.log(FindNthFibb(n));
