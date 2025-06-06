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

  const { id } = req.query;

  if (req.method === "DELETE") {
    await db.collection("eventos").deleteOne({ id: Number(id) });
    return res.status(200).json({ deleted: true });
  }

  res.status(405).end();
}
