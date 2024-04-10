// By using inbuilt methods 

function reverse1(str) {
    if (str == '') return str;
    return reverse(str.substr(1)) + str[0];
}
console.log(reverse1("hello"))



function reverseByRecursion(str) {
  if (str.length === 0) {
    return "";
  }
  return str[str.length - 1] + reverseByRecursion(str.slice(0, str.length - 1));
}
console.log(reverseByRecursion("hello"));

// by using helper function
function reverseHelper(str, index) {
    if (index >= str.length)
        return ""
    return reverseHelper(str, index + 1) + str[index]
}
function reverse(str) {
    return reverseHelper(str, 0)
}
console.log(reverse("hello"))



