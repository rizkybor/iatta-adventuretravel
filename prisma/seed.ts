import { PrismaClient } from '@prisma/client';

// Inisialisasi Prisma Client
const prisma = new PrismaClient();

async function main() {
  console.log('Memulai seeding...');

  // Hapus data lama untuk memastikan tidak ada duplikat (opsional, tapi baik untuk testing)
  await prisma.post.deleteMany();
  console.log('Menghapus data Post lama...');

  // 1. Membuat Post pertama
  const post1 = await prisma.post.create({
    data: {
      title: 'Perjalanan ke Raja Ampat',
      content: 'Eksplorasi keindahan bawah laut di Raja Ampat, Papua Barat. Pengalaman menyelam yang tak terlupakan.',
      published: true,
      authorId: 1, // Asumsi Anda punya user dengan ID 1
    },
  });
  console.log(`Post dibuat dengan ID: ${post1.id}`);

  // 2. Membuat Post kedua
  const post2 = await prisma.post.create({
    data: {
      title: 'Mendaki Gunung Rinjani',
      content: 'Cerita pendakian epik ke puncak Gunung Rinjani di Lombok, Nusa Tenggara Barat.',
      published: true,
      authorId: 1,
    },
  });
  console.log(`Post dibuat dengan ID: ${post2.id}`);

  // 3. Membuat Post ketiga
  const post3 = await prisma.post.create({
    data: {
      title: 'Panduan Wisata Kuliner Bali',
      content: 'Tempat makan terbaik di Bali yang wajib Anda kunjungi, mulai dari Babi Guling hingga Ayam Betutu.',
      published: false, // Belum dipublikasikan
      authorId: 1,
    },
  });
  console.log(`Post dibuat dengan ID: ${post3.id}`);

  console.log('Seeding selesai!');
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.disconnect();
  });
