function palindrome(str) {
  const strTransformed = str.replace(/[^A-Za-z0-9]/g, "").toLowerCase();
  const strReverse = strTransformed.split("").reverse().join("");
  return strReverse == strTransformed ? true : false;
}
