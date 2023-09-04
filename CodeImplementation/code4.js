let num = 5956560159466056;

const divideAndSort = (input) => {
  if (typeof input !== "number") return `Input must be a number`;
  let inputAsString = "" + input;
  let result = "";
  let inputAsArray = [];
  //   console.log(inputAsString);
  //   console.log(inputAsString.length);

  for (let i = 0; i < inputAsString.length; i++) {
    inputAsArray[inputAsArray.length] = inputAsString[i];
  }
  //   console.log(inputAsArray);

  // let done;
  // do {
  //   done = false;
  //   for (let l = 0; l < inputAsArray.length - 1; l++) {
  //     if (inputAsArray[l] === "0" || inputAsArray[l + 1] === "0") {
  //     } else if (inputAsArray[l] > inputAsArray[l + 1]) {
  //       let temp = inputAsArray[l];
  //       inputAsArray[l] = inputAsArray[l + 1];
  //       inputAsArray[l + 1] = temp;
  //       done = true;
  //     }
  //   }
  // } while (done);
  let done;
  do {
    done = false;
    for (let l = 0; l < inputAsArray.length - 1; l++) {
      if (inputAsArray[l] > inputAsArray[l + 1] && inputAsArray[l] !== "0" && inputAsArray[l + 1] !== "0") {
        let temp = inputAsArray[l];
        inputAsArray[l] = inputAsArray[l + 1];
        inputAsArray[l + 1] = temp;
        done = true;
      }
    }
  } while (done);
  //   console.log(inputAsArray);

  for (let k = 0; k < inputAsArray.length; k++) {
    if (inputAsArray[k] !== "0") {
      result += inputAsArray[k];
    }
  }
  //   console.log(result);

  return result - 0;
  //you will get a number without using any built in function... because (-) will cast string in to number
};
console.log(divideAndSort(520048650085));

//   for (let i = 0; i < inputAsString.length; i++) {
//     if (inputAsString[i] === "0") {
//       inputAsArray[inputAsArray.length] = process;
//       process = "";
//     } else if (i === inputAsString.length - 1) {
//       process += inputAsString[i];
//       inputAsArray[inputAsArray.length] = process;
//       process = "";
//     } else process += inputAsString[i];
//   }
//   console.log(inputAsArray);

//   let sortTheInput;
//   let result;
//   for (let j = 0; j < inputAsArray.length; j++) {
//     sortTheInput = inputAsArray[0] - 0;
//   }
//   console.log(sortTheInput);
