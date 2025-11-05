# ⚙️ IATTA Adventure Travel — Server (Node.js + Prisma)

Backend API berbasis **Node.js** dengan **Prisma ORM** dan **PostgreSQL 14**.  
Melayani data untuk aplikasi client (Nuxt) melalui endpoint RESTful.

---

## 📦 Setup Project

Pastikan sudah berada di folder `server/` sebelum menjalankan perintah.

### 1️⃣ Install Dependencies

```bash
# npm
npm install
```

---

## 🚀 Development Server

Jalankan server API pada `http://localhost:4000`:

```bash
# npm
npm run dev
```

Mode dev sudah mendukung **nodemon** untuk auto-restart jika ada perubahan.

---

## 🧱 Production Build

Build dan jalankan server dalam mode produksi:

```bash
npm run build
npm start
```

---

## 🧮 Prisma ORM Commands

```bash
# Generate Prisma client
npx prisma generate

# Push schema ke database
npx prisma db push

# Jalankan migrasi
npx prisma migrate deploy

# Jalankan seeder
npx prisma db seed
```

---

## 🌱 Database Seeder

File seeder default:
```
server/prisma/seed.js
```

Contoh isi:
```js
import { PrismaClient } from '@prisma/client'
const prisma = new PrismaClient()

async function main() {
  await prisma.user.createMany({
    data: [
      { email: 'alice@example.com', name: 'Alice' },
      { email: 'bob@example.com', name: 'Bob' },
      { email: 'charlie@example.com', name: 'Charlie' }
    ]
  })
  console.log('✅ 3 users created.')
}

main()
  .catch(e => console.error(e))
  .finally(() => prisma.$disconnect())
```

Jalankan seeder:
```bash
npx prisma db seed
```

---

## 🐳 Jalankan dengan Docker

```bash
# Build image
docker compose build server

# Jalankan container
docker compose up -d server

# Pantau logs
docker compose logs -f server
```

API tersedia di:
```
http://localhost:4000/api
```

---

## 🧾 Informasi

- **Framework:** Node.js (Express)
- **ORM:** Prisma ORM
- **Database:** PostgreSQL 14
- **Port Default:** `4000`
- **Docker Service Name:** `server`
- **Dependensi ke:** `db` (PostgreSQL)