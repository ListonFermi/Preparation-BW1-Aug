//currying
function add(a){
    return function res(b){
        return a*b
    }
}

console.log(add(2)(3))