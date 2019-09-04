// let moduleObj = {
//     count: 0,
//     increase: function (num) { return this.count += num },
//     decrease: function (num) { return this.count - +num },
//     value: function () { return this.count }
// }


// moduleObj.count = 2
// console.log(moduleObj.value());//2
// console.log(moduleObj.increase(5))//7
// console.log(moduleObj.decrease(1))//6


let moduleClosure = (function () {
    let count = 0
    return {
        increase: (num) => count += num,
        decrease: (num) => count -= num,
        value: () => count
    }

})()

console.log(moduleClosure.value())//0