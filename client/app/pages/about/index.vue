<template>
  <main class="min-h-screen text-slate-900">
    <!-- Hero / Header -->
    <section class="py-12 shadow-sm rounded-xl bg-gradient-to-b from-[#fef9ec] to-white border border-slate-100">
      <div class="max-w-6xl mx-auto px-6 lg:px-8">
        <div class="flex items-center justify-between gap-6">
          <div>
            <h1 class="text-xl lg:text-2xl font-extrabold text-[#232323]">TENTANG IATTA</h1>
            <p class="mt-3 text-slate-600 max-w-2xl">
              Profil organisasi, visi-misi, tata nilai, struktur, dan kontak resmi IATTA —
              disajikan secara ringkas, modern, dan mudah ditindaklanjuti.
            </p>
          </div>
        </div>
      </div>
    </section>

    <!-- PROFILE -->
    <section id="profile" class="max-w-6xl mx-auto px-6 lg:px-8 py-12">
      <div class="grid lg:grid-cols-3 gap-8 items-start">
        <div class="lg:col-span-2">
          <h2 class="text-2xl font-bold text-[#08a4ef]">1. Profil Organisasi</h2>
          <p class="mt-4 text-slate-700 leading-relaxed">
            IATTA (Indonesia Adventure Travel Trade Association) adalah asosiasi yang mendorong
            perkembangan wisata petualangan berkelanjutan di Indonesia. Kami memfasilitasi
            pelatihan, sertifikasi, riset, dan kolaborasi antar pemangku kepentingan
            untuk memperkuat ekosistem pariwisata lokal dan meningkatkan daya saing global.
          </p>

          <div class="mt-6 grid sm:grid-cols-2 gap-4">
            <div class="p-4 rounded-lg border border-slate-100 shadow-sm">
              <h4 class="text-sm font-semibold text-[#fcb243]">Didirikan</h4>
              <p class="mt-1 text-sm text-slate-600">2018</p>
            </div>
            <div class="p-4 rounded-lg border border-slate-100 shadow-sm">
              <h4 class="text-sm font-semibold text-[#d5e018]">Keanggotaan</h4>
              <p class="mt-1 text-sm text-slate-600">Terbuka untuk operator tur, pemandu, dan komunitas pelestari warisan</p>
            </div>
          </div>

          <div class="mt-8">
            <h3 class="text-lg font-semibold text-slate-800">Kepemimpinan</h3>
            <p class="mt-3 text-slate-700">
              Periode 2025–2029 dipimpin oleh <strong>Amalia Yunita</strong> sebagai Ketua Umum,
              melanjutkan program prioritas seperti sertifikasi pemandu, pemberdayaan komunitas, dan promosi berkelanjutan.
            </p>
          </div>
        </div>

        <aside class="hidden lg:block p-6 rounded-lg bg-gradient-to-b from-[#fef9ec] to-white border border-slate-100 shadow-md">
          <h3 class="text-sm font-semibold text-slate-700">Quick Facts</h3>
          <ul class="mt-4 space-y-3 text-sm text-slate-600">
            <li><span class="font-medium text-slate-800">Jangkauan:</span> 34 provinsi</li>
            <li><span class="font-medium text-slate-800">Program:</span> Pelatihan, Sertifikasi, Proyek Komunitas</li>
            <li><span class="font-medium text-slate-800">Kemitraan:</span> LSM, Kementerian, Pemerintah Daerah</li>
          </ul>
        </aside>
      </div>
    </section>

    <!-- VISION / MISSION -->
    <section id="vision" class="py-12">
      <div class="max-w-6xl mx-auto px-6 lg:px-8">
        <h2 class="text-2xl font-bold text-[#08a4ef]">2. Visi, Misi, dan Sasaran Strategis</h2>
        <div class="mt-6 grid md:grid-cols-3 gap-6">
          <div class="p-6 rounded-lg border border-slate-100 shadow-sm">
            <h4 class="font-semibold text-slate-800">Visi</h4>
            <p class="mt-2 text-slate-600 text-sm">Menjadikan Indonesia sebagai destinasi wisata petualangan terkemuka yang berkelanjutan dan memberdayakan komunitas lokal.</p>
          </div>

          <div class="p-6 rounded-lg border border-slate-100 shadow-sm">
            <h4 class="font-semibold text-slate-800">Misi</h4>
            <ul class="mt-2 text-slate-600 text-sm space-y-2 list-disc list-inside">
              <li>Meningkatkan kemampuan pelaku lokal lewat pelatihan dan sertifikasi.</li>
              <li>Mendorong praktik pariwisata yang melindungi lingkungan dan budaya.</li>
              <li>Membangun kemitraan lintas sektor untuk pertumbuhan inklusif.</li>
            </ul>
          </div>

          <div class="p-6 rounded-lg border border-slate-100 shadow-sm">
            <h4 class="font-semibold text-slate-800">Sasaran Strategis</h4>
            <ol class="mt-2 text-slate-600 text-sm list-decimal list-inside space-y-2">
              <li>Sertifikasi 1.000 pemandu lokal hingga 2026.</li>
              <li>Operationalisasi 50 pilot pariwisata komunitas.</li>
              <li>Pengurangan emisi operasi mitra sebesar 20%.</li>
            </ol>
          </div>
        </div>
      </div>
    </section>

    <!-- VALUES -->
    <section id="values" class="max-w-6xl mx-auto px-6 lg:px-8 py-12">
      <h2 class="text-2xl font-bold text-[#08a4ef]">3. Nilai & Kode Etik</h2>

      <div class="mt-6 grid md:grid-cols-2 gap-6">
        <div class="p-6 rounded-lg border border-slate-100 shadow-sm">
          <h4 class="font-semibold">Nilai Inti</h4>
          <ul class="mt-4 space-y-3 text-sm text-slate-600">
            <li><span class="font-medium text-[#fcb243]">Keberlanjutan</span> — komitmen jangka panjang terhadap lingkungan</li>
            <li><span class="font-medium text-[#d5e018]">Komunitas</span> — kepemimpinan lokal dan pembagian manfaat</li>
            <li><span class="font-medium text-[#08a4ef]">Integritas</span> — transparansi dan akuntabilitas</li>
          </ul>
        </div>

        <div class="p-6 rounded-lg border border-slate-100 shadow-sm">
          <h4 class="font-semibold">Kode Etik (ringkasan)</h4>
          <ol class="mt-4 list-decimal list-inside text-sm text-slate-600 space-y-2">
            <li>Hormati komunitas lokal dan dapatkan persetujuan untuk kegiatan.</li>
            <li>Pastikan keselamatan dan martabat bagi tamu dan tuan rumah.</li>
            <li>Gunakan sumber daya secara bertanggung jawab dan minimalkan dampak.</li>
            <li>Laporan keuangan proyek komunitas dilakukan secara transparan.</li>
          </ol>
        </div>
      </div>
    </section>

    <!-- BOARD & ORG -->
    <section id="board" class="py-12">
      <div class="max-w-6xl mx-auto px-6 lg:px-8">
        <h2 class="text-2xl font-bold text-[#08a4ef]">4. Dewan & Manajemen</h2>

        <div class="mt-6 grid lg:grid-cols-3 gap-6 items-start">
          <div class="lg:col-span-2">
            <p class="text-slate-600">Struktur organisasi menggabungkan Dewan Pengarah, Tim Eksekutif, dan unit operasional yang menjalankan program lapangan, pelatihan, serta riset.</p>

            <div class="mt-6 p-6 rounded-lg bg-white border border-slate-100 shadow-sm">
              <!-- responsive org chart SVG -->
              <svg viewBox="0 0 900 320" class="w-full h-auto" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Structure IATTA">
                <g>
                  <rect x="330" y="10" rx="8" ry="8" width="240" height="48" fill="#08a4ef" opacity="0.95" />
                  <text x="450" y="40" fill="#fff" font-size="14" font-weight="700" text-anchor="middle">Dewan Pengarah</text>
                </g>
                <g>
                  <rect x="110" y="90" rx="8" ry="8" width="200" height="44" fill="#fcb243" opacity="0.95" />
                  <text x="210" y="118" fill="#05231a" font-size="13" font-weight="700" text-anchor="middle">Direktur Eksekutif</text>

                  <rect x="360" y="90" rx="8" ry="8" width="180" height="44" fill="#d5e018" opacity="0.95" />
                  <text x="450" y="118" fill="#05231a" font-size="13" font-weight="700" text-anchor="middle">Program</text>

                  <rect x="560" y="90" rx="8" ry="8" width="220" height="44" fill="#08a4ef" opacity="0.95" />
                  <text x="670" y="118" fill="#fff" font-size="13" font-weight="700" text-anchor="middle">Kemitraan & Operasi</text>
                </g>
                <g stroke="#cbd5e1" stroke-width="2" fill="none">
                  <path d="M450 58 L450 90" />
                  <path d="M210 134 L210 188" />
                  <path d="M450 134 L450 188" />
                  <path d="M670 134 L670 188" />
                </g>
                <g>
                  <rect x="90" y="190" rx="6" ry="6" width="180" height="40" fill="#fff" stroke="#e6eef6" />
                  <text x="180" y="218" fill="#0f172a" font-size="12" text-anchor="middle">Operasi Lapangan</text>

                  <rect x="330" y="190" rx="6" ry="6" width="240" height="40" fill="#fff" stroke="#e6eef6" />
                  <text x="450" y="218" fill="#0f172a" font-size="12" text-anchor="middle">Pelatihan & Sertifikasi</text>

                  <rect x="600" y="190" rx="6" ry="6" width="180" height="40" fill="#fff" stroke="#e6eef6" />
                  <text x="690" y="218" fill="#0f172a" font-size="12" text-anchor="middle">Riset & Insight</text>
                </g>
              </svg>
            </div>
          </div>

          <aside class="p-6 rounded-lg bg-white border border-slate-100 shadow-sm">
            <h4 class="text-lg font-semibold">Tim Eksekutif</h4>
            <ul class="mt-4 space-y-3 text-sm text-slate-600">
              <li><span class="font-medium text-slate-800">Ketua Umum:</span> Amalia Yunita</li>
              <li><span class="font-medium text-slate-800">Direktur Eksekutif:</span> Dr. Anita Rahim</li>
              <li><span class="font-medium text-slate-800">Head Programs:</span> Bayu Santoso</li>
            </ul>
          </aside>
        </div>
      </div>
    </section>

   
  </main>
</template>

<script setup>
import { ref } from 'vue'
const year = new Date().getFullYear()
definePageMeta({ layout: 'LandingPage' })
</script>

<style scoped>
/* Subtle entrance animation for sections */
@keyframes liftIn {
  from { opacity: 0; transform: translateY(8px); }
  to { opacity: 1; transform: translateY(0); }
}
main > section { animation: liftIn .42s ease both; }

/* Make SVG org-chart responsive and crisp */
svg { max-width: 100%; height: auto; display: block; }

/* Focus styles for keyboard users */
a:focus { outline: 3px solid rgba(8,164,239,0.14); outline-offset: 3px; border-radius: 6px; }

/* Small utility: subtle card hover */
.p-6:hover { transform: translateY(-4px); transition: transform .28s ease; }

/* Accessibility: reduce motion preference */
@media (prefers-reduced-motion: reduce) {
  main > section { animation: none; }
  .p-6:hover { transform: none; }
}
</style>