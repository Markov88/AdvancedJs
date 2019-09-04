function currencyFormatter (separator, symbol, symbolFirst, value) {
  let result = Math.trunc(value) + separator

  result += value.toFixed(2).substr(-2, 2)

  if (symbolFirst) {
    return symbol + ' ' + result
  } else {
    return result + ' ' + symbol
  }
}

function getDolarFormater (formater) {
  return function (value) {
    return formater('.', '$', true, value)
  }
}

const dolarFormater = getDolarFormater(currencyFormatter)
const string2 = currencyFormatter(',', 'lv', false, 1.66)
const string = dolarFormater(100)
console.log(string)
console.log(string2)
