let snoopy = {
    nombre: 'Snoopy',
    animal: 'Perro',
    programa: 'Charlie Brown',
    color: 'Blanco',
    ficticio: true ,
    raza:'Beagle'
}
console.log(snoopy.nombre)
console.log(snoopy.color)
snoopy.color = 'Blanco con manchas negras'
console.log(snoopy.color)
snoopy.amigo = 'charlie brown'
console.log(snoopy.amigo)
let huesos = {
    nombre: 'Ayudante de santa',
    programa: 'Los Simpson',
    animal: 'Perro',
    color: 'Cafe',
    raza: 'Galgo',
    ficticio: true,
    ladra: ()=>{
       return 'Waf waf'
    },
    comer: (comida)=>{
        if(comida == 'Croquetas'){
            return 'Huesos come croquetas' 
        } else{
            return 'Huesos come otra cosa'
        }
    },
    jugar: (juego)=>{
        return `Huesos juega ${juego}`
    }
}
console.log(huesos.ladra());
console.log(huesos.comer('Croquetas'));
console.log(huesos.comer('Pollito'));
console.log(huesos.jugar('Atrapa la bolita'))


let scooby = {
    nombre: 'Scooby Doo',
    color: 'Cafe',
    raza: 'Gran Danes',
    ficticio: true,
    hablar: function(){
        return `Hola me llamo ${this.nombre}`
    },
  
}
// console.log(scooby.hablar())
// console.log(`Scooby es color ${scooby.color}`)
console.log(scooby.hablar())
