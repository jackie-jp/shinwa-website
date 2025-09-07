"use client";
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
} from "@/components/ui/navigation-menu";
import { NavigationMenuProps } from "@radix-ui/react-navigation-menu";
import Link from "next/link";
import { useTranslations, useLocale } from "next-intl";
import { usePathname } from "next/navigation";

export const NavMenu = (props: NavigationMenuProps) => {
  const t = useTranslations("nav-menu");
  const locale = useLocale();
  const pathname = usePathname() || "/";

  const makeAnchor = (anchor: string) => {
    // Ensure we point to the root of the current locale and add the anchor
    // If pathname already contains the locale prefix, strip it to avoid duplication
    const segments = pathname.split("/").filter(Boolean);
    if (["en", "ja", "zh"].includes(segments[0])) segments.shift();
    const base = `/${locale}${segments.length ? '/' + segments.join('/') : ''}`;
    return `${base}#${anchor}`;
  };

  return (
    <NavigationMenu {...props}>
      <NavigationMenuList className="gap-6 space-x-0 data-[orientation=vertical]:flex-col data-[orientation=vertical]:items-start">
        <NavigationMenuItem>
          <NavigationMenuLink asChild>
            <Link href={makeAnchor('hero')}>{t("home")}</Link>
          </NavigationMenuLink>
        </NavigationMenuItem>
        {/* <NavigationMenuItem>
          <NavigationMenuLink asChild>
            <Link href="#">Blog</Link>
          </NavigationMenuLink>
        </NavigationMenuItem> */}
        <NavigationMenuItem>
          <NavigationMenuLink asChild>
            <Link href={makeAnchor('about')}>{t("about")}</Link>
          </NavigationMenuLink>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <NavigationMenuLink asChild>
            <Link href={makeAnchor('solution')}>{t("solution")}</Link>
          </NavigationMenuLink>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <NavigationMenuLink asChild>
            <Link href={makeAnchor('website-preview')}>{t("websitePreview")}</Link>
          </NavigationMenuLink>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <NavigationMenuLink asChild>
            <Link href={makeAnchor('contact')}>{t("contactUs")}</Link>
          </NavigationMenuLink>
        </NavigationMenuItem>
      </NavigationMenuList>
    </NavigationMenu>
  );
};
