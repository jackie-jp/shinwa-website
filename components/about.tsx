"use client"

import { BadgeDollarSign, Activity, House, Airplay } from "lucide-react";
import { useTranslations } from "next-intl";

// Use short keys because we call useTranslations("About") and then t('q1') resolves to About.q1
const about = [
  { icon: Airplay, q: "q1", a: "a1" },
  { icon: Activity, q: "q2", a: "a2" },
  { icon: House, q: "q3", a: "a3" },
  { icon: BadgeDollarSign, q: "q4", a: "a4" },
  /* { icon: ShieldCheck, q: "q5", a: "a5" }, */
  /* { icon: UserRoundCheck, q: "q6", a: "a6" },*/
];

const ABOUT = () => {
  const t = useTranslations("About");
  return (
    <div
      id="about"
      className="min-h-screen flex items-center justify-center px-6 py-12 xs:py-20"
    >
      <div className="max-w-screen-lg">
        <h2 className="text-3xl xs:text-4xl md:text-5xl !leading-[1.15] font-bold tracking-tight text-center">
          {t("title")}
        </h2>
        <p className="mt-3 xs:text-lg text-center text-muted-foreground">
          {t("description")}
        </p>

        <div className="mt-12 grid md:grid-cols-2 bg-background rounded-xl overflow-hidden outline outline-[1px] outline-border outline-offset-[-1px]">
          {about.map(({ q, a, icon: Icon }) => (
            <div key={q} className="border p-6 -mt-px -ml-px">
              <div className="h-8 w-8 xs:h-10 xs:w-10 flex items-center justify-center rounded-full bg-accent">
                <Icon className="h-4 w-4 xs:h-6 xs:w-6" />
              </div>
              <div className="mt-3 mb-2 flex items-start gap-2 text-lg xs:text-[1.35rem] font-semibold tracking-tight">
                <span>{t(q)}</span>
              </div>
              <p className="text-sm xs:whitespace-pre-line">{t(a)}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ABOUT;
