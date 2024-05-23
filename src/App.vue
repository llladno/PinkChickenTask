<script setup lang="ts">
import { RouterView } from 'vue-router'
import Header from "@/components/layout/Header.vue";
</script>

<template>
  <div class="mainpage__container">
    <Header />
    <RouterView />
    <footer>
      <h1>test</h1>
    </footer>
  </div>

</template>

<style scoped>


</style>
