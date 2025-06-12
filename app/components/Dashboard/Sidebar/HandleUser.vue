<template>
    <div class="flex flex-col gap-2 w-full">
        <UDropdownMenu v-model:open="open" :items="items" :content="{
            align: 'start',
            side: 'top',
            sideOffset: 12,
        }" :ui="{
            content: 'w-70',
            group: '',
            item: 'group relative w-full flex items-center select-none outline-none before:absolute before:z-[-1] before:inset-px before:rounded-md data-disabled:cursor-not-allowed data-disabled:opacity-75 p-0',
        }">
            <UButton block color="neutral" variant="ghost" size="lg" class="w-full cursor-pointer">
                <template #leading>
                    <UAvatar :src="user?.user_metadata.picture" class="size-10" />
                </template>
                <template #default>
                    <div class="flex flex-col gap-0 text-left items-start justify-between w-full">
                        <span class="text-sm text-dark-900 dark:text-dark-50 font-medium">{{
                            user?.user_metadata.full_name }}</span>
                        <span class="text-xs text-dark-500 dark:text-dark-50/60">{{ user?.email }}</span>
                    </div>
                </template>
                <template #trailing>
                    <UIcon v-if="!open" name="i-lucide-chevron-down" color="neutral" variant="ghost" class="size-8" />
                    <UIcon v-else name="i-lucide-chevron-up" color="neutral" variant="ghost" class="size-8" />
                </template>

            </UButton>
            <template #dashboard>
                <UButton block color="neutral" variant="link"
                    class="cursor-pointer flex items-center justify-start px-2 py-2.5" icon="i-lucide-home"
                    label="Dashboard" />
            </template>
            <template #profile>
                <AppSwitchMode label="Switch theme" />
            </template>
            <template #logout>
                <AuthSignOut label="Sign Out" />
            </template>
        </UDropdownMenu>
    </div>
</template>

<script setup lang="ts">
import type { DropdownMenuItem } from '@nuxt/ui'
const user = useSupabaseUser()
const open = ref(false)
const items = ref<DropdownMenuItem[]>([[
    {
        label: 'Dashboard',
        icon: 'i-lucide-home',
        slot: 'dashboard'
    },
    {
        slot: 'profile'
    },
],
[{
    label: 'Logout',
    icon: 'i-lucide-log-out',
    slot: 'logout'
}]
])
</script>
