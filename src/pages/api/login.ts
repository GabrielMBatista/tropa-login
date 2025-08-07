import type { NextApiRequest, NextApiResponse } from "next";
import { v4 as uuidv4 } from "uuid";
import clientPromise from "@/lib/mongodb";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method !== "POST") {
    res.setHeader("Allow", ["POST"]);
    return res
      .status(405)
      .json({ error: `Método ${req.method} não permitido` });
  }

  const { email, senha } = req.body;

  const adminEmail = process.env.NEXT_PUBLIC_AUTH_EMAIL;
  const adminPassword = process.env.NEXT_PUBLIC_AUTH_PASSWORD;

  if (email !== adminEmail || senha !== adminPassword) {
    return res.status(401).json({ error: "Credenciais inválidas" });
  }

  const sessionId = uuidv4();
  const client = await clientPromise;
  const db = client.db();

  await db.collection("sessions").insertOne({
    sessionId,
    email,
    createdAt: new Date(),
  });

  // const isSecure = req.headers["x-forwarded-proto"] === "https";

  res.setHeader(
    "Set-Cookie",
    `token=${sessionId}; Path=/; Max-Age=3600; HttpOnly; SameSite=None; Secure`
  );

  return res.status(200).json({ success: true });
}
