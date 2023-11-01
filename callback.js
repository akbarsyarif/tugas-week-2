// callback => fungsi yang merupakan input/argumen/parameter dari fungsi lain
//              yang kemudia akan dipanggil oleh fungsi lain

// diberikan sekumpulan bilangan
// ubah masingmasing bilangan menjadi ganjil/genap
const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];

function oddOrEven(input) {
  if (typeof input !== "number") return "Input harus berberntuk nu,ber";
  if (input % 2 === 0) return "Genap";

  return "Ganjil";
}

function changeArrayElements(inputArr, callback) {
  if (!Array.isArray(inputArr)) return "Array Tidak Ditemukan";
  if (typeof callback !== "function") return "Callback Salah";
  const outputArr = [];
  for (let i = 0; i < inputArr.length; i++) {
    outputArr[i] = callback(inputArr[i]);
  }

  return outputArr;
}

console.log(changeArrayElements(numbers, oddOrEven));
