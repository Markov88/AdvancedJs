
function solve () {
    class Person {
        constructor (firstName, lastName, age, email) {
            this.firstName = firstName
            this.lastName = lastName
            this.age = age
            this.email = email
        }
        toString () {
            return `${ this.firstName } ${ this.lastName } age:${ this.age }, email:${ this.email }`
        }
    }
 
    return [
        new Person('Maria', 'Petrova', 22, 'mp@yahoo.com'),
     new Person('SoftUni'),
        new Person('Stefan', 'Nikolov', 25),
        new Person('Petar', 'Kolev', 24, 'ptr@yahoo.com')
    ]
}

