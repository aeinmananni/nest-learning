import { MigrationInterface, QueryRunner } from "typeorm";

export class UpdateContact1780719683897 implements MigrationInterface {
    name = 'UpdateContact1780719683897'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`DROP INDEX "nest"."idx_users_contact"`);
        await queryRunner.query(`CREATE UNIQUE INDEX "idx_users_contact" ON "nest"."users" ("contact") `);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`DROP INDEX "nest"."idx_users_contact"`);
        await queryRunner.query(`CREATE INDEX "idx_users_contact" ON "nest"."users" ("contact") `);
    }

}
