import { TooltipProvider } from "@/components/ui/tooltip";
import { NextIntlClientProvider } from "next-intl";
import { getMessages } from "next-intl/server";
import type { Metadata } from "next";
import { ThemeProvider } from "next-themes";
import { Geist } from "next/font/google";
import DevtoolsCleanup from '@/components/devtools-cleanup';

const geistSans = Geist({
  subsets: ["latin"],
});

export async function generateMetadata({ params }: { params?: Promise<{ locale: string }> }): Promise<Metadata> {
  const resolvedParams = await params;
  const locale = resolvedParams?.locale ?? 'ja';
  const messages = await getMessages({ locale });

  const title = messages?.Site?.title ?? messages?.Hero?.title ?? 'Shinwa';
  const description = messages?.Site?.description ?? messages?.Hero?.description ?? 'A beautiful landing page built with Shadcn UI.';

  return {
    title,
    description,
    keywords: [
      'PureLanding',
      'Shadcn UI',
      'Landing Page',
      'Tailwind CSS',
    ],
    openGraph: {
      type: 'website',
      siteName: 'PureLanding',
      locale: locale === 'ja' ? 'ja_JP' : locale === 'zh' ? 'zh_CN' : 'en_US',
      url: 'https://shadcn-landing-page.vercel.app',
      title,
      description,
      images: [
        {
          url: '/preview.png',
          width: 1200,
          height: 630,
          alt: title,
        },
      ],
    },
    authors: [
      { name: '', url: 'https://shadcnui-blocks.com' },
    ],
    creator: '',
    icons: {
      icon: '/favicon-32x32.png',
      apple: '/apple-touch-icon.png',
      shortcut: '/favicon-16x16.png',
    },
    robots: { index: true, follow: true },
    manifest: '/site.webmanifest',
  } as Metadata;
}

export default async function RootLayout({ children, params }: { children?: React.ReactNode; params?: Promise<{ locale: string }> }) {
  // Next's generated LayoutProps types params as an optional Promise. Await it
  // and handle the undefined case with a fallback locale.
  const resolvedParams = await params;
  const locale = resolvedParams?.locale ?? 'ja';
  const messages = await getMessages({ locale });
  return (
    <html lang={locale} suppressHydrationWarning data-no-flash style={{ visibility: 'hidden' }}>
      <head>
        {/* Critical inline style to hide devtools indicator before paint */}
  <style id="devtools-inline-hide" dangerouslySetInnerHTML={{ __html: `#devtools-indicator, .devtools-indicator, [data-devtools-indicator], [data-nextjs-dev-overlay], [id*="devtools"], [class*="devtools"] { display: none !important; visibility: hidden !important; pointer-events: none !important; opacity: 0 !important; }` }} />
  {/* Hide entire document until client cleanup removes data-no-flash to avoid flash of injected devtools */}
  <style dangerouslySetInnerHTML={{ __html: `html[data-no-flash] { visibility: hidden !important; }` }} />
  {/* Immediate DOM-removal script removed to prevent hydration mismatches; DevtoolsCleanup runs on client after hydration. */}
      </head>
      <body className={`${geistSans.className} antialiased`}>
        <NextIntlClientProvider locale={locale} messages={messages}>
          <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
            <DevtoolsCleanup />
            <TooltipProvider>{children}</TooltipProvider>
          </ThemeProvider>
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
