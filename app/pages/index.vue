<template>
    <div class="h-full w-full relative">
        <NuxtLayout name="default">
            <LandingHero />
        </NuxtLayout>
    </div>
</template>

<script setup lang="ts">
const session = useSupabaseSession()

watchEffect(async () => {
    if (session.value?.access_token) {
        await navigateTo('/dashboard');
    }
});

</script>