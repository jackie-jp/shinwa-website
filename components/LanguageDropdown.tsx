"use client";
import { Button } from "@/components/ui/button";
import { useTranslations } from "next-intl";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuRadioGroup,
  DropdownMenuRadioItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { useLocale } from "next-intl";
import { usePathname, useRouter } from "next/navigation";
import { useTransition } from "react";

export default function LanguageDropdown() {
  const [isPending, startTransition] = useTransition();
  const router = useRouter();
  const localActive = useLocale();

  const pathname = usePathname() || "/";

  const onSelectChange = (value: string) => {
    startTransition(() => {
      try {
        // Build the path without locale prefix and replace with new locale
        const segments = (pathname || '/').split("/").filter(Boolean);
        if (["en", "zh", "ja"].includes(segments[0])) segments.shift();
        const newPath = `/${value}${segments.length ? '/' + segments.join('/') : ''}`;
        if (!router || typeof router.replace !== 'function') {
          console.error('Router not available when changing language', { router, newPath });
          return;
        }
        try {
          router.replace(newPath);
        } catch (err) {
          console.error('Error during router.replace in LanguageDropdown:', err, { newPath });
        }
      } catch (err) {
        console.error('Unexpected error switching language:', err);
      }
    });
  };
  const t = useTranslations("LanguageDropdown");
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="outline" disabled={isPending}>
          {t("language")}
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-30">
        <DropdownMenuRadioGroup
          value={localActive}
          onValueChange={onSelectChange}
        >
          <DropdownMenuRadioItem value="ja">日本語</DropdownMenuRadioItem>
          <DropdownMenuRadioItem value="en">English</DropdownMenuRadioItem>
          <DropdownMenuRadioItem value="zh">中文</DropdownMenuRadioItem>
        </DropdownMenuRadioGroup>
        
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
