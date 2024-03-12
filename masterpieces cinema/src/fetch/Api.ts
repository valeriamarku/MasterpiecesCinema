import axios from 'axios';
import { Movie } from '../types/Movie';

const API_BASE_URL = 'https://ghibliapi.vercel.app';

const Api = {
  fetchMovies: async (): Promise<Movie[]> => {
    try {
      const response = await axios.get(`${API_BASE_URL}/films`);
      return response.data;
    } catch (error) {
      console.error('Error fetching movies:', error);
      return [];
    }
  },
};

export default Api;
