// middleware.ts
import { NextRequest, NextResponse } from "next/server";

// Rotas públicas
const PUBLIC_PATHS = ["/login", "/_next", "/favicon.ico", "/api/login"];

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;
  const token = request.cookies.get("token")?.value;

  const isPublic = PUBLIC_PATHS.some((path) => pathname.startsWith(path));

  const debugInfo = {
    path: pathname,
    isPublic: isPublic.toString(),
    token: token || "undefined",
  };

  // Se for rota pública, permite acesso
  if (isPublic) {
    const response = NextResponse.next();
    response.headers.set("X-Debug-Middleware", "public-route");
    response.headers.set("X-Debug-Path", debugInfo.path);
    response.headers.set("X-Debug-Token", debugInfo.token);
    return response;
  }

  // Se token estiver ausente, redireciona
  if (!token) {
    const loginUrl = new URL("/login", request.url);
    const response = NextResponse.redirect(loginUrl);
    response.headers.set("X-Debug-Middleware", "redirecting-to-login");
    response.headers.set("X-Debug-Path", debugInfo.path);
    response.headers.set("X-Debug-Token", debugInfo.token);
    return response;
  }

  // Token existe e não é rota pública
  const response = NextResponse.next();
  response.headers.set("X-Debug-Middleware", "protected-access");
  response.headers.set("X-Debug-Path", debugInfo.path);
  response.headers.set("X-Debug-Token", debugInfo.token);
  return response;
}

export const config = {
  matcher: ["/((?!api|_next|favicon.ico).*)"],
};
