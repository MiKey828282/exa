<template>
  <div class="client-dashboard">
    <h1>Catálogo de Productos</h1>
    <div class="products-grid">
      <ProductCard
        v-for="product in products"
        :key="product.id"
        :product="product"
        @buy="buyProduct"
      />
    </div>
  </div>
</template>
  
  <script>
  import { ref } from 'vue';
  import ProductCard from '../components/ProductCard.vue';
  
  export default {
    components: { ProductCard },
    setup() {
      const products = ref([]);
  
      const fetchProducts = async () => {
        // Cargar productos desde la API
      };
  
      const buyProduct = (product) => {
        if (product.stock > 0) {
          // Lógica para realizar la compra
        } else {
          alert('Producto agotado');
        }
      };
  
      fetchProducts();
  
      return { products, buyProduct };
    },
  };
  </script>

<style scoped>
.client-dashboard {
  padding: 20px;
}

.products-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 20px;
}
</style>
  