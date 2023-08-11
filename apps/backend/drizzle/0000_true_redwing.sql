CREATE TABLE IF NOT EXISTS "especialidades" (
	"id" char(10) PRIMARY KEY NOT NULL,
	"nome" varchar(30) NOT NULL
);
--> statement-breakpoint
CREATE TABLE IF NOT EXISTS "veterinarios" (
	"id" char(10) PRIMARY KEY NOT NULL,
	"nome" varchar(50) NOT NULL,
	"email" varchar(100) NOT NULL,
	"endereco" varchar(100),
	"cidade" varchar(30),
	"created_at" timestamp DEFAULT now() NOT NULL
);
--> statement-breakpoint
CREATE TABLE IF NOT EXISTS "vets_especs" (
	"vet_id" char(10) NOT NULL,
	"espec_id" char(10) NOT NULL,
	CONSTRAINT vets_especs_vet_id_espec_id PRIMARY KEY("vet_id","espec_id")
);
--> statement-breakpoint
CREATE UNIQUE INDEX IF NOT EXISTS "idx_vets_email" ON "veterinarios" ("email");--> statement-breakpoint
DO $$ BEGIN
 ALTER TABLE "vets_especs" ADD CONSTRAINT "vets_especs_vet_id_veterinarios_id_fk" FOREIGN KEY ("vet_id") REFERENCES "veterinarios"("id") ON DELETE cascade ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;
--> statement-breakpoint
DO $$ BEGIN
 ALTER TABLE "vets_especs" ADD CONSTRAINT "vets_especs_espec_id_especialidades_id_fk" FOREIGN KEY ("espec_id") REFERENCES "especialidades"("id") ON DELETE no action ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;
