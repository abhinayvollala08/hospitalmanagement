import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import { getToken } from "next-auth/jwt";

/** Routes each role is allowed to access */
const ROLE_ROUTES: Record<string, string[]> = {
  PATIENT: ["/patient"],
  DOCTOR: ["/doctor"],
  ADMIN: ["/admin", "/doctor", "/patient"],
  EDITOR: ["/editor"],
};

/** Default dashboard per role */
const DASH_MAP: Record<string, string> = {
  PATIENT: "/patient/dashboard",
  DOCTOR: "/doctor/dashboard",
  ADMIN: "/admin/dashboard",
  EDITOR: "/editor/dashboard",
};

const PROTECTED_PREFIXES = ["/patient", "/doctor", "/admin", "/editor"];

export async function middleware(req: NextRequest) {
  const { pathname } = req.nextUrl;
  const isProtected = PROTECTED_PREFIXES.some((p) => pathname.startsWith(p));

  if (isProtected) {
    const token = await getToken({
      req,
      secret: process.env.AUTH_SECRET,
    });

    // Not logged in → redirect to login
    if (!token) {
      const loginUrl = new URL("/login", req.url);
      loginUrl.searchParams.set("callbackUrl", pathname);
      return NextResponse.redirect(loginUrl);
    }

    const role = token.role as string | undefined;

    // Logged in but wrong role → send to own dashboard
    if (role) {
      const allowed = ROLE_ROUTES[role] ?? [];
      const canAccess = allowed.some((r) => pathname.startsWith(r));
      if (!canAccess) {
        return NextResponse.redirect(
          new URL(DASH_MAP[role] ?? "/", req.url)
        );
      }
    }
  }

  return NextResponse.next();
}

export const config = {
  matcher: [
    "/patient/:path*",
    "/doctor/:path*",
    "/admin/:path*",
    "/editor/:path*",
  ],
};
