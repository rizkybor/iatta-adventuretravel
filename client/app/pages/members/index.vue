<template>
  <main class="min-h-screen text-slate-900">
    <!-- Hero -->
    <section class="bg-gradient-to-b from-[#fef9ec] to-white border border-slate-100 py-10 rounded-xl">
      <div class="max-w-6xl mx-auto px-6 lg:px-8">
        <div class="flex flex-col md:flex-row items-start justify-between gap-6">
          <div>
            <h1 class="text-xl lg:text-2xl font-extrabold text-[#000000]">KEANGGOTAAN IATTA</h1>
            <p class="mt-2 text-slate-600 max-w-2xl">Bergabunglah dengan ekosistem: akses standar, alat, dan jaringan yang mempercepat dampak pariwisata berkelanjutan.</p>
          </div>

          <!-- <div class="flex gap-3">
            <button @click="openRegister = true" class="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-[#08a4ef] text-white">Daftar Online</button>
            <button @click="showLogin = true" class="inline-flex items-center gap-2 px-4 py-2 rounded-lg border border-slate-200">Login Dewan Regional</button>
          </div> -->
        </div>
      </div>
    </section>

    <!-- Why Join / Benefits -->
    <section id="why-join" class="max-w-6xl mx-auto px-6 lg:px-8 py-12">
      <div class="grid md:grid-cols-2 gap-8">
        <div>
          <h2 class="text-2xl font-semibold text-[#fcb243]">1. Mengapa Bergabung?</h2>
          <ul class="mt-4 list-disc list-inside text-slate-700 space-y-2">
            <li>Reputasi melalui sertifikasi dan kepatuhan kode anggota.</li>
            <li>Akses ke jaringan DPW regional dan toolkit SOP lokal.</li>
            <li>Peningkatan kapasitas: cohort pelatihan dan eksposur pasar.</li>
            <li>Akses pasar dan fasilitasi kemitraan.</li>
          </ul>
        </div>

        <div>
          <h2 class="text-2xl font-semibold text-[#d5e018]">3. Manfaat Anggota</h2>
          <ul class="mt-4 list-disc list-inside text-slate-700 space-y-2">
            <li>Unduhan eksklusif: SOP, template, checklist sertifikasi.</li>
            <li>Prioritas pendaftaran ke program pelatihan dan sertifikasi.</li>
            <li>Listing di direktori IATTA dan materi pemasaran.</li>
            <li>Acara khusus anggota dan peluang hibah.</li>
          </ul>
        </div>
      </div>
    </section>

    <!-- Categories & Fees -->
    <section id="categories" class=" py-12">
      <div class="max-w-6xl mx-auto px-6 lg:px-8">
        <h2 class="text-2xl font-semibold text-[#08a4ef]">2. Kategori Keanggotaan & Kriteria</h2>
        <p class="mt-3 text-slate-600">Kategori yang jelas untuk menyederhanakan onboarding dan alokasi manfaat.</p>
        <div class="mt-6 overflow-x-auto">
          <table class="w-full table-auto bg-white border border-slate-100 rounded-lg shadow-sm">
            <thead class="bg-[#fef9ec]">
              <tr class="text-left text-sm text-slate-700">
                <th class="px-4 py-3">Kategori</th>
                <th class="px-4 py-3">Kriteria</th>
                <th class="px-4 py-3">Contoh Anggota</th>
              </tr>
            </thead>
            <tbody class="text-sm text-slate-700">
              <tr class="border-t">
                <td class="px-4 py-3 font-medium">Corporate Member</td>
                <td class="px-4 py-3">Operator yang terdaftar, >5 karyawan, portofolio program</td>
                <td class="px-4 py-3">Operator B2B, DMC</td>
              </tr>
              <tr class="border-t">
                <td class="px-4 py-3 font-medium">Associate Member</td>
                <td class="px-4 py-3">UKM, koperasi, kelompok komunitas</td>
                <td class="px-4 py-3">Pemandu lokal, UKM</td>
              </tr>
              <tr class="border-t">
                <td class="px-4 py-3 font-medium">Individual Member</td>
                <td class="px-4 py-3">Pemandu tersertifikasi, praktisi</td>
                <td class="px-4 py-3">Pemandu, peneliti</td>
              </tr>
            </tbody>
          </table>
        </div>

        <div class="mt-8 grid md:grid-cols-2 gap-6">
          <div class="p-6 bg-white border border-gray-200 rounded-lg">
            <h4 class="font-semibold">4. Biaya Keanggotaan (Indicative)</h4>
            <ul class="mt-3 text-slate-700 list-inside list-disc">
              <li>Corporate: IDR 8.000.000 / tahun</li>
              <li>Associate: IDR 2.500.000 / tahun</li>
              <li>Individual: IDR 350.000 / tahun</li>
            </ul>
            <p class="mt-3 text-xs text-slate-500">*Biaya final mengikuti keputusan Dewan. Diskon tersedia untuk komitmen multi-tahun dan koperasi komunitas.</p>
          </div>

          <div class="p-6 bg-white border border-gray-200 rounded-lg">
            <h4 class="font-semibold">Value Proposition</h4>
            <p class="mt-2 text-slate-700 text-sm">Penerimaan iuran mendanai sertifikasi, dukungan regional, dan layanan anggota—memastikan keberlanjutan operasional dan kontinuitas program.</p>
          </div>
        </div>
      </div>
    </section>

    <!-- Registration Process & Form -->
    <section id="registration" class="max-w-6xl mx-auto px-6 lg:px-8 py-12">
      <h2 class="text-2xl font-semibold text-[#fcb243]">5. Proses Pendaftaran</h2>
      <ol class="mt-4 list-decimal list-inside text-slate-700 space-y-3">
        <li>Baca kategori & pilih tipe keanggotaan yang sesuai.</li>
        <li>Isi formulir pendaftaran online dengan dokumen pendukung.</li>
        <li>Review oleh Komite Keanggotaan (3–7 hari kerja).</li>
        <li>Terima invoice & lakukan pembayaran — onboarding dan listing direktori.</li>
      </ol>

      <div class="mt-8 grid lg:grid-cols-2 gap-8">
        <div>
          <h3 class="text-lg font-semibold text-slate-800">6. Formulir Pendaftaran Online</h3>
          <p class="mt-2 text-sm text-slate-600">Isi formulir — kolom wajib ditandai dengan tanda bintang.</p>
          <form @submit.prevent="submitRegistration" class="mt-4 space-y-4 bg-white p-6 rounded-lg shadow-sm">
            <div class="grid md:grid-cols-2 gap-4">
              <label class="block">
                <span class="text-sm text-slate-700">Nama Lengkap <span class="text-red-500">*</span></span>
                <input v-model="form.fullName" required class="mt-1 w-full rounded-md border border-gray-200 px-3 py-2 text-sm" />
              </label>

              <label class="block">
                <span class="text-sm text-slate-700">Email <span class="text-red-500">*</span></span>
                <input v-model="form.email" type="email" required class="mt-1 w-full rounded-md border border-gray-200 px-3 py-2 text-sm" />
              </label>
            </div>

            <label class="block">
              <span class="text-sm text-slate-700">Organisasi / Perusahaan</span>
              <input v-model="form.organization" class="mt-1 w-full rounded-md border border-gray-200 px-3 py-2 text-sm" />
            </label>

            <div class="grid md:grid-cols-2 gap-4">
              <label class="block">
                <span class="text-sm text-slate-700">Kategori Keanggotaan <span class="text-red-500">*</span></span>
                <select v-model="form.category" required class="mt-1 w-full rounded-md border border-gray-200 px-3 py-2 text-sm">
                  <option value="Corporate">Corporate</option>
                  <option value="Associate">Associate</option>
                  <option value="Individual">Individual</option>
                </select>
              </label>

              <label class="block">
                <span class="text-sm text-slate-700">Telepon</span>
                <input v-model="form.phone" class="mt-1 w-full rounded-md border border-gray-200 px-3 py-2 text-sm" />
              </label>
            </div>

            <label class="block">
              <span class="text-sm text-slate-700">Dokumen Pendukung (unggah)</span>
              <input ref="fileInput" @change="onFileChange" type="file" class="mt-1 w-full text-sm" />
              <p v-if="form.fileName" class="text-xs text-slate-500 mt-2">Dipilih: {{ form.fileName }}</p>
            </label>

            <div class="flex items-center gap-3">
              <button type="submit" class="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-emerald-500 text-white">Kirim Pendaftaran</button>
              <button type="button" @click="resetForm" class="px-4 py-2 rounded-lg border bg-white border-gray-200">Reset</button>
            </div>

            <p v-if="registrationMessage" class="text-sm text-green-600">{{ registrationMessage }}</p>
          </form>
        </div>

        <aside>
          <h3 class="text-lg font-semibold text-slate-800">7. Area Dewan Regional (DPW)</h3>
          <p class="mt-2 text-sm text-slate-600">Direktori DPW dan sumber daya anggota (login diperlukan).</p>

          <div class="mt-4 space-y-3">
            <button @click="showLogin = true" class="w-full text-left px-4 py-3 rounded-lg border border-gray-200 bg-white">Direktori DPW (Login)</button>
            <a class="block px-4 py-3 rounded-lg border border-gray-200 bg-white" href="#">Unduh SOP & Toolkit</a>
            <a class="block px-4 py-3 rounded-lg border border-gray-200 bg-white" href="#">Kode Etik Anggota</a>
            <a class="block px-4 py-3 rounded-lg border border-gray-200 bg-white" href="#">Update Sertifikasi & Legalitas</a>
          </div>
        </aside>
      </div>
    </section>

    <!-- DPW Directory Modal / Login -->
    <transition name="modal">
      <div v-if="showLogin" class="fixed inset-0 z-50 flex items-center justify-center bg-black/40">
        <div class="w-full max-w-md bg-white rounded-lg p-6">
          <h3 class="text-lg font-semibold">Login Dewan Regional (DPW)</h3>
          <p class="text-sm text-slate-600">Masukkan kredensial untuk mengakses direktori DPW dan unduhan khusus anggota.</p>

          <form @submit.prevent="onLogin" class="mt-4 space-y-4">
            <label class="block">
              <span class="text-sm text-slate-700">Username</span>
              <input v-model="login.username" required class="mt-1 w-full rounded-md border px-3 py-2 text-sm" />
            </label>
            <label class="block">
              <span class="text-sm text-slate-700">Password</span>
              <input v-model="login.password" type="password" required class="mt-1 w-full rounded-md border px-3 py-2 text-sm" />
            </label>

            <div class="flex justify-end gap-3">
              <button type="button" @click="showLogin = false" class="px-4 py-2 rounded-lg border">Batal</button>
              <button type="submit" class="px-4 py-2 rounded-lg bg-[#08a4ef] text-white">Masuk</button>
            </div>

            <p v-if="loginMessage" class="text-sm text-red-600">{{ loginMessage }}</p>
            <p class="mt-2 text-xs text-slate-500">Masalah akses? Hubungi sekretariat: <a href="mailto:info@iatta.or.id" class="text-[#08a4ef]">info@iatta.or.id</a></p>
          </form>
        </div>
      </div>
    </transition>

    <!-- Registration Modal (info) -->
    <transition name="modal">
      <div v-if="openRegister" class="fixed inset-0 z-50 flex items-center justify-center bg-black/40">
        <div class="w-full max-w-2xl bg-white rounded-lg p-6">
          <h3 class="text-lg font-semibold">Pendaftaran Online</h3>
          <p class="text-sm text-slate-600">Gunakan formulir pendaftaran di halaman ini. Setelah direview, Komite Keanggotaan akan mengirim invoice via email.</p>

          <div class="mt-6 text-right">
            <button @click="openRegister = false" class="px-4 py-2 rounded-lg border">Tutup</button>
          </div>
        </div>
      </div>
    </transition>

  </main>
</template>

<script setup>
import { ref } from 'vue'

const showLogin = ref(false)
const openRegister = ref(false)
const registrationMessage = ref('')
const loginMessage = ref('')

const fileInput = ref(null)

const form = ref({
  fullName: '',
  email: '',
  organization: '',
  category: 'Individual',
  phone: '',
  file: null,
  fileName: ''
})

const login = ref({ username: '', password: '' })

function onFileChange(e) {
  const f = e.target.files && e.target.files[0]
  if (f) {
    form.value.file = f
    form.value.fileName = f.name
  } else {
    form.value.file = null
    form.value.fileName = ''
  }
}

function resetForm() {
  form.value = { fullName: '', email: '', organization: '', category: 'Individual', phone: '', file: null, fileName: '' }
  registrationMessage.value = ''
  if (fileInput.value) fileInput.value.value = null
}

async function submitRegistration() {
  // Mock submission — ganti dengan integrasi backend (FormData -> API)
  registrationMessage.value = 'Pendaftaran diterima. Komite akan meninjau dalam 3–7 hari kerja.'
  // UX: bersihkan form setelah jeda singkat
  setTimeout(() => resetForm(), 1200)
}

function onLogin() {
  // Mock auth untuk demo — integrasikan dengan sistem otentikasi DPW untuk produksi
  if (login.value.username === 'dpwadmin' && login.value.password === 'securepassword') {
    loginMessage.value = ''
    showLogin.value = false
    window.alert('Login berhasil — membuka Direktori DPW (placeholder).')
  } else {
    loginMessage.value = 'Kredensial tidak valid. Silakan hubungi sekretariat.'
  }
}

const year = new Date().getFullYear()
</script>

<style scoped>
/* Modal transition */
.modal-enter-active, .modal-leave-active { transition: opacity .18s ease; }
.modal-enter-from, .modal-leave-to { opacity: 0; }

/* subtle hover lifts */
button:hover { transform: translateY(-2px); transition: transform .18s ease; }

/* responsive tweaks */
@media (min-width: 1024px) {
  .max-w-6xl { max-width: 1100px; }
}

/* accessibility: focus visible */
input:focus, select:focus, button:focus, a:focus { outline: 3px solid rgba(8,164,239,0.12); outline-offset: 3px; border-radius: 6px; }

/* small polishing for table */
table th, table td { vertical-align: middle; }
</style>