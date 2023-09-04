let linkA = "https://jsonplaceholder.typicode.com/users";
let linkB = "...";

const getNameThenCatch = (input) => {
  fetch(input)
    .then((response) => response.json())
    .then((data) => {
      data.forEach((el) => {
        console.log(el.name);
      });
    })
    .catch((err) => console.error(err));
};
getNameThenCatch(linkA);

async function getNameTryCatch(input) {
  try {
    const response = await fetch(input);
    // console.log(response);
    const data = await response.json();
    // console.log(data);
    let nameList = "";

    for (let i = 0; i < data.length; i++) {
      nameList += `${data[i].name} \n`;
    }
    console.log(nameList);
  } catch (error) {
    console.error(`There was an error, ${error}`);
  }
}
getNameTryCatch(linkA);
