// server/api/users.get.js
import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

export default defineEventHandler(async (event) => {
  try {
    const users = await prisma.user.findMany()
console.log(users)
    return {
      success: true,
      data: users,
      message: 'Koneksi database berhasil, data User diambil.',
    }
  } catch (error) {
    const errorMessage =
      error instanceof Error ? error.message : 'Unknown database error'

    event.res.statusCode = 500

    return {
      success: false,
      message: 'Gagal terhubung atau mengambil data dari database iatta_db.',
      error: errorMessage,
    }
  }
})