
const Product = require('./Product');
const Client = require('./Cliente');

let coca = new Product('Coca Cola', 10);
let sprite = new Product('Sprite', 9.5)
let david = new Client('David', 'davidzn2@gmail.com', 5555555512, true)
let elias = new Client('Elias', 'elias@micorreo.com', 5512341234)

console.log(coca.getNombre(), coca.getPrecio())
console.log(sprite.getNombre())
console.log(david.suscribed())
console.log(elias.suscribed())
