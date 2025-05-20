<template>
    <div>
        <!-- TODO: Add a loading spinner -->
        Resetting password...
        <pre>{{ user }}</pre>
    </div>
</template>

<script setup lang="ts">
const client = useSupabaseClient()
const route = useRoute()
const router = useRouter()
const toast = useToast()
const user = useSupabaseUser()

onMounted(async () => {
    console.log(route.query)
    if (route.query.code && route.query.type) {
        /*  await verifyOtp() */
    }
})

</script>