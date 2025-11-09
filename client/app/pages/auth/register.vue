<template>
  <div class="flex items-center justify-center bg-gradient-to-b from-white to-slate-50 py-12 px-4 sm:px-6 lg:px-8">
    <div class="max-w-md w-full">
      <div class="text-center mb-6">
        <img
          src="/images/logo-iatta.png"
          alt="Logo"
          class="mx-auto h-10 w-auto mb-4"
        />
        <h2 class="text-2xl font-extrabold text-slate-800">Create your account</h2>
        <p class="mt-1 text-sm text-slate-500">Set up your account in a few easy steps.</p>
      </div>

      <form @submit.prevent="onSubmit" class="bg-white p-6 rounded-2xl shadow space-y-4" novalidate>
        <div>
          <label for="name" class="block text-sm font-medium text-slate-700">Full name</label>
          <input id="name" v-model="form.name" type="text" required class="mt-1 py-1 block w-full rounded-md border-slate-200 shadow-sm focus:ring-2 focus:ring-emerald-300" />
          <p v-if="errors.name" class="mt-1 text-sm text-red-600">{{ errors.name }}</p>
        </div>

        <div>
          <label for="email" class="block text-sm font-medium text-slate-700">Email</label>
          <input id="email" v-model="form.email" type="email" required class="mt-1 py-1 block w-full rounded-md border-slate-200 shadow-sm focus:ring-2 focus:ring-emerald-300" />
          <p v-if="errors.email" class="mt-1 text-sm text-red-600">{{ errors.email }}</p>
        </div>

        <div>
          <label for="password" class="block text-sm font-medium text-slate-700">Password</label>
          <input id="password" v-model="form.password" type="password" required class="mt-1 py-1 block w-full rounded-md border-slate-200 shadow-sm focus:ring-2 focus:ring-emerald-300" />
          <p v-if="errors.password" class="mt-1 text-sm text-red-600">{{ errors.password }}</p>
        </div>

        <div>
          <label class="flex items-center text-sm">
            <input type="checkbox" v-model="form.tos" class="mr-2 h-4 w-4 rounded border-slate-300" />
            <span class="text-slate-600">I agree to the <NuxtLink to="/terms" class="text-emerald-700 hover:underline">Terms</NuxtLink> and <NuxtLink to="/privacy" class="text-emerald-700 hover:underline">Privacy Policy</NuxtLink>.</span>
          </label>
          <p v-if="errors.tos" class="mt-1 text-sm text-red-600">{{ errors.tos }}</p>
        </div>

        <div>
          <button :disabled="auth.loading" type="submit" class="w-full py-2 rounded-lg bg-emerald-600 text-white font-semibold hover:bg-emerald-700 disabled:opacity-60">
            <span v-if="!auth.loading">Create account</span>
            <span v-else>Processing...</span>
          </button>
        </div>

        <div v-if="auth.error" class="text-sm text-red-600 text-center">{{ auth.error }}</div>

        <p class="mt-4 text-sm text-center text-slate-600">
          Already have an account?
          <NuxtLink to="/auth/signin" class="font-medium text-emerald-700 hover:underline">Sign in</NuxtLink>
        </p>
      </form>
    </div>
  </div>
</template>

<script setup>
import { reactive } from 'vue'
import { useAuth } from '~/composables/useAuth'
const auth = useAuth()

const form = reactive({
  name: '',
  email: '',
  password: '',
  tos: false,
})

const errors = reactive({ name: '', email: '', password: '', tos: '' })

function validate() {
  let ok = true
  errors.name = ''
  errors.email = ''
  errors.password = ''
  errors.tos = ''

  if (!form.name || form.name.length < 2) {
    errors.name = 'Masukkan nama lengkap (minimal 2 karakter)'
    ok = false
  }
  if (!form.email || !/^\S+@\S+\.\S+$/.test(form.email)) {
    errors.email = 'Email tidak valid'
    ok = false
  }
  if (!form.password || form.password.length < 6) {
    errors.password = 'Password minimal 6 karakter'
    ok = false
  }
  if (!form.tos) {
    errors.tos = 'Anda harus menyetujui syarat dan ketentuan'
    ok = false
  }
  return ok
}

async function onSubmit() {
  if (!validate()) return
  try {
    await auth.register({ name: form.name, email: form.email, password: form.password })
  } catch (err) {
    console.error('register error', err)
  }
}
</script>