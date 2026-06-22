import type { NavItem } from '@/shared/types/navigation'

export const navigationItems: NavItem[] = [
  {
    key: 'about',
    labelKey: 'nav.about',
    to: '/about',
  },
  {
    key: 'technology',
    labelKey: 'nav.technology',
    to: '/technology',
  },
  {
    key: 'traits',
    labelKey: 'nav.traits',
    to: '/traits',
  },
  {
    key: 'founding-team',
    labelKey: 'nav.foundingTeam',
    to: '/founding-team',
  },
  {
    key: 'news-research',
    labelKey: 'nav.newsResearch',
    to: '/news-research',
  },
  {
    key: 'contact-us',
    labelKey: 'nav.contact',
    to: '/contact',
  },
]
