const b = 1;
const a = new Promise((resolve, reject) => {
  if (b === 1) resolve("b is equal to one");
  else reject("rejected");
});

a.then((data) => console.log(data)).catch((e) => console.log(e));

(async function () {
  try {
    const result = await a;
    console.log(result);
  } catch (error) {
    console.error(error);
  }
})();

const p1 = Promise.resolve("hey");
const p2 = Promise.resolve("helloṇ");

Promise.any([p1,p2]).then((res)=>console.log(res)) //returns the 1st resolved promise
Promise.all([p1,p2]).then((res)=>console.log(res)) // resolves only if all the promises are resolved
Promise.allSettled([p1,p2]).then((res)=>console.log(res)) // resolves only all the promises irrespective of their results
Promise.race([p1,p2]).then((res)=>console.log(res)) // resolves the 1st resolved promise