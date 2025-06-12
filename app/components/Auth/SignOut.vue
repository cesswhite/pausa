<template>
    <UButton block :aria-label="label" :label="label" @click="signOut" icon="i-lucide-log-out" variant="link"
        color="neutral" class="cursor-pointer flex items-center justify-start gap-2 px-2 py-2.5" />
</template>

<script setup lang="ts">
const props = defineProps<{
    label?: string
}>()
const client = useSupabaseClient();
const signOut = async () => {
    const { error } = await client.auth.signOut();
    if (error) return;
    navigateTo('/');
};
</script>