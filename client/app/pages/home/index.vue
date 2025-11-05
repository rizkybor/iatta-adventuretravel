<!-- client/app/pages/home/index.vue -->
<template>
  <main>
    <!-- #2 CTA Buttons -->
    <section class="max-w-6xl mx-auto px-6 py-16 text-center">
      <h2 class="text-2xl font-semibold text-slate-800 mb-8">Temukan Dunia IATTA</h2>
      <div class="grid sm:grid-cols-3 gap-6">
        <div
          v-for="cta in ctas"
          :key="cta.title"
          class="p-6 bg-white rounded-xl border hover:shadow-md transition cursor-pointer"
        >
          <div class="text-3xl mb-3" aria-hidden="true">{{ cta.icon }}</div>
          <h3 class="font-semibold text-lg mb-2 text-slate-800">{{ cta.title }}</h3>
          <p class="text-slate-500 text-sm">{{ cta.desc }}</p>
        </div>
      </div>
    </section>

    <!-- #3 Program Highlights -->
    <section class="bg-gray-50 py-16 px-6">
      <div class="max-w-6xl mx-auto">
        <h2 class="text-2xl font-semibold text-slate-800 mb-8 text-center">Program Unggulan</h2>
        <div class="grid md:grid-cols-3 gap-8">
          <div
            v-for="program in programs"
            :key="program.title"
            class="bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-lg transition"
          >
            <img :src="program.image" :alt="program.title" class="h-48 w-full object-cover" />
            <div class="p-5">
              <h3 class="font-semibold text-lg mb-1">{{ program.title }}</h3>
              <p class="text-sm text-slate-600">{{ program.desc }}</p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- #4 Upcoming Events -->
    <section class="max-w-6xl mx-auto px-6 py-16">
      <h2 class="text-2xl font-semibold text-slate-800 mb-8 text-center">Event Mendatang</h2>
      <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        <div
          v-for="event in events"
          :key="event.title"
          class="p-6 bg-white border rounded-xl hover:shadow-md transition"
        >
          <h3 class="font-semibold text-lg text-green-700 mb-2">{{ event.title }}</h3>
          <p class="text-sm text-slate-500 mb-3">{{ event.date }}</p>
          <p class="text-slate-600 text-sm">{{ event.desc }}</p>
        </div>
      </div>
    </section>

    <!-- #5 Latest News -->
    <section class="bg-gray-50 py-16 px-6">
      <div class="max-w-6xl mx-auto">
        <h2 class="text-2xl font-semibold text-slate-800 mb-8 text-center">Berita Terbaru</h2>
        <div class="grid md:grid-cols-3 gap-8">
          <div
            v-for="news in latestNews"
            :key="news.title"
            class="bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-md transition"
          >
            <img :src="news.image" :alt="news.title" class="h-40 w-full object-cover" />
            <div class="p-5">
              <h3 class="font-semibold text-lg mb-2">{{ news.title }}</h3>
              <p class="text-sm text-slate-500 mb-4">{{ news.date }}</p>
              <p class="text-slate-600 text-sm">{{ news.desc }}</p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- #6 Partners & Affiliates -->
    <section class="max-w-6xl mx-auto px-6 py-16 text-center">
      <h2 class="text-2xl font-semibold text-slate-800 mb-10">Mitra & Afiliasi</h2>
      <div class="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-6 items-center justify-center opacity-70">
        <img
          v-for="n in 5"
          :key="n"
          :src="`https://placehold.co/150x60?text=Logo+${n}`"
          :alt="`Logo mitra ${n}`"
          class="mx-auto grayscale hover:grayscale-0 transition"
        />
      </div>
    </section>
  </main>
</template>

<script setup>
import { onMounted, onBeforeUnmount } from 'vue'
import { useHeroStore } from '~/composables/useHeroStore'
import HeroSection from '~/components/HeroSection.vue'

definePageMeta({
  layout: 'LandingPage'
})

const { setHero, clearHero } = useHeroStore()

onMounted(() => {
  setHero({
    component: HeroSection,
    props: {
      // Perhatikan: jika HeroSection tidak memakai v-html, kirim tanpa tag HTML
      title: 'Indonesian Adventures in <strong>Tropical Paradise</strong>',
      subtitle: 'Jelajahi keindahan nusantara — dari puncak gunung hingga laut terdalam.',
      kicker: 'IATTA Highlights',
      image: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=1600&q=80',
      ctas: [
        { label: 'Join', to: '/join', variant: 'primary', icon: '🧭' },
        { label: 'Directory', to: '/directory', variant: 'secondary', icon: '📖' },
        { label: 'Training Program', to: '/programs', variant: 'ghost', icon: '🎓' }
      ]
    }
  })
})

onBeforeUnmount(() => {
  clearHero()
})

/* ---- sample data for sections ---- */
const ctas = [
  { icon: '🌏', title: 'Join Us', desc: 'Bergabunglah dengan komunitas petualang Indonesia.' },
  { icon: '📖', title: 'Directory', desc: 'Temukan destinasi terbaik dari Sabang sampai Merauke.' },
  { icon: '🎓', title: 'Training Program', desc: 'Ikuti pelatihan profesional pemandu wisata & konservasi.' }
]

const programs = [
  { title: 'Eco Adventure', desc: 'Jelajahi alam sambil menjaga lingkungan.', image: 'https://images.unsplash.com/photo-1526481280698-8fcc2a9f3f4a?auto=format&fit=crop&w=800&q=60' },
  { title: 'Cultural Heritage Tours', desc: 'Kenali budaya lokal Indonesia dengan pengalaman otentik.', image: 'https://images.unsplash.com/photo-1589308078059-be1415eab4c3?auto=format&fit=crop&w=800&q=60' },
  { title: 'Marine Exploration', desc: 'Eksplorasi bawah laut nusantara bersama tim profesional.', image: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=800&q=60' }
]

const events = [
  { title: 'Festival Gunung 2025', date: 'Februari 2025', desc: 'Perayaan pendakian dan budaya di Jawa Barat.' },
  { title: 'Pelatihan Rescue Laut', date: 'Maret 2025', desc: 'Program sertifikasi keselamatan laut untuk diver.' },
  { title: 'Bali Eco Camp', date: 'April 2025', desc: 'Kegiatan konservasi pantai dan edukasi lingkungan.' }
]

const latestNews = [
  { title: 'IATTA Gelar Workshop Nasional', date: 'Jan 2025', desc: 'IATTA sukses mengadakan workshop nasional tentang pariwisata berkelanjutan.', image: 'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=800&q=60' },
  { title: 'Pemandu Wisata Lokal Berdaya', date: 'Des 2024', desc: 'Program pemberdayaan pemandu wisata lokal sukses dilaksanakan di Lombok.', image: 'https://images.unsplash.com/photo-1509099836639-18ba1795216d?auto=format&fit=crop&w=800&q=60' },
  { title: 'Peluncuran Aplikasi IATTA', date: 'Nov 2024', desc: 'Aplikasi digital untuk memudahkan wisatawan menemukan perjalanan terbaik.', image: 'https://images.unsplash.com/photo-1556742400-b5b7c5121f4c?auto=format&fit=crop&w=800&q=60' }
]
</script>