<template>
    <div
        class="grid h-auto min-h-screen w-full grid-cols-12 items-center justify-center gap-2 bg-white dark:bg-black relative">
        <div class="fixed top-4 right-4 z-40">
            <AppSwitchMode />
        </div>
        <div class="relative col-span-full flex h-full flex-col items-center justify-center rounded-lg md:col-span-6">
            <div class="relative flex w-full flex-col gap-y-12 py-32 px-4 md:py-24 lg:w-10/12 xl:w-8/12">
                <div class="flex flex-col items-start justify-center">
                    <h1 class="text-dark-950 dark:text-dark-50 w-full text-left text-xl font-bold">
                        {{ auth_form_title }}
                    </h1>
                    <p class="text-dark-950/60 dark:text-dark-50/60 text-left text-base">
                        {{ auth_form_description }}
                    </p>
                </div>
                <div class="relative w-full">
                    <slot />
                </div>
            </div>
            <div class="relative bottom-2 left-0 w-full md:absolute">
                <small class="text-dark-950/50 dark:text-dark-50/50 inline-block w-full text-center text-sm">
                    By creating an account or signing in, you agree to our
                    <NuxtLink to="#" class="text-primary-500 dark:text-primary-400">
                        Terms of Service
                    </NuxtLink>
                    and
                    <NuxtLink to="#" class="text-primary-500 dark:text-primary-400">
                        Privacy Policy
                    </NuxtLink>
                </small>
            </div>
        </div>
        <div class="relative col-span-full hidden h-screen md:col-span-6 md:block p-2">
            <div class="absolute bottom-0 left-0 z-20 h-1/3 w-full p-2 overflow-hidden">
                <div
                    class="pointer-events-none w-full h-full  flex items-end justify-center rounded-lg bg-gradient-to-t from-black/80 via-black/40 to-transparent">
                    <div class="flex w-full flex-col gap-y-2 px-4 pb-12 2xl:px-12">
                        <h1 class="text-dark-50 text-center text-3xl font-bold tracking-tight lg:text-4xl">
                            {{ auth_title }}
                        </h1>
                        <p class="text-dark-50/60 mx-auto text-center font-normal tracking-tight md:text-lg/6">
                            {{ auth_description }}
                        </p>
                    </div>
                </div>
            </div>
            <div class="relative z-10 h-full overflow-hidden rounded-lg">
                <img v-motion-fade-visible v-show="$colorMode.value === 'light'" :src="auth_image_light"
                    :alt="auth_image_alt ?? 'Eco Development Studios'" class="size-full rounded-lg object-cover"
                    loading="lazy" width="560" height="1024" />
                <img v-motion-fade-visible v-show="$colorMode.value === 'dark'" :src="auth_image_dark"
                    :alt="auth_image_alt ?? 'Eco Development Studios'" class="size-full rounded-lg object-cover"
                    loading="lazy" width="560" height="1024" />
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">

interface AuthRouteMeta {
    auth_title?: string;
    auth_description?: string;
    auth_image_light?: string;
    auth_image_dark?: string;
    auth_image_alt?: string;
    auth_form_title?: string;
    auth_form_description?: string;
}


const route = useRoute();
const { auth_title, auth_description, auth_image_light, auth_image_dark, auth_image_alt, auth_form_title, auth_form_description } =
    route.meta as AuthRouteMeta;

</script>