function sum3 (a, b, c) {
  return a + b + c
}
console.log(sum3(3, 5, 9))

// const n = sum3Curry(3)(5)(9)
const n = sum3Curry(3)
const m = n(5)
const k = m(9)

function sum3Curry (a) {
  return function (b) {
    return function (c) {
      return a + b + c
    }
  }
}
// console.log(n)
console.log(k)
