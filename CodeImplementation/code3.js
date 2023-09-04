const fazzFood = (harga, voucher, jarak, pajak) => {
  const voucherA = "FAZZFOOD50";
  const voucherB = "DITRAKTIR60";
  let diskon;
  let ongkir;
  const baseDelivery = 5000;
  const extraDelivery = 3000;
  let tax;
  let subTotal;

  if (voucher === voucherA && harga >= 50000) {
    diskon = harga * 0.5;
    if (diskon > 50000) {
      diskon = 50000;
    }
  } else if (voucher === voucherB && harga >= 25000) {
    diskon = harga * 0.6;
    if (diskon > 30000) {
      diskon = 30000;
    }
  } else {
    diskon = 0;
  }
  //   console.log(diskon);

  if (jarak > 2) {
    ongkir = baseDelivery + (jarak - 2) * extraDelivery;
  } else {
    ongkir = baseDelivery;
  }
  //   console.log(ongkir);

  if (pajak) {
    tax = harga * 0.05;
  } else {
    tax = 0;
  }
  //   console.log(tax);

  subTotal = harga - diskon + ongkir + tax;

  return `Harga : ${harga}
Potongan : ${diskon}
Biaya Antar : ${ongkir}
Pajak : ${tax}
SubTotal : ${subTotal}`;
};
console.log(fazzFood(75000, "FAZZFOOD50", 5, true));
