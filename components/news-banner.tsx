"use client";
import React, { useState, useEffect } from "react";
import { useTranslations } from "next-intl";
import { X, ChevronRight, Sparkles, Bell, Megaphone } from "lucide-react";
import { cn } from "@/lib/utils";
import Link from "next/link";

interface NewsItem {
  id: string;
  type: "release" | "announcement" | "update";
  titleKey: string;
  linkKey?: string;
  href?: string;
}

const NewsBanner = () => {
  const t = useTranslations("NewsBanner");
  const [isVisible, setIsVisible] = useState(true);
  const [currentIndex, setCurrentIndex] = useState(0);

  // 新闻列表配置
  const newsItems: NewsItem[] = [
    {
      id: "brix-opensource",
      type: "release",
      titleKey: "news1",
      linkKey: "learnMore",
      href: "/brix",
    },
  ];

  // 自动轮播
  useEffect(() => {
    if (newsItems.length <= 1) return;
    
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % newsItems.length);
    }, 5000);

    return () => clearInterval(timer);
  }, [newsItems.length]);

  const getIcon = (type: string) => {
    switch (type) {
      case "release":
        return <Sparkles className="h-4 w-4" />;
      case "announcement":
        return <Megaphone className="h-4 w-4" />;
      case "update":
        return <Bell className="h-4 w-4" />;
      default:
        return <Sparkles className="h-4 w-4" />;
    }
  };

  const getGradient = (type: string) => {
    switch (type) {
      case "release":
        return "from-violet-600 via-purple-600 to-indigo-600";
      case "announcement":
        return "from-blue-600 via-cyan-600 to-teal-600";
      case "update":
        return "from-orange-500 via-amber-500 to-yellow-500";
      default:
        return "from-violet-600 via-purple-600 to-indigo-600";
    }
  };

  if (!isVisible) return null;

  const currentNews = newsItems[currentIndex];

  return (
    <div
      className={cn(
        "relative w-full bg-gradient-to-r text-white overflow-hidden",
        getGradient(currentNews.type)
      )}
    >
      {/* 背景装饰 */}
      <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg%20width%3D%2260%22%20height%3D%2260%22%20viewBox%3D%220%200%2060%2060%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%3Cg%20fill%3D%22none%22%20fill-rule%3D%22evenodd%22%3E%3Cg%20fill%3D%22%23ffffff%22%20fill-opacity%3D%220.05%22%3E%3Cpath%20d%3D%22M36%2034v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6%2034v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6%204V0H4v4H0v2h4v4h2V6h4V4H6z%22%2F%3E%3C%2Fg%3E%3C%2Fg%3E%3C%2Fsvg%3E')] opacity-50" />
      
      {/* 动画光效 */}
      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full animate-[shimmer_3s_infinite]" />

      <div className="relative max-w-7xl mx-auto px-4 py-2.5 sm:py-3">
        <div className="flex items-center justify-center gap-x-4 sm:gap-x-6">
          {/* 新闻指示器（多条新闻时显示） */}
          {newsItems.length > 1 && (
            <div className="hidden sm:flex items-center gap-1.5">
              {newsItems.map((_, idx) => (
                <button
                  key={idx}
                  onClick={() => setCurrentIndex(idx)}
                  className={cn(
                    "w-1.5 h-1.5 rounded-full transition-all duration-300",
                    idx === currentIndex
                      ? "bg-white w-4"
                      : "bg-white/40 hover:bg-white/60"
                  )}
                  aria-label={`View news ${idx + 1}`}
                />
              ))}
            </div>
          )}

          {/* 新闻内容 */}
          <div className="flex items-center gap-x-2 sm:gap-x-3 text-sm sm:text-base font-medium">
            {/* 图标 */}
            <span className="flex items-center justify-center shrink-0 rounded-full bg-white/20 p-1.5 backdrop-blur-sm">
              {getIcon(currentNews.type)}
            </span>

            {/* 标签 */}
            <span className="hidden xs:inline-flex items-center rounded-full bg-white/20 px-2.5 py-0.5 text-xs font-semibold backdrop-blur-sm uppercase tracking-wide">
              {t(`tags.${currentNews.type}`)}
            </span>

            {/* 新闻标题 */}
            <span className="truncate max-w-[200px] sm:max-w-md lg:max-w-xl">
              {t(currentNews.titleKey)}
            </span>

            {/* 链接按钮 */}
            {currentNews.href && currentNews.linkKey && (
              <Link
                href={currentNews.href}
                className="group inline-flex items-center gap-x-1 rounded-full bg-white/20 px-3 py-1 text-xs sm:text-sm font-semibold backdrop-blur-sm hover:bg-white/30 transition-all duration-200 whitespace-nowrap"
              >
                {t(currentNews.linkKey)}
                <ChevronRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5" />
              </Link>
            )}
          </div>

          {/* 关闭按钮 */}
          <button
            onClick={() => setIsVisible(false)}
            className="absolute right-2 sm:right-4 top-1/2 -translate-y-1/2 p-1.5 rounded-full hover:bg-white/20 transition-colors"
            aria-label="Close announcement"
          >
            <X className="h-4 w-4" />
          </button>
        </div>
      </div>

      <style jsx>{`
        @keyframes shimmer {
          0% {
            transform: translateX(-100%);
          }
          100% {
            transform: translateX(100%);
          }
        }
      `}</style>
    </div>
  );
};

export default NewsBanner;
