<template>
    <div class="grid h-auto min-h-screen w-full grid-cols-12 items-center justify-center gap-2 bg-white dark:bg-black">
        <div class="relative col-span-full flex h-full flex-col items-center justify-center rounded-lg md:col-span-6">
            <div
                class="relative flex w-full flex-col gap-y-12 px-2 py-32 md:w-11/12 md:px-4 md:py-24 lg:w-10/12 xl:w-8/12">
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
            <div class="relative bottom-12 left-0 w-full pb-4 md:absolute">
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
        <div class="relative col-span-full hidden h-screen md:col-span-6 md:block">
            <div
                class="pointer-events-none absolute bottom-0 left-0 z-20 flex h-1/3 w-full items-end justify-center rounded-lg bg-gradient-to-t from-black/80 via-black/40 to-transparent">
                <div class="flex w-full flex-col gap-y-2 px-4 pb-12 2xl:px-12">
                    <h1 class="text-dark-50 text-center text-3xl font-bold tracking-tight lg:text-4xl">
                        {{ auth_title }}
                    </h1>
                    <p class="text-dark-50/60 mx-auto text-center font-normal tracking-tight md:text-lg/6">
                        {{ auth_description }}
                    </p>
                </div>
            </div>
            <div class="relative z-10 h-full overflow-hidden rounded-lg p-2">
                <img :src="auth_image ?? 'https://images.unsplash.com/photo-1568402102990-bc541580b59f'"
                    :alt="auth_image_alt ?? 'Eco Development Studios'" class="size-full rounded-lg object-cover"
                    loading="lazy" quality="80" />
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
import type { FormError, FormSubmitEvent } from "#ui/types";

interface AuthRouteMeta {
    auth_title?: string;
    auth_description?: string;
    auth_image?: string;
    auth_image_alt?: string;
    auth_form_title?: string;
    auth_form_description?: string;
}

const state = reactive({
    name: undefined,
    email: undefined,
    password: undefined,
    confirm_password: undefined,
});
const route = useRoute();
const { auth_title, auth_description, auth_image, auth_image_alt, auth_form_title, auth_form_description } =
    route.meta as AuthRouteMeta;
const validate = (state: any): FormError[] => {
    const errors = [];
    if (!state.name) errors.push({ name: "name", message: "Field required" });
    if (!state.email) errors.push({ name: "email", message: "Field required" });
    if (!state.password)
        errors.push({ name: "password", message: "Field required" });
    if (!state.confirm_password)
        errors.push({ name: "confirm_password", message: "Field required" });
    if (state.password !== state.confirm_password)
        errors.push({
            name: "confirm_password",
            message: "Passwords do not match",
        });
    return errors;
};

async function onSubmit(event: FormSubmitEvent<any>) {
    state.email = undefined;
    state.password = undefined;
    state.confirm_password = undefined;
    state.name = undefined;
}
</script>