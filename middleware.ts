import { NextRequest, NextResponse } from "next/server";

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
  const isIframe =
    request.headers.get("sec-fetch-dest") === "iframe" ||
    request.headers.get("referer")?.includes("shell-frontend-beta.vercel.app");

  const debugInfo = {
    path: pathname,
    token: token || "undefined",
    isPublic: isPublic.toString(),
    isIframe: (isIframe ?? false).toString(),
  };

  if (isPublic || isIframe) {
    const res = NextResponse.next();
    res.headers.set(
      "X-Debug-Middleware",
      isIframe ? "iframe-access" : "public-route"
    );
    res.headers.set("X-Debug-Path", debugInfo.path);
    res.headers.set("X-Debug-Token", debugInfo.token);
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
