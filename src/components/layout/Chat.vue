<script setup lang="ts">
import MessageArea from '@/components/layout/MessageArea.vue'
import AssistantSvg from '@/components/icon/AssistantSvg.vue'
import PCButton from '@/components/common/PCButton.vue'
import { ref } from 'vue'
import { useFilesStore } from '@/stores/counter'

const messages = ref([])

function test(value: string) {

  if (value === 'Привет' || value === 'Здравствуйте' || value === 'привет' || value === 'здравствуйте') {
    setTimeout(()=>{
      const data = {
        text: 'Здравствуйте! Мы рады видеть тебя в нашем чате. Если хотите попробовать наши услуги, нажмите на кнопку "Заказать медиаплан" или "Заказать отчёт"',
        date: new Date().toLocaleTimeString().slice(0,-3),
        from: 'assistant'
      }
      messages.value.push(data)
    },1000)
  } else if(value === 'Заказать медиаплан') {
    useFilesStore().setMedia()
    setTimeout(()=> {
      const data = {
        text: 'Ваш медиаплан будет готов через некоторое время. Спасибо за понимание!',
        date: new Date().toLocaleTimeString().slice(0, -3),
        from: 'assistant'
      }
      messages.value.push(data)
    },1000)

  } else if(value === 'Заказать отчёт') {
    useFilesStore().setReport()
    setTimeout(()=> {
      const data = {
        text: 'Мы уже начали готовить ваш отчёт, он будет готов через некоторое время. Спасибо за понимание!',
        date: new Date().toLocaleTimeString().slice(0, -3),
        from: 'assistant'
      }
      messages.value.push(data)
    },1000)
  }
  const data = {
    text: value,
    date: new Date().toLocaleTimeString().slice(0,-3),
    from: 'user'
  }
  messages.value.push(data)
}
</script>

<template>
  <div class="chat">
    <div v-if="messages.length === 0" class="chat__content">
        <AssistantSvg></AssistantSvg>
        <h3>
          Это чат с администратором. Ты можешь с ним пообщаться по любому вопросу о нашем сервисе и узнать о ходе
          работы
        </h3>
    </div>
    <div v-else class="chat__messages">
      <h4>Сегодня, {{messages[0].date}}</h4>
      <div v-for="(message, index) in messages" :key="index" :class="message.from === 'user' ? 'chat__messages__message-user' : 'chat__messages__message-assistant'">
        <div class="chat__messages__message">
          {{message.text}}
        </div>
        <p>{{message.date}}</p>
      </div>
    </div>
    <div>
      <div class="chat__services">
        <PCButton @click="test('Заказать медиаплан')">Заказать медиаплан</PCButton>
        <PCButton class-prop="default__button-secondary" @click="test('Заказать отчёт')">Заказать отчет</PCButton>
      </div>
      <MessageArea @test="test"></MessageArea>
    </div>

  </div>
</template>

<style scoped>

</style>