<script setup lang="ts">

import AddFileIcon from '@/components/icon/AddFileIcon.vue'
import SendImgIcon from '@/components/icon/SendImgIcon.vue'
import SendMessageIcon from '@/components/icon/SendMessageIcon.vue'
import { onMounted } from 'vue'

onMounted(() =>{
  let textArea = document.querySelector('textarea') as HTMLTextAreaElement
  textArea.addEventListener('keydown', (e) => {
    if(e.keyCode == 13 && !e.shiftKey) {
      e.preventDefault()
    }
  })
})

</script>

<template>
  <div class="chat_message__container">
    <textarea class="chat__message__area" placeholder="Напишите сообщение помошнику" maxlength="250" />
    <div class="chat__message__footer">
      <div class="chat_message__footer-left">
        <AddFileIcon />
        <SendImgIcon />
      </div>
      <SendMessageIcon />
    </div>
  </div>
</template>

<style scoped>
</style>