function Person (name) {
    this.name = name
    this.age = 22
}
Person.prototype = {
    talk: function () {
        console.log('hello!')
    }
}

function Students (name) {
    this.name = name
    this.grade = 6
}

Students.prototype = new Person

let pesho = new Person('pesho')
let ivancho = new Students('ivancho')

function customNew (constructor) {
    let obj = {}
    Object.setPrototypeOf(obj, constructor.prototype)
    constructor.call(obj)
    return obj
}

let stamatcho = customNew(Students)
stamatcho.talk()