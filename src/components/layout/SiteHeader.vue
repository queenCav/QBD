<template>
  <header class="site-header">
    <RouterLink class="brand" to="/" :aria-label="t('brand.name')" @click="isMenuOpen = false">
      <span class="brand__mark">QBD</span>
      <span class="brand__text">
        <small>GENOME</small>
        <small>ENGINEERING</small>
      </span>
    </RouterLink>

    <button
      class="nav-toggle"
      type="button"
      :aria-expanded="isMenuOpen"
      aria-controls="site-navigation"
      @click="isMenuOpen = !isMenuOpen"
    >
      <span />
      <span />
      <span />
    </button>

    <nav id="site-navigation" class="site-nav" :class="{ 'site-nav--open': isMenuOpen }">
      <RouterLink
        v-for="item in navigationItems"
        :key="item.key"
        class="site-nav__link"
        :class="{ 'site-nav__link--dropdown': item.hasDropdown }"
        :to="item.to"
        @click="isMenuOpen = false"
      >
        {{ t(item.labelKey) }}
      </RouterLink>
      <LanguageSwitch />
    </nav>
  </header>
</template>

<script setup lang="ts">
import { ref, watch } from 'vue'
import { useI18n } from 'vue-i18n'
import { useRoute } from 'vue-router'
import LanguageSwitch from '@/components/ui/LanguageSwitch.vue'
import { navigationItems } from '@/shared/config/navigation'

const { t } = useI18n()
const route = useRoute()
const isMenuOpen = ref(false)

watch(
  () => route.fullPath,
  () => {
    isMenuOpen.value = false
  },
)
</script>
