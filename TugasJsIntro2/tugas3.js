const nilaiA = [2, 25, 4, 14, 17, 28, 32, 8];
const nilaiB = [2, 25, 4];

const seleksiNilai = (nilaiAwal, nilaiAkhir, arr) => {
  if (typeof nilaiAwal !== "number" || typeof nilaiAkhir !== "number") return "Nilai Awal dan Nilai Akhir harus berupa angka";
  if (nilaiAwal > nilaiAkhir) return "Nilai akhir harus lebih besar dari nilai awal";
  if (arr.length <= 5) return "Jumlah angka dalam data Array harus lebih dari 5";

  let newNilai;
  newNilai = arr.filter((el) => el > nilaiAwal && el < nilaiAkhir);
  if (newNilai.length === 0) return "Nilai tidak ditemukan";
  newNilai.sort((a, b) => a - b);

  return newNilai;
};

console.log(seleksiNilai("satu", 20, nilaiA));
console.log(seleksiNilai(15, 3, nilaiA));
console.log(seleksiNilai(5, 20, nilaiB));
console.log(seleksiNilai(9, 13, nilaiA));
console.log(seleksiNilai(5, 20, nilaiA));
