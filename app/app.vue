<template>
  <NuxtLayout>
    <AppLoadingFull />
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


<style>
.page-enter-active,
.page-leave-active {
  transition: all 0.2s;
}

.page-leave-to {
  opacity: 0;
  transform: translateY(-5px);
}

.page-enter-from {
  opacity: 0;
  transform: translateY(5px);
}
</style>
