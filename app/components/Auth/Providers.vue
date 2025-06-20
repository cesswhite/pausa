<template>
    <UButton @click="signInWithGoogle" block variant="solid" type="button" class="cursor-pointer" color="neutral"
        label="Continue with Google" :loading="loadingStates.google">
        <template #leading>
            <UIcon name="i-devicon-google" />
        </template>
    </UButton>
    <UButton @click="signInWithGitHub" block variant="subtle" type="button" class="cursor-pointer" color="neutral"
        label="Continue with GitHub" :loading="loadingStates.github">
        <template #leading>
            <UIcon name="i-simple-icons-github" />
        </template>
    </UButton>
    <AuthMagicLink />
</template>
<script setup lang="ts">
const client = useSupabaseClient()
const { loadingStates, withLoading } = useLoadingState()

async function signInWithGitHub() {
    await withLoading('github', async () => {
        const { error } = await client.auth.signInWithOAuth({
            provider: "github",
            options: {
                redirectTo: '/app/dashboard',
            },
        })
        if (error) console.error(error)
    })
}

async function signInWithGoogle() {
    await withLoading('google', async () => {
        const { error } = await client.auth.signInWithOAuth({
            provider: "google",
            options: {
                redirectTo: '/app/dashboard',
            },
        })
        if (error) console.error(error)
    })
}
</script>
