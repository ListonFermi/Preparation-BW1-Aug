const obj = { name: "name", age: "age", add: { street: "st", doorNo: "num" } };

const {
  name,
  age,
  add: { street, doorNo },
} = obj;


console.log({ name, age, street, doorNo });
