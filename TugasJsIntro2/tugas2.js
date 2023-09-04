const names = ["Abigail", "Alexandra", "Alison", "Amanda", "Angela", "Bella", "Carol", "Caroline", "Carolyn", "Deidre", "Diana", "Elizabeth", "Ella", "Faith", "Olivia", "Penelope"];

const matchName = (search) => {
  let filteredNames = names.filter((el) => el.toLowerCase().includes(search.toLowerCase()));
  //   if (filteredNames.length === 0) return "Nothing Is Found";
  //   console.log(filteredNames);
  return filteredNames;
};

const searchName = (search, limit, callback) => {
  if (limit < 1) return "Increase Your Search Limit";
  let namesFound = callback(search);
  if (namesFound.length === 0) return "Nothing Is Found";
  namesFound = namesFound.slice(0, limit);
  return namesFound;
};

console.log(searchName("an", 3, matchName));
console.log(searchName("An", 1, matchName));
console.log(searchName("an", 0, matchName));
console.log(searchName("ap", 3, matchName));
