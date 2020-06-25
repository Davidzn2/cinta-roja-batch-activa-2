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
