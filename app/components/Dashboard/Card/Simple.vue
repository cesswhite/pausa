<template>
    <div
        class="flex flex-col items-start justify-between gap-2 rounded-md p-4 ring-1 ring-dark-950/5 shadow-sm shadow-dark-950/20 dark:ring-dark-50/10 dark:shadow-none dark:bg-dark-900/40">
        <span class="text-base font-bold inline-block text-dark-950 dark:text-dark-50">
            <slot name="title" />
        </span>
        <div class="w-full relative mt-2">
            <slot name="content" />
        </div>
    </div>
</template>