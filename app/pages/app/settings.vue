<template>
    <NuxtLayout name="dashboard">
        <SettingsContainer />
    </NuxtLayout>
</template>

<script setup lang="ts">
definePageMeta({
    title: 'Settings',
    description: 'Minimun settings for the application',
    middleware: 'auth'
})
</script>