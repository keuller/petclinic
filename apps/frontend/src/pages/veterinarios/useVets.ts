import { ref } from 'vue';
import type { Veterinario } from "@petclinic/vets";

async function fetchVets(): Promise<Array<Veterinario>> {
    const resp = await fetch('/api/vets');
    if (resp.status === 200) {
        return resp.json();
    }

    console.log('fail to load veterinarios -', resp.statusText);
    return [];
}

export default function useVets() {
    const loading = ref<boolean>(false);
    const data = ref<Veterinario[]>([]);

    return {
        loading,
        loadVets() {
            loading.value = true;
            fetchVets()
                .then(vets => data.value = vets)
                .finally(() => loading.value = false);
        },
        data
    }
}
