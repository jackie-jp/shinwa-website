"use client";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { useTranslations, useLocale } from "next-intl";
import { ArrowUpRight, FileText } from "lucide-react";
import Link from "next/link";

const Solution = () => {
  const t = useTranslations("Solution");
  const locale = useLocale();
  return (
  <div id="solution" className="min-h-[calc(100vh-4rem)] w-full flex items-center justify-center overflow-hidden border-b border-accent">
      <div className="max-w-screen-xl w-full flex flex-col lg:flex-row mx-auto items-center justify-between gap-y-14 gap-x-10 px-6 py-12 lg:py-0">
        <div className="max-w-xl">
          <Badge className="rounded-full py-1 border-none">
            {t("badge")}
          </Badge>
          <h1 className="mt-6 max-w-[20ch] text-3xl xs:text-4xl sm:text-5xl lg:text-[2.75rem] xl:text-5xl font-bold !leading-[1.2] tracking-tight">
            {t("title")}
          </h1>
          <p className="mt-6 max-w-[60ch] xs:text-lg">{t("desc1")}</p>
          <p className="mt-6 max-w-[60ch] xs:text-lg">{t("desc2")}</p>
          <p className="mt-6 max-w-[60ch] xs:text-lg">{t("desc3")}</p>
          <div className="mt-8 flex flex-col sm:flex-row items-start sm:items-center gap-4">
            <a href="https://github.com/brix-kit-dev/brix" target="_blank" rel="noopener noreferrer">
              <Button size="lg" className="rounded-full text-base">
                GitHub <ArrowUpRight className="!h-5 !w-5" />
              </Button>
            </a>
            <Link href={`/${locale}/brix`}>
              <Button variant="outline" size="lg" className="rounded-full text-base shadow-none">
                <FileText className="!h-5 !w-5" /> {t("details")}
              </Button>
            </Link>
          </div>
        </div>
        <div className="relative lg:max-w-lg xl:max-w-xl w-full bg-accent rounded-xl aspect-square">
          <img src="/EDA.png" alt="Logo" className="h-90 w-auto" />
        </div>
      </div>
    </div>
  );
};

export default Solution;
