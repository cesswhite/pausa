<template>
    <UBreadcrumb :items="items">
        <template #separator>
            <span class="text-muted">/</span>
        </template>
    </UBreadcrumb>
</template>

<script setup lang="ts">
import type { BreadcrumbItem } from '@nuxt/ui'

const props = defineProps<{
    currentPage: string
}>()

const items = ref<BreadcrumbItem[]>([
    {
        label: 'App',
    },
    {
        label: props.currentPage,
    },
])
</script>
