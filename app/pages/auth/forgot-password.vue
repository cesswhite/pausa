<template>
    <NuxtLayout name="auth">
        <AuthForgotPassword />
    </NuxtLayout>
</template>

<script setup lang="ts">
definePageMeta({
    auth_title: "Forgot your password?",
    auth_description: "Don't worry! We'll help you get back into your account. Enter your email address and we'll send you a secure link to reset your password and regain access to your account.",
    auth_image_light: "https://images.unsplash.com/photo-1592525427244-0c54dbaba0de?q=80&w=1965&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    auth_image_dark: "https://images.unsplash.com/photo-1678032060909-0912b9e509a4?q=80&w=1770&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    auth_image_alt: "Eco Development Studios",
    auth_form_title: "Forgot your password?",
    auth_form_description: "Enter your email address and we'll send you a secure link to reset your password and regain access to your account.",
});
useSeoMeta({
    title: "Forgot your password? - Secure Account Recovery",
    description: "Don't worry! We'll help you get back into your account. Enter your email address and we'll send you a secure link to reset your password and regain access to your account.",
});
</script>
