<template>
  <section
    class="relative w-full max-w-5xl mx-auto rounded-2xl overflow-hidden shadow-2xl m-4 md:m-10"
    role="main"
    aria-labelledby="page-title"
  >
    <!-- decorative background -->
    <div
      class="absolute inset-0 -z-10 bg-gradient-to-br from-emerald-50/60 to-transparent"
    ></div>
    <div
      class="absolute -left-24 -top-24 w-64 h-64 rounded-full blur-3xl bg-emerald-200/40 mix-blend-screen pointer-events-none"
    ></div>
    <div
      class="absolute -right-24 -bottom-24 w-64 h-64 rounded-full blur-3xl bg-sky-200/30 mix-blend-screen pointer-events-none"
    ></div>

    <div class="grid grid-cols-1 md:grid-cols-2">
      <!-- Left: main message -->
      <div
        class="p-6 md:p-10 flex flex-col items-start justify-center bg-white"
      >
        <h1
          id="page-title"
          class="text-5xl sm:text-6xl md:text-7xl font-extrabold tracking-tight text-slate-900 leading-tight"
        >
          Sedang Dibangun
        </h1>

        <p
          class="mt-2 text-xs sm:text-sm font-medium text-slate-500 uppercase tracking-wide"
        >
          Under construction
        </p>

        <h2
          class="mt-5 text-xl sm:text-2xl md:text-3xl font-semibold text-slate-900"
        >
          Halaman ini sedang dalam pengembangan
        </h2>

        <p class="mt-3 text-sm sm:text-base text-slate-600 max-w-prose">
          Tim kami sedang bekerja untuk menghadirkan konten dan fitur terbaik di
          halaman ini. Mohon bersabar — halaman akan tersedia segera.
        </p>

        <div
          class="mt-6 flex flex-col sm:flex-row sm:items-center gap-3 w-full"
        >
          <NuxtLink
            to="/"
            class="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-4 py-2 rounded-lg bg-emerald-500 text-white font-semibold shadow hover:bg-emerald-600 transition"
          >
            Beranda
          </NuxtLink>

          <NuxtLink
            to="/contact"
            class="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-4 py-1 rounded-lg border border-slate-200 bg-white text-slate-800 hover:shadow transition"
          >
            Hubungi Kami
          </NuxtLink>

          <NuxtLink
            to="/sitemap"
            class="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-4 py-1 rounded-lg text-sm text-slate-600 hover:underline transition"
          >
            Lihat sitemap
          </NuxtLink>
        </div>

        <!-- quick contact form (stacks on mobile) -->
        <form
          @submit.prevent="quickContact"
          class="mt-6 w-full"
          aria-label="Quick contact form"
        >
          <div class="flex flex-col sm:flex-row gap-3">
            <label for="qc-email" class="sr-only">Email</label>
            <input
              id="qc-email"
              v-model="qcEmail"
              type="email"
              placeholder="Email Anda (opsional)"
              class="flex-1 min-w-0 rounded-lg border border-slate-200 px-3 py-2 text-sm focus:outline-none focus-visible:ring-2 focus-visible:ring-emerald-200"
              aria-label="Email"
            />

            <label for="qc-note" class="sr-only">Pesan singkat</label>
            <input
              id="qc-note"
              v-model="qcNote"
              type="text"
              placeholder="Pesan singkat (opsional)"
              class="flex-1 min-w-0 rounded-lg border border-slate-200 px-3 py-2 text-sm focus:outline-none focus-visible:ring-2 focus-visible:ring-emerald-200"
              aria-label="Pesan singkat"
            />

            <button
              type="submit"
              class="inline-flex items-center justify-center px-4 py-2 rounded-lg bg-gradient-to-r from-emerald-400 to-teal-600 text-white text-sm font-medium shadow-sm hover:from-emerald-400 hover:to-teal-700 hover:shadow-md focus:ring-2 focus:ring-sky-400 focus:outline-none transition-all duration-200 ease-in-out w-full sm:w-auto"
              aria-label="Kirim pesan singkat"
            >
              Kirim
            </button>
          </div>

          <p
            v-if="qcMessage"
            class="mt-2 text-xs"
            :class="qcStatus === 'ok' ? 'text-emerald-600' : 'text-rose-600'"
            aria-live="polite"
          >
            {{ qcMessage }}
          </p>
        </form>
      </div>

      <!-- Right: illustration + notes -->
      <aside class="p-6 md:p-8 bg-emerald-50 flex flex-col justify-center">
        <div class="mb-6">
          <svg
            aria-hidden="true"
            class="w-full h-40 sm:h-48 md:h-56"
            viewBox="0 0 600 400"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            role="img"
            aria-label="Illustration"
          >
            <rect
              x="0"
              y="0"
              width="600"
              height="400"
              rx="24"
              fill="url(#g1)"
            />
            <defs>
              <linearGradient id="g1" x1="0" y1="0" x2="1" y2="1">
                <stop offset="0" stop-color="#ECFCCB" />
                <stop offset="1" stop-color="#C7F9F0" />
              </linearGradient>
            </defs>
            <path
              d="M40 320 L150 160 L260 260 L360 120 L480 300 L560 240"
              stroke="#0f766e"
              stroke-width="8"
              stroke-linecap="round"
              stroke-linejoin="round"
              opacity="0.85"
            />
            <circle cx="480" cy="80" r="28" fill="#06b6d4" opacity="0.95" />
          </svg>
        </div>

        <div>
          <h3 class="text-lg sm:text-xl font-semibold text-slate-900">
            Kenapa halaman ini belum tersedia?
          </h3>
          <p class="mt-2 text-sm text-slate-600">
            Konten dan fitur sedang dikembangkan agar sesuai standar IATTA:
            informatif, aman, dan mudah digunakan.
          </p>

          <dl class="mt-4 text-sm text-slate-700 space-y-3">
            <div>
              <dt class="font-medium">Status</dt>
              <dd>Dalam pengembangan — cek kembali nanti.</dd>
            </div>

            <div>
              <dt class="font-medium">Akses cepat</dt>
              <dd>
                Gunakan tombol <strong>Kembali ke Beranda</strong> atau hubungi
                sekretariat lewat email.
              </dd>
            </div>
          </dl>

          <div class="mt-6 flex flex-col sm:flex-row gap-3">
            <a
              href="mailto:info@iatta.or.id"
              class="w-full sm:w-auto px-4 py-2 rounded-lg bg-white border border-slate-200 text-slate-800 hover:shadow transition"
              >Email Sekretariat</a
            >
            <NuxtLink
              to="/about"
              class="w-full sm:w-auto px-4 py-2 rounded-lg bg-emerald-100 text-emerald-800 text-center"
              >Tentang IATTA</NuxtLink
            >
          </div>
        </div>
      </aside>
    </div>
  </section>
</template>

<script setup>
import { ref } from "vue";

const qcEmail = ref("");
const qcNote = ref("");
const qcMessage = ref("");
const qcStatus = ref(""); // 'ok' | 'err'

function quickContact() {
  // client-side lightweight handler (no backend). Replace with API later.
  if (!qcEmail.value && !qcNote.value) {
    qcMessage.value = "Masukkan email atau pesan singkat sebelum mengirim.";
    qcStatus.value = "err";
    return;
  }

  if (qcEmail.value) {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!re.test(qcEmail.value.trim())) {
      qcMessage.value = "Format email tidak valid.";
      qcStatus.value = "err";
      return;
    }
  }

  qcMessage.value = "Terima kasih — pesan Anda telah dicatat.";
  qcStatus.value = "ok";

  setTimeout(() => {
    qcEmail.value = "";
    qcNote.value = "";
  }, 800);
}
</script>

<style scoped>
/* subtle lift on hover for the whole card */
section > div {
  transition: transform 0.28s ease, box-shadow 0.28s ease;
}
section > div:hover {
  transform: translateY(-3px);
}

/* mobile tweaks */
@media (max-width: 640px) {
  h1 {
    font-size: 3.25rem;
    line-height: 1;
  }
  .max-w-5xl {
    margin: 0.5rem;
  }
}

/* focus for keyboard users */
a:focus,
button:focus,
input:focus {
  outline: 3px solid rgba(6, 182, 212, 0.12);
  outline-offset: 3px;
  border-radius: 6px;
}

/* reduce-motion respect */
@media (prefers-reduced-motion: reduce) {
  section > div {
    transition: none;
    transform: none !important;
  }
}
</style>
