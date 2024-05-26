<script setup lang="ts">
import LogoIcon from '@/components/icon/LogoIcon.vue'
import SettingsIcon from '@/components/icon/SettingsIcon.vue'
import FileProcentIcon from '@/components/icon/FileProcentIcon.vue'
import UserLogoIcon from '@/components/icon/UserLogoIcon.vue'
import ExitIcon from '@/components/icon/ExitIcon.vue'
import '@/assets/layout/_header.scss'
</script>

<template>
  <header class="defaultContainer">
    <LogoIcon class="header__logo" />
    <div class="header__right">
      <div class="header__right__info">
        <FileProcentIcon class="header__right__procent" />
        <h3 class="header__right__procent__text">5%</h3>
        <UserLogoIcon class="header__right__user" />
        <h3 class="header__right__user__mail">Username@adaurum.ru</h3>
      </div>
      <div class="header__right__buttons">
        <SettingsIcon class="icon-button" />
        <ExitIcon class="icon-button" />
      </div>
    </div>
  </header>
</template>

<style scoped></style>
