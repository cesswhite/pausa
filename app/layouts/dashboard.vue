<template>
    <div class="h-screen grid grid-cols-16 bg-white dark:bg-black p-2 relative overflow-hidden">
        <div
            class="hidden lg:block col-span-3 xl:col-span-3 2xl:col-span-3 bg-dark-200/50 dark:bg-dark-900/80 backdrop-blur relative h-[calc(100vh-1rem)] rounded-xl">
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
        <div
            class="col-span-full lg:col-span-13 xl:col-span-13 2xl:col-span-13 overflow-y-scroll min-h-screen h-auto px-4 pt-2 pb-12 scrollbar-hide flex flex-col">
            <div class="flex flex-col items-start justify-center min-h-17 h-17">
                <USlideover v-model:open="openSidebar" side="left">
                    <UButton size="xs" color="neutral" variant="link" icon="i-lucide-panel-left-open"
                        class="lg:hidden p-0 cursor-pointer" />
                    <template #content>
                        <div class="relative flex flex-col gap-4 items-center justify-between h-full">
                            <div
                                class="flex h-20 gap-4 items-center justify-between w-full border-b border-dark-200 dark:border-dark-50/5 px-4 py-6">
                                <div class="flex items-center gap-2">
                                    <div class="size-5">
                                        <AppLogo />
                                    </div>
                                    <h1 class="text-base font-bold text-dark-900 dark:text-dark-50">Pausa</h1>
                                </div>
                                <div class="flex items-center justify-between">
                                    <UButton @click="openSidebar = false" size="xs" color="neutral" variant="link"
                                        icon="i-lucide-panel-right-open" class="p-0 cursor-pointer" />
                                </div>
                            </div>
                            <div class="flex-1 w-full mt-1 px-2">
                                <DashboardSidebarNavigation />
                            </div>
                            <div
                                class="flex h-20 items-center gap-2 w-full border-t border-dark-200 dark:border-dark-50/5 px-2 py-6">
                                <DashboardSidebarHandleUser />
                            </div>
                        </div>
                    </template>
                </USlideover>
                <!-- <AppBreadcrumb :current-page="getRouteName" /> -->
                <AppTitle>{{ getRouteName }}</AppTitle>
            </div>
            <div class="w-full relative h-auto">
                <slot />
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
const route = useRoute();
const getRouteName = computed(() => route.meta.title as string);
const openSidebar = ref(false);
</script>