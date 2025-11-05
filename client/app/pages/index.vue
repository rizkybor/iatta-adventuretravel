<template>
  <section class="max-w-4xl mx-auto px-6 py-16 text-center">
    <h1 class="text-4xl font-bold mb-4">Welcome to IATTA</h1>
    <p class="text-slate-600 mb-6">Explore the site or go to the dashboard.</p>

    <div class="flex justify-center gap-3">
      <NuxtLink to="/home" class="px-4 py-2 rounded bg-green-600 text-white">Home</NuxtLink>
      <NuxtLink to="/about" class="px-4 py-2 rounded border">About</NuxtLink>
      <NuxtLink to="/dashboard" class="px-4 py-2 rounded border">Dashboard</NuxtLink>
    </div>
  </section>
</template>

<script setup>
definePageMeta({ layout: 'LandingPage' })
</script>