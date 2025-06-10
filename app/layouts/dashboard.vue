<template>
    <div class="h-screen grid grid-cols-12 bg-white dark:bg-black p-2 relative overflow-hidden">
        <div class="col-span-2 bg-dark-100 rounded-md dark:bg-dark-950 relative h-[calc(100vh-1rem)]">
            <div class="sticky top-0 flex flex-col gap-4 items-center justify-between h-full">
                <div class="flex items-center gap-2 w-full border-b border-dark-200 dark:border-dark-50/5 px-4 py-6">
                    <div class="size-5">
                        <AppLogo />
                    </div>
                    <h1 class="text-base font-bold text-dark-900 dark:text-dark-50">Pausa</h1>
                </div>
                <div class="flex-1 w-full mt-1 px-2">
                    <DashboardSidebarNavigation />
                </div>
                <div class="flex w-full border-t border-dark-200 dark:border-dark-50/5 px-4 py-6">
                    <DashboardSidebarHandleUser />
                </div>
            </div>
        </div>
        <div class="col-span-10 overflow-y-scroll min-h-screen h-auto p-4 ">
            <slot />
        </div>
    </div>
</template>