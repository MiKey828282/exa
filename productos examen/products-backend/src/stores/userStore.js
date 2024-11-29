import { defineStore } from 'pinia';
import axios from 'axios';

export const useUserStore = defineStore('userStore', {
  state: () => ({
    currentUser: null, // Usuario actual
    users: [], // Lista de usuarios (si es necesario para admin)
  }),
  actions: {
    async login(credentials) {
      try {
        const response = await axios.post('/api/users/login', credentials);
        this.currentUser = response.data;
      } catch (error) {
        console.error('Error logging in:', error);
        throw error; // Manejar error en el componente
      }
    },
    async logout() {
      try {
        await axios.post('/api/users/logout');
        this.currentUser = null;
      } catch (error) {
        console.error('Error logging out:', error);
      }
    },
    async fetchUsers() {
      try {
        const response = await axios.get('/api/users');
        this.users = response.data;
      } catch (error) {
        console.error('Error fetching users:', error);
      }
    },
  },
});
