import { createRouter, createWebHistory } from 'vue-router'
import HomePage from '@/pages/HomePage.vue'
import PlaceholderPage from '@/pages/PlaceholderPage.vue'

export const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  scrollBehavior: () => ({ top: 0 }),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomePage,
    },
    {
      path: '/about',
      name: 'about',
      component: PlaceholderPage,
      meta: {
        eyebrowKey: 'pages.about.eyebrow',
        titleKey: 'pages.about.title',
        designKey: 'about',
      },
    },
    {
      path: '/technology',
      name: 'technology',
      component: PlaceholderPage,
      meta: {
        eyebrowKey: 'pages.technology.eyebrow',
        titleKey: 'pages.technology.title',
        designKey: 'technology',
      },
    },
    {
      path: '/traits',
      name: 'traits',
      component: PlaceholderPage,
      meta: {
        eyebrowKey: 'pages.traits.eyebrow',
        titleKey: 'pages.traits.title',
        designKey: 'traits',
      },
    },
    {
      path: '/founding-team',
      name: 'founding-team',
      component: PlaceholderPage,
      meta: {
        eyebrowKey: 'pages.foundingTeam.eyebrow',
        titleKey: 'pages.foundingTeam.title',
        designKey: 'foundingTeam',
      },
    },
    {
      path: '/news-research',
      name: 'news-research',
      component: PlaceholderPage,
      meta: {
        eyebrowKey: 'pages.newsResearch.eyebrow',
        titleKey: 'pages.newsResearch.title',
        designKey: 'newsResearch',
      },
    },
    {
      path: '/news-research/biosafety-certificate-approval',
      name: 'news-detail',
      component: PlaceholderPage,
      meta: {
        eyebrowKey: 'pages.newsDetail.eyebrow',
        titleKey: 'pages.newsDetail.title',
        designKey: 'newsDetail',
      },
    },
    {
      path: '/contact',
      name: 'contact',
      component: PlaceholderPage,
      meta: {
        eyebrowKey: 'pages.contact.eyebrow',
        titleKey: 'pages.contact.title',
        designKey: 'contact',
      },
    },
  ],
})
