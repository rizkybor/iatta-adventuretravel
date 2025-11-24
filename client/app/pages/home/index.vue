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
    <section
      class="bg-gradient-to-r from-emerald-50 to-white py-16 rounded-xl mt-4"
    >
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

    <!-- LATEST NEWS (IATTA) — PAGED 3x3 CAROUSEL -->
    <section class="py-16">
      <div class="max-w-6xl mx-auto px-6">
        <h2 class="text-3xl font-extrabold text-center mb-8">
          Berita & Pengumuman
        </h2>

        <!-- carousel container -->
        <div class="relative">
          <!-- viewport -->
          <div
            class="news-viewport overflow-hidden"
            @touchstart.passive="onTouchStart"
            @touchmove.passive="onTouchMove"
            @touchend.passive="onTouchEnd"
          >
            <!-- track: lebar = pagesCount * 100% -->
            <div
              class="news-track grid gap-8"
              :style="{
                width: pagesCount * 100 + '%',
                transform: `translateX(-${currentPage * (100 / pagesCount)}%)`,
              }"
            >
              <!-- each page: grid 3x3 -->
              <div
                v-for="pageIndex in pagesCount"
                :key="'page-' + (pageIndex - 1)"
                class="news-page px-2 py-1"
                :style="{ width: 100 / pagesCount + '%' }"
              >
                <div class="grid gap-8 md:grid-cols-3">
                  <article
                    v-for="news in pageSlice(pageIndex - 1)"
                    :key="news.title + '-' + (pageIndex - 1)"
                    class="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition"
                  >
                    <img
                      :src="news.image"
                      :alt="news.title"
                      class="h-44 w-full object-cover"
                      loading="lazy"
                    />
                    <div class="p-5">
                      <h3 class="font-semibold text-lg mb-2">
                        {{ news.title }}
                      </h3>
                      <p class="text-sm text-slate-500 mb-4">{{ news.date }}</p>
                      <p class="text-slate-600 text-sm">{{ news.desc }}</p>
                      <div class="mt-4">
                        <a
                          v-if="news.link"
                          :href="news.link"
                          target="_blank"
                          rel="noopener noreferrer"
                          class="inline-flex items-center gap-2 text-sm font-medium text-emerald-600 hover:underline"
                        >
                          Baca Selengkapnya →
                        </a>
                      </div>
                    </div>
                  </article>
                </div>
              </div>
            </div>
          </div>

          <!-- controls -->
          <button
            class="news-nav left-2"
            :disabled="currentPage === 0"
            @click="prevPage"
            aria-label="Sebelumnya"
          >
            ‹
          </button>
          <button
            class="news-nav right-2"
            :disabled="currentPage === pagesCount - 1"
            @click="nextPage"
            aria-label="Selanjutnya"
          >
            ›
          </button>

          <!-- dots -->
          <div class="mt-6 flex items-center justify-center gap-2">
            <button
              v-for="(n, i) in pagesCount"
              :key="'dot-' + i"
              @click="goToPage(i)"
              :aria-current="currentPage === i ? 'true' : 'false'"
              class="w-3 h-3 rounded-full focus:outline-none"
              :class="currentPage === i ? 'dot-active' : 'dot'"
            ></button>
          </div>
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
import {
  onMounted,
  onBeforeUnmount,
  nextTick,
  ref,
  computed,
  watch,
} from "vue";
import { useHeroStore } from "~/composables/useHeroStore";
import HeroSection from "~/components/HeroSection.vue";
import { usePageSeo } from "~/composables/usePageSeo";

usePageSeo({
  title: "Home – Indonesia Adventure Travel Trade Association",
  description:
    "Menjadikan destinasi utama wisata petualangan dunia yang berkualitas, berkelanjutan dan berdaya saing global.",
  path: "/",
  image: "/meta/og-image.png",
  type: "website",
});

definePageMeta({ layout: "LandingPage" });

/* ---------- marquee state & logic ---------- */
const track = ref(null);
const pauseMarquee = ref(false);
const marqueeItems = [
  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSjBE6Mq3-HmNt8aq2H92xpIVuZXo_IQyMPMw&s",
  "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEizhCe_iBnWcrlJnlXWRp3Umz1LTRIbS_KDHJLbG9nDgKsUl0UMMKxzzRKbTTEvczhtfIoUGowkcYlA6_X9ZY82V4wXewH-SuZqRn8KH_LkJK-yutE51KkymmbvhxQZAnaoboozZbhuR2DOjWfRHjjqejIq98GIfO_UBY7KZ9HwM2huU43zLwbLtGOVvpPu/w1200-h630-p-k-no-nu/Profil%20APGI_DPP%20APGI%202025-2028-1.png",
  "/images/logo-dummy.png",
  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRqH0T_6jURtjHDPBotVnEBjhJ1LWRD9jBVrw&s",
  "https://www.kuncoroleadership.org/wp-content/uploads/2022/08/logo-aeli.png",
  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSOeD7esYg0MIrXoR_Hph_j-nkB4BwTwto_RA&s",
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
        "Building capacity, standards and promotion of sustainable Indonesian adventure tourism.",
      kicker: "Indonesia Adventure Travel Trade Association",
      image: "/images/hero.png",
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
    image:
      "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=800&q=80",
  },
  {
    title: "Eco Adventure Certification",
    desc: "Standar operasional untuk tour operator yang menerapkan praktik konservasi dan manfaat ekonomi lokal.",
    image:
      "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=800&q=80",
  },
  {
    title: "Marine Stewardship Initiative",
    desc: "Program pelatihan dan monitoring untuk tour selam/snorkeling yang berkelanjutan.",
    image:
      "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=800&q=80",
  },
];

const testimonials = [
  {
    quote:
      "IATTA telah membantu meningkatkan standar layanan pemandu lokal di Lombok.",
    author: "Cahyo Alkantana",
    role: "Mantan Ketua Umum IATTA (2017–2025)",
    avatar:
      "https://ui-avatars.com/api/?name=Cahyo+Alkantana&background=10B981&color=fff&size=128",
  },
  {
    quote:
      "Kepemimpinan Amalia membawa arah baru yang jelas untuk promosi global.",
    author: "Budi Supriyanto",
    role: "Asisten Deputi Kemenparekraf",
    avatar:
      "https://ui-avatars.com/api/?name=Budi+Supriyanto&background=34D399&color=fff&size=128",
  },
  {
    quote:
      "Program sertifikasi memberikan kepercayaan lebih kepada wisatawan internasional.",
    author: "Hariyadi B. Sukamdani",
    role: "PHRI / GIPI",
    avatar:
      "https://ui-avatars.com/api/?name=Hariyadi+B.+Sukamdani&background=6EE7B7&color=fff&size=128",
  },
];

const latestNews = [
  {
    title: "Pengurus DPW IATTA Sulut Periode 2025-2030 Resmi Dilantik",
    date: "Nov 2025",
    desc: `JOURNALTELEGRAF - Pengurus Dewan Pimpinan Wilayah (DPW) Indonesia Adventure Travel Trade Association (IATTA) Sulawesi Utara (Sulut) resmi dilantik oleh Ketua Umum IATTA, di Ma'nda Cafe & Resto, tepi Danau Tondano, Sabtu 22 November 2025.`,
    image:
      "https://assets.pikiran-rakyat.com/crop/0x0:0x0/720x0/webp/photo/2025/11/22/3754023822.jpg",
    link: "https://journaltelegraf.pikiran-rakyat.com/sulut/pr-3679810975/pengurus-dpw-iatta-sulut-periode-2025-2030-resmi-dilantik",
  },
  {
    title: "Pengurus DPW IATTA Sulut Dilantik, Fokus Angkat Wisata Petualangan",
    date: "Nov 2025",
    desc: `MINAHASA - Pengurus Dewan Pimpinan Wilayah (DPW) Indonesia Adventure Travel Trade Association (IATTA) Sulawesi Utara (Sulut) resmi dilantik oleh Ketua Umum IATTA, Amalia Yunita, di salah satu kafe di tepi Danau Tondano, Kabupaten Minahasa, Sabtu (22/11).`,
    image:
      "https://blue.kumparan.com/image/upload/fl_progressive,fl_lossy,c_fill,f_auto,q_auto:best,w_640/v1634025439/01kap0ww91cerfphyazn2717w6.jpg",
    link: "https://kumparan.com/manadobacirita/26IK7cvPEDH?utm_source=Desktop&utm_medium=copy-to-clipboard&shareID=BDaOHgN3kjEh",
  },
  {
    title: "IATTA Sulut Resmi Dilantik, Prioritaskan Keamanan dan Wisata Berkelanjutan di Minahasa",
    date: "Nov 2025",
    desc: `INTANANEWS.ID – Dewan Pimpinan Wilayah (DPW) Indonesia Adventure Travel Trade Association (IATTA) Sulawesi Utara (Sulut) resmi dilantik di Ma’nda Cafe & Resto, tepi Danau Tondano, Minahasa, Sabtu (22/11/2025).`,
    image:
      "https://intananews.id/wp-content/uploads/2025/11/Screenshot_20251123_032408_PhotoEditor.jpg",
    link: "https://intananews.id/berita/iatta-sulut-resmi-dilantik-prioritaskan-keamanan-dan-wisata-berkelanjutan-di-minahasa/",
  },
  {
    title: "Pengurus DPW IATTA Sulut Periode 2025-2030 Resmi Dilantik",
    date: "Nov 2025",
    desc: `Pilarportal.com,Minahasa – Pengurus Dewan Pimpinan Wilayah (DPW) Indonesia Adventure Travel Trade Association (IATTA) Sulawesi Utara (Sulut) resmi dilantik oleh Ketua Umum IATTA, di Ma’nda Cafe & Resto, tepi Danau Tondano, Sabtu (22/11/2025).`,
    image:
      "https://pilarportal.com/wp-content/uploads/2025/11/IMG-20251123-WA0030.jpg",
    link: "https://pilarportal.com/23/11/2025/pengurus-dpw-iatta-sulut-periode-2025-2030-resmi-dilantik/",
  },
  {
    title: "Daftar Nama Pengurus DPW IATTA Sulut Periode 2025-2030 yang Baru Dilantik",
    date: "Nov 2025",
    desc: `TRIBUNMANADO.CO.ID - Sabtu (22/11/2025) suasana di Ma'nda Cafe & Resto, tepi Danau Tondano, Kabupaten Minahasa, Sulawesi Utara ramai dengan kehadiran anggota Indonesia Adventure Travel Trade Association (IATTA).`,
    image:
      "https://asset.tribunnews.com/ZsA89BGnWA6yTwe2kMUYQCXWraU=/1200x675/filters:upscale():quality(30):format(webp):focal(0.5x0.5:0.5x0.5)/manado/foto/bank/originals/DPW-IATTA-Pengurus-Dewan-Pimpinan-Wilayah-DPW-Indonesia-Adventure-Travel8700.jpg",
    link: "https://manado.tribunnews.com/manado/1856692/daftar-nama-pengurus-dpw-iatta-sulut-periode-2025-2030-yang-baru-dilantik",
  },
{
    title: "Duet Sumoked-Maili Nahkodai IATTA Sulut",
    date: "Nov 2025",
    desc: `Sulut, LestariNews.com – Asosiasi yang fokus pada wisata petualangan, Indonesia Adventure Travel Trade Association (IATTA), baru saja punya pengurus baru untuk wilayah Sulawesi Utara (Sulut)!`,
    image:
      "https://lestarinews.com/wp-content/uploads/2025/11/WhatsApp-Image-2025-11-23-at-11.59.03-780x470.jpeg",
    link: "https://lestarinews.com/duet-sumoked-maili-nahkodai-iatta-sulut/",
  },
  {
    title: "Pariwisata Adventure: Merajut Peluang Emas",
    date: "Nov 2025",
    desc: `Indonesia bukan sekadar negara dengan potensi adventure tourism. Dengan lebih dari 17.500 pulau, 400 gunung berapi (129 di antaranya masih aktif), garis pantai terpanjang di dunia yang mencapai 54.720 kilometer, serta 10 Situs Warisan Dunia UNESCO, Indonesia menawarkan keragaman lanskap yang sulit ditandingi oleh destinasi manapun di dunia (GoWithGuide, 2025).`,
    image:
      "https://img1.wsimg.com/isteam/ip/b5ae2c75-55e4-40e2-94d3-81c354356a9d/Adventure.jpg/:/rs=w:1280",
    link: "https://muhammadrahmad.com/f/pariwisata-adventure-merajut-peluang-emas",
  },
  {
    title:
      "Munas IATTA 2025 Tegaskan Indonesia Sebagai Surga Wisata Petualangan Dunia",
    date: "Sep 2025",
    desc: "REDAKSI8.COM, JAKARTA – Indonesia kembali meneguhkan langkahnya menuju panggung internasional sebagai salah satu destinasi utama wisata petualangan dunia. Hal ini tampak jelas dalam Musyawarah Nasional (Munas) Indonesia Adventure Travel Trade Association (IATTA) 2025 yang sukses digelar di Jakarta Design Center, Selasa (16/9/2025).",
    image:
      "https://redaksi8.com/wp-content/uploads/2025/09/IMG-20250917-WA0010-1.jpg",
    link: "https://redaksi8.com/munas-iatta-2025-tegaskan-indonesia-sebagai-surga-wisata-petualangan-dunia/",
  },
  {
    title: "Pariwisata Adventure: Merajut Peluang Emas",
    date: "Sep 2025",
    desc: `Indonesia Adventure Travel Trade Association (IATTA) akan menggelar Musyawarah Nasional (Munas) 2025 pada 16 September mendatang di Jakarta Design Center. Forum ini diharapkan menjadi momentum penting bagi industri wisata petualangan Tanah Air untuk semakin menunjukkan daya saing di kancah global.`,
    image:
      "https://berita.genpi.id/wp-content/uploads/2025/09/IMG-20250910-WA0036.jpg",
    link: "https://berita.genpi.id/munas-iatta-2025-dorong-indonesia-jadi-destinasi-wisata-petualangan-dunia/",
  },
  {
    title: "Pariwisata Petualangan Jadi Tren Global",
    date: "Sep 2025",
    desc: `JAKARTA, NusaBali - Kementerian Pariwisata menyebut pariwisata petualangan atau adventure tourism menjadi tren yang digemari oleh wisatawan secara global. "Pariwisata petualangan kini menjadi tren global karena wisatawan tidak hanya mencari hiburan, tapi juga pengalaman yang menantang dan berkesan juga otentik, karena kaitannya juga dengan budaya," kata Asisten Deputi Manajemen Industri Kemenpar Budi Supriyanto dalam Musyawarah Nasional IATTA yang digelar di Jakarta, seperti dilansir Antara, Selasa.`,
    image:
      "https://www.nusabali.com/article_images/201519/pariwisata-petualangan-jadi-tren-global-800-2025-09-17-094253_0.jpg",
    link: "https://www.nusabali.com/berita/201519/pariwisata-petualangan-jadi-tren-global",
  },
  {
    title:
      "Kemenpar: Adventure Tourism Jadi Aset Strategis Pariwisata Indonesia",
    date: "Sep 2025",
    desc: `JAKARTA, suaramerdeka.com – Kementerian Pariwisata menyampaikan bahwa wisata petualangan atau adventure tourism kini tengah menjadi salah satu tren global yang diminati banyak wisatawan. "Pariwisata petualangan kini menjadi tren global karena wisatawan tidak hanya mencari hiburan, tapi juga pengalaman yang menantang dan berkesan juga otentik, karena kaitannya juga dengan budaya," kata Asisten Deputi Manajemen Industri Kemenpar Budi Supriyanto dalam Musyawarah Nasional IATTA di Jakarta, Selasa.`,
    image:
      "https://static.promediateknologi.id/crop/0x0:0x0/750x500/webp/photo/p1/134/2025/09/16/IMG-20250916-WA0117-2302742952.jpg",
    link: "https://jakarta.suaramerdeka.com/nasional/13415925647/kemenpar-adventure-tourism-jadi-aset-strategis-pariwisata-indonesia",
  },
  {
    title:
      "Gandeng IATTA, Sandiaga Ingin Destinasi Wisata Petualangan Indonesia Jadi Juara Di Asia Tenggara",
    date: "Apr 2021",
    desc: "Menteri Pariwisata dan Ekonomi Kreatif Sandiaga Salahuddin Uno berkolaborasi dengan Indonesia Adventure Travel Trade Association (IATTA) untuk menggarap destinasi-destinasi wisata petualangan di tanah air.",
    image:
      "https://rmol.id/images/berita/normal/2021/04/781218_02062608042021_Sandiaga_Uno_Podium.jpg",
    link: "https://rmol.id/politik/read/2021/04/08/482489/gandeng-iatta-sandiaga-ingin-destinasi-wisata-petualangan-indonesia-jadi-juara-di-asia-tenggara",
  },
];

const perPage = 3;
const currentPage = ref(0);
const startTouchX = ref(0);
const deltaX = ref(0);

/* pages count derived dari existing latestNews */
const pagesCount = computed(() => {
  return Math.max(1, Math.ceil(latestNews.length / perPage));
});

/* helper: ambil slice untuk halaman tertentu */
function pageSlice(pageIndex) {
  const start = pageIndex * perPage;
  return latestNews.slice(start, start + perPage);
}

/* navigation */
function nextPage() {
  if (currentPage.value < pagesCount.value - 1) currentPage.value += 1;
}
function prevPage() {
  if (currentPage.value > 0) currentPage.value -= 1;
}
function goToPage(i) {
  currentPage.value = Math.min(Math.max(0, i), pagesCount.value - 1);
}

/* safeguard: adjust currentPage saat data berubah */
watch(pagesCount, (newCount) => {
  if (currentPage.value > newCount - 1)
    currentPage.value = Math.max(0, newCount - 1);
});

/* simple touch swipe (left/right) */
function onTouchStart(e) {
  startTouchX.value = e.touches ? e.touches[0].clientX : e.clientX;
  deltaX.value = 0;
}
function onTouchMove(e) {
  const x = e.touches ? e.touches[0].clientX : e.clientX;
  deltaX.value = x - startTouchX.value;
}
function onTouchEnd() {
  const threshold = 60; // px untuk swipe
  if (deltaX.value < -threshold) {
    nextPage();
  } else if (deltaX.value > threshold) {
    prevPage();
  }
  deltaX.value = 0;
}
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

.news-viewport {
  position: relative;
  width: 100%;
  touch-action: pan-y;
}

.news-track {
  display: flex;
  transition: transform 420ms cubic-bezier(0.2, 0.9, 0.2, 1);
  will-change: transform;
}

/* each page akan berisi grid 3x3 item */
.news-page {
  box-sizing: border-box;
}

/* nav buttons */
.news-nav {
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  z-index: 30;
  background: rgba(255, 255, 255, 0.9);
  border: 1px solid rgba(0, 0, 0, 0.06);
  width: 2.75rem;
  height: 2.75rem;
  display: inline-grid;
  place-items: center;
  border-radius: 0.5rem;
  font-size: 1.5rem;
  line-height: 1;
  cursor: pointer;
  box-shadow: 0 4px 14px rgba(2, 6, 23, 0.06);
}
.news-nav:disabled {
  opacity: 0.45;
  cursor: not-allowed;
}
.news-nav.left-2 {
  left: 0.5rem;
}
.news-nav.right-2 {
  right: 0.5rem;
}

/* dots */
.dot {
  background: rgba(148, 163, 184, 0.22);
}
.dot-active {
  background: rgb(16, 185, 129); /* emerald-500 */
  box-shadow: 0 0 0 4px rgba(16, 185, 129, 0.12);
}

/* responsive: jika layar lebih kecil, tetap 3 columns pada md, fallback 1 col on small screens */
@media (max-width: 767px) {
  .news-page .md\:grid-cols-3 {
    grid-template-columns: repeat(1, minmax(0, 1fr));
  }
}
</style>
