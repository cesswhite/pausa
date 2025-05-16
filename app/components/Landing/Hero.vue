<template>
    <div class="relative flex h-full min-h-dvh w-full items-center justify-center bg-dark-50 dark:bg-dark-950">
        <div class="relative z-20 w-11/12 2xl:w-1/2">
            <div class="flex flex-col items-center justify-center">
                <UBadge variant="soft" class="border-primary rounded-full border px-4 text-center md:px-12" size="lg">
                    Powered by Nuxt & Supabase
                </UBadge>
                <h1 v-motion :initial="{ opacity: 0, filter: 'blur(10px)' }"
                    :enter="{ opacity: 1, filter: 'blur(0px)' }" :delay="100" :duration="1250"
                    class="mt-8 text-center text-5xl font-semibold text-dark-900 sm:text-6xl md:text-7xl dark:text-dark-100">
                    Feel the Auth Flow
                </h1>
                <p
                    class="text-primary-950/60 dark:text-primary-50/50 mt-4 w-full text-center text-lg leading-8 sm:w-1/2 2xl:text-xl">
                    Pausa is the most simple way to integrate the auth flow into your App in seconds!
                </p>
                <div class="mt-8 flex flex-col items-center justify-center gap-4 w-full 2xl:w-1/3 mx-auto">
                    <UButton block to="/auth/sign-up">Join us</UButton>
                </div>
            </div>
        </div>
    </div>
</template>