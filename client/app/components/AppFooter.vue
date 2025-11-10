<!-- components/Footer.vue -->
<template>
  <footer
    class="bg-gradient-to-t from-white to-slate-50 border-t border-slate-200"
  >
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
        <!-- BRAND -->
        <div class="space-y-3">
          <NuxtLink to="/" class="inline-flex items-center gap-3">
            <img
              src="/images/logo-iatta.png"
              alt="IATTA logo"
              class="h-10 w-auto"
              loading="lazy"
              decoding="async"
            />
          </NuxtLink>

          <p class="text-sm text-slate-600">
            Membangun kapasitas, standar, dan promosi pariwisata petualangan
            Indonesia yang berkelanjutan.
          </p>

          <div class="flex items-center gap-3 pt-2">
            <a
              href="https://www.instagram.com/adventuretravel.id"
              class="p-2 rounded-md hover:bg-emerald-50 text-slate-600 focus-visible:ring-2 focus-visible:ring-emerald-200 transition-colors"
              aria-label="IATTA on Instagram"
              target="_blank"
              rel="noopener noreferrer"
            >
              <!-- Instagram icon -->
              <svg
                class="w-5 h-5"
                viewBox="0 0 24 24"
                fill="currentColor"
                aria-hidden="true"
              >
                <path
                  d="M7.75 2h8.5A5.75 5.75 0 0 1 22 7.75v8.5A5.75 5.75 0 0 1 16.25 22h-8.5A5.75 5.75 0 0 1 2 16.25v-8.5A5.75 5.75 0 0 1 7.75 2Zm0 1.5A4.25 4.25 0 0 0 3.5 7.75v8.5A4.25 4.25 0 0 0 7.75 20.5h8.5a4.25 4.25 0 0 0 4.25-4.25v-8.5A4.25 4.25 0 0 0 16.25 3.5h-8.5ZM12 7.25A4.75 4.75 0 1 1 7.25 12 4.75 4.75 0 0 1 12 7.25Zm0 1.5A3.25 3.25 0 1 0 15.25 12 3.25 3.25 0 0 0 12 8.75Zm5.5-.75a1 1 0 1 1-1-1 1 1 0 0 1 1 1Z"
                />
              </svg>
            </a>

            <a
              href="https://www.youtube.com/@iattaindonesia"
              class="p-2 rounded-md hover:bg-emerald-50 text-slate-600 focus-visible:ring-2 focus-visible:ring-emerald-200 transition-colors"
              aria-label="IATTA on YouTube"
              target="_blank"
              rel="noopener noreferrer"
            >
              <!-- YouTube icon -->
              <svg
                class="w-5 h-5"
                viewBox="0 0 24 24"
                fill="currentColor"
                aria-hidden="true"
              >
                <path
                  d="M10 15.5v-7l6 3.5-6 3.5ZM21.8 8.001a3 3 0 0 0-2.12-2.12C17.99 5.5 12 5.5 12 5.5s-5.99 0-7.68.38A3 3 0 0 0 2.2 8.001 31.7 31.7 0 0 0 1.8 12a31.7 31.7 0 0 0 .38 3.999 3 3 0 0 0 2.12 2.12c1.69.38 7.68.38 7.68.38s5.99 0 7.68-.38a3 3 0 0 0 2.12-2.12A31.7 31.7 0 0 0 22.2 12a31.7 31.7 0 0 0-.38-3.999Z"
                />
              </svg>
            </a>
          </div>
        </div>

        <!-- PRODUCTS -->
        <nav class="text-sm text-slate-700" aria-label="Footer product links">
          <h4 class="text-sm font-semibold text-slate-900 mb-3">
            Produk & Layanan
          </h4>
          <ul class="space-y-2">
            <li>
              <NuxtLink
                to="/programs"
                class="hover:text-slate-900 transition-colors"
                >Program & Sertifikasi</NuxtLink
              >
            </li>
            <li>
              <NuxtLink
                to="/membership"
                class="hover:text-slate-900 transition-colors"
                >Keanggotaan</NuxtLink
              >
            </li>
            <li>
              <NuxtLink
                to="/find-a-guide"
                class="hover:text-slate-900 transition-colors"
                >Cari Pemandu</NuxtLink
              >
            </li>
            <li>
              <NuxtLink to="/app" class="hover:text-slate-900 transition-colors"
                >Portal / Aplikasi</NuxtLink
              >
            </li>
          </ul>
        </nav>

        <!-- RESOURCES -->
        <nav class="text-sm text-slate-700" aria-label="Footer resources">
          <h4 class="text-sm font-semibold text-slate-900 mb-3">Sumber</h4>
          <ul class="space-y-2">
            <li>
              <NuxtLink
                to="/news"
                class="hover:text-slate-900 transition-colors"
                >Berita</NuxtLink
              >
            </li>
            <li>
              <NuxtLink
                to="/events"
                class="hover:text-slate-900 transition-colors"
                >Event & Munas</NuxtLink
              >
            </li>
            <li>
              <NuxtLink
                to="/resources/publications"
                class="hover:text-slate-900 transition-colors"
                >Publikasi & Riset</NuxtLink
              >
            </li>
            <li>
              <NuxtLink
                to="/partners"
                class="hover:text-slate-900 transition-colors"
                >Mitra & Sponsor</NuxtLink
              >
            </li>
          </ul>
        </nav>

        <!-- CONTACT + NEWSLETTER -->
        <div class="text-sm text-slate-700">
          <h4 class="text-sm font-semibold text-slate-900 mb-3">
            Address & Newsletter
          </h4>

          <address class="not-italic text-slate-600 text-sm mb-3">
            <div class="mb-1">
              Wisma Kemang 31, Jl. Kemang Raya No. 31 lt
              3, Bangka, Mampang Prapatan, Jakarta Selatan
            </div>
            <a
              href="mailto:info@iatta.or.id"
              class="block hover:text-slate-900 transition-colors"
              ><strong>Email: </strong>info@iatta.or.id</a
            >
          </address>

          <!-- newsletter form (responsive) -->
          <form
            @submit.prevent="onSubscribe"
            class="w-full"
            aria-label="Subscribe to IATTA newsletter"
            novalidate
          >
            <div
              class="flex flex-col sm:flex-row items-start sm:items-center gap-3"
            >
              <label for="footer-email" class="sr-only">Alamat email</label>

              <div class="relative flex-1 w-full">
                <span
                  class="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-slate-400"
                >
                  <svg
                    class="w-4 h-4 text-slate-400"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    stroke="currentColor"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="1.7"
                      d="M4 5h16a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V7a2 2 0 0 1 2-2Z"
                    />
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="1.7"
                      d="M22 7 12 13 2 7"
                    />
                  </svg>
                </span>

                <input
                  id="footer-email"
                  v-model="email"
                  type="email"
                  inputmode="email"
                  autocomplete="email"
                  placeholder="Alamat email"
                  class="w-full pl-10 pr-4 py-2.5 rounded-md border border-slate-200 bg-white text-slate-800 placeholder-slate-400 focus:outline-none focus-visible:ring-2 focus-visible:ring-emerald-200 transition"
                  required
                  aria-required="true"
                />
              </div>

              <button
                type="submit"
                :disabled="submitting"
                class="inline-flex items-center gap-2 shrink-0 px-4 py-2.5 rounded-md bg-emerald-500 text-white text-sm font-medium hover:bg-emerald-700 focus-visible:ring-2 focus-visible:ring-emerald-300 disabled:opacity-60 disabled:cursor-not-allowed transition"
              >
                <svg
                  v-if="!submitting"
                  class="w-4 h-4"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M5 12h14M12 5l7 7-7 7"
                  />
                </svg>
                <svg
                  v-else
                  class="animate-spin w-4 h-4"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M12 4v4M12 16v4M4 12h4M16 12h4"
                  />
                </svg>
                <span v-if="!submitting">Subscribe</span>
                <span v-else>Sending…</span>
              </button>
            </div>
          </form>

          <p class="mt-3 text-xs" aria-live="polite">
            <span
              v-if="message"
              :class="
                messageType === 'ok' ? 'text-emerald-500' : 'text-rose-600'
              "
            >
              {{ message }}
            </span>
          </p>
        </div>
      </div>

      <!-- bottom bar -->
      <div
        class="mt-8 pt-6 border-t border-slate-100 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500"
      >
        <div class="text-center sm:text-left">
          <p>
            © <span class="font-medium text-slate-700">{{ year }}</span>
            <span class="font-semibold text-slate-800"
              >Indonesia Adventure Travel Trade Association</span
            >. All rights reserved.
          </p>
        </div>

        <nav class="flex items-center gap-4" aria-label="Footer legal">
          <NuxtLink to="/terms" class="hover:text-slate-700">Terms</NuxtLink>
          <NuxtLink to="/privacy" class="hover:text-slate-700"
            >Privacy</NuxtLink
          >
          <NuxtLink to="/security" class="hover:text-slate-700"
            >Security</NuxtLink
          >
        </nav>
      </div>
    </div>
  </footer>
</template>

<script setup>
import { ref } from "vue";

const year = new Date().getFullYear();
const email = ref("");
const submitting = ref(false);
const message = ref("");
const messageType = ref(""); // 'ok' | 'err'

async function onSubscribe() {
  // basic client-side validation
  const v = (email.value || "").trim();
  const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!v || !re.test(v)) {
    message.value = "Masukkan alamat email yang valid.";
    messageType.value = "err";
    return;
  }

  submitting.value = true;
  message.value = "";
  messageType.value = "";

  try {
    // TODO: ganti endpoint berikut dengan API langganan nyata
    // const res = await fetch('/api/subscribe', { method: 'POST', headers: {'Content-Type':'application/json'}, body: JSON.stringify({ email: v }) })
    // if (!res.ok) throw new Error('subscribe failed')

    // Simulasi delay
    await new Promise((r) => setTimeout(r, 700));

    message.value = "Terima kasih — email Anda sudah terdaftar.";
    messageType.value = "ok";
    email.value = "";
  } catch (err) {
    message.value = "Langganan gagal. Coba lagi nanti.";
    messageType.value = "err";
  } finally {
    submitting.value = false;
  }
}
</script>

<!-- styling controlled via Tailwind utilities; add local tweaks here if needed -->
<style scoped>
/* small visual polish for focus states on keyboard */
:focus {
  outline: none;
}
</style>
