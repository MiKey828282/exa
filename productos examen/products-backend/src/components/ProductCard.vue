<template>
    <div class="card product-card">
      <img :src="product.image" alt="Imagen del Producto" />
      <h3>{{ product.name }}</h3>
      <p>Precio: ${{ product.price }}</p>
      <p v-if="product.stock > 0">Stock: {{ product.stock }}</p>
      <p v-else class="out-of-stock">Producto Agotado</p>
      <button :disabled="product.stock === 0" @click="$emit('buy', product)">
        Comprar
      </button>
    </div>
  </template>
  
  <style scoped>
  .product-card img {
    width: 100%;
    border-radius: var(--border-radius);
  }
  .product-card {
    text-align: center;
  }
  .out-of-stock {
    color: var(--danger-color);
    font-weight: bold;
  }
  button:disabled {
    background-color: #ccc;
    cursor: not-allowed;
  }
  </style>
  