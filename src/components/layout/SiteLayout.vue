<template>
  <div class="site-shell">
    <SiteHeader />
    <main>
      <RouterView />
    </main>
    <SiteFooter />
  </div>
</template>

<script setup lang="ts">
import SiteFooter from './SiteFooter.vue'
import SiteHeader from './SiteHeader.vue'
</script>
