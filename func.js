function oddOrEven(input) {
  if (typeof input !== "number") {
    return "Input harus berberntuk nu,ber";
  }
  if (input % 2 === 0) {
    return "Genap";
  }
  return "Ganjil";
}
console.log(oddOrEven(2));
