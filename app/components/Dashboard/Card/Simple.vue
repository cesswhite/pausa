<template>
    <div
        class="flex flex-col items-start justify-between gap-2 rounded-md p-4 ring-1 ring-dark-950/5 shadow-sm shadow-dark-950/20 dark:ring-dark-50/10 dark:shadow-none dark:bg-dark-900/40 overflow-hidden">
        <div class="text-base font-bold text-dark-950 dark:text-dark-50 flex items-center justify-between w-full">
            <slot name="title" />
            <div class="flex items-center gap-2" v-if="props.blurContent">
                <UButton color="neutral" variant="link" size="xs" class="cursor-pointer"
                    :icon="blurContent ? 'i-lucide-eye' : 'i-lucide-eye-off'" @click="blurContent = !blurContent" />
            </div>
        </div>
        <div class="w-full relative mt-2" :class="{ 'pointer-events-none select-none blur-sm ': blurContent }">
            <slot name="content" />
        </div>
    </div>
</template>

<script setup lang="ts">
const props = defineProps<{
    blurContent?: boolean
}>()
const blurContent = ref(props.blurContent ?? false)
</script>