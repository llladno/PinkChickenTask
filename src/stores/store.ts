import { ref } from 'vue'
import { defineStore } from 'pinia'

export const useFilesStore = defineStore('files', () => {
  const files = ref({
    media: [],
    report: []
  })

  function setMedia() {
    files.value.media = [
      ...files.value.media,
      { name: 'test', date: new Date().toLocaleDateString(), status: Math.random() > 0.5 }
    ]
  }

  function setReport() {
    files.value.report = [
      ...files.value.report,
      { name: 'test', date: new Date().toLocaleDateString(), status: Math.random() > 0.5 }
    ]
  }

  return { files, setMedia, setReport }
})
