// a. Tes Password
const passwordTest = (input) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const regex = /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9]).{8,}$/g;
      let userInput = input;
      let check = userInput.match(regex);

      if (check !== null) {
        resolve("Password Yang Anda Masukan Kuat");
      } else {
        reject(new Error("Password Yang Anda Masukan Lemah"));
      }
    }, 3000);
  });
};

async function checkStrength(input) {
  try {
    const result = await passwordTest(input);
    console.log(result);
  } catch (err) {
    console.error(err);
  }
}
// checkStrength("123456Aa");

//
// b. Cek Schedule
const findSchedule = (input, callback) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      let schedule = { "week 1": "Monday and Tuesday", "week 2": "Monday and Wednesday", "week 3": "Tuesday and Friday" };
      let result = callback(input, schedule);

      if (result.length > 0) {
        resolve(result);
      } else {
        reject(new Error("Data Not Found or Check Your Input"));
      }
    }, 2000);
  });
};

const findWeek = (input, schedule) => {
  let check = "";

  Object.keys(schedule).forEach((key) => {
    if (key.includes(input)) {
      check += `${key} : ${schedule[key]}`;
    }
  });
  return check;
};

async function checkSchedule(input, callback) {
  try {
    const result = await findSchedule(input, callback);
    console.log(result);
  } catch (error) {
    console.log(error);
  }
}
checkSchedule("week 2", findWeek);
// console.log(findWeek("week 2"));

// const schedule = { week1: "Monday and Tuesday", week2: "Monday and Wednesday", week3: "Tuesday and Friday" };
// let cari = "week4";
// let output = Object.keys(schedule).filter((key) => key.includes(cari));
// let hasil = "";
// Object.keys(schedule).forEach((element) => {
//   if (element.includes(cari)) {
//     hasil += `${element} : ${schedule[element]}`;
//   }
// });
// let hasil1 = Object.keys(schedule).forEach((element) => element.includes(cari));
// let a = true;
// let b = false;
// let c = undefined;
// // console.log(a === c);
// // console.log(a === b);
// // console.log(cari === schedule.week1);
// console.log(hasil);
