import { NextRequest, NextResponse } from "next/server";

// Rotas públicas que não exigem autenticação
const PUBLIC_PATHS = [
  "/eventos",
  "/login",
  "/favicon.ico",
  "/api/login",
  "/_next",
];

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;
  const token = request.cookies.get("token")?.value;

  const isPublic = PUBLIC_PATHS.some((path) => pathname.startsWith(path));

  // Debug via headers (aparece no DevTools > Network)
  const debugInfo = {
    path: pathname,
    token: token || "undefined",
    isPublic: isPublic.toString(),
  };

  // Permite acesso a rotas públicas
  if (isPublic) {
    const res = NextResponse.next();
    res.headers.set("X-Debug-Middleware", "public-route");
    res.headers.set("X-Debug-Path", debugInfo.path);
    res.headers.set("X-Debug-Token", debugInfo.token);
    return res;
  }

  // Se não houver token, redireciona para login
  if (!token) {
    const loginUrl = new URL("/login", request.url);
    const res = NextResponse.redirect(loginUrl);
    res.headers.set("X-Debug-Middleware", "redirect-to-login");
    res.headers.set("X-Debug-Path", debugInfo.path);
    res.headers.set("X-Debug-Token", debugInfo.token);
    return res;
  }

  // Rota protegida com token válido
  const res = NextResponse.next();
  res.headers.set("X-Debug-Middleware", "authenticated-access");
  res.headers.set("X-Debug-Path", debugInfo.path);
  res.headers.set("X-Debug-Token", debugInfo.token);
  return res;
}

export const config = {
  matcher: ["/((?!api/|_next/|favicon.ico).*)"],
};
