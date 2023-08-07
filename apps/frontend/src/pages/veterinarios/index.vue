<script setup lang="ts">
    import PageTitle from '~/components/PageTitle.vue';
    import VetTable from './VetTable.vue';
    import useVets from './useVets';

    const vets = useVets();
</script>

<template>
    <div class="flex flex-col">
        <PageTitle text="Veterinários" />

        <VetTable v-bind:data="vets.data" />
    </div>
</template>
