<template>
    <div v-if="message" :class="['notification', type]">
      <p>{{ message }}</p>
    </div>
  </template>
  
  <script>
  export default {
    name: 'NotificationComponent',
    props: {
      message: {
        type: String,
        required: true,
      },
      type: {
        type: String,
        default: 'success', // success, error, warning
      },
    },
  };
  </script>
  
  <style scoped>
  .notification {
    padding: 15px;
    margin: 10px 0;
    border-radius: 5px;
    color: white;
  }
  
  .success {
    background-color: #4caf50;
  }
  
  .error {
    background-color: #f44336;
  }
  
  .warning {
    background-color: #ff9800;
  }
  </style>
  