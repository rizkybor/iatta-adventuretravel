<template>
  <header
    :class="headerClass"
    class="sticky top-0 z-40 transition-colors duration-300 ease-[cubic-bezier(.2,.9,.2,1)]"
  >
    <nav
      class="max-w-7xl mx-auto flex items-center justify-between px-4 sm:px-6 lg:px-8 py-3"
      aria-label="Primary"
    >
      <!-- left: brand + links -->
      <div class="flex items-center gap-6">
        <NuxtLink to="/" class="flex items-center gap-3">
          <!-- refined inline SVG logo -->
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
            :class="desktopLinkClass('/home')"
            class="px-3 py-1 rounded-md text-sm transition"
          >
            Home
          </NuxtLink>

          <NuxtLink
            to="/about"
            :class="desktopLinkClass('/about')"
            class="px-3 py-1 rounded-md text-sm transition"
          >
            About
          </NuxtLink>

          <NuxtLink
            to="/contact"
            :class="desktopLinkClass('/contact')"
            class="px-3 py-1 rounded-md text-sm transition"
          >
            Contact
          </NuxtLink>
        </div>
      </div>

      <!-- right: actions + mobile toggle -->
      <div class="flex items-center gap-3">
        <NuxtLink
          to="/signin"
          class="hidden sm:inline-flex items-center gap-2 px-3 py-1.5 text-sm rounded-md font-medium transition-transform active:scale-95"
          :class="ctaClass"
        >
          Sign In
        </NuxtLink>

        <!-- mobile menu button -->
        <button
          type="button"
          class="md:hidden inline-flex items-center justify-center p-2 rounded-md text-current hover:bg-white/6 focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2"
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
            to="/contact"
            class="block px-3 py-2 rounded-md text-sm"
            :class="mobileLinkClass('/contact')"
            @click="open = false"
            >Contact</NuxtLink
          >
          <NuxtLink
            to="/signin"
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
const scrolled = ref(false);

// scroll handler: toggles scrolled style
function handleScroll() {
  scrolled.value = window.scrollY > 12;
}

onMounted(() => {
  handleScroll();
  window.addEventListener("scroll", handleScroll, { passive: true });
});
onBeforeUnmount(() => {
  window.removeEventListener("scroll", handleScroll);
});

// helpers
function isActive(path) {
  if (!path) return false;
  return route.path === path || (path !== "/" && route.path.startsWith(path));
}

// dynamic classes
const headerClass = computed(() => {
  // when scrolled: strong background + subtle shadow + backdrop blur
  if (scrolled.value) {
    return "bg-white/95 backdrop-blur-sm shadow-sm border-b/10";
  }
  // default: transparent with subtle gradient overlay (light)
  return "bg-gradient-to-r from-transparent via-white/30 to-transparent";
});

const brandClass = computed(() =>
  scrolled.value
    ? "text-slate-900 font-semibold"
    : "text-slate-800 font-semibold"
);

function desktopLinkClass(path) {
  return isActive(path)
    ? "text-green-600 font-medium underline decoration-2 underline-offset-4"
    : "text-slate-700 hover:text-slate-900 hover:translate-y-[-1px]";
}

function mobileLinkClass(path) {
  return isActive(path)
    ? "bg-green-50 text-green-600 font-medium"
    : "text-slate-700 hover:bg-slate-50";
}

const ctaClass = computed(() =>
  scrolled.value
    ? "bg-gradient-to-r from-green-600 to-teal-400 text-white shadow-md"
    : "bg-white text-green-600 border border-slate-200 hover:shadow-sm"
);

const ctaMobileClass = computed(() =>
  scrolled.value
    ? "bg-gradient-to-r from-green-600 to-teal-400 text-white text-center"
    : "bg-green-50 text-green-600 text-center"
);
</script>

<style scoped>
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

/* small polish: subtle lift on desktop link hover */
@layer utilities {
  .hover\:translate-y-\[-1px\]:hover {
    transform: translateY(-1px);
  }
}
</style>
