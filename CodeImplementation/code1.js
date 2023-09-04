const cekPalindrome = (string) => {
  if (typeof string !== "string") return `Input Harus Berupa String`;
  let reversedString = "";
  let lowerString = "";

  for (var x = 0; x < string.length; x++) {
    let char = string.charCodeAt(x);
    lowerString += String.fromCharCode(char > 64 && char < 91 ? char + 32 : char);
  } // iterate string lalu gunakan tabel ASCII

  for (let i = lowerString.length - 1; i >= 0; i--) {
    reversedString += lowerString[i];
  }
  console.log(reversedString);
  if (lowerString === reversedString) return `Palindrome`;
  return `Bukan Palindrome`;
};
console.log(cekPalindrome("maLim"));
