// masukkan array ke fungsi searchname

const matchName = (search, array) => {
  let filteredNames = array.filter((el) => el.toLowerCase().includes(search.toLowerCase()));
  //   if (filteredNames.length === 0) return "Nothing Is Found";
  //   console.log(filteredNames);
  return filteredNames;
};

const searchName = (search, limit, callback) => {
  const names = ["Abigail", "Alexandra", "Alison", "Amanda", "Angela", "Bella", "Carol", "Caroline", "Carolyn", "Deidre", "Diana", "Elizabeth", "Ella", "Faith", "Olivia", "Penelope"];

  if (limit < 1) return "Increase Your Search Limit";
  let namesFound = callback(search, names);
  if (namesFound.length === 0) return "Nothing Is Found";
  return namesFound.slice(0, limit);
  // langsung return jika var penting, takut nya kepake lagi nanti
};

console.log(searchName("an", 3, matchName));
console.log(searchName("An", 1, matchName));
console.log(searchName("an", 0, matchName));
console.log(searchName("ap", 3, matchName));
// TEST CONSOLE
