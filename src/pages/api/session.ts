import { NextApiRequest, NextApiResponse } from "next";
import clientPromise from "@/lib/mongodb";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const token = req.cookies.token;

  if (!token) {
    return res.status(401).json({ authenticated: false });
  }

  try {
    const client = await clientPromise;
    const db = client.db("tropa");
    const session = await db
      .collection("sessions")
      .findOne({ sessionId: token });

    if (!session) {
      return res.status(401).json({ authenticated: false });
    }

    return res
      .status(200)
      .json({ authenticated: true, user: { email: session.email } });
  } catch {
    return res.status(500).json({ error: "Erro interno" });
  }
}
