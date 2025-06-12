<template>
    <NuxtLayout name="dashboard">
        Settings
    </NuxtLayout>
</template>

<script setup lang="ts">
definePageMeta({
    middleware: 'auth'
})
</script>