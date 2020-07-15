import React, { Component, useState, useEffect } from "react";

function OtroComponent() {
  const [user, setUser] = useState('Eduardo')
  const [estrellita, setEstrellita] = useState(true)
  const [contador, setContador] = useState(0)
  useEffect (()=>{
    console.log('Han dado click otra vez', contador)
    document.title = `${contador}`
  }, [contador])
  useEffect (()=>{
    console.log('se monto el user')
  }, [user])
  return (
    <div>
      <h1>Hola {contador}!!</h1>
      <button onClick={
        ()=> setContador(contador + 1)
      }>Aumentar</button>
      {estrellita ? <p>tiene estrellita</p>
       : (
        <p>no tiene estrellita</p>
      )}
    </div>
  );
}

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      user: "Jacobo",
      estrellita: true,
      contador: 0
    };
  }
  // addOne(){
  //   this.setState({
  //     this.state.contador: this.state.contador + 1
  //   })
  

  render() {
    return (
      <div>
        <OtroComponent />
        {/* <h1>Hola {this.state.contador}!!</h1> */}
        {/* <button onClick={addOne}>Agregar 1</button> */}
      </div>
    );
  }
}

export default App;
