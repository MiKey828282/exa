<template>
    <div>
      <h2>{{ isEdit ? 'Editar Producto' : 'Agregar Producto' }}</h2>
      <form @submit.prevent="saveProduct">
        <input v-model="product.name" type="text" placeholder="Nombre del producto" required />
        <input v-model="product.price" type="number" placeholder="Precio" required />
        <input v-model="product.stock" type="number" placeholder="Stock" required />
        <button type="submit">Guardar</button>
      </form>
      <button @click="$emit('close')">Cancelar</button>
    </div>
  </template>
  
  <script>
  import api from '../api/axios';
  
  export default {
    props: ['productData'],
    data() {
      return {
        product: this.productData || { name: '', price: 0, stock: 0 },
        isEdit: !!this.productData,
      };
    },
    methods: {
      async saveProduct() {
        if (this.isEdit) {
          await api.put(`/products/${this.product.id}`, this.product);
        } else {
          await api.post('/products', this.product);
        }
        this.$emit('close');
      },
    },
  };
  </script>
  