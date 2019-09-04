const input = [5, -3, 20, 7, 0.5]

function aggregate (arr) {
  console.log('sum=', reducer(arr, (a, b) => a + b, 0))
  console.log('min=', reducer(arr, (a, b) => Math.min(a, b), Number.MAX_SAFE_INTEGER))
  console.log('max=', reducer(arr, (a, b) => Math.max(a, b), Number.MIN_SAFE_INTEGER))
  console.log('product=', reducer(arr, (a, b) => a * b, 1))
  console.log('join=', reducer(arr, (a, b) => `${a}${b}`, ''))
}

function reducer (arr, operator, initial) {
  let result = initial
  for (let element of arr) {
    result = operator(result, element)
  }
  return result
}
aggregate(input)
