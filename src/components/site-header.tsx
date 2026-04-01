import Link from "next/link";

const nav = [
  { href: "/who-we-are", label: "Who we are" },
  { href: "/what-we-do", label: "What we do" },
  { href: "/how-to-join", label: "How to join" },
] as const;

export function SiteHeader() {
  return (
    <header className="w-full border-b border-border bg-background">
      <div className="mx-auto flex h-14 max-w-6xl items-center justify-between gap-4 px-4 md:h-16 md:px-6 lg:px-8">
        <Link
          href="/"
          className="text-sm font-semibold tracking-tight text-foreground transition-colors hover:text-foreground/80 md:text-base"
        >
          Aloo Tikki Hedge Fund
        </Link>
        <nav className="flex flex-wrap items-center justify-end gap-x-4 gap-y-1 text-xs font-medium text-muted-foreground md:gap-x-8 md:text-sm">
          {nav.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="transition-colors hover:text-foreground"
            >
              {item.label}
            </Link>
          ))}
        </nav>
      </div>
    </header>
  );
}
