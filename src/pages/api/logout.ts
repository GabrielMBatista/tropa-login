import type { NextApiRequest, NextApiResponse } from "next";
import clientPromise from "@/lib/mongodb";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const token = req.cookies.token;

  if (!token) {
    return res.status(400).json({ error: "Sessão não encontrada." });
  }

  const client = await clientPromise;
  const db = client.db();

  await db.collection("sessions").deleteOne({ sessionId: token });

  res.setHeader("Set-Cookie", "token=; Max-Age=0; Path=/; HttpOnly");
  res.status(200).json({ success: true });
}
