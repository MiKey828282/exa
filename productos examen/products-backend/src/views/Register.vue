<template>
    <div class="register-container">
      <div class="card">
        <h1>Registro</h1>
        <form @submit.prevent="handleRegister">
          <input v-model="username" type="text" placeholder="Nombre de usuario" required />
          <input v-model="email" type="email" placeholder="Correo electrónico" required />
          <input v-model="password" type="password" placeholder="Contraseña" required />
          <button type="submit">Registrarse</button>
        </form>
        <p>Ya tienes cuenta? <router-link to="/login">Inicia sesión</router-link></p>
      </div>
    </div>
  </template>
  
  <script>
  import { useAuthStore } from '../stores/authStore';
  
  export default {
    name: 'RegisterForm',
  
    data() {
      return {
        username: '',
        email: '',
        password: '',
      };
    },
  
    setup() {
      const authStore = useAuthStore();
      return { authStore };
    },
  
    methods: {
      async handleRegister() {
        try {
          // Llamamos al método register del store
          await this.authStore.register(this.username, this.email, this.password);
          
          // Redirigir al login después de un registro exitoso
          this.$router.push('/login');
        } catch (error) {
          alert(error.message || 'Error al registrar el usuario');
        }
      },
    },
  };
  </script>
  
  <style scoped>
  .register-container {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
    background-color: var(--background-color);
  }
  .card {
    width: 100%;
    max-width: 400px;
    text-align: center;
  }
  </style>
  
  
  <style scoped>
  .register-container {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
    background-color: var(--background-color);
  }
  .card {
    width: 100%;
    max-width: 400px;
    text-align: center;
  }
  </style>
  