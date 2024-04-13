function Palindrome(str) {
  const str1 = str.replace(/[^A-Za-z0-9]/g, "").toLowerCase();
  const reversedStr = str1.split("").reverse().join("");
  return str1 === reversedStr;
}

let str = "A man, a plan, a canal, Panama!";
console.log(Palindrome(str));




function isPalindrome(string) {
    
    let reversed = "";
    for(let i = string.length - 1; i >= 0; i--) { //O(n)
        reversed += string[i];
    }
    return reversed === string;//O(1)
}
console.log(isPalindrome('foobar')); // false
console.log(isPalindrome('tacocat')); // true
