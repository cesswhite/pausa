<template>
    <div class="w-full relative">
        <nav class="flex flex-col gap-1">
            <ULink raw class="flex items-center gap-2 px-2 py-2.5 rounded-lg group"
                active-class="text-dark-900 bg-dark-950/5 hover:text-dark-950 hover:bg-dark-950/10 dark:text-dark-50/90 dark:bg-dark-800 dark:hover:text-dark-50 dark:hover:bg-dark-800"
                inactive-class="text-dark-950/60 hover:text-dark-900 hover:bg-dark-950/5 dark:text-dark-50/60 dark:hover:text-dark-50 dark:hover:bg-dark-50/5"
                to="/app/dashboard" size="lg">
                <UIcon name="i-lucide-home" class="size-4" />
                <span class="text-sm font-medium">Dashboard</span>
            </ULink>
            <ULink raw class="flex items-center gap-2 px-2 py-2.5 rounded-lg"
                active-class="text-dark-900 bg-dark-950/5 hover:text-dark-950 hover:bg-dark-950/10 dark:text-dark-50/90 dark:bg-dark-800 dark:hover:text-dark-50 dark:hover:bg-dark-800"
                inactive-class="text-dark-950/60 hover:text-dark-900 hover:bg-dark-950/5 dark:text-dark-50/60 dark:hover:text-dark-50 dark:hover:bg-dark-50/5"
                to="/app/settings" size="lg">
                <UIcon name="i-lucide-settings" class="size-4" />
                <span class="text-sm font-medium">Settings</span>
            </ULink>
        </nav>

    </div>
</template>

<script setup lang="ts">

</script>