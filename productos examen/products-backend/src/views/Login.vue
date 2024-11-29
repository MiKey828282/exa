<template>
  <div class="login-container">
    <div class="card">
      <h1>Inicio de Sesión</h1>
      <form @submit.prevent="handleLogin">
        <input v-model="email" type="email" placeholder="Correo electrónico" required />
        <input v-model="password" type="password" placeholder="Contraseña" required />
        <button type="submit">Ingresar</button>
      </form>
    </div>
  </div>
</template>
  
  <script>
  
  // src/components/Login.vue
import { useAuthStore } from '../stores/authStore';

export default {
  name: 'LoginForm',

  data() {
    return {
      email: '',
      password: '',
    };
  },

  setup() {
    const authStore = useAuthStore();
    return { authStore };
  },

  methods: {
    async handleLogin() {
      try {
        // Enviar los datos de login al backend
        const response = await this.$axios.post('/api/login', {
          email: this.email,
          password: this.password,
        });

        // Obtener el token y los datos del usuario del backend
        const { token, user } = response.data;

        // Llamar al método login del store para guardar el token y los datos del usuario
        this.authStore.login(token, user);

        // Redirigir al usuario según su rol
        if (user.role === 'admin') {
          this.$router.push('/admin');
        } else {
          this.$router.push('/client');
        }
      } catch (error) {
        alert(error.message || 'Error al iniciar sesión');
      }
    },
  },
};

  </script>
  
  <style scoped>
  .login-container {
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
  