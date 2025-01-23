import "express-async-errors";
import http from "http";
import { Express } from "express";
import { EntityManager, MikroORM } from "@mikro-orm/postgresql";
export declare const DI: {
    server: http.Server;
    orm: MikroORM;
    em: EntityManager;
};
export declare const app: Express;
export declare const init: Promise<void>;
