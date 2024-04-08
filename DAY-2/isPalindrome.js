function Palindrome(str) {
  const str1 = str.replace(/[^A-Za-z0-9]/g, "").toLowerCase();
  const reversedStr = str1.split("").reverse().join("");
  return str1 === reversedStr;
}

let str = "A man, a plan, a canal, Panama!";
console.log(Palindrome(str));
