/**
 * Promise
 * Perwakilan nilai yang tidak diketahui
 * nanti Promise akan berubah menjadi salah satu dari 2 bentuk:
 * 1. bentuk resolve => Success
 * 2. bentuk reject => error
 */

const janjian = new Promise((resolve, reject) => {
  setTimeout(() => {
    let isRaining = true;
    if (isRaining) return reject("Cuaca Hujan");

    return resolve("SiapSiap Berangkat");
  }, 1000);
});

const onSucces = (message) => {
  console.log(message);
};
const onError = (reason) => {
  console.log(reason);
};

janjian.then(onSucces).catch(onError);
