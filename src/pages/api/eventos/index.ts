import fs from "fs";
import path from "path";
import { NextApiRequest, NextApiResponse } from "next";
import { Evento } from "../../../types/Evento";

const dbPath = path.join(process.cwd(), "db.json");

interface Database {
  eventos: Evento[];
  sessions?: { sessionId: string; email: string }[];
}

function readDb(): Database {
  const data = fs.readFileSync(dbPath, "utf-8");
  return JSON.parse(data);
}

function writeDb(data: Database): void {
  fs.writeFileSync(dbPath, JSON.stringify(data, null, 2));
}

function isAuthenticated(req: NextApiRequest): boolean {
  const token = req.cookies.token;
  if (!token) return false;

  const db = readDb();
  return db.sessions?.some((s) => s.sessionId === token) ?? false;
}

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  if (!isAuthenticated(req)) {
    return res.status(401).json({ error: "Não autorizado" });
  }

  if (req.method === "GET") {
    const db = readDb();
    return res.status(200).json(db.eventos);
  }

  if (req.method === "POST") {
    const db = readDb();
    const novo: Evento = {
      id: Date.now(),
      ...req.body,
    };
    db.eventos.push(novo);
    writeDb(db);
    return res.status(201).json(novo);
  }

  res.setHeader("Allow", "GET, POST");
  return res.status(405).json({ error: `Método ${req.method} não permitido` });
}
