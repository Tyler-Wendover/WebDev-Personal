<script setup lang="ts">
    import { RouterView } from 'vue-router'
    import NavVue from './components/Nav.vue';
    
</script>

<template>
    <div>
      <header>
        <NavVue />
      </header>
      <div class="container">
        <RouterView />
      </div>
    </div>
  
</template>

<style>

</style>