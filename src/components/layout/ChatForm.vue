<script setup lang="ts">
import MessageArea from '@/components/layout/MessageArea.vue'
import AssistantSvg from '@/components/icon/AssistantSvg.vue'
import PCButton from '@/components/common/PCButton.vue'
import { ref } from 'vue'
import type { MessageI } from '@/types/types'
import Testapi from '@/api/testapi'

const messages = ref<MessageI[]>([])

function test(value: string) {
  messages.value.push({
    text: value,
    date: new Date().toLocaleTimeString().slice(0, -3),
    from: 'user'
  })
  Testapi.sendMessage(value).then((res: MessageI) => messages.value.push(res))
}
</script>

<template>
  <div class="chat">
    <div v-if="messages.length === 0" class="chat__content">
      <AssistantSvg></AssistantSvg>
      <h4>
        Это чат с администратором. Ты можешь с ним пообщаться по любому вопросу о нашем сервисе и
        узнать о ходе работы
      </h4>
    </div>
    <div v-else class="chat__messages">
      <p class="chat__messages__title">Сегодня, {{ messages[0].date }}</p>
      <div
        v-for="(message, index) in messages"
        :key="index"
        :class="
          message.from === 'user'
            ? 'chat__messages__message-user'
            : 'chat__messages__message-assistant'
        "
      >
        <div class="chat__messages__message">
          {{ message.text }}
        </div>
        <p>{{ message.date }}</p>
      </div>
    </div>
    <div>
      <div class="chat__services">
        <PCButton @click="test('Заказать медиаплан')">Заказать медиаплан</PCButton>
        <PCButton class-prop="default__button-secondary" @click="test('Заказать отчёт')"
          >Заказать отчет</PCButton
        >
      </div>
      <MessageArea @test="test"></MessageArea>
    </div>
  </div>
</template>

<style scoped></style>
