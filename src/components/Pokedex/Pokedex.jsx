import React from 'react'
import Search from '../Search/Search'
import './Pokedex.css'
import PokemonList from '../PokemonList/PokemonList'

function Pokedex() {
  return (
 <div className='pokedex-wrapper'>
   
    <Search></Search>
    <PokemonList></PokemonList>
 </div>
 

  )
}

export default Pokedex
