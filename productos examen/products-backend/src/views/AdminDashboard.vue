<template>
    <div>
      <h1>Gestión de Productos</h1>
      <button @click="showAddProductForm = true">Agregar Producto</button>
  
      <div v-if="showAddProductForm" class="form-container">
        <h2>{{ isEditing ? 'Editar Producto' : 'Agregar Producto' }}</h2>
        <form @submit.prevent="isEditing ? updateProduct() : addProduct()">

          <input
            v-model="form.name"
            type="text"
            placeholder="Nombre del Producto"
            required
          />
          <input
            v-model="form.price"
            type="number"
            placeholder="Precio"
            required
          />
          <input
            v-model="form.stock"
            type="number"
            placeholder="Stock"
            required
          />
          <input v-model="form.image" type="text" placeholder="URL de Imagen" />
  
          <button type="submit">{{ isEditing ? 'Guardar Cambios' : 'Agregar' }}</button>
          <button type="button" @click="resetForm">Cancelar</button>
        </form>
      </div>
  
      <ProductList
        :products="products"
        @editProduct="editProduct"
        @deleteProduct="deleteProduct"
      />
    </div>
  </template>
  
  <script>
  import axios from 'axios';
  import ProductList from '../components/ProductList.vue';
  
  export default {
    components: {
      ProductList,
    },
    data() {
      return {
        products: [],
        showAddProductForm: false,
        isEditing: false,
        form: {
          id: null,
          name: '',
          price: '',
          stock: '',
          image: '',
        },
      };
    },
    methods: {
      async fetchProducts() {
        try {
          const response = await axios.get('http://localhost:3000/products');
          this.products = response.data;
        } catch (error) {
          console.error('Error al obtener los productos:', error);
        }
      },
      async addProduct() {
        try {
          const response = await axios.post('http://localhost:3000/products', this.form);
          this.products.push(response.data);
          this.resetForm();
        } catch (error) {
          console.error('Error al agregar producto:', error);
        }
      },
      async updateProduct() {
        try {
          await axios.put(`http://localhost:3000/products/${this.form.id}`, this.form);
          this.products = this.products.map((product) =>
            product.id === this.form.id ? { ...this.form } : product
          );
          this.resetForm();
        } catch (error) {
          console.error('Error al actualizar producto:', error);
        }
      },
      editProduct(product) {
        this.isEditing = true;
        this.showAddProductForm = true;
        this.form = { ...product }; // Carga los datos del producto en el formulario
      },
      async deleteProduct(productId) {
        try {
          await axios.delete(`http://localhost:3000/products/${productId}`);
          this.products = this.products.filter((product) => product.id !== productId);
        } catch (error) {
          console.error('Error al eliminar producto:', error);
        }
      },
      resetForm() {
        this.isEditing = false;
        this.showAddProductForm = false;
        this.form = {
          id: null,
          name: '',
          price: '',
          stock: '',
          image: '',
        };
      },
    },
    mounted() {
      this.fetchProducts();
    },
  };
  </script>
  
  <style scoped>
  .form-container {
    margin: 20px 0;
    padding: 20px;
    border: 1px solid #ddd;
    border-radius: var(--border-radius);
    background-color: var(--card-bg-color);
  }
  button {
    margin: 5px;
  }
  </style>
  