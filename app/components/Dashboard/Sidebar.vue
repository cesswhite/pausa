<template>
    <div class="flex flex-col gap-4">
        <nav class="flex flex-col gap-4">
            <UButton to="/dashboard">
                Dashboard
            </UButton>
            <UButton to="/dashboard/settings">
                Settings
            </UButton>
        </nav>
        <AuthSignOut />
    </div>
</template>

<script setup lang="ts">

</script>