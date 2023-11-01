// Method => fungsi sebagai value dari key dari suatu object

const biodata = {
  id: 1,
  name: "Leanne Graham",
  username: "Bret",
  email: "Sincere@april.biz",
  address: {
    street: "Kulas Light",
    suite: "Apt. 556",
    city: "Gwenborough",
    zipcode: "92998-3874",
    geo: {
      lat: "-37.3159",
      lng: "81.1496",
    },
  },
  phone: "1-770-736-8031 x56442",
  website: "hildegard.org",
  company: {
    name: "Romaguera-Crona",
    catchPhrase: "Multi-layered client-server neural-net",
    bs: "harness real-time e-markets",
  },
  isMarried: false,
  ping: function () {
    return "pong";
  },
  getFullAddress: function () {
    const { street, suite, city, zipcode } = this.address;
    return `${suite}, St. ${street}, ${city}, ${zipcode}`;
  },
};
// this pada ekspresif mengacu ke object biodata
// this pada arrow mengacu ke pembungkus object

biodata.ping();
console.log(biodata.ping); //belum diproses
console.log(biodata.ping()); //sudah diproses
console.log(biodata.getFullAddress());

// Jika menggunakan This maka gunakan ekspresif, jika tidak bisa gunakan arrow
// Jika ingin seragam, disarankan menggunakan ekspresif

// Built-in methods
// 1. Array.sort => digunakan untuk mengurutkan elemen array
// memiliki sifat mutasi => merubah array asli nya
const numbers = [1, 4, 7, 2, 5, 8, 3, 6, 9];
const compareFn = (a, b) => {
  return a - b;
  // jika a < b, negative
  // jika a == b, 0
  // jika a > b, positive
};
const sortOut = numbers.sort();
console.log(numbers);
console.log(sortOut);

// 2. Array.reverse => membalikkan urutan
// bersifat mutasi
const revOut = sortOut.reverse();
console.log(sortOut);
console.log(revOut);

// 3. Array.push => memasukkan elemen array baru di posisi belakang
// bersifat mutasi
// return panjang array yang baru
const pushOut = revOut.push(20);
console.log(revOut);
console.log(pushOut);

// 4. Array.map => untuk iterasi sepanjang semua elemen array dan menjalankan
//                  fungsi callback untuk masingmasing elemen
// Tidak bersifat mutasi
// return array baru
function cb(number) {
  if (number % 2 === 0) {
    return number * 100;
  }
  return "Ganjil";
}
const mapOut = numbers.map(cb);
console.log(numbers);
console.log(mapOut);

// 5. String.split => memisahkan string menjadi elemenelemen array
//                      berdasarkan pemisah yang telah ditentukan
// bersifat non-mutasi
// case sensitive
// "" => pisah per karakter
// parameter adalah string yang akan dihapus
// return array baru hasil split
const str = "Saya Belajar Javascript";
const splitOut = str.split(" ");
console.log(str);
console.log(splitOut);

// 6. Array.join => menggabungkan elemenelemen array menjadi suatu string
//                  dengan pemisah yang telah ditentukan
// bersifat non-mutasi
// no-param => join dengan koma
// return string baru hasil join
const joinOut = splitOut.join("_");
console.log(splitOut);
console.log(joinOut);
