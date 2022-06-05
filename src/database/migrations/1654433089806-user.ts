import {MigrationInterface, QueryRunner, Table} from "typeorm";

export class user1654433089806 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(
            new Table({
                name: "user",
                columns: [
                  {
                    name: "id",
                    type: "uuid",
                    isPrimary: true,
                    isNullable: false
                  },
                  {
                      name: "name",
                      type: "varchar",
                      isNullable: false
                  },
                  {
                      name: "last_name",
                      type: "varchar",
                      isNullable: false
                  },
                  {
                      name: "email",
                      type: "varchar",
                      isUnique: true,
                      isNullable: false
                  },
                  {
                      name: "password",
                      type: "varchar",
                      isNullable: false
                  },
                  {
                        name: "created_at",
                        type: "timestamp",
                        default: "now()"
                  },
                  {
                      name: "updated_at",
                      type: "timestamp",
                      default: "now()"
                  }
                ]
            })
        )
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable("user")
    }

}
