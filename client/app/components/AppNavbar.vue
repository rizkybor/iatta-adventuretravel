<template>
  <header
    :class="[
      'sticky top-0 z-40 transition-colors duration-500 ease-[cubic-bezier(.4,0,.2,1)]',
      headerBackgroundClass,
      headerSizeClass,
    ]"
  >
    <nav
      class="max-w-7xl mx-auto flex items-center justify-between px-4 sm:px-6 lg:px-8 py-2"
      aria-label="Primary"
    >
      <!-- left: brand + links -->
      <div class="flex items-center gap-6">
        <NuxtLink to="/" class="flex items-center gap-3">
          <img src="/images/logo-iatta.png" alt="Logo" class="bg-white rounded-xl p-1 mx-auto h-10 w-auto " />
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
          class="md:hidden inline-flex items-center justify-center p-2 rounded-md text-current hover:bg-white/6 focus:outline-none"
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
        <div
          class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3 flex flex-col gap-1"
        >
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

const headerBackgroundClass = computed(() => {
  const isHome = route.path === "/" || route.path === "/home";

  if (scrolled.value) {
    return "bg-gradient-to-br from-white via-emerald-50 to-emerald-100";
  }

  return isHome
    ? "bg-transparent"
    : "bg-gradient-to-br from-white via-white to-emerald-100";
});

const headerSizeClass = computed(() =>
  scrolled.value ? "py-0.5" : "py-0.5 sm:py-0.5"
);

const brandClass = computed(() =>
  scrolled.value
    ? "text-slate-900 font-semibold text-base"
    : "text-white font-semibold text-base"
);

function desktopLinkClass(path) {
  const isHome = route.path === "/" || route.path === "/home";
  if (isActive(path)) {
    return "text-green-600 font-medium";
  }
  if (scrolled.value) {
    return "text-slate-700 hover:text-slate-900 hover:-translate-y-0.5";
  }
  if (isHome) {
    return "text-white/90 hover:text-white";
  }
  return "text-black/90 hover:text-black";
}

function mobileLinkClass(path) {
  const isHome = route.path === "/" || route.path === "/home";

  if (isActive(path)) {
    return "text-green-600 font-medium bg-emerald-50 rounded";
  }

  if (scrolled.value) {
    // saat di-scroll di mana pun
    return "text-slate-700 hover:bg-slate-50 rounded";
  }

  // di halaman lain, belum scroll
  return "text-black/90 hover:bg-emerald-50 rounded";
}

const ctaClass = computed(() => {
  const isHome = route.path === "/" || route.path === "/home";

  if (!isHome) {
    return "bg-gradient-to-r from-green-600 to-teal-400 text-white shadow-md";
  }

  // home
  return scrolled.value
    ? "bg-gradient-to-r from-green-600 to-teal-400 text-white shadow-md"
    : "bg-white text-green-600 border border-white/30";
});

const ctaMobileClass = computed(() => {
  const isHome = route.path === "/" || route.path === "/home";

  if (!isHome) {
    return "bg-gradient-to-r from-white via-emerald-50 to-emerald-200 text-emerald-700 text-center rounded shadow-sm";
  }

  return scrolled.value
    ? "bg-gradient-to-r from-green-600 to-teal-400 text-white text-center rounded"
    : "bg-green-50 text-green-600 text-center rounded";
});
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
  font-weight: 600;
  font-size: 16px;
}


/* di bagian style scoped */
header {
  /* fokus hanya pada properti yang ingin ditransisikan */
  transition-property: background-color, background-image, color, box-shadow, border-color, backdrop-filter;
  /* agar Tailwind classes tidak mencegah transisi custom */
  transition-duration: 500ms;
  transition-timing-function: cubic-bezier(.4,0,.2,1);
  /* backdrop */
  -webkit-backdrop-filter: blur(6px);
  backdrop-filter: blur(6px);
}

/* transisi warna untuk brand dan link */
.brand-transition,
.nav-link {
  transition: color 320ms ease, opacity 220ms ease;
}

/* contoh: pasang pada link desktop */
.nav-link:hover { transform: translateY(-1px); }

/* transisi untuk box-shadow / border yang mungkin berubah pada scroll */
.header-elevated {
  transition: box-shadow 320ms ease, border-color 320ms ease;
}

/* prefer-reduced-motion respect */
@media (prefers-reduced-motion: reduce) {
  header,
  .brand-transition,
  .nav-link,
  .header-elevated {
    transition: none !important;
  }
}
</style>
