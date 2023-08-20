import { useState } from 'react'
import { NavBar } from './components/NavBar'
import { ItemListContainer } from "./components/ItemListContainer"
import './App.css'
import { CartWidget } from './components/CartWidget'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <NavBar />
      <ItemListContainer greeting="Hola Bienvenidos a mi primer proyecto con REACT ⚛️" />

    </>
  )
}

export default App
