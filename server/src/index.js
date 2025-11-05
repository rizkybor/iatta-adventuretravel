import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import { PrismaClient } from "@prisma/client";

dotenv.config();
const app = express();
app.use(cors());
app.use(express.json());

const prisma = new PrismaClient();

app.get("/api/health", async (req, res) => {
  try {
    await prisma.$queryRaw`SELECT 1`;
    res.json({ ok: true });
  } catch (e) {
    console.error(e);
    res.status(500).json({ ok: false });
  }
});

app.get("/api/users", async (req, res) => {
  const users = await prisma.user.findMany();
  res.json({ ok: true, data: users });
});

app.post("/api/users", async (req, res) => {
  const { email, name } = req.body;
  const user = await prisma.user.create({ data: { email, name } });
  res.json({ ok: true, data: user });
});

const port = process.env.PORT || 4000;
app.listen(port, "0.0.0.0", () => console.log(`Server listening on ${port}`));