let obj = {}
const result = []
function parking (input) {

    /* let dataObj = input.map(element => {
         let arr = element.split(', ')
          obj[arr[1]] = arr[0]
           
     })*/

    for (let i = 0; i < input.length; i++) {
        let arr = input[i].split(', ')
        obj[arr[1]] = arr[0]
    }

    for (const key in obj) {
       if(obj[key] === "IN") {
           result.push(key)
       }
    }

    console.log(result)


    // if(dataObj.hasOwnProperti())
    // }
    // .reduce((acc, cur) => {
    //     if (!acc === cur) {

    //         return acc
    //     }

    // }, {})
    //    return (JSON.stringify(dataObj))

    // let [direction, carName] = e.split(',')
    //     if (obj.direction === 'OUT') {
    //       obj.direction = {}
    //     }
    //   })

    // })
}
parking([
    'IN, CA2844AA',

    'IN, CA2844AA',

    'IN, CA1234TA',

    'OUT, CA2844AA',

    'IN, CA9999TT',

    'IN, CA2866HI',

    'OUT, CA1234TA',

    'OUT, CA2866HI',

    'IN, CA9876HH',

    'IN, CA2822UU']
)
