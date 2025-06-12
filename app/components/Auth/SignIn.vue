<template>
    <UForm :validate="validate" :state="state" class="grid grid-cols-12 gap-4" @submit="signInWithEmail">
        <div class="col-span-full">
            <UFormField label="Email" name="email">
                <UInput v-model="state.email" type="email" class="w-full" />
            </UFormField>
        </div>
        <div class="col-span-full">
            <UFormField label="Password" name="password">
                <UInput v-model="state.password" placeholder="Password" :type="show ? 'text' : 'password'"
                    :ui="{ trailing: 'pe-1' }" class="w-full">
                    <template #trailing>
                        <UButton color="neutral" variant="link" size="sm" class="cursor-pointer"
                            :icon="show ? 'i-lucide-eye-off' : 'i-lucide-eye'"
                            :aria-label="show ? 'Hide password' : 'Show password'" :aria-pressed="show"
                            aria-controls="password" @click="show = !show" />
                    </template>
                </UInput>
            </UFormField>
        </div>
        <div class="col-span-full mt-4">
            <UButton block type="submit" class="cursor-pointer" color="primary">
                Enter now
            </UButton>
            <div class="my-2">
                <USeparator label="Or" />
            </div>
            <div class="flex flex-col gap-y-2">
                <AuthProviders />
            </div>
            <div class="mt-4 flex flex-col justify-between items-center gap-y-2">
                <small class="text-dark-950/50 dark:text-dark-50/50 inline-block w-full text-center text-sm">
                    Don't have an account?
                    <NuxtLink to="/auth/sign-up" class="text-primary-500 dark:text-primary-400">Create one here
                    </NuxtLink>
                </small>
                <NuxtLink to="/auth/forgot-password"
                    class="text-primary-500 dark:text-primary-400 inline-block w-full text-center text-sm">
                    Forgot your password?
                </NuxtLink>
            </div>
        </div>
    </UForm>
</template>

<script setup lang="ts">
import type { FormError } from "#ui/types";
const client = useSupabaseClient()
const router = useRouter()
const toast = useToast()
const { state } = storeToRefs(useAuthStore())
const { resetState } = useAuthStore()
const show = ref(false);

const validate = (state: any): FormError[] => {
    const errors = [];
    if (!state.email) errors.push({ name: "email", message: "Field required" });
    if (!state.password)
        errors.push({ name: "password", message: "Field required" });

    return errors;
};
async function signInWithEmail() {
    if (!state.value.email || !state.value.password) {
        return
    }
    try {
        const { data, error } = await client.auth.signInWithPassword({
            email: state.value.email,
            password: state.value.password,
        })
        if (error) {
            console.error(error)
        } else {
            toast.add({
                title: 'Success',
                description: 'Signed in successfully',
                color: 'success',
            })
            resetState()
            setTimeout(() => {
                router.push('/app/dashboard')
            }, 1500)
        }
    } catch (error) {
        console.error(error)
    }
}

</script>