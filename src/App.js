import React, { useState, useEffect } from 'react';
import Axios from 'axios';

import SearchPokemon from './components/SearchPokemon';
import InfoPokemon from './components/InfoPokemon';

import './App.css';

function App() {
  const [pokemon, setPokemon] = useState({});

  useEffect(() => {
    document.title = 'Pokemon' + (pokemon.name ? ` ${pokemon.name}` : '');
  })

  const handleGetInfo = async (namePokemon) => {
    try{
      const response = await Axios.get(`https://pokeapi.co/api/v2/pokemon/${namePokemon}`);
      let {id, name, weight, height, types} = response.data;
      name = name[0].toUpperCase() + name.slice(1);
      setPokemon({id, name, weight, height, types});
    }
    catch(e){
      const {status} = e.response;
      setPokemon({status})
    }
    
  }


  return (
    <div className="App">
      <SearchPokemon handleGetInfo={handleGetInfo} setPokemon={setPokemon}/>
      <InfoPokemon pokemon={pokemon} handleGetInfo={handleGetInfo}/>
    </div>
  );
}

export default App;
