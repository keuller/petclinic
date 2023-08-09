<script setup lang="ts">
    import type { Veterinario } from '@petclinic/vets';

    defineProps<{
        data: Array<Veterinario>
    }>();
</script>

<template>
    <table class="w-full">
        <thead>
            <tr class="bg-slate-800 text-left text-white">
                <th class="p-2">Nome</th>
                <th class="p-2">Especialidades</th>
            </tr>
        </thead>
        <tbody>
            <tr v-for="vet in data" :key="vet.id" class="odd:bg-slate-100">
                <td class="p-2">{{ vet.nome }}</td>
                <td class="p-2">{{ vet.especialidades.join(', ')  }}</td>
            </tr>
        </tbody>
    </table>
</template>
