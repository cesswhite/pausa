<template>
    <UForm :validate="validate" :state="state" class="grid grid-cols-12 gap-4" @submit="signUpNewUser">
        <div class="col-span-full">
            <UFormField label="Email" name="email">
                <UInput v-model="state.email" variant="subtle" placeholder="Email" type="email" class="w-full"
                    :disabled="loadingStates.signUp" />
            </UFormField>
        </div>
        <div class="col-span-full md:col-span-6">
            <UFormField label="Password" name="password">
                <UInput v-model="state.password" variant="subtle" placeholder="Password"
                    :type="show ? 'text' : 'password'" :ui="{ trailing: 'pe-1' }" class="w-full"
                    :disabled="loadingStates.signUp">
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
                <UInput v-model="state.confirm_password" variant="subtle" placeholder="Confirm Password"
                    :type="showConfirm ? 'text' : 'password'" :ui="{ trailing: 'pe-1' }" class="w-full"
                    :disabled="loadingStates.signUp">
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
            <UButton block type="submit" class="cursor-pointer" color="primary" :loading="loadingStates.signUp">
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
                    class="text-primary-500 dark:text-primary-400 inline-block w-full text-center text-sm">
                    Forgot your password?
                </NuxtLink>
            </div>
        </div>
    </UForm>
</template>

<script setup lang="ts">
const { state } = storeToRefs(useAuthStore())
const { resetState } = useAuthStore()
const { validateSignUpForm } = useFormValidation()
const { signUpWithEmail } = useAuthActions()
const { loadingStates, withLoading } = useLoadingState()

const show = ref(false)
const showConfirm = ref(false)

const validate = (state: any) => validateSignUpForm(state)

async function signUpNewUser() {
    if (!state.value.email || !state.value.password) return

    const result = await withLoading('signUp', () =>
        signUpWithEmail(state.value.email!, state.value.password!)
    )

    if (result.success) {
        resetState()
    }
}
</script>