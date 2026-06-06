import { MigrationInterface, QueryRunner } from "typeorm";

export class SchemaInit1780207921303 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query("CREATE SCHEMA IF NOT EXISTS nest");
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`DROP SCHEMA IF EXISTS nest CASCADE`);
  }
}
