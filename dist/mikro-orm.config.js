"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const entities_1 = require("./entities");
const env_1 = require("./config/env");
const sql_highlighter_1 = require("@mikro-orm/sql-highlighter");
const postgresql_1 = require("@mikro-orm/postgresql");
exports.default = (0, postgresql_1.defineConfig)({
  entities: [entities_1.User],
  dbName: env_1.DB_NAME,
  port: env_1.DB_PORT,
  user: env_1.DB_USER,
  password: env_1.DB_PASSWORD,
  highlighter: new sql_highlighter_1.SqlHighlighter(),
  debug: true,
});
