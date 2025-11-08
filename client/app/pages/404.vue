<template>
  <!-- <main class="min-h-screen flex items-center justify-center"> -->
    <section
      class="relative w-full max-w-4xl mx-auto rounded-2xl overflow-hidden shadow-2xl m-10"
      role="main"
      aria-labelledby="page-title"
    >
      <!-- decorative hero -->
      <div class="absolute inset-0 -z-10 bg-gradient-to-br from-emerald-50/60 to-transparent"></div>
      <div class="absolute -left-20 -top-20 w-72 h-72 rounded-full blur-3xl bg-emerald-200/40 mix-blend-screen pointer-events-none"></div>
      <div class="absolute -right-20 -bottom-20 w-72 h-72 rounded-full blur-3xl bg-sky-200/30 mix-blend-screen pointer-events-none"></div>

      <div class="grid grid-cols-1 md:grid-cols-2 gap-0">
        <!-- Left: big error message -->
        <div class="p-10 flex flex-col items-start justify-center bg-white">
          <h1 id="page-title" class="text-6xl md:text-7xl font-extrabold tracking-tight text-slate-900">404</h1>
          <p class="mt-2 text-sm font-medium text-slate-500 uppercase">Page not found</p>

          <h2 class="mt-6 text-2xl md:text-3xl font-semibold text-slate-900">
            Maaf, halaman yang Anda cari tidak ditemukan.
          </h2>

          <p class="mt-3 text-slate-600 max-w-xl">
            Mungkin tautan itu sudah usang, salah ketik, atau halaman dipindahkan. Tenang — kami akan bantu arahkan kembali.
          </p>

          <div class="mt-6 flex flex-wrap gap-3">
            <NuxtLink to="/" class="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-emerald-500 text-white font-semibold shadow hover:bg-emerald-600">
              <svg class="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor"><path d="M3 12 L12 3 L21 12" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/></svg>
              Home
            </NuxtLink>

            <NuxtLink to="/contact" class="inline-flex items-center gap-2 px-4 py-2 rounded-lg border border-slate-200 bg-white text-slate-800 hover:shadow">
              Contact Support
            </NuxtLink>

            <NuxtLink to="/sitemap.xml" class="inline-flex items-center gap-2 px-4 py-2 rounded-lg text-sm text-slate-600 hover:underline">
              View sitemap
            </NuxtLink>
          </div>

          <!-- quick search (client-only, non-indexing) -->
          <form @submit.prevent="doSearch" class="mt-6 w-full">
            <label for="search" class="sr-only">Search site</label>
            <div class="flex gap-2">
              <input
                id="search"
                v-model="q"
                type="search"
                placeholder="Cari halaman / topik di iatta.or.id..."
                class="flex-1 rounded-lg border border-slate-200 px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-emerald-200"
                aria-label="Search site"
              />
              <button type="submit" class="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-slate-900 text-white text-sm">
                Cari
              </button>
            </div>

            <p v-if="searchMessage" class="mt-2 text-xs text-slate-500">{{ searchMessage }}</p>
          </form>
        </div>

        <!-- Right: illustration / tips -->
        <aside class="p-8 bg-emerald-50 flex flex-col justify-center">
          <div class="mb-6">
            <!-- lightweight illustrative SVG (decorative, accessible label) -->
            <svg aria-hidden="true" class="w-full h-44 md:h-56" viewBox="0 0 600 400" fill="none" xmlns="http://www.w3.org/2000/svg">
              <rect x="0" y="0" width="600" height="400" rx="24" fill="url(#g1)"/>
              <defs>
                <linearGradient id="g1" x1="0" y1="0" x2="1" y2="1">
                  <stop offset="0" stop-color="#ECFCCB"/>
                  <stop offset="1" stop-color="#C7F9F0"/>
                </linearGradient>
              </defs>
              <!-- simple mountain / path motif to match adventure theme -->
              <path d="M40 320 L150 160 L260 260 L360 120 L480 300 L560 240" stroke="#0f766e" stroke-width="8" stroke-linecap="round" stroke-linejoin="round" opacity="0.85"/>
              <circle cx="480" cy="80" r="28" fill="#06b6d4" opacity="0.95"/>
            </svg>
          </div>

          <div>
            <h3 class="text-lg font-semibold text-slate-900">Need immediate help?</h3>
            <p class="mt-2 text-sm text-slate-600">Jika Anda butuh akses cepat ke dokumen atau layanan IATTA, hubungi sekretariat atau gunakan fitur pencarian di atas.</p>

            <dl class="mt-4 text-sm text-slate-700 space-y-2">
              <div>
                <dt class="font-medium">Sekretariat</dt>
                <dd>info@iattaplus.id • +62 21 555 1234</dd>
              </div>
              <div>
                <dt class="font-medium">Office</dt>
                <dd>Jl. Merdeka No. 77, Jakarta</dd>
              </div>
            </dl>

            <div class="mt-6 flex gap-3">
              <a href="mailto:info@iattaplus.id" class="px-4 py-2 rounded-lg bg-white border border-slate-200 text-slate-800 hover:shadow">Email Sekretariat</a>
              <NuxtLink to="/about" class="px-4 py-2 rounded-lg border border-transparent bg-emerald-100 text-emerald-800">About IATTA</NuxtLink>
            </div>
          </div>
        </aside>
      </div>
    </section>
  <!-- </main> -->
</template>

<script setup>
import { ref } from 'vue'
import { useRouter } from 'vue-router'

definePageMeta({ layout: 'LandingPage', is404: true })

const q = ref('')
const searchMessage = ref('')
const router = useRouter()

function doSearch() {
  if (!q.value || q.value.trim().length < 2) {
    searchMessage.value = 'Masukkan minimal 2 karakter untuk mencari.'
    return
  }

  // di sini kamu bisa redirect ke halaman search internal atau kirim query ke backend
  // placeholder: kembalikan pesan dan arahkan ke home dengan query
  searchMessage.value = `Mencari “${q.value}”... (demo)`
  setTimeout(() => {
    // contoh redirect ke halaman search jika ada: /search?q=...
    router.push({ path: '/search', query: { q: q.value } }).catch(() => {})
  }, 600)
}
</script>

<style scoped>
/* polish */
main { -webkit-font-smoothing: antialiased; -moz-osx-font-smoothing: grayscale; }

/* subtle card lift */
section > div { transition: transform .28s ease, box-shadow .28s ease; }
section > div:hover { transform: translateY(-4px); }

/* responsive tweaks */
@media (max-width: 767px) {
  h1 { font-size: 4.25rem; }
  section { margin: 1.5rem 0; }
}

/* accessibility: focus ring for keyboard users */
a:focus, button:focus, input:focus { outline: 3px solid rgba(6,182,212,0.12); outline-offset: 3px; }

/* small visual: shadow and border for left card */
section .p-10 { border-right: 1px solid rgba(15,23,42,0.03); }

/* ensure links/buttons show pointer */
a, button { cursor: pointer; }
</style>