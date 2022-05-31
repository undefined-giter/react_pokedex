import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
function Navbar() {
  return (
    <div>
      <nav class="navbar navbar-expand-lg bg-light">
        <div class="container-fluid">
          <a class="navbar-brand" href="http://localhost:3000/">
            Accueil
          </a>
          <button
            class="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarNav">
            <ul class="navbar-nav">
              <li class="nav-item">
                <a class="nav-link active "  href="http://localhost:3000/AjouterPokemon">
                  Ajouter Pokemon
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link active" href="http://localhost:3000/ModifierPokemon">
                  Modifier Pokemon
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link active" href="http://localhost:3000/SupprimerPokemon">
                  Supprimer Pokemon
                </a>
              </li>
              
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Navbar;
