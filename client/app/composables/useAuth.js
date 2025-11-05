// ~/composables/useAuth.js
import { ref } from 'vue'
import { useRouter } from '#imports'

export function useAuth() {
  const loading = ref(false)
  const error = ref(null)
  const router = useRouter()

  async function apiRequest(path, body) {
    loading.value = true
    error.value = null
    try {
      const res = await $fetch(path, {
        method: 'POST',
        body,
        // adjust headers as needed; Nuxt's $fetch included by default
      })
      loading.value = false
      return res
    } catch (err) {
      loading.value = false
      // normalize error message
      error.value = err?.data?.message || err?.message || 'Terjadi kesalahan'
      throw err
    }
  }

  async function signin({ email, password }) {
    const payload = { email, password }
    const res = await apiRequest('/api/auth/signin', payload)
    // handle tokens/session as needed
    // e.g., store token in cookie/localStorage and set user context
    // for demo, redirect to dashboard
    if (res) {
      await router.push('/dashboard')
    }
    return res
  }

  async function register({ name, email, password }) {
    const payload = { name, email, password }
    const res = await apiRequest('/api/auth/register', payload)
    // optionally auto-signin after register
    if (res) {
      await router.push('/auth/check-email')
    }
    return res
  }

  async function forgotPassword({ email }) {
    const payload = { email }
    const res = await apiRequest('/api/auth/forgot-password', payload)
    return res
  }

  return {
    loading,
    error,
    signin,
    register,
    forgotPassword,
  }
}