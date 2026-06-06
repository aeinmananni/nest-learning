import { MigrationInterface, QueryRunner } from "typeorm";

export class AddTableUsers1780719338392 implements MigrationInterface {
    name = 'AddTableUsers1780719338392'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "nest"."users" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "first_name" character varying(100), "last_name" character varying(100), "contact" text NOT NULL, "password" character varying(255) NOT NULL, "created_at" TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(), CONSTRAINT "PK_a3ffb1c0c8416b9fc6f907b7433" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE INDEX "idx_users_last_name" ON "nest"."users" ("last_name") `);
        await queryRunner.query(`CREATE INDEX "idx_users_first_name" ON "nest"."users" ("first_name") `);
        await queryRunner.query(`CREATE INDEX "idx_users_contact" ON "nest"."users" ("contact") `);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`DROP INDEX "nest"."idx_users_contact"`);
        await queryRunner.query(`DROP INDEX "nest"."idx_users_first_name"`);
        await queryRunner.query(`DROP INDEX "nest"."idx_users_last_name"`);
        await queryRunner.query(`DROP TABLE "nest"."users"`);
    }

}
