<script setup lang="ts">
import FileXmlIcon from '@/components/icon/FileXmlIcon.vue'
import RefreshIcon from '@/components/icon/RefreshIcon.vue'
import DoneIcon from '@/components/icon/DoneIcon.vue'
import DownloadIcon from '@/components/icon/DownloadIcon.vue'
import WarningIcon from '@/components/icon/WarningIcon.vue'
import { ref } from 'vue'
import { useFilesStore } from '@/stores/store'

const store = useFilesStore()
const files = ref(store.files)
const showFile = ref({})
defineProps({
  type: String
})
</script>

<template>
  <div
    v-for="(file, index) in files[type]"
    style="width: 100%; flex-shrink: 1"
    :key="index"
    @click="showFile = file"
  >
    <div class="files__file">
      <FileXmlIcon />
      <p>{{ file.name }} {{ file.date.slice(3, 5) }}/{{ file.date.slice(-2) }}</p>
      <DownloadIcon v-if="file.status"></DownloadIcon>
      <RefreshIcon v-else></RefreshIcon>
    </div>
    <div v-if="showFile === file && type === 'media'">
      <div v-if="file.status" class="files__status">
        <DoneIcon></DoneIcon>
        <p>Медиаплан готов от {{ file.date }}</p>
      </div>
      <div v-else class="files__status">
        <WarningIcon></WarningIcon>
        <p>Медиаплан в процессе составления</p>
      </div>
    </div>
    <div v-else-if="showFile === file && type === 'report'">
      <div v-if="file.status" class="files__status">
        <DoneIcon />
        <p>Отчет готов от {{ file.date }}</p>
      </div>
      <div v-else class="files__status">
        <WarningIcon></WarningIcon>
        <p>Отчет в процессе составления</p>
      </div>
    </div>
  </div>
</template>
