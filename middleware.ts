import { NextRequest, NextResponse } from 'next/server';
import createMiddleware from 'next-intl/middleware';

const nextIntlMiddleware = createMiddleware({
  // A list of all locales that are supported
  locales: ['en', 'ja', 'zh'],

  // If this locale is matched, pathnames work without a prefix (e.g. `/about`)
  defaultLocale: 'ja'
});

export default function middleware(req: NextRequest) {
  const { nextUrl } = req;

  // Force root path to Japanese to ensure each new login/visit lands on /ja
  if (nextUrl.pathname === '/') {
  const url = new URL(req.url);
  url.pathname = '/ja';
  return NextResponse.redirect(url);
  }

  // Delegate all other behavior to next-intl middleware
  return nextIntlMiddleware(req);
}

export const config = {
  // Skip all paths that should not be internationalized. This example skips
  // certain folders and all pathnames with a dot (e.g. favicon.ico)
  matcher: ['/((?!api|_next|_vercel|.*\\..*).*)']
};
