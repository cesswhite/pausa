<template>
    <div class="flex flex-col gap-2 w-full">
        <!-- <AuthSignOut />
        <AppSwitchMode /> -->
        <UDropdownMenu :items="items" :content="{
            align: 'start',
            side: 'top',
            sideOffset: 8
        }" :ui="{
            content: 'w-64'
        }">
            <UButton block color="neutral" variant="ghost" size="lg" class="w-full">
                <template #leading>
                    <UAvatar :src="user?.user_metadata.picture" class="size-12" />
                </template>
                <template #default>
                    <div class="flex flex-col gap-1 text-left items-start justify-between w-full">
                        <span class="text-sm font-medium">{{ user?.user_metadata.full_name }}</span>
                        <span class="text-xs text-neutral-500">{{ user?.email }}</span>
                    </div>
                </template>
                <template #trailing>
                    <UIcon name="i-lucide-chevron-down" color="neutral" variant="ghost" class="size-8" />
                </template>
            </UButton>
        </UDropdownMenu>
    </div>
</template>

<script setup lang="ts">
import type { DropdownMenuItem } from '@nuxt/ui'
const user = useSupabaseUser()

const items = ref<DropdownMenuItem[]>([[
    {
        label: 'Dashboard',
        icon: 'i-lucide-home'
    },
    {
        label: 'Profile',
        icon: 'i-lucide-user'
    },
],
[{
    label: 'Logout',
    icon: 'i-lucide-log-out'
}]
])
</script>
