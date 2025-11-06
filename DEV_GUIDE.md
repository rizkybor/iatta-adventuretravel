# 🧭 **IATTA ADVENTURETRAVEL – Developer Guide**

Dokumen ini menjelaskan **command shortcuts** yang tersedia di root project (`package.json`).  
Semua perintah dijalankan dari **root folder** dengan sintaks:

```bash
npm run <script>
```

---

## ⚙️ **Docker Compose Commands**

| Script | Deskripsi | Contoh |
|--------|------------|--------|
| `compose:config` | Validasi dan tampilkan konfigurasi Docker Compose (cek struktur YAML). | `npm run compose:config` |
| `compose:up` | Build ulang seluruh service (`db`, `server`, `client`) lalu jalankan di background. | `npm run compose:up` |
| `compose:down` | Hentikan semua container yang sedang berjalan. | `npm run compose:down` |
| `compose:ps` | Tampilkan daftar container aktif dan statusnya. | `npm run compose:ps` |
| `compose:logs` | Pantau log semua service secara real time. | `npm run compose:logs` |
| `compose:build` | Build ulang semua image tanpa cache (fresh build). | `npm run compose:build` |
| `compose:rebuild-server` | Rebuild image `server` saja dan jalankan ulang kontainernya. | `npm run compose:rebuild-server` |
| `compose:rebuild-client` | Rebuild image `client` saja dan jalankan ulang kontainernya. | `npm run compose:rebuild-client` |

---

## 💻 **Client / Server Shortcuts**

| Script | Deskripsi | Contoh |
|--------|------------|--------|
| `client:dev` | Jalankan container `client` dalam mode **development** (`npm run dev`) dengan hot reload aktif. | `npm run client:dev` |
| `server:start` | Jalankan container `server` dalam mode normal (production/start). | `npm run server:start` |
| `server:logs` | Tampilkan log dari service `server` saja. | `npm run server:logs` |

---

## 🗄️ **Database & Prisma Commands**

| Script | Deskripsi | Contoh |
|--------|------------|--------|
| `db:psql` | Masuk ke shell **psql** dalam container database. | `npm run db:psql` |
| `db:push` | Terapkan schema Prisma ke database tanpa migrasi (update struktur tabel). | `npm run db:push` |
| `db:migrate` | Jalankan semua **migrations** Prisma ke database (mode deploy). | `npm run db:migrate` |
| `db:seed` | Jalankan file seeder (`server/prisma/seed.js`). | `npm run db:seed` |
| `db:check` | Tampilkan daftar tabel di database aktif (`\dt`). | `npm run db:check` |

---

## 🚀 **Contoh Alur Development Lengkap**

1. **Start seluruh stack (client, server, db):**
   ```bash
   npm run compose:up
   ```
2. **Cek log awal untuk memastikan semua service berjalan:**
   ```bash
   npm run compose:logs
   ```
3. **Push schema Prisma & jalankan seeder:**
   ```bash
   npm run db:push
   npm run db:seed
   ```
4. **Akses aplikasi:**
   - Client UI: [http://localhost:3000](http://localhost:3000)  
   - Server API: [http://localhost:4000](http://localhost:4000)
5. **Cek tabel di database (opsional):**
   ```bash
   npm run db:check
   ```
6. **Stop semua container setelah selesai:**
   ```bash
   npm run compose:down
   ```

---

## 🧩 **Tips & Catatan**
- Jalankan `compose:config` jika Compose error — ini menampilkan YAML hasil gabungan untuk debug cepat.  
- `client:dev` hanya berfungsi jika di `docker-compose.yml` client sudah menggunakan:
  ```yaml
  command: npm run dev
  volumes:
    - ./client:/app
    - /app/node_modules
  ```
  Mode ini mendukung **Hot Module Reload (HMR)**.
- Semua perintah `db:*` mengasumsikan nama container:
  ```
  iatta-adventuretravel-db-1
  iatta-adventuretravel-server-1
  ```
  Pastikan sesuai dengan hasil `docker compose ps`.
- Jika Docker di sistemmu butuh `sudo`, tambahkan `sudo` di depan setiap script pada `package.json`.
- Untuk rebuild total environment (hapus DB & volume):
  ```bash
  docker compose down -v
  npm run compose:up
  ```

---

## 🧠 **Struktur Proyek Singkat**
```
iatta-adventuretravel/
├── client/           # UI (Nuxt)
├── server/           # API (Node + Prisma)
├── docker-compose.yml
├── package.json      # root scripts untuk orkestrasi
└── DEV_GUIDE.md      # dokumentasi ini
```

---

Selamat datang di workflow yang tidak butuh copy-paste perintah terminal berulang.  
Satu `npm run compose:up`, dan semua layer (DB, API, UI) siap.