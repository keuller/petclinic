import { NodePgDatabase } from 'drizzle-orm/node-postgres';
import * as Schema from './entidades';
import { Veterinario } from './modelos';

type VetSchema = typeof Schema;

export class VeterinarioRepositorio {

    constructor(readonly db: NodePgDatabase<VetSchema>) { }

    buscarVets(): Promise<Veterinario[]> {
        return this.db.query.veterinarios.findMany({
            columns: {
                id: true,
                nome: true
            },
            with: {
                especialidades: {
                    columns: {},
                    with: {
                        especialidade: true
                    }
                }
            }
        }).then(rows => {
            return rows.map((row: any) => ({
                id: row.id,
                nome: row.nome,
                especialidades: row.especialidades.map((espec: any) => espec.especialidade.nome)
            }))
        })
    }

}
