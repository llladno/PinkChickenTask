<script setup lang="ts">
import Chat from '@/components/layout/ChatForm.vue'
</script>

<template>
  <div class="cardContainer">
    <div class="assistant__container">
      <div class="header__assistant">
        <h2>Личный помощник</h2>
        <div class="assistant__info">
          <b>Jim Davidson</b>
          <p class="header__assistant__mail">Jim Davidson@adaurum.ru</p>
          <div class="header__dropdown">
            <div class="header__dropdown__button-helper icon-button">
              <div class="header__dropdown__circle"></div>
              <div class="header__dropdown__circle"></div>
              <div class="header__dropdown__circle"></div>
            </div>
            <div class="header__dropdown__content">
              <a href="#">Обратная связь о работе сервиса</a>
              <a href="#">Сменить помощника</a>
            </div>
          </div>
        </div>
      </div>
      <Chat></Chat>
    </div>
  </div>
</template>
