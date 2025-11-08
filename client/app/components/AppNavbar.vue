<template>
  <header
    :class="[
      'sticky top-0 z-40 transition-all duration-300 ease-[cubic-bezier(.2,.9,.2,1)]',
      headerBackgroundClass,
      headerSizeClass
    ]"
  >
    <nav
      class="max-w-7xl mx-auto flex items-center justify-between px-4 sm:px-6 lg:px-8 py-2"
      aria-label="Primary"
    >
      <!-- left: brand + links -->
      <div class="flex items-center gap-6">
        <NuxtLink to="/" class="flex items-center gap-3">
          <svg
            class="w-8 h-8 shrink-0"
            viewBox="0 0 24 24"
            fill="none"
            aria-hidden="true"
          >
            <defs>
              <linearGradient id="g1" x1="0" x2="1" y1="0" y2="1">
                <stop offset="0" stop-color="#059669" />
                <stop offset="1" stop-color="#06b6d4" />
              </linearGradient>
            </defs>
            <rect width="24" height="24" rx="6" fill="url(#g1)"></rect>
            <circle cx="12" cy="10" r="2.2" fill="rgba(255,255,255,0.95)" />
          </svg>
          <span :class="brandClass">IATTA</span>
        </NuxtLink>

        <!-- desktop links -->
        <div class="hidden md:flex items-center gap-3">
          <NuxtLink
            to="/home"
            class="px-3 py-1 rounded-md text-sm transition-transform"
            :class="desktopLinkClass('/home')"
            :aria-current="isActive('/home') ? 'page' : undefined"
          >
            Home
          </NuxtLink>

          <NuxtLink
            to="/about"
            class="px-3 py-1 rounded-md text-sm transition-transform"
            :class="desktopLinkClass('/about')"
            :aria-current="isActive('/about') ? 'page' : undefined"
          >
            About
          </NuxtLink>

          <NuxtLink
            to="/members"
            class="px-3 py-1 rounded-md text-sm transition-transform"
            :class="desktopLinkClass('/members')"
            :aria-current="isActive('/members') ? 'page' : undefined"
          >
            Members
          </NuxtLink>

          <NuxtLink
            to="/contact"
            class="px-3 py-1 rounded-md text-sm transition-transform"
            :class="desktopLinkClass('/contact')"
            :aria-current="isActive('/contact') ? 'page' : undefined"
          >
            Contact
          </NuxtLink>
        </div>
      </div>

      <!-- right: actions + mobile toggle -->
      <div class="flex items-center gap-3">
        <NuxtLink
          to="/auth/signin"
          class="hidden sm:inline-flex items-center gap-2 px-3 py-1.5 text-sm rounded-md font-medium transition-transform active:scale-95"
          :class="ctaClass"
        >
          Sign In
        </NuxtLink>

        <!-- mobile menu button -->
        <button
          type="button"
          class="md:hidden inline-flex items-center justify-center p-2 rounded-md text-current hover:bg-white/6 focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-green-500"
          @click="open = !open"
          :aria-expanded="open"
          aria-controls="mobile-menu"
        >
          <span class="sr-only">Open main menu</span>
          <svg
            v-if="!open"
            class="w-6 h-6"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="1.5"
            stroke-linecap="round"
            stroke-linejoin="round"
            aria-hidden="true"
          >
            <path d="M4 6h16M4 12h16M4 18h16" />
          </svg>
          <svg
            v-else
            class="w-6 h-6"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="1.5"
            stroke-linecap="round"
            stroke-linejoin="round"
            aria-hidden="true"
          >
            <path d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>
      </div>
    </nav>

    <!-- mobile panel -->
    <transition name="menu-fade">
      <div
        v-show="open"
        id="mobile-menu"
        class="md:hidden border-t bg-white/90 backdrop-blur-sm"
      >
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3 flex flex-col gap-1">
          <NuxtLink
            to="/home"
            class="block px-3 py-2 rounded-md text-sm"
            :class="mobileLinkClass('/home')"
            @click="open = false"
            >Home</NuxtLink
          >
          <NuxtLink
            to="/about"
            class="block px-3 py-2 rounded-md text-sm"
            :class="mobileLinkClass('/about')"
            @click="open = false"
            >About</NuxtLink
          >

           <NuxtLink
            to="/members"
            class="block px-3 py-2 rounded-md text-sm"
            :class="mobileLinkClass('/members')"
            @click="open = false"
            >Members</NuxtLink
          >

          <NuxtLink
            to="/contact"
            class="block px-3 py-2 rounded-md text-sm"
            :class="mobileLinkClass('/contact')"
            @click="open = false"
            >Contact</NuxtLink
          >
          <NuxtLink
            to="/auth/signin"
            class="mt-2 inline-block px-3 py-2 rounded-md text-sm text-center font-medium"
            :class="ctaMobileClass"
            @click="open = false"
            >Sign In</NuxtLink
          >
        </div>
      </div>
    </transition>
  </header>
</template>

<script setup>
import { ref, computed, onMounted, onBeforeUnmount } from "vue";
import { useRoute } from "vue-router";

const open = ref(false);
const route = useRoute();

// true ketika user sudah meninggalkan very-top
const scrolled = ref(false);

function checkScrolled() {
  // gunakan pageYOffset untuk kompatibilitas, dan threshold kecil
  const y = window.pageYOffset || document.documentElement.scrollTop || 0;
  scrolled.value = y > 12;
}

onMounted(() => {
  // set awal eksplisit (hydratation-safe)
  checkScrolled();

  // listen pada scroll + resize + touchmove (mobile address bar edge-cases)
  window.addEventListener("scroll", checkScrolled, { passive: true });
  window.addEventListener("resize", checkScrolled, { passive: true });
  window.addEventListener("touchmove", checkScrolled, { passive: true });
});

onBeforeUnmount(() => {
  window.removeEventListener("scroll", checkScrolled);
  window.removeEventListener("resize", checkScrolled);
  window.removeEventListener("touchmove", checkScrolled);
});

/* helpers / classes sama seperti sebelumnya */
function isActive(path) {
  if (!path) return false;
  return route.path === path || (path !== "/" && route.path.startsWith(path));
}

const headerBackgroundClass = computed(() =>
  scrolled.value
    ? "bg-white/95 backdrop-blur-sm shadow-sm border-b border-slate-100"
    : "bg-transparent"
);

const headerSizeClass = computed(() =>
  scrolled.value ? "py-0.5" : "py-0.5 sm:py-0.5"
);

const brandClass = computed(() =>
  scrolled.value ? "text-slate-900 font-semibold text-base" : "text-white font-semibold text-base"
);

function desktopLinkClass(path) {
  return isActive(path)
    ? "text-green-600 font-medium underline decoration-2 underline-offset-4"
    : scrolled.value
    ? "text-slate-700 hover:text-slate-900 hover:-translate-y-0.5"
    : "text-white/90 hover:text-white";
}

function mobileLinkClass(path) {
  return isActive(path)
    ? "bg-green-50 text-green-600 font-medium rounded"
    : scrolled.value
    ? "text-slate-700 hover:bg-slate-50 rounded"
    : "text-slate-800 hover:bg-slate-50 rounded";
}

const ctaClass = computed(() =>
  scrolled.value
    ? "bg-gradient-to-r from-green-600 to-teal-400 text-white shadow-md"
    : "bg-white text-green-600 border border-white/30"
);

const ctaMobileClass = computed(() =>
  scrolled.value
    ? "bg-gradient-to-r from-green-600 to-teal-400 text-white text-center rounded"
    : "bg-green-50 text-green-600 text-center rounded"
);
</script>

<style scoped>
/* menu animation */
.menu-fade-enter-active,
.menu-fade-leave-active {
  transition: opacity 0.18s ease, transform 0.18s ease;
}
.menu-fade-enter-from {
  opacity: 0;
  transform: translateY(-6px);
}
.menu-fade-enter-to {
  opacity: 1;
  transform: translateY(0);
}
.menu-fade-leave-from {
  opacity: 1;
  transform: translateY(0);
}
.menu-fade-leave-to {
  opacity: 0;
  transform: translateY(-6px);
}

/* ensure header items remain visible on hero bg: tweak link focus outline */
a:focus,
button:focus {
  outline: 3px solid rgba(16, 185, 129, 0.12);
  outline-offset: 2px;
  border-radius: 6px;
}

/* small polish for sticky visual */
header {
  -webkit-backdrop-filter: blur(6px);
  backdrop-filter: blur(6px);
}

/* Respect reduced-motion preference */
@media (prefers-reduced-motion: reduce) {
  .menu-fade-enter-active,
  .menu-fade-leave-active {
    transition: none;
  }
  header {
    transition: none;
  }
}
</style>