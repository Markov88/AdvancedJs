// let obj = {
//     name: 'pesho',
//     age: 22,
//     toString: function () {
//         return `Name: ${ this.name } \nAge: ${ this.age }`

//     }
// }
// let child = Object.create(obj)
// console.log(Object.getPrototypeOf(child))

// const counter = {
//     cnt: 0,
//     inc: function () {
//         this.cnt++
//         return console.log(this.cnt)
//     }

// }
//         counter.inc()


// if (!Array.prototype.print) {
//     Array.prototype.print = function () {
//         console.log(this.join(','));
//     }
// }    ot dr zadacha


// const obj = {
//     a: {
//         b: {
//             c: 1
//         }
//     }
// }
// // const clone = JSON.parse(JSON.stringify(obj))

// let clone = Object.create(obj)
// clone.a.b.c = 2

// console.log(Object.getPrototypeOf(clone)) 



// const a = [1, 2, 5, 7, 9]
// const b = [2, 5, 7, 7, 10, 100]
// let c = a.concat(b).sort((a, b) => (a - b))
// console.log(c)


// const obj = {
//     x: 1,
//     getX () {
//         const inner = function () {
//             console.log(this.x)
//         }
//         inner.call(this)
//     }
// }


//  obj.getX()


// const profile = {
//     name: 'xxx',
//     getName: (() => {
//         console.log(this.name)
//     })()
// }

// profile.getName()

// let [a, b, c] = [1, 's', true]
// console.log(c)

// var obj = {
//     "name": {
//         "amount": 5,
//         "drugo": 10
//     }
// }

// function x (test) {
//     return obj[test] ? obj[test].amount : "nqma takova"
// }

// console.log(x("name"))

// var obj = {
// 	"name" : {
//   	"amount":5,
//     "drugo" :10
//   }
// }

// // function x(test) {
// //   return obj[test] ? obj[test].amount : "nqma takova"
// // }

// console.log(x("name"))

// let obj = {
//     "name": {
//         "amount": 5
//     },
//     "otherName": {
//         "amount": 10
//     }
// }

// function func (test) {
//     return obj[test].amount
// }

// console.log(func("name"))

// function length (x) {
//     let arr = []


//     for (let i = 1; x < i; i * i) {
//         let digit = x % i
//     }
// }
// length(1234) 
 