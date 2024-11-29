import { defineStore } from 'pinia';
import axios from 'axios';

export const useSaleStore = defineStore('saleStore', {
  state: () => ({
    sales: [], // Lista de ventas
  }),
  actions: {
    async fetchSales() {
      try {
        const response = await axios.get('/api/sales');
        this.sales = response.data;
      } catch (error) {
        console.error('Error fetching sales:', error);
      }
    },
    async createSale(sale) {
      try {
        await axios.post('/api/sales', sale);
        this.fetchSales(); // Recargar ventas
      } catch (error) {
        console.error('Error creating sale:', error);
      }
    },
  },
});
