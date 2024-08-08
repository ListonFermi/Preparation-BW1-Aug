const str= "console.log('test')"
eval(str)

const myFn = new Function(str)

myFn()