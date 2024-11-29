<template>
    <table>
      <thead>
        <tr>
          <th>Producto</th>
          <th>Cantidad</th>
          <th>Total</th>
          <th>Comprador</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="sale in sales" :key="sale.id">
          <td>{{ sale.productName }}</td>
          <td>{{ sale.quantity }}</td>
          <td>{{ sale.total }}</td>
          <td>{{ sale.clientName }}</td>
        </tr>
      </tbody>
    </table>
  </template>
  
  <script>
  export default {
    name: 'SalesTable',
    props: {
      sales: {
        type: Array,
        required: true,
      },
    },
  };
  </script>
  
  <style scoped>
  table {
    width: 100%;
    border-collapse: collapse;
  }
  
  thead th {
    background-color: #4caf50;
    color: white;
    padding: 10px;
  }
  
  tbody td {
    padding: 10px;
    border: 1px solid #ccc;
  }
  </style>
  