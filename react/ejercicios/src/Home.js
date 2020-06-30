import React from "react";
/*
- Nombre
- Hobbies
- Ocupación
- Links a tus redes sociales (al menos una)
- Una imagen (puede ser de ti o de algo que te gusta)
	- Agregar 3 etiquetas html adicionales que no ten
*/
function Home() {
  return (
    <div>
      <h2>David Zonana</h2>
      <p>Saludos desde React</p>
      <h3>Me gusta ve series</h3>
      <ul>
        <li>
          <a href="https://twitter.com/david_zn">Twitter</a>
        </li>
      </ul>
      <img
        src="https://assets.nacionrex.com/__export/1515916465717/sites/debate/img/2018/01/14/foto_de_portada_perros.jpg_1577178466.jpg"
        alt="un perrito"
      />
      <span>Bienvenido</span>
    </div>
  );
}

export default Home;
