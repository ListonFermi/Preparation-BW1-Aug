function largestDigit(num) {
  const numStr = num.toString();
  const numArr = numStr.split("").map((v) => Number(v));

  return numArr.reduce((acc, curr) => (curr > acc ? curr : acc), -Infinity);
}

const num = 5452169
console.log(largestDigit(num))
