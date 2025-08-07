import type { NextApiRequest, NextApiResponse } from "next";
import clientPromise from "@/lib/mongodb";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const client = await clientPromise;
  const db = client.db();

  const token = req.cookies.token;
  const session = await db.collection("sessions").findOne({ sessionId: token });

  if (!session) return res.status(401).json({ error: "Não autorizado" });

  if (req.method === "GET") {
    const eventos = await db.collection("eventos").find().toArray();
    return res.status(200).json(eventos);
  }

  if (req.method === "POST") {
    const novo = {
      ...req.body,
      id: Date.now(),
    };
    await db.collection("eventos").insertOne(novo);
    return res.status(201).json(novo);
  }

  res.status(405).end();
}
