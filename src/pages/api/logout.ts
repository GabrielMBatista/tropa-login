import { NextApiRequest, NextApiResponse } from "next";
import fs from "fs";
import path from "path";
import { Sessao } from "@/types/db";

const dbPath = path.join(process.cwd(), "db.json");

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  const sessionId = req.cookies.token;

  if (!sessionId) {
    return res.status(400).json({ error: "Sessão não encontrada." });
  }

  const dbRaw = fs.readFileSync(dbPath, "utf-8");
  const db = JSON.parse(dbRaw) as { sessions: Sessao[] };

  db.sessions = db.sessions.filter((s: Sessao) => s.sessionId !== sessionId);

  fs.writeFileSync(dbPath, JSON.stringify(db, null, 2));

  res.setHeader("Set-Cookie", `token=; Max-Age=0; Path=/; HttpOnly`);
  res.status(200).json({ success: true });
}
