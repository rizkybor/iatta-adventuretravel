<template>
  <main
    class="min-h-screen bg-gradient-to-b from-emerald-50 via-white to-emerald-25 text-slate-800 antialiased p-6"
  >
    <header class="max-w-6xl mx-auto mb-6">
      <div class="flex items-center justify-between gap-4">
        <div>
          <h1 class="text-3xl sm:text-4xl font-extrabold tracking-tight">
            Sitemap — IATTA
          </h1>
          <p class="mt-1 text-sm text-slate-600">
            Struktur halaman & rute untuk tim produk, SEO, dan engineering —
            versi resmi.
          </p>
        </div>

        <div class="flex items-center gap-3">
          <button
            @click="exportCsv"
            class="inline-flex items-center gap-2 rounded-md border border-slate-200 bg-white px-3 py-2 shadow-sm hover:shadow-md text-sm"
            aria-label="Export CSV"
          >
            <svg
              class="w-4 h-4"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
            >
              <path
                d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"
                stroke-width="1.5"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M7 10l5 5 5-5"
                stroke-width="1.5"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M12 15V3"
                stroke-width="1.5"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
            Export CSV
          </button>

          <button
            @click="downloadXml"
            class="inline-flex items-center gap-2 rounded-md bg-emerald-600 px-3 py-2 text-white text-sm font-semibold shadow hover:opacity-95"
            aria-label="Download XML"
          >
            Download XML
          </button>
        </div>
      </div>

      <div class="mt-6 flex items-center gap-3 max-w-3xl">
        <div class="relative flex-1">
          <svg
            class="absolute left-3 top-3 text-slate-400 w-4 h-4"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            aria-hidden="true"
          >
            <circle
              cx="11"
              cy="11"
              r="7"
              stroke-width="1.5"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              d="M21 21l-4.35-4.35"
              stroke-width="1.5"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>
          <input
            v-model="query"
            placeholder="Cari halaman, tag, route..."
            class="pl-10 pr-4 py-3 rounded-lg border border-slate-200 bg-white w-full shadow-sm focus:outline-none focus:ring-2 focus:ring-emerald-200"
            aria-label="Search sitemap"
          />
        </div>

        <div class="flex gap-2">
          <button
            @click="clearQuery"
            class="px-3 py-2 rounded-md border border-slate-200 bg-white text-sm"
          >
            Clear
          </button>
          <button
            @click="printPage"
            class="px-3 py-2 rounded-md border border-emerald-600 bg-emerald-50 text-emerald-700 text-sm"
          >
            Print
          </button>
        </div>
      </div>
    </header>

    <section class="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-6">
      <aside class="col-span-1 md:col-span-1">
        <div
          class="sticky top-6 rounded-2xl border border-slate-100 bg-white p-4 shadow-sm"
        >
          <h3 class="text-sm font-semibold mb-3">Filter</h3>
          <ul class="text-sm space-y-2">
            <li class="flex items-center justify-between">
              <span>Public</span
              ><span class="text-xs text-slate-500">{{ stats.public }}</span>
            </li>
            <li class="flex items-center justify-between">
              <span>Draft</span
              ><span class="text-xs text-slate-500">{{ stats.drafts }}</span>
            </li>
            <li class="flex items-center justify-between">
              <span>Routes</span
              ><span class="text-xs text-slate-500">{{ stats.routes }}</span>
            </li>
          </ul>

          <div class="mt-4 border-t pt-4">
            <h4 class="text-xs font-medium text-slate-600">Sitemap stats</h4>
            <dl class="mt-2 text-sm text-slate-600">
              <div class="flex justify-between">
                <dt>Top-level</dt>
                <dd>{{ sections.length }}</dd>
              </div>
              <div class="flex justify-between">
                <dt>Pages</dt>
                <dd>{{ totalPages }}</dd>
              </div>
              <div class="flex justify-between">
                <dt>Generated</dt>
                <dd>{{ generatedAt }}</dd>
              </div>
            </dl>
          </div>
        </div>
      </aside>

      <main class="col-span-1 md:col-span-3">
        <div class="rounded-2xl bg-white p-6 shadow">
          <h2 class="text-lg font-semibold mb-4">Page structure</h2>

          <div class="space-y-4">
            <article
              v-for="(s, idx) in filteredSections"
              :key="s.key"
              class="border rounded-xl p-4 shadow-sm"
            >
              <div class="flex items-start justify-between">
                <div>
                  <h3 class="text-md font-semibold">{{ s.title }}</h3>
                  <p class="text-sm text-slate-500">{{ s.description }}</p>
                </div>

                <div class="flex items-center gap-2">
                  <span class="text-xs text-slate-400 mr-2"
                    >{{ s.children.length }} pages</span
                  >
                  <button
                    @click="toggle(s.key)"
                    class="rounded-full p-2 hover:bg-slate-50"
                    :aria-expanded="openMap[s.key] ? 'true' : 'false'"
                    :aria-controls="`section-${s.key}`"
                  >
                    <svg
                      v-if="openMap[s.key]"
                      class="w-4 h-4"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                    >
                      <path
                        d="M6 15l6-6 6 6"
                        stroke-width="1.5"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                    </svg>
                    <svg
                      v-else
                      class="w-4 h-4"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                    >
                      <path
                        d="M6 9l6 6 6-6"
                        stroke-width="1.5"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                    </svg>
                  </button>
                </div>
              </div>

              <transition name="fade">
                <div
                  v-show="openMap[s.key]"
                  class="mt-4 border-t pt-4"
                  :id="`section-${s.key}`"
                >
                  <ul class="space-y-2">
                    <li
                      v-for="child in s.children"
                      :key="child.path"
                      class="flex items-center justify-between"
                    >
                      <div>
                        <a
                          :href="child.path"
                          class="font-medium text-emerald-600 hover:underline"
                          :aria-label="`Open ${child.title}`"
                          >{{ child.title }}</a
                        >
                        <div class="text-xs text-slate-500">
                          {{ child.path
                          }}<span v-if="child.note"> · {{ child.note }}</span>
                        </div>
                      </div>
                      <div class="text-xs text-slate-400">{{ child.type }}</div>
                    </li>
                  </ul>
                </div>
              </transition>
            </article>

            <div
              v-if="filteredSections.length === 0"
              class="text-center text-slate-500 py-8"
            >
              Tidak ada halaman yang cocok. Coba kata kunci lain.
            </div>
          </div>
        </div>
      </main>
    </section>

    <footer class="max-w-6xl mx-auto mt-8 text-sm text-slate-500">
      Generated for: IATTA style prototype · {{ generatedAt }}
    </footer>
  </main>
</template>

<script setup>
import { ref, computed, onMounted, reactive } from "vue";

const query = ref("");
const openMap = reactive({});

// canonical page list as requested by product team (clean, ordered)
const sections = ref([
  {
    key: "home",
    title: "Home",
    description:
      "Prioritas IATTA, Pemangku Kepentingan, Program Unggulan, Berita & Pengumuman",
    children: [
      {
        title: "Prioritas IATTA",
        path: "/#prioritas",
        type: "anchor",
        note: "Hero lead-in",
      },
      { title: "Pemangku Kepentingan", path: "/stakeholders", type: "page" },
      { title: "Program Unggulan", path: "/programs", type: "page" },
      { title: "Berita & Pengumuman", path: "/news", type: "page" },
    ],
  },
  {
    key: "about",
    title: "About",
    description:
      "Sejarah, Profil Organisasi, Visi & Misi, Struktur Dewan Pengurus Pusat",
    children: [
      { title: "Sejarah", path: "/about/history", type: "page" },
      { title: "Profil Organisasi", path: "/about/profile", type: "page" },
      { title: "Visi & Misi", path: "/about/vision-mission", type: "page" },
      {
        title: "Struktur Dewan Pengurus Pusat",
        path: "/about/board-structure",
        type: "page",
      },
    ],
  },
  {
    key: "membership",
    title: "Membership",
    description: "Under Construction",
    children: [
      {
        title: "Membership (Under Construction)",
        path: "/membership",
        type: "page",
        note: "Under Construction",
      },
    ],
  },
  {
    key: "resources",
    title: "Resources",
    description: "Guides, safety, downloads, references",
    children: [
      { title: "Resources (index)", path: "/resources", type: "page" },
    ],
  },
  {
    key: "contact",
    title: "Contact",
    description: "Hubungi Kami, Detail Kontak, Maps",
    children: [
      { title: "Hubungi Kami", path: "/contact", type: "page" },
      { title: "Detail Kontak", path: "/contact/details", type: "page" },
      {
        title: "Maps",
        path: "/contact/maps",
        type: "page",
        note: "Embed/iframe",
      },
    ],
  },
]);

// compute totals first
const totalPages = computed(() =>
  sections.value.reduce((acc, s) => acc + (s.children?.length || 0), 0)
);

// stats derived from current sections/pages (reactive)
const stats = computed(() => ({
  public: sections.value.length,
  drafts: 0,
  routes: totalPages.value,
}));

const generatedAt = new Date().toLocaleDateString();

const filteredSections = computed(() => {
  const q = query.value.trim().toLowerCase();
  if (!q) return sections.value;
  return sections.value
    .map((s) => ({ ...s, children: s.children.filter((c) => matchNode(c, q)) }))
    .filter((s) => matchNode(s, q) || (s.children && s.children.length));
});

function matchNode(n, q) {
  if (!q) return true;
  return (
    (n.title && n.title.toLowerCase().includes(q)) ||
    (n.path && n.path.toLowerCase().includes(q)) ||
    (n.type && n.type.toLowerCase().includes(q)) ||
    (n.note && n.note.toLowerCase().includes(q))
  );
}

function toggle(key) {
  openMap[key] = !openMap[key];
}

function clearQuery() {
  query.value = "";
}

function printPage() {
  window.print();
}

function exportCsv() {
  const rows = [];
  sections.value.forEach((s) => {
    s.children.forEach((c) =>
      rows.push([s.key, s.title, c.title, c.path, c.type, c.note || ""])
    );
  });
  const csv =
    "SectionKey,SectionTitle,PageTitle,Path,Type,Note\n" +
    rows
      .map((r) =>
        r.map((cell) => `"${String(cell).replace(/"/g, '""')}"`).join(",")
      )
      .join("\n");
  const blob = new Blob([csv], { type: "text/csv;charset=utf-8;" });
  const url = URL.createObjectURL(blob);
  const a = document.createElement("a");
  a.href = url;
  a.download = "iatta-sitemap.csv";
  a.click();
  URL.revokeObjectURL(url);
}

function downloadXml() {
  const urls = [];
  const now = new Date().toISOString();
  const origin =
    typeof window !== "undefined" && window.location && window.location.origin
      ? window.location.origin
      : "";
  sections.value.forEach((s) =>
    s.children.forEach((c) =>
      urls.push({ loc: origin + c.path, lastmod: now, priority: "0.5" })
    )
  );
  const xml = `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${urls
    .map(
      (u) =>
        `  <url>\n    <loc>${u.loc}</loc>\n    <lastmod>${u.lastmod}</lastmod>\n    <priority>${u.priority}</priority>\n  </url>`
    )
    .join("\n")}\n</urlset>`;
  const blob = new Blob([xml], { type: "application/xml" });
  const url = URL.createObjectURL(blob);
  const a = document.createElement("a");
  a.href = url;
  a.download = "sitemap.xml";
  a.click();
  URL.revokeObjectURL(url);
}

onMounted(() => {
  // open first section by default; stable by key
  sections.value.forEach((s, i) => {
    openMap[s.key] = i === 0;
  });
});
</script>

<style scoped>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.18s ease;
}
.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
main {
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
button:focus {
  outline: 2px solid rgba(16, 185, 129, 0.14);
  outline-offset: 2px;
}

@media (max-width: 640px) {
  .logo-img {
    max-height: 3.25rem;
  }
}
</style>
