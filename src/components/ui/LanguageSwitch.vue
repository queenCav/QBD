<template>
  <div class="language-switch" aria-label="Language switch">
    <button type="button" :class="{ active: locale === 'en-US' }" @click="changeLocale('en-US')">
      EN
    </button>
    <span aria-hidden="true" />
    <button
      type="button"
      :class="{ active: locale === 'zh-CN' }"
      @click="changeLocale('zh-CN')"
    >
      {{ zhLabel }}
    </button>
  </div>
</template>

<script setup lang="ts">
import { onMounted } from 'vue'
import { useI18n } from 'vue-i18n'
import { persistLocale, type SupportLocale } from '@/locales'

const { locale } = useI18n()
const zhLabel = '\u4e2d\u6587'

function changeLocale(nextLocale: SupportLocale) {
  locale.value = nextLocale
  persistLocale(nextLocale)
}

onMounted(() => {
  persistLocale(locale.value as SupportLocale)
})
</script>
