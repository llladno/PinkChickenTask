<script setup lang="ts">
import Chat from '@/components/layout/Chat.vue'
</script>

<template>
  <div class="cardContainer">
    <div class="header__assistant">
      <h2>Личный помощник</h2>
      <div class="assistant__info">
        <b>Jim Davidson</b>
        <p>Jim Davidson@adaurum.ru</p>
        <div class="header__assistant__button-helper">
          <div class="header__assistant__circle"></div>
          <div class="header__assistant__circle"></div>
          <div class="header__assistant__circle"></div>
        </div>
      </div>
    </div>
    <Chat></Chat>
  </div>
</template>