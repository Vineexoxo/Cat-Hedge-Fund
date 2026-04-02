"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

function isActivePath(pathname: string, href: string) {
  if (href === "/") return pathname === "/";
  return pathname === href || pathname.startsWith(`${href}/`);
}

const nav = [
  { href: "/who-we-are", label: "Who we are" },
  { href: "/what-we-do", label: "What we do" },
  { href: "/how-to-join", label: "How to join" },
] as const;

export function SiteHeader() {
  const pathname = usePathname() ?? "/";

  return (
    <header className="w-full border-b border-border bg-background">
      <div className="mx-auto flex min-h-[4.25rem] max-w-6xl flex-col justify-center gap-2.5 px-4 py-2.5 sm:min-h-0 sm:h-16 sm:flex-row sm:items-center sm:justify-between sm:gap-4 sm:py-0 md:h-[4.75rem] md:px-6 lg:h-20 lg:px-8">
        <Link
          href="/"
          className="shrink-0 text-lg font-medium leading-snug tracking-tight text-foreground transition-colors hover:text-foreground/80 sm:text-base md:text-lg lg:text-xl"
        >
          Aloo Tikki Hedge Fund
        </Link>
        <nav className="flex flex-wrap items-start gap-x-4 gap-y-2.5 text-base font-medium leading-snug text-muted-foreground sm:items-center sm:justify-end sm:gap-x-5 sm:text-sm md:gap-x-7 md:text-base lg:gap-x-9">
          {nav.map((item) => (
            (() => {
              const active = isActivePath(pathname, item.href);
              return (
            <Link
              key={item.href}
              href={item.href}
              aria-current={active ? "page" : undefined}
              className={[
                "py-0.5 transition-colors sm:py-0",
                active
                  ? "text-[#0BDA51]"
                  : "hover:text-foreground",
              ].join(" ")}
            >
              {item.label}
            </Link>
              );
            })()
          ))}
        </nav>
      </div>
    </header>
  );
}
