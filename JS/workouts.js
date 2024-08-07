function secondLargest(a) {
  let SL = -Infinity;
  a.reduce((acc, curr) => {
    if (curr > acc) {
      SL = curr;
      curr = acc;
    } else if (curr > SL && curr < acc) {
      SL = curr;
    }
    return acc;
  }, -Infinity);
  return SL;
}

const a = [20, -2, 0, 8, 10];
console.log(secondLargest(a));
