<script setup lang="ts">
    defineProps({
        text: String
    })
</script>

<template>
    <h1 class="text-2xl font-semibold py-4 tracking-wide">{{ text }}</h1>
</template>
