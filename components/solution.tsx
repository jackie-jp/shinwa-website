"use client";
import { Badge } from "@/components/ui/badge";
import { useTranslations } from "next-intl";

const Solution = () => {
  const t = useTranslations("Solution");
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
          {/* CTA buttons removed */}
        </div>
        <div className="relative lg:max-w-lg xl:max-w-xl w-full bg-accent rounded-xl aspect-square">
          <img src="/EDA.png" alt="Logo" className="h-90 w-auto" />
        </div>
      </div>
    </div>
  );
};

export default Solution;
