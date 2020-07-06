import React, { useState, useEffect } from "react"; /* DEESTRUCTURAMOS PARA NO TRAER TODO */
import axios from "axios";

function Buscador() {
  const [gif, setGif] = useState('');
  const [toFind, setToFind] = useState('soccer');
  useEffect(()=>{
    console.log('Hubo un cambio')
    getGif()
    // alert('Alerta de cambio')
  },[toFind])
  
  const API_KEY = "g0vaPf5Zu7i7dt0jqTQznBZna6RpxxK1";

  const getGif = () => {
    axios
      .get(
        `https://api.giphy.com/v1/gifs/search?api_key=${API_KEY}&q=${toFind}&limit=5`
      )
      .then((response) => {
        let r = response.data.data[0].images.downsized_large.url;
        console.log(r);
        setGif(r);
      })
      .catch((error) => {
        console.log(error);
      });
  };
  return (
    <div>
      <input placeholder="Busca un gif" onChange={(event)=>{
        console.log(event);
        setToFind(event.target.value)
        }} /> 
      {/* <button onClick={}>Busca un Gif!</button> */}
      <img src={gif} alt="Comida" />
    </div>
  );
}

export default Buscador;
