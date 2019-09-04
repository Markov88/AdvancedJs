class Person {
    constructor (firstName, lastName, age, email) {
        this._firstName = firstName
        this._lastName = lastName
        this.age = age
        this.email = email
    }
    get fullName () {
        return `${ this._firstName } ${ this._lastName }`
    }

    toString () {
        return `${ this.firstName } ${ this.lastName } age:${ this.age }, email:${ this.email }`
    }
}

let person = new Person('Maria', 'Petrova', 22)

console.log(person.fullName)