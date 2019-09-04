function solve (obj) {
    let newObj = Object.create(obj)

    if (obj.handsShaking) {
        obj.bloodAlcoholLevel = obj.weight * obj.experience * 0.1 + obj.bloodAlcoholLevel
        // Object.setPrototypeOf(obj, newObj)
        return console.log(obj)
    } else {
        return console.log(Object.getPrototypeOf(newObj))
    }
}

solve({
    weight: 120,

    experience: 20,

    bloodAlcoholLevel: 200,

    handsShaking: true
}
)
