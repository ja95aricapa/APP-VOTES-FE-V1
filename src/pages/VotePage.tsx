// src/pages/VotePage.tsx

import React from "react";
import VoteForm from "../components/VoteForm";
import VoteCount from "../components/VoteCount";

const VotePage: React.FC = () => {
  return (
    <div>
      <VoteForm />
      <VoteCount />
      <button onClick={() => window.history.back()}>
        Regresar al Home
      </button>{" "}
      {/* Nuevo botón */}
    </div>
  );
};

export default VotePage;
