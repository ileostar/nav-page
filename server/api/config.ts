import { eq } from 'drizzle-orm'
import { type NewUserConfig, userConfigs } from '../../drizzle/schema'
import { db } from '../db'

export default defineEventHandler(async (event) => {
  const method = event.method
  const user = event.context.user // 需要添加认证中间件

  switch (method) {
    case 'GET':
      return await getUserConfig(user?.id)
    case 'PUT':
    {
      const body = await readBody(event)
      return await updateUserConfig(user?.id, body)
    }
    default:
      throw createError({
        statusCode: 405,
        statusMessage: 'Method Not Allowed',
      })
  }
})

async function getUserConfig(userId?: string) {
  if (!userId)
    throw createError({ statusCode: 401, statusMessage: 'Unauthorized' })

  const config = await db.select().from(userConfigs).where(eq(userConfigs.userId, userId)).limit(1)

  return config[0] || {
    theme: 'light',
    backgroundType: 'color',
    backgroundValue: '#f5f5f5',
    backgroundBlur: 0,
    backgroundOpacity: 1,
  }
}

async function updateUserConfig(userId: string, config: Partial<NewUserConfig>) {
  if (!userId)
    throw createError({ statusCode: 401, statusMessage: 'Unauthorized' })

  const existingConfig = await db.select().from(userConfigs).where(eq(userConfigs.userId, userId)).limit(1)

  if (existingConfig[0]) {
    const [updatedConfig] = await db.update(userConfigs)
      .set(config)
      .where(eq(userConfigs.userId, userId))
      .returning()
    return updatedConfig
  }
  else {
    const [newConfig] = await db.insert(userConfigs)
      .values({ ...config, userId })
      .returning()
    return newConfig
  }
}
