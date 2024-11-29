<template>
  <div id="app">
    <header>
      <nav>
        <router-link to="/" class="logo">Punto de Venta</router-link>
        <div>
          <router-link to="/login">Login</router-link>
          <router-link to="/admin" v-if="isAdmin">Admin Dashboard</router-link>
          <router-link to="/client" v-if="isClient">Cliente</router-link>
        </div>
      </nav>
    </header>

    <main>
      <router-view />
    </main>
  </div>
</template>

<script>
import { useUserStore } from './stores/userStore';

export default {
  computed: {
    isAdmin() {
      const userStore = useUserStore();
      return userStore.role === 'admin';
    },
    isClient() {
      const userStore = useUserStore();
      return userStore.role === 'client';
    },
  },
};
</script>

<style scoped>
#app {
  font-family: 'Arial', sans-serif;
  line-height: 1.6;
  color: #333;
}

header {
  background-color: #4caf50;
  color: white;
  padding: 10px 20px;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

header nav a {
  margin-right: 15px;
  text-decoration: none;
  color: white;
}

header nav a.logo {
  font-size: 1.5em;
  font-weight: bold;
}

main {
  padding: 20px;
}
</style>
