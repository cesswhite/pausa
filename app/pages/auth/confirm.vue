<template>
    <div>
        <!-- TODO: Add a loading spinner -->
        Verifying OTP...
    </div>
</template>

<script setup lang="ts">
const client = useSupabaseClient()
const route = useRoute()
const router = useRouter()
const toast = useToast()

onMounted(async () => {
    console.log(route.query)
    if (route.query.token_hash && route.query.type) {
        await verifyOtp()
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