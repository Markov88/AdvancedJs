function solve(input){
    let buildCarBuilder = function (){
       let cars= {}
        return {
create:name =>cars[name]= {}
inherits:(child,parent ) => Object.getPrototypeOf(cars[child],cars[parent]),
       set:(name,key,value) => cars[name][key]=value,
       print:name =>{
           let result = []
           for (const key in cars[name]) {
                result.push(`${key}:${cars[name][key]}`)
               }
                console.log(result.join(','))
           }

       }
    }
}
let carBuilder=buildCarBuilder()
for (const line of input) {
    let [ command,...args]=line.split(' ')
    if( command=='create'){
carBuilder.create(args[0])
    
    if(args[1]=='inherit'){
        carBuilder.inherits(args[0],args[2])
    }
}
     else  {
carBuilder[command](args[0],args[1],args[2])
     }
}
}