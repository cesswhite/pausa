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

useSeoMeta({
  title: "Pausa | The most simple way to integrate the auth flow into your App in seconds!",
  ogTitle: "Pausa | The most simple way to integrate the auth flow into your App in seconds!",
  description: "Pausa is the most simple way to integrate the auth flow into your App in seconds!",
  ogDescription: "Pausa is the most simple way to integrate the auth flow into your App in seconds!",
  ogImage: "https://res.cloudinary.com/dpvsklksg/image/upload/pausa/og-image.webp",
  twitterCard: "summary_large_image",
  ogUrl: 'https://pausa.ecostudios.dev/',
  twitterImage: "https://res.cloudinary.com/dpvsklksg/image/upload/pausa/og-image.webp",
  twitterTitle: "Pausa | The most simple way to integrate the auth flow into your App in seconds!",
  twitterDescription: "Pausa is the most simple way to integrate the auth flow into your App in seconds!",
  ogImageWidth: 1200,
  ogImageHeight: 630,
});

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