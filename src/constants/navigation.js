export const navigationItems = [
  {
    id: 'home',
    label: 'Startseite',
    icon: 'home.svg',
    type: 'link',
    to: '/',
    action: 'scroll-top'
  },
  {
    id: 'packages',
    label: 'Leistungen',
    icon: 'package.svg',
    type: 'button',
    action: 'scroll-to-packages'
  },
  {
    id: 'whatsapp',
    label: 'WhatsApp',
    icon: 'whatsapp.svg',
    type: 'external',
    href: 'https://wa.me/491738528482'
  },
  {
    id: 'contact',
    label: 'Kontakt',
    icon: 'contact.svg',
    type: 'link',
    to: '/kontakt'
  },
  {
    id: 'language',
    label: 'Deutsch',
    icon: 'language.svg',
    type: 'button',
    action: 'cycle-language'
  }
];