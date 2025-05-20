<script setup>
  defineProps({
    product:{
      type: Object
    }
  })
</script>

<template>
  <div>
    <h1>{{ product.name }}</h1>
  </div>
</template>
