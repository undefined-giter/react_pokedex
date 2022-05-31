import React from "react";
import axios from "axios";

 function ModifierPokemon() {

  const pokemonURL="http://localhost:3001/pokemons/"
  const [data, setData] = React.useState(null);

  React.useEffect(() => {
    axios.get(`${pokemonURL}${document.getElementById("id").value}`).then((e) => {
      setData(e.data);
    });
  }, []);

  function updatePost() {
    axios
      .put(`${pokemonURL}${document.getElementById("id").value}`, {"name": {
        "french": `${document.getElementById("name").value}`
      },
      "type": [
        `${document.getElementById("type").value}`
      ],
      "base": {
        "HP": parseInt(`${document.getElementById("hp").value}`),
        "Attack": parseInt(`${document.getElementById("attack").value}`),
        "Defense": parseInt(`${document.getElementById("def").value}`),
        "Sp.Attack": parseInt(`${document.getElementById("as").value}`),
        "Sp.Defense": parseInt(`${document.getElementById("spdef").value}`),
        "Speed": parseInt(`${document.getElementById("speed").value}`)
      }
    })
      .then((k) => {
        setData(k.data);
      });
    
  }

  return (
    <div>
      <br />
      <input id="id" placeholder="ID actuel"></input>
        <br /><br />
      <input id="name"placeholder="Nom"></input>
        <br /><br />
        <input id="type" placeholder="Type"></input>
        <br /><br />
        <input id="hp" placeholder="HP"></input>
        <br /><br />
        <input id="attack" placeholder="Attack"></input>
        <br /><br />
        <input id="def" placeholder="Defense"></input>
        <br /><br />
        <input id="as" placeholder="Vitesse d'attaque"></input>
        <br /><br />
        <input id="spdef" placeholder="Sp. defense"></input>
        <br /><br />
        <input id="speed" placeholder="Vitesse"></input>
        <br /><br />
        <button type="button" onClick={updatePost}>Modifier le Pokemon</button>
    </div>
  )
}
export default ModifierPokemon