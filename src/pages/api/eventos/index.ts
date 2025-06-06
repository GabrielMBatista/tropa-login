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
  if (req.method === "GET") {
    const db = readDb();
    res.status(200).json(db.eventos);
  } else if (req.method === "POST") {
    const db = readDb();
    const novo: Evento = {
      id: Date.now(),
      ...req.body,
    };
    db.eventos.push(novo);
    writeDb(db);
    res.status(201).json(novo);
  } else {
    res.status(405).end();
  }
}
