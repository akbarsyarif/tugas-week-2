function cb(input) {
  return input;
}

// perintah async
function asyncFunc(timeout, cb) {
  // wait 1000ms
  setTimeout(() => {
    // menjalankan print hello world
    const text = "Hello World";
    const result = cb(text);
    console.log(result);
  }, timeout);
}

asyncFunc(100, (inp) => {
  return inp.split(" ");
});
asyncFunc(400, (inp) => {
  return inp.split(" ").map((val) => {
    return val.toUppercase();
  });
});
asyncFunc(300, (inp) => {
  return inp.split(" ").join("-");
});
asyncFunc(200, (inp) => {
  return inp.split(" ").sort();
});
