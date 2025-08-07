import type { NextApiRequest, NextApiResponse } from "next";
import { v4 as uuidv4 } from "uuid";
import clientPromise from "@/lib/mongodb";

// Domínios permitidos para iframe
const ALLOWED_FRAME_ORIGINS = [
  "gabrielmarquesbatista.com",
  "shell-frontend-beta.vercel.app",
  "localhost:3000",
  "localhost:3001",
];

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

  const isSecure = req.headers["x-forwarded-proto"] === "https";
  const isIframe = req.headers["sec-fetch-dest"] === "iframe";
  const referer = req.headers.referer;
  const isAllowedReferer =
    referer && ALLOWED_FRAME_ORIGINS.some((origin) => referer.includes(origin));

  // Configurar cookie com atributos apropriados para iframe
  const cookieAttributes = [
    `token=${sessionId}`,
    "HttpOnly",
    "Path=/",
    "Max-Age=86400",
    isSecure ? "Secure" : "",
    isIframe && isAllowedReferer ? "SameSite=None" : "SameSite=Lax",
  ]
    .filter(Boolean)
    .join("; ");

  res.setHeader("Set-Cookie", cookieAttributes);

  return res.status(200).json({ success: true });
}
