<template>
  <section class="max-w-6xl px-4 py-6 lg:py-6">
    <div class="grid gap-8 lg:grid-cols-2 items-start">
      <!-- LEFT: form -->
      <div class="bg-white border border-slate-100 rounded-2xl p-6 shadow-md">
        <div class="mb-4">
          <h1 class="text-2xl lg:text-3xl font-extrabold text-[#000000]">
            Hubungi Kami
          </h1>
          <p class="mt-2 text-sm text-slate-600">
            Ada pertanyaan tentang keanggotaan, program, atau kolaborasi? Isi
            formulir di bawah — kami akan merespons dalam 3–5 hari kerja.
          </p>
        </div>

        <form @submit.prevent="handleSubmit" class="space-y-4" novalidate>
          <div class="grid grid-cols-1 md:grid-cols-2 gap-3">
            <label class="block">
              <span class="text-sm text-slate-700"
                >Nama Lengkap <span class="text-red-500">*</span></span
              >
              <input
                v-model="form.name"
                required
                type="text"
                class="mt-1 w-full rounded-md border border-gray-200 px-3 py-2 text-sm focus:ring-2 focus:ring-[#08a4ef]/30 focus:border-transparent"
                :aria-invalid="errors.name ? 'true' : 'false'"
              />
              <p v-if="errors.name" class="text-xs text-red-600 mt-1">
                {{ errors.name }}
              </p>
            </label>

            <label class="block">
              <span class="text-sm text-slate-700"
                >Email <span class="text-red-500">*</span></span
              >
              <input
                v-model="form.email"
                required
                type="email"
                class="mt-1 w-full rounded-md border border-gray-200 px-3 py-2 text-sm focus:ring-2 focus:ring-[#08a4ef]/30 focus:border-transparent"
                :aria-invalid="errors.email ? 'true' : 'false'"
              />
              <p v-if="errors.email" class="text-xs text-red-600 mt-1">
                {{ errors.email }}
              </p>
            </label>
          </div>

          <label class="block">
            <span class="text-sm text-slate-700">Kategori Pertanyaan</span>
            <select
              v-model="form.category"
              class="mt-1 w-full rounded-md border border-gray-200 px-3 py-2 text-sm"
            >
              <option value="">Pilih kategori (opsional)</option>
              <option>Keanggotaan</option>
              <option>Program & Pelatihan</option>
              <option>Partnership</option>
              <option>Media/Press</option>
              <option>Teknis Website</option>
            </select>
          </label>

          <label class="block">
            <span class="text-sm text-slate-700"
              >Subjek <span class="text-red-500">*</span></span
            >
            <input
              v-model="form.subject"
              required
              type="text"
              class="mt-1 w-full rounded-md border border-gray-200 px-3 py-2 text-sm focus:ring-2 focus:ring-[#08a4ef]/30 focus:border-transparent"
              :aria-invalid="errors.subject ? 'true' : 'false'"
            />
            <p v-if="errors.subject" class="text-xs text-red-600 mt-1">
              {{ errors.subject }}
            </p>
          </label>

          <label class="block">
            <span class="text-sm text-slate-700"
              >Pesan <span class="text-red-500">*</span></span
            >
            <textarea
              v-model="form.message"
              required
              rows="6"
              class="mt-1 w-full rounded-md border border-gray-200 px-3 py-2 text-sm focus:ring-2 focus:ring-[#08a4ef]/30 focus:border-transparent"
              :aria-invalid="errors.message ? 'true' : 'false'"
            ></textarea>
            <p v-if="errors.message" class="text-xs text-red-600 mt-1">
              {{ errors.message }}
            </p>
          </label>

          <label class="block">
            <span class="text-sm text-slate-700"
              >Lampiran (opsional) — pdf / jpg / png, max 5MB</span
            >
            <input
              ref="fileField"
              @change="onFileChange"
              type="file"
              accept=".pdf,image/*"
              class="mt-1 w-full text-sm"
            />
            <p v-if="form.fileName" class="text-xs text-slate-500 mt-1">
              Dipilih: {{ form.fileName }}
            </p>
            <p v-if="errors.file" class="text-xs text-red-600 mt-1">
              {{ errors.file }}
            </p>
          </label>

          <div class="flex items-center gap-3">
            <button
              :disabled="submitting"
              type="submit"
              class="inline-flex items-center gap-2 px-4 py-1 rounded-lg bg-emerald-500 text-white shadow hover:opacity-95 disabled:opacity-60"
            >
              <svg
                v-if="!submitting"
                class="w-4 h-4"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="1.5"
                stroke-linecap="round"
                stroke-linejoin="round"
                aria-hidden="true"
              >
                <path d="M22 2L11 13" />
                <path d="M22 2L15 22l-4-9-9-4 20-7z" />
              </svg>
              <span v-if="!submitting">Kirim Pesan</span>
              <span v-else>Mengirim...</span>
            </button>

            <button
              type="button"
              @click="resetForm"
              class="px-4 py-1 rounded-lg border border-slate-200 text-slate-700 hover:bg-amber-50 hover:border-amber-300 hover:text-amber-700 focus-visible:ring-2 focus-visible:ring-amber-200 transition-colors duration-200"
            >
              Reset
            </button>
          </div>

          <p v-if="statusMessage" :class="statusClass" class="text-sm mt-2">
            {{ statusMessage }}
          </p>
        </form>
      </div>

      <!-- RIGHT: contact details -->
      <aside class="space-y-6">
        <div class="p-6 rounded-2xl border border-slate-100 bg-white shadow-sm">
          <h3 class="text-lg font-semibold text-slate-800">Detail Kontak</h3>
          <ul class="mt-4 space-y-3 text-sm text-slate-700">
            <li>
              <span class="font-medium text-slate-800">Alamat:</span> Wisma
              Kemang 31, Jl. Kemang Raya No. 31 lt 3, Bangka, Mampang Prapatan,
              Jakarta Selatan
            </li>
            <li>
              <span class="font-medium text-slate-800">Email:</span>
              <a class="text-[#08a4ef]" href="mailto:info@iatta.or.id">
                info@iatta.or.id</a
              >
            </li>
            <li>
              <span class="font-medium text-slate-800">Amalia Yunita:</span> +62
              812-9491-388
            </li>
            <li>
              <span class="font-medium text-slate-800">Joni Kurniawan:</span>
              +62 812-6417-356
            </li>
            <li>
              <span class="font-medium text-slate-800">Zulham Peliang:</span>
              +62 815-1707-2423
            </li>
            <!-- <li>
              <span class="font-medium text-slate-800">Jam Operasional:</span>
              Senin–Jumat, 09:00–17:00 WIB
            </li> -->
          </ul>

          <div class="mt-4 flex flex-wrap gap-2">
            <a
              href="#"
              class="inline-flex items-center gap-2 px-3 py-2 rounded-md border border-gray-200 hover:bg-[#08a4ef]/6 text-sm"
            >
              <svg
                class="w-5 h-5"
                viewBox="0 0 24 24"
                fill="currentColor"
                aria-hidden="true"
              >
                <path
                  d="M7.75 2h8.5A5.75 5.75 0 0 1 22 7.75v8.5A5.75 5.75 0 0 1 16.25 22h-8.5A5.75 5.75 0 0 1 2 16.25v-8.5A5.75 5.75 0 0 1 7.75 2Zm0 1.5A4.25 4.25 0 0 0 3.5 7.75v8.5A4.25 4.25 0 0 0 7.75 20.5h8.5a4.25 4.25 0 0 0 4.25-4.25v-8.5A4.25 4.25 0 0 0 16.25 3.5h-8.5ZM12 7.25A4.75 4.75 0 1 1 7.25 12 4.75 4.75 0 0 1 12 7.25Zm0 1.5A3.25 3.25 0 1 0 15.25 12 3.25 3.25 0 0 0 12 8.75Zm5.5-.75a1 1 0 1 1-1-1 1 1 0 0 1 1 1Z"
                />
              </svg>
              Instagram
            </a>
            <!-- <a
                href="#"
                class="inline-flex items-center gap-2 px-3 py-2 rounded-md border hover:bg-[#08a4ef]/6 text-sm"
                >Twitter</a
              >
              <a
                href="#"
                class="inline-flex items-center gap-2 px-3 py-2 rounded-md border hover:bg-[#08a4ef]/6 text-sm"
                >LinkedIn</a
              > -->
          </div>
        </div>

        <!-- <div class="p-6 rounded-2xl border border-slate-100 bg-white shadow-sm">
            <h3 class="text-lg font-semibold text-slate-800">Kantor Regional</h3>
            <p class="mt-2 text-sm text-slate-600">Untuk permintaan regional dan DPW, gunakan login Dewan Regional pada halaman Keanggotaan.</p>
            <a class="inline-block mt-4 px-4 py-2 rounded-lg bg-[#fcb243] text-slate-900" href="/membership">Masuk ke Area DPW</a>
          </div> -->

        <div class="p-6 rounded-2xl border border-slate-100 bg-white shadow-sm">
          <h3 class="text-lg font-semibold text-slate-800">Peta Lokasi</h3>
          <div class="mt-3 w-full h-63 rounded-md overflow-hidden bg-slate-100">
            <!-- placeholder map: ganti dengan embed Google Maps / Leaflet sesuai kebutuhan -->
            <iframe
              title="IATTA Location"
              class="w-full h-full border-0"
              src="https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d3966.0637506503053!2d106.814285!3d-6.255332!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zNsKwMTUnMTkuMiJTIDEwNsKwNDgnNTEuNCJF!5e0!3m2!1sen!2sid!4v1762776520896!5m2!1sen!2sid"
              width="600"
              height="450"
              style="border: 0"
              allowfullscreen=""
              loading="lazy"
              referrerpolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>
      </aside>
    </div>
  </section>
</template>

<script setup>
import { ref, computed } from "vue";

/* reactive form state */
const form = ref({
  name: "",
  email: "",
  category: "",
  subject: "",
  message: "",
  file: null,
  fileName: "",
});

const errors = ref({});
const submitting = ref(false);
const statusMessage = ref("");
const statusType = ref(""); // 'success' | 'error'
const fileField = ref(null);

/* small helpers */
function validate() {
  errors.value = {};
  if (!form.value.name || form.value.name.trim().length < 2) {
    errors.value.name = "Masukkan nama lengkap (min. 2 karakter).";
  }
  if (!form.value.email || !/^\S+@\S+\.\S+$/.test(form.value.email)) {
    errors.value.email = "Masukkan alamat email yang valid.";
  }
  if (!form.value.subject || form.value.subject.trim().length < 3) {
    errors.value.subject = "Subjek minimal 3 karakter.";
  }
  if (!form.value.message || form.value.message.trim().length < 10) {
    errors.value.message = "Pesan minimal 10 karakter.";
  }
  if (form.value.file) {
    const maxBytes = 5 * 1024 * 1024;
    if (form.value.file.size > maxBytes) {
      errors.value.file = "Ukuran file maksimal 5MB.";
    }
    const allowed = ["application/pdf", "image/png", "image/jpeg", "image/jpg"];
    if (!allowed.includes(form.value.file.type)) {
      errors.value.file =
        "Jenis file tidak didukung. Gunakan pdf, png, atau jpg.";
    }
  }
  return Object.keys(errors.value).length === 0;
}

function onFileChange(e) {
  const f = e.target.files && e.target.files[0];
  if (f) {
    form.value.file = f;
    form.value.fileName = f.name;
  } else {
    form.value.file = null;
    form.value.fileName = "";
  }
}

/* status class binding */
const statusClass = computed(() => {
  return statusType.value === "success" ? "text-green-600" : "text-red-600";
});

function resetForm() {
  form.value = {
    name: "",
    email: "",
    category: "",
    subject: "",
    message: "",
    file: null,
    fileName: "",
  };
  errors.value = {};
  statusMessage.value = "";
  statusType.value = "";
  if (fileField.value) fileField.value.value = null;
}

/* handle submit (mock). Replace with API integration (FormData) */
async function handleSubmit() {
  statusMessage.value = "";
  statusType.value = "";
  if (!validate()) return;

  submitting.value = true;

  try {
    // Mock delay to simulate network
    await new Promise((r) => setTimeout(r, 1000));

    // Example of creating FormData if you later integrate:
    // const payload = new FormData()
    // payload.append('name', form.value.name)
    // payload.append('email', form.value.email)
    // payload.append('subject', form.value.subject)
    // payload.append('message', form.value.message)
    // if (form.value.file) payload.append('attachment', form.value.file)

    // TODO: fetch('/api/contact', { method:'POST', body: payload })

    statusType.value = "success";
    statusMessage.value =
      "Pesan berhasil dikirim. Tim kami akan menghubungi Anda dalam 3–5 hari kerja.";
    resetForm();
  } catch (err) {
    statusType.value = "error";
    statusMessage.value =
      "Terjadi kesalahan saat mengirim. Silakan coba lagi atau hubungi info@iatta.or.id";
  } finally {
    submitting.value = false;
  }
}
</script>

<style scoped>
/* small visual polish */
input[type="file"] {
  background-clip: padding-box;
}

/* subtle focus style already via Tailwind classes, add reduced motion safety */
@media (prefers-reduced-motion: reduce) {
  button,
  input,
  select,
  textarea {
    transition: none !important;
  }
}

/* ensure iframe responsive */
iframe {
  display: block;
  border: 0;
}
</style>
