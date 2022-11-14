import React from 'react';

import './Image.css';

function isEmptyObject(obj) {
    var name;

    for (name in obj) return false;

    return true;
}

const ImagePokemon = ({pokemon}) => {

    if (pokemon.status === 404) return null

    let { id, name } = pokemon;

    if (isEmptyObject(pokemon)) return null

    else
        if(id < 10) id = `00${id}`
        else if(id < 100) id = `0${id}`
       
    
        return (
            
            <img className='image' src={`https://assets.pokemon.com/assets/cms2/img/pokedex/full/${id}.png`} alt={name}/>
            
        );
}
// <img src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${id}.png`} alt={name}/>

export default ImagePokemon;