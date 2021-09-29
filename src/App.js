import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Button from "react-bootstrap/Button";
import Frase from "./components/Frase";
import { useState, useEffect } from "react";
import Spinner from "./components/Spinner";

function App() {
  // creo el state
  const [personaje, setPersonaje] = useState({});
  const [cargando, setCargando] = useState(false);

  useEffect(() => {
    // aqui escribo la logica
    consultaApi();
  }, []); // los parentesis al final es para que cargue en el montaje

  const consultaApi = async () => {
    setCargando(true);
    const respuesta = await fetch(
      "https://thesimpsonsquoteapi.glitch.me/quotes"
    );
    const resultado = await respuesta.json();
    console.log(resultado[0]);
    //guardar los dato en el state
    setPersonaje(resultado[0]);
    setCargando(false);
  };

  // consicion logica ? es operador ternario(lo que quieron que haga si es true la condicion logica:(lo que quiero  que suceda si es false) )
  const mostrarComponente =(cargando === true)?(<Spinner></Spinner>):(<Frase personajeProp={personaje}></Frase>
    );

  return (
    <section className="container d-flex flex-column align-items-center">
      <img
        src={process.env.PUBLIC_URL + "Logo3.png"}
        alt="Logo Simpsons"
        className="w-50 my-1"
      />
      <Button variant="warning" onClick={() => consultaApi()} className="mb-5">
        Obtener frase
      </Button>
      {mostrarComponente}
    </section>
  );
}

export default App;
