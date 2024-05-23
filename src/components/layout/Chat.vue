<script setup lang="ts">
import MessageArea from '@/components/layout/MessageArea.vue'
import AssistantSvg from '@/components/icon/AssistantSvg.vue'
import PCButton from '@/components/common/PCButton.vue'
</script>

<template>
  <div class="chat">
    <div class="chat__content">
      <AssistantSvg></AssistantSvg>
      <h3>
        Это чат с администратором. Ты можешь с ним пообщаться по любому вопросу о нашем сервисе и узнать о ходе
        работы
      </h3>
      </div>
    <div>
      <div class="chat__services">
        <PCButton>Заказать медиаплан</PCButton>
        <PCButton class-prop="default__button-secondary">Заказать отчет</PCButton>
      </div>
    <MessageArea></MessageArea>
    </div>

  </div>
</template>

<style scoped>

</style>