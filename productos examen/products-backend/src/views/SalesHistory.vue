<template>
    <div>
      <h2>Historial de Ventas</h2>
      <table>
        <thead>
          <tr>
            <th>Producto</th>
            <th>Cantidad</th>
            <th>Total</th>
            <th>Fecha</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="sale in sales" :key="sale.id">
            <td>{{ sale.Product.name }}</td>
            <td>{{ sale.quantity }}</td>
            <td>{{ sale.total }}</td>
            <td>{{ sale.createdAt }}</td>
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
      const sales = ref([]);
  
      const fetchSales = async () => {
        try {
          const response = await api.get('/sales');
          sales.value = response.data;
        } catch (error) {
          console.error(error);
        }
      };
  
      onMounted(fetchSales);
  
      return { sales };
    },
  };
  </script>
  