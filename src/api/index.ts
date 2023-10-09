import axios from 'axios';

const API_URL = 'http://localhost:9000/v1';

export const fetchCounts = async () => {
  try {
    const response = await axios.get(`${API_URL}/vote/`);
    const data = response.data;
    const yesCount = data.filter((vote: any) => vote.value === 'yes' && vote.status === 'valid').length;
    const noCount = data.filter((vote: any) => vote.value === 'no' && vote.status === 'valid').length;
    return { yes: yesCount, no: noCount };
  } catch (error) {
    console.error('Error fetching vote counts:', error);
    throw error;  // Propagate the error so it can be handled by the caller.
  }
};

export const submitVote = async (value: string) => {
  await axios.post(`${API_URL}/vote/`, { value, status: 'valid' });
};

export const fetchVotes = async () => {
  const response = await axios.get(`${API_URL}/vote/`);
  return response.data;
};
