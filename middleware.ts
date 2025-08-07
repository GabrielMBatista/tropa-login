import { NextRequest, NextResponse } from "next/server";

const PUBLIC_PATHS = [
  "/eventos",
  "/login",
  "/favicon.ico",
  "/api/login",
  "/api/session",
  "/_next",
];

// Domínios permitidos para iframe
const ALLOWED_FRAME_ORIGINS = [
  "gabrielmarquesbatista.com",
  "shell-frontend-beta.vercel.app",
  "localhost:3000",
  "localhost:3001",
  // Adicione outros domínios conforme necessário
];

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;
  const token = request.cookies.get("token")?.value;
  const referer = request.headers.get("referer");

  const isPublic = PUBLIC_PATHS.some((path) => pathname.startsWith(path));

  // Verificação mais segura para iframe
  const isIframe = request.headers.get("sec-fetch-dest") === "iframe";
  const isAllowedReferer =
    referer && ALLOWED_FRAME_ORIGINS.some((origin) => referer.includes(origin));

  const debugInfo = {
    path: pathname,
    token: token || "undefined",
    isPublic: isPublic.toString(),
    isIframe: (isIframe ?? false).toString(),
  };

  if (isPublic || (isIframe && isAllowedReferer)) {
    const res = NextResponse.next();
    res.headers.set(
      "X-Debug-Middleware",
      isIframe ? "iframe-access" : "public-route"
    );
    res.headers.set("X-Debug-Path", debugInfo.path);
    res.headers.set("X-Debug-Token", debugInfo.token);

    // Configuração segura para iframe
    if (isIframe && isAllowedReferer) {
      res.headers.set("X-Frame-Options", "SAMEORIGIN");
      const allowedOrigins = ALLOWED_FRAME_ORIGINS.map(
        (origin) => `https://${origin} http://${origin}`
      ).join(" ");
      res.headers.set(
        "Content-Security-Policy",
        `frame-ancestors 'self' ${allowedOrigins}`
      );
    } else {
      res.headers.set("X-Frame-Options", "DENY");
    }

    return res;
  }

  if (!token) {
    const loginUrl = new URL("/login", request.url);
    const res = NextResponse.redirect(loginUrl);
    res.headers.set("X-Debug-Middleware", "redirect-to-login");
    res.headers.set("X-Debug-Path", debugInfo.path);
    res.headers.set("X-Debug-Token", debugInfo.token);
    return res;
  }

  const res = NextResponse.next();
  res.headers.set("X-Debug-Middleware", "authenticated-access");
  res.headers.set("X-Debug-Path", debugInfo.path);
  res.headers.set("X-Debug-Token", debugInfo.token);
  return res;
}

export const config = {
  matcher: ["/((?!api/|_next/|favicon.ico).*)"],
};
