import { Client } from 'pg';
import { NodePgDatabase, drizzle } from 'drizzle-orm/node-postgres';
import * as schema from './schema';
import 'dotenv/config';

type PetClinicSchema = typeof schema;

const client = new Client({
    application_name: 'petclinic',
    connectionString: process.env.DATABASE_URL
});

await client.connect();

export const db: NodePgDatabase<PetClinicSchema> = drizzle(client, { schema });
