<template>
    <div class="grid grid-cols-12 gap-4 mt-1">
        <div class="col-span-full md:col-span-6">
            <AppCard>
                <template #title>
                    General Information
                </template>
                <template #content>
                    <ul class="flex flex-col gap-2 w-full">
                        <li
                            class="flex items-center justify-between py-2 border-b border-dark-950/10 dark:border-dark-50/10">
                            <span class=" inline-block text-sm font-semibold text-dark-950 dark:text-dark-50">
                                Role
                            </span>
                            <span
                                class=" inline-block text-sm font-medium text-dark-950/50 dark:text-dark-50/60 capitalize">
                                {{ user?.role }}
                            </span>
                        </li>
                        <li
                            class="flex items-center justify-between py-2 border-b border-dark-950/10 dark:border-dark-50/10">
                            <span class=" inline-block text-sm font-semibold text-dark-950 dark:text-dark-50">
                                Email Confirmed
                            </span>
                            <span class=" inline-block text-sm font-medium text-dark-950/50 dark:text-dark-50/60">
                                {{ user?.email_confirmed_at ? new Date(user?.email_confirmed_at).toLocaleDateString() :
                                    '-' }}
                            </span>
                        </li>
                        <li
                            class="flex items-center justify-between py-2 border-b border-dark-950/10 dark:border-dark-50/10">
                            <span class=" inline-block text-sm font-semibold text-dark-950 dark:text-dark-50">
                                Phone
                            </span>
                            <span class=" inline-block text-sm font-medium text-dark-950/50 dark:text-dark-50/60">
                                {{ user?.phone || '-' }}
                            </span>
                        </li>
                        <li
                            class="flex items-center justify-between py-2 border-b border-dark-950/10 dark:border-dark-50/10">
                            <span class=" inline-block text-sm font-semibold text-dark-950 dark:text-dark-50">
                                Last Login
                            </span>
                            <span class=" inline-block text-sm font-medium text-dark-950/50 dark:text-dark-50/60">
                                {{ user?.last_sign_in_at ? new Date(user?.last_sign_in_at).toLocaleDateString() : '-' }}
                            </span>
                        </li>
                        <li
                            class="flex items-center justify-between py-2 border-b border-dark-950/10 dark:border-dark-50/10">
                            <span class=" inline-block text-sm font-semibold text-dark-950 dark:text-dark-50">
                                Current Provider
                            </span>
                            <span
                                class=" inline-block text-sm font-medium text-dark-950/50 dark:text-dark-50/60 capitalize">
                                {{ user?.app_metadata?.provider }}
                            </span>
                        </li>
                        <li class="flex items-center justify-between py-2">
                            <span class=" inline-block text-sm font-semibold text-dark-950 dark:text-dark-50">
                                Providers
                            </span>
                            <span
                                class=" inline-block text-sm font-medium text-dark-950/50 dark:text-dark-50/60 capitalize">
                                {{ user?.app_metadata?.providers?.join(', ') }}
                            </span>
                        </li>
                    </ul>
                </template>
            </AppCard>
        </div>
        <div class="col-span-full md:col-span-6">
            <AppCard>
                <template #title>
                    Personal Information
                </template>
                <template #content>
                    <ul class="flex flex-col gap-2 w-full">
                        <li
                            class="flex items-center justify-between py-2 border-b border-dark-950/10 dark:border-dark-50/10">
                            <span class=" inline-block text-sm font-semibold text-dark-950 dark:text-dark-50">
                                Profile Picture
                            </span>
                            <span
                                class=" inline-block text-sm font-medium text-dark-950/50 dark:text-dark-50/60 size-8 rounded-full overflow-hidden">
                                <img :src="user?.user_metadata?.picture || user?.user_metadata?.avatar_url"
                                    alt="Profile Picture" loading="lazy" class="size-full rounded-full object-cover">
                            </span>
                        </li>
                        <li
                            class="flex items-center justify-between py-2 border-b border-dark-950/10 dark:border-dark-50/10">
                            <span class=" inline-block text-sm font-semibold text-dark-950 dark:text-dark-50">
                                Name
                            </span>
                            <span
                                class=" inline-block text-sm font-medium text-dark-950/50 dark:text-dark-50/60 capitalize">
                                {{ user?.user_metadata?.full_name }}
                            </span>
                        </li>
                        <li
                            class="flex items-center justify-between py-2 border-b border-dark-950/10 dark:border-dark-50/10">
                            <span class=" inline-block text-sm font-semibold text-dark-950 dark:text-dark-50">
                                Email
                            </span>
                            <span class=" inline-block text-sm font-medium text-dark-950/50 dark:text-dark-50/60">
                                {{ user?.email }}
                            </span>
                        </li>
                        <li
                            class="flex items-center justify-between py-2 border-b border-dark-950/10 dark:border-dark-50/10">
                            <span class=" inline-block text-sm font-semibold text-dark-950 dark:text-dark-50">
                                Email Verified
                            </span>
                            <span class=" inline-block text-sm font-medium text-dark-950/50 dark:text-dark-50/60">
                                {{ user?.user_metadata?.email_verified ? 'Yes' : 'No' }}
                            </span>
                        </li>
                        <li class="flex items-center justify-between py-2">
                            <span class=" inline-block text-sm font-semibold text-dark-950 dark:text-dark-50">
                                Phone Verified
                            </span>
                            <span class=" inline-block text-sm font-medium text-dark-950/50 dark:text-dark-50/60">
                                {{ user?.user_metadata?.phone_verified ? 'Yes' : 'No' }}
                            </span>
                        </li>


                    </ul>
                </template>
            </AppCard>
        </div>
        <div class="col-span-full">
            <AppCard blur-content>
                <template #title>
                    User Metadata
                </template>
                <template #content>
                    <pre class="text-xs text-dark-950 dark:text-dark-50">
                        {{ user }}
                    </pre>
                </template>
            </AppCard>
        </div>
    </div>
</template>

<script setup lang="ts">
const user = useSupabaseUser()
</script>
