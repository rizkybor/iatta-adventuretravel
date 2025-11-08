<template>
  <footer class="bg-gradient-to-t from-white to-slate-50 border-t border-slate-200">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
        <!-- BRAND -->
        <div class="space-y-3">
          <NuxtLink to="/" class="inline-flex items-center gap-3">
            <!-- logo square -->
            <div class="w-10 h-10 rounded-lg flex items-center justify-center bg-emerald-50 ring-1 ring-emerald-100">
              <svg class="w-6 h-6 text-emerald-600" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                <rect width="24" height="24" rx="5"/>
                <circle cx="12" cy="9" r="2.2" fill="white"/>
              </svg>
            </div>
            <span class="text-base font-semibold text-slate-900">IATTA Adventure Travel</span>
          </NuxtLink>

          <p class="text-sm text-slate-600">
            Explore responsible journeys across Indonesia — curated adventures, local guides, meaningful impact.
          </p>

          <div class="flex items-center gap-3 pt-2">
            <a
              href="https://github.com/"
              class="p-2 rounded-md hover:bg-slate-100 text-slate-600 focus-visible:ring-2 focus-visible:ring-emerald-200"
              aria-label="IATTA on GitHub"
              target="_blank" rel="noopener noreferrer"
            >
              <!-- GitHub -->
              <svg class="w-5 h-5" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                <path d="M12 .5C5.649.5.5 5.65.5 12a11.5 11.5 0 0 0 7.867 10.933c.575.1.783-.25.783-.554v-1.9c-3.2.7-3.867-1.542-3.867-1.542-.525-1.333-1.283-1.692-1.283-1.692-1.05-.717.083-.7.083-.7 1.167.083 1.784 1.216 1.784 1.216 1.033 1.783 2.717 1.266 3.383.967.1-.75.4-1.266.733-1.55-2.55-.3-5.233-1.283-5.233-5.716 0-1.266.45-2.3 1.2-3.1-.117-.3-.517-1.517.117-3.166 0 0 .983-.317 3.217 1.183a11.038 11.038 0 0 1 5.867 0c2.233-1.5 3.217-1.183 3.217-1.183.633 1.65.233 2.867.117 3.166.75.8 1.2 1.834 1.2 3.1 0 4.45-2.7 5.417-5.267 5.7.417.366.783 1.083.783 2.2v3.266c0 .3.2.667.783.55A11.5 11.5 0 0 0 23.5 12C23.5 5.65 18.35.5 12 .5Z" />
              </svg>
            </a>

            <a
              href="https://twitter.com/"
              class="p-2 rounded-md hover:bg-slate-100 text-slate-600 focus-visible:ring-2 focus-visible:ring-emerald-200"
              aria-label="IATTA on Twitter"
              target="_blank" rel="noopener noreferrer"
            >
              <!-- Twitter -->
              <svg class="w-5 h-5" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                <path d="M8.29 20c7.547 0 11.675-6.155 11.675-11.495 0-.175 0-.349-.012-.522A8.18 8.18 0 0 0 22 5.92a8.19 8.19 0 0 1-2.357.636 4.077 4.077 0 0 0 1.804-2.233 8.224 8.224 0 0 1-2.605.982 4.107 4.107 0 0 0-6.993 3.744A11.65 11.65 0 0 1 3.149 4.6a4.073 4.073 0 0 0 1.27 5.47 4.1 4.1 0 0 1-1.86-.509v.05a4.108 4.108 0 0 0 3.292 4.022 4.108 4.108 0 0 1-1.853.07 4.106 4.106 0 0 0 3.834 2.833A8.233 8.233 0 0 1 2 18.407a11.616 11.616 0 0 0 6.29 1.84" />
              </svg>
            </a>
          </div>
        </div>

        <!-- SITEMAP / PRODUCT -->
        <nav class="text-sm text-slate-700" aria-label="Footer product links">
          <h4 class="text-sm font-semibold text-slate-900 mb-3">Product</h4>
          <ul class="space-y-2">
            <li>
              <NuxtLink to="/features" class="hover:text-slate-900 transition-colors">Features</NuxtLink>
            </li>
            <li>
              <NuxtLink to="/pricing" class="hover:text-slate-900 transition-colors">Pricing</NuxtLink>
            </li>
            <li>
              <NuxtLink to="/integrations" class="hover:text-slate-900 transition-colors">Integrations</NuxtLink>
            </li>
            <li>
              <NuxtLink to="/docs" class="hover:text-slate-900 transition-colors">Docs</NuxtLink>
            </li>
          </ul>
        </nav>

        <!-- RESOURCES -->
        <nav class="text-sm text-slate-700" aria-label="Footer resources">
          <h4 class="text-sm font-semibold text-slate-900 mb-3">Resources</h4>
          <ul class="space-y-2">
            <li>
              <NuxtLink to="/blog" class="hover:text-slate-900 transition-colors">Blog</NuxtLink>
            </li>
            <li>
              <NuxtLink to="/case-studies" class="hover:text-slate-900 transition-colors">Case Studies</NuxtLink>
            </li>
            <li>
              <NuxtLink to="/help" class="hover:text-slate-900 transition-colors">Help Center</NuxtLink>
            </li>
            <li>
              <NuxtLink to="/careers" class="hover:text-slate-900 transition-colors">Careers</NuxtLink>
            </li>
          </ul>
        </nav>

        <!-- CONTACT / NEWSLETTER -->
        <div class="text-sm text-slate-700">
          <h4 class="text-sm font-semibold text-slate-900 mb-3">Contact & Newsletter</h4>

          <address class="not-italic text-slate-600 text-sm mb-3">
            <div>Jakarta, Indonesia</div>
            <a href="mailto:hello@iattatravel.example" class="block hover:text-slate-900">hello@iattatravel.example</a>
            <a href="tel:+62123456789" class="block hover:text-slate-900">+62 812-3456-789</a>
          </address>

          <form @submit.prevent="onSubscribe" class="flex flex-col sm:flex-row items-start sm:items-center gap-2">
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
              class="inline-flex items-center gap-2 px-4 py-2 rounded-md bg-emerald-600 text-white text-sm font-medium hover:bg-emerald-700 focus-visible:ring-2 focus-visible:ring-emerald-300"
            >
              Subscribe
            </button>
          </form>
        </div>
      </div>

      <!-- bottom bar -->
      <div class="mt-8 pt-6 border-t border-slate-100 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500">
        <div class="order-2 sm:order-1 text-center sm:text-left">
          <p>
            © <span class="font-medium text-slate-700">{{ year }}</span>
            <span class="font-semibold text-slate-800"> IATTA Adventure Travel</span>. All rights reserved.
          </p>
        </div>

        <nav class="order-1 sm:order-2 flex items-center gap-4" aria-label="Footer legal">
          <NuxtLink to="/terms" class="hover:text-slate-700">Terms</NuxtLink>
          <NuxtLink to="/privacy" class="hover:text-slate-700">Privacy</NuxtLink>
          <NuxtLink to="/security" class="hover:text-slate-700">Security</NuxtLink>
        </nav>
      </div>
    </div>
  </footer>
</template>

<script setup>
import { ref } from 'vue';

const year = new Date().getFullYear();
const email = ref('');

/* stub subscription handler - replace with real integration */
function onSubscribe() {
  if (!email.value) return;
  // For now we just clear and show a tiny confirmation via console.
  // Replace with API call (Mailchimp, ConvertKit, etc.) as needed.
  console.log('Subscribe:', email.value);
  // optional: show small toast / success state — left to you.
  email.value = '';
}
</script>

<!-- no extra CSS needed; styling uses Tailwind utilities -->