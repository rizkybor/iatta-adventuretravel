<template>
  <main class="min-h-screen bg-white text-slate-900">
    <section class="pt-10">
      <div class="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="rounded-2xl border border-slate-100 bg-gradient-to-b from-[#fef9ec] to-white p-6 sm:p-8 lg:p-10 shadow-sm">
          <div class="flex flex-col gap-3">
            <p class="text-xs font-semibold tracking-wider uppercase text-emerald-700">
              Membership
            </p>
            <h1 class="text-2xl lg:text-3xl font-extrabold text-slate-900">
              Keanggotaan IATTA
            </h1>
            <p class="text-slate-600 max-w-2xl">
              Bergabung sebagai anggota untuk memperkuat jejaring, akses standar, dan program yang mendorong pariwisata petualangan berkelanjutan.
            </p>
          </div>
        </div>
      </div>
    </section>

    <section class="py-12">
      <div class="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="flex flex-col gap-2">
          <h2 class="text-xl lg:text-2xl font-bold text-slate-900">
            Siapa aja yang jadi membership?
          </h2>
          <p class="text-slate-600">
            IATTA membuka keanggotaan untuk organisasi, perusahaan operator, dan perorangan yang berkomitmen pada standar kualitas, keamanan, dan keberlanjutan.
          </p>
        </div>

        <div class="mt-8 grid gap-6 md:grid-cols-3">
          <div
            v-for="item in membershipTypes"
            :key="item.title"
            class="rounded-2xl border border-slate-100 bg-white p-5 sm:p-6 shadow-sm hover:shadow-md transition"
          >
            <div class="flex items-start gap-4">
              <div
                class="w-11 h-11 rounded-xl flex items-center justify-center ring-1 ring-inset"
                :class="item.iconWrapClass"
              >
                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="1.8"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  class="w-6 h-6"
                  :class="item.iconClass"
                >
                  <path v-for="(d, i) in item.iconPaths" :key="i" :d="d" />
                </svg>
              </div>
              <div class="min-w-0">
                <div class="font-semibold text-slate-900">{{ item.title }}</div>
                <p class="mt-1 text-sm text-slate-600 leading-relaxed">
                  {{ item.desc }}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section class="py-12 bg-slate-50/70 border-y border-slate-100">
      <div class="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="flex flex-col gap-2">
          <h2 class="text-xl lg:text-2xl font-bold text-slate-900">
            Benefit / Manfaat Membership
          </h2>
          <p class="text-slate-600 max-w-3xl">
            Manfaat dirancang untuk membantu anggota meningkatkan kapasitas operasional, kredibilitas, dan jangkauan kolaborasi lintas pemangku kepentingan.
          </p>
        </div>

        <div class="mt-8 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          <div
            v-for="b in benefits"
            :key="b.title"
            class="rounded-2xl border border-slate-100 bg-white p-5 sm:p-6 shadow-sm"
          >
            <div class="flex items-start gap-4">
              <div
                class="w-11 h-11 rounded-xl flex items-center justify-center ring-1 ring-inset"
                :class="b.iconWrapClass"
              >
                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="1.8"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  class="w-6 h-6"
                  :class="b.iconClass"
                >
                  <path v-for="(d, i) in b.iconPaths" :key="i" :d="d" />
                </svg>
              </div>
              <div class="min-w-0">
                <div class="font-semibold text-slate-900">{{ b.title }}</div>
                <p class="mt-1 text-sm text-slate-600 leading-relaxed">
                  {{ b.desc }}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section class="py-12">
      <div class="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="grid gap-8 lg:grid-cols-2 items-start">
          <div>
            <h2 class="text-xl lg:text-2xl font-bold text-slate-900">
              Tampilan ID Card
            </h2>
            <p class="mt-2 text-slate-600 leading-relaxed">
              ID Card dapat digunakan sebagai identitas anggota untuk kebutuhan event, akses program, dan verifikasi.
            </p>
            <div class="mt-5 grid gap-3">
              <div class="flex items-start gap-3 text-sm text-slate-700">
                <span class="mt-0.5 w-5 h-5 rounded-md bg-emerald-100 text-emerald-700 flex items-center justify-center font-semibold">
                  ✓
                </span>
                <div>Desain rapi dan mudah dibaca untuk penggunaan di lapangan.</div>
              </div>
              <div class="flex items-start gap-3 text-sm text-slate-700">
                <span class="mt-0.5 w-5 h-5 rounded-md bg-emerald-100 text-emerald-700 flex items-center justify-center font-semibold">
                  ✓
                </span>
                <div>Mencantumkan identitas anggota dan masa berlaku.</div>
              </div>
              <div class="flex items-start gap-3 text-sm text-slate-700">
                <span class="mt-0.5 w-5 h-5 rounded-md bg-emerald-100 text-emerald-700 flex items-center justify-center font-semibold">
                  ✓
                </span>
                <div>Dapat ditampilkan dalam format digital maupun cetak.</div>
              </div>
            </div>
          </div>

          <div class="rounded-2xl border border-slate-100 bg-white shadow-sm overflow-hidden">
            <button
              type="button"
              class="w-full text-left block group"
              @click="idCardViewerOpen = true"
              aria-label="Lihat ID Card"
            >
              <div class="p-4 sm:p-6">
                <div class="relative aspect-[4/3] sm:aspect-[16/10] w-full overflow-hidden rounded-xl border border-slate-100 bg-slate-50">
                  <img
                    :src="idCardImageUrl"
                    alt="ID Card IATTA Member"
                    class="absolute inset-0 w-full h-full object-contain bg-white"
                    loading="lazy"
                  />
                  <div class="absolute inset-0 bg-gradient-to-t from-slate-950/10 via-transparent to-transparent pointer-events-none"></div>
                </div>
                <div class="mt-4 flex items-center justify-between text-sm text-slate-600">
                  <span>Klik untuk memperbesar</span>
                  <span class="font-semibold text-emerald-700 group-hover:underline">
                    View →
                  </span>
                </div>
              </div>
            </button>
          </div>
        </div>
      </div>
    </section>

    <section class="py-12">
      <div class="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="flex flex-col gap-2">
          <h2 class="text-xl lg:text-2xl font-bold text-slate-900">
            List Membership
          </h2>
          <p class="text-slate-600">
            Daftar anggota dapat dikelola dan diperbarui secara berkala. Gunakan pencarian untuk memudahkan penelusuran.
          </p>
        </div>

        <div class="mt-6 flex flex-col gap-3 md:flex-row md:items-center md:justify-between">
          <label class="w-full md:max-w-sm">
            <span class="sr-only">Cari</span>
            <input
              v-model="searchQuery"
              type="text"
              placeholder="Cari nama / brand / kota..."
              class="w-full rounded-xl border border-slate-200 bg-white px-4 py-2.5 text-sm focus:outline-none focus:ring-4 focus:ring-emerald-100"
            />
          </label>

          <label class="w-full md:w-auto">
            <span class="sr-only">Filter</span>
            <select
              v-model="typeFilter"
              class="w-full md:w-56 rounded-xl border border-slate-200 bg-white px-4 py-2.5 text-sm focus:outline-none focus:ring-4 focus:ring-emerald-100"
            >
              <option value="Semua">Semua jenis</option>
              <option value="Asosiasi">Asosiasi</option>
              <option value="Operator">Perusahaan Operator</option>
              <option value="Perorangan">Perorangan</option>
            </select>
          </label>
        </div>

        <div class="mt-6 grid gap-3 sm:hidden">
          <div
            v-for="(m, idx) in pagedMembers"
            :key="m.id"
            class="rounded-2xl border border-slate-100 bg-white p-4 shadow-sm"
          >
            <div class="flex items-start justify-between gap-4">
              <div class="min-w-0">
                <div class="text-xs font-semibold tracking-wider uppercase text-slate-500">
                  No. {{ pageStartIndex + idx + 1 }}
                </div>
                <div class="mt-1 font-semibold text-slate-900 leading-snug">
                  {{ m.name }}
                </div>
                <div class="mt-2 flex items-center gap-2 flex-wrap">
                  <span
                    class="inline-flex items-center px-3 py-1 rounded-full text-xs font-semibold ring-1 ring-inset"
                    :class="typeBadgeClass(m.type)"
                  >
                    {{ m.type }}
                  </span>
                  <span class="text-xs text-slate-500">
                    {{ m.location }}
                  </span>
                </div>
              </div>
              <div class="text-right">
                <div class="text-xs text-slate-500">Brand</div>
                <div class="mt-0.5 text-sm font-medium text-slate-900">
                  {{ m.brand || "-" }}
                </div>
              </div>
            </div>
          </div>

          <div
            v-if="filteredMembers.length === 0"
            class="rounded-2xl border border-slate-100 bg-white p-6 text-sm text-slate-500 shadow-sm"
          >
            Tidak ada data yang cocok dengan pencarian.
          </div>
        </div>

        <div class="mt-6 hidden sm:block overflow-x-auto rounded-2xl border border-slate-100 bg-white shadow-sm">
          <table class="min-w-[1040px] w-full table-auto">
            <thead class="bg-slate-50 text-left text-sm text-slate-700">
              <tr>
                <th class="px-3 md:px-5 py-4 font-semibold w-[70px]">No.</th>
                <th class="px-3 md:px-5 py-4 font-semibold">Nama Organisasi / Nama Lengkap</th>
                <th class="px-3 md:px-5 py-4 font-semibold">Nama Brand</th>
                <th class="px-3 md:px-5 py-4 font-semibold">Jenis Keanggotaan Terdaftar</th>
                <th class="px-3 md:px-5 py-4 font-semibold">Kota / Provinsi Domisili</th>
              </tr>
            </thead>
            <tbody class="text-sm text-slate-700">
              <tr
                v-for="(m, idx) in pagedMembers"
                :key="m.id"
                class="border-t border-slate-100 hover:bg-slate-50/60"
              >
                <td class="px-3 md:px-5 py-4 text-slate-500 tabular-nums">
                  {{ pageStartIndex + idx + 1 }}
                </td>
                <td class="px-3 md:px-5 py-4 font-medium text-slate-900">
                  {{ m.name }}
                </td>
                <td class="px-3 md:px-5 py-4">
                  {{ m.brand || "-" }}
                </td>
                <td class="px-3 md:px-5 py-4">
                  <span
                    class="inline-flex items-center px-3 py-1 rounded-full text-xs font-semibold ring-1 ring-inset"
                    :class="typeBadgeClass(m.type)"
                  >
                    {{ m.type }}
                  </span>
                </td>
                <td class="px-3 md:px-5 py-4">
                  {{ m.location }}
                </td>
              </tr>

              <tr v-if="filteredMembers.length === 0" class="border-t border-slate-100">
                <td class="px-3 md:px-5 py-8 text-slate-500" colspan="5">
                  Tidak ada data yang cocok dengan pencarian.
                </td>
              </tr>
            </tbody>
          </table>
        </div>

        <div class="mt-5 flex flex-col gap-3 md:flex-row md:items-center md:justify-between">
          <div class="text-sm text-slate-600">
            Menampilkan {{ showingFrom }}–{{ showingTo }} dari {{ filteredMembers.length }} data
          </div>

          <div class="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-end">
            <label class="flex items-center gap-2 text-sm text-slate-600">
              <span>Tampilkan</span>
              <select
                v-model.number="perPage"
                class="rounded-xl border border-slate-200 bg-white px-3 py-2 text-sm focus:outline-none focus:ring-4 focus:ring-emerald-100"
              >
                <option :value="5">5</option>
                <option :value="10">10</option>
                <option :value="20">20</option>
              </select>
            </label>

            <div class="flex items-center justify-between gap-2">
              <button
                type="button"
                class="px-3 py-2 rounded-xl border border-slate-200 bg-white text-sm font-semibold text-slate-700 disabled:opacity-50 disabled:cursor-not-allowed"
                :disabled="currentPage === 1"
                @click="prevTablePage"
              >
                Sebelumnya
              </button>

              <div class="hidden sm:flex items-center gap-1">
                <button
                  v-for="p in pageButtons"
                  :key="String(p)"
                  type="button"
                  class="min-w-9 h-9 px-3 rounded-xl text-sm font-semibold"
                  :class="
                    p === '...'
                      ? 'text-slate-400 cursor-default'
                      : p === currentPage
                        ? 'bg-emerald-600 text-white'
                        : 'border border-slate-200 bg-white text-slate-700 hover:bg-slate-50'
                  "
                  :disabled="p === '...'"
                  @click="p !== '...' && goToTablePage(p)"
                >
                  {{ p }}
                </button>
              </div>

              <div class="sm:hidden text-sm font-semibold text-slate-700 tabular-nums">
                {{ currentPage }} / {{ totalPages }}
              </div>

              <button
                type="button"
                class="px-3 py-2 rounded-xl border border-slate-200 bg-white text-sm font-semibold text-slate-700 disabled:opacity-50 disabled:cursor-not-allowed"
                :disabled="currentPage === totalPages"
                @click="nextTablePage"
              >
                Selanjutnya
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>

    <div
      v-if="idCardViewerOpen"
      class="fixed inset-0 z-50 bg-slate-950/80 backdrop-blur-sm flex items-center justify-center p-4"
      @click.self="idCardViewerOpen = false"
      role="dialog"
      aria-modal="true"
    >
      <div class="relative w-full max-w-5xl">
        <div class="rounded-2xl overflow-hidden shadow-xl bg-slate-900/40 border border-white/10">
          <div class="p-4 lg:p-6">
            <button
              type="button"
              class="absolute top-3 right-3 px-3 py-1.5 rounded-lg bg-white/10 hover:bg-white/15 text-white text-sm font-semibold"
              @click="idCardViewerOpen = false"
              aria-label="Tutup"
            >
              Tutup
            </button>
            <div class="rounded-xl overflow-hidden bg-white">
              <img
                :src="idCardImageUrl"
                alt="ID Card IATTA Member"
                class="w-full h-[75vh] sm:h-[80vh] object-contain bg-white"
              />
            </div>
            <div class="mt-4 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
              <div class="text-sm text-white/80">
                ID_Card_IATTA_Member.jpeg
              </div>
              <div class="flex flex-col sm:flex-row items-stretch sm:items-center gap-3">
                <a
                  :href="idCardImageUrl"
                  target="_blank"
                  rel="noopener noreferrer"
                  class="px-4 py-2 rounded-lg bg-white/10 hover:bg-white/15 text-white text-sm font-semibold"
                >
                  Buka di Tab Baru
                </a>
                <a
                  :href="idCardImageUrl"
                  download
                  class="px-4 py-2 rounded-lg bg-emerald-500 hover:bg-emerald-600 text-white text-sm font-semibold"
                >
                  Download
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </main>
</template>

<script setup>
import { computed, ref, watch } from "vue";

const idCardImageUrl = "/resources_download/ID_Card_IATTA_Member.jpeg";

const membershipTypes = [
  {
    title: "Asosiasi / Organisasi",
    desc: "Perkumpulan, komunitas, dan asosiasi terkait wisata petualangan.",
    iconWrapClass: "bg-emerald-50 ring-emerald-100",
    iconClass: "text-emerald-700",
    iconPaths: ["M4 10.5V20a1 1 0 0 0 1 1h14a1 1 0 0 0 1-1v-9.5", "M3 10.5l9-7 9 7", "M9 21v-7a1 1 0 0 1 1-1h4a1 1 0 0 1 1 1v7"],
  },
  {
    title: "Perusahaan / Operator / Lembaga Edukasi & Sertifikasi",
    desc: "Operator wisata travel, penyedia aktifitas outdoor, lembaga pelatihan, edukasi, dan sertifikasi.",
    iconWrapClass: "bg-indigo-50 ring-indigo-100",
    iconClass: "text-indigo-700",
    iconPaths: ["M8 7V6a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v1", "M4 7h16a2 2 0 0 1 2 2v9a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V9a2 2 0 0 1 2-2", "M12 12v3"],
  },
  {
    title: "Perorangan",
    desc: "Profesional, pengajar, peneliti, praktisi, maupun influencer.",
    iconWrapClass: "bg-amber-50 ring-amber-100",
    iconClass: "text-amber-700",
    iconPaths: ["M20 21a8 8 0 1 0-16 0", "M12 13a4 4 0 1 0-4-4 4 4 0 0 0 4 4"],
  },
];

const benefits = [
  {
    title: "Jejaring Nasional & Peluang Kolaborasi",
    desc: "Memperluas koneksi lintas daerah dan sektor melalui jejaring anggota, DPW, dan kolaborasi program/event bersama mitra.",
    iconWrapClass: "bg-emerald-50 ring-emerald-100",
    iconClass: "text-emerald-700",
    iconPaths: ["M7 12a2.5 2.5 0 1 0 5 0 2.5 2.5 0 0 0-5 0Z", "M15 7a2.5 2.5 0 1 0 5 0 2.5 2.5 0 0 0-5 0Z", "M15 17a2.5 2.5 0 1 0 5 0 2.5 2.5 0 0 0-5 0Z", "M12 11l3.2-2.2", "M12 13l3.2 2.2"],
  },
  {
    title: "Akses Pelatihan & Pengembangan Kapasitas",
    desc: "Prioritas informasi dan akses pada program sertifikasi, pelatihan, serta pengembangan kapasitas.",
    iconWrapClass: "bg-indigo-50 ring-indigo-100",
    iconClass: "text-indigo-700",
    iconPaths: ["M4 19.5V6.5A2.5 2.5 0 0 1 6.5 4H20v16H6.5A2.5 2.5 0 0 1 4 17.5", "M8 7h8", "M8 11h8", "M8 15h6"],
  },
  {
    title: "Promosi & Peningkatan Visibilitas",
    desc: "Meningkatkan visibilitas anggota melalui kanal komunikasi IATTA (publikasi kegiatan, direktori, dan materi informasi sesuai ketentuan).",
    iconWrapClass: "bg-amber-50 ring-amber-100",
    iconClass: "text-amber-700",
    iconPaths: ["M3 11l18-5v12l-18-5v-2Z", "M7 14v6", "M7 20h4"],
  },
  {
    title: "Forum Diskusi & Advokasi Industri",
    desc: "Ruang diskusi untuk berbagi praktik terbaik dan menyuarakan masukan industri terkait standar, keselamatan, dan keberlanjutan.",
    iconWrapClass: "bg-sky-50 ring-sky-100",
    iconClass: "text-sky-700",
    iconPaths: ["M21 12a7 7 0 0 1-7 7H8l-5 3V12a7 7 0 0 1 7-7h4a7 7 0 0 1 7 7Z", "M8 12h8", "M8 15h5"],
  },
  {
    title: "Akses Informasi & Peluang Kerja Sama",
    desc: "Akses update informasi program, peluang kemitraan/proyek, dan kolaborasi lintas pihak untuk memperkuat ekosistem wisata petualangan.",
    iconWrapClass: "bg-violet-50 ring-violet-100",
    iconClass: "text-violet-700",
    iconPaths: ["M10 13a5 5 0 0 1 0-7l1-1a5 5 0 0 1 7 7l-1 1", "M14 11a5 5 0 0 1 0 7l-1 1a5 5 0 0 1-7-7l1-1"],
  },
  {
    title: "Nomor Anggota Resmi, Kartu Anggota & Sertifikat",
    desc: "Mendapatkan nomor anggota resmi, kartu anggota, dan sertifikat sebagai identitas untuk kebutuhan verifikasi dan akses program.",
    iconWrapClass: "bg-rose-50 ring-rose-100",
    iconClass: "text-rose-700",
    iconPaths: ["M4 7a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V7Z", "M8 10h8", "M8 14h6", "M8.5 16.5a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3Z"],
  },
];

const members = ref([
  {
    id: "m-1",
    name: "PT. WATERLAND NUSANTARA",
    brand: "Your Partner in Safety, Travel and Trade of Adventure Tourism",
    type: "Operator",
    location: "JL. BOULEVARD BLOK O.1/16, TAMAN CIMANGGU, KOTA BOGOR 16163 - INDONESIA",
  },
  {
    id: "m-2",
    name: "PT Lintas Jeram Nusantara",
    brand: "Arus Liar",
    type: "Operator",
    location: "DKI Jakarta",
  },
  {
    id: "m-3",
    name: "PT Bramanta Wana Parahita",
    brand: "Bravo Adventure",
    type: "Operator",
    location: "DKI Jakarta",
  },
  {
    id: "m-4",
    name: "PT MULTI AVENTURA INDONESIA",
    brand: "CLIMB INDONESIA",
    type: "Operator",
    location: "DKI JAKARTA",
  },
  {
    id: "m-5",
    name: "Stand Up Paddle Indonesia (SUP.ID)",
    brand: "SUP.ID",
    type: "Asosiasi",
    location: "Jakarta",
  },
  {
    id: "m-6",
    name: "Ramon Tungka",
    brand: "",
    type: "Perorangan",
    location: "Jabodetabek",
  },
  {
    id: "m-7",
    name: "Zulham Peliang",
    brand: "",
    type: "Perorangan",
    location: "Banten",
  },
  {
    id: "m-8",
    name: "Rizky Ajie Kurniawan",
    brand: "",
    type: "Perorangan",
    location: "Banten",
  },
  {
    id: "m-9",
    name: "Goa Jomblang",
    brand: "Goa Jomblang",
    type: "Operator",
    location: "Jogjakarta",
  },
  {
    id: "m-10",
    name: "Sandi Taruni",
    brand: "Jelajah Outdoor",
    type: "Perorangan",
    location: "Bogor / Jawa Barat",
  },
]);

const searchQuery = ref("");
const typeFilter = ref("Semua");
const idCardViewerOpen = ref(false);
const perPage = ref(10);
const currentPage = ref(1);

const filteredMembers = computed(() => {
  const q = searchQuery.value.trim().toLowerCase();
  const t = typeFilter.value;

  return members.value.filter((m) => {
    const matchType = t === "Semua" ? true : m.type === t;
    if (!q) return matchType;

    const haystack = [m.name, m.brand, m.type, m.location]
      .filter(Boolean)
      .join(" ")
      .toLowerCase();

    return matchType && haystack.includes(q);
  });
});

watch([searchQuery, typeFilter], () => {
  currentPage.value = 1;
});

watch([filteredMembers, perPage], () => {
  if (currentPage.value > totalPages.value) currentPage.value = totalPages.value;
  if (currentPage.value < 1) currentPage.value = 1;
});

const totalPages = computed(() => {
  return Math.max(1, Math.ceil(filteredMembers.value.length / perPage.value));
});

const pageStartIndex = computed(() => {
  return (currentPage.value - 1) * perPage.value;
});

const pagedMembers = computed(() => {
  const start = pageStartIndex.value;
  return filteredMembers.value.slice(start, start + perPage.value);
});

const showingFrom = computed(() => {
  if (filteredMembers.value.length === 0) return 0;
  return pageStartIndex.value + 1;
});

const showingTo = computed(() => {
  if (filteredMembers.value.length === 0) return 0;
  return Math.min(pageStartIndex.value + pagedMembers.value.length, filteredMembers.value.length);
});

const pageButtons = computed(() => {
  const total = totalPages.value;
  const cur = currentPage.value;
  if (total <= 7) return Array.from({ length: total }, (_, i) => i + 1);

  const set = new Set([1, total, cur, cur - 1, cur + 1]);
  const pages = Array.from(set)
    .filter((n) => n >= 1 && n <= total)
    .sort((a, b) => a - b);

  const out = [];
  for (let i = 0; i < pages.length; i += 1) {
    const n = pages[i];
    const prev = pages[i - 1];
    if (i > 0 && n - prev > 1) out.push("...");
    out.push(n);
  }
  return out;
});

function goToTablePage(p) {
  currentPage.value = Math.min(Math.max(1, p), totalPages.value);
}

function nextTablePage() {
  goToTablePage(currentPage.value + 1);
}

function prevTablePage() {
  goToTablePage(currentPage.value - 1);
}

function typeBadgeClass(type) {
  if (type === "Asosiasi") return "bg-emerald-50 text-emerald-700 ring-emerald-100";
  if (type === "Operator") return "bg-indigo-50 text-indigo-700 ring-indigo-100";
  return "bg-amber-50 text-amber-700 ring-amber-100";
}
</script>

<style scoped>
table th,
table td {
  vertical-align: middle;
}
</style>
