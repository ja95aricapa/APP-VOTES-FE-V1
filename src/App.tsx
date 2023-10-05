// src/App.tsx

import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom"; // Importa Routes en lugar de Switch
import Home from "./pages/Home";
import ViewVotes from "./pages/ViewVotes";
import VotePage from "./pages/VotePage";

const App: React.FC = () => {
  return (
    <Router>
      <div className='App'>
        <Routes>
          {" "}
          <Route path='/' element={<Home />} />{" "}
          <Route path='/view-votes' element={<ViewVotes />} />{" "}
          <Route path='/vote' element={<VotePage />} />{" "}
        </Routes>
      </div>
    </Router>
  );
};

export default App;
