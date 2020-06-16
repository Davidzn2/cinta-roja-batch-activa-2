class Perro {
  constructor(nombre, raza, color='Cafe', comida='Croquetas') {
    console.log("hola desde el constructor de " + nombre);
    this.nombre = nombre;
    this.raza = raza;
    this.color = color;
    this.comida = comida;
  }
  come(){
      return `${this.nombre} come ${this.comida}`
  }
  ladrar(){
      return 'Waf waf'
  }
}
const scooby = new Perro("Scooby Doo", "Gran Danes", "Cafe", "Scooby Galletas");
console.log(scooby);
const snoopy = new Perro("Snoopy", "Beagle", "Blanco con negro");
const huesos = new Perro("Ayudante de santa", "Galgo");

console.log(scooby);
console.log(huesos);
console.log(huesos.come());
console.log(scooby.come())