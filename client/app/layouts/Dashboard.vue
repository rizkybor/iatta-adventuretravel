<template>
  <div class="min-h-screen flex flex-col bg-white text-slate-800">
    <!-- admin navbar -->
    <header class="bg-slate-900 text-white">
      <div
        class="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-3 flex items-center justify-between"
      >
        <NuxtLink to="/dashboard" class="text-lg font-semibold"
          >IATTA Dashboard</NuxtLink
        >
        <div class="flex items-center gap-3">
          <NuxtLink to="/dashboard" class="text-sm hover:underline"
            >Overview</NuxtLink
          >
          <NuxtLink to="/dashboard/users" class="text-sm hover:underline"
            >Users</NuxtLink
          >
          <NuxtLink to="/" class="text-sm opacity-80 hover:opacity-100"
            >Back to Site</NuxtLink
          >
        </div>
      </div>
    </header>

    <div class="flex flex-1">
      <!-- optional side nav -->
      <aside class="hidden md:block w-64 border-r bg-slate-50 p-4">
        <ul class="space-y-2 text-sm">
          <li>
            <NuxtLink
              to="/dashboard"
              class="block p-2 rounded hover:bg-slate-100"
              >Overview</NuxtLink
            >
          </li>
          <li>
            <NuxtLink
              to="/dashboard/users"
              class="block p-2 rounded hover:bg-slate-100"
              >Users</NuxtLink
            >
          </li>
          <li>
            <NuxtLink
              to="/dashboard/settings"
              class="block p-2 rounded hover:bg-slate-100"
              >Settings</NuxtLink
            >
          </li>
        </ul>
      </aside>

      <main class="flex-1 p-6">
        <slot />
      </main>
    </div>

    <footer class="border-t bg-slate-50 text-sm text-slate-600 py-4">
      <div class="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        Dashboard • © {{ year }}
      </div>
    </footer>
  </div>
</template>

<script setup>
const year = new Date().getFullYear();
</script>
