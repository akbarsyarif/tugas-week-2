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
console.log(divideAndSort(num));
