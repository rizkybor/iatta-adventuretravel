<template>
  <main class="min-h-screen bg-white text-slate-900">
    <!-- Hero -->
    <section class="bg-[#f8fafc] py-10">
      <div class="max-w-6xl mx-auto px-6 lg:px-8">
        <div class="flex flex-col md:flex-row items-start justify-between gap-6">
          <div>
            <h1 class="text-3xl lg:text-4xl font-extrabold text-[#08a4ef]">MEMBERSHIP</h1>
            <p class="mt-2 text-slate-600 max-w-2xl">Join the ecosystem: access standards, tools, and network pathways that accelerate sustainable tourism impact.</p>
          </div>

          <div class="flex gap-3">
            <button @click="openRegister=true" class="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-[#08a4ef] text-white">Register Online</button>
            <button @click="showLogin=true" class="inline-flex items-center gap-2 px-4 py-2 rounded-lg border border-slate-200">Regional Board Login</button>
          </div>
        </div>
      </div>
    </section>

    <!-- Why Join / Benefits -->
    <section id="why-join" class="max-w-6xl mx-auto px-6 lg:px-8 py-12">
      <div class="grid md:grid-cols-2 gap-8">
        <div>
          <h2 class="text-2xl font-semibold text-[#fcb243]">1. Why Join?</h2>
          <ul class="mt-4 list-disc list-inside text-slate-700 space-y-2">
            <li>Credibility via certification and member code alignment.</li>
            <li>Access to regional DPW network and local SOP toolkits.</li>
            <li>Capacity building: training cohorts and market visibility.</li>
            <li>Market access and partnership facilitation.</li>
          </ul>
        </div>

        <div>
          <h2 class="text-2xl font-semibold text-[#d5e018]">3. Member Benefits</h2>
          <ul class="mt-4 list-disc list-inside text-slate-700 space-y-2">
            <li>Exclusive downloads: SOPs, templates, certification checklists.</li>
            <li>Priority enrollment to training and certification schemes.</li>
            <li>Listing in IATTA directory and marketing collateral.</li>
            <li>Member-only events and grant opportunities.</li>
          </ul>
        </div>
      </div>
    </section>

    <!-- Categories & Fees -->
    <section id="categories" class="bg-[#f8fafc] py-12">
      <div class="max-w-6xl mx-auto px-6 lg:px-8">
        <h2 class="text-2xl font-semibold text-[#08a4ef]">2. Membership Categories & Criteria</h2>
        <p class="mt-3 text-slate-600">Clear eligibility bands to streamline onboarding and benefits allocation.</p>

        <div class="mt-6 overflow-x-auto">
          <table class="w-full table-auto bg-white border border-slate-100 rounded-lg shadow-sm">
            <thead class="bg-[#fef9ec]">
              <tr class="text-left text-sm text-slate-700">
                <th class="px-4 py-3">Category</th>
                <th class="px-4 py-3">Eligibility / Criteria</th>
                <th class="px-4 py-3">Typical Members</th>
              </tr>
            </thead>
            <tbody class="text-sm text-slate-700">
              <tr class="border-t">
                <td class="px-4 py-3 font-medium">Corporate Member</td>
                <td class="px-4 py-3">Registered tour operators, >5 employees, program portfolio</td>
                <td class="px-4 py-3">B2B Operators</td>
              </tr>
              <tr class="border-t">
                <td class="px-4 py-3 font-medium">Associate Member</td>
                <td class="px-4 py-3">SMEs, cooperatives, community groups</td>
                <td class="px-4 py-3">Local Guides, SMEs</td>
              </tr>
              <tr class="border-t">
                <td class="px-4 py-3 font-medium">Individual Member</td>
                <td class="px-4 py-3">Accredited guides, practitioners</td>
                <td class="px-4 py-3">Guides, Researchers</td>
              </tr>
            </tbody>
          </table>
        </div>

        <div class="mt-8 grid md:grid-cols-2 gap-6">
          <div class="p-6 bg-white border rounded-lg">
            <h4 class="font-semibold">4. Membership Fees (Indicative)</h4>
            <ul class="mt-3 text-slate-700 list-inside list-disc">
              <li>Corporate: IDR 8,000,000 / year</li>
              <li>Associate: IDR 2,500,000 / year</li>
              <li>Individual: IDR 350,000 / year</li>
            </ul>
            <p class="mt-3 text-xs text-slate-500">*Fees subject to approval by Board. Discounts for multi-year commitments and community cooperatives.</p>
          </div>

          <div class="p-6 bg-white border rounded-lg">
            <h4 class="font-semibold">Value Proposition</h4>
            <p class="mt-2 text-slate-700 text-sm">Fee income funds certification, regional support, and member services—ensuring operational sustainability and program continuity.</p>
          </div>
        </div>
      </div>
    </section>

    <!-- Registration Process & Form -->
    <section id="registration" class="max-w-6xl mx-auto px-6 lg:px-8 py-12">
      <h2 class="text-2xl font-semibold text-[#fcb243]">5. Registration Process & Flow</h2>
      <ol class="mt-4 list-decimal list-inside text-slate-700 space-y-3">
        <li>Read categories & select appropriate membership type.</li>
        <li>Complete online registration form with supporting documents.</li>
        <li>Review by Membership Committee (3-7 business days).</li>
        <li>Invoice & payment, then onboarding and directory listing.</li>
      </ol>

      <div class="mt-8 grid lg:grid-cols-2 gap-8">
        <div>
          <h3 class="text-lg font-semibold text-slate-800">6. Online Registration Form</h3>
          <p class="mt-2 text-sm text-slate-600">Complete the form — required fields are marked.</p>

          <form @submit.prevent="submitRegistration" class="mt-4 space-y-4 bg-white p-6 border rounded-lg shadow-sm">
            <div class="grid md:grid-cols-2 gap-4">
              <label class="block">
                <span class="text-sm text-slate-700">Full Name<span class="text-red-500">*</span></span>
                <input v-model="form.fullName" required class="mt-1 w-full rounded-md border px-3 py-2 text-sm" />
              </label>

              <label class="block">
                <span class="text-sm text-slate-700">Email<span class="text-red-500">*</span></span>
                <input v-model="form.email" type="email" required class="mt-1 w-full rounded-md border px-3 py-2 text-sm" />
              </label>
            </div>

            <label class="block">
              <span class="text-sm text-slate-700">Organization / Company</span>
              <input v-model="form.organization" class="mt-1 w-full rounded-md border px-3 py-2 text-sm" />
            </label>

            <div class="grid md:grid-cols-2 gap-4">
              <label class="block">
                <span class="text-sm text-slate-700">Membership Category<span class="text-red-500">*</span></span>
                <select v-model="form.category" required class="mt-1 w-full rounded-md border px-3 py-2 text-sm">
                  <option value="Corporate">Corporate</option>
                  <option value="Associate">Associate</option>
                  <option value="Individual">Individual</option>
                </select>
              </label>

              <label class="block">
                <span class="text-sm text-slate-700">Phone</span>
                <input v-model="form.phone" class="mt-1 w-full rounded-md border px-3 py-2 text-sm" />
              </label>
            </div>

            <label class="block">
              <span class="text-sm text-slate-700">Supporting Documents (upload)</span>
              <input ref="fileInput" @change="onFileChange" type="file" class="mt-1 w-full text-sm" />
              <p v-if="form.fileName" class="text-xs text-slate-500 mt-2">Selected: {{ form.fileName }}</p>
            </label>

            <div class="flex items-center gap-3">
              <button type="submit" class="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-[#08a4ef] text-white">Submit Registration</button>
              <button type="button" @click="resetForm" class="px-4 py-2 rounded-lg border">Reset</button>
            </div>

            <p v-if="registrationMessage" class="text-sm text-green-600">{{ registrationMessage }}</p>
          </form>
        </div>

        <aside>
          <h3 class="text-lg font-semibold text-slate-800">7. Regional Board Area</h3>
          <p class="mt-2 text-sm text-slate-600">DPW directory and member resources (login required).</p>

          <div class="mt-4 space-y-3">
            <button @click="showLogin=true" class="w-full text-left px-4 py-3 rounded-lg border bg-white">DPW Directory (Login)</button>
            <a class="block px-4 py-3 rounded-lg border bg-white" href="#">Download SOPs & Tools</a>
            <a class="block px-4 py-3 rounded-lg border bg-white" href="#">Member Code of Ethics</a>
            <a class="block px-4 py-3 rounded-lg border bg-white" href="#">Certification & Legality Updates</a>
          </div>
        </aside>
      </div>
    </section>

    <!-- DPW Directory Modal / Login -->
    <transition name="modal">
      <div v-if="showLogin" class="fixed inset-0 z-50 flex items-center justify-center bg-black/40">
        <div class="w-full max-w-md bg-white rounded-lg p-6">
          <h3 class="text-lg font-semibold">Regional Board Login</h3>
          <p class="text-sm text-slate-600">Enter credentials to access DPW directory and member-only downloads.</p>

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
              <button type="button" @click="showLogin=false" class="px-4 py-2 rounded-lg border">Cancel</button>
              <button type="submit" class="px-4 py-2 rounded-lg bg-[#08a4ef] text-white">Sign in</button>
            </div>

            <p v-if="loginMessage" class="text-sm text-red-600">{{ loginMessage }}</p>
          </form>
        </div>
      </div>
    </transition>

    <!-- Registration Modal (confirmation) -->
    <transition name="modal">
      <div v-if="openRegister" class="fixed inset-0 z-50 flex items-center justify-center bg-black/40">
        <div class="w-full max-w-2xl bg-white rounded-lg p-6">
          <h3 class="text-lg font-semibold">Online Registration</h3>
          <p class="text-sm text-slate-600">Use the form on the left to submit a membership application. After review, you will receive an invoice.</p>

          <div class="mt-6 text-right">
            <button @click="openRegister=false" class="px-4 py-2 rounded-lg border">Close</button>
          </div>
        </div>
      </div>
    </transition>

    <footer class="border-t border-slate-100 mt-12 py-6 bg-white">
      <div class="max-w-6xl mx-auto px-6 lg:px-8 text-sm text-slate-500">© IATTA • Membership</div>
    </footer>
  </main>
</template>

<script setup>
import { ref } from 'vue'

const showLogin = ref(false)
const openRegister = ref(false)
const registrationMessage = ref('')
const loginMessage = ref('')

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
  const f = e.target.files[0]
  if (f) {
    form.value.file = f
    form.value.fileName = f.name
  }
}

function resetForm() {
  form.value = { fullName: '', email: '', organization: '', category: 'Individual', phone: '', file: null, fileName: '' }
  registrationMessage.value = ''
  if (refs.fileInput) refs.fileInput.value = null
}

async function submitRegistration() {
  // Mock submission: in real integration, post form-data to backend
  registrationMessage.value = 'Submission received. Membership committee will review within 3-7 business days.'
  // clear form for UX
  setTimeout(() => resetForm(), 1200)
}

function onLogin() {
  // Mock auth: replace with real auth flow
  if (login.value.username === 'dpwadmin' && login.value.password === 'securepassword') {
    loginMessage.value = ''
    showLogin.value = false
    // open a dashboard or DPW directory - placeholder
    window.alert('Login successful — open DPW Directory (placeholder).')
  } else {
    loginMessage.value = 'Invalid credentials. Please contact Secretariat.'
  }
}
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
</style>