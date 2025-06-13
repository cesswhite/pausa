<template>
    <div class="h-screen grid grid-cols-12 bg-white dark:bg-black p-2 relative overflow-hidden">
        <div
            class="hidden md:block col-span-2 bg-dark-200/50 rounded-xl dark:bg-dark-900/90 relative h-[calc(100vh-1rem)]">
            <div class="sticky top-0 flex flex-col gap-4 items-center justify-between h-full">
                <div
                    class="flex h-20 items-center gap-2 w-full border-b border-dark-200 dark:border-dark-50/5 px-4 py-6">
                    <div class="size-5">
                        <AppLogo />
                    </div>
                    <h1 class="text-base font-bold text-dark-900 dark:text-dark-50">Pausa</h1>
                </div>
                <div class="flex-1 w-full mt-1 px-2">
                    <DashboardSidebarNavigation />
                </div>
                <div
                    class="flex h-20 items-center gap-2 w-full border-t border-dark-200 dark:border-dark-50/5 px-2 py-6">
                    <DashboardSidebarHandleUser />
                </div>
            </div>
        </div>
        <div class="col-span-full md:col-span-10 overflow-y-scroll min-h-screen h-auto px-4 py-2 scrollbar-hide">
            <div class="flex flex-col items-start justify-start">
                <USlideover>
                    <UButton label="Open" color="neutral" variant="subtle" icon="i-lucide-menu" class="md:hidden" />
                    <template #content>
                        <DashboardSidebarNavigation />
                    </template>
                </USlideover>
                <AppBreadcrumb :current-page="getRouteName" />
                <AppTitle>{{ getRouteName }}</AppTitle>
            </div>
            <div class="w-full relative">
                <slot />
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
const route = useRoute();
const getRouteName = computed(() => route.meta.title as string);
</script>