import * as drizzle_orm_query_promise_d_31db3408 from 'drizzle-orm/query-promise.d-31db3408';
import * as drizzle_orm_column_d_04875079 from 'drizzle-orm/column.d-04875079';
import { NodePgDatabase } from 'drizzle-orm/node-postgres';

type Veterinario = {
    id: string;
    nome: string;
    especialidades: string[];
};

declare const especialidades: drizzle_orm_column_d_04875079.bt<{
    name: "especialidades";
    schema: undefined;
    columns: {
        id: drizzle_orm_column_d_04875079.bo<{
            name: "id";
            tableName: "especialidades";
            dataType: "string";
            columnType: "PgChar";
            data: string;
            driverParam: string;
            notNull: true;
            hasDefault: false;
            enumValues: [string, ...string[]];
            baseColumn: never;
        }, {}, {}>;
        nome: drizzle_orm_column_d_04875079.bo<{
            name: "nome";
            tableName: "especialidades";
            dataType: "string";
            columnType: "PgVarchar";
            data: string;
            driverParam: string;
            notNull: true;
            hasDefault: false;
            enumValues: [string, ...string[]];
            baseColumn: never;
        }, {}, {}>;
    };
    dialect: "pg";
}>;
declare const especialidadeRelations: drizzle_orm_query_promise_d_31db3408.z<"especialidades", {
    veterinarios: drizzle_orm_query_promise_d_31db3408.M<"veterinarios">;
}>;
declare const veterinarios: drizzle_orm_column_d_04875079.bt<{
    name: "veterinarios";
    schema: undefined;
    columns: {
        id: drizzle_orm_column_d_04875079.bo<{
            name: "id";
            tableName: "veterinarios";
            dataType: "string";
            columnType: "PgChar";
            data: string;
            driverParam: string;
            notNull: true;
            hasDefault: false;
            enumValues: [string, ...string[]];
            baseColumn: never;
        }, {}, {}>;
        nome: drizzle_orm_column_d_04875079.bo<{
            name: "nome";
            tableName: "veterinarios";
            dataType: "string";
            columnType: "PgVarchar";
            data: string;
            driverParam: string;
            notNull: true;
            hasDefault: false;
            enumValues: [string, ...string[]];
            baseColumn: never;
        }, {}, {}>;
        email: drizzle_orm_column_d_04875079.bo<{
            name: "email";
            tableName: "veterinarios";
            dataType: "string";
            columnType: "PgVarchar";
            data: string;
            driverParam: string;
            notNull: true;
            hasDefault: false;
            enumValues: [string, ...string[]];
            baseColumn: never;
        }, {}, {}>;
        endereco: drizzle_orm_column_d_04875079.bo<{
            name: "endereco";
            tableName: "veterinarios";
            dataType: "string";
            columnType: "PgVarchar";
            data: string;
            driverParam: string;
            notNull: true;
            hasDefault: false;
            enumValues: [string, ...string[]];
            baseColumn: never;
        }, {}, {}>;
        cidade: drizzle_orm_column_d_04875079.bo<{
            name: "cidade";
            tableName: "veterinarios";
            dataType: "string";
            columnType: "PgVarchar";
            data: string;
            driverParam: string;
            notNull: false;
            hasDefault: false;
            enumValues: [string, ...string[]];
            baseColumn: never;
        }, {}, {}>;
        createdAt: drizzle_orm_column_d_04875079.bo<{
            name: "created_at";
            tableName: "veterinarios";
            dataType: "date";
            columnType: "PgTimestamp";
            data: Date;
            driverParam: string;
            notNull: true;
            hasDefault: true;
            enumValues: undefined;
            baseColumn: never;
        }, {}, {}>;
    };
    dialect: "pg";
}>;
declare const veterinarioRelations: drizzle_orm_query_promise_d_31db3408.z<"veterinarios", {
    especialidades: drizzle_orm_query_promise_d_31db3408.M<"especialidades">;
}>;
declare const vetsEspecialidades: drizzle_orm_column_d_04875079.bt<{
    name: "vets_especs";
    schema: undefined;
    columns: {
        vetId: drizzle_orm_column_d_04875079.bo<{
            name: "vet_id";
            tableName: "vets_especs";
            dataType: "string";
            columnType: "PgChar";
            data: string;
            driverParam: string;
            notNull: true;
            hasDefault: false;
            enumValues: [string, ...string[]];
            baseColumn: never;
        }, {}, {}>;
        especId: drizzle_orm_column_d_04875079.bo<{
            name: "espec_id";
            tableName: "vets_especs";
            dataType: "string";
            columnType: "PgChar";
            data: string;
            driverParam: string;
            notNull: true;
            hasDefault: false;
            enumValues: [string, ...string[]];
            baseColumn: never;
        }, {}, {}>;
    };
    dialect: "pg";
}>;
declare const vetsEspecsRelations: drizzle_orm_query_promise_d_31db3408.z<"vets_especs", {
    veterinario: drizzle_orm_query_promise_d_31db3408.O<"veterinarios", true>;
    especialidade: drizzle_orm_query_promise_d_31db3408.O<"especialidades", true>;
}>;

declare class VeterinarioRepositorio {
    readonly db: NodePgDatabase;
    constructor(db: NodePgDatabase);
    buscarVeterianrios(): Promise<any[]>;
}

export { Veterinario, VeterinarioRepositorio, especialidadeRelations, especialidades, veterinarioRelations, veterinarios, vetsEspecialidades, vetsEspecsRelations };
