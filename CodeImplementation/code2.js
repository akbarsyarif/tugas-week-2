const reverseWords = (input) => {
  if (typeof input !== "string") return `Input Harus Berupa String`;
  let inputCopy = "";
  let array = [];
  let reversed = "";

  for (let i = 0; i < input.length; i++) {
    inputCopy += input[i];
    if (input[i] == " " || i == input.length - 1) {
      // array.push(inputCopy);
      array[array.length] = inputCopy;
      inputCopy = "";
    }
    // console.log(inputCopy);
  }
  //   console.log(array);

  for (let a = array.length - 1; a >= 0; a--) {
    reversed += array[a];
    if (a == array.length - 1) {
      reversed += " ";
    }
  }
  return reversed;
};
console.log(reverseWords("saya belajar JS"));
