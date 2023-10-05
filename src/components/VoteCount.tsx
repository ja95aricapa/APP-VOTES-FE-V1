import React, { useEffect, useState } from "react";
import { fetchCounts } from "../api";
import useWebSocket from "../hooks/useWebSocket";

const VoteCount: React.FC = () => {
  const [counts, setCounts] = useState<{ yes: number; no: number } | null>(
    null
  );

  const handleWebSocketMessage = (data: any) => {
    setCounts(data);
  };

  useWebSocket("ws://localhost:9000/ws/", handleWebSocketMessage);

  useEffect(() => {
    const getCounts = async () => {
      try {
        const data = await fetchCounts();
        setCounts(data);
      } catch (error) {
        console.error("Error fetching vote counts", error);
      }
    };
    getCounts();
  }, []);

  return (
    <div>
      {counts ? (
        <>
          <div>Yes: {counts.yes}</div>
          <div>No: {counts.no}</div>
        </>
      ) : (
        <div>Loading...</div>
      )}
    </div>
  );
};

export default VoteCount;
