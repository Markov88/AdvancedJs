const fibonator = ()=>{
let current=0
let next =1
return ()=>{
    const result=current
    current=next
    next = current + result
    return result
}
}

const fib= fibonator()
 console.log(fib())
 console.log(fib())
 console.log(fib())
 console.log(fib())
 console.log(fib())