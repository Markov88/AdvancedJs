// const createCounter= ()=>{
// let counter =0
// return ()=>{
// counter +=1
// console.log(counter)
// }
// }


const createCounter= (function(){
    let counter =0
    return ()=>{
    return ()=>{
    counter +=1
    console.log(counter)
    }
    }
})()

const counter1 = createCounter()
const counter2 = createCounter()

counter1()
counter1()
counter1()
counter2()
counter2()