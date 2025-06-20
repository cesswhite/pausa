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
        </div>
    </UForm>
</template>

<script setup lang="ts">
const { state } = storeToRefs(useAuthStore())
const { resetState } = useAuthStore()
const { validatePasswordResetForm } = useFormValidation()
const { updatePassword, signOut } = useAuthActions()
const { loadingStates, withLoading } = useLoadingState()
const { showSuccess } = useToastMessages()

const validate = (state: any) => validatePasswordResetForm(state)

async function resetPassword() {
    if (!state.value.password || !state.value.confirm_password) return

    const result = await withLoading('updatePassword', () =>
        updatePassword(state.value.password!)
    )

    if (result.success) {
        // Custom success message for settings
        showSuccess('Success', 'Your password has been changed, you will be redirected in 3 seconds')

        setTimeout(async () => {
            await signOut()
        }, 3000)
    }
}
</script>