import './App.css'
import Cards from './components/Cards/Cards.jsx'
import Nav from './components/Nav/Nav'
import { useState, useEffect } from 'react'
import { Route, Routes, useNavigate } from "react-router-dom"
import About from './components/About/About'
import Detail from './components/Detail/Detail'
import Error from "./components/Error/Error"
import Form from "./components/Form/Form"
import Favorites from "./components/Favorites/Favorites"

function App() {

  const navigate = useNavigate();
  const [access, setAccess] = useState(false) // este estado es para saber si estas logueado o no
  const username = "deby36@gmail.com"
  const password = "Corta2"
  
  function login (userData) {
    if (userData.password === password && userData.username === username) {
      setAccess(true); // si hay match de usuario y password, se setea en logueado
      navigate('/home'); // y redirige a /home
      alert("Bienvenidos a la DebyApp")
    }else{
      alert("Los datos ingresados son incorrectos")
    }
  }

  function logout () {
    setAccess(false);
    navigate("/")
  }
  
  
  useEffect(() => {
    !access && navigate('/');  // este useEffect en caso de no estar logueado siempre redirige a / (login)
  }, [access, navigate]);


  const [characters, setCharacters] = useState([])

  const onSearch = (characterID) => {

    const exists = characters.find(char => char.id === parseInt(characterID))
    if (exists) window.alert('Ese personaje ya está mostrandose')
    else {
      fetch(`http://localhost:3001/characters/${characterID}`)
        .then((response) => response.json())
        .then((data) => {
          if (data.name) {
            setCharacters((oldChars) => [...oldChars, data]);
          } else {
            window.alert('No hay personajes con ese ID');
          }
        });
    }
  }

  const onClose = (characterID) => {
    setCharacters(characters.filter((char) => char.id !== characterID))
  }

  const lucky = () => {
    const randomNumber = Math.round(Math.random() * (826 - 1) + 1)
    onSearch(randomNumber)
  }

  return (
    <div className='App' style={{ padding: '25px' }}>
      <div>
        <Nav  logout ={logout} onSearch={onSearch} lucky={lucky} />
      </div>
      <Routes>
        <Route path="/" element={<Form login={login} />}></Route>
        <Route path="/home" element={<Cards characters={characters} onClose={onClose} />}></Route>
        <Route path="/about" element={<About />}></Route>
        <Route path="/detail/:detailId" element={<Detail />}></Route>
        <Route path="/favorites" element={<Favorites />}></Route>
        <Route path='*' element={<Error />}></Route>
      </Routes>
    </div>
  )
}

export default App

// Ruteo
// Ahora deberás cumplir los siguientes dos pasos:

// Crea una ruta en el archivo app.jsx para que el formulario se renderice en el path "/".
// Si obervas la imagen del ejercicio anterior, la barra de navegación también se muestra en el Login. Cambia esto de modo que el <Nav /> se muestre en todos lados, menos en el Login.
// PISTA: investiga sobre el hook "useLocation" de react-router-dom, y piensa cómo hacer un renderizado condicional.





//routing exporté en linea 5 Route y Routes
//linea 46 renderizo Routes para generar el arbol de rutas
//linea 47 renderizo el componente Route y pongo el atributo path(ruta) determinando que renderizare cards y ademas será la /home
//liena 49 remderizo el componente Route y pongo el atributo path determinando que renderizare About y tendra la ruta About
