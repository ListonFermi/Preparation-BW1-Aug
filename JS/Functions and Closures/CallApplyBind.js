const obj ={
    name: 'Sachin'
}

const obj2 = {
    name: "Kohli",
    greet: function (a1,a2,a3){
        console.log(`Hello ${this.name} ${a1} ${a2} ${a3}`)
    }
}

obj2.greet.call(obj,1,2,3)
const obj2GreetBinded=  obj2.greet.bind(obj)
obj2GreetBinded(1,2,3)

const a=[1,2,3]
obj2.greet.apply(obj,a)



