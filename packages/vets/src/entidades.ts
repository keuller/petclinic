import { pgTable, char, varchar, timestamp, primaryKey, uniqueIndex } from 'drizzle-orm/pg-core';
import { relations } from 'drizzle-orm';

export const especialidades = pgTable('especialidades', {
    id: char('id', { length: 10 }).primaryKey(),
    nome: varchar('nome', { length: 30 }).notNull()
});

export const veterinarios = pgTable('veterinarios', {
    id: char('id', { length: 10 }).primaryKey(),
    nome: varchar('nome', { length: 50 }).notNull(),
    email: varchar('email', { length: 100 }).notNull(),
    endereco: varchar('endereco', { length: 100 }),
    cidade: varchar('cidade', { length: 30 }),
    createdAt: timestamp('created_at', { mode: 'string' }).notNull().defaultNow()
}, (vets) => ({
    idxEmail: uniqueIndex('idx_vets_email').on(vets.email)
}));

export const vetsEspecialidades = pgTable('vets_especs', {
    vetId: char('vet_id', { length: 10 })
        .notNull()
        .references(() => veterinarios.id, { onDelete: 'cascade' }),
    especId: char('espec_id', { length: 10 })
        .notNull()
        .references(() => especialidades.id)
}, (tbl) => ({
    pk: primaryKey(tbl.vetId, tbl.especId)
}));


/**
 * Relations
 */

export const especialidadeRelations = relations(especialidades, ({ many }) => ({
    veterinarios: many(vetsEspecialidades)
}));

export const veterinarioRelations = relations(veterinarios, ({ many }) => ({
    especialidades: many(vetsEspecialidades)
}));

export const vetsEspecsRelations = relations(vetsEspecialidades, ({ one }) => ({
    veterinario: one(veterinarios, {
        fields: [vetsEspecialidades.vetId],
        references: [veterinarios.id]
    }),
    especialidade: one(especialidades, {
        fields: [vetsEspecialidades.especId],
        references: [especialidades.id]
    })
}))
