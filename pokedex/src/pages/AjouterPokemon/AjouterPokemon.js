import React from "react";
import axios from "axios";

const dataBaseURL = "http://localhost:3001/pokemons/";

function AddPokemon() {
  const [setDataBase] = React.useState(null);

  React.useEffect(() => {
    axios.get(dataBaseURL).then((l) => {
      setDataBase(l.data);
    });
  });

  function add() {
    axios
      .post(dataBaseURL, {
        name: {
          french: `${document.getElementById("name").value}`,
        },
        type: [`${document.getElementById("type").value}`],
        base: {
          HP: parseInt(`${document.getElementById("hp").value}`),
          Attack: parseInt(`${document.getElementById("attack").value}`),
          Defense: parseInt(`${document.getElementById("def").value}`),
          "Sp. Attack": parseInt(`${document.getElementById("as").value}`),
          "Sp. Defense": parseInt(`${document.getElementById("spdef").value}`),
          Speed: parseInt(`${document.getElementById("speed").value}`),
        },
      })
      .then((response) => {
        setDataBase(response.data);
      });
  }

  return (
    <div>
      <br />
      <input id="name" placeholder="Nom"></input>
      <br /><br />
      <input id="type" placeholder="Type"></input>
      <br /><br />
      <input id="hp" placeholder="HP"></input>
      <br /><br />
      <input id="attack" placeholder="Attack"></input>
      <br /><br />
      <input id="def" placeholder="Defense"></input>
      <br /><br />
      <input id="as" placeholder="Sp.Attack"></input>
      <br /><br />
      <input id="spdef" placeholder="Sp.Defense"></input>
      <br /><br />
      <input id="speed" placeholder="Vitesse"></input>
      <br /><br />
      <button type="button"  onClick={add}>
        Ajouter au pokedex
      </button>
    </div>
  );
}

export default AddPokemon;