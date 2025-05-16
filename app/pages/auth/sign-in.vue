<template>
    <NuxtLayout name="auth">
        <AuthSignIn v-motion-fade />
    </NuxtLayout>
</template>

<script setup lang="ts">
definePageMeta({
    middleware: "auth",
    auth_title: "The best way to manage your business from anywhere",
    auth_description: "Eco Development Studios is a digital agency specializing in innovative solutions that drive business growth through custom software development, strategic marketing, and comprehensive digital transformation services.",
    auth_image: "https://images.unsplash.com/photo-1568402102990-bc541580b59f",
    auth_image_alt: "Eco Development Studios",
    auth_form_title: "Sign in to your account",
    auth_form_description: "Welcome back! Sign in to access your personalized dashboard and continue managing your business operations with our powerful tools and features.",
});
useSeoMeta({
    title: "Sign in to your account",
    description: "Welcome back! Sign in to access your personalized dashboard and continue managing your business operations with our powerful tools and features.",
});
</script>
