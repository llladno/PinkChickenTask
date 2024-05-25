<script setup lang="ts">
import LogoIcon from "@/components/icon/LogoIcon.vue";
import SettingsIcon from "@/components/icon/SettingsIcon.vue";
import FileProcentIcon from "@/components/icon/FileProcentIcon.vue";
import UserLogoIcon from "@/components/icon/UserLogoIcon.vue";
import ExitIcon from "@/components/icon/ExitIcon.vue";
import '@/assets/layout/_header.scss';

</script>

<template>
  <header class="defaultContainer">
    <LogoIcon class="header__logo"/>
    <div class="header__right">
      <FileProcentIcon class="header__right__procent"/>
      <span class="header__right__procent__text">5%</span>
      <UserLogoIcon class="header__right__user" />
      <span class="header__right__user__mail">Username@adaurum.ru</span>
      <div class="header__right__buttons">
        <SettingsIcon />
        <ExitIcon />
      </div>
    </div>
  </header>
</template>

<style scoped>


</style>