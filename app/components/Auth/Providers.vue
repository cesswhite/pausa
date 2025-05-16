<template>
    <UButton @click="signInWithGoogle" block variant="solid" type="button" class="cursor-pointer" color="neutral"
        label="Continue with Google" :loading="loadingButtonGoogle">
        <template #leading>
            <UIcon name="i-devicon-google" />
        </template>
    </UButton>
    <UButton @click="signInWithGitHub" block variant="subtle" type="button" class="cursor-pointer" color="neutral"
        label="Continue with GitHub" :loading="loadingButtonGithub">
        <template #leading>
            <UIcon name="i-simple-icons-github" />
        </template>
    </UButton>
    <AuthMagicLink />
</template>
<script setup lang="ts">
const client = useSupabaseClient()
const loadingButtonGoogle = ref(false)
const loadingButtonGithub = ref(false)
const loadingButtonMagicLink = ref(false)

async function signInWithGitHub() {
    loadingButtonGithub.value = true
    const { error } = await client.auth.signInWithOAuth({
        provider: "github",
        options: {
            redirectTo: '/dashboard',
        },
    });
    loadingButtonGithub.value = false
    if (error) console.log(error);
}

async function signInWithGoogle() {
    loadingButtonGoogle.value = true
    const { error } = await client.auth.signInWithOAuth({
        provider: "google",
        options: {
            redirectTo: '/dashboard',
        },
    });
    loadingButtonGoogle.value = false
    if (error) console.log(error);
}

async function signInWithEmail() {
    const { data, error } = await client.auth.signInWithOtp({
        email: 'valid.email@supabase.io',
        options: {
            // set this to false if you do not want the user to be automatically signed up
            shouldCreateUser: false,
            emailRedirectTo: 'https://example.com/welcome',
        },
    })
}
</script>
