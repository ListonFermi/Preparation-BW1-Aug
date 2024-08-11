function Car(){
    this.model = 'new'
}

Car.prototype.year = 2000
const newCar = new Car()
console.log(newCar)
console.log('year: '+newCar.year)

// function hello(){
//     console.log('hello')
//     const name ='name'
// }

// const hl = new hello()

// console.log(hl)