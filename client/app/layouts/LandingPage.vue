<template>
  <div class="min-h-screen flex flex-col bg-slate-50 text-slate-800">
    <!-- simple landing navbar -->
    <header class="bg-white border-b">
      <nav class="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex items-center justify-between">
        <NuxtLink to="/" class="text-lg font-semibold">IATTA</NuxtLink>
        <div class="space-x-4">
          <NuxtLink to="/home" class="text-sm text-slate-600 hover:text-slate-900">Home</NuxtLink>
          <NuxtLink to="/about" class="text-sm text-slate-600 hover:text-slate-900">About</NuxtLink>
          <NuxtLink to="/contact" class="text-sm text-slate-600 hover:text-slate-900">Contact</NuxtLink>
        </div>
      </nav>
    </header>

    <!-- page content -->
    <main class="flex-grow">
      <slot />
    </main>

    <footer class="border-t bg-white text-sm text-slate-600 py-6">
      <div class="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        © {{ year }} IATTA — public site
      </div>
    </footer>
  </div>
</template>

<script setup>
const year = new Date().getFullYear()
</script>