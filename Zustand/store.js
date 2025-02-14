import { create } from 'zustand';
import axios from 'axios';

const useGifStore = create((set, get) => ({
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
      console.log(response.data);
      set(() => ({ favorites: response.data }));  
    } catch (error) {
      console.error('Error fetching favorites:', error);
    }
  },

  // Add a favorite image to the database
  addFavorite: async (gif) => {
    try {
      console.log(`posting new favorite`, gif);
      await axios.post('/api/favorites', gif); 
      // Refresh data
      get().fetchFavorites(); 
    } catch (error) {
      console.error('Error adding favorite:', error);
    }
  },

  // Fetch search results
  fetchSearchResults: async (query) => {
    try {
      console.log(`searching for query ${query}`);
      const response = await axios.get(`/api/search/${query}`); 
      set(() => ({ searchResults: response.data.data }));  
    } catch (error) {
      console.error('Error fetching search results:', error);
    }
  },

  // Set category on favorite
  setCategoryOnFavorite: async (id, categoryId) => {
    try {
      console.log(`setting category for favorite id ${id} to category id ${categoryId}`);
      await axios.put(`/api/favorites/${id}`, { category_id: categoryId });
      // Refresh the favorites list after updating the category
      get().fetchFavorites();
    } catch (error) {
      console.error('Error setting category on favorite:', error);
    }
  },
}));

export default useGifStore;
