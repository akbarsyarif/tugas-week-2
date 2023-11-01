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
checkSchedule("week 4", findWeek);
