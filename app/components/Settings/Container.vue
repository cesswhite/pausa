<template>
    <div class="grid grid-cols-12 gap-4 mt-1 w-full max-w-screen-sm mx-auto">
        <div class="col-span-full">
            <AppCard>
                <template #title>
                    Change Password
                </template>
                <template #content>
                    <SettingsResetPassword />
                </template>
            </AppCard>
        </div>
    </div>
</template>

<script setup lang="ts">
const user = useSupabaseUser()
</script>
