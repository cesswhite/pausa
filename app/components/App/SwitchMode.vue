<template>
    <ClientOnly>
        <UButton block :aria-label="label" :label="label" @click="toggleDark" variant="link"
            class="cursor-pointer flex items-center justify-start gap-2" color="neutral" :icon="color.preference === 'dark'
                ? 'i-lucide-sun'
                : 'i-lucide-moon'
                " />
    </ClientOnly>
</template>

<script setup lang="ts">
const props = defineProps<{
    label?: string
}>()
const color = useColorMode();
function toggleDark() {
    color.preference = color.value === "dark" ? "light" : "dark";
}
</script>