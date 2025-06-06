import type { NextApiRequest, NextApiResponse } from "next";
import fs from "fs";
import path from "path";
import { v4 as uuidv4 } from "uuid";
import { Sessao } from "@/types/db";

const dbPath = path.join(process.cwd(), "db.json");

const handler = (req: NextApiRequest, res: NextApiResponse) => {
  if (req.method !== "POST") {
    return res.status(405).json({ error: "Método não permitido" });
  }

  const { email, senha } = req.body;

  const adminEmail = process.env.NEXT_PUBLIC_AUTH_EMAIL;
  const adminPassword = process.env.NEXT_PUBLIC_AUTH_PASSWORD;

  if (email !== adminEmail || senha !== adminPassword) {
    return res.status(401).json({ error: "Credenciais inválidas" });
  }

  const sessionId = uuidv4();
  const db = JSON.parse(fs.readFileSync(dbPath, "utf-8"));
  const novaSessao: Sessao = { sessionId, email };

  db.sessions = db.sessions || [];
  db.sessions.push(novaSessao);
  fs.writeFileSync(dbPath, JSON.stringify(db, null, 2));

  const isProd = process.env.NODE_ENV === "production";

  res.setHeader(
    "Set-Cookie",
    `token=${sessionId}; Path=/; Max-Age=3600; SameSite=Lax${
      isProd ? "; Secure" : ""
    }`
  );

  return res.status(200).json({ success: true });
};

export default handler;
