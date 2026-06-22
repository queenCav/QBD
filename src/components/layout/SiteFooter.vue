<template>
  <footer class="site-footer">
    <div class="site-footer__inner">
      <div class="site-footer__brand">
        <RouterLink class="footer-brand" to="/" :aria-label="t('brand.name')">
          <span class="footer-brand__mark">QBD</span>
          <span class="footer-brand__text">
            <small>GENOME</small>
            <small>ENGINEERING</small>
          </span>
        </RouterLink>
        <p>{{ t('footer.description') }}</p>
        <div class="footer-socials" :aria-label="t('footer.socialLabel')">
          <a v-for="social in socials" :key="social.key" :href="social.href" :aria-label="social.label">
            {{ social.label }}
          </a>
        </div>
      </div>

      <nav class="footer-nav" :aria-label="t('footer.navLabel')">
        <section v-for="group in footerGroups" :key="group.key" class="footer-nav__group">
          <h2>{{ t(group.titleKey) }}</h2>
          <RouterLink v-for="link in group.links" :key="link.labelKey" :to="link.to">
            {{ t(link.labelKey) }}
          </RouterLink>
        </section>

        <section class="footer-nav__group footer-contact">
          <h2>{{ t('footer.contact.title') }}</h2>
          <p>{{ t('footer.contact.address') }}</p>
          <a href="mailto:info@qbd.com">info@qbd.com</a>
          <a href="tel:+862150803067">+86 21-5080 3067</a>
        </section>
      </nav>
    </div>

    <div class="site-footer__bottom">
      <p>{{ t('footer.copyright') }}</p>
      <div>
        <RouterLink to="/privacy">{{ t('footer.privacy') }}</RouterLink>
        <span aria-hidden="true" />
        <RouterLink to="/terms">{{ t('footer.terms') }}</RouterLink>
      </div>
    </div>
  </footer>
</template>

<script setup lang="ts">
import { useI18n } from 'vue-i18n'

const { t } = useI18n()

const socials = [
  { key: 'linkedin', label: 'in', href: 'https://www.linkedin.com' },
  { key: 'x', label: 'X', href: 'https://x.com' },
  { key: 'wechat', label: 'We', href: '#' },
  { key: 'mail', label: '@', href: 'mailto:info@qbd.com' },
]

const footerGroups = [
  {
    key: 'about',
    titleKey: 'footer.groups.about.title',
    links: [
      { labelKey: 'footer.groups.about.links.about', to: '/about' },
      { labelKey: 'footer.groups.about.links.leadership', to: '/founding-team' },
      { labelKey: 'footer.groups.about.links.careers', to: '/about' },
    ],
  },
  {
    key: 'technology',
    titleKey: 'footer.groups.technology.title',
    links: [
      { labelKey: 'footer.groups.technology.links.genomeEditing', to: '/technology' },
      { labelKey: 'footer.groups.technology.links.transformation', to: '/technology' },
      { labelKey: 'footer.groups.technology.links.biosafety', to: '/technology' },
      { labelKey: 'footer.groups.technology.links.traitDevelopment', to: '/technology' },
    ],
  },
  {
    key: 'traits',
    titleKey: 'footer.groups.traits.title',
    links: [
      { labelKey: 'footer.groups.traits.links.soybean', to: '/traits' },
      { labelKey: 'footer.groups.traits.links.rice', to: '/traits' },
      { labelKey: 'footer.groups.traits.links.wheat', to: '/traits' },
      { labelKey: 'footer.groups.traits.links.corn', to: '/traits' },
      { labelKey: 'footer.groups.traits.links.other', to: '/traits' },
    ],
  },
  {
    key: 'news',
    titleKey: 'footer.groups.news.title',
    links: [
      { labelKey: 'footer.groups.news.links.news', to: '/news-research' },
      { labelKey: 'footer.groups.news.links.highlights', to: '/news-research' },
      { labelKey: 'footer.groups.news.links.events', to: '/news-research' },
    ],
  },
]
</script>
