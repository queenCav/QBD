<template>
  <section class="design-preview-page" :aria-labelledby="`${designKey}-preview-title`">
    <div class="design-preview-page__header">
      <p class="eyebrow">{{ t(eyebrowKey) }}</p>
      <h1 :id="`${designKey}-preview-title`">{{ t(titleKey) }}</h1>
      <p>{{ t('designPreview.description') }}</p>
    </div>

    <div class="design-preview-frame">
      <img :src="designImage" :alt="t(altKey)" />
    </div>
  </section>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import { useI18n } from 'vue-i18n'
import { useRoute } from 'vue-router'
import aboutDesign from '@/assets/designImg/关于我们.png'
import contactDesign from '@/assets/designImg/联系我们.png'
import foundingTeamDesign from '@/assets/designImg/创始人详情.png'
import newsDetailDesign from '@/assets/designImg/新闻详情.png'
import newsResearchDesign from '@/assets/designImg/新闻.png'
import technologyDesign from '@/assets/designImg/我们的技术.png'
import traitsDesign from '@/assets/designImg/特征.png'

const route = useRoute()
const { t } = useI18n()

const designImages = {
  about: aboutDesign,
  technology: technologyDesign,
  traits: traitsDesign,
  foundingTeam: foundingTeamDesign,
  newsResearch: newsResearchDesign,
  newsDetail: newsDetailDesign,
  contact: contactDesign,
}

type DesignKey = keyof typeof designImages

const designKey = computed(() => {
  const key = String(route.meta.designKey ?? 'about')
  return key in designImages ? (key as DesignKey) : 'about'
})

const designImage = computed(() => designImages[designKey.value])
const eyebrowKey = computed(() => String(route.meta.eyebrowKey ?? 'brand.name'))
const titleKey = computed(() => String(route.meta.titleKey ?? 'brand.tagline'))
const altKey = computed(() => `designPreview.alt.${designKey.value}`)
</script>
