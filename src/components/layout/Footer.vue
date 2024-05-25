<script setup lang="ts">

import GreyLogoIcon from '@/components/icon/GreyLogoIcon.vue'
import SmsIcon from '@/components/icon/SmsIcon.vue'
import GlobalIcon from '@/components/icon/GlobalIcon.vue'
import TelegramIcon from '@/components/icon/TelegramIcon.vue'
import WhatsAppIcon from '@/components/icon/WhatsAppIcon.vue'
</script>

<template>
  <footer>
    <div class="footer__container">
      <GreyLogoIcon class="grey__logo-icon"/>
      <p class="footer__container__policy">Политика конфиденциальности</p>
      <div class="footer__container__contact">
        <SmsIcon />
        <p>pinkchicken@adaurum.ru</p>
      </div>
      <div class="footer__container__lang">
        <GlobalIcon />
        <p class="footer__container__lang-selected">RU</p>
        <p>EN</p>
        <p>TUR</p>
      </div>
      <div class="footer__container__social">
        <TelegramIcon />
        <WhatsAppIcon />
      </div>
    </div>
  </footer>
</template>

<style scoped>

</style>