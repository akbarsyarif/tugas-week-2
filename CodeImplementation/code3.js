const fazzFood = (harga, voucher, jarak, pajak) => {
  const voucherA = "FAZZFOOD50";
  const voucherB = "DITRAKTIR60";

  const baseDelivery = 5000;
  const extraDelivery = 3000;

  let subTotal;

  const hitungDiskon = (harga) => {
    let diskon;
    if (voucher === voucherA && harga >= 50000) {
      diskon = harga * 0.5;
      if (diskon > 50000) {
        diskon = 50000;
        return diskon;
      }
      return diskon;
    }
    if (voucher === voucherB && harga >= 25000) {
      diskon = harga * 0.6;
      if (diskon > 30000) {
        diskon = 30000;
        return diskon;
      }
      return diskon;
    }
    diskon = 0;
    return diskon;
  };

  const hitungOngkir = (jarak) => {
    let ongkir;
    if (jarak > 2) {
      ongkir = baseDelivery + (jarak - 2) * extraDelivery;
      return ongkir;
    }
    ongkir = baseDelivery;
    return ongkir;
  };

  const hitungPajak = (pajak) => {
    let tax;
    if (pajak) {
      tax = harga * 0.05;
      return tax;
    }
    tax = 0;
    return tax;
  };

  subTotal = harga - hitungDiskon(harga) + hitungOngkir(jarak) + hitungPajak(pajak);

  return `Harga : ${harga}
Potongan : ${hitungDiskon(harga)}
Biaya Antar : ${hitungOngkir(jarak)}
Pajak : ${hitungPajak(pajak)}
SubTotal : ${subTotal}`;
};
console.log(fazzFood(75000, "FAZZFOOD50", 5, true));
