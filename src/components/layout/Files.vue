<script setup lang="ts">
import { useFilesStore } from '@/stores/counter'
import { ref } from 'vue'
import ArrowIcon from '@/components/icon/ArrowIcon.vue'
import FileXmlIcon from '@/components/icon/FileXmlIcon.vue'
import DoneIcon from '@/components/icon/DoneIcon.vue'
import WarningIcon from '@/components/icon/WarningIcon.vue'
import DownloadIcon from '@/components/icon/DownloadIcon.vue'
import RefreshIcon from '@/components/icon/RefreshIcon.vue'

const store = useFilesStore()
const files = ref(store.files)
const show = ref({ media: false, report: false })
const showFile = ref({})
</script>

<template>
  <div class="cardContainer">
    <h2>Файлы</h2>
    <div v-if="files.media.length === 0 && files.report.length === 0" class="files">
      <img src="@/assets/img/fileBg.png" />
      <p>Закажи у личного помощника медиаплан. Он появится в этом разделе</p>
    </div>
    <div v-else class="files__container">
      <div class="files__media__container">
        <div v-if="files.media.length !== 0" class="files__media__wrapper" @click="show.media = !show.media">
          <h3>Медиаплан</h3>
          <ArrowIcon :style="show.media ? 'transform: rotate(180deg)' : ''"></ArrowIcon>
        </div>
        <div v-if="show.media" class="files__show">
          <div v-for="(file, index) in files.media" style='width: 100%;   flex-shrink: 1' :key="index" @click="showFile = file">
            <div class="files__file">
              <FileXmlIcon />
              <p>{{ file.name }} {{ file.date.slice(3, 5) }}/{{ file.date.slice(-2) }}</p>
              <DownloadIcon v-if="file.status"></DownloadIcon>
              <RefreshIcon v-else></RefreshIcon>
            </div>
            <div v-if="showFile === file">
              <div v-if="file.status" class="files__status">
                <DoneIcon></DoneIcon>
                <p>Медиаплан готов от {{ file.date }}</p>
              </div>
              <div v-else class="files__status">
                <WarningIcon></WarningIcon>
                <p>Медиаплан в процессе составления</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="files__media__container">
        <div v-if="files.report.length !== 0" class="files__media__wrapper" @click="show.report = !show.report">
          <h3>Отчёт</h3>
          <ArrowIcon :style="show.report ? 'transform: rotate(180deg)' : ''"></ArrowIcon>
        </div>
        <div v-if="show.report" class="files__show">
          <div v-for="(file, index) in files.report" style='width: 100%' :key="index" @click="showFile = file">
            <div class="files__file">
              <FileXmlIcon />
              <p>{{ file.name }} {{ file.date.slice(3, 5) }}/{{ file.date.slice(-2) }}</p>
              <DownloadIcon v-if="file.status"></DownloadIcon>
              <RefreshIcon v-else></RefreshIcon>
            </div>
            <div v-if="showFile === file">
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
        </div>
      </div>
    </div>
  </div>
</template>