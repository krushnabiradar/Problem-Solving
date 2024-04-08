function Anagram(str1, str2) {
  let str3 = str1.split("").sort().join("");
  let str4 = str2.split("").sort().join("");

  return str3 === str4;
}

const str1 = "listen";
const str2 = "silent";
console.log(Anagram(str1, str2));
