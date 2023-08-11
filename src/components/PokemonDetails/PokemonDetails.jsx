import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useParams, useSearchParams } from 'react-router-dom'
import './PokemonDetails.css'

function PokemonDetails() {
    const [pokemon,setPokemon] =useState({})
    const {id}=useParams();

    console.log(id);

    async function downloadPokemon()
    {
        const response = await axios.get(`https://pokeapi.co/api/v2/pokemon/${id}/`)
        console.log(response.data)
        setPokemon({
            name:response.data.name,
            image:response.data.sprites.other.dream_world.front_default,
            weight:response.data.weight,
            height:response.data.height,
            types:response.data.types.map((t)=>t.type.name)
        })

    }
    useEffect(()=>{
        downloadPokemon();
    },[])
  return (
    <div className='pokemon-details-wrapper'>
         <img className='pokemon-details-image' src={pokemon.image} alt="" />
        <div className="pokemon-details-name"> <span> {pokemon.name}</span></div>
       
        <div className="pokemon-details-height">Height:{pokemon.height}</div>
        <div className="pokemon-details-weight">Weight: {pokemon.weight}</div>
        <div>{pokemon.types}</div>
        <div className="pokemon-details-types">
            {pokemon.types && pokemon.types.map((t)=>
                <div key={t}>{t}</div>
            )}
        </div>
    </div>
  )
}

export default PokemonDetails
