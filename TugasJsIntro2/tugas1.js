// 1. toFixed (number.toFixed)
//      digunakan untuk merubah jumlah angka di belakang desimal
//      return sebuah string
//      syntax: number.tofixed([digits])
//      digits: jumlah angka yang akan muncul dibelakang desimal
//      toFixed bersifat non-mutasi
// const num = 50.123456;
// console.log(`before ${num}`);
// const result = num.toFixed(2);
// console.log(`after ${num}`);
// console.log(`output ${result}`);
// console.log(typeof result);
//
// 2. concat (string.concat)
//      digunakan untuk menggabungkan 2 atau lebih string
//      return string baru yang sudah digabungkan
//      syntax: string.concat(string2, string3[, ..., stringN])
//      string2...stringN: ini adalah string yang akan digabungkan
//      concat bersifat non-mutasi
// const kata = "fazz";
// const kataLagi = "track";
// console.log(`before: ${kata}`);
// console.log(`before: ${kataLagi}`);
// const result = kata.concat(kataLagi);
// console.log(`after: ${kata}`);
// console.log(`after: ${kataLagi}`);
// console.log(`output: ${result}`);
//
// 3. slice (string.slice)
//      digunakan untuk menghapus bagian dari string
//      return string baru yang sudah di slice sesuai dengan parameter nya
//      syntax: string.slice(beginslice, endslice)
//      beginslice dan endslice menggunakan zero-based index diawal string
//      beginslice: titik dimulai nya extraction
//      endslice: titik berakhir nya extraction, jika endslice = negatif maka zero-index nya dimulai dari akhir string
//                jika tidak diisi maka extraction akan berakhir di akhir string
//      slice bersifat non-mutasi
// const kata = "Coba jelaskan built-in function dan contoh nya";
// console.log(`before: ${kata}`);
// const result = kata.slice(5, -5);
// console.log(`after: ${kata}`);
// console.log(`output: ${result}`);
//
// 4. unshift (array.unshift)
//      digunakan untuk menambahkan 1 atau lebih elemen ke awal dari array
//      return panjang baru dari array
//      syntax: array.unshift(element1, ..., elemenN)
//      element1, ..., elemenN: elemen yang akan ditaruh ke awal dari array
//      unshift bersifat mutasi
// const cobaArray = ["mobil", "motor", "kereta"];
// console.log(`before: ${cobaArray}`);
// const result = cobaArray.unshift("pesawat", "perahu");
// console.log(`after: ${cobaArray}`);
// console.log(`output: ${result}`);
//
// 5. splice (array.splice)
//      digunakan untuk merubah isi konten di dalam array, menambahkan elemen-elemen baru dan atau menghapus elemen lama
//      return elemen yang dihapus
//      syntax: array.splice(index, howMany, "element1", ..., "elemenN")
//      index: titik dimana kita mulai merubah array
//      howMany: sebuah integer yg menandakan berapa banyak elemen lama yang akan dihapus, jika howMany dikosongkan maka tidak ada elemen yang dihapus
//      elemen1, ..., elemenN: elemen yang akan ditambhakan ke dalam array, jika elemen kosong maka splice hanya akan menghapus elemen yang ada di dalam array
//      splice bersifat mutasi
// const cobaArray = ["mobil", "motor", "kereta"];
// const kata = "pesawat";
// console.log(`before: ${cobaArray}`);
// const result = cobaArray.splice(2, 1, kata, "perahu");
// console.log(`after: ${cobaArray}`);
// console.log(`output: ${result}`);
//
// 6. getMonth (Date.getMonth())
//      digunakan untuk menampilkan bulan dari tanggal yang dimaksud
//      return integer antara 0 - 11
//      syntax: Date.getMonth()
//      getMonth bersifat non-mutasi
// const date = new Date();
// console.log(`Before: ${date}`);
// const result = date.getMonth();
// console.log(`After: ${date}`);
// console.log(`Output: ${result}`);
//
// 7. setHours (Date.setHours())
//      digunakan untuk merubah jam menjadi sesuai yang diinginkan
//      return angka miliseconds antara Januari 1, 1970 00:00:00 UTC dan waktu saat ini
//      syntax: Date.setHours(hoursValue[,minutesValue[, secondValue,[ msValue]]])
//      hoursValue sebuah integer antara 0 - 23
//      minutesValue sebuah integer antara 0 - 59
//      secondsValue sebuah integer antara 0 - 59
//      msValue sebuah number antara 0 - 999
//      jika minutesValue, secondsValue, dan msValue dikosongkan maka
//      nilai yang dikembalikan akan seperti getUTCMinutes, getUTCseconds, dan getMiliseconds
//      setHours bersifat mutasi
// const date = new Date();
// console.log(`Before: ${date}`);
// const result = date.setHours(2, 23, 55);
// console.log(`After: ${date}`);
// console.log(`Output: ${result}`);
//
// 8. ceil (math.ceil)
//      digunakan untuk membulatkan keatas suatu angka
//      return integer terkecil yang lebih besar atau sama dari angka yang dimaksud
//      syntax: Math.ceil(x)
//      x = sebuah angka
//      ceil bersifat non-mutasi
// const valueA = 62.65;
// const valueB = 62.1;
// console.log(`Before: ${valueA}, ${valueB}`);
// const resultA = Math.ceil(valueA);
// const resultB = Math.ceil(valueB);
// console.log(`After: ${valueA}, ${valueB}`);
// console.log(`Output: ${resultA}, ${resultB}`);
//
// 9. sqrt (Math.sqrt)
//      digunakan untuk menghitung akar dari sebuah angka
//      return akar dari sebuah angka, jika angka adalah negatif, maka return Nan
//      syntax: Math.sqrt(x)
//      x = sebuah angka
//      sqrt bersifat non-mutasi
// const valueA = 81;
// const valueB = 20;
// const valueC = -100;
// console.log(`Before: ${valueA} ${valueB} ${valueC}`);
// const result1 = Math.sqrt(valueA);
// const result2 = Math.sqrt(valueB);
// const result3 = Math.sqrt(valueC);
// console.log(`After: ${valueA} ${valueB} ${valueC}`);
// console.log(`Output: ${result1} ${result2} ${result3}`);
// //
// 10. test (RegExp.test)
//      digunakan untuk mencari string yang ada di dalam teks yang sesuai dengan regexp
//      return jika ditemukan maka akan mengembalikan nilai true
//      jika tidak ditemukan maka akan mengembalikan nilai false
//      syntax: RegExpObject.tese(string)
//      string = string yang akan dicari
//      test bersifat non-mutasi
// const kata = "selamat mencoba built-in function";
// const re1 = RegExp("mencoba", "g");
// const re2 = RegExp("bisa", "g");
// console.log(`Before: ${kata}`);
// const result1 = re1.test(kata);
// const result2 = re2.test(kata);
// console.log(`After: ${kata}`);
// console.log(`Output 1: ${result1}`);
// console.log(`Output 2: ${result2}`);
