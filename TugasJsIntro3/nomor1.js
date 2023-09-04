const cekHariKerja = (day) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const dataDay = ["senin", "selasa", "rabu", "kamis", "jumat"];
      let cek = dataDay.find((item) => {
        return item === day;
      });
      if (cek) {
        resolve(cek);
      } else {
        reject(new Error("Hari ini bukan hari kerja"));
      }
    }, 3000);
  });
};

// a. then catch
cekHariKerja("senin")
  .then((result) => console.log(result))
  .catch((err) => console.error(err));
// then digunakan untuk menangani resolve dari sebuah promise
// catch digunakan untuk menangani error dari sebuah promise
//
//
// b. try catch
async function cobaAsync(day) {
  try {
    const cekHari = await cekHariKerja(day);
    console.log(cekHari);
  } catch (err) {
    console.error(err);
  }
}

cobaAsync("selasa");
// async => mengubah function async seolah-olah menjadi synchronous
// await => menunggu proses asynchronous selesai lalu mengeksekusi nya
// try => blok kode yang akan dieksekusi
// catch => jika ada error akan masuk ke block catch ini
