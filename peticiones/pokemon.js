const request = require("request");

const POKEAPI_URL = "https://pokeapi.co/api/v2/generation/1";
request(POKEAPI_URL, (err, res, body) => {
  let respuesta = JSON.parse(body).results;

  for (let i = 1; i <= 151; i++) {
      let Pokemon = {
        nombre: respuesta[i].name,
        // movimientos: respuesta[i].moves,
        // tipos: respuesta[i].types,
        // altura: respuesta[i].height,
        // peso: respuesta[i].weight,
      };
      console.log(Pokemon);
  
  }
});
