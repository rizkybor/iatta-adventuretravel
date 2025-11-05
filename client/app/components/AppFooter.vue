<template>
  <footer class="border-t bg-slate-50 text-slate-600">
    <div class="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <div class="flex flex-col sm:flex-row items-center justify-between gap-3">
        <!-- Branding -->
        <div class="text-center sm:text-left">
          <p class="text-sm">
            © {{ year }}
            <span class="font-semibold text-slate-800">IATTA Adventure Travel</span>.
            All rights reserved.
          </p>
          <p class="text-xs mt-1">
            Built with
            <span class="font-medium text-green-600">Nuxt</span> • Powered by
            <span class="font-medium text-slate-700">PostgreSQL</span> &
            <span class="font-medium text-slate-700">Docker</span>
          </p>
        </div>

        <!-- Socials (placeholder) -->
        <div class="flex items-center gap-4 mt-3 sm:mt-0">
          <a
            href="https://github.com/"
            target="_blank"
            rel="noopener"
            class="text-slate-500 hover:text-slate-800 transition"
            aria-label="GitHub"
          >
            <svg
              class="w-5 h-5"
              viewBox="0 0 24 24"
              fill="currentColor"
              aria-hidden="true"
            >
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M12 .5C5.649.5.5 5.65.5 12a11.5 11.5 0 0 0 7.867 10.933c.575.1.783-.25.783-.554v-1.9c-3.2.7-3.867-1.542-3.867-1.542-.525-1.333-1.283-1.692-1.283-1.692-1.05-.717.083-.7.083-.7 1.167.083 1.784 1.216 1.784 1.216 1.033 1.783 2.717 1.266 3.383.967.1-.75.4-1.266.733-1.55-2.55-.3-5.233-1.283-5.233-5.716 0-1.266.45-2.3 1.2-3.1-.117-.3-.517-1.517.117-3.166 0 0 .983-.317 3.217 1.183a11.038 11.038 0 0 1 5.867 0c2.233-1.5 3.217-1.183 3.217-1.183.633 1.65.233 2.867.117 3.166.75.8 1.2 1.834 1.2 3.1 0 4.45-2.7 5.417-5.267 5.7.417.366.783 1.083.783 2.2v3.266c0 .3.2.667.783.55A11.5 11.5 0 0 0 23.5 12C23.5 5.65 18.35.5 12 .5Z"
              />
            </svg>
          </a>

          <a
            href="https://twitter.com/"
            target="_blank"
            rel="noopener"
            class="text-slate-500 hover:text-blue-500 transition"
            aria-label="Twitter"
          >
            <svg
              class="w-5 h-5"
              viewBox="0 0 24 24"
              fill="currentColor"
              aria-hidden="true"
            >
              <path
                d="M8.29 20c7.547 0 11.675-6.155 11.675-11.495 0-.175 0-.349-.012-.522A8.18 8.18 0 0 0 22 5.92a8.19 8.19 0 0 1-2.357.636 4.077 4.077 0 0 0 1.804-2.233 8.224 8.224 0 0 1-2.605.982 4.107 4.107 0 0 0-6.993 3.744A11.65 11.65 0 0 1 3.149 4.6a4.073 4.073 0 0 0 1.27 5.47 4.1 4.1 0 0 1-1.86-.509v.05a4.108 4.108 0 0 0 3.292 4.022 4.108 4.108 0 0 1-1.853.07 4.106 4.106 0 0 0 3.834 2.833A8.233 8.233 0 0 1 2 18.407a11.616 11.616 0 0 0 6.29 1.84"
              />
            </svg>
          </a>
        </div>
      </div>
    </div>
  </footer>
</template>

<script setup>
const year = new Date().getFullYear()
</script>