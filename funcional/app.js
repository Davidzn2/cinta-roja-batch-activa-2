let data = [12, 22, 10, 2, 9]
let double = data.map(function(elements){
    return elements * 2
})
console.log('datos originales: ', data)
console.log('datos al doble: ', double)

let dobles = new Array()

let dobs = data.forEach(function(elems){
    dobles.push(elems * 2)
})

console.log(dobles)

let ages = [33, 12, 19, 18, 2, 17, 14, 22]

let underAged = ages.filter((elements)=>{
    return elements < 18 
})
underAged.sort()
console.log('estos son menores de edad: ' + underAged)
ages.pop()

let alumnos = ['Alberto', 'Juan', 'Beto', 'Eddy', 'Jose']
alumnos.sort()
console.log(alumnos)