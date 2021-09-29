import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Button from 'react-bootstrap/Button'
import Frase from './components/Frase';
import {useState, useEffect} from "react"

function App() {
  // creo el state 
  const [personaje,setPersonaje]=useState({});
  useEffect(()=>{
    // aqui escribo la logica
    consultaApi()
  },[]);// los parentesis al final es para que cargue en el montaje

  const consultaApi = async()=>{
    const respuesta = await fetch("https://thesimpsonsquoteapi.glitch.me/quotes");
    const resultado = await respuesta.json();
    console.log(resultado[0]);
    //guardar los dato en el state
    setPersonaje(resultado[0]);
  }

  return (
   <section className="container my-5 d-flex flex-column align-items-center">
    <img src={process.env.PUBLIC_URL+"Logo3.png"} alt="Logo Simpsons" className="w-75"/>
    <Button variant="warning" onClick={()=>consultaApi()} >Obtener frase</Button>
    <Frase personajeProp={personaje}></Frase>
    </section>

  );
}

export default App;
