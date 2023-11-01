const getMonth = (callback) => {
  setTimeout(() => {
    let error = false;
    let month = ["Januari", "Februari", "Maret", "April", "Mei", "Juni", "Juli", "Agustus", "September", "Oktober", "November", "Desember"];
    if (!error) {
      callback(null, month);
    } else {
      callback(new Error("Sorry Data Not Found"), []);
    }
  }, 4000);
};

const showMonth = (err, month) => {
  if (!err) {
    // tampung hasil map
    const result = month.map((month) => month);
    console.log(result);
    return;
  }
  console.error(err);
};

getMonth(showMonth);
