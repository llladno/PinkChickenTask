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
    <LogoIcon></LogoIcon>
    <div class="headerRightSide">
      <FileProcentIcon></FileProcentIcon>
      <span>5%</span>
      <UserLogoIcon></UserLogoIcon>
      <span>Вася Пупкин</span>
      <SettingsIcon></SettingsIcon>
      <ExitIcon></ExitIcon>
    </div>
  </header>
</template>

<style scoped>


</style>