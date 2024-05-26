<script setup lang="ts">
import { RouterView } from 'vue-router'
import Header from '@/components/layout/TheHeader.vue'
import Footer from '@/components/layout/TheFooter.vue'
</script>

<template>
  <div class="mainpage__container">
    <Header />
    <RouterView />
    <Footer />
  </div>
</template>
