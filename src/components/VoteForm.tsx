import React, { useState } from "react";
import { submitVote } from "../api";

const VoteForm: React.FC = () => {
  const [value, setValue] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      await submitVote(value);
      setValue("");
    } catch (error) {
      console.error("Error submitting vote", error);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Vote:
        <select value={value} onChange={(e) => setValue(e.target.value)}>
          <option value=''>Select</option>
          <option value='yes'>Yes</option>
          <option value='no'>No</option>
        </select>
      </label>
      <button type='submit'>Submit</button>
    </form>
  );
};

export default VoteForm;
