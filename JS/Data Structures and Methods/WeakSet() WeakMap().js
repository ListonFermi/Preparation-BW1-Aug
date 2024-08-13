
const a= [1,2,{},4,5,6,1]
const s= new Set(a)
const obj1 = {name: 'Object 1'};
const obj2 = {name: 'Object 1'};
const ws = new WeakSet([obj1, obj2]);

console.log(s)
console.log(ws)