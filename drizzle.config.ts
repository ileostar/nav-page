import type { Config } from 'drizzle-kit'
import * as dotenv from 'dotenv'

// 加载环境变量
dotenv.config({ path: '.env.local' })

export default {
  schema: './drizzle/schema/*',
  out: './drizzle/migrations',
  dialect: 'postgresql',
  dbCredentials: {
    host: process.env.POSTGRES_HOST || '',
    port: Number(process.env.POSTGRES_PORT) || 5432,
    user: process.env.POSTGRES_USER || '',
    password: process.env.POSTGRES_PASSWORD || '',
    database: process.env.POSTGRES_DATABASE || '',
    ssl: 'allow',
  }
} satisfies Config
