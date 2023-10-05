// src/pages/Home.tsx

import React from "react";
import { Link } from "react-router-dom";

const Home: React.FC = () => {
  return (
    <div>
      <h1>Bienvenido al sistema de votación</h1>
      <nav>
        <ul>
          <li>
            <Link to='/view-votes'>Ver Votos</Link>
          </li>
          <li>
            <Link to='/vote'>Votar</Link>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Home;
