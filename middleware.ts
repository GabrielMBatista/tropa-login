import { NextRequest, NextResponse } from "next/server";

const PUBLIC_PATHS = [
  "/eventos",
  "/login",
  "/favicon.ico",
  "/api/login",
  "/api/session",
  "/api/",
  "/_next",
];

const ALLOWED_FRAME_ORIGINS = [
  "gabrielmarquesbatista.com",
  "www.gabrielmarquesbatista.com", // Adicionado
  "shell-frontend-beta.vercel.app",
  "tropa-login.vercel.app",
  "localhost:3000",
  "localhost:3001",
];

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;
  const token = request.cookies.get("token")?.value;
  const referer = request.headers.get("referer");

  const isPublic = PUBLIC_PATHS.some((path) => pathname.startsWith(path));
  const isApiRoute = pathname.startsWith("/api/");
  if (isApiRoute && !isPublic && !token) {
    return NextResponse.redirect(new URL("/login", request.url));
  }

  const isIframe =
    request.headers.get("sec-fetch-dest") === "iframe" ||
    request.headers.get("sec-fetch-mode") === "navigate" ||
    request.headers.get("sec-fetch-site") === "cross-site";

  const isAllowedReferer =
    referer &&
    ALLOWED_FRAME_ORIGINS.some(
      (origin) =>
        referer.includes(origin) ||
        referer.includes(`http://${origin}`) ||
        referer.includes(`https://${origin}`)
    );

  const debugInfo = {
    path: pathname,
    token: token || "undefined",
    isPublic: isPublic.toString(),
    isIframe: (isIframe ?? false).toString(),
    referer: referer || "none",
  };

  const setFrameHeaders = (res: NextResponse) => {
    if (isAllowedReferer) {
      res.headers.delete("X-Frame-Options");
      const allowedOrigins = ALLOWED_FRAME_ORIGINS.map(
        (origin) => `https://${origin} http://${origin}`
      ).join(" ");
      res.headers.set(
        "Content-Security-Policy",
        `frame-ancestors 'self' ${allowedOrigins}`
      );
    } else {
      res.headers.set("X-Frame-Options", "SAMEORIGIN");
      res.headers.set(
        "Content-Security-Policy",
        `frame-ancestors 'self' localhost:* *.vercel.app *.gabrielmarquesbatista.com`
      );
    }
  };

  if (isApiRoute || isPublic) {
    const res = NextResponse.next();
    res.headers.set(
      "X-Debug-Middleware",
      isApiRoute ? "api-route" : "public-route"
    );
    res.headers.set("X-Debug-Path", debugInfo.path);
    res.headers.set("X-Debug-Token", debugInfo.token);
    res.headers.set("X-Debug-Referer", debugInfo.referer);

    if (!isApiRoute) {
      setFrameHeaders(res);
    }
    return res;
  }

  if (!token) {
    console.log(
      `[Middleware] Token ausente. Redirecionando para /login. Path: ${pathname}`
    );
    const loginUrl = new URL("/login", request.url);
    const res = NextResponse.redirect(loginUrl);
    res.headers.set("X-Debug-Middleware", "redirect-to-login");
    res.headers.set("X-Debug-Path", pathname);
    setFrameHeaders(res);
    return res;
  }

  console.log(`[Middleware] Token válido. Path: ${pathname}`);
  const res = NextResponse.next();
  res.headers.set("X-Debug-Middleware", "authenticated-access");
  res.headers.set("X-Debug-Path", pathname);
  setFrameHeaders(res);
  return res;
}

export const config = {
  matcher: ["/((?!_next/|favicon.ico).*)"],
};
