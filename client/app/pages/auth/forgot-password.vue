<template>
  <div class="min-h-screen flex items-center justify-center bg-slate-50 py-12 px-4 sm:px-6 lg:px-8">
    <div class="max-w-md w-full space-y-6">
      <div class="text-center">
        <!-- <img src="/logo.svg" alt="Logo" class="mx-auto h-10 w-auto mb-4" /> -->
        <h2 class="text-2xl font-extrabold text-slate-800">Forgot your password?</h2>
        <p class="mt-1 text-sm text-slate-500">Enter your email and we’ll send a link to reset your password.</p>
      </div>

      <form @submit.prevent="onSubmit" class="bg-white p-6 rounded-2xl shadow" novalidate>
        <div>
          <label for="email" class="block text-sm font-medium text-slate-700">Email address</label>
          <input id="email" v-model="email" type="email" required class="mt-1 block w-full rounded-md border-slate-200 shadow-sm focus:ring-2 focus:ring-emerald-300" />
          <p v-if="err" class="mt-1 text-sm text-red-600">{{ err }}</p>
        </div>

        <div class="mt-6">
          <button :disabled="auth.loading" type="submit" class="w-full py-2 rounded-lg bg-emerald-600 text-white font-semibold hover:bg-emerald-700 disabled:opacity-60">
            <span v-if="!auth.loading">Send reset link</span>
            <span v-else>Sending...</span>
          </button>
        </div>

        <div v-if="success" class="mt-4 text-sm text-emerald-700 text-center">
          We sent an email with a reset link if the address exists. Check your inbox.
        </div>

        <p class="mt-4 text-sm text-center text-slate-600">
          Remembered your password?
          <NuxtLink to="/auth/signin" class="font-medium text-emerald-700 hover:underline">Sign in</NuxtLink>
        </p>
      </form>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { useAuth } from '~/composables/useAuth'
const auth = useAuth()

const email = ref('')
const err = ref('')
const success = ref(false)

function validate() {
  err.value = ''
  if (!email.value) {
    err.value = 'Email wajib diisi'
    return false
  }
  if (!/^\S+@\S+\.\S+$/.test(email.value)) {
    err.value = 'Format email tidak valid'
    return false
  }
  return true
}

async function onSubmit() {
  if (!validate()) return
  try {
    await auth.forgotPassword({ email: email.value })
    success.value = true
  } catch (e) {
    // show generic message to avoid user enumeration
    err.value = auth.error || 'Gagal mengirim email. Silakan coba lagi.'
  }
}
</script>