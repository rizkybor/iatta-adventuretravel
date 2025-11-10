<template>
  <section class="max-w-7xl mx-auto px-4 py-8">
    <!-- Header -->
    <header class="mb-6">
      <h1 class="text-3xl lg:text-4xl font-extrabold text-slate-900">
        Resource
      </h1>
      <p class="mt-2 text-sm text-slate-600 max-w-2xl">
        Resource aset resmi IATTA. Pilih file, preview bila tersedia, atau unduh
        langsung.
      </p>
    </header>

    <!-- Controls: berada di luar grid aset. Responsive:
         - mobile: full width stacked
         - lg: sidebar-like left column with fixed width (w-80) and main content below uses full width
    -->
    <div class="mb-6 w-full">
      <div
        class="bg-white rounded-2xl border border-slate-100 shadow-sm p-4 flex flex-col gap-4 md:flex-row md:items-center md:justify-between"
      >
        <!-- Left: search + filter -->
        <div
          class="flex-1 min-w-0 flex flex-col gap-3 sm:flex-row sm:items-center"
        >
          <div class="flex-1 min-w-0">
            <label class="sr-only">Cari aset</label>
            <input
              v-model="query"
              type="search"
              placeholder="Cari aset — mis. logo, brand, SK"
              class="w-full rounded-md border border-gray-200 px-3 py-2 text-sm focus:ring-2 focus:ring-[#08a4ef]/30 focus:border-transparent"
            />
          </div>

          <div class="w-full sm:w-auto">
            <label class="sr-only">Filter tipe</label>
            <select
              v-model="filterType"
              class="mt-0 w-full rounded-md border border-gray-200 px-3 py-2 text-sm"
            >
              <option value="">Semua tipe</option>
              <option value="logo">Logo</option>
              <option value="guideline">Brand Guideline</option>
              <option value="other">Lainnya</option>
            </select>
          </div>
        </div>

        <!-- Right: actions -->
        <div class="flex items-center gap-2">
          <button
            @click="clearFilters"
            class="px-3 py-2 rounded-lg border border-amber-400 text-amber-700 text-sm hover:bg-amber-500 hover:text-white hover:border-amber-500 transition-colors duration-200 ease-in-out"
          >
            Reset
          </button>
          <button
            @click="bulkDownload"
            :disabled="!selected.length"
            class="px-3 py-2 rounded-lg bg-emerald-500 text-white text-sm disabled:opacity-60"
          >
            Download Pilihan ({{ selected.length }})
          </button>
        </div>
      </div>

      <!-- Keterangan / note (terpisah, tetap di luar grid) -->
      <!-- <div class="mt-3 p-3 text-sm text-slate-600 rounded-lg bg-slate-50 border border-slate-100">
        File disajikan dari <code>/resources_download</code>. Pastikan file sudah ada di folder public agar dapat diakses via browser. Untuk hasil terbaik, hindari spasi pada nama file (gunakan - atau _).
      </div> -->
    </div>

   <!-- REPLACE: responsive grid + cards (1 column on mobile, 2 columns on tablet/desktop) -->
<div class="grid grid-cols-1 sm:grid-cols-2 gap-4">
  <template v-for="asset in filteredAssets" :key="asset.id">
    <article
      class="card bg-white border border-slate-100 rounded-2xl p-3 sm:p-4 shadow-sm flex flex-col sm:flex-row gap-3 h-full w-full"
    >
      <!-- Thumbnail (full-width on mobile, fixed square on sm+) -->
      <div
        class="card-thumb w-full sm:w-20 h-40 sm:h-20 flex items-center justify-center bg-slate-50 rounded-lg overflow-hidden flex-shrink-0"
      >
        <img
          v-if="asset.thumbnail"
          :src="encodedUrl(asset.thumbnail)"
          :alt="asset.title + ' thumbnail'"
          class="w-full h-full object-contain"
        />
        <div v-else class="text-slate-400 text-xs text-center px-2">
          No preview
        </div>
      </div>

      <!-- Content -->
      <div class="flex-1 min-w-0 flex flex-col">
        <div class="flex items-start gap-2">
          <h3 class="font-semibold text-slate-900 truncate">
            {{ asset.title }}
          </h3>

          <div class="ml-auto flex items-center">
            <label class="inline-flex items-center gap-2 text-sm cursor-pointer select-none">
              <input
                type="checkbox"
                :value="asset.id"
                v-model="selected"
                class="w-4 h-4"
              />
              <span class="text-sm">Pilih</span>
            </label>
          </div>
        </div>

        <p class="text-sm text-slate-600 mt-2 line-clamp-3">
          {{ asset.description }}
        </p>

        <div class="mt-3 flex flex-wrap items-center gap-2">
          <span class="text-xs px-2 py-1 rounded-md bg-slate-100 text-slate-700">
            Tipe: {{ asset.type }}
          </span>
          <template v-if="asset.tags && asset.tags.length">
            <span v-for="t in asset.tags" :key="t" class="text-xs px-2 py-1 rounded-md border text-slate-700">
              {{ t }}
            </span>
          </template>
        </div>

        <!-- File actions: compact buttons, wrap sensibly -->
        <div class="mt-3">
          <div class="flex flex-wrap items-center gap-2">
            <template v-for="file in asset.files" :key="file.name">
              <div class="flex items-center gap-2">
                <!-- compact download -->
                <button
                  @click="downloadFile(file)"
                  class="file-btn compact inline-flex items-center gap-2 px-3 py-1.5 rounded-md border border-emerald-500 text-emerald-600 text-sm font-medium transition-all duration-150 hover:bg-emerald-50 hover:text-emerald-700 hover:border-emerald-600 active:bg-emerald-100 focus:ring-2 focus:ring-emerald-300 focus:outline-none"
                  :title="'Download ' + file.name"
                >
                  <svg class="w-4 h-4 flex-shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
                    <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
                    <polyline points="7 10 12 15 17 10" />
                    <line x1="12" y1="15" x2="12" y2="3" />
                  </svg>
                  <span class="truncate max-w-[8rem] sm:max-w-[12rem]">
                    {{ shortFileLabel(file.name) }}
                  </span>
                </button>

                <!-- compact preview (icon + optional small label) -->
                <button
                  v-if="file.previewable"
                  @click="previewFile(file)"
                  class="file-btn compact inline-flex items-center gap-2 px-2.5 py-1.5 rounded-md border border-sky-500 text-sky-600 text-sm font-medium transition-all duration-150 hover:bg-sky-50 hover:text-sky-700 hover:border-sky-600 active:bg-sky-100 focus:ring-2 focus:ring-sky-300 focus:outline-none"
                  :title="'Preview ' + file.name"
                >
                  <svg class="w-4 h-4 flex-shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
                    <path d="M1 12s4-7 11-7 11 7 11 7-4 7-11 7S1 12 1 12z" />
                    <circle cx="12" cy="12" r="3" />
                  </svg>
                   <span class="truncate max-w-[8rem] sm:max-w-[12rem]">
                    Preview
                  </span>
                </button>

                <div class="text-[12px] text-slate-500">
                  {{ file.size }}
                </div>
              </div>
            </template>

            <!-- updated date pinned to right on sm+, below on mobile -->
            <!-- <div class="ml-auto mt-2 sm:mt-0 text-[12px] text-slate-500">
              Updated: {{ formatDate(asset.updatedAt) }}
            </div> -->
          </div>
        </div>
      </div>
    </article>
  </template>

  <div v-if="!filteredAssets.length" class="col-span-full p-6 rounded-2xl border border-slate-100 bg-white text-center text-slate-600">
    Tidak ada asset yang cocok.
  </div>
</div>

    <!-- Footer small -->
    <footer
      class="mt-6 flex items-center justify-between text-sm text-slate-500"
    >
      <div>
        Menampilkan {{ filteredAssets.length }} dari {{ assets.length }} asset
      </div>
      <div>IATTA Resource Center</div>
    </footer>

    <!-- Preview modal -->
    <div
      v-if="modal.open"
      class="fixed inset-0 z-50 flex items-center justify-center p-4"
    >
      <div class="absolute inset-0 bg-black/40" @click="closeModal"></div>
      <div
        class="relative max-w-5xl w-full bg-white rounded-2xl overflow-hidden shadow-lg"
      >
        <div class="flex items-center justify-between p-4 border-b">
          <h3 class="font-semibold">Preview: {{ modal.file?.label }}</h3>
          <div class="flex items-center gap-2">
            <a
              v-if="modal.file"
              :href="encodedUrl(modal.file.url)"
              target="_blank"
              rel="noopener"
              class="px-3 py-2 rounded-md border text-sm"
            >
              Buka di tab baru
            </a>
            <button @click="closeModal" class="px-3 py-2 rounded-md border">
              Tutup
            </button>
          </div>
        </div>

        <div
          class="p-4 h-[72vh] overflow-auto bg-slate-50 flex items-center justify-center"
        >
          <template v-if="modal.file && modal.file.type.startsWith('image/')">
            <img
              :src="encodedUrl(modal.file.url)"
              class="max-h-full max-w-full object-contain"
              alt="preview"
            />
          </template>

          <template
            v-else-if="modal.file && modal.file.type === 'application/pdf'"
          >
            <iframe
              :src="encodedUrl(modal.file.url)"
              class="w-full h-full border-0"
            />
          </template>

          <template v-else>
            <div class="text-sm text-slate-600">
              Preview tidak tersedia. Silakan unduh file.
            </div>
          </template>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref, computed } from "vue";

const query = ref("");
const filterType = ref("");
const selected = ref([]);

const modal = ref({ open: false, file: null });

/*
  Asset list disesuaikan dengan screenshot folder /public/resources_download.
  Pastikan file ada di folder public/resources_download.
*/
const assets = ref([
  {
    id: "brand-guidelines",
    title: "Brand Guidelines",
    description:
      "Panduan merek lengkap untuk komunikasi dan materi cetak (format landscape).",
    type: ".pdf",
    tags: ["brand", "guideline"],
    thumbnail: "/images/resource-cover-guideline.png",
    updatedAt: "2025-11-01",
    files: [
      {
        label: "PDF - Brand Guidelines Book (LR)",
        name: "IATTA-Adventure-Indonesia-BRANDGUIDELINES-BOOK-LR.pdf",
        url: "/resources_download/IATTA-Adventure-Indonesia-BRANDGUIDELINES-BOOK-LR.pdf",
        size: "3.2MB",
        type: "application/pdf",
        previewable: true,
      },
    ],
  },
  {
    id: "standar-usaha",
    title: "Standar Usaha Berbasis Risiko",
    description:
      "Standar operasional berbasis risiko untuk pelaku usaha wisata petualangan (edisi 2025).",
    type: ".pdf",
    tags: ["standar", "risiko", "guideline"],
    thumbnail: "/images/resource-cover-standar-usaha.png",
    updatedAt: "2025-11-01",
    files: [
      {
        label: "PDF - Standar Usaha Berbasis Risiko 2025",
        name: "IATTA-Standar-Usaha-Berbasis-Risiko-2025.pdf",
        url: "/resources_download/IATTA-Standar-Usaha-Berbasis-Risiko-2025.pdf",
        size: "3.2MB",
        type: "application/pdf",
        previewable: true,
      },
    ],
  },
  {
    id: "safety-code",
    title: "Safety Code Wisata Petualangan B",
    description:
      "Kode keselamatan operasional untuk aktivitas wisata petualangan — versi B (rekomendasi SOP & checklist).",
    type: ".pptx",
    tags: ["safety", "operasional", "guideline"],
    thumbnail: "/images/resource-cover-safety-code.png",
    updatedAt: "2025-11-01",
    files: [
      {
        label: "PPTX - Safety Code Wisata Petualangan B",
        name: "IATTA-Safety-Code-Wisata-Petualangan-B.pptx",
        url: "/resources_download/IATTA-Safety-Code-Wisata-Petualangan-B.pptx",
        size: "3.2MB",
        // MIME type for PowerPoint (pptx)
        type: "application/vnd.openxmlformats-officedocument.presentationml.presentation",
        // kebanyakan viewer browser tidak preview pptx langsung
        previewable: false,
      },
    ],
  },
  {
    id: "logo-pack",
    title: "Logo Pack - IATTA",
    description:
      "Kumpulan aset logo (mono & full) dalam varian square dan rectangle, siap untuk web & cetak.",
    type: ".png",
    tags: ["logo", "brand"],
    thumbnail: "/resources_download/IATTA-Logo-Adventure-Indonesia-Rectangle.png",
    updatedAt: "2025-10-30",
    files: [
      {
        label: "PNG - Mono Rectangle",
        name: "IATTA-Logo-Adventure-Indonesia-Mono-Rectangle.png",
        url: "/resources_download/IATTA-Logo-Adventure-Indonesia-Mono-Rectangle.png",
        size: "42KB",
        type: "image/png",
        previewable: true,
      },
      {
        label: "PNG - Mono Square",
        name: "IATTA-Logo-Adventure-Indonesia-Mono-Square.png",
        url: "/resources_download/IATTA-Logo-Adventure-Indonesia-Mono-Square.png",
        size: "36KB",
        type: "image/png",
        previewable: true,
      },
      {
        label: "PNG - Rectangle",
        name: "IATTA-Logo-Adventure-Indonesia-Rectangle.png",
        url: "/resources_download/IATTA-Logo-Adventure-Indonesia-Rectangle.png",
        size: "58KB",
        type: "image/png",
        previewable: true,
      },
      {
        label: "PNG - Square",
        name: "IATTA-Logo-Adventure-Indonesia-Square.png",
        url: "/resources_download/IATTA-Logo-Adventure-Indonesia-Square.png",
        size: "60KB",
        type: "image/png",
        previewable: true,
      },
    ],
  },
]);

const filteredAssets = computed(() => {
  const q = query.value.trim().toLowerCase();
  return assets.value.filter((a) => {
    if (filterType.value && a.type !== filterType.value) return false;
    if (!q) return true;
    return (
      a.title.toLowerCase().includes(q) ||
      a.description.toLowerCase().includes(q) ||
      (a.tags || []).some((t) => t.toLowerCase().includes(q))
    );
  });
});

function clearFilters() {
  query.value = "";
  filterType.value = "";
  selected.value = [];
}

/* Helpers to make URLs safe when names contain spaces */
function encodedUrl(url) {
  try {
    if (!url) return url;
    if (url.startsWith("http")) return encodeURI(url);
    return url
      .split("/")
      .map((segment) => encodeURI(segment))
      .join("/");
  } catch (e) {
    return url;
  }
}

function downloadFile(file) {
  const a = document.createElement("a");
  a.href = encodedUrl(file.url);
  a.download = file.name || file.label || "";
  a.target = "_blank";
  document.body.appendChild(a);
  a.click();
  a.remove();
}

function previewFile(file) {
  modal.value.open = true;
  modal.value.file = file;
}

function closeModal() {
  modal.value.open = false;
  modal.value.file = null;
}

function formatDate(d) {
  try {
    const dt = new Date(d);
    return dt.toLocaleDateString("id-ID", {
      year: "numeric",
      month: "short",
      day: "numeric",
    });
  } catch (e) {
    return d;
  }
}

function shortFileLabel(fileName) {
  if (!fileName) return "";
  // Hapus prefix dan ekstensi
  return fileName
    .replace(/^IATTA-Logo-Adventure-Indonesia-/, "") // buang awalan standar
    .replace(/^IATTA-Adventure Indonesia-/, "") // kalau ada variasi lain
    .replace(/\.[^/.]+$/, ""); // buang ekstensi (mis. .png / .pdf)
}

function bulkDownload() {
  const filesToDownload = [];
  selected.value.forEach((id) => {
    const a = assets.value.find((x) => x.id === id);
    if (a) filesToDownload.push(...a.files);
  });
  if (!filesToDownload.length) return;

  // sequential trigger untuk mengurangi blokir popup browser
  filesToDownload.forEach((f, i) => {
    setTimeout(() => downloadFile(f), i * 300);
  });
}
</script>

<style scoped>
/* --- Consolidated responsive card & button styles --- */

/* baseline */
.card-thumb {
  min-width: 0;
  overflow: hidden;
}
.card-thumb img {
  width: 100%;
  height: 100%;
  object-fit: contain;
}

/* compact buttons: used for file actions */
.file-btn {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  white-space: nowrap;
  border-radius: 0.375rem; /* rounded-md */
  transition: background-color .15s ease, color .15s ease, border-color .15s ease;
  box-sizing: border-box;
}

/* sensible touch target while compact */
.file-btn.compact {
  min-height: 36px;          /* compact but tappable */
  padding: 0.25rem 0.6rem;   /* px ~ 10-12, py ~ 4 */
  font-size: 13px;
}

/* fallback for any non-compact file-btn (if present) */
.file-btn.default {
  min-height: 40px;
  padding: 0.5rem 0.75rem;
  font-size: 14px;
}

/* truncation helpers */
.file-btn .truncate,
.file-btn .truncate > * {
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  display: inline-block;
}

/* breakpoint adjustments: very small phones */
@media (max-width: 360px) {
  .card-thumb { height: 12rem; } /* slightly taller preview on tiny screens */
  .file-btn.compact { font-size: 12px; min-height: 34px; padding: 0.2rem 0.5rem; }
  .file-btn .truncate { max-width: 7.2rem; } /* keep label short */
}

/* small phones (typical mobiles) */
@media (min-width: 361px) and (max-width: 639px) {
  .card-thumb { height: 10.5rem; }
  .file-btn.compact { font-size: 13px; min-height: 36px; padding: 0.25rem 0.6rem; }
  .file-btn .truncate { max-width: 9.5rem; }
}

/* tablets (sm+) */
@media (min-width: 640px) and (max-width: 1023px) {
  .card-thumb { height: 5rem; width: 5rem; }
  .file-btn.compact { min-height: 36px; padding: 0.3rem 0.7rem; font-size: 13px; }
  .file-btn .truncate { max-width: 10.5rem; }
}

/* desktop */
@media (min-width: 1024px) {
  .card-thumb { height: 5rem; width: 5rem; }
  .file-btn.compact { min-height: 38px; padding: 0.35rem 0.8rem; font-size: 14px; }
  .file-btn .truncate { max-width: 14rem; }
}

/* reduced motion */
@media (prefers-reduced-motion: reduce) {
  * { transition: none !important; }
}

/* Visual polish */
section {
  color-scheme: light;
}

@media (prefers-reduced-motion: reduce) {
  * {
    transition: none !important;
  }
}

/* line-clamp fallback */
.line-clamp-3 {
  display: -webkit-box;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
  overflow: hidden;
}
</style>
