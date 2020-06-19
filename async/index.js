// function getUsers(callback){
//     let users =[
//         {'name':'david', 'edad': 25, 'city':'CDMX'},
//         {'name':'eduardo','edad': 31, 'city':'Paris'},
//         {'name':'urfail', 'edad':7,  'city':'Chiapas'}
//     ]
//     console.log('antes')
 
//     setTimeout(function(){
//         callback(users, 'Todo bien')
//         console.log('Esto pasa despues del callback')
//     }, 0)
// }
// getUsers(
//     function(users,text){
//         console.log(users)
//         console.log(text)
//     }
// )

// //// Otra function

// function saludo(callback){
//     console.log('Hola desde la function')
//     callback()
// }
// function despedida(){
//     console.warn('Adios desde el callback')
// }

// saludo(despedida)


// function revisarPrecio(compraMonedaX){
//     console.log('Hola, estoy viendo cuanto cuesta tu moneda')
//     setTimeout(function(){compraMonedaX()},2000)
// }
// function compraBTC(){
//     console.log('Compraste un BTC')
// }
// function comprarEther(){
//     console.log('Compraste ether')
// }
// revisarPrecio(compraBTC)
// revisarPrecio(comprarEther)

//Crear una función de orden superior que reciba como
//argumento una variable de cualquier tipo y un callback. 
//La función de orden superior debe retornar como resultado, 
//mediante el callback, cual es el tipo de dato de la variable ingresada 
//e imprimir su contenido

function ordenSuperior(variable, callback){
    callback(variable)
}
function tipoDeDato(a){
    console.log(typeof(a))
}
function elevarAlCuadrado(a){
    console.log(a**2)
}

ordenSuperior(9, tipoDeDato)
ordenSuperior(9, elevarAlCuadrado)