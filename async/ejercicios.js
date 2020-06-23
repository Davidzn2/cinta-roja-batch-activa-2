/*
------------------------------------------------------------
4.- Escribe una funcion de orden superior que reciba una cadena de
    caracteres y debe devolver, mediante un callback, la
    cadena de caracteres en mayusculas o en minusculas.
            ordenSuperior("PejeLagarto", minus);
            -> pejelagarto
            ordenSuperior("PejeLagarto", mayus);
            -> PEJELAGARTO
------------------------------------------------------------
*/

function formatoDePalabra(string, callback){
    return callback(string)
}

function mayuscula(string){
    return string.toUpperCase();
}

function minuscula(string){
    return string.toLowerCase()
}

console.log(formatoDePalabra('PejeLaGarto',mayuscula))
console.log(formatoDePalabra('PejeLaGarto',minuscula))

/*
------------------------------------------------------------
5.- Hacer un arreglo de 4 cantidades de tiempo en minutos
    EJEMPLO[120, 80, 200, 100] y tomar solo las cantidades
    mayores a dos horas (hacer la comparación en horas) 
    mediante un callback
------------------------------------------------------------
*/
const mayorQueDosHoras = (arreglo, callback)=>{
    return callback(arreglo)
}

const comparar = (arreglo)=>{
    let nuevoArray =[]
    for(let i = 0; i < arreglo.length; i ++){
        if(arreglo[i]>=120){
            nuevoArray.push(arreglo[i])
        }
    }
    return nuevoArray
}
console.log(mayorQueDosHoras([120, 110, 200, 20], comparar))

// let estudiantes = ['Yoseph', 'David', 'Shlomo']
// console.log(estudiantes)
// estudiantes.push('Elias')
// console.log(estudiantes)