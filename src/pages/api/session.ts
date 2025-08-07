import { NextApiRequest, NextApiResponse } from "next";
import clientPromise from "@/lib/mongodb";

// Domínios permitidos para iframe (mesmo array do middleware)
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
  // Verificação mais segura para iframe
  const isIframe = req.headers["sec-fetch-dest"] === "iframe";
  const referer = req.headers.referer;
  const isAllowedReferer =
    referer && ALLOWED_FRAME_ORIGINS.some((origin) => referer.includes(origin));

  const token = req.cookies.token;

  if (!token) {
    // Se for iframe de origem permitida, retornar resposta amigável
    if (isIframe && isAllowedReferer) {
      return res.status(200).json({
        authenticated: false,
        iframe: true,
        message: "No session in iframe context",
      });
    }
    return res.status(401).json({ authenticated: false });
  }

  try {
    const client = await clientPromise;
    const db = client.db("tropa");
    const session = await db
      .collection("sessions")
      .findOne({ sessionId: token });

    if (!session) {
      if (isIframe && isAllowedReferer) {
        return res.status(200).json({
          authenticated: false,
          iframe: true,
          message: "Invalid session in iframe context",
        });
      }
      return res.status(401).json({ authenticated: false });
    }

    return res.status(200).json({
      authenticated: true,
      user: { email: session.email },
      iframe: isIframe && isAllowedReferer,
    });
  } catch {
    return res.status(500).json({ error: "Erro interno" });
  }
}
