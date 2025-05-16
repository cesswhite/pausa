<template>
    <div class="h-full w-full relative">
        <NuxtLayout name="default">
            <LandingHero />
        </NuxtLayout>
    </div>
</template>

<script setup lang="ts">
const session = useSupabaseSession()

if (session.value) {
    navigateTo('/dashboard')
}

useSeoMeta({
    title: "v4.20 | Opinionated Nuxt Starter Template",
    ogTitle: "v4.20 | Opinionated Nuxt Starter Template",
    description: "Opinionated Nuxt Starter Template Minimal, Fast, and Developer-Friendly by Eco Development Studios",
    ogDescription: "Opinionated Nuxt Starter Template Minimal, Fast, and Developer-Friendly by Eco Development Studios",
    ogImage: "https://res.cloudinary.com/dpvsklksg/image/upload/ecov4/v420-og-image.webp",
    twitterCard: "summary_large_image",
    ogUrl: 'https://v420.ecostudios.dev/',
    twitterImage: "https://res.cloudinary.com/dpvsklksg/image/upload/ecov4/v420-og-image.webp",
    twitterTitle: "v4.20 | Opinionated Nuxt Starter Template",
    twitterDescription: "Opinionated Nuxt Starter Template Minimal, Fast, and Developer-Friendly by Eco Development Studios",
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