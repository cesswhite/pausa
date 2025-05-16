<template>
    <div>
        <h1>Dashboard</h1>
        <pre>
            {{ user }}
        </pre>
    </div>
</template>

<script setup lang="ts">
const user = useSupabaseUser()

</script>
