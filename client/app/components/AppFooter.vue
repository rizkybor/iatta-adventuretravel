<template>
  <footer
    class="bg-gradient-to-t from-white to-slate-50 border-t border-slate-200"
  >
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
        <!-- BRAND -->
        <div class="space-y-3">
          <NuxtLink to="/" class="inline-flex items-center gap-3">
            <!-- logo square -->

            <img
              src="/images/logo-iatta.png"
              alt="Logo"
              class="mx-auto h-10 w-auto"
            />
          </NuxtLink>

          <p class="text-sm text-slate-600">
            Explore responsible journeys across Indonesia — curated adventures,
            local guides, meaningful impact.
          </p>

          <div class="flex items-center gap-3 pt-2">
            <!-- Instagram -->
            <a
              href="https://www.instagram.com/adventuretravel.id"
              class="p-2 rounded-md hover:bg-emerald-50 text-slate-600 focus-visible:ring-2 focus-visible:ring-emerald-200 transition-colors"
              aria-label="IATTA on Instagram"
              target="_blank"
              rel="noopener noreferrer"
            >
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

            <!-- YouTube -->
            <a
              href="https://www.youtube.com/@iattaindonesia"
              class="p-2 rounded-md hover:bg-emerald-50 text-slate-600 focus-visible:ring-2 focus-visible:ring-emerald-200 transition-colors"
              aria-label="IATTA on YouTube"
              target="_blank"
              rel="noopener noreferrer"
            >
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

        <!-- SITEMAP / PRODUCT -->
        <nav class="text-sm text-slate-700" aria-label="Footer product links">
          <h4 class="text-sm font-semibold text-slate-900 mb-3">Product</h4>
          <ul class="space-y-2">
            <li>
              <NuxtLink
                to="/features"
                class="hover:text-slate-900 transition-colors"
                >Features</NuxtLink
              >
            </li>
            <li>
              <NuxtLink
                to="/pricing"
                class="hover:text-slate-900 transition-colors"
                >Pricing</NuxtLink
              >
            </li>
            <li>
              <NuxtLink
                to="/integrations"
                class="hover:text-slate-900 transition-colors"
                >Integrations</NuxtLink
              >
            </li>
            <li>
              <NuxtLink
                to="/docs"
                class="hover:text-slate-900 transition-colors"
                >Docs</NuxtLink
              >
            </li>
          </ul>
        </nav>

        <!-- RESOURCES -->
        <nav class="text-sm text-slate-700" aria-label="Footer resources">
          <h4 class="text-sm font-semibold text-slate-900 mb-3">Resources</h4>
          <ul class="space-y-2">
            <li>
              <NuxtLink
                to="/blog"
                class="hover:text-slate-900 transition-colors"
                >Blog</NuxtLink
              >
            </li>
            <li>
              <NuxtLink
                to="/case-studies"
                class="hover:text-slate-900 transition-colors"
                >Case Studies</NuxtLink
              >
            </li>
            <li>
              <NuxtLink
                to="/help"
                class="hover:text-slate-900 transition-colors"
                >Help Center</NuxtLink
              >
            </li>
            <li>
              <NuxtLink
                to="/careers"
                class="hover:text-slate-900 transition-colors"
                >Careers</NuxtLink
              >
            </li>
          </ul>
        </nav>

        <!-- CONTACT / NEWSLETTER -->
        <div class="text-sm text-slate-700">
          <h4 class="text-sm font-semibold text-slate-900 mb-3">
            Contact & Newsletter
          </h4>

          <address class="not-italic text-slate-600 text-sm mb-3">
            <div>Jakarta, Indonesia</div>
            <a
              href="mailto:hello@iattatravel.example"
              class="block hover:text-slate-900"
              >hello@iattatravel.example</a
            >
            <a href="tel:+62123456789" class="block hover:text-slate-900"
              >+62 812-3456-789</a
            >
          </address>

          <form
            @submit.prevent="onSubscribe"
            class="flex flex-col sm:flex-row items-start sm:items-center gap-2"
          >
            <label for="footer-email" class="sr-only">Email address</label>
            <input
              id="footer-email"
              v-model="email"
              type="email"
              placeholder="Your email"
              class="w-full sm:w-auto min-w-0 px-3 py-2 rounded-md border border-slate-200 bg-white text-slate-800 placeholder-slate-400 focus:outline-none focus-visible:ring-2 focus-visible:ring-emerald-200"
              required
            />
            <button
              type="submit"
              class="inline-flex items-center gap-2 px-4 py-2 rounded-md bg-emerald-500 text-white text-sm font-medium hover:bg-emerald-700 focus-visible:ring-2 focus-visible:ring-emerald-300"
            >
              Subscribe
            </button>
          </form>
        </div>
      </div>

      <!-- bottom bar -->
      <div
        class="mt-8 pt-6 border-t border-slate-100 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500"
      >
        <div class="order-2 sm:order-1 text-center sm:text-left">
          <p>
            © <span class="font-medium text-slate-700">{{ year }}</span>
            <span class="font-semibold text-slate-800">
              Indonesia Adventure Travel Trade Association</span
            >. All rights reserved.
          </p>
        </div>

        <nav
          class="order-1 sm:order-2 flex items-center gap-4"
          aria-label="Footer legal"
        >
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

/* stub subscription handler - replace with real integration */
function onSubscribe() {
  if (!email.value) return;
  // For now we just clear and show a tiny confirmation via console.
  // Replace with API call (Mailchimp, ConvertKit, etc.) as needed.
  console.log("Subscribe:", email.value);
  // optional: show small toast / success state — left to you.
  email.value = "";
}
</script>

<!-- no extra CSS needed; styling uses Tailwind utilities -->
