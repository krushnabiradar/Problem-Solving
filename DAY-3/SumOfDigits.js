function SumOfDigits(n) {
  if (n < 10) {
    return n;
  }
  let temp = n % 10;
  return temp + SumOfDigits((n - temp) / 10);
}

console.log(SumOfDigits(123));
console.log(SumOfDigits(456));
console.log(SumOfDigits(8));

//using inbuilt function math.floor

function Sum(n) {
  if (n < 10) {
    return n;
  }
  return (n % 10) + SumOfDigits(Math.floor(n / 10));
}

console.log(Sum(123))
console.log(Sum(456))
console.log(Sum(8))