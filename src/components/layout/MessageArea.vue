<script setup lang="ts">
import AddFileIcon from '@/components/icon/AddFileIcon.vue'
import SendImgIcon from '@/components/icon/SendImgIcon.vue'
import SendMessageIcon from '@/components/icon/SendMessageIcon.vue'
import { onMounted, ref } from 'vue'
import PCButton from '@/components/common/PCButton.vue'

const emit = defineEmits(['test'])

onMounted(() => {
  let textArea = document.querySelector('textarea') as HTMLTextAreaElement
  textArea.addEventListener('keydown', (e) => {
    if (e.keyCode == 13 && !e.shiftKey) {
      e.preventDefault()
      textArea.blur()
      emit('test', test.value)
    }
  })
})

let test = ref('')

function setValue(e) {
  test.value = e.target.value
}
</script>

<template>
  <div class="chat_message__container">
    <textarea
      class="chat__message__area"
      placeholder="Напишите сообщение помошнику"
      maxlength="250"
      @change="(e) => setValue(e)"
    />
    <div class="chat__message__footer">
      <div class="chat_message__footer-left">
        <PCButton class-prop="icon-button">
          <AddFileIcon />
        </PCButton>
        <PCButton class-prop="icon-button">
          <SendImgIcon />
        </PCButton>
      </div>
      <div class="chat__messages__footer__button">
        <SendMessageIcon @click="$emit('test', test)" class="icon-button" />
        <p>Enter</p>
      </div>
    </div>
  </div>
</template>
