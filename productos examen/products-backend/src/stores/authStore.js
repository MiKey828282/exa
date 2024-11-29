// src/store/auth.js
import { defineStore } from 'pinia';
import axios from 'axios'; // Necesario para hacer peticiones HTTP

export const useAuthStore = defineStore('auth', {
  state: () => ({
    isAuthenticated: false,
    user: null,  // Información del usuario
    token: '',   // Token JWT
  }),

  actions: {
    // Acción de login
    login(token, user) {
      this.isAuthenticated = true;
      this.token = token;
      this.user = user;
      localStorage.setItem('token', token);
      localStorage.setItem('user', JSON.stringify(user));
    },

    // Acción de logout
    logout() {
      this.isAuthenticated = false;
      this.user = null;
      this.token = '';
      localStorage.removeItem('token');
      localStorage.removeItem('user');
    },

    // Método de registro
    async register(username, email, password) {
      try {
        // Enviar la solicitud de registro al backend
        const response = await axios.post('http://localhost:3000/api/register', {
          username,
          email,
          password
        });

        // Si el registro es exitoso, hacer login automáticamente
        const { token, user } = response.data;
        this.login(token, user);  // Guardar token y datos del usuario en el store
        return response.data; // Retornar la respuesta para poder manejarla en el componente
      } catch (error) {
        throw new Error(error.response?.data?.message || 'Error al registrar el usuario');
      }
    },

    // Método para verificar si el usuario está autenticado
    checkAuthentication() {
      const token = localStorage.getItem('token');
      const user = JSON.parse(localStorage.getItem('user'));

      if (token && user) {
        this.token = token;
        this.user = user;
        this.isAuthenticated = true;
      } else {
        this.isAuthenticated = false;
      }
    },
  },

  getters: {
    getToken: (state) => state.token,
    getUser: (state) => state.user,
    isAdmin: (state) => state.user?.role === 'admin',
  },
});

