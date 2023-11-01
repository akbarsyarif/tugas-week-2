function testPromise(timeout, cb) {
  // wait 1000ms
  console.log(`begin ${timeout}`);
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const text = "Hello World";
      if (typeof cb !== "function") return reject("cb bukan fungsi");
      const result = cb(text);
      resolve(result);
    }, timeout);
  });
}

// ASYNC AWAIT
async function doAsync(timeout, func, cb) {
  try {
    const result = await func(timeout, cb);
    console.log(`result = ${result}`);
  } catch (error) {
    console.log(`pesan error = ${error}`);
  }
}

doAsync(300, testPromise, (inp) => {
  return inp.split(" ").join("-");
});

doAsync(200, testPromise, {});
