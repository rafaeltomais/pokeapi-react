import React from "react";
import Button from "./Button";
import ImagePokemon from "./Image";

import './InfoPokemon.css';

function isEmptyObject(obj) {
    var name;
    for (name in obj) return false;
    
    return true;
}

const InfoPokemon = ({ pokemon, handleGetInfo }) => {

  if (pokemon.status === 404) return (
  <div className="info-container">
      <h1>Pokemon não encontrado</h1>
  </div>
  )

  const { id, name, weight, height, types } = pokemon;

  const handlePrevSearch = () => {
    handleGetInfo(id-1);
  }

  const handleNextSearch = () => {
    handleGetInfo(id+1);
  }

  if (isEmptyObject(pokemon)) return (
    <div className="info-container">
        <h1>Procure um Pokemon</h1>
    </div>
  );
  
  else
    
    return (
      <div className="info-container">
        <h1>{name}</h1>

        
    
        <div className="lista">
          <ul>
          <li>Nome: {name}</li>
            <li>ID: {id}</li>
            <li>Peso: {weight/10} Kg</li>
            <li>Altura: {height/10} m</li>
            <li>Tipo: {types.map((type) => type.type.name).join(", ")}</li>
          </ul>
        </div>
        <ImagePokemon pokemon={pokemon}/>
        <div>
        <Button className="change-pokemon" onClick={handlePrevSearch}>Anterior</Button>
        <Button className="change-pokemon" onClick={handleNextSearch}>Próximo</Button>
        </div>
      </div>
      
    );
};

export default InfoPokemon;
