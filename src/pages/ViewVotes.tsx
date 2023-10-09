import React, { useState } from "react";
import { fetchVotes } from "../api";

const ViewVotes: React.FC = () => {
  const [votes, setVotes] = useState<any[]>([]);

  const handleFetchVotes = async () => {
    try {
      const data = await fetchVotes();
      setVotes(data);
    } catch (error) {
      console.error("Error fetching votes", error);
    }
  };

  return (
    <div>
      <button onClick={handleFetchVotes}>Fetch Votes</button>
      <ul>
        {votes.map((vote, index) => (
          <li key={index}>{vote.value}</li>
        ))}
      </ul>
      <button onClick={() => window.history.back()}>Regresar al Home</button>{" "}
    </div>
  );
};

export default ViewVotes;
