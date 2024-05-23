<script setup lang="ts">
defineProps({
  classProp: String
})
</script>

<template>
  <button :class="classProp ? classProp : `default__button`">
    <slot></slot>
  </button>
</template>