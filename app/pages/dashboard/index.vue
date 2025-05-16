<template>
    <NuxtLayout name="dashboard">
        <DashboardContainer />
    </NuxtLayout>
</template>

<script setup lang="ts">
definePageMeta({
    middleware: 'auth'
})
</script>