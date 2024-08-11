/* Synchronous vs Asynchronous

synchronous execution:  code is executed sequentially, meaning line by line. 
Each line of code runs only after the previous line has completed execution.
This results in a blocking behavior where each task must finish before the next one begins.

asynchronous execution: code runs in a non-blocking manner, allowing tasks to be executed independent of each other.
When an asynchronous task is initiated, the js lets the browser / node js' environment. 
The event loop continues executing other code.
*/

/* Single Threaded vs Multi Threaded

Single Threaded execution means, there only single thread is used for execution.

Multi Thread execution means, more than one thread is used for execution.
*/

// const fs = require('fs').promises;

// async function readFileAsync() {
//     console.log('Start');
//     try {
//         const data = await fs.readFile('./file.txt', 'utf8');
//         console.log(data); // Non-blocking operation
//     } catch (err) {
//         console.error(err);
//     }
//     console.log('End');
// }

// readFileAsync();

// console.log('hello\rhey')
// console.log('   hello\rhey')

// class Hello{
    
//     static a=10

//     constructor(){
//         this.b
//     }
    
// }

// console.log(Hello.a)

const a= new String('aaa')
const b= 'bbb'