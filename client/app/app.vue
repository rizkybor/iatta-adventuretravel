<template>
  <div
    class="min-h-screen flex flex-col font-sans text-slate-800
           bg-gradient-to-br from-white via-white to-emerald-50"
  >
    <NuxtRouteAnnouncer />
    <AppNavbar style="margin-top: -1vh;" />

    <!-- HERO SECTION (hanya di / dan /home) -->
<component
  v-if="showHero && hero && hero.component"
  :is="hero.component"
  v-bind="hero.props"
  class="w-full"
  style="margin-top: -7vh;"
  @cta-click="onHeroCtaClick"
/>

    <!-- MAIN CONTENT -->
    <main class="flex-grow container mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <NuxtPage />
    </main>

    <AppFooter />
  </div>
</template>

<script setup>
import { computed } from 'vue'
import { useRoute } from 'vue-router'
import AppNavbar from '~/components/AppNavbar.vue'
import AppFooter from '~/components/AppFooter.vue'
import { useHeroStore } from '~/composables/useHeroStore'

import { useRouter } from 'vue-router'
const router = useRouter()

function onHeroCtaClick(cta) {
  // cta = object yang dikirim dari child; contoh: { label, to, href, variant }
  if (!cta) return

  // contoh tindakan: navigasi jika ada `to`
  if (cta.to) {
    router.push(cta.to)
    return
  }

  // contoh: buka dialog/register kalau cta.as === 'modal'
  if (cta.action === 'open-register') {
    openRegister.value = true // misal ada reactive state
    return
  }

  // fallback: log (debug)
  console.log('Hero CTA clicked:', cta)
}

const { hero } = useHeroStore()
const route = useRoute()

// tampilkan hero hanya di route "/" atau "/home"
const showHero = computed(() => {
  return route.path === '/' || route.path === '/home'
})
</script>

<style>
html,
body {
  scroll-behavior: smooth;
}

/* pointer untuk semua button */
button,
[role="button"],
a.button,
input[type="submit"],
input[type="button"] {
  cursor: pointer;
}

button:hover,
[role="button"]:hover,
a.button:hover,
input[type="submit"]:hover,
input[type="button"]:hover {
  filter: brightness(1.05);
  transition: all 0.18s ease-in-out;
}

button:disabled,
[role="button"][aria-disabled="true"],
input[type="submit"]:disabled {
  cursor: not-allowed;
  opacity: 0.6;
}
</style>