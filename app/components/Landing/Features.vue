<template>
    <div class="flex h-auto w-full max-w-7xl mx-auto flex-col px-4 gap-y-24 xl:gap-x-24 xl:gap-y-0 xl:px-4 pb-24">
        <div class="flex flex-col items-center justify-center gap-y-2 ">
            <h1 class="mx-auto w-full text-3xl font-medium text-dark-950 text-center lg:text-4xl dark:text-dark-50">
                Add Authentication to your App in seconds with Pausa.
            </h1>
            <p
                class="text-dark-950/60 dark:text-dark-50/50 w-full text-center text-lg leading-8 sm:w-1/2 2xl:text-xl/6">
                Start with a clean, ready-to-use UI built to streamline your user onboarding—no extra setup needed.
            </p>
        </div>
        <div class="grid w-full grid-cols-12 gap-y-12 md:gap-x-6 mt-0 md:mt-24">
            <template v-for="(feat, index) in features" :key="index">
                <div
                    class="col-span-full flex h-auto flex-col justify-center gap-x-4 gap-y-4 rounded-lg transition-all duration-300 ease-in-out md:col-span-6 items-center">
                    <div
                        class="border-primary-500/50 bg-primary-100/10 dark:bg-primary-50/10 flex size-12 max-w-12 max-h-12 min-w-12 min-h-12 flex-auto items-center justify-center rounded-full border p-3">
                        <UIcon :name="feat.icon" class="text-primary-600 dark:text-primary-400 size-8 " />
                    </div>
                    <span class="text-xl font-semibold text-dark-950 dark:text-dark-50">{{
                        feat.title
                        }}</span>
                    <p class="px-0 text-base font-normal text-dark-950/60 md:w-3/5 text-center dark:text-dark-50/50">
                        {{ feat.description }}
                    </p>
                </div>
            </template>
        </div>
    </div>
</template>

<script setup lang="ts">
const features = [
    {
        icon: "i-heroicons-command-line",
        title: "Quick Setup",
        description:
            "Add user authentication in seconds. Just a few lines of code and you're live.",
        link: "#",
    },
    {
        icon: "i-heroicons-swatch",
        title: "Lightning Fast",
        description:
            "Built for rapid development and snappy user experiences—no bloat, no delays.",
        link: "#",
    },
    {
        icon: "i-simple-icons-nuxt",
        title: "Built with Nuxt",
        description:
            "Leverages Nuxt 3 and Nuxt UI for a seamless dev workflow and clean, responsive components.",
        link: "#",
    },
    {
        icon: "i-simple-icons-supabase",
        title: "Powered by Supabase",
        description:
            "We use Supabase to power the entire auth flow—just drop in your config and it works out of the box.",
        link: "#",
    },
    {
        icon: "i-heroicons-envelope-open",
        title: "Magic Links",
        description: "Enable passwordless login with one-click magic links via email.",
        link: "#",
    },
    {
        icon: "i-simple-icons-google",
        title: "Google Login",
        description: "Allow users to log in using their Google account.",
        link: "#",
    },
    {
        icon: "i-simple-icons-github",
        title: "GitHub Login",
        description: "Enable GitHub OAuth login with minimal setup",
        link: "#",
    },
    {
        icon: "i-heroicons-envelope",
        title: "Email + Password",
        description: "Classic email/password login ready to go—no extra setup required.",
        link: "#",
    },
    {
        icon: "i-heroicons-key",
        title: "Reset & Change Passwords",
        description: "Built-in flows to reset or change user passwords securely and quickly.",
        link: "#",
    },
    {
        icon: "i-heroicons-document-text",
        title: "Email Templates Included",
        description: "All auth-related email templates are included—no need to build them yourself.",
        link: "#",
    },
    {
        icon: "i-heroicons-chart-bar",
        title: "Minimal Dashboard",
        description: "Includes a basic dashboard to view user and session data fetched from Supabase.",
        link: "#",
    },
    {
        icon: "i-heroicons-moon",
        title: "Dark Mode Support",
        description: "Fully styled for both light and dark themes—no extra work needed.",
        link: "#",
    },
];
</script>