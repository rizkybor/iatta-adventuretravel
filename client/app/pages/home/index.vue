<template>
  <main class="text-slate-800 antialiased">
    <!-- HERO (di-handle oleh global hero store seperti semula) -->
    <!-- HeroSection di-set via onMounted di script -->

    <!-- marquee modern (replace bagian lama) -->
    <section class="relative py-6 sm:py-8 overflow-hidden">
      <!-- gradient fade kiri-kanan -->
      <div
        class="absolute inset-0 pointer-events-none z-10"
        aria-hidden="true"
      ></div>

      <div
        class="relative max-w-full mx-auto"
        role="region"
        aria-label="Sponsor logos marquee"
      >
        <div class="overflow-hidden">
          <div
            ref="track"
            :style="marqueeStyle"
            class="marquee-track flex items-center gap-6 will-change-transform"
            @mouseenter="setPaused(true)"
            @mouseleave="setPaused(false)"
            @focusin="setPaused(true)"
            @focusout="setPaused(false)"
            tabindex="0"
            role="group"
            :aria-label="`Sponsor logos marquee — ${marqueeItems.length} logos`"
          >
            <!-- first pass -->
            <template v-for="(logo, idx) in marqueeItems" :key="'a-' + idx">
              <img
                :src="logo"
                :alt="`Sponsor logo ${idx + 1}`"
                class="logo-img mx-4 object-contain"
                loading="lazy"
                draggable="false"
              />
            </template>

            <!-- duplicate pass for seamless loop -->
            <template v-for="(logo, idx) in marqueeItems" :key="'b-' + idx">
              <img
                :src="logo"
                :alt="`Sponsor logo duplicate ${idx + 1}`"
                class="logo-img mx-4 object-contain"
                loading="lazy"
                draggable="false"
              />
            </template>
          </div>
        </div>
      </div>
    </section>

    <!-- KEY BENEFITS -->
    <section class="py-16">
      <div class="max-w-6xl mx-auto px-6 text-center">
        <h3 class="text-3xl font-extrabold mb-6">
          Satu platform untuk seluruh tim
        </h3>
        <p class="text-slate-600 max-w-2xl mx-auto mb-10">
          API-first, component-based, dan dirancang supaya tim marketing dan
          engineering bisa fokus pada yang penting.
        </p>

        <div class="grid gap-6 sm:grid-cols-3">
          <div
            v-for="(f, i) in features"
            :key="i"
            class="bg-white rounded-2xl p-6 text-left shadow-sm hover:shadow-md transition"
          >
            <div class="text-3xl mb-3" aria-hidden="true">{{ f.icon }}</div>
            <h4 class="font-semibold mb-2">{{ f.title }}</h4>
            <p class="text-sm text-slate-600">{{ f.desc }}</p>
          </div>
        </div>
      </div>
    </section>

    <!-- CUSTOMER STORIES / TESTIMONIALS -->
    <section class="py-16">
      <div class="max-w-6xl mx-auto px-6">
        <h3 class="text-3xl font-extrabold text-center mb-8">
          Customer stories that sizzle
        </h3>

        <div class="grid gap-6 md:grid-cols-3">
          <blockquote
            v-for="(t, i) in testimonials"
            :key="i"
            class="bg-white p-6 rounded-2xl shadow-sm"
          >
            <p class="text-slate-700 mb-4">“{{ t.quote }}”</p>
            <div class="flex items-center gap-3">
              <img
                :src="t.avatar"
                alt="avatar"
                class="w-10 h-10 rounded-full object-cover"
                loading="lazy"
              />
              <div>
                <div class="font-semibold">{{ t.author }}</div>
                <div class="text-xs text-slate-500">{{ t.role }}</div>
              </div>
            </div>
          </blockquote>
        </div>
      </div>
    </section>

    <!-- PROGRAM HIGHLIGHTS (adapted from existing) -->
    <section class="py-16">
      <div class="max-w-6xl mx-auto px-6">
        <h2 class="text-3xl font-extrabold mb-8 text-center">
          Program Unggulan
        </h2>
        <div class="grid gap-8 md:grid-cols-3">
          <article
            v-for="program in programs"
            :key="program.title"
            class="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition"
          >
            <img
              :src="program.image"
              :alt="program.title"
              class="h-52 w-full object-cover"
              loading="lazy"
            />
            <div class="p-5">
              <h3 class="font-semibold text-lg mb-1">{{ program.title }}</h3>
              <p class="text-sm text-slate-600">{{ program.desc }}</p>
              <div class="mt-4">
                <button
                  class="inline-flex items-center gap-2 text-sm font-medium px-3 py-2 rounded-lg border border-slate-200 hover:bg-slate-50"
                >
                  Daftar
                </button>
              </div>
            </div>
          </article>
        </div>
      </div>
    </section>

    <!-- LATEST NEWS -->
    <section class="bg-gradient-to-t from-white via-slate-50 py-16">
      <div class="max-w-6xl mx-auto px-6">
        <h2 class="text-3xl font-extrabold text-center mb-8">Berita Terbaru</h2>
        <div class="grid gap-8 md:grid-cols-3">
          <article
            v-for="news in latestNews"
            :key="news.title"
            class="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition"
          >
            <img
              :src="news.image"
              :alt="news.title"
              class="h-44 w-full object-cover"
              loading="lazy"
            />
            <div class="p-5">
              <h3 class="font-semibold text-lg mb-2">{{ news.title }}</h3>
              <p class="text-sm text-slate-500 mb-4">{{ news.date }}</p>
              <p class="text-slate-600 text-sm">{{ news.desc }}</p>
            </div>
          </article>
        </div>
      </div>
    </section>

    <!-- CTA FOOTER -->
    <section class="py-12 bg-slate-900">
      <div class="max-w-6xl mx-auto px-6 text-center text-white">
        <h3 class="text-2xl font-extrabold mb-3">
          Ready to start? Joy awaits.
        </h3>
        <p class="text-slate-300 mb-6">
          Create your free account to start building in just 5 minutes.
        </p>
        <div class="flex items-center justify-center gap-4">
          <router-link
            to="/try"
            class="px-6 py-3 rounded-lg bg-white text-slate-900 font-semibold"
            >Try for free</router-link
          >
          <router-link
            to="/demo"
            class="px-6 py-3 rounded-lg border border-white text-white"
            >Get a demo</router-link
          >
        </div>
      </div>
    </section>
  </main>
</template>

<script setup>
import { onMounted, onBeforeUnmount, ref, nextTick } from "vue";
import { useHeroStore } from "~/composables/useHeroStore";
import HeroSection from "~/components/HeroSection.vue";

definePageMeta({ layout: "LandingPage" });

/* ---------- marquee state & logic ---------- */
const track = ref(null);
const pauseMarquee = ref(false);
const marqueeItems = Array.from({ length: 6 }, () => "/images/logo-dummy.png"); // public images
const marqueeStyle = ref({ "--marquee-duration": "24s", animationPlayState: "running" });

function setPaused(val) {
  pauseMarquee.value = !!val;
  marqueeStyle.value = {
    ...marqueeStyle.value,
    animationPlayState: pauseMarquee.value ? "paused" : "running",
  };
}

function recalcDuration() {
  if (!track.value) return;
  const childNodes = Array.from(track.value.children).slice(0, marqueeItems.length);
  if (!childNodes.length) return;

  // calculate total width of first pass
  let totalWidth = 0;
  childNodes.forEach((el) => {
    const w = Math.max(0, el.getBoundingClientRect().width);
    totalWidth += w;
  });

  // speedFactor: seconds per px (tweak if needed)
  const speedFactor = 0.045;
  let durationSeconds = Math.max(12, Math.round(totalWidth * speedFactor));
  if (durationSeconds > 80) durationSeconds = 80;

  marqueeStyle.value = {
    ...marqueeStyle.value,
    "--marquee-duration": durationSeconds + "s",
    animationPlayState: pauseMarquee.value ? "paused" : "running",
  };
}

/* ResizeObserver + listeners */
let ro = null;
onMounted(async () => {
  // hero store (same behavior as before)
  const { setHero } = useHeroStore();
  setHero({
    component: HeroSection,
    props: {
      title: "Create with Joy. Scale with Intelligence.",
      subtitle:
        "Headless CMS yang intuitif dan AI-ready untuk tim modern — luncurkan lebih cepat tanpa mengorbankan kontrol.",
      kicker: "Platform",
      image:
        "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=1600&q=80",
      ctas: [
        { label: "Try for free", to: "/try", variant: "primary", icon: "🚀" },
        { label: "Get a demo", to: "/demo", variant: "ghost", icon: "📅" },
      ],
      eyebrow: "Headless CMS · AI-ready",
    },
  });

  // wait rendering then calc duration
  await nextTick();
  recalcDuration();

  if (window.ResizeObserver) {
    ro = new ResizeObserver(recalcDuration);
    if (track.value) ro.observe(track.value);
    window.addEventListener("resize", recalcDuration, { passive: true });
  } else {
    window.addEventListener("resize", recalcDuration, { passive: true });
  }

  // respect prefers-reduced-motion
  const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
  if (mq && mq.matches) {
    marqueeStyle.value = { ...marqueeStyle.value, animation: "none" };
  }
});

onBeforeUnmount(() => {
  if (ro && track.value) ro.disconnect();
  window.removeEventListener("resize", recalcDuration);
});

/* ---------- sample data for other sections ---------- */
const partnersLogos = [
  "https://placehold.co/120x40?text=TomTom",
  "https://placehold.co/120x40?text=Oatly",
  "https://placehold.co/120x40?text=Disney",
  "https://placehold.co/120x40?text=Netflix",
  "https://placehold.co/120x40?text=Adidas",
];

const features = [
  {
    icon: "🧩",
    title: "Component-based",
    desc: "Bangun ulang bagian situs tanpa repot. Reuse komponen untuk konsistensi.",
  },
  {
    icon: "⚡",
    title: "Fast launches",
    desc: "Setup proyek dalam hitungan menit dengan starter templates.",
  },
  {
    icon: "🔒",
    title: "Enterprise-grade",
    desc: "Keamanan, SLA, dan governance untuk organisasi skala besar.",
  },
];

const programs = [
  {
    title: "Eco Adventure",
    desc: "Jelajahi alam sambil menjaga lingkungan.",
    image:
      "https://images.unsplash.com/photo-1526481280698-8fcc2a9f3f4a?auto=format&fit=crop&w=800&q=60",
  },
  {
    title: "Cultural Heritage Tours",
    desc: "Kenali budaya lokal Indonesia dengan pengalaman otentik.",
    image:
      "https://images.unsplash.com/photo-1589308078059-be1415eab4c3?auto=format&fit=crop&w=800&q=60",
  },
  {
    title: "Marine Exploration",
    desc: "Eksplorasi bawah laut nusantara bersama tim profesional.",
    image:
      "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=800&q=60",
  },
];

const testimonials = [
  {
    quote: "We create web pages in 10 minutes.",
    author: "Danielle van Zuijlen",
    role: "TomTom",
    avatar: "https://placehold.co/80x80",
  },
  {
    quote: "100 sites later, marketers love websites again.",
    author: "Ronan Morris",
    role: "Together Digital",
    avatar: "https://placehold.co/80x80",
  },
  {
    quote: "Our content ops sped up by 50%.",
    author: "Case Study",
    role: "Retail",
    avatar: "https://placehold.co/80x80",
  },
];

const latestNews = [
  {
    title: "IATTA Gelar Workshop Nasional",
    date: "Jan 2025",
    desc: "IATTA sukses mengadakan workshop nasional tentang pariwisata berkelanjutan.",
    image:
      "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=800&q=60",
  },
  {
    title: "Pemandu Wisata Lokal Berdaya",
    date: "Des 2024",
    desc: "Program pemberdayaan pemandu wisata lokal sukses dilaksanakan di Lombok.",
    image:
      "https://images.unsplash.com/photo-1509099836639-18ba1795216d?auto=format&fit=crop&w=800&q=60",
  },
  {
    title: "Peluncuran Aplikasi IATTA",
    date: "Nov 2024",
    desc: "Aplikasi digital untuk memudahkan wisatawan menemukan perjalanan terbaik.",
    image:
      "https://images.unsplash.com/photo-1556742400-b5b7c5121f4c?auto=format&fit=crop&w=800&q=60",
  },
];
</script>

<style>
/* marquee core: sedikit lebih lapang */
.marquee-track {
  display: flex;
  align-items: center;
  gap: 2rem; /* lebih longgar supaya logo yang lebih besar tidak mepet */
  animation: marquee-scroll var(--marquee-duration, 24s) linear infinite;
  transform: translateZ(0);
}

/* responsiveness via CSS vars fallback */
@media (max-width: 640px) {
  :root {
    --marquee-duration: 32s;
  }
}
@media (min-width: 641px) and (max-width: 1024px) {
  :root {
    --marquee-duration: 26s;
  }
}
@media (min-width: 1025px) {
  :root {
    --marquee-duration: 20s;
  }
}

/* paused */
.marquee-track[style*="animation-play-state: paused"],
.marquee-track.paused {
  animation-play-state: paused !important;
}

/* animation for duplicated content */
@keyframes marquee-scroll {
  from {
    transform: translateX(0);
  }
  to {
    transform: translateX(-50%);
  }
}

/* LOGO SIZING — diperbesar, tetap responsive */
.logo-img {
  max-height: 6rem; /* desktop fallback */
  height: auto;
  width: auto;
  user-select: none;
  -webkit-user-drag: none;
  opacity: 0.95;
  transition: opacity 0.16s ease, transform 0.16s ease;
}
.logo-img:hover {
  opacity: 1;
  transform: translateY(-3px);
}

/* breakpoint overrides: semakin besar layar, semakin besar logo */
@media (max-width: 640px) {
  .logo-img {
    max-height: 3.25rem;
  }
}
@media (min-width: 641px) and (max-width: 768px) {
  .logo-img {
    max-height: 4rem;
  }
}
@media (min-width: 769px) and (max-width: 1024px) {
  .logo-img {
    max-height: 5rem;
  }
}
@media (min-width: 1025px) {
  .logo-img {
    max-height: 6rem;
  }
}

/* accessibility: respect user's reduced motion preference */
@media (prefers-reduced-motion: reduce) {
  .marquee-track {
    animation: none !important;
  }
  .marquee-track:hover {
    animation-play-state: paused;
  }
}

/* small general polish for the page content */
main {
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

/* prevent images from being selected while dragging on some browsers */
img {
  -webkit-user-select: none;
  user-select: none;
}
</style>