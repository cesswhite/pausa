<template>
    <UButton @click="signInWithEmail" block variant="outline" type="button" class="cursor-pointer" color="neutral"
        label="Continue with Magic Link" :loading="loadingStates.magicLink">
        <template #leading>
            <UIcon name="i-lucide-sparkles" />
        </template>
    </UButton>
</template>
<script setup lang="ts">
const { state } = storeToRefs(useAuthStore())
const { sendMagicLink } = useAuthActions()
const { loadingStates, withLoading } = useLoadingState()
const { showError } = useToastMessages()
const route = useRoute()

async function signInWithEmail() {
    if (!state.value.email) {
        showError('Error', 'No email provided')
        return
    }

    await withLoading('magicLink', () =>
        sendMagicLink(state.value.email!, route.name === 'auth-sign-up')
    )
}
</script>
