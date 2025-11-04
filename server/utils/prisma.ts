// server/utils/prisma.ts
import { PrismaClient } from '@prisma/client'

// Inisialisasi Prisma Client
// Ini akan menggunakan DATABASE_URL dari environment variable
export const prisma = new PrismaClient()

// Opsional: Untuk memastikan koneksi ditutup saat server Nuxt di-restart
process.on('beforeExit', () => {
  prisma.$disconnect()
})