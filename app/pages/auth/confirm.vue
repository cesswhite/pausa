<template>
    <div class="flex items-center justify-center h-screen">
        <div class="relative w-56 text-center mx-auto">
            <Transition name="message-fade" mode="out-in">
                <span :key="currentIndex"
                    class="text-base text-dark-950/50 dark:text-dark-50/50 text-center inline-block w-full mb-4">
                    {{ currentLoadingMessage }}
                </span>
            </Transition>
            <UProgress animation="carousel" size="md" />
        </div>
    </div>
</template>

<script setup lang="ts">
const client = useSupabaseClient()
const route = useRoute()
const router = useRouter()
const toast = useToast()

const loadingMessages = [
    "Verifying your account...",
    "Please wait a moment...",
    "Processing your verification...",
    "Almost there...",
    "Securing your account...",
    "Finalizing verification..."
]

const currentIndex = ref(0)
const currentLoadingMessage = computed(() => loadingMessages[currentIndex.value])

let messageTimer: NodeJS.Timeout | null = null

onMounted(() => {
    messageTimer = setInterval(() => {
        currentIndex.value = (currentIndex.value + 1) % loadingMessages.length
    }, 6000)

    if (route.query.token_hash && route.query.type) {
        verifyOtp()
    }
})

onUnmounted(() => {
    if (messageTimer) {
        clearInterval(messageTimer)
    }
})

async function verifyOtp() {
    const { error } = await client.auth.verifyOtp({
        token_hash: route.query.token_hash as string,
        type: route.query.type as 'email' | 'magiclink' | 'recovery',
    })
    if (error) {
        toast.add({
            title: 'Error',
            description: error.message,
            color: 'error',
        })
    } else {
        toast.add({
            title: 'Success',
            description: 'OTP verified',
            color: 'success',
        })
        if (route.query.type === 'recovery') {
            router.push('/dashboard/settings')
        } else {
            router.push('/dashboard')
        }
    }
}
</script>

<style scoped>
.message-fade-enter-active,
.message-fade-leave-active {
    transition: opacity 0.5s ease;
}

.message-fade-enter-from,
.message-fade-leave-to {
    opacity: 0;
}
</style>