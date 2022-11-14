import React, { useState } from "react";
import Button from "./Button";
import "./SearchPokemon.css";


const SearchPokemon = ({handleGetInfo, setPokemon}) => {
  const [inputNamePokemon, setInputNamePokemon] = useState("");

  const handleInputChange = (event) => {
    setInputNamePokemon(event.target.value);
  };

  const handleSearch = () => {
    handleGetInfo(inputNamePokemon);
    setInputNamePokemon('')
    };

  const handleCleanSearch = () => {
    setPokemon({});
    setInputNamePokemon('')
  };

  return (
    <div className='search-container'>
      <div>
        <p>Coloque abaixo o <strong>nome</strong> ou <strong>número</strong> do Pokemon que deseja pesquisar:</p>
        <input
          type='text'
          placeholder="Nome ou ID Pokemon"
          value={inputNamePokemon}
          onChange={handleInputChange}
        />
      </div>

      <Button className="Button" onClick={handleSearch}>Procurar</Button>
      <Button className="Button" onClick={handleCleanSearch}>Reiniciar</Button>
    </div>
  );
};

export default SearchPokemon;
