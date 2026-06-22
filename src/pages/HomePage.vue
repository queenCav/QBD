<template>
  <section id="home" class="home-hero">
    <img class="home-hero__image" src="@/assets/images/home-hero.png" alt="" />
    <div class="home-hero__shade" aria-hidden="true" />

    <div class="home-hero__inner">
      <div class="home-hero__content">
        <h1>
          <span>{{ t('home.hero.titleLine1') }}</span>
          <span>{{ t('home.hero.titleLine2') }}</span>
          <strong>{{ t('home.hero.titleHighlight1') }}</strong>
          <strong>{{ t('home.hero.titleHighlight2') }}</strong>
        </h1>
        <span class="home-hero__accent" aria-hidden="true" />
        <p class="home-hero__description">{{ t('home.hero.description') }}</p>

        <div class="hero-actions">
          <RouterLink class="button button--primary" to="/technology">
            {{ t('home.hero.primaryAction') }}
            <span aria-hidden="true">-></span>
          </RouterLink>
          <RouterLink class="button button--ghost" to="/about">
            {{ t('home.hero.secondaryAction') }}
            <span aria-hidden="true">-></span>
          </RouterLink>
          <button class="button button--outline" type="button" @click="isReportPreviewOpen = true">
            {{ t('home.hero.reportAction') }}
            <span aria-hidden="true">-></span>
          </button>
        </div>
      </div>
    </div>
  </section>

  <section id="leadership" class="leadership-band" aria-labelledby="leadership-title">
    <div class="leadership-band__inner">
      <div class="leadership-heading">
        <h2 id="leadership-title">{{ t('home.leadership.title') }}</h2>
        <span aria-hidden="true" />
      </div>

      <div class="leadership-grid">
        <article v-for="leader in leaders" :key="leader.key" class="leader-card">
          <img class="leader-card__photo" :src="leader.image" :alt="t(leader.nameKey)" />
          <div class="leader-card__body">
            <h3>{{ t(leader.nameKey) }}</h3>
            <p class="leader-card__role">{{ t('home.leadership.role') }}</p>
            <RouterLink class="leader-card__link" :to="leader.to">
              {{ t('home.leadership.learnMore') }}
              <span aria-hidden="true">-></span>
            </RouterLink>
          </div>
        </article>
      </div>
    </div>
  </section>

  <section id="innovation" class="innovation-band" aria-labelledby="innovation-title">
    <div class="innovation-band__inner">
      <div class="innovation-heading">
        <h2 id="innovation-title">{{ t('home.innovation.title') }}</h2>
        <span aria-hidden="true" />
      </div>

      <div class="innovation-stats">
        <article v-for="stat in innovationStats" :key="stat.key" class="innovation-stat">
          <span class="innovation-stat__icon" aria-hidden="true">
            <svg v-if="stat.icon === 'dna'" viewBox="0 0 48 48">
              <path d="M14 7c14 7 19 27 20 34" />
              <path d="M34 7C20 14 15 34 14 41" />
              <path d="M19 12h14" />
              <path d="M15 20h22" />
              <path d="M13 28h22" />
              <path d="M15 36h14" />
            </svg>
            <svg v-else-if="stat.icon === 'sprout'" viewBox="0 0 48 48">
              <path d="M24 40V22" />
              <path d="M23 23c-8 0-13-5-14-13 8 1 14 6 14 13Z" />
              <path d="M25 24c8 0 13-5 14-13-8 1-14 6-14 13Z" />
              <path d="M12 40h24" />
            </svg>
            <svg v-else-if="stat.icon === 'globe'" viewBox="0 0 48 48">
              <circle cx="24" cy="24" r="17" />
              <path d="M7 24h34" />
              <path d="M24 7c5 5 7 11 7 17s-2 12-7 17" />
              <path d="M24 7c-5 5-7 11-7 17s2 12 7 17" />
            </svg>
            <svg v-else viewBox="0 0 48 48">
              <circle cx="24" cy="16" r="6" />
              <path d="M14 38c1-8 5-12 10-12s9 4 10 12" />
              <circle cx="12" cy="21" r="5" />
              <path d="M5 38c1-6 4-9 9-10" />
              <circle cx="36" cy="21" r="5" />
              <path d="M43 38c-1-6-4-9-9-10" />
            </svg>
          </span>
          <div>
            <strong>{{ t(stat.valueKey) }}</strong>
            <p>{{ t(stat.labelKey) }}</p>
          </div>
        </article>
      </div>

      <div class="innovation-cards">
        <article
          v-for="card in innovationCards"
          :key="card.key"
          class="innovation-card"
        >
          <img class="innovation-card__image" :src="card.image" :alt="t(card.imageAltKey)" />
          <div class="innovation-card__shade" aria-hidden="true" />
          <div class="innovation-card__content">
            <p class="innovation-card__eyebrow">{{ t(card.eyebrowKey) }}</p>
            <h3>{{ t(card.titleKey) }}</h3>
            <p class="innovation-card__description">{{ t(card.descriptionKey) }}</p>
            <RouterLink class="innovation-card__link" :to="card.to">
              {{ t(card.actionKey) }}
              <span aria-hidden="true">-></span>
            </RouterLink>
          </div>
        </article>
      </div>
    </div>
  </section>

  <section id="latest-news" class="latest-news-band" aria-labelledby="latest-news-title">
    <div class="latest-news-band__inner">
      <div class="latest-news-heading">
        <h2 id="latest-news-title">{{ t('home.news.title') }}</h2>
        <RouterLink class="latest-news-heading__link" to="/news-research">
          {{ t('home.news.viewAll') }}
          <span aria-hidden="true">-></span>
        </RouterLink>
      </div>

      <div class="latest-news-grid">
        <article v-for="item in latestNews" :key="item.key" class="news-card">
          <div class="news-card__media">
            <img :src="item.image" :alt="t(item.imageAltKey)" />
            <span>{{ t(item.categoryKey) }}</span>
          </div>
          <div class="news-card__body">
            <time :datetime="item.datetime">{{ t(item.dateKey) }}</time>
            <h3>{{ t(item.titleKey) }}</h3>
            <p>{{ t(item.descriptionKey) }}</p>
            <RouterLink class="news-card__link" :to="item.to">
              {{ t('home.news.readMore') }}
              <span aria-hidden="true">-></span>
            </RouterLink>
          </div>
        </article>
      </div>
    </div>
  </section>

  <section class="home-cta-band" aria-labelledby="home-cta-title">
    <div class="home-cta-band__inner">
      <div class="home-cta-band__content">
        <h2 id="home-cta-title">{{ t('home.cta.title') }}</h2>
        <p>{{ t('home.cta.description') }}</p>
      </div>
      <RouterLink class="home-cta-band__link" to="/contact">
        {{ t('home.cta.action') }}
        <span aria-hidden="true">-></span>
      </RouterLink>
    </div>
  </section>

  <Teleport to="body">
    <div v-if="isReportPreviewOpen" class="report-modal" role="dialog" aria-modal="true" :aria-labelledby="'report-preview-title'">
      <div class="report-modal__backdrop" @click="closeReportPreview" />
      <div class="report-modal__panel">
        <div class="report-modal__header">
          <div>
            <p class="report-modal__eyebrow">{{ t('home.reportPreview.eyebrow') }}</p>
            <h2 id="report-preview-title">{{ t('home.reportPreview.title') }}</h2>
          </div>
          <button class="report-modal__close" type="button" :aria-label="t('home.reportPreview.close')" @click="closeReportPreview">
            ×
          </button>
        </div>

        <div class="report-modal__stage">
          <button class="report-modal__nav report-modal__nav--prev" type="button" :aria-label="t('home.reportPreview.previous')" @click="previousReportSlide">
            ‹
          </button>
          <img :src="currentReportSlide.src" :alt="t('home.reportPreview.slideAlt', { current: currentReportSlideIndex + 1, total: reportSlides.length })" />
          <button class="report-modal__nav report-modal__nav--next" type="button" :aria-label="t('home.reportPreview.next')" @click="nextReportSlide">
            ›
          </button>
        </div>

        <div class="report-modal__footer">
          <p>
            {{ t('home.reportPreview.pageIndicator', { current: currentReportSlideIndex + 1, total: reportSlides.length }) }}
          </p>
          <div>
            <a class="report-modal__download" href="/reports/QBD-website-menu-overview.pptx" download>
              {{ t('home.reportPreview.download') }}
            </a>
          </div>
        </div>
      </div>
    </div>
  </Teleport>
</template>

<script setup lang="ts">
import { computed, ref } from 'vue'
import leaderGaoCaixia from '@/assets/images/gaocaixia.png'
import leaderHaiquan from '@/assets/images/haiquan.png'
import leaderKeven from '@/assets/images/keven.png'
import homeHeroImage from '@/assets/images/home-hero.png'
import innovationTechnologyImage from '@/assets/images/innovation-technology.png'
import innovationTraitsImage from '@/assets/images/innovation-traits.png'
import technologyImage from '@/assets/images/hero-tech.png'
import { useI18n } from 'vue-i18n'

const { t } = useI18n()
const isReportPreviewOpen = ref(false)
const currentReportSlideIndex = ref(0)
const reportSlides = Array.from({ length: 9 }, (_, index) => ({
  src: `/reports/ppt-preview/slide-${String(index + 1).padStart(2, '0')}.png`,
}))

const currentReportSlide = computed(() => reportSlides[currentReportSlideIndex.value])

function previousReportSlide() {
  currentReportSlideIndex.value =
    (currentReportSlideIndex.value - 1 + reportSlides.length) % reportSlides.length
}

function nextReportSlide() {
  currentReportSlideIndex.value = (currentReportSlideIndex.value + 1) % reportSlides.length
}

function closeReportPreview() {
  isReportPreviewOpen.value = false
}

const leaders = [
  {
    key: 'gaocaixia',
    nameKey: 'home.leadership.members.gaocaixia.name',
    image: leaderGaoCaixia,
    to: '/founding-team',
  },
  {
    key: 'kevin',
    nameKey: 'home.leadership.members.kevin.name',
    image: leaderKeven,
    to: '/founding-team',
  },
  {
    key: 'haiquan',
    nameKey: 'home.leadership.members.haiquan.name',
    image: leaderHaiquan,
    to: '/founding-team',
  },
]

const innovationStats = [
  {
    key: 'certificates',
    icon: 'dna',
    valueKey: 'home.innovation.stats.certificates.value',
    labelKey: 'home.innovation.stats.certificates.label',
  },
  {
    key: 'crops',
    icon: 'sprout',
    valueKey: 'home.innovation.stats.crops.value',
    labelKey: 'home.innovation.stats.crops.label',
  },
  {
    key: 'global',
    icon: 'globe',
    valueKey: 'home.innovation.stats.global.value',
    labelKey: 'home.innovation.stats.global.label',
  },
  {
    key: 'worldClass',
    icon: 'team',
    valueKey: 'home.innovation.stats.worldClass.value',
    labelKey: 'home.innovation.stats.worldClass.label',
  },
]

const innovationCards = [
  {
    key: 'technology',
    image: innovationTechnologyImage,
    imageAltKey: 'home.innovation.cards.technology.imageAlt',
    eyebrowKey: 'home.innovation.cards.technology.eyebrow',
    titleKey: 'home.innovation.cards.technology.title',
    descriptionKey: 'home.innovation.cards.technology.description',
    actionKey: 'home.innovation.cards.technology.action',
    to: '/technology',
  },
  {
    key: 'traits',
    image: innovationTraitsImage,
    imageAltKey: 'home.innovation.cards.traits.imageAlt',
    eyebrowKey: 'home.innovation.cards.traits.eyebrow',
    titleKey: 'home.innovation.cards.traits.title',
    descriptionKey: 'home.innovation.cards.traits.description',
    actionKey: 'home.innovation.cards.traits.action',
    to: '/traits',
  },
]

const latestNews = [
  {
    key: 'rd-center',
    image: homeHeroImage,
    imageAltKey: 'home.news.items.rdCenter.imageAlt',
    categoryKey: 'home.news.items.rdCenter.category',
    dateKey: 'home.news.items.rdCenter.date',
    datetime: '2025-05-21',
    titleKey: 'home.news.items.rdCenter.title',
    descriptionKey: 'home.news.items.rdCenter.description',
    to: '/news-research',
  },
  {
    key: 'base-editing',
    image: technologyImage,
    imageAltKey: 'home.news.items.baseEditing.imageAlt',
    categoryKey: 'home.news.items.baseEditing.category',
    dateKey: 'home.news.items.baseEditing.date',
    datetime: '2025-05-08',
    titleKey: 'home.news.items.baseEditing.title',
    descriptionKey: 'home.news.items.baseEditing.description',
    to: '/news-research',
  },
  {
    key: 'partnership',
    image: homeHeroImage,
    imageAltKey: 'home.news.items.partnership.imageAlt',
    categoryKey: 'home.news.items.partnership.category',
    dateKey: 'home.news.items.partnership.date',
    datetime: '2025-04-22',
    titleKey: 'home.news.items.partnership.title',
    descriptionKey: 'home.news.items.partnership.description',
    to: '/news-research',
  },
  {
    key: 'biosafety',
    image: technologyImage,
    imageAltKey: 'home.news.items.biosafety.imageAlt',
    categoryKey: 'home.news.items.biosafety.category',
    dateKey: 'home.news.items.biosafety.date',
    datetime: '2025-04-10',
    titleKey: 'home.news.items.biosafety.title',
    descriptionKey: 'home.news.items.biosafety.description',
    to: '/news-research/biosafety-certificate-approval',
  },
]
</script>
