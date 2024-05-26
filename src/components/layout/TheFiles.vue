<script setup lang="ts">
import { useFilesStore } from '@/stores/store'
import { ref } from 'vue'
import ArrowIcon from '@/components/icon/ArrowIcon.vue'
import PCFile from '@/components/common/PCFile.vue'

const store = useFilesStore()
const files = ref(store.files)
const show = ref({ media: false, report: false })
</script>

<template>
  <div class="cardContainer files__card">
    <h2>Файлы</h2>
    <div v-if="files.media.length === 0 && files.report.length === 0" class="files">
      <img src="@/assets/img/fileBg.png" />
      <h4>Закажи у личного помощника медиаплан. Он появится в этом разделе</h4>
    </div>
    <div v-else class="files__container">
      <div class="files__media__container">
        <div
          v-if="files.media.length !== 0"
          class="files__media__wrapper"
          @click="show.media = !show.media"
        >
          <h3>Медиаплан</h3>
          <ArrowIcon :style="show.media ? 'transform: rotate(180deg)' : ''"></ArrowIcon>
        </div>
        <div v-if="show.media" class="files__show">
          <PCFile type="media" />
        </div>
      </div>
      <div class="files__media__container">
        <div
          v-if="files.report.length !== 0"
          class="files__media__wrapper"
          @click="show.report = !show.report"
        >
          <h3>Отчёт</h3>
          <ArrowIcon :style="show.report ? 'transform: rotate(180deg)' : ''"></ArrowIcon>
        </div>
        <div v-if="show.report" class="files__show">
          <PCFile type="report" />
        </div>
      </div>
    </div>
  </div>
  <div class="files__dropdown">
    <div class="files__dropdown__media">
      <div class="files__dropdown__button">Медиапланы</div>
      <div class="files__dropdown__content">
        <h3>Медиапланы</h3>
        <PCFile type="media" />
      </div>
    </div>
    <div class="files__dropdown__report">
      <div class="files__dropdown__button-secondary">Отчёты</div>
      <div class="files__dropdown__content">
        <h3>Отчёты</h3>
        <PCFile type="report" />
      </div>
    </div>
  </div>
</template>
