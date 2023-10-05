import React, { useEffect, useState } from "react";
import { fetchVotes } from "../api";

const VoteList: React.FC = () => {
  const [votes, setVotes] = useState<any[]>([]);

  useEffect(() => {
    const getVotes = async () => {
      try {
        const data = await fetchVotes();
        setVotes(data);
      } catch (error) {
        console.error("Error fetching votes", error);
      }
    };
    getVotes();
  }, []);

  return (
    <ul>
      {votes.map((vote, index) => (
        <li key={index}>{vote.value}</li>
      ))}
    </ul>
  );
};

export default VoteList;
