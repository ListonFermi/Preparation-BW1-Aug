'use strict';

function example(x) {
  let x = 20; // Illegal shadowing: x is already declared as a parameter
  console.log(x);
}

example()
