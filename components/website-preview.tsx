"use client";

import Image from "next/image";
import React, { useEffect, useRef, useState } from "react";
import { useTranslations } from "next-intl";

// 预览数据：请把对应预览图放到 public/previews/ 下，例如 preview-1.png
const previews: {
  id: number;
  title: string;
  url: string;
  image: string; // 相对 public 根目录路径
  description?: string;
  tech?: string[];
}[] = [
  {
    id: 1,
    title: "Corporate Portal",
    url: "https://example.com/portal",
    image: "/previews/CorporatePortal.jpg",
    description: "Landing + Auth + Dashboard",
    tech: ["Next.js", "Tailwind", "SSR"],
  },
  {
    id: 2,
    title: "Marketing Site",
    url: "https://example.com/marketing",
    image: "/previews/MarketingSite.jpg",
    description: "Product showcase & blog",
    tech: ["Next.js", "MDX"],
  },
  {
    id: 3,
    title: "Docs Center",
    url: "https://example.com/docs",
    image: "/previews/DocsCenter.jpg",
    description: "Multi-language docs",
    tech: ["i18n", "Contentlayer"],
  },
  {
    id: 4,
    title: "Analytics Panel",
    url: "https://example.com/analytics",
    image: "/previews/AnalyticsPanel.jpg",
    description: "Real-time metrics",
    tech: ["Charts", "Stream"],
  },
  {
    id: 5,
    title: "E-Commerce UI",
    url: "https://example.com/shop",
    image: "/previews/E-Commerce.jpg",
    description: "Storefront + cart",
    tech: ["Next.js", "Stripe"],
  },
];

// 自动横向滚动 hook（无侵入，可关闭）
// 修正类型：允许 ref.current 为 null，避免 RefObject<HTMLDivElement | null> 不兼容报错
function useAutoScroll(ref: React.RefObject<HTMLDivElement | null>, speed = 0.35) {
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    let req: number;
    const loop = () => {
      // 每帧移动，循环滚动
      if (el.scrollWidth > el.clientWidth) {
        el.scrollLeft += speed;
        // 到尾部后无缝回卷
        if (el.scrollLeft + el.clientWidth >= el.scrollWidth - 1) {
          el.scrollLeft = 0;
        }
      }
      req = requestAnimationFrame(loop);
    };
    req = requestAnimationFrame(loop);
    return () => cancelAnimationFrame(req);
  }, [ref, speed]);
}

// 单个预览卡片
const PreviewCard: React.FC<{ p: (typeof previews)[number]; onOpen: (p: (typeof previews)[number]) => void; viewLabel: string }> = ({ p, onOpen, viewLabel }) => {
  const [imgError, setImgError] = useState(false);
  return (
    <div className="group relative w-[420px] shrink-0 rounded-xl border border-border bg-accent/40 backdrop-blur-sm overflow-hidden hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
      <div className="relative h-56 w-full bg-muted/40 overflow-hidden">
        {!imgError ? (
          <Image
            src={p.image}
            alt={p.title}
            fill
            sizes="420px"
            className="object-cover object-top group-hover:scale-105 transition-transform duration-500"
            onError={() => setImgError(true)}
            priority={p.id < 3}
          />
        ) : (
          <div className="flex items-center justify-center h-full text-xs text-muted-foreground">
            Missing image
          </div>
        )}
        <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(to_top,rgba(0,0,0,0.55)_0%,rgba(0,0,0,0.15)_40%,transparent_70%)]" />
        <div className="absolute bottom-2 left-3 right-3 text-white drop-shadow">
          <h3 className="text-lg font-semibold leading-tight line-clamp-1">
            {p.title}
          </h3>
          {p.description && (
            <p className="text-[13px] opacity-90 line-clamp-1">
              {p.description}
            </p>
          )}
        </div>
      </div>
      <div className="p-4 flex flex-col gap-3">
        {p.tech && (
          <div className="flex flex-wrap gap-1.5">
            {p.tech.map((t) => (
              <span
                key={t}
                className="rounded-full bg-primary/10 text-primary border border-primary/20 px-2 py-0.5 text-[11px] font-medium tracking-wide"
              >
                {t}
              </span>
            ))}
          </div>
        )}
        <button
          type="button"
          onClick={() => onOpen(p)}
          className="text-sm font-medium text-primary hover:underline inline-flex items-center gap-1 focus:outline-none focus-visible:ring-2 focus-visible:ring-primary/50 rounded"
        >
          {viewLabel} <span aria-hidden>→</span>
        </button>
      </div>
      <div className="absolute inset-0 ring-0 group-hover:ring-2 ring-primary/40 rounded-xl transition-all duration-300 pointer-events-none" />
    </div>
  );
};

// 主组件：横向滚动预览
const WebsitePreview: React.FC = () => {
  const trackRef = useRef<HTMLDivElement | null>(null);
  const [active, setActive] = useState<(typeof previews)[number] | null>(null);
  useAutoScroll(trackRef, 0.4); // 可调速度
  const t = useTranslations("WebsitePreview");

  // ESC 关闭
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setActive(null);
    };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, []);

  return (
  <section id="website-preview" className="py-24 relative">
      <div className="mx-auto max-w-screen-xl px-6">
        <header className="mb-12 flex flex-col items-center gap-4">
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-center">
            {t("title")}
          </h2>
          <p className="text-muted-foreground text-center max-w-2xl text-sm md:text-base">
            {t("description")}
          </p>
        </header>
      </div>
      <div className="relative">
        {/* 渐隐遮罩 */}
        <div className="pointer-events-none absolute left-0 top-0 h-full w-32 bg-gradient-to-r from-background to-transparent z-20" />
        <div className="pointer-events-none absolute right-0 top-0 h-full w-32 bg-gradient-to-l from-background to-transparent z-20" />
        <div
          ref={trackRef}
          className="overflow-x-auto scrollbar-none flex gap-6 px-8 py-4 [scrollbar-width:none] [-ms-overflow-style:none] group"
          // 鼠标悬浮时停止自动滚动：通过 data-paused 标记
          onMouseEnter={() => {
            if (trackRef.current) trackRef.current.dataset.paused = "true";
          }}
          onMouseLeave={() => {
            if (trackRef.current) trackRef.current.dataset.paused = "false";
          }}
        >
          {/* 复制一份实现无缝循环感（视觉上） */}
          {[...previews, ...previews].map((p, i) => (
            <PreviewCard key={`${p.id}-${i}`} p={p} onOpen={setActive} viewLabel={t("view")} />
          ))}
        </div>
      </div>
      {/* Lightbox */}
      {active && (
        <div
          className="fixed inset-0 z-[100] flex items-center justify-center bg-black/80 backdrop-blur-sm p-4 animate-in fade-in"
          role="dialog"
          aria-modal="true"
          aria-label={active.title}
          onClick={() => setActive(null)}
        >
          <div
            className="relative max-w-6xl w-full rounded-xl overflow-hidden shadow-2xl ring-1 ring-white/15 bg-background/90"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              type="button"
              onClick={() => setActive(null)}
              className="absolute top-3 right-3 z-10 rounded-full bg-black/60 text-white w-8 h-8 flex items-center justify-center text-sm hover:bg-black/70 focus:outline-none focus-visible:ring-2 focus-visible:ring-primary"
              aria-label="Close preview"
            >
              ✕
            </button>
            <div className="relative w-full h-[60vh] min-h-[400px] bg-black">
              <Image
                src={active.image}
                alt={active.title}
                fill
                className="object-contain"
                sizes="100vw"
                priority
              />
            </div>
            <div className="p-5 flex flex-col gap-3 md:flex-row md:items-center md:justify-between">
              <div>
                <h3 className="text-xl font-semibold leading-tight">{active.title}</h3>
                {active.description && (
                  <p className="text-sm text-muted-foreground mt-1 max-w-xl">
                    {active.description}
                  </p>
                )}
              </div>
              <div className="flex items-center gap-2 flex-wrap">
                {active.tech?.map(t => (
                  <span
                    key={t}
                    className="rounded-full bg-primary/10 text-primary border border-primary/20 px-2 py-0.5 text-[11px] font-medium"
                  >
                    {t}
                  </span>
                ))}
                {/* {active.url && (
                  <Link
                    href={active.url}
                    target="_blank"
                    className="text-sm font-medium text-primary hover:underline"
                  >
                    Open Site ↗
                  </Link>
                )} */}
              </div>
            </div>
          </div>
        </div>
      )}
      <style jsx global>{`
        .scrollbar-none::-webkit-scrollbar { display: none; }
        [data-paused='true'] { scroll-behavior: auto; }
      `}</style>
    </section>
  );
};

export default WebsitePreview;
