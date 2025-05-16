<template>
    <UButton @click="signInWithEmail" block variant="link" type="button" class="cursor-pointer" color="neutral"
        label="Continue with Magic Link" :loading="loadingButtonMagicLink">
        <template #leading>
            <UIcon name="i-lucide-sparkles" />
        </template>
    </UButton>
</template>
<script setup lang="ts">
const client = useSupabaseClient()
const loadingButtonMagicLink = ref(false)
const { state } = storeToRefs(useAuthStore())
const toast = useToast()
const route = useRoute()

async function signInWithEmail() {
    if (!state.value.email) {
        toast.add({
            title: 'Error',
            description: 'No email provided',
            color: 'error',
        })
        return
    }
    try {
        loadingButtonMagicLink.value = true
        const { data, error } = await client.auth.signInWithOtp({
            email: state.value.email || '',
            options: {
                shouldCreateUser: route.name === 'auth-sign-up',
                emailRedirectTo: 'http://localhost:3000/auth/confirm',
            },
        })
        if (error) {
            toast.add({
                title: 'Error',
                description: error.message,
                color: 'error',
            })
        } else {
            toast.add({
                title: 'Success',
                description: 'Magic link sent',
                color: 'success',
            })
        }
        loadingButtonMagicLink.value = false
    } catch (error) {
        console.error(error)
        loadingButtonMagicLink.value = false
    }
}
</script>
