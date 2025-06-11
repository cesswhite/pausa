<template>
    <div class="w-full relative">
        <nav class="flex flex-col gap-2">
            <ULink raw class="flex items-center gap-2 px-2 py-2 rounded-lg group"
                active-class="bg-dark-100 dark:bg-dark-900 dark:hover:bg-dark-800 dark:text-dark-50/90 dark:hover:text-dark-50"
                to="/dashboard" size="lg">
                <UIcon name="i-lucide-home" class="size-4" />
                <span class="text-sm font-medium">Dashboard</span>
            </ULink>
            <ULink raw class="flex items-center gap-2 px-2 py-2 rounded-lg" active-class="bg-dark-100 dark:bg-dark-900"
                inactive-class="text-dark-900 dark:text-dark-50/60 hover:text-dark-900 dark:hover:text-dark-50"
                to="/dashboard/settings" size="lg">
                <UIcon name="i-lucide-settings" class="size-4" />
                <span class="text-sm font-medium">Settings</span>
            </ULink>
        </nav>

    </div>
</template>

<script setup lang="ts">

</script>