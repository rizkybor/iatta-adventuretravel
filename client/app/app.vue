<!-- client/app/app.vue -->
<template>
  <div class="min-h-screen flex flex-col bg-slate-50 text-slate-800 font-sans">
    <NuxtRouteAnnouncer />
    <AppNavbar />
    <main class="flex-grow container mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <NuxtPage />
    </main>
    <AppFooter />
  </div>
</template>

<script setup>
import AppNavbar from '~/components/AppNavbar.vue'
import AppFooter from '~/components/AppFooter.vue'
</script>

<!-- remove Tailwind @apply here — keep no style or only plain CSS that doesn't use @apply -->
<style>
/* optional minimal resets (no @apply) */
html, body { scroll-behavior: smooth; }
</style>