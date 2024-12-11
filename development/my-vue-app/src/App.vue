<script setup>
import CustomCursor from './components/CustomCursor.vue'
</script>

<template>
  <CustomCursor :config='{ highlighted_tags: [ "a", "button" ] }' />

  <a href="https://github.com/Greenborn/vue-custom-cursor"> GitHub</a>
  <button>Botón</button>
</template>

<style scoped>

</style>
