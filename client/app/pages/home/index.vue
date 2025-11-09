<template>
  <main class="text-slate-800 antialiased">
    <!-- HERO (di-handle oleh global hero store seperti semula) -->
    <!-- HeroSection di-set via onMounted di script -->
    <section class="relative py-6 sm:py-8 overflow-hidden bg-white">
      <!-- gradient fade kiri-kanan (subtle) -->
      <div
        class="absolute inset-0 pointer-events-none z-10"
        aria-hidden="true"
        style="
          background: linear-gradient(
            90deg,
            rgba(255, 255, 255, 1) 0%,
            rgba(255, 255, 255, 0) 8%,
            rgba(255, 255, 255, 0) 92%,
            rgba(255, 255, 255, 1) 100%
          );
        "
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
                :alt="`Logo partner ${idx + 1}`"
                class="logo-img mx-4 object-contain"
                loading="lazy"
                draggable="false"
              />
            </template>

            <!-- duplicate pass for seamless loop -->
            <template v-for="(logo, idx) in marqueeItems" :key="'b-' + idx">
              <img
                :src="logo"
                :alt="`Logo partner duplicate ${idx + 1}`"
                class="logo-img mx-4 object-contain"
                loading="lazy"
                draggable="false"
              />
            </template>
          </div>
        </div>
      </div>
    </section>

    <!-- HERO / LEAD-IN -->
    <section class="bg-gradient-to-r from-emerald-50 to-white py-16 rounded-xl">
      <div
        class="max-w-6xl mx-auto px-6 grid gap-10 lg:grid-cols-2 items-center"
      >
        <div>
          <h2
            class="text-4xl sm:text-5xl font-extrabold leading-tight text-slate-900 mb-4"
          >
            IATTA — Indonesia Adventure Travel Trade Association
          </h2>
          <p class="text-lg text-slate-600 mb-6">
            Mempromosikan pariwisata petualangan Indonesia yang berkelanjutan,
            aman, dan kompetitif secara global. Di bawah kepemimpinan Amalia
            Yunita (Ketua Umum 2025–2029), IATTA mendorong standar profesional,
            pemberdayaan pemandu lokal, dan kolaborasi lintas sektor.
          </p>

          <div class="flex flex-wrap gap-3">
            <router-link
              to="/about"
              class="inline-flex items-center gap-3 px-5 py-3 rounded-lg bg-emerald-600 text-white text-sm font-semibold shadow hover:opacity-95"
            >
              Tentang IATTA
            </router-link>
            <router-link
              to="/programs"
              class="inline-flex items-center gap-3 px-5 py-3 rounded-lg border border-slate-200 text-sm font-medium hover:bg-slate-50"
            >
              Program & Sertifikasi
            </router-link>
          </div>

          <div class="mt-6 text-sm text-slate-500">
            <span class="font-semibold text-slate-700">Fokus:</span>
            Keberlanjutan · Pelatihan · Kemitraan Lokal
          </div>
        </div>

        <div class="rounded-2xl overflow-hidden shadow-lg bg-white">
          <!-- representative image -->
          <img
            src="https://redaksi8.com/wp-content/uploads/2025/09/IMG-20250917-WA0010-1.jpg"
            alt="IATTA - Adventure"
            class="w-full h-auto object-cover"
            loading="lazy"
            onerror="this.src='https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=1200&q=60'"
          />
        </div>
      </div>
    </section>

    <!-- KEY BENEFITS (IATTA) -->
    <section class="py-16">
      <div class="max-w-6xl mx-auto px-6 text-center">
        <h3 class="text-3xl font-extrabold mb-6">Prioritas IATTA</h3>
        <p class="text-slate-600 max-w-2xl mx-auto mb-10">
          Menyusun standar profesional, memperkuat kapasitas lokal, dan
          mempromosikan praktik pariwisata yang bertanggung jawab.
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
    <section class="bg-gray-50 py-16 rounded-xl">
      <div class="max-w-6xl mx-auto px-6">
        <h3 class="text-3xl font-extrabold text-center mb-8">
          Suara Pemangku Kepentingan
        </h3>

        <div class="grid gap-6 md:grid-cols-3">
          <blockquote
            v-for="(t, i) in testimonials"
            :key="i"
            class="bg-white p-6 rounded-2xl shadow-sm"
          >
            <p class="text-slate-400 italic mb-4">“{{ t.quote }}”</p>
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

    <!-- PROGRAM HIGHLIGHTS (IATTA) -->
    <section class="py-16">
      <div class="max-w-6xl mx-auto px-6">
        <h2 class="text-3xl font-extrabold mb-8 text-center">
          Program Unggulan IATTA
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

    <!-- LATEST NEWS (IATTA) -->
    <section class="py-16">
      <div class="max-w-6xl mx-auto px-6">
        <h2 class="text-3xl font-extrabold text-center mb-8">
          Berita & Pengumuman
        </h2>
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
          Dukung Wisata Petualangan Indonesia
        </h3>
        <p class="text-slate-300 mb-6">
          Bergabung sebagai anggota, ikut sertifikasi pemandu, dan promosikan
          pengalaman lokal yang bertanggung jawab.
        </p>
        <div class="flex items-center justify-center gap-4">
          <router-link
            to="/join"
            class="px-6 py-3 rounded-lg bg-emerald-500 text-white font-semibold"
            >Gabung Sekarang</router-link
          >
          <router-link
            to="/contact"
            class="px-6 py-3 rounded-lg border border-white text-white"
            >Hubungi Kami</router-link
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
import { usePageSeo } from '~/composables/usePageSeo'

usePageSeo({
  title: 'Home – Indonesia Adventure Travel Trade Association',
  description: 'Menjadikan destinasi utama wisata petualangan dunia yang berkualitas, berkelanjutan dan berdaya saing global.',
  path: '/',
  image: '/meta/og-image.png',
  type: 'website'
})

definePageMeta({ layout: "LandingPage" });

/* ---------- marquee state & logic ---------- */
const track = ref(null);
const pauseMarquee = ref(false);
const marqueeItems = [
  "/images/logo-dummy.png",
  "/images/logo-dummy.png",
  "/images/logo-dummy.png",
  "/images/logo-dummy.png",
  "/images/logo-dummy.png",
]; // ganti dengan asset nyata di public/images
const marqueeStyle = ref({
  "--marquee-duration": "24s",
  animationPlayState: "running",
});

function setPaused(val) {
  pauseMarquee.value = !!val;
  marqueeStyle.value = {
    ...marqueeStyle.value,
    animationPlayState: pauseMarquee.value ? "paused" : "running",
  };
}

function recalcDuration() {
  if (!track.value) return;
  const childNodes = Array.from(track.value.children).slice(
    0,
    marqueeItems.length
  );
  if (!childNodes.length) return;

  let totalWidth = 0;
  childNodes.forEach((el) => {
    const w = Math.max(0, el.getBoundingClientRect().width);
    totalWidth += w;
  });

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
  // set hero (keep for site consistency)
  const { setHero } = useHeroStore();
  setHero({
    component: HeroSection,
    props: {
      title: "IATTA: Advancing Adventure Tourism",
      subtitle:
        "Membangun kapasitas, standar, dan promosi pariwisata petualangan Indonesia yang berkelanjutan.",
      kicker: "Indonesia Adventure Travel Trade Association",
      image: "https://berita.genpi.id/wp-content/uploads/2025/09/IMG-20250910-WA0036.jpg",
      ctas: [
        {
          label: "Tentang IATTA",
          to: "/about",
          variant: "primary",
          icon: "🗺️",
        },
        { label: "Program", to: "/programs", variant: "ghost", icon: "📚" },
      ],
      eyebrow: "Wisata Petualangan · Berkelanjutan",
    },
  });

  await nextTick();
  recalcDuration();

  if (window.ResizeObserver) {
    ro = new ResizeObserver(recalcDuration);
    if (track.value) ro.observe(track.value);
    window.addEventListener("resize", recalcDuration, { passive: true });
  } else {
    window.addEventListener("resize", recalcDuration, { passive: true });
  }

  const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
  if (mq && mq.matches) {
    marqueeStyle.value = { ...marqueeStyle.value, animation: "none" };
  }
});

onBeforeUnmount(() => {
  if (ro && track.value) ro.disconnect();
  window.removeEventListener("resize", recalcDuration);
});

/* ---------- content for IATTA ---------- */
const features = [
  {
    icon: "🎓",
    title: "Sertifikasi & Pelatihan",
    desc: "Program sertifikasi pemandu, manajemen risiko, dan first aid untuk meningkatkan profesionalisme.",
  },
  {
    icon: "🌱",
    title: "Pariwisata Berkelanjutan",
    desc: "Panduan praktik ramah lingkungan dan inisiatif pemulihan habitat untuk destinasi petualangan.",
  },
  {
    icon: "🤝",
    title: "Kemitraan & Advocacy",
    desc: "Kolaborasi dengan pemerintah, pelaku usaha, dan komunitas lokal untuk memperkuat ekosistem wisata.",
  },
];

const programs = [
  {
    title: "Pelatihan Pemandu Lokal",
    desc: "Kurikulum komprehensif untuk meningkatkan kemampuan pemandu dalam keselamatan dan storytelling lokal.",
    image: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=800&q=80", 
  },
  {
    title: "Eco Adventure Certification",
    desc: "Standar operasional untuk tour operator yang menerapkan praktik konservasi dan manfaat ekonomi lokal.",
    image: "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=800&q=80",
  },
  {
    title: "Marine Stewardship Initiative",
    desc: "Program pelatihan dan monitoring untuk tour selam/snorkeling yang berkelanjutan.",
    image: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=800&q=80",
  },
];

const testimonials = [
  {
    quote:
      "IATTA telah membantu meningkatkan standar layanan pemandu lokal di Lombok.",
    author: "Cahyo Alkantana",
    role: "Mantan Ketua Umum IATTA (2017–2025)",
    avatar: "https://ui-avatars.com/api/?name=Cahyo+Alkantana&background=10B981&color=fff&size=128",
  },
  {
    quote:
      "Kepemimpinan Amalia membawa arah baru yang jelas untuk promosi global.",
    author: "Budi Supriyanto",
    role: "Asisten Deputi Kemenparekraf",
    avatar: "https://ui-avatars.com/api/?name=Budi+Supriyanto&background=34D399&color=fff&size=128",
  },
  {
    quote:
      "Program sertifikasi memberikan kepercayaan lebih kepada wisatawan internasional.",
    author: "Hariyadi B. Sukamdani",
    role: "PHRI / GIPI",
    avatar: "https://ui-avatars.com/api/?name=Hariyadi+B.+Sukamdani&background=6EE7B7&color=fff&size=128",
  },
];

const latestNews = [
  {
    title: "Amalia Yunita Terpilih sebagai Ketua Umum IATTA 2025–2029",
    date: "17 Sep 2025",
    desc: "Musyawarah Nasional IATTA memilih Amalia Yunita untuk memimpin asosiasi, menekankan komitmen pada keberlanjutan dan kapasitas lokal.",
    image: "https://redaksi8.com/wp-content/uploads/2025/09/IMG-20250917-WA0008-e1758092470249.jpg",
  },
  {
    title: "Musyawarah Nasional (Munas) 2025 — Jakarta",
    date: "Sept 2025",
    desc: "REDAKSI8.COM, JAKARTA – Indonesia kembali meneguhkan langkahnya menuju panggung internasional sebagai salah satu destinasi utama wisata petualangan dunia. Hal ini tampak jelas dalam Musyawarah Nasional (Munas) Indonesia Adventure Travel Trade Association (IATTA) 2025 yang sukses digelar di Jakarta Design Center, Selasa (16/9/2025).",
    image: "https://redaksi8.com/wp-content/uploads/2025/09/IMG-20250917-WA0010-1.jpg",
  },
  {
    title: "Peluncuran Aplikasi Cari Perjalanan IATTA",
    date: "Nov 2024",
    desc: "Platform digital untuk memudahkan wisatawan menemukan paket petualangan yang bersertifikat IATTA.",
    image: "https://images.unsplash.com/photo-1603791440384-56cd371ee9a7?auto=format&fit=crop&w=900&q=80",
  },
];
</script>

<style>
/* marquee core: sedikit lebih lapang */
.marquee-track {
  display: flex;
  align-items: center;
  gap: 2rem;
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
  max-height: 6rem;
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
