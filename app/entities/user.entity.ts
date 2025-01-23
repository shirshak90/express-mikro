import { Entity, PrimaryKey, Property } from "@mikro-orm/core";

@Entity()
export class User {
  @PrimaryKey()
  id!: number;

  @Property()
  full_name!: string;

  @Property()
  email!: string;

  @Property()
  password!: string;

  @Property({ type: "text" })
  bio = "";
}
