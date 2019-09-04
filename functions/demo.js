let person = {
  name: 'peter',
  sayHi: function () {
    console.log(`${this.name} says hi`)
  }
}

let secondPerson = {
  name: 'George'

}

person.sayHi()
person.sayHi.call(secondPerson)
const georgeHi = person.sayHi.bind(secondPerson)
georgeHi()
