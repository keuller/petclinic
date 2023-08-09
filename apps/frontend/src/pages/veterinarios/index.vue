<script setup lang="ts">
    import { onMounted } from 'vue';
    import PageTitle from '~/components/PageTitle.vue';
    import VetTable from './VetTable.vue';
    import useVets from './useVets';

    const vets = useVets();
    onMounted(() => vets.loadVets());
</script>

<template>
    <div class="flex flex-col">
        <PageTitle text="Veterinários" />

        <VetTable v-bind:data="vets.data.value" />
    </div>
</template>
