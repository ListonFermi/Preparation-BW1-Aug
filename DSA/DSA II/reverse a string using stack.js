function revStr(str) {
  const stack = [];
  let res = "";

  for (let i = 0; i < str.length; i++) {
    stack.push(str[i]);
  }

  while (stack.length) {
    res += stack.pop();
  }
  return res;
}

const str = "hello";
console.log(revStr(str));
