class Person {
    constructor (firstName, lastName, age, email) {
        this.firstName = firstName
        this.lastName = lastName
        this.age = age
        this.email = email
    }
    get firstName () {
        return this._firstName
    }
    set firstName (firstName) {
        if (typeof firstName !== 'string') {
            throw new TypeError('It must be string!')
        }
        this._firstName=firstName
    }

    toString () {
        return `${ this.firstName } ${ this.lastName } age:${ this.age }, email:${ this.email }`
    }
}

let person = new Person('Maria', 'Petrova', 22)

console.log(person.firstName)