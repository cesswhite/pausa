<template>
    <UForm :validate="validate" :state="state" class="grid grid-cols-12 gap-4" @submit="sendResetEmail">
        <div class="col-span-full">
            <UFormField label="Email" name="email">
                <UInput v-model="state.email" placeholder="Email" variant="subtle" type="email" class="w-full" />
            </UFormField>
        </div>
        <div class="col-span-full mt-4">
            <UButton block type="submit" class="cursor-pointer" color="primary" :loading="loading">
                Send reset link
            </UButton>
            <div class="mt-4">
                <small class="text-dark-950/50 dark:text-dark-50/50 inline-block w-full text-center text-sm">
                    Remember your password?
                    <NuxtLink to="/auth/sign-in" class="text-primary-500 dark:text-primary-400">Sign in here
                    </NuxtLink>
                </small>
            </div>
        </div>
    </UForm>
</template>

<script setup lang="ts">
import type { FormError } from "#ui/types";
const client = useSupabaseClient()
const toast = useToast()
const { state } = storeToRefs(useAuthStore())
const loading = ref(false)
const router = useRouter()
const { resetState } = useAuthStore()

const validate = (state: any): FormError[] => {
    const errors = [];
    if (!state.email) errors.push({ name: "email", message: "Field required" });

    return errors;
};


async function sendResetEmail() {
    if (!state.value.email) {
        return
    }
    try {
        loading.value = true
        let { data, error } = await client.auth.resetPasswordForEmail(state.value.email, {
            redirectTo: `http://localhost:3000/auth/reset-password/`,
        })

        if (error) {
            toast.add({
                title: 'Error',
                description: error.message,
                color: 'error',
            })
            console.error(error)
        } else {
            toast.add({
                title: 'Success',
                description: 'We have sent you a link to reset your password',
                color: 'success',
            })
            resetState()
            setTimeout(() => {
                router.push('/auth/sign-in')
            }, 1500)
        }
    } catch (error) {
        console.error(error)
    } finally {
        loading.value = false
    }
}
</script>