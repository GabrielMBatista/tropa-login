import fs from "fs";
import path from "path";
import { NextApiRequest, NextApiResponse } from "next";
import { Evento } from "../../../types/Evento";

const dbPath = path.join(process.cwd(), "db.json");

interface Database {
  eventos: Evento[];
}

function readDb(): Database {
  const data = fs.readFileSync(dbPath, "utf-8");
  return JSON.parse(data);
}

function writeDb(data: Database): void {
  fs.writeFileSync(dbPath, JSON.stringify(data, null, 2));
}

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  const { id } = req.query;

  if (req.method === "DELETE") {
    const db = readDb();
    db.eventos = db.eventos.filter((e) => e.id !== Number(id));
    writeDb(db);
    res.status(200).json({ deleted: true });
  } else {
    res.setHeader("Allow", "DELETE");
    return res
      .status(405)
      .json({ error: `Método ${req.method} não permitido` });
  }
}
