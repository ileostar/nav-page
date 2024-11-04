
import { drizzle } from "drizzle-orm/node-postgres";
import { Pool } from "pg";
import * as schema from "../../drizzle/schema";

const pool = new Pool({
  // eslint-disable-next-line node/prefer-global/process
  connectionString: process.env.POSTGRES_URL,
});

export const db = drizzle({
  client: pool,
  schema,
});
