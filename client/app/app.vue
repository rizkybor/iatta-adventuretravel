<template>
  <div class="min-h-screen flex flex-col bg-slate-50 text-slate-800 font-sans">
    <NuxtRouteAnnouncer />
    <AppNavbar />

    <!-- HERO SECTION (render dari store) -->
    <component
      v-if="hero && hero.component"
      :is="hero.component"
      v-bind="hero.props"
      class="w-full"
    />

    <!-- MAIN CONTENT -->
    <main class="flex-grow container mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <NuxtPage />
    </main>

    <AppFooter />
  </div>
</template>

<script setup>
import AppNavbar from '~/components/AppNavbar.vue'
import AppFooter from '~/components/AppFooter.vue'
import { useHeroStore } from '~/composables/useHeroStore'

// ambil state hero dari store global
const { hero } = useHeroStore()
</script>

<style>
html, body { scroll-behavior: smooth; }
</style>