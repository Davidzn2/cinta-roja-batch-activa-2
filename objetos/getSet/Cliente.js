class Client {
    constructor(nombre, email, telefono, suscrito=false){
        this.nombre = nombre;
        this.email = email;
        this.telefono = telefono;
        this.suscrito = suscrito;
    }
    suscribed(){
        if(this.suscrito){
            return `${this.nombre} esta suscrito con el correo ${this.email}`
        } else{
            return `${this.nombre} no esta suscrito, ¡Suscribete!`
        }
    }
}

module.exports = Client;