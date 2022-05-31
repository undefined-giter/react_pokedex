import React from 'react';
import axios from "axios";

function DelPokemon() {

  const [postPokemon, setPostPokemon] = React.useState(null);

  React.useEffect(() => {
    axios
    .get(`${"http://localhost:3001/pokemons/"}${document.querySelector("#pokemon-delete").value}`)
    .then((response) => {
      setPostPokemon(response.data);
    });
    
  }, []);

  function suppPokemon() {
    axios
      .delete(`${"http://localhost:3001/pokemons/"}${document.querySelector("#pokemon-delete").value}`)
      .then(() => {
        setPostPokemon(null)
      });
  }

  return (
    <div>
    <br />
    <input id="pokemon-delete" type="text" placeholder="ID"></input>
    <br /><br />
    <button type="button" onClick={suppPokemon}>Retirer du pokedex</button>
    </div>
  )
}

export default DelPokemon