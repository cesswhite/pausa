<template>
    <NuxtLayout name="auth">
        <AuthSignUp />
    </NuxtLayout>
</template>

<script setup lang="ts">

definePageMeta({
    auth_title: "Join our community of innovators and creators",
    auth_description: "Start your journey with us and unlock a world of possibilities. Create your account today to access exclusive features, connect with like-minded individuals, and bring your ideas to life.",
    auth_image_light: "https://images.unsplash.com/photo-1696529990340-91966e97467f?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    auth_image_dark: "https://images.unsplash.com/photo-1593392611324-080751438d24?q=80&w=1965&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    auth_image_alt: "Eco Development Studios",
    auth_form_title: "Join our community",
    auth_form_description: "Create your account today to access exclusive features, connect with like-minded individuals, and unlock a world of possibilities. Start your journey with us and bring your ideas to life.",
});
useSeoMeta({
    title: "Join our community",
    description: "Create your account today to access exclusive features, connect with like-minded individuals, and unlock a world of possibilities. Start your journey with us and bring your ideas to life.",
});
</script>
