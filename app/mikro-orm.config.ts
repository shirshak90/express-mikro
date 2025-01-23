import { User } from "./entities";
import { DB_NAME, DB_PASSWORD, DB_PORT, DB_USER } from "./config/env";

import { SqlHighlighter } from "@mikro-orm/sql-highlighter";
import { defineConfig } from "@mikro-orm/postgresql";

export default defineConfig({
  entities: [User],
  dbName: DB_NAME,
  port: DB_PORT as unknown as number,
  user: DB_USER,
  password: DB_PASSWORD,
  highlighter: new SqlHighlighter(),
  debug: true,
});
