import { create } from 'zustand';
import axios from 'axios';

const useStore = create((set, get) => ({
  categories: [],       
  favorites: [],
  searchResults: [],

  // Fetch categories from the server
  fetchCategories: async () => {
    try {
      const response = await axios.get('/api/categories');  
      set({ categories: response.data.data });  
    } catch (error) {
      console.error('Error fetching categories:', error);
    }
  },

  // Fetch favorites from the server
  fetchFavorites: async () => {
    try {
      const response = await axios.get('/api/favorites');  
      set({ favorites: response.data });  
    } catch (error) {
      console.error('Error fetching favorites:', error);
    }
  },

  // Add a favorite image to the database
  addFavorite: async (gif) => {
    try {
      await axios.post('/api/favorites', gif); 
      // Refresh data
      get().fetchFavorites(); 
    } catch (error) {
      console.error('Error adding favorite:', error);
    }
  },

  
  fetchSearchResults: async (query) => {
    try {
      const response = await axios.get(`/api/gits/${query}`); 
      set({ searchResults: response.data.data });  
    } catch (error) {
      console.error('Error fetching search results:', error);
    }
  },
}));

export default useStore;
