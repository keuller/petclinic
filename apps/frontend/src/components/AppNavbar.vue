<script setup lang="ts">
import { RouterLink } from 'vue-router'
</script>

<template>
    <header class="flex items-center gap-10 bg-slate-800 text-white py-4 px-12">
        <div class="text-2xl font-semibold tracking-wider">PetClinic</div>

        <nav class="flex gap-6">
            <div class="text-sm uppercase tracking-wide">
                <RouterLink to="/">home</RouterLink>
            </div>
            <div class="text-sm uppercase tracking-wide">
                <RouterLink to="/clientes">Clientes</RouterLink>
            </div>
            <div class="text-sm uppercase tracking-wide">
                <RouterLink to="/vets">Veterin&aacute;rios</RouterLink>
            </div>
        </nav>
    </header>
</template>
