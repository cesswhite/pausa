<template>
    <div class="h-full w-full relative">
        <NuxtLayout name="default">
            <LandingHero />
            <LandingFeatures />
            <LandingAbout />
        </NuxtLayout>
    </div>
</template>

<script setup lang="ts">
const session = useSupabaseSession()

watchEffect(async () => {
    if (session.value?.access_token) {
        await navigateTo('/app/dashboard');
    }
});

</script>