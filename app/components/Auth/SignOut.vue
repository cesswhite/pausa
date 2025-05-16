<template>
    <UButton block @click="signOut" icon="i-lucide-log-out" variant="ghost" color="neutral" size="xs"
        class="flex items-center justify-start gap-2">
        Sign Out
    </UButton>
</template>
<script setup lang="ts">
const client = useSupabaseClient();
const signOut = async () => {
    const { error } = await client.auth.signOut();
    if (error) return;
    navigateTo('/');
};
</script>