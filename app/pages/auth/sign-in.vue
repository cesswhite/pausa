<template>
    <NuxtLayout name="auth">
        <AuthSignIn />
    </NuxtLayout>
</template>

<script setup lang="ts">
definePageMeta({
    auth_title: "The best way to manage your business from anywhere",
    auth_description: "Eco Development Studios is a digital agency specializing in innovative solutions that drive business growth through custom software development, strategic marketing, and comprehensive digital transformation services.",
    auth_image_light: "https://images.unsplash.com/photo-1682448498981-5a784c5bff1f?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    auth_image_dark: "https://images.unsplash.com/photo-1739582767506-fb17a77133b7?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    auth_image_alt: "Eco Development Studios",
    auth_form_title: "Sign in to your account",
    auth_form_description: "Welcome back! Sign in to access your personalized dashboard and continue managing your business operations with our powerful tools and features.",
});
useSeoMeta({
    title: "Sign in to your account",
    description: "Welcome back! Sign in to access your personalized dashboard and continue managing your business operations with our powerful tools and features.",
});
</script>
