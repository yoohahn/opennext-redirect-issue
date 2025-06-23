import { type NextRequest, NextResponse } from "next/server";

export async function middleware(req: NextRequest) {
  if (req.nextUrl.pathname === "/") {
    return NextResponse.redirect(req.nextUrl.toString() + "sv", {
      status: 301,
    });
  }
  return NextResponse.next();
}

export const config = {
  matcher: [
    // match all routes except static files and APIs.
    // The assets folder is also excluded. This is because we can't load /logo.svg, it needs to be /assets/logo.svg.
    "/((?!_next|assets|api|favicon.ico|sitemap.xml|__force-global-error__).*)",
  ],
};
