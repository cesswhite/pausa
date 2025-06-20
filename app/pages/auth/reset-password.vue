<template>
    <NuxtLayout name="auth">
        <AuthResetPassword />
    </NuxtLayout>
</template>

<script setup lang="ts">

const route = useRoute()
const toast = useToast()

onMounted(async () => {
    if (route.query.code && route.query.type) {
        toast.add({
            icon: 'i-lucide-check-circle',
            title: 'Change your password',
            description: 'Enter your new password and confirm it to change it',
            color: 'success',
        })
    }
})

definePageMeta({
    auth_title: "Change your password",
    auth_description: "Enter your new password and confirm it to change it",
    auth_image_light: "https://images.unsplash.com/photo-1682448498981-5a784c5bff1f?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    auth_image_dark: "https://images.unsplash.com/photo-1739582767506-fb17a77133b7?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    auth_image_alt: "Eco Development Studios",
    auth_form_title: "Reset Your Password",
    auth_form_description: "Create a strong, secure password to protect your account. Make sure to choose a password that's unique and memorable for you.",
});
useSeoMeta({
    title: "Reset Your Password - Secure Account Recovery",
    description: "Safely reset your password with our secure recovery process. Create a strong, unique password to protect your account and regain access to your dashboard.",
});
</script>