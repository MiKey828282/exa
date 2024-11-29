<template>
    <div>
      <h2>Lista de Productos</h2>
      <table>
        <thead>
          <tr>
            <th>Nombre</th>
            <th>Precio</th>
            <th>Stock</th>
            <th>Acciones</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="product in products" :key="product.id">
            <td>{{ product.name }}</td>
            <td>{{ product.price }}</td>
            <td>{{ product.stock }}</td>
            <td>
              <button @click="$emit('editProduct', product)">Editar</button>
              <button @click="$emit('deleteProduct', product.id)">Eliminar</button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </template>
  
  <script>
  import { ref, onMounted } from 'vue';
  import api from '../api/axios';
  
  export default {
    setup() {
      const products = ref([]);
  
      const fetchProducts = async () => {
        try {
          const response = await api.get('/products');
          products.value = response.data;
        } catch (error) {
          console.error(error);
        }
      };
  
      onMounted(fetchProducts);
  
      return { products };
    },
  };
  </script>
  