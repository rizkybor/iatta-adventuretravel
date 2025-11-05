<template>
  <main class="p-6 max-w-4xl mx-auto">
    <h1 class="text-2xl font-semibold mb-4">Dashboard</h1>
    <div v-if="loading">Loading...</div>
    <div v-else>
      <div class="mb-4">Users: {{ users.length }}</div>
      <ul>
        <li v-for="u in users" :key="u.id">{{ u.email }} — {{ u.name }}</li>
      </ul>
    </div>
  </main>
</template>

<script setup>
import { ref, onMounted } from 'vue'
const users = ref([])
const loading = ref(true)
const config = useRuntimeConfig()

async function load() {
  loading.value = true
  try {
    const r = await fetch(`${config.public.apiBase}/users`)
    const j = await r.json()
    users.value = j.data || []
  } catch (e) { console.error(e) }
  loading.value = false
}
onMounted(load)
</script>