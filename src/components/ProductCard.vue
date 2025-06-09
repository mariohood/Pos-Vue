<script setup>
  import { formatCurrency } from '@/helpers'; 

  defineProps({
    product: {
      type: Object    
    }
})


</script>

<template>
  <div
    class="rounded bg-white shadow relative"
  >
    <img 
      :src="product.image" 
      :alt="'Imagen de ' + product.name"
    />
    
    <div class="p-3 space-y-2">
      <h3 class="text text-xl font-black text-gray-500">{{ product.name }}</h3>
      <p class="text-gray-500">Disponibles: {{ product.availability }}</p>
      <p class="text-2xl font-extrabold text-gray-900">{{ formatCurrency( product.price ) }}</p>
    </div>

  </div>
</template>

