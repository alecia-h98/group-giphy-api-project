import { create } from 'zustand';
import axios from 'axios';

const useStore = create((set, get) => ({
  categories: [],       
  favorites: [],
  
  

  // Fetch categories from the server
  fetchCategories: async () => {
    try {
      const response = await axios.get('/api/categories');  
      set({ categories: response.data.data});  
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
      const response = await axios.post('/api/favorites', gif);  
      set((state) => ({
        favorites: [...state.favorites, response.data], 
      }));
    } catch (error) {
      console.error('Error adding favorite:', error);
    }
  },

}));

export default useStore;
