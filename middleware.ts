import { NextRequest, NextResponse } from "next/server";

const PUBLIC_PATHS = ["/login", "/favicon.ico", "/_next", "/api"];

export function middleware(request: NextRequest) {
  const token = request.cookies.get("token")?.value;

  const isPublic = PUBLIC_PATHS.some((path) =>
    request.nextUrl.pathname.startsWith(path)
  );

  if (!token && !isPublic) {
    const loginUrl = new URL("/login", request.url);
    return NextResponse.redirect(loginUrl);
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/((?!.*\\..*|_next).*)"],
};
