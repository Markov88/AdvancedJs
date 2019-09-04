//    function John() {
//        this.id = 1;
//    }

//    John.doe = function() {
//      console.log(this);

//    }
//    John.prototype.doe = function() {
//        console.log(this);
//    };

//    John.doe();   

//    var me = new John();
//    me.doe();   
//    console.log(me.id); // 1

// function Animals (age) {
//     this.age = age
// }


// // Animals.prototype = {
// //     sleep: function () {
// //         console.log('zzzz')
// //     }
//     // swim: function () {
//     //     console.log('splahhh')
//     // }

// }



// let animal = new Animals(22)
// console.log(animal)
//   let animal2 = new animal().sleep

// // Object.setPrototypeOf(Animals, animal)
// console.log(animal.Sleep())
// var test = {
//     "name": {
//         "amount": "200"
//     },
//     "telle": {
//         "amount": "150"
//     }
// }
// for (let [key, value] of Object.entries(test)) {
//     console.log(`${key}: ${value}`);
// let keys = Object.keys(test)[0] console.log(keys)


// let values = Object.values(test)

// let amount = {}
// for (const el of values) {
//     amount = (Object.entries(el)[0][0])
// }
// console.log(amount)




// console.log()

let obj = {
    "name": {
        "amount": "200"
    },
    "telle": {
        "amount": "150"
    }
}
// console.log(Object.keys(obj));

function x (test) {
    if (Object.keys(obj).filter(e => e === test)) {
        return (obj[test].amount)
    } else {
        return console.log('error')
    }

}


console.log(x("name"))
// x('telle')
// console.log(x('telle'));
// obj.prototype.amount = function () {
//     return `${ this.amount }`
// }
// Test.prototype.amount = function () {
//     return this.amount
// }
// let tested = new Test('name').amount()
// let amount = function () {
//     console.log(`${ this.name.amount }`)
// }

// amount.call(obj)
// let newObj = Object.create(obj)
// console.log(Object.getPrototypeOf(newObj))





