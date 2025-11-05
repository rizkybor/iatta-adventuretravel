<template>
  <section>
    <h2 class="text-2xl font-semibold mb-4">Users (Dashboard)</h2>
    <p class="text-slate-600 mb-4">Manage users here. This page uses the Dashboard layout.</p>
    <!-- example: link back to public site -->
    <NuxtLink to="/" class="text-sm text-blue-600 underline">Back to public site</NuxtLink>
  </section>
</template>

<script setup>
definePageMeta({ layout: 'Dashboard' })
</script>