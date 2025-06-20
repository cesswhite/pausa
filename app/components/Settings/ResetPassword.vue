<template>
    <UForm :validate="validate" :state="state" class="grid grid-cols-12 gap-4" @submit="resetPassword">
        <div class="col-span-full">
            <UFormField label="New password" name="password">
                <UInput v-model="state.password" variant="subtle" type="password" class="w-full" />
            </UFormField>
        </div>
        <div class="col-span-full">
            <UFormField label="Confirm password" name="confirm_password">
                <UInput v-model="state.confirm_password" variant="subtle" type="password" class="w-full" />
            </UFormField>
        </div>
        <div class="col-span-full mt-4">
            <UButton block type="submit" class="cursor-pointer" color="primary" :loading="loading">
                Change password
            </UButton>
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
            password: state.value.password,
        })

        if (error) {
            toast.add({
                icon: 'i-lucide-alert-circle',
                title: 'Error',
                description: error.message,
                color: 'error',
            })
            console.error(error)
        } else {
            toast.add({
                icon: 'i-lucide-check-circle',
                title: 'Success',
                description: 'Your password has been changed, you will be redirected in 3 seconds',
                color: 'success',
            })
            setTimeout(async () => {
                const { error } = await client.auth.signOut();
                if (error) return;
                navigateTo('/');
            }, 3000)
        }
    } catch (error) {
        console.error(error)
    } finally {
        loading.value = false
    }
}

</script>