// 1. Print all even numbers from 0 - 10
const evenNumber = (upperLimit) => {
  let even = "";
  for (let i = 0; i <= upperLimit; i++) {
    if (i % 2 === 0) {
      even += `${i} `;
    }
  }
  return even;
};
// console.log(evenNumber(20));

//
// 2. Print a table containing multiplication tables
const multiplicationTable = (max) => {
  let needs = "";
  for (let i = 1; i <= max; i++) {
    for (let j = 1; j <= max; j++) {
      let value = j * i;
      needs += `${j} * ${i} = ${value} `;
      value = "";
    }
    if (i === max) {
      needs += "\n\n";
    }
    needs += "\n";
  }
  return needs;
};
// console.log(multiplicationTable(15));

//
// 3. Create a length converter function
const lengthConverter = (kilo) => {
  let result = kilo * 0.621371;
  return `${kilo} Kilometers = ${result.toFixed(1)} Miles`;
};
// console.log(lengthConverter(100));

//
// 4. Calculate the sum of numbers within an array

//
//
// Capitalize some letters
const capitalize = (letters) => {
  // let lettersCopy = letters.split("");
  // console.log(lettersCopy);
  let converted = "";

  for (let i = 0; i < letters.length; i++) {
    if (i % 2 === 0) {
      converted += letters[i].toUpperCase();
      // console.log(letters[i]);
    } else {
      converted += letters[i].toLowerCase();
    }
  }
  return converted;
};
console.log(capitalize("teststring"));
console.log(capitalize("TESTSTring"));
