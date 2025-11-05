<template>
  <main class="min-h-screen bg-white text-slate-900">
    <section class="bg-gradient-to-r from-[#f8fafc] via-[#fef9ec] to-white py-12 shadow-sm">
      <div class="max-w-6xl mx-auto px-6 lg:px-8">
        <div class="flex items-center justify-between gap-6">
          <div>
            <h1 class="text-4xl lg:text-5xl font-extrabold text-[#08a4ef]">ABOUT IATTA</h1>
            <p class="mt-3 text-slate-600 max-w-2xl">Profil organisasi, visi misi, tata nilai, struktur organisasi, dan kontak. Disajikan dengan layout modern, aksesibel, dan fokus pada clarity-to-action.</p>
          </div>

          <nav class="hidden md:flex gap-3 items-center">
            <a href="#profile" class="text-sm px-3 py-2 rounded-lg hover:bg-[#fcb243]/10 transition">Organizational Profile</a>
            <a href="#vision" class="text-sm px-3 py-2 rounded-lg hover:bg-[#d5e018]/10 transition">Vision & Mission</a>
            <a href="#values" class="text-sm px-3 py-2 rounded-lg hover:bg-[#08a4ef]/10 transition">Values</a>
            <a href="#board" class="text-sm px-3 py-2 rounded-lg hover:bg-[#fcb243]/10 transition">Board & Management</a>
            <a href="#contacts" class="text-sm px-3 py-2 rounded-lg hover:bg-[#d5e018]/10 transition">Contacts</a>
          </nav>
        </div>
      </div>
    </section>

    <section id="profile" class="max-w-6xl mx-auto px-6 lg:px-8 py-12">
      <div class="grid lg:grid-cols-3 gap-8 items-start">
        <div class="lg:col-span-2">
          <h2 class="text-2xl font-bold text-[#08a4ef]">1. Organizational Profile</h2>
          <p class="mt-4 text-slate-700 leading-relaxed">IATTA (Indonesian Adventures & Travel Trade Association) adalah asosiasi profesional yang bergerak di bidang pengembangan pariwisata berbasis komunitas, konservasi, dan pelatihan pemandu. Kami mengkonsolidasikan pemangku kepentingan, operator, dan praktisi untuk menciptakan ekosistem wisata yang berkelanjutan dan berdaya.</p>

          <div class="mt-6 grid sm:grid-cols-2 gap-4">
            <div class="p-4 rounded-lg border border-slate-100 shadow-sm">
              <h4 class="text-sm font-semibold text-[#fcb243]">Established</h4>
              <p class="mt-1 text-sm text-slate-600">2018</p>
            </div>
            <div class="p-4 rounded-lg border border-slate-100 shadow-sm">
              <h4 class="text-sm font-semibold text-[#d5e018]">Membership</h4>
              <p class="mt-1 text-sm text-slate-600">Open to tour operators, guides, and heritage custodians</p>
            </div>
          </div>
        </div>

        <aside class="hidden lg:block p-6 rounded-lg bg-gradient-to-b from-[#fef9ec] to-white border border-slate-100 shadow-md">
          <h3 class="text-sm font-semibold text-slate-700">Quick Facts</h3>
          <ul class="mt-4 space-y-3 text-sm text-slate-600">
            <li><span class="font-medium text-slate-800">Reach:</span> 34 provinces</li>
            <li><span class="font-medium text-slate-800">Programs:</span> Training, Certification, Community Projects</li>
            <li><span class="font-medium text-slate-800">Partnerships:</span> NGOs, Ministries, Local Gov</li>
          </ul>
        </aside>
      </div>
    </section>

    <section id="vision" class="bg-[#f8fafc] py-12">
      <div class="max-w-6xl mx-auto px-6 lg:px-8">
        <h2 class="text-2xl font-bold text-[#08a4ef]">2. Vision, Mission, and Goals</h2>
        <div class="mt-6 grid md:grid-cols-3 gap-6">
          <div class="p-6 rounded-lg bg-white border border-slate-100 shadow-sm">
            <h4 class="font-semibold text-slate-800">Vision</h4>
            <p class="mt-2 text-slate-600 text-sm">To be the national catalyst for sustainable, community-empowered tourism across Indonesia.</p>
          </div>

          <div class="p-6 rounded-lg bg-white border border-slate-100 shadow-sm">
            <h4 class="font-semibold text-slate-800">Mission</h4>
            <ul class="mt-2 text-slate-600 text-sm space-y-2 list-disc list-inside">
              <li>Enable skills development for local tourism professionals.</li>
              <li>Promote conservation-led tourism models.</li>
              <li>Foster partnerships with stakeholders for inclusive growth.</li>
            </ul>
          </div>

          <div class="p-6 rounded-lg bg-white border border-slate-100 shadow-sm">
            <h4 class="font-semibold text-slate-800">Strategic Goals</h4>
            <ol class="mt-2 text-slate-600 text-sm list-decimal list-inside space-y-2">
              <li>Certification of 1,000 local guides by 2026.</li>
              <li>Operationalize 50 community tourism pilots.</li>
              <li>Reduce carbon footprint from partner operations by 20%.</li>
            </ol>
          </div>
        </div>
      </div>
    </section>

    <section id="values" class="max-w-6xl mx-auto px-6 lg:px-8 py-12">
      <h2 class="text-2xl font-bold text-[#08a4ef]">3. Values &amp; Code of Ethics</h2>

      <div class="mt-6 grid md:grid-cols-2 gap-6">
        <div class="p-6 rounded-lg bg-white border border-slate-100 shadow-sm">
          <h4 class="font-semibold">Core Values</h4>
          <ul class="mt-4 space-y-3 text-sm text-slate-600">
            <li><span class="font-medium text-[#fcb243]">Sustainability</span> — long-term environmental stewardship</li>
            <li><span class="font-medium text-[#d5e018]">Community</span> — local leadership and benefit-sharing</li>
            <li><span class="font-medium text-[#08a4ef]">Integrity</span> — transparency and accountability</li>
          </ul>
        </div>

        <div class="p-6 rounded-lg bg-white border border-slate-100 shadow-sm">
          <h4 class="font-semibold">Code of Ethics (headlines)</h4>
          <ol class="mt-4 list-decimal list-inside text-sm text-slate-600 space-y-2">
            <li>Treat all communities with respect and seek consent for activities.</li>
            <li>Ensure safety and dignity for guests and hosts alike.</li>
            <li>Commit to sustainable resource use and minimize footprint.</li>
            <li>Report transparently on financials related to community projects.</li>
          </ol>
        </div>
      </div>
    </section>

    <section id="board" class="bg-[#f8fafc] py-12">
      <div class="max-w-6xl mx-auto px-6 lg:px-8">
        <h2 class="text-2xl font-bold text-[#08a4ef]">4. Board &amp; Management</h2>

        <div class="mt-6 grid lg:grid-cols-3 gap-6 items-start">
          <div class="lg:col-span-2">
            <p class="text-slate-600">Struktur organisasi kami mengkombinasikan Dewan Pengarah, Tim Eksekutif, dan Unit Operasional yang berfokus pada program lapangan, pelatihan, dan dampak komunitas.</p>

            <!-- simple org chart -->
            <div class="mt-6 p-6 rounded-lg bg-white border border-slate-100 shadow-sm">
              <svg viewBox="0 0 900 320" class="w-full h-auto" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Organizational structure">
                <!-- Board -->
                <g>
                  <rect x="330" y="10" rx="8" ry="8" width="240" height="48" fill="#08a4ef" opacity="0.95" />
                  <text x="450" y="40" fill="#fff" font-size="14" font-weight="700" text-anchor="middle">Board of Directors</text>
                </g>

                <!-- Executive -->
                <g>
                  <rect x="110" y="90" rx="8" ry="8" width="200" height="44" fill="#fcb243" opacity="0.95" />
                  <text x="210" y="118" fill="#05231a" font-size="13" font-weight="700" text-anchor="middle">CEO / Executive Director</text>

                  <rect x="360" y="90" rx="8" ry="8" width="180" height="44" fill="#d5e018" opacity="0.95" />
                  <text x="450" y="118" fill="#05231a" font-size="13" font-weight="700" text-anchor="middle">Programs</text>

                  <rect x="560" y="90" rx="8" ry="8" width="220" height="44" fill="#08a4ef" opacity="0.95" />
                  <text x="670" y="118" fill="#fff" font-size="13" font-weight="700" text-anchor="middle">Partnerships & Ops</text>
                </g>

                <!-- lines -->
                <g stroke="#cbd5e1" stroke-width="2" fill="none">
                  <path d="M450 58 L450 90" />
                  <path d="M210 134 L210 188" />
                  <path d="M450 134 L450 188" />
                  <path d="M670 134 L670 188" />
                </g>

                <!-- lower level labels -->
                <g>
                  <rect x="90" y="190" rx="6" ry="6" width="180" height="40" fill="#fff" stroke="#e6eef6" />
                  <text x="180" y="218" fill="#0f172a" font-size="12" text-anchor="middle">Field Operations</text>

                  <rect x="330" y="190" rx="6" ry="6" width="240" height="40" fill="#fff" stroke="#e6eef6" />
                  <text x="450" y="218" fill="#0f172a" font-size="12" text-anchor="middle">Training & Certification</text>

                  <rect x="600" y="190" rx="6" ry="6" width="180" height="40" fill="#fff" stroke="#e6eef6" />
                  <text x="690" y="218" fill="#0f172a" font-size="12" text-anchor="middle">Research & Insights</text>
                </g>

              </svg>
            </div>

          </div>

          <aside class="p-6 rounded-lg bg-white border border-slate-100 shadow-sm">
            <h4 class="text-lg font-semibold">Executive Team</h4>
            <ul class="mt-4 space-y-3 text-sm text-slate-600">
              <li><span class="font-medium text-slate-800">CEO:</span> Dr. Anita Rahim</li>
              <li><span class="font-medium text-slate-800">Head Programs:</span> Bayu Santoso</li>
              <li><span class="font-medium text-slate-800">Head Partnerships:</span> Lila Pranata</li>
            </ul>
          </aside>
        </div>
      </div>
    </section>

    <section id="contacts" class="max-w-6xl mx-auto px-6 lg:px-8 py-12">
      <h2 class="text-2xl font-bold text-[#08a4ef]">5. Contacts &amp; Secretariat</h2>

      <div class="mt-6 grid md:grid-cols-3 gap-6 items-start">
        <div class="p-6 rounded-lg bg-white border border-slate-100 shadow-sm">
          <h4 class="font-semibold">Secretariat</h4>
          <p class="mt-2 text-sm text-slate-600">Jl. Merdeka No. 77, Jakarta</p>
          <p class="mt-1 text-sm text-slate-600">Email: <a href="mailto:info@iattaplus.id" class="text-[#08a4ef]">info@iattaplus.id</a></p>
          <p class="mt-1 text-sm text-slate-600">Phone: +62 21 555 1234</p>
        </div>

        <div class="p-6 rounded-lg bg-white border border-slate-100 shadow-sm">
          <h4 class="font-semibold">Partnerships</h4>
          <p class="mt-2 text-sm text-slate-600">Partnerships & CSR inquiries:</p>
          <p class="mt-2 text-sm"><a href="mailto:partnerships@iattaplus.id" class="text-[#08a4ef]">partnerships@iattaplus.id</a></p>
        </div>

        <div class="p-6 rounded-lg bg-white border border-slate-100 shadow-sm">
          <h4 class="font-semibold">Media & Communications</h4>
          <p class="mt-2 text-sm text-slate-600">Press kit, interviews, and media collaborations:</p>
          <p class="mt-2 text-sm"><a href="mailto:press@iattaplus.id" class="text-[#08a4ef]">press@iattaplus.id</a></p>
        </div>
      </div>

      <div class="mt-8 p-6 rounded-lg border border-slate-100 bg-white shadow-sm">
        <h4 class="font-semibold">Follow Us</h4>
        <div class="mt-4 flex gap-4">
          <a href="#" class="inline-flex items-center gap-2 px-3 py-2 rounded-md border border-slate-100 hover:bg-[#fcb243]/10 transition"><svg class="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor"><path d="M22 12c0 5.523-4.477 10-10 10S2 17.523 2 12 6.477 2 12 2s10 4.477 10 10z"/></svg> Instagram</a>
          <a href="#" class="inline-flex items-center gap-2 px-3 py-2 rounded-md border border-slate-100 hover:bg-[#08a4ef]/10 transition">Twitter</a>
          <a href="#" class="inline-flex items-center gap-2 px-3 py-2 rounded-md border border-slate-100 hover:bg-[#d5e018]/10 transition">LinkedIn</a>
        </div>
      </div>
    </section>

    <footer class="border-t border-slate-100 mt-12 py-6 bg-white">
      <div class="max-w-6xl mx-auto px-6 lg:px-8 text-sm text-slate-500">© IATTA • All rights reserved</div>
    </footer>
  </main>
</template>

<script setup>
definePageMeta({
  layout: 'LandingPage'
})
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
a:focus { outline: 3px solid rgba(8,164,239,0.14); outline-offset: 3px; }

/* Small utility: subtle card hover */
.p-6:hover { transform: translateY(-4px); transition: transform .28s ease; }

/* Accessibility: reduce motion preference */
@media (prefers-reduced-motion: reduce) {
  main > section { animation: none; }
  .p-6:hover { transform: none; }
}
</style>
