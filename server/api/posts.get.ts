import { PrismaClient } from '@prisma/client';

// Inisialisasi Prisma Client (Pastikan ini sesuai dengan konfigurasi Anda)
const prisma = new PrismaClient();

/**
 * Endpoint API untuk mengambil semua Post.
 * Dijalankan pada request GET ke /api/posts
 */
export default defineEventHandler(async (event) => {
  try {
    // Mengambil semua Post dari database menggunakan Prisma
    // Kita mengambil semua Post yang sudah dipublikasikan (published: true)
    const posts = await prisma.post.findMany({
      where: {
        published: true,
      },
      // Anda bisa menambahkan `orderBy` di sini jika diperlukan
      orderBy: {
        id: 'desc', // Urutkan berdasarkan ID terbaru
      },
    });

    // Mengirimkan respons yang sukses dengan data Post
    return {
      status: 200,
      message: 'Successfully fetched all published posts.',
      data: posts,
    };
  } catch (error) {
    // Penanganan error jika koneksi database atau query gagal
    console.error('API Error fetching posts:', error);

    // Mengirimkan respons error 500
    throw createError({
      statusCode: 500,
      statusMessage: 'Internal Server Error: Failed to retrieve posts.',
      data: error,
    });
  } finally {
    // Pastikan koneksi Prisma diputuskan setelah request selesai (opsional di Nuxt, tapi praktik baik)
    await prisma.$disconnect();
  }
});
