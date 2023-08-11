import React from 'react'
import { Routes,Route } from 'react-router-dom'
import Pokedex from '../components/Pokedex/Pokedex'
import PokemonDetails from '../components/PokemonDetails/PokemonDetails'
function CustomeRoutes() {
  return (
    
      <Routes>
        <Route path='/' element={<Pokedex/>}></Route>
        <Route path='/pokemon/:id' element={<PokemonDetails/>}></Route>
      </Routes>
    
  )
}

export default CustomeRoutes
