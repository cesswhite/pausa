<template>
    <UButton block :aria-label="label" :label="label" @click="handleSignOut" icon="i-lucide-log-out" variant="link"
        color="neutral" class="cursor-pointer flex items-center justify-start gap-2 px-2 py-2.5" />
</template>

<script setup lang="ts">
const props = defineProps<{
    label?: string
}>()

const { signOut } = useAuthActions()

const handleSignOut = async () => {
    await signOut()
}
</script>