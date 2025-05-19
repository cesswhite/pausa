<template>
    <UForm :validate="validate" :state="state" class="grid grid-cols-12 gap-4" @submit="signInWithEmail">
        <div class="col-span-full">
            <UFormField label="Email" name="email">
                <UInput v-model="state.email" type="email" class="w-full" />
            </UFormField>
        </div>
        <div class="col-span-full mt-4">
            <UButton block type="submit" class="cursor-pointer" color="primary">
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
const router = useRouter()
const toast = useToast()
const { state } = storeToRefs(useAuthStore())

const validate = (state: any): FormError[] => {
    const errors = [];
    if (!state.email) errors.push({ name: "email", message: "Field required" });

    return errors;
};
async function signInWithEmail() {
    if (!state.value.email) {
        return
    }
    try {
        const { data, error } = await client.auth.resetPasswordForEmail(state.value.email, {
            redirectTo: `${window.location.origin}/auth/reset-password`,
        })
        if (error) {
            console.error(error)
        } else {
            toast.add({
                title: 'Success',
                description: 'We have sent you a link to reset your password',
                color: 'success',
            })
            resetForm()
            router.push('/auth/sign-in')
        }
    } catch (error) {
        console.error(error)
    }
}
async function resetForm() {
    state.value.email = undefined;
}
</script>