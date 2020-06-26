const request = require('request')
const URL_NASA = 'https://api.nasa.gov/neo/rest/v1/feed?start_date=2020-06-19&end_date=2020-06-25&api_key='
const API_KEY = 'nWe2DC0F1b31zAEAdoCNokoLcHJEMAb4LOavBKPY'
const URL_NASA_FINAL = URL_NASA + API_KEY
request.get(URL_NASA_FINAL, (error, response, body) => {
  if (response.statusCode == 200) {
    let asteroides = JSON.parse(body).near_earth_objects;
    Object.keys(asteroides).forEach(function(key) {
      asteroidesPeligrosos = asteroides[key].map(asteroide => {
        if (asteroide.is_potentially_hazardous_asteroid) {
          console.log(`${asteroide.name} ----- ES PELIGROSO PARA LA TIERRA`);
        } else console.log(`${asteroide.name} ----- no es peligroso`);
      });
    });
  } else console.log(error);
});
