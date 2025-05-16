<template>
    <UForm :validate="validate" :state="state" class="grid grid-cols-12 gap-4" @submit="onSubmit">
        <div class="col-span-full">
            <UFormField label="Email" name="email" size="xl">
                <UInput v-model="state.email" type="email" class="w-full" />
            </UFormField>
        </div>
        <div class="col-span-full">
            <UFormField label="Password" name="password" size="xl">
                <UInput v-model="state.password" placeholder="Password" :type="show ? 'text' : 'password'"
                    :ui="{ trailing: 'pe-1' }" class="w-full">
                    <template #trailing>
                        <UButton color="neutral" variant="link" size="sm"
                            :icon="show ? 'i-lucide-eye-off' : 'i-lucide-eye'"
                            :aria-label="show ? 'Hide password' : 'Show password'" :aria-pressed="show"
                            aria-controls="password" @click="show = !show" />
                    </template>
                </UInput>
            </UFormField>
        </div>
        <div class="col-span-full mt-12">
            <UButton block type="submit" size="xl" class="cursor-pointer" color="primary">
                Enter now
            </UButton>
            <div class="mt-4">
                <small class="text-dark-950/50 dark:text-dark-50/50 inline-block w-full text-center text-sm">
                    Don't have an account?
                    <NuxtLink to="/auth/sign-up" class="text-primary-500 dark:text-primary-400">Create one here
                    </NuxtLink>
                </small>
            </div>
        </div>
    </UForm>
</template>

<script setup lang="ts">
import type { FormError, FormSubmitEvent } from "#ui/types";

const state = reactive({
    email: undefined,
    password: undefined,
});
const show = ref(false);
const validate = (state: any): FormError[] => {
    const errors = [];
    if (!state.email) errors.push({ name: "email", message: "Field required" });
    if (!state.password)
        errors.push({ name: "password", message: "Field required" });

    return errors;
};

async function onSubmit(event: FormSubmitEvent<any>) {
    state.email = undefined;
    state.password = undefined;
}
</script>