<template>
    <UForm :validate="validate" :state="state" class="grid grid-cols-12 gap-4" @submit="resetPassword">
        <div class="col-span-full">
            <UFormField label="New password" name="password">
                <UInput v-model="state.password" type="password" class="w-full" />
            </UFormField>
        </div>
        <div class="col-span-full">
            <UFormField label="Confirm password" name="confirm_password">
                <UInput v-model="state.confirm_password" type="password" class="w-full" />
            </UFormField>
        </div>
        <div class="col-span-full mt-4">
            <UButton block type="submit" class="cursor-pointer" color="primary" :loading="loading">
                Change password
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
const { resetState } = useAuthStore()
const loading = ref(false)
const user = useSupabaseUser()
const router = useRouter()
const validate = (state: any): FormError[] => {
    const errors = [];
    if (!state.password) errors.push({ name: "password", message: "Field required" });
    if (!state.confirm_password) errors.push({ name: "confirm_password", message: "Field required" });
    if (state.password !== state.confirm_password) errors.push({ name: "confirm_password", message: "Passwords do not match" });

    return errors;
};
async function resetPassword() {
    if (!state.value.password || !state.value.confirm_password) {
        return
    }
    try {
        loading.value = true
        const { data, error } = await client.auth.updateUser({
            email: user.value?.email,
            password: state.value.password,
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
                description: 'Your password has been changed, please sign in to continue',
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