<template>
    <NuxtLayout name="dashboard">
        <DashboardContainer />
    </NuxtLayout>
</template>

<script setup lang="ts">
definePageMeta({
    title: 'Dashboard',
    description: 'Minimun dashboard for the application',
    middleware: 'auth'
})
</script>