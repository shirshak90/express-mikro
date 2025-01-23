import { Opt } from "@mikro-orm/core";
export declare abstract class BaseEntity {
  id: number;
  createdAt: Date & Opt;
  updatedAt: Date & Opt;
}
