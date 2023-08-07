
const FIXTURES = [
    { id: '4878', nome: 'Veterinario Test 1', especialidades: ['cirurgia'] },
    { id: '3452', nome: 'Veterinario Test 2', especialidades: ['radiologia'] },
    { id: '1847', nome: 'Veterinario Test 3', especialidades: ['dentista'] },
    { id: '8492', nome: 'Veterinario Test 4', especialidades: [''] },
    { id: '9823', nome: 'Veterinario Test 5', especialidades: ['cirurgia', 'obstetricia'] }
]

export default function useVets() {
    return {
        data: FIXTURES
    }
}
