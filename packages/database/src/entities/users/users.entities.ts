import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  CreateDateColumn,
  Index,
  OneToMany,
} from "typeorm";

@Index("idx_users_contact", ["contact"], { unique: true })
@Index("idx_users_first_name", ["first_name"])
@Index("idx_users_last_name", ["last_name"])
@Entity({ name: "users", schema: "nest" })
class Users {
  @PrimaryGeneratedColumn("uuid")
  id!: string;

  @Column({ type: "varchar", length: 100, nullable: true })
  first_name?: string;

  @Column({ type: "varchar", length: 100, nullable: true })
  last_name?: string;

  @Column({ type: "text", nullable: false })
  contact!: string;

  @Column({ type: "varchar", length: 255, nullable: false, select: false })
  password!: string;

  @CreateDateColumn({ type: "timestamptz", name: "created_at" })
  created_at!: Date;
}

export default Users;
