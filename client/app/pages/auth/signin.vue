<template>
  <div class="flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
    <div class="max-w-md w-full">
      <div class="text-center">
        <img src="/images/logo-iatta.png" alt="Logo" class="mx-auto h-10 w-auto mb-4" />
        <h2 class="mt-2 text-2xl font-extrabold text-slate-800">Sign in to your account</h2>
        <p class="mt-1 text-sm text-slate-500">Enter your credentials to access the dashboard.</p>
      </div>

      <form class="mt-8 space-y-6 bg-white p-6 rounded-2xl shadow" @submit.prevent="onSubmit" novalidate>
        <div class="space-y-4">
          <div>
            <label for="email" class="block text-sm font-medium text-slate-700">Email address</label>
            <input
              id="email"
              v-model="form.email"
              type="email"
              autocomplete="email"
              required
              :aria-invalid="errors.email ? 'true' : 'false'"
              class="mt-1 block w-full rounded-md border-slate-200 shadow-sm focus:ring-2 focus:ring-emerald-300 focus:border-emerald-600"
            />
            <p v-if="errors.email" class="mt-1 text-sm text-red-600">{{ errors.email }}</p>
          </div>

          <div>
            <label for="password" class="block text-sm font-medium text-slate-700">Password</label>
            <div class="relative">
              <input
                id="password"
                v-model="form.password"
                :type="showPassword ? 'text' : 'password'"
                autocomplete="current-password"
                required
                :aria-invalid="errors.password ? 'true' : 'false'"
                class="mt-1 block w-full rounded-md border-slate-200 shadow-sm pr-10 focus:ring-2 focus:ring-emerald-300 focus:border-emerald-600"
              />
              <button type="button" @click="showPassword = !showPassword" class="absolute right-2 top-1/2 -translate-y-1/2 text-sm text-slate-500">
                {{ showPassword ? 'Hide' : 'Show' }}
              </button>
            </div>
            <p v-if="errors.password" class="mt-1 text-sm text-red-600">{{ errors.password }}</p>
          </div>

          <div class="flex items-center justify-between">
            <label class="flex items-center text-sm">
              <input type="checkbox" v-model="form.remember" class="mr-2 h-4 w-4 rounded border-slate-300" />
              <span class="text-slate-600">Remember me</span>
            </label>
            <NuxtLink to="/auth/forgot-password" class="text-sm text-emerald-700 hover:underline">Forgot password?</NuxtLink>
          </div>
        </div>

        <div>
          <button
            type="submit"
            :disabled="auth.loading"
            class="w-full flex justify-center py-2 px-4 rounded-lg bg-emerald-600 text-white font-semibold hover:bg-emerald-700 disabled:opacity-60"
            aria-live="polite"
          >
            <span v-if="!auth.loading">Sign in</span>
            <span v-else>Signing in...</span>
          </button>
        </div>

        <div v-if="auth.error" class="text-sm text-red-600 text-center">{{ auth.error }}</div>

        <div class="pt-4">
          <div class="relative">
            <div class="absolute inset-0 flex items-center">
              <div class="w-full border-t border-slate-200"></div>
            </div>
            <div class="relative flex justify-center text-sm">
              <span class="px-2 bg-white text-slate-500">Or continue with</span>
            </div>
          </div>

          <div class="mt-3 grid grid-cols-2 gap-3">
            <button @click.prevent="socialSign('google')" type="button" class="inline-flex items-center justify-center px-4 py-2 rounded-lg border bg-white text-sm shadow-sm">
              <!-- SVG icons omitted for brevity -->
              Google
            </button>
            <button @click.prevent="socialSign('github')" type="button" class="inline-flex items-center justify-center px-4 py-2 rounded-lg border bg-white text-sm shadow-sm">
              GitHub
            </button>
          </div>

          <p class="mt-6 text-center text-sm text-slate-600">
            Don’t have an account?
            <NuxtLink to="/auth/register" class="font-medium text-emerald-700 hover:underline">Register</NuxtLink>
          </p>
        </div>
      </form>
    </div>
  </div>
</template>

<script setup>
import { reactive, ref } from 'vue'
import { useAuth } from '~/composables/useAuth'
const auth = useAuth()

const form = reactive({
  email: '',
  password: '',
  remember: false,
})

const errors = reactive({ email: '', password: '' })
const showPassword = ref(false)

function validate() {
  let ok = true
  errors.email = ''
  errors.password = ''

  if (!form.email) {
    errors.email = 'Email wajib diisi'
    ok = false
  } else if (!/^\S+@\S+\.\S+$/.test(form.email)) {
    errors.email = 'Format email tidak valid'
    ok = false
  }

  if (!form.password) {
    errors.password = 'Password wajib diisi'
    ok = false
  } else if (form.password.length < 6) {
    errors.password = 'Password minimal 6 karakter'
    ok = false
  }
  return ok
}

async function onSubmit() {
  if (!validate()) return
  try {
    await auth.signin({ email: form.email, password: form.password })
  } catch (err) {
    // error is surfaced via auth.error
    console.error('signin failed', err)
  }
}

function socialSign(provider) {
  // placeholder: swap with real OAuth flow
  alert(`Social sign-in with ${provider} not wired. Implement OAuth redirect.`)
}
</script>