<template>
    <UForm :validate="validate" :state="state" class="grid grid-cols-12 gap-4" @submit="sendResetEmail">
        <div class="col-span-full">
            <UFormField label="Email" name="email">
                <UInput v-model="state.email" placeholder="Email" variant="subtle" type="email" class="w-full"
                    :disabled="loadingStates.passwordReset" />
            </UFormField>
        </div>
        <div class="col-span-full mt-4">
            <UButton block type="submit" class="cursor-pointer" color="primary" :loading="loadingStates.passwordReset">
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
const { state } = storeToRefs(useAuthStore())
const { resetState } = useAuthStore()
const { validateForgotPasswordForm } = useFormValidation()
const { sendPasswordReset } = useAuthActions()
const { loadingStates, withLoading } = useLoadingState()

const validate = (state: any) => validateForgotPasswordForm(state)

async function sendResetEmail() {
    if (!state.value.email) return

    const result = await withLoading('passwordReset', () =>
        sendPasswordReset(state.value.email!)
    )

    if (result.success) {
        resetState()
    }
}
</script>