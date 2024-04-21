import { useState } from 'react'
import './App.css'
import Home from './components/Home'
import Game from './components/Game'
function App() {
const [game, setGame] = useState(false)
const startGame= ()=>{
  setGame(!game);
}
  return (
    <>
      {(game)?<Game toggle={startGame}/>:<Home toggle={startGame}/>}
    </>
  )
}

export default App
