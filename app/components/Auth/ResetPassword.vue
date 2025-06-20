<template>
    <UForm :validate="validate" :state="state" class="grid grid-cols-12 gap-4" @submit="resetPassword">
        <div class="col-span-full">
            <UFormField label="New password" name="password">
                <UInput v-model="state.password" variant="subtle" type="password" class="w-full"
                    :disabled="loadingStates.updatePassword" />
            </UFormField>
        </div>
        <div class="col-span-full">
            <UFormField label="Confirm password" name="confirm_password">
                <UInput v-model="state.confirm_password" variant="subtle" type="password" class="w-full"
                    :disabled="loadingStates.updatePassword" />
            </UFormField>
        </div>
        <div class="col-span-full mt-4">
            <UButton block type="submit" class="cursor-pointer" color="primary" :loading="loadingStates.updatePassword">
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
const { state } = storeToRefs(useAuthStore())
const { resetState } = useAuthStore()
const { validatePasswordResetForm } = useFormValidation()
const { updatePassword } = useAuthActions()
const { loadingStates, withLoading } = useLoadingState()
const user = useSupabaseUser()

const validate = (state: any) => validatePasswordResetForm(state)

async function resetPassword() {
    if (!state.value.password || !state.value.confirm_password) return

    const result = await withLoading('updatePassword', () =>
        updatePassword(state.value.password!, user.value?.email)
    )

    if (result.success) {
        resetState()
    }
}
</script>