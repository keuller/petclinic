
const FIXTURES = [
    { id: '4878', nome: 'Veterianrio Test 1', especialidades: ['cirurgia'] },
    { id: '3452', nome: 'Veterianrio Test 2', especialidades: ['radiologia'] },
    { id: '1847', nome: 'Veterianrio Test 3', especialidades: ['dentista'] },
    { id: '8492', nome: 'Veterianrio Test 4', especialidades: [''] },
    { id: '9823', nome: 'Veterianrio Test 5', especialidades: ['cirurgia', 'obstetricia'] }
]

export default function useVets() {
    return {
        data: FIXTURES
    }
}
