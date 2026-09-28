<template>
  <NuxtLayout>
    <UApp>
      <NuxtPage />
    </UApp>
  </NuxtLayout>
</template>

<script setup lang="ts">
//See reference here: https://x.com/Atinux/status/1912803617566081396
useFaviconFromTheme()
const route = useRoute()
const isPublicPage = computed(() => route.path === '/')
const siteUrl = 'https://pausa.ecostudios.dev/'

useSeoMeta({
  title: "Pausa | The most simple way to integrate the auth flow into your App in seconds!",
  ogTitle: "Pausa | The most simple way to integrate the auth flow into your App in seconds!",
  description: "Pausa is the most simple way to integrate the auth flow into your App in seconds!",
  ogDescription: "Pausa is the most simple way to integrate the auth flow into your App in seconds!",
  twitterCard: "summary",
  ogUrl: () => isPublicPage.value ? siteUrl : undefined,
  ogType: 'website',
  ogLocale: 'en_US',
  robots: () => route.path.startsWith('/auth/') || route.path.startsWith('/app/') ? 'noindex' : undefined,
  twitterTitle: "Pausa | The most simple way to integrate the auth flow into your App in seconds!",
  twitterDescription: "Pausa is the most simple way to integrate the auth flow into your App in seconds!",
});

useHead(() => ({
  link: isPublicPage.value ? [{ rel: 'canonical', href: siteUrl }] : [],
  script: isPublicPage.value ? [{
    type: 'application/ld+json',
    innerHTML: JSON.stringify({
      '@context': 'https://schema.org',
      '@graph': [
        { '@type': 'WebSite', '@id': `${siteUrl}#website`, url: siteUrl, name: 'Pausa', inLanguage: 'en' },
        { '@type': 'WebPage', '@id': `${siteUrl}#webpage`, url: siteUrl, name: 'Pausa', inLanguage: 'en', isPartOf: { '@id': `${siteUrl}#website` } },
      ],
    }),
  }] : [],
}))

useHead({
  htmlAttrs: {
    lang: 'en'
  },
  link: [
    {
      rel: 'icon',
      type: 'image/svg+xml',
      href: '/favicon.svg'
    }
  ]
})
</script>
