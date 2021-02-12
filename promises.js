console.log("Hello Promises");

function myPromise(string, timeout) {
  setTimeout(() => console.log(string), timeout);
}

async function promAll() {
  const p1 = myPromise("promise1", 1000);
  const p2 = myPromise("promise2", 2000);
  const p3 = myPromise("promise3", 3000);

  try {
    Promise.resolve([p1, p2, p3]).then(() => console.log("done calling"));
  } catch {
    console.log("shiit");
  }
}

promAll();
