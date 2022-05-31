import React,{useState, useEffect} from 'react';
import axios from 'axios';
import Liste from '../../Liste'

function List() {

  const [data, setData]=useState([]);
  
  useEffect(() => {
    axios.get("http://localhost:3001/pokemons").then(e=>{
    setData(e.data.map(e=>
      <div>
        <img src={(e.id <810) ? require(`../../pokemonimg/${e.id}.png`) : (`../../pokemonimg/a.png`)}/>
        <h4>{e.name.french}</h4>
        <h4>Vie : {e.base.HP}</h4>
        <h4>Dégâts : {e.base.Attack}</h4>
        <h6>ID : {e.id}</h6>
      </div>
      ))
  })
  },[])

  return (
    <div>
     <Liste data={data}/>
    </div>
  );
}

export default List;
