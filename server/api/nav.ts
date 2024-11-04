import { eq } from 'drizzle-orm'
import { navItems, type NewNavItem } from '../../drizzle/schema'
import { db } from '../db'

export default defineEventHandler(async (event) => {
  const method = event.method
  const user = event.context.user // 需要添加认证中间件

  switch (method) {
    case 'GET':
      return await getNavItems(user?.id)
    case 'POST':
    {
      const body = await readBody(event)
      return await createNavItem(user?.id, body)
    }
    case 'PUT':
    {
      const updateBody = await readBody(event)
      return await updateNavItem(updateBody)
    }
    case 'DELETE':
    {
      const { id } = getQuery(event)
      return await deleteNavItem(Number(id))
    }
    default:
      throw createError({
        statusCode: 405,
        statusMessage: 'Method Not Allowed',
      })
  }
})

async function getNavItems(userId?: string) {
  if (!userId)
    throw createError({ statusCode: 401, statusMessage: 'Unauthorized' })

  return await db.query.navItems.findMany({
    where: eq(navItems.userId, userId),
    orderBy: navItems.sort,
  })
}

async function createNavItem(userId: string, item: Omit<NewNavItem, 'userId'>) {
  if (!userId)
    throw createError({ statusCode: 401, statusMessage: 'Unauthorized' })

  const [newItem] = await db.insert(navItems)
    .values({ ...item, userId })
    .returning()

  return newItem
}

async function updateNavItem(item: Partial<NewNavItem> & { id: number }) {
  const { id, ...data } = item
  const [updatedItem] = await db.update(navItems)
    .set(data)
    .where(eq(navItems.id, id))
    .returning()

  return updatedItem
}

async function deleteNavItem(id: number) {
  await db.delete(navItems)
    .where(eq(navItems.id, id))

  return { success: true }
}
