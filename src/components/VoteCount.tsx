import React, { useEffect, useState } from "react";
import { fetchCounts } from "../api";
import useWebSocket from "../hooks/useWebSocket";

const VoteCount: React.FC = () => {
  const [counts, setCounts] = useState<{ yes: number; no: number }>({
    yes: 0,
    no: 0,
  });

  const handleWebSocketMessage = (data: any) => {
    setCounts(data);
  };

  useWebSocket("ws://127.0.0.1:9000/v1/ws/", handleWebSocketMessage);

  useEffect(() => {
    const getCounts = async () => {
      try {
        const data = await fetchCounts();
        if (data) {
          setCounts(data);
        }
      } catch (error) {
        console.error("Error fetching vote counts", error);
      }
    };
    getCounts();
  }, []);

  return (
    <div>
      <div>Yes: {counts.yes}</div>
      <div>No: {counts.no}</div>
    </div>
  );
};

export default VoteCount;
