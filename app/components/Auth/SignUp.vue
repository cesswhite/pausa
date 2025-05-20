<template>
    <UForm :validate="validate" :state="state" class="grid grid-cols-12 gap-4" @submit="signUpNewUser">
        <div class="col-span-full">
            <UFormField label="Email" name="email">
                <UInput v-model="state.email" type="email" class="w-full" :disabled="loading" />
            </UFormField>
        </div>
        <div class="col-span-full md:col-span-6">
            <UFormField label="Password" name="password">
                <UInput v-model="state.password" placeholder="Password" :type="show ? 'text' : 'password'"
                    :ui="{ trailing: 'pe-1' }" class="w-full" :disabled="loading">
                    <template #trailing>
                        <UButton color="neutral" variant="link" size="sm" class="cursor-pointer"
                            :icon="show ? 'i-lucide-eye-off' : 'i-lucide-eye'"
                            :aria-label="show ? 'Hide password' : 'Show password'" :aria-pressed="show"
                            aria-controls="password" @click="show = !show" />
                    </template>
                </UInput>
            </UFormField>
        </div>
        <div class="col-span-full md:col-span-6">
            <UFormField label="Confirm Password" name="confirm_password">
                <UInput v-model="state.confirm_password" placeholder="Confirm Password"
                    :type="showConfirm ? 'text' : 'password'" :ui="{ trailing: 'pe-1' }" class="w-full"
                    :disabled="loading">
                    <template #trailing>
                        <UButton color="neutral" variant="link" size="sm"
                            :icon="showConfirm ? 'i-lucide-eye-off' : 'i-lucide-eye'" :aria-label="showConfirm ? 'Hide password' : 'Show password'
                                " :aria-pressed="showConfirm" aria-controls="password"
                            @click="showConfirm = !showConfirm" />
                    </template>
                </UInput>
            </UFormField>
        </div>
        <div class="col-span-full mt-4">
            <UButton block type="submit" class="cursor-pointer" color="primary" :loading="loading">
                Create Account
            </UButton>
            <div class="my-2">
                <USeparator label="Or" />
            </div>
            <div class="flex flex-col gap-y-2">
                <AuthProviders />
            </div>
            <div class="mt-4 flex flex-col justify-between items-center gap-y-2">
                <small class="text-dark-950/50 dark:text-dark-50/50 inline-block w-full text-center text-sm">
                    Already have an account?
                    <NuxtLink to="/auth/sign-in" class="text-primary-500 dark:text-primary-400">
                        Sign in
                    </NuxtLink>
                </small>
                <NuxtLink to="/auth/forgot-password"
                    class="text-dark-950/50 dark:text-dark-50/50 inline-block w-full text-center text-sm">
                    Forgot your password?
                </NuxtLink>
            </div>
        </div>
    </UForm>
</template>

<script setup lang="ts">
import type { FormError } from "#ui/types";

const client = useSupabaseClient()
const { state } = storeToRefs(useAuthStore())
const show = ref(false);
const showConfirm = ref(false);
const loading = ref(false)
const toast = useToast()
const router = useRouter()
const { resetState } = useAuthStore()

const validate = (state: any): FormError[] => {
    const errors = [];
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

async function signUpNewUser() {
    if (!state.value.email || !state.value.password) {
        return
    }
    try {
        loading.value = true
        const { data, error } = await client.auth.signUp({
            email: state.value.email,
            password: state.value.password,
            options: {
                emailRedirectTo: 'http://localhost:3000/auth/confirm',
            },
        })

        if (error) {
            console.error(error)
        } else {
            toast.add({
                title: 'Success',
                description: 'Email for verification has been sent',
                color: 'success',
            })
            resetState()
            setTimeout(() => {
                router.push('/auth/sign-in')
            }, 1500)
        }
    } catch (error) {
        console.error(error)
    }
}

</script>