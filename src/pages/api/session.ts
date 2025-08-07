import { NextApiRequest, NextApiResponse } from "next";
import clientPromise from "@/lib/mongodb";


export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method !== "GET") {
    return res.status(405).json({ message: "Method not allowed" });
  }

  const token = req.cookies.token;
  if (!token) {
    console.log("[API /session] Token ausente.");
    return res
      .status(401)
      .json({ authenticated: false, message: "Token ausente" });
  }

  try {
    const client = await clientPromise;
    const db = client.db("tropa");
    const session = await db
      .collection("sessions")
      .findOne({ sessionId: token });

    if (!session) {
      console.log("[API /session] Sessão inválida.");
      return res
        .status(401)
        .json({ authenticated: false, message: "Sessão inválida" });
    }

    console.log("[API /session] Sessão válida.");
    return res
      .status(200)
      .json({ authenticated: true, user: { email: session.email } });
  } catch (error) {
    console.error("[API /session] Erro interno:", error);
    return res.status(500).json({ error: "Erro interno" });
  }
}
