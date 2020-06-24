// setTimeout(()=>{
//     console.log('Hola')
// }, 3000)

// function getUsers(callback){
//     let datos = [
//         {'name':'Juan','age':27,'city':'CDMX'},
//         {'name':'Luis','age':19,'city':'Durango'},
//         {'name':'Ana','age':24,'city':'EdoMex'},
//     ]
//     setTimeout(()=>{
//         callback(datos, 'Datos recibidos')
//     }, 2000)
// }

// let x = (data, mensaje)=>{
//     console.log(data)
//     console.log(mensaje)
// }
// getUsers(x)

// console.log('Obteniendo datos')

// function saludarUser(persona){
//     console.log(`Hola ${persona}`)
// }

// saludarUser('Jacobo')

// Ejercicio de prueba
/* 
    3.- Crear una función de orden superior que reciba como 
    argumentos dos números y un callback. Según el callback
    que se pase a la función, se devuelve la suma de los
    dos números, la resta de los dos números o la
    multiplicación de los dos números.
*/

function operacion(num1, num2, operacion /*operacion == callback*/){
    return operacion(num1, num2)
}

function suma(num1, num2){

    return num1 + num2
}

function resta(num1, num2){
    return num1 - num2
}

function multiplicacion(num1, num2){
    return num1 * num2
}

function division(num1, num2){
    return num1 / num2
}
// console.log(operacion(7, 8, division))

