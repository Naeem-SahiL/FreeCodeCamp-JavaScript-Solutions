function palindrome(str) {
  str = str.toLowerCase()
  let arr = str.match(/[a-zA-Z1-9]/g)
  if(arr == null)
  return true
  str = arr.join("")

  arr.reverse()
  let str1 = arr.join("")
  if(str === str1)
    return true
  else
    return false
  console.log(str1)
  return true;
}

palindrome("0_0 (: /-\ :) 0-0");
