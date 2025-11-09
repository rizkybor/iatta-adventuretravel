<template>
  <div class="flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
    <div class="max-w-md w-full">
      <div class="text-center">
        <img
          src="/images/logo-iatta.png"
          alt="Logo"
          class="mx-auto h-10 w-auto mb-4"
        />
        <h2 class="mt-2 text-2xl font-extrabold text-slate-800">
          Sign in to your account
        </h2>
        <p class="mt-1 text-sm text-slate-500">
          Enter your credentials to access the dashboard.
        </p>
      </div>

      <form
        class="mt-8 space-y-6 bg-white p-6 rounded-2xl shadow"
        @submit.prevent="onSubmit"
        novalidate
      >
        <div class="space-y-4">
          <div>
            <label for="email" class="block text-sm font-medium text-slate-700"
              >Email address</label
            >
            <input
              id="email"
              v-model="form.email"
              type="email"
              autocomplete="email"
              required
              :aria-invalid="errors.email ? 'true' : 'false'"
              class="mt-1 py-1 block w-full rounded-md border-slate-200 shadow-sm focus:ring-2 focus:ring-emerald-300 focus:border-emerald-600"
            />
            <p v-if="errors.email" class="mt-1 text-sm text-red-600">
              {{ errors.email }}
            </p>
          </div>

          <div>
            <label
              for="password"
              class="block text-sm font-medium text-slate-700"
              >Password</label
            >
            <div class="relative">
              <input
                id="password"
                v-model="form.password"
                :type="showPassword ? 'text' : 'password'"
                autocomplete="current-password"
                required
                :aria-invalid="errors.password ? 'true' : 'false'"
                class="mt-1 py-1 block w-full rounded-md border-slate-200 shadow-sm pr-10 focus:ring-2 focus:ring-emerald-300 focus:border-emerald-600"
              />
              <button
                type="button"
                @click="showPassword = !showPassword"
                class="absolute right-2 top-1/2 -translate-y-1/2 text-sm text-slate-500"
              >
                {{ showPassword ? "Hide" : "Show" }}
              </button>
            </div>
            <p v-if="errors.password" class="mt-1 text-sm text-red-600">
              {{ errors.password }}
            </p>
          </div>

          <div class="flex items-center justify-between">
            <label class="flex items-center text-sm">
              <input
                type="checkbox"
                v-model="form.remember"
                class="mr-2 h-4 w-4 rounded border-slate-300"
              />
              <span class="text-slate-600">Remember me</span>
            </label>
            <NuxtLink
              to="/auth/forgot-password"
              class="text-sm text-emerald-700 hover:underline"
              >Forgot password?</NuxtLink
            >
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

        <div v-if="auth.error" class="text-sm text-red-600 text-center">
          {{ auth.error }}
        </div>

        <div class="pt-4">
          <div class="relative">
            <div class="absolute inset-0 flex items-center">
              <div class="w-full border-t border-slate-200"></div>
            </div>
            <div class="relative flex justify-center text-sm">
              <span class="px-2 bg-white text-slate-500">Or continue with</span>
            </div>
          </div>

          <div class="mt-3 grid grid-cols-1 gap-3">
            <button
              @click.prevent="socialSign('google')"
              type="button"
              class="flex items-center justify-center gap-2 w-full sm:w-auto px-5 py-2.5 rounded-lg border border-slate-200 bg-white text-slate-700 text-sm font-medium shadow-sm hover:shadow-md hover:border-slate-300 transition-all duration-200 ease-in-out active:scale-[0.98] focus-visible:ring-2 focus-visible:ring-offset-1 focus-visible:ring-[#4285F4]"
            >
              <!-- Google Icon -->
              <svg
                class="w-5 h-5"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill="#EA4335"
                  d="M12 10.2v3.6h5.08a4.7 4.7 0 0 1-2.03 3.09v2.58h3.25c1.9-1.75 2.98-4.33 2.98-7.22 0-.61-.05-1.2-.15-1.77H12z"
                />
                <path
                  fill="#34A853"
                  d="M6.55 14.6l-.82.63-2.02 1.55A8.96 8.96 0 0 0 12 21c2.43 0 4.47-.8 5.98-2.2l-3.25-2.58a5.37 5.37 0 0 1-8.18-1.62z"
                />
                <path
                  fill="#4A90E2"
                  d="M3.71 8.78A8.88 8.88 0 0 0 3 12c0 1.17.21 2.29.58 3.32l3.56-2.76a5.37 5.37 0 0 1 0-4.91L3.71 8.78z"
                />
                <path
                  fill="#FBBC05"
                  d="M12 4.58c1.31 0 2.48.45 3.4 1.33l2.55-2.55A8.97 8.97 0 0 0 3.71 8.78L7.27 6.02A5.34 5.34 0 0 1 12 4.58z"
                />
              </svg>

              <span class="text-sm font-semibold text-slate-700 tracking-wide">
                Lanjut dengan Google
              </span>
            </button>
            <!-- <button @click.prevent="socialSign('github')" type="button" class="inline-flex items-center justify-center px-4 py-2 rounded-lg border bg-white text-sm shadow-sm">
              GitHub
            </button> -->
          </div>

          <p class="mt-6 text-center text-sm text-slate-600">
            Don’t have an account?
            <NuxtLink
              to="/auth/register"
              class="font-medium text-emerald-700 hover:underline"
              >Register</NuxtLink
            >
          </p>
        </div>
      </form>
    </div>
  </div>
</template>

<script setup>
import { reactive, ref } from "vue";
import { useAuth } from "~/composables/useAuth";
const auth = useAuth();

const form = reactive({
  email: "",
  password: "",
  remember: false,
});

const errors = reactive({ email: "", password: "" });
const showPassword = ref(false);

function validate() {
  let ok = true;
  errors.email = "";
  errors.password = "";

  if (!form.email) {
    errors.email = "Email wajib diisi";
    ok = false;
  } else if (!/^\S+@\S+\.\S+$/.test(form.email)) {
    errors.email = "Format email tidak valid";
    ok = false;
  }

  if (!form.password) {
    errors.password = "Password wajib diisi";
    ok = false;
  } else if (form.password.length < 6) {
    errors.password = "Password minimal 6 karakter";
    ok = false;
  }
  return ok;
}

async function onSubmit() {
  if (!validate()) return;
  try {
    await auth.signin({ email: form.email, password: form.password });
  } catch (err) {
    // error is surfaced via auth.error
    console.error("signin failed", err);
  }
}

function socialSign(provider) {
  // placeholder: swap with real OAuth flow
  alert(`Social sign-in with ${provider} not wired. Implement OAuth redirect.`);
}
</script>
