# 🧭 IATTA Adventure Travel — Client (Nuxt 4)

Frontend aplikasi berbasis **Nuxt 4**, dibangun menggunakan **Vue 3 + Vite + TailwindCSS 4** dengan integrasi API dari backend server berbasis Node.js & Prisma.

---

## 📦 Setup Project

Pastikan sudah berada di folder `client/` sebelum menjalankan perintah berikut.

### 1️⃣ Install Dependencies

```bash
# npm
npm install

# pnpm
pnpm install

# yarn
yarn install
```

---

## 🚀 Development Server

Jalankan Nuxt development server pada `http://localhost:3000`:

```bash
# npm
npm run dev

# pnpm
pnpm dev
```

### Hot Reload
Mode pengembangan (`npm run dev`) sudah otomatis mendukung **HMR (Hot Module Replacement)**, jadi setiap perubahan di file `app/` akan langsung ter-reflect di browser tanpa reload manual.

---

## 🧱 Production Build

Build aplikasi untuk mode produksi:

```bash
# npm
npm run build
```

Preview hasil build lokal:

```bash
# npm
npm run preview
```

---

## 🎨 Styling

Aplikasi menggunakan **TailwindCSS 4** melalui integrasi **@tailwindcss/vite**.

File utama styling:
```
client/app/assets/css/main.css
```

Konfigurasi plugin berada di `nuxt.config.ts`:

```ts
import tailwindcss from '@tailwindcss/vite'

export default defineNuxtConfig({
  srcDir: 'app/',
  css: ['~/assets/css/main.css'],
  vite: { plugins: [tailwindcss()] }
})
```

---

## 🧭 Layout System

Struktur layout diatur melalui direktori `app/layouts/`:

| Layout | File | Deskripsi |
|---------|------|-----------|
| `LandingPage` | `app/layouts/LandingPage.vue` | Layout utama halaman publik (Home, About, Contact) |
| `Dashboard` | `app/layouts/Dashboard.vue` | Layout internal pengguna (Dashboard & admin) |

Contoh penggunaan layout di halaman:
```vue
<script setup>
definePageMeta({ layout: 'LandingPage' })
</script>
```

---

## 🧩 Struktur Direktori Utama

```
client/
├── app/
│   ├── assets/         # TailwindCSS, gambar, ikon
│   ├── components/     # Komponen global (Navbar, Footer, dll)
│   ├── layouts/        # Layout utama (LandingPage, Dashboard)
│   ├── pages/          # Halaman Nuxt
│   ├── app.vue         # Root component
│   └── middleware/     # (opsional) auth, route guards
├── nuxt.config.ts      # Konfigurasi utama Nuxt
├── Dockerfile          # Build & runtime image untuk container client
└── package.json
```

---

## 🐳 Jalankan via Docker

```bash
# Build image
docker compose build client

# Jalankan container
docker compose up -d client

# Pantau logs
docker compose logs -f client
```

Aplikasi tersedia di:
```
http://localhost:3000
```

---

## 🧾 Informasi

- **Framework:** Nuxt 4 (Vue 3 + Vite)
- **Styling:** TailwindCSS 4 + PostCSS
- **Runtime:** Node 20 (Alpine)
- **Port Default:** `3000`
- **API Endpoint:** `http://server:4000/api`