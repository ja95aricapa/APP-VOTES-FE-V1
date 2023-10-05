import axios from 'axios';

const API_URL = 'http://localhost:9000/v1';

export const fetchCounts = async () => {
  const response = await axios.get(`${API_URL}/vote/counts`);
  return response.data;
};

export const submitVote = async (value: string) => {
  await axios.post(`${API_URL}/vote/`, { value, status: 'valid' });
};

export const fetchVotes = async () => {
  const response = await axios.get(`${API_URL}/vote/`);
  return response.data;
};