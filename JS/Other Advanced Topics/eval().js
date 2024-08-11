// {
//     const a = 10;
//     const str = "(function hel(){console.log('hello ' + a)})()";
    
//     // Using eval
//     eval(str);  // Output: hello 10
  
//     // Using Function constructor
//     // const myFn = new Function(str);
//     // myFn();  // Output: hello undefined
//   }
  
const b=55

{
    const a = 10;
    const str = "(function hel(){console.log('hello ' + a)})()";
  
    // Using eval - Accesses the local variable 'a'
    eval(str);  // Output: hello 10
  
    // Using Function constructor - Doesn't have access to 'a' in the block scope
    const myFn = new Function('console.log("hello " + b)');
    try {
      myFn();  // Throws ReferenceError: a is not defined
    } catch (e) {
      console.error(e.message);  // Output: a is not defined
    }
  }
  