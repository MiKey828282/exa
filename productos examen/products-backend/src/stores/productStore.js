import { defineStore } from 'pinia';
import axios from 'axios';

export const useProductStore = defineStore('productStore', {
  state: () => ({
    products: [], // Lista de productos
  }),
  actions: {
    async fetchProducts() {
      try {
        const response = await axios.get('/api/products');
        this.products = response.data;
      } catch (error) {
        console.error('Error fetching products:', error);
      }
    },
    async addProduct(product) {
      try {
        await axios.post('/api/products', product);
        this.fetchProducts(); // Recargar productos
      } catch (error) {
        console.error('Error adding product:', error);
      }
    },
    async updateProduct(product) {
      try {
        await axios.put(`/api/products/${product.id}`, product);
        this.fetchProducts(); // Recargar productos
      } catch (error) {
        console.error('Error updating product:', error);
      }
    },
    async deleteProduct(productId) {
      try {
        await axios.delete(`/api/products/${productId}`);
        this.fetchProducts(); // Recargar productos
      } catch (error) {
        console.error('Error deleting product:', error);
      }
    },
  },
});
