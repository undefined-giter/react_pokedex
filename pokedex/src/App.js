import React from 'react';
import {
  BrowserRouter as Router,
  Route,
  Routes
} from "react-router-dom";

import './styles.css'

import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';
import AjouterPokemon from './pages/AjouterPokemon/AjouterPokemon';
import ListeDePokemon from './pages/ListeDePokemon/ListeDePokemon';
import SupprimerPokemon from './pages/SupprimerPokemon/SupprimerPokemon';
import ModifierPokemon from './pages/ModifierPokemon/ModifierPokemon';
import Navbar from './pages/Navbar'

function App() {
  return (
    <div className="center-div">
    <Router>
      <Navbar />
      <Routes>        
        <Route path="/" element={<ListeDePokemon />}></Route>
        <Route path="/AjouterPokemon" element={<AjouterPokemon />}></Route>
        <Route path="/SupprimerPokemon" element={<SupprimerPokemon />}></Route>
        <Route path="/ModifierPokemon" element={<ModifierPokemon />}></Route>
      </Routes>
    </Router>
    </div>
  );
}
export default App;



