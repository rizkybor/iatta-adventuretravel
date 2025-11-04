<script setup lang="ts">
// 1. Definisikan tipe data untuk Post (sesuai skema Prisma Anda)
interface Post {
  id: number;
  title: string;
  content: string;
}

// 2. Definisikan tipe data untuk respons API
// Respons API Anda memiliki struktur { status, message, data: Post[] }
interface PostResponse {
  status: number;
  message: string;
  data: Post[];
}

// Menggunakan useFetch bawaan Nuxt untuk memanggil endpoint API Nitro
// Sekarang kita memberikan tipe data PostResponse ke useFetch
const { data: response, pending, error } = await useFetch<PostResponse>('/api/posts');

// Ambil array posts dari response.data, atau array kosong jika belum ada
// TypeScript sekarang tahu bahwa response.value memiliki properti 'data'
const posts = computed(() => response.value?.data || []);

// Tampilkan error jika ada masalah di server
if (error.value) {
  console.error('Failed to fetch posts:', error.value);
}
</script>

<template>
  <div class="text-center py-10">
    <h1 class="text-5xl font-extrabold text-blue-600 mb-4">Selamat Datang di IATTA Adventure Travel!</h1>
    <p class="text-xl text-gray-700">Project Nuxt, Tailwind, PostgreSQL, dan Docker dengan database **iatta_db**.</p>

    <NuxtLink to="/about" class="inline-block mt-8 px-6 py-3 bg-teal-500 text-white font-semibold rounded-lg shadow-md hover:bg-teal-600 transition">
      Kunjungi Halaman About
    </NuxtLink>
  </div>

  <!-- BAGIAN BARU UNTUK MENAMPILKAN DATA API -->
  <div class="container mx-auto px-4 mt-12">
    <h2 class="text-4xl font-bold mb-8 text-center text-gray-800">Postingan Terbaru</h2>

    <!-- Loading State -->
    <div v-if="pending" class="text-center p-8">
      <p class="text-lg text-blue-500">Memuat data post dari server...</p>
    </div>

    <!-- Error State -->
    <div v-else-if="error" class="text-center p-8">
      <p class="text-lg text-red-600 font-semibold">Gagal memuat post. Cek koneksi API dan Server.</p>
      <pre class="text-sm text-red-400 mt-2">{{ error }}</pre>
    </div>

    <!-- Data Posts -->
    <div v-else-if="posts.length" class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      <div v-for="post in posts" :key="post.id" class="border border-gray-200 bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition duration-300">
        <h3 class="text-2xl font-semibold text-gray-900 mb-2">{{ post.title }}</h3>
        <p class="text-gray-600 mb-4">{{ post.content.substring(0, 150) }}...</p>
        <p class="text-sm font-medium text-teal-500">ID Post: {{ post.id }}</p>
      </div>
    </div>

    <!-- Empty State -->
    <div v-else class="text-center p-8 border-dashed border-2 border-gray-300 rounded-lg">
      <p class="text-lg text-gray-500">Tidak ada post yang ditemukan. Coba jalankan ulang `npx prisma db seed`.</p>
    </div>
  </div>
</template>
