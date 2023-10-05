// src/pages/VotePage.tsx

import React from "react";
import VoteForm from "../components/VoteForm";
import VoteCount from "../components/VoteCount";
import VoteList from "../components/VoteList";

const VotePage: React.FC = () => {
  return (
    <div>
      <VoteForm />
      <VoteCount />
      <VoteList />
    </div>
  );
};

export default VotePage;
