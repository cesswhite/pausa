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
    auth_form_title: "Change your password",
    auth_form_description: "Enter your new password and confirm it to change it",
});
useSeoMeta({
    title: "Change your password",
    description: "Enter your new password and confirm it to change it",
});
</script>